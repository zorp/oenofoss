F.create('Page', {
	
	// Properties
	lang: 'uk',
	currency: 'eu',
	currencyClean: 'Euro',
	numberSeperator: '.',
	decimalSeperator: ',',
	midWrapShown: false,
	shown: null,
	
	
	// Constructor
	init: function() {
		var $lang = $(document).getUrlParam('lang');
		if($lang != null) {
			this.lang = $lang;
		}
		this.setCurrency(this.lang);
	},
	
	
	// Methods
	setCurrency: function(lang) {
		
		var $currency = '';
		
		switch(lang) {
			case 'us':
				this.currencyClean		= 'USD';
				this.numberSeperator	= ',';
				this.decimalSeperator	= '.'
				this.currencySign		= '$';
				this.currency			= 'us';
			break;
			case 'au':
				this.currencyClean		= 'AUD';
				this.numberSeperator	= ',';
				this.decimalSeperator	= '.'
				this.currencySign		= '$';
				this.currency			= 'au';
			break;
			default:
				this.currencyClean		= 'Euro';
				this.numberSeperator	= '.';
				this.decimalSeperator	= ','
				this.currencySign		= '€';
				this.currency			= 'eu';
			break;
		}
		
		$('.currency').empty().append(this.currencyClean);
		return this.currency;
	},
	
	setProduct: function(product) {
		
		var p = new F.Pip();
		var ro = new Object();
		
		if(product == '') {
			p.Data.product = null;
			p.Data.productName = null;
			return false;
		}
		
		switch(product) {
			
			case 'oenofoss':
				ro.name		= 'OenoFoss&#8482;';
				ro.value	= '10.000 HL';
			break;

			case 'wineScanBasic':
				ro.name		= 'WineScan Basic&#8482;';
				ro.value	= '10-15.000 HL';
			break;

			case 'wineScan':
				ro.name		= 'WineScan&#8482;';
				ro.value 	= '15,000 HL';
			break;
			
			case 'fiastar':
				ro.name		= 'FiaStar&#8482;';
			break;
			
		}
		
		if(product != 'fiastar') {
			p.Data.product 		= product;
		}
		p.Data.productName 	= ro.name;
		
		return ro;
		
	},
	
	setActiveProduct: function(product, isText) {
		var lang = this.lang;
		var text = (isText) ? product : 'basedonyourdata';
		
		if(product) {
			$('#midWrapper div.textWrapper').empty().append('<img src="images/text_'+lang+'_'+text+'.gif" />').fadeIn();
			$('#productsMenu li').removeClass('active');
			$('#productsMenu li.'+product).addClass('active');
			$('.productTitle').show();
			$('.productTitle', $('#productsMenu li.'+product)).hide();
			$('.productTitleActive').hide();
			$('.productTitleActive', $('#productsMenu li.'+product)).show();
		} else {
			$('#midWrapper div.textWrapper').fadeOut('fast');
			$('#productsMenu li').removeClass('active');
			$('.productTitle').show();
			$('.productTitleActive').hide();
		}
	},
	
	
	preCalculate: function(a,b) {
		if(a == null) {
			return -1;
		}
		if(b == '') {
			return -2;
		}
		
		
		var pip 					= new F.Pip();
		var FossData 				= pip.Foss[pip.Data.product][this.currency];
		var GeneData 				= pip.Generic[pip.Data.product][this.currency];
		
		FossData.testingDaysPrYear 	= GeneData.testingDaysPrYear;
		FossData.hourWage			= GeneData.hourWage;
		FossData.samplesPrDay 		= parseInt(b);
		var FossResult 				= pip.Calculate(FossData);
		this.fillPip(FossResult, true);
		
		
		GeneData.samplesPrDay 		= parseInt(b);
		GeneData.totalAnalysisCost	= FossResult.totalAnalysisCost;
		var GeneResult 				= pip.Calculate(GeneData);
		this.fillPip(GeneResult, false);
		
		this.setActiveProduct(pip.Data.product);
		this.showPip(pip.Data.product);
		
	},
	
	
	Calculate: function() {
		
		var pip 					= new F.Pip();
		var ResultData				= pip.Data.results;
		var FossData 				= pip.Foss[pip.Data.product][this.currency];
		var GeneData 				= pip.Generic[pip.Data.product][this.currency];
		
		
		FossData.testingDaysPrYear 	= GeneData.testingDaysPrYear;
		FossData.hourWage			= GeneData.hourWage;
		FossData.samplesPrDay 		= GeneData.samplesPrDay;
		var FossResult				= pip.Calculate(FossData);
		
		FossData.totalSamplesPrYear	= FossResult.totalSamplesPrYear
		FossData.totalAnnualCost	= FossResult.totalAnnualCost
		FossData.totalLabourCost	= FossResult.totalLabourCost
		FossData.totalAnalysisCost	= FossResult.totalAnalysisCost
		
		this.fillPip(FossResult, true);
		
		
		GeneData.totalAnalysisCost	= ResultData.totalAnalysisCost;
		var GeneResult				= pip.Calculate(GeneData);
		this.fillPip(GeneResult, false);
		
	},
	
	
	fillPip: function(result, isFoss) {
		for(id in result) {
			var selector = '#'+id;
			if(isFoss) {
				selector += '_Foss';
			}
			var res = result[id];
			
			if(id == 'totalSamplesPrYear' || id == 'totalAnnualCost' || id == 'totalLabourCost' || id == 'totalAnalysisCost') {
				res = number_format(res, 0, this.decimalSeperator, this.numberSeperator);
			}
			if(id == 'annualCostSavings') {
				res = this.currencySign+number_format(res, 0, this.decimalSeperator, this.numberSeperator);
			}
			if(id == 'paybackTime') {
				res = res.toFixed(1)+' years';
			}
			
			$(selector).attr('value', res);
		}
	},
	
	
	showWrapper: function(product) {
		
		var lang = this.lang;
		
		if(this.midWrapShown == false) {
			
			this.midWrapShown = true;
			
			$('#midWrapper').animate({
				height: '70px'
			}, 700, 'easeOutBack').children('.wrapper:not(.textWrapper)').fadeOut('slow');
			
		}
		
	},
	
	
	hideWrapper: function() {
		
		if(this.midWrapShown == true) {
			
			this.midWrapShown = false;
			
			$('#midWrapper div.textWrapper').empty().fadeOut('fast', function() {
				$('#midWrapper').animate({
					height: '311px'
				}, 700, 'easeOutBack').children('.wrapper:not(.textWrapper)').fadeIn('slow');
			});
			
			$('#productsMenu li').removeClass('active');
			$('.botContent').slideUp();
		}
		
	},
	
	
	showPip: function(product) {
		
		var pip = new F.Pip();
		this.shown = 'pip';
		this.hideFiastar();
		
		$('.productName').empty().append(pip.Data.productName);
		
		this.showWrapper();
		this.pipArrow();
		
		this.hideProduct();
		$('#pipContainer').fadeIn('fast');
		$('#productsMenu p').fadeOut();
		$('.botContent').fadeIn();
		$('.botMidWrapper').slideDown();
		
	},
	
	
	hidePip: function() {
		$('#pipContainer').slideUp(450);
	},
	
	
	pipArrow: function() {
		var page = new F.Page();
		var pip = new F.Pip();
		
		$('.showProduct').unbind('click').bind('click', function(event) {
			
			$('#productsMenu li').unbind('click').bind('click', function(event) {

				var $product = $(this).attr('class').split(' ');

				page.hidePip();
				page.showProduct($product[0]);
				page.setActiveProduct($product[0], true);

			});
			
			page.setActiveProduct(pip.Data.product, true);
			page.showProduct(pip.Data.product);
			return false;
		});
	},
	
	
	switchPip: function(product) {
		
		this.hideFiastar();
		
		var page		= new F.Page();
		var pip 		= new F.Pip();
		var newData		= new Object();
		var data		= new Array('samplesPrDay', 'testingDaysPrYear', 'totalMaterialCost', 'timeSpend', 'hourWage');
		var geneData	= pip.Generic[pip.Data.product][this.currency];
		
		for(i in geneData) {
			if(in_array(i, data)) {
				newData[i] = geneData[i];
			}
		}
		
		page.setProduct(product);
		page.pipArrow();
		var productData = pip.Generic[pip.Data.product][this.currency];
		
		for(i in newData) {
			productData[i] = newData[i];
		}
		
		$('#productsMenu li').removeClass('active');
		
		if(this.shown != 'pip') {
			page.Calculate();
			this.showPip();
		} else {
		
			$('.botMidWrapper').slideUp(450, function() {
				$('.productName').empty().append(pip.Data.productName);
				page.Calculate();
				$(this).slideDown();
			});
			
		}
		
	},
	
	
	showFiastar: function() {
		this.shown = 'fiastar';
		this.hidePip();
		$('#pipFiastar').fadeIn();
	},
	
	
	hideFiastar: function() {
		$('#pipFiastar').fadeOut();
	},

	
	showProduct: function(product) {
		
		var pip = new F.Pip();
		this.shown = 'product';
		this.hideFiastar();
		this.hidePip();
		
		$('#productsMenu li').removeClass('active');
		$('#prod_wineScan, #prod_wineScanBasic, #prod_oenofoss, #prod_fiastar').slideUp();
		
		this.setProduct(product);
		
		$('.'+product).addClass('active');
		$('.productName').empty().append(pip.Data.productName);
		$('#prod_'+product).slideDown();
		
		
		this.showWrapper(product);
		
		this.hidePip();
		$('#prodContainer').fadeIn('fast');
		$('.botContent').fadeIn();
		$('.botMidWrapper').slideDown();
		$('#productsMenu p').fadeOut();
		
	},
	
	
	hideProduct: function() {
		$('#prodContainer').slideUp(450);
	}
	
	
});