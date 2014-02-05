yasSlide
========

Div Background  slideshow with pre-loading of images and auto resizing

A really simple div background slideshow jquery plugin using CSS3 transitions for a smooth fade between slides.

*How does it work?*

Simple. Create a div, populate an array with your files and then call yasslide - it's as easy as that!

*Example*

<pre>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style>
html { height:100%; }
body { position:absolute; top:0; bottom:0; right:0; left:0; background:#09F;padding:0;margin:0;overflow:hidden;}
#footer {position:relative;bottom: 0; left:0; width:100%;height:60px;background:#666;}
#header {position:relative;top: 0; left:0; width:100%;height:60px;background:#666;  float-left;}
#content {position: relative;height: 100%;padding:0;margin:0;}
</style>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/yasslide.js"></script>
<script>
$(document).ready(function(){
	$('#content').height($('body').outerHeight()-$('#header').outerHeight()-$('#footer').outerHeight()-21);
  files=['http://myserver.com/images/slide01.jpg','http://myserver.com/images/slide02.jpg','http://myserver.com/images/slide03.jpg'];
  $('#content').yasslide({
		   delay: 3000,  // optional - delay in milli-seconds
		   files: files, // an array of image files
		   debug: true, //optional - output messages to console.log
		   //top: '0px' optional - depending on your container div, where to create the floating div.  try without first.
		   });
});
</script>
		</head>

<body>
<div class='wrapper'>
    <div id='header'>Header Text</div>
    <div id='content'></div>
    <div id='footer'>Footer Text</div>
</div>
</body>
</html>
</pre>
