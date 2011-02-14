// define easing
jQuery.easing.def = "easeOutExpo";

jQuery(document).ready(function($) {
	
	
	var page = new F.Page();
	var lang = page.lang;
	
	
	var compareArrows = $('.innerArrow');
	$('img:first', compareArrows).hide();
	
	$('.innerArrow').hover(function(e) {
		
		var row = $(this).attr('class').split(' ');
		var className = $(this).parent().attr('id');
		tableOver(className, row[1].slice(1));
		
		$('div', $(this)).css({color: '#fff'});
		$('img', $(this)).toggle();
		
	}, function() {
				
		var row = $(this).attr('class').split(' ');
		var className = $(this).parent().attr('id');
		tableOut(className, row[1].slice(1));
			
		$('div', $(this)).css({color: '#97a4b3'});
		$('img', $(this)).toggle();
		
	});
	
	
	function tableOver(className,row) {
		var $rows = $('.'+className+' tr');
		var $tds = $('td:eq('+row+'), td.highlight', $rows);
		
		$tds.css({
			backgroundColor: '#b5c0c9',
			color: '#000'
		});
	}
	
	function tableOut(className,row) {
		var $rows = $('.'+className+' tr');
		var $tds = $('td:eq('+row+'), td.highlight', $rows);
		
		$tds.css({
			backgroundColor: '#8499ac',
			color: '#003362'
		});
	}
	
});
