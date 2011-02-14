// define easing
jQuery.easing.def = "easeOutExpo";



jQuery(document).ready(function($) {
	
	
	var pip 	= new F.Pip();
	var page 	= new F.Page();
	var meta	= new F.Meta();
	
	
	$('.tabs').tabs({
		fx: {
			opacity: 'toggle'
		}
	});
	
	
	$('.disabled').bind('focus', function(event) {
		$(this).blur();
	});
	
	
	// Calculate button
	$('#headerMenu li:eq(1)').bind('click', function(event) {
		
		$('#productsMenu li').unbind('click').bind('click', function(event) {
			var $product = $(this).attr('class').split(' ');
			page.hidePip();
			page.setActiveProduct($product[0], true);
			page.showProduct($product[0]);
		});
		
		$('#productsMenu p').fadeIn();
		
		page.setActiveProduct();
		page.hideWrapper();
		page.hidePip();
		page.hideProduct();
		
	});
	
	
	//var samplesPrDayValue = pip.Generic[pip.Data.product][page.currency]['samplesPrDay'];
	//$('#samples_pr_day').val(samplesPrDayValue);
	
	
	$('#productionVolumePrYear').bind('change', function() {
		if($(this).val() != '') {
			var prod = page.setProduct($(this).val());
		} else {
			page.setProduct();
		}
	});
	
	
	$('#calculateYourProfit').bind('click', function(event) {
		
		// Validate
		var $a = page.preCalculate(pip.Data.product, $('#samplesPrDay_pre').val());
		($a == -1) ? $('#production_volume_pr_year').css({color: '#e8782f'}) : $('#production_volume_pr_year').css({color: '#909090'});
		($a == -2) ? $('#samples_pr_day').css({color: '#e8782f'}) : $('#samples_pr_day').css({color: '#909090'});
		
		$('#productsMenu li').unbind('click').bind('click', function(event) {
			
			var $product = $(this).attr('class').split(' ');
			if($product[0] != 'fiastar') {
				page.switchPip($product[0]);
			} else {
				page.showFiastar();
			}
			
			page.setActiveProduct($product[0]);
			
		});
		
	});
	
	
	$('#productsMenu li').bind('click', function(event) {
		
		var $product = $(this).attr('class').split(' ');
		page.hidePip();
		page.showProduct($product[0]);
		page.setActiveProduct($product[0], true);
		
	});
	
	
	$('#pipCalculator input').bind('keyup', function(event) {
		
		var $id = $(this).attr('id');
		var $value = $(this).attr('value');
		
		if($value <= 0) {
			$value = '0';
		}
		pip.setGeneValue($id, $value.replace(',', '.'));
		page.Calculate();
		
		pip.saveData();
	});
	
	
	/*$('.files a').bind('click', function(event) {
		
		var path = 'files/';
		
		if(meta.Data.isLogged == true) {
			window.location = path+$(this).attr('href');
		} else {
			alert("Please register to get access to these files!\n\nNote:\nAlso, be sure to have cookies enabled!");
		}
		
		return false;
		
	});*/
	
	
	
	
	
	/*
	$('#debug').bind('click', function(event) {
		meta.Data.isLogged = true;
		meta.saveMeta();
	});
	*/
	
	
});