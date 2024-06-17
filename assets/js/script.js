$( document ).ajaxComplete(function() {
  $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});

$(document).ready(function () {
    // $('input[name="phone"]').mask("+7 (999) 999-99-99");
    
    $('.popup-content').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    
    $(document).on('af_complete', function(event, response) {
        var form = response.form;
        if (form.attr('id') == 'vacancyformid') {
            $.magnificPopup.open({
                items: {
                    src: '#thanksvac'
                }
            });
        }
        else {
            $.magnificPopup.open({
                items: {
                    src: '#thanks'
                }
            });
        }

    });
    
    $(window).on("load scroll",function(){
        $(this).scrollTop()>500?$(".btn-up").addClass("btn-up--active"):$(".btn-up").removeClass("btn-up--active");
    });
    $(".btn-up").click(function(){$("body, html").animate({scrollTop:0})});
    
    $(".mfclose").click(function() {
        $('.mfp-close').click();
    });
    
    $(window).on("load",function(){
        if ($('.news_slider .slick-dots li').length <= 1) {
            $('.news_slider .slick-dots').hide();
        }
    });
    
    new WOW().init();
    
    $('.form_check').change(function () {
        if (this.checked) {
            $(this).parent().find('button').addClass('active');
        } else {
            $(this).parent().find('button').removeClass('active');
        }
    });
    
    $('.header_slider').slick({
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        arrows: true,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  swipe: true
              }
            }
        ]
    });
    $('.news_slider').slick({
        autoplay: false,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    $('.production_block__left-slider').slick({
        autoplay: false,
        speed: 800,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                adaptiveHeight: true,
                dots: true,
                arrows: false
              }
            }
        ]
    });
    $('.partners_slider').slick({
        autoplay: false,
        speed: 800,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            }
        ]
    });
    $('section.news .news_block').slick({
        autoplay: false,
        speed: 800,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 5000
              }
            }
        ]
    });
    
    
    $('.product_otherproducts').slick({
        autoplay: false,
        speed: 800,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
                  autoplay: true
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false,
                  autoplay: true
              }
            }
        ]
    });
    
    $('.stm_slider_1').slick({
        autoplay: false,
        speed: 800,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
    });

        $('.stm_slider_2').slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
        });

        $('.stm_slider_3').slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
        });
 

        $('.stm_slider_4').slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
        });


        $('.stm_slider_5').slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
        });
        
        $('.stm_slider_6').slick({
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  arrows: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  arrows: false
              }
            }
        ]
        });


    $.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH); 
    }
    $(window).on('load resize', function() {
        if (screen.width > 576) {
            $('.category_block__items-item_name').equivalent();
            $('.assortment_block__item-desc').equivalent();
            $('.assortment_block__item-title').equivalent();
            $('.stm_slider__item-link').equivalent();
            $('stm_act_1').click(function() {
                $('.stm_slider_1').slick('reinit');
            });
            $('stm_act_2').click(function() {
                $('.stm_slider_2').slick('reinit');
            });
            $('stm_act_3').click(function() {
                $('.stm_slider_3').slick('reinit');
            });
            $('stm_act_4').click(function() {
                $('.stm_slider_4').slick('reinit');
            });
            $('stm_act_5').click(function() {
                $('.stm_slider_5').slick('reinit');
            });
            $('stm_act_6').click(function() {
                $('.stm_slider_6').slick('reinit');
            });
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.header_burger').click(function() {
        $(this).toggleClass('opened');
        $('.header_top__menu, .header_top__contacts, body').toggleClass('opened');
    });
    
    $('.category_filter__button').click(function() {
        $(this).toggleClass('opened');
        $('.category_block__filters, .category_block__items, body').toggleClass('opened');
    });
    
    $('.mobile_ok, .mobile_agree_filter').click(function() {
        $('.category_filter__button').click();
    })

});

