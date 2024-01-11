/*

© 2016–2018. Команда разработчиков ultron.pro.
Email: info@ultron.pro
Site: //ultron.pro/

*/

// ============= PRELOADER SCRIPT ===================
$(window).load(function() { 
    setTimeout(function() { 
        $('.preloader').addClass('hid');
    }, 10);
    
});
// ============= END PRELOADER SCRIPT ===================
/*closestchild*/
 
        ;(function($){
          $.fn.closestChild = function(selector) {
            var $children, $results;
            
            $children = this.children();
            
            if ($children.length === 0)
              return $();
          
            $results = $children.filter(selector);
            
            if ($results.length > 0)
              return $results;
            else
              return $children.closestChild(selector);
          };
        })(window.jQuery);

/* /. closestchild*/


$(function(){
    
    
    
        var topmenu_wrapper = 161; // В каком положении полосы прокрутки фиксировать меню
        var top_show = 50; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
        var speed = 500; // Скорость прокрутки
    	var $backButton = $('#up');
        
        var tempScrollTop, currentScrollTop = 0;

    	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
    		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    		if ($(this).scrollTop() > top_show && $(this).scrollTop() < $(document).height() - $(window).height()-60) {
    			$backButton.fadeIn();
    		}
    		else {
    			$backButton.fadeOut();
    		}
            

            if ($(this).scrollTop() > topmenu_wrapper) {
                $('.header-wrapper').addClass('fixed');
    		}
    		else {
    			$('.header-wrapper').removeClass('fixed');
    		}
            

    	});
        
        
    	$backButton.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    		/* Плавная прокрутка наверх */
    		scrollto(0, speed);
    	});
        
        
        

// scrollto
    	window.scrollto = function(destination, speed) {
    		if (typeof speed == 'undefined') {
    			speed = 800;
    		}
    		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
    	};
    	$("a.scrollto").click(function () {
    		var elementClick = $(this).attr("href")
    		var destination = $(elementClick).offset().top;
    		scrollto(destination);
    		return false;
    	});
// end scrollto 


        
        
        


// fancybox
        $('.fancybox').fancybox({
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxModal').fancybox({
            autoResize:true,            
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView : false, 
            maxWidth: '100%',
            scrolling : "no",
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxVideo').fancybox({
            autoResize:true,            
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView   : false, 
            maxWidth    : '100%',
            maxHeight   : '100%',
            scrolling   : "no",
            width       :  1200,
            height      :  700,
            helpers: {
                overlay: {
                  locked: false
                }
            }
        });
        
        $('.fancyboxVideo-xs').fancybox({
            autoResize:true,            
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView   : false, 
            maxWidth    : '100%',
            maxHeight   : '50%',
            scrolling   : "no",
            helpers: {
                overlay: {
                  locked: false
                }
            }
        });
        

// end fancybox


// validation
        
        $('.rf').each(function(){
            var item = $(this),
            
            btn = item.find('.btn');
            
            
            function checkInput(){
                item.find('select.required').each(function(){
                    if($(this).val() == '0'){
                        
                        // Если поле пустое добавляем класс-указание
                        $(this).parents('.form-group').addClass('error');
                        $(this).parents('.form-group').find('.error-message').show();

                    } else {
                        // Если поле не пустое удаляем класс-указание
                        $(this).parents('.form-group').removeClass('error');
                    }
                });
                
                
                item.find('input[type=text].required').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                item.find('textarea.required').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                item.find('input[type=email]').each(function(){
                    var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                    var $this = $(this);
                    if($this.hasClass('required')){
                        
                        if (regexp.test($this.val())) {
                            $this.removeClass('error');
                        }else {
                            // Если поле пустое добавляем класс-указание
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                        }
                    }else{
                        
                        if($this.val() != ''){
                            if (regexp.test($this.val())) {
                                $this.removeClass('error');
                            }else {
                            
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                            }
                        }else{
                            $this.removeClass('error');
                        }
                    }
                    
                    
                });
                
                
                item.find('input[type=checkbox].required').each(function(){
                    if($(this).is(':checked')){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('error');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });
                
            
            }

            btn.click(function(){
                checkInput();
                var sizeEmpty = item.find('.error:visible').size();
                if(sizeEmpty > 0){
                    return false;
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    
                    item.submit();
                    $.fancybox.close();
                }
            });

        });
        
        
        $('.required').change(function(){
            if($(this).val() != ''){
                $(this).removeClass('error');
                $(this).parents('.form-group').find('.error-message').hide();
            }
            
        });
        
        
        
        
        $('select').change(function(){
            if($(this).val() == ''){     
                // Если значение empty
                $(this).parents('.form-group').removeClass('selected');

            } else {
                // Если значение не empty
                $(this).parents('.form-group').addClass('selected');
                $(this).parents('.form-group').removeClass('error');
            }
        });
        
// end validation
        
        
        
        

        // tabs
        
        $('ul.tabs').on('click', 'li:not(.current)', function() {
        
        
        $(this)
          .addClass('current').siblings().removeClass('current')
          .closest('div.section').closestChild('div.box').removeClass('visible').eq($(this).index()).addClass('visible');
        });
        
        
        
        $('ul.tabs.mobile li').click(function(){
            $(this).parent().hide().siblings('.mobile-tab-header').html($(this).html());
            $('.mobile-tab-header').removeClass('active');
        });
        
        $('.mobile-tab-header').click(function(e){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).siblings('.tabs.mobile').stop().slideUp(0);
            }else{
                $(this).addClass('active');
                $(this).siblings('.tabs.mobile').stop().slideDown(0);
            }
            
            e.stopPropagation();
        });
        
        // end tabs           
        


