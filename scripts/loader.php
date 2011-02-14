<?php
	
	header('Content-type: application/javascript');
	
	$base = './';
	$files = $_GET['f'];
	$split = explode('|', $files);
	$js = '';
	foreach($split as $file) {
		$js .= file_get_contents($base . $file . '.js');
	}
	
	print $js;