/*!
 * yasSlide - Yet Another Simple Slideshow
 * Original author: Chris Backhouse (@_chrisbackhouse)
 * Based on jQuery Plugin Template by: @ajpiano & @addyosmani
 * Licensed under the MIT license
 */

(function($){

var yasSlide = function(element, options)
{
		var element = $(element);
		var obj = this;
		var options = $.extend({
			   delay: 5000,
				debug: false
			}, options || {});
	  
		var bgObj, bgObj2, imgObj, cur_img, next_img, files, img_num;
		
		$.fn.changeSlide = function () {
				if (options['debug']==true) console.log(next_img);
				if (options['debug']==true) console.log(files[next_img]);
				if ((next_img % 2) == 0) {
					if (options['debug']==true) console.log('content');
					bgObj.css('background', 'url('+files[next_img]+') no-repeat'); //(vph);
					bgObj.css('background-position', 'center center');
					bgObj.css('background-size', 'cover'); //(vph);
					bgObj2.css('opacity', 0);
				} else {
					console.log('coverlay');
					bgObj2.css('background', 'url('+files[next_img]+') no-repeat'); //(vph);
					bgObj2.css('background-position', 'center center');
					bgObj2.css('background-size', 'cover'); //(vph);
					bgObj2.css('opacity', 100);
				}
				next_img = (cur_img === img_num - 1) ? 0 : cur_img + 1;
				cur_img = next_img;
				imgObj.attr('src',files[next_img]);
		}
		$.fn.createImg = function () {
			bgObj.parent().append('<img id="'+bgObj.attr('id')+'-yassimg'+'" style="position:absolute; left: -9999px;">');
			imgObj=$('#'+bgObj.attr('id')+'-yassimg');
		}
		$.fn.cloneDiv = function () {
			bgObj.parent().append('<div id="'+bgObj.attr('id')+2+'"></div>');
			bgObj2=$('#'+bgObj.attr('id')+2);
			bgObj.resize();
		};
		$.fn.resize = function () {
			if (options['debug']==true) console.log('resizing');
			p=bgObj.offset();
			otop=('top' in options)? options['top'] : p.top;
			bgObj2.css( { 'position': "absolute", 'left': p.left, 'top': otop } );
			bgObj2.css('height',bgObj.height())
			bgObj2.css('width',bgObj.width())
			bgObj2.css('padding','0');
			bgObj2.css('z-index',bgObj.attr('z-index')+1);
			if (options['debug']==true) console.log(bgObj2);
			bgObj2.show();
		}
		
		bgObj=element; //$(this.element);
		files=options['files'];
		img_num=files.length;
		var cur_img=0;
		var next_img=0;
		bgObj.cloneDiv(bgObj);
		bgObj.css('-webkit-transition', 'opacity 1s ease-in-out');
		bgObj.css('-moz-transition', 'opacity 1s ease-in-out');
		bgObj.css('-o-transition', 'opacity 1s ease-in-out');
		bgObj.css('transition', 'opacity 1s ease-in-out');
		bgObj2.css('-webkit-transition', 'opacity 1s ease-in-out');
		bgObj2.css('-moz-transition', 'opacity 1s ease-in-out');
		bgObj2.css('-o-transition', 'opacity 1s ease-in-out');
		bgObj2.css('transition', 'opacity 1s ease-in-out');
		
		bgObj.createImg();
		bgObj.changeSlide();
		
		$(window).bind('resize.yasslide',function(){
			setTimeout(function(){
				bgObj.yasslide().resize();
				},500);
			});
		setInterval($.proxy(bgObj.changeSlide, this), options['delay']);
		
			
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn.yasslide = function(options)
    {
       return this.each(function()
       {
           var element = $(this);
           
           // Return early if this element already has a plugin instance
           if (element.data('yasslide')) return;
			// pass options to plugin constructor
           var yasslide = new yasSlide(this, options);
           // Store plugin object in this element's dat
           element.data('yasslide', yasslide);
       });
   };

})(jQuery);