$(document).ready(function(){
    
    $(function () {                 // Когда страница загрузится
      $('.filter_cats a').each(function () {      // получаем все нужные нам ссылки
        var location = window.location.href;  // получаем адрес страницы
        var link = this.href;         // получаем адрес ссылки
        if(location == link) {          // при совпадении адреса ссылки и адреса окна
          $(this).parent().addClass('active');     //добавляем класс
        }
      });
    }); 
    
    $(window).on('load', function() {
        $('.preloader').hide();
    });
    
    $('.ajax-form input').click(function() {
        $('.preloader').show();
    })

    $('input[name=category_2]').change(function() {
        $('.cats_f').removeClass('active');
        $(".cats_f input[value=0]").click();
        if($(this).val()==1) {
            $('.cats_f_1').addClass('active');
        }
        if($(this).val()==2) {
            $('.cats_f_2').addClass('active');
        }
    })
    $('input[name=category_3]').change(function() {
        $('.cats_f').removeClass('active');
        $(".cats_f input[value=0]").click();
        if($(this).val()==2) {
            $('.cats_f_3').addClass('active');
        }
    })
    $('input[name=category_4]').change(function() {
        $('.cats_f').removeClass('active');
        $(".cats_f input[value=0]").click();
        if($(this).val()==1) {
            $('.cats_f_4').addClass('active');
        }
    })
    
    function WebpIsSupported(callback){
    if(!window.createImageBitmap){
        callback(false);
        return;
    }
    var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
    fetch(webpdata).then(function(response){
        return response.blob();
    }).then(function(blob){
        createImageBitmap(blob).then(function(){
            callback(true);
        }, function(){
            callback(false);
        });
    });
    }
    WebpIsSupported(function(isSupported){
        if(isSupported){
            // console.log("Supported");
        }else{
            $('body').addClass('no-webp')
            // console.log("Not supported");
            
            $('.hs_nwp_1').css('background-image', 'url(assets/img/slide.png)');
            $('.hs_nwp_2').css('background-image', 'url(assets/img/slide2.png)');
            $('.hs_nwp_3').css('background-image', 'url(assets/img/slide3.png)');
            $('.hs_nwp_4').css('background-image', 'url(assets/img/slide4.png)');
            $('.hs_nwp_5').css('background-image', 'url(assets/img/slide5.png)');
            $('.hb_nwp_1').css('background-image', 'url(assets/img/banner_1.png)');
            $('.hb_nwp_2').css('background-image', 'url(assets/img/banner_2.png)');
            $('.hb_nwp_3').css('background-image', 'url(assets/img/banner_3.png)');
            $('.hb_nwp_4').css('background-image', 'url(assets/img/banner_4.png)');
            $('.hb_nwp_5').css('background-image', 'url(assets/img/banner_5.png)');
            $('.hb_nwp_6').css('background-image', 'url(assets/img/banner_about.png)');
            $('.hb_nwp_7').css('background-image', 'url(assets/img/banner_1.png)');
            $('.hb_nwp_8').css('background-image', 'url(assets/img/banner_log.png)');
            $('.hb_nwp_9').css('background-image', 'url(assets/img/banner_2.png)');
            $('.hb_nwp_10').css('background-image', 'url(assets/img/banner_stm.png)');
            $('.hb_nwp_11').css('background-image', 'url(assets/img/prod_banner.png)');
            $('.hb_nwp_12').css('background-image', 'url(assets/img/banner_horeca.png)');
            $('.hb_nwp_13').css('background-image', 'url(assets/img/banner_assort.png)');
        }
    });
    
    // lazy
    document.addEventListener('lazybeforeunveil', function(e){
        var bg = e.target.getAttribute('data-bg');
        if(bg){
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    });
    $(document).on('lazybeforeunveil', function(e){
    	var ajax = $(e.target).data('ajax');
        if(ajax){
            $(e.target).load(ajax);
        }
    });
    
    jQuery(function(a) {
    ymaps.ready(function() {
    if (a(window).width() > 700) var t = new ymaps.Map("con_map", {
      center: [55.730454, 38.212379],
      zoom: 16
    });
    else t = new ymaps.Map("con_map", {
      center: [55.664549, 37.598004],
      zoom: 16
    });
    myPlacemark1 = new ymaps.Placemark([55.7306, 38.2126], {
      balloonContent: ""
    }, {
      iconLayout: "default#image",
      iconImageHref: "../assets/img/point.svg",
      iconImageSize: [50, 63],
      iconImageOffset: [-25, -30]
    }), t.behaviors.disable("scrollZoom");
    var e = {
      Android: function() {
        return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any: function() {
        return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      }
    };
    e.any() && t.behaviors.disable("drag"), t.geoObjects.add(myPlacemark1), myPlacemark1.events.add("click", function() {
      a("div#office").addClass("active")
    })
  })
    });
    
    $('.vacancy_slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    $('.vacancy_item__title').click(function() {
        $(this).parent().toggleClass('active');
    });
    
    $('select').styler({
        selectPlaceholder: ''
    });
    
    $('.btn_cancel').click(function() {
       $('.mfp-close').click(); 
    });
    
    $(function (document, window, index){
        'use strict';
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function (input) {
            var label = input.nextElementSibling,
                    labelVal = label.innerHTML;

            input.addEventListener('change', function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener('focus', function () {
                input.classList.add('has-focus');
            });
            input.addEventListener('blur', function () {
                input.classList.remove('has-focus');
            });
        });
    }(document, window, 0));
    
    $('#datepicker').datepicker({
        changeYear: true,
        changeMonth: true,
        yearRange: '1910:2020',
    	dateFormat : "dd-mm-yy",
    	minDate: new Date($('#hiddendelivdate').val()),
    	monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    	monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    	dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    });
    
    $('.hiddenvacname').each(function() {
        var vacname = $(this).parent().parent().find('h2 span em').text();
        $(this).val(vacname);
    });
    
});

$('.loader').append('<img src="assets/img/preloader.gif" alt="">');
$(window).on('load',function() {
  setTimeout(function(){
  $('body').removeClass('loading');
  $('.loader').fadeOut("slow");
}, 1200);
});