// Carousels

        $('.top-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 800,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    dots: false,
                  }
                }
              ]     
        });
        
        
        $('.actions-carousel').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 800,
            arrows: false,
            prevArrow: '<a href="#" class="slick-prev"></a>',
            nextArrow: '<a href="#" class="slick-next"></a>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    arrows: false
                  }
                }
              ]     
        });
        
        $('.gallery-carousel').slick({
                swipe: false,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                arrows: true,
                prevArrow: '.gallery-carousel-prev',
                nextArrow: '.gallery-carousel-next',
                dots: false,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2
                      }
                    }
                  ]       
            });
        
// End Carousels
       
       

// проверка на Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
            
        
        if(isIE){
            $('body').addClass('ie');
        }
// end
        
     
// accordeon
        var $thisElement, 
            $thisElementContent,
            $elements,
            $elementsContent;
            
        $('.accordeon .title').click(function(){
            $thisElement = $(this).parent();
            $thisElementContent = $thisElement.find('.element-content');
            $elements = $thisElement.siblings();
            $elementsContent = $elements.find('.element-content');
            
            $elements.removeClass('active');
            $elementsContent.slideUp();
            if(!$thisElement.hasClass('active')){
                $thisElement.addClass('active');
                $thisElementContent.slideDown();
            }else{
                $thisElement.removeClass('active');
                $thisElementContent.slideUp();
            }
            
        });
        
// end accordeon        
      
      
        
//top menu
        
        
		$('.top-menu li').has('ul').addClass('down');

        var windWidth = $( window ).width();
        
        window.addEventListener("resize", function() {
        	windWidth = $( window ).width();
        }, false);
    
    
        window.addEventListener("orientationchange", function() {
            windWidth = $( window ).width();
        }, false);


//end top menu      


// mobile menu

        $('.menu-button').click(function(){
            $('.menu-button').toggleClass('active');
            $('.mobile-menu').toggleClass('open');
        });
        $('.mobile-menu, .menu-button').click(function(e){
            if ($(e.target).hasClass('fancyboxModal') == false) {
                e.stopPropagation();
            }
        });
        $('body').click(function(){
            $('.mobile-menu').removeClass('open');
            $('.menu-button').removeClass('active');
        });
        
        $('.mobile-menu li > ul').before('<span class="dropdown-button"></span>');
        

        
        $('.mobile-menu .dropdown-button').click(function(){
            $(this).toggleClass('active');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
            }else{
                $(this).siblings('ul').slideDown();
            }
            
        });

