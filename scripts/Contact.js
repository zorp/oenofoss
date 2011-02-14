jQuery(document).ready(function($) {
	
	var meta	= new F.Meta();
	var pip		= new F.Pip();
	var page	= new F.Page();
	
	$('#productsMenu li').unbind('click');
	
	page.Calculate();
	
	var data = {};
	data.pipDataResults		= pip.Data.results;
	data.pipDataGeneric		= pip.Generic[pip.Data.product]['eu'];
	data.userData			= $('#contactForm').serializeArray();
	
	console.log(data);
	console.log($.param(data));
	
	$('#contactForm').bind('submit', function(event) {
		
		var $data = '';
		
		$.ajax({
			url: "http://foss.verk.dk/oenofoss/jsonp.php",
			dataType: "jsonp",
			jsonp: 'storeReply',
			data: $data,
		
			beforeSend: function() {
				//called before send
			},
			complete: function() {
				//called when complete
			},
			success: function($output) {
				console.log($output);
			},
			error: function() {
				//called when there is an error
			},
		});
		
		return false;
		
	});
	
	
	function validate(data) {
		var fails = new Array();
		for(i in data) {
			if(data[i].length <= 0) {
				fails.push(i);
			}
		}
		if(fails.length >= 0) {
			return fails;
		} else {
			return true;
		}
	}
	
	
});