// /. mobile menu






        $(".lightgallery").lightGallery({
            selector: 'a.lightgallery-link',
            thumbnail: false
        });     
        
        
        
        // ASIDE MENU
        
        var windowHeight, headerPushHeight, windWidth;
        
        
        
        function asidemenuHeight(){
            windWidth = window.innerWidth;
            if(windWidth < 992){
                windowHeight = $(window).height();
                headerPushHeight = $('.header-push').height();
                $('.aside-menu > ul').height(windowHeight-headerPushHeight);
            }
        }
        asidemenuHeight();
        
        var $asideMenu = $('.aside-menu > ul');
        $('.aside-menu .title > div').click(function(){

            if($asideMenu.hasClass('active')){
                $asideMenu.removeClass('active');
            }else{
                $asideMenu.addClass('active');
            }
            asidemenuHeight();
        });
        
        
        // Прослушка события смены ориентации или ресайз окна
        
            
            window.addEventListener("resize", function() {
            	asidemenuHeight();
            }, false);
        
        
            window.addEventListener("orientationchange", function() {
                asidemenuHeight();
            }, false);
            

        // end
        
        
        
        
        
        
        
        
        $('.aside-menu li').has('ul').addClass('down');
        
        $('.aside-menu > ul li.down > ul').before('<span class="dropdown-button"></span>');
        
        
        $('.aside-menu .down .dropdown-button').each(function(){
            if($(this).siblings('ul').is(':visible')){
                $(this).addClass('active');
            }
        });
        
        
        
        $('.aside-menu .down .dropdown-button').click(function(){
            
            $(this).parent().toggleClass('open');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
                $(this).removeClass('active');
            }else{
                $(this).siblings('ul').slideDown();
                $(this).addClass('active');
            }
            
        });
        
        
        $('.aside-menu-title').click(function(){
            $('.aside-menu').toggleClass('active');
        });
        
        
        // ASIDE MENU END
        
        
        
        var priceVal, priceValFormat;
        $('.price').each(function(){
            priceVal = $(this).text();
            priceValFormat = priceVal.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            $(this).text(priceValFormat);
        });
        
        
        
        
        /****************************** plus minus goods counter ************************************/        
        //plugin bootstrap minus and plus
        //http://jsfiddle.net/laelitenetwork/puJ6G/
        $.fn.globalNumber = function(){
        $('.btn-number').click(function(e){
            e.preventDefault();
            fieldName = $(this).attr('data-field');
            type      = $(this).attr('data-type');
            var input = $("input#"+fieldName);
        
            var currentVal = parseInt(input.val());
            if (!isNaN(currentVal)) {
                if(type == 'minus') {
                    
                    if(currentVal > input.attr('min')) {
                        input.val(currentVal - 1).change();
                    } 
                    if(parseInt(input.val()) == input.attr('min')) {
                        $(this).attr('disabled', true);
                    }
        
                } else if(type == 'plus') {
        
                    if(currentVal < input.attr('max')) {
                        input.val(currentVal + 1).change();
                    }
                    if(parseInt(input.val()) == input.attr('max')) {
                        $(this).attr('disabled', true);
                    }
        
                }
            } else {
                input.val(0);
            }
        });
        $('.input-number').focusin(function(){
           $(this).data('oldValue', $(this).val());
        });
        $('.input-number').change(function() {
            
            minValue =  parseInt($(this).attr('min'));
            maxValue =  parseInt($(this).attr('max'));
            valueCurrent = parseInt($(this).val());
        
            name = $(this).attr('id');
            if(valueCurrent >= minValue) {
                $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('К сожалению, было достигнуто минимальное значение');
                $(this).val($(this).data('oldValue'));
            }
            if(valueCurrent <= maxValue) {
                $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('К сожалению, было превышено максимальное значение');
                $(this).val($(this).data('oldValue'));
            }
            
            
        });
        $(".input-number").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                     // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) || 
                     // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                         // let it happen, don't do anything
                         return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        };$.fn.globalNumber();
        /****************************** plus minus goods counter ************************************/ 
        
        
        
        
        
        var thisHeight;
        
        function figureScrollPane(){
            if ( !$("html").hasClass("touch") ){
                $('.aside-accordeon figure').each(function(){
                    thisHeight = $(this).height();
                    if(thisHeight > 169){
                        $(this).jScrollPane({
                            verticalDragMinHeight: 30,
                            verticalDragMaxHeight: 50
                        });   
                    }
                });
            } 
        }
        figureScrollPane();
        
        
        $('.aside-accordeon > li .switch').click(function(){
            if($(this).parents('li').children('ul').is(':visible')){
                $(this).parents('li').removeClass('active');
            }else{
                $(this).parents('li').addClass('active');
                figureScrollPane(); 
            }
        });
        
        
        
        $('.aside-filters-title').click(function(){
            $(this).parents('.aside-filters-block').toggleClass('active');
        });
        
        
                
                
});// end ready