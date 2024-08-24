var wHeight = jQuery(window).height();
var wWidth = jQuery(window).width();

(function($) {
  $(document).ready(function(){
    //notice();
    $(".ivd .last input").attr("disabled", true);


       // $(".certification input").each(function() {
    //   if(($(this).val() == "QMS Certification" &&  $(this).prop("checked") == true) || ($(this).val() == "CERTIFICATION DE SMQ" && $(this).prop("checked") == true)){
    //     $(".option-qms").slideDown();
    //     $(".option-title").slideDown()
    //   }else if(($(this).val() == "MDSAP" &&  $(this).prop("checked") == true) || ($(this).val() == "Programme MDSAP" && $(this).prop("checked") == true)){
    //     $(".option-mdsap").slideDown();
    //     $(".option-title").slideDown()
    //   }else if(($(this).val() == "CE Marking" &&  $(this).prop("checked") == true) || ($(this).val() == "MARQUAGE CE" && $(this).prop("checked") == true)){
    //     $(".option-ce").slideDown();
    //     $(".option-title").slideDown()
    //   }else if(($(this).val() == "IVD Medical Device" &&  $(this).prop("checked") == true) || ($(this).val() == "Dispositif Médical de Diagnostic In Vitro" &&  $(this).prop("checked") == true)){
    //     $(".option-ivd").slideDown();
    //     $(".option-title").slideDown()
    //   }
    // });

    // $(".certification input").on('change', function() {
    //   if(($(this).val() == "QMS Certification" &&  $(this).prop("checked") == true) || ($(this).val() == "CERTIFICATION DE SMQ" && $(this).prop("checked") == true)){
    //     $(".option-qms").slideDown();
    //     $(".option-title").slideDown();
    //   }else if(($(this).val() == "QMS Certification" &&  $(this).prop("checked") == false) || ($(this).val() == "CERTIFICATION DE SMQ" && $(this).prop("checked") == false)){
    //     $(".option-qms").slideUp();
    //   }else if(($(this).val() == "MDSAP" &&  $(this).prop("checked") == true) || ($(this).val() == "Programme MDSAP" && $(this).prop("checked") == true)){
    //     $(".option-mdsap").slideDown();
    //     $(".option-title").slideDown();
    //   }else if(($(this).val() == "MDSAP" &&  $(this).prop("checked") == false) || ($(this).val() == "Programme MDSAP" && $(this).prop("checked") == false)){
    //     $(".option-mdsap").slideUp();
    //   }else if(($(this).val() == "CE Marking" &&  $(this).prop("checked") == true) || ($(this).val() == "MARQUAGE CE" && $(this).prop("checked") == true)){
    //     $(".option-ce").slideDown();
    //     $(".option-title").slideDown();
    //   }else if(($(this).val() == "CE Marking" &&  $(this).prop("checked") == false) || ($(this).val() == "MARQUAGE CE" && $(this).prop("checked") == false)){
    //     $(".option-ce").slideUp();
    //   }else if(($(this).val() == "IVD Medical Device" &&  $(this).prop("checked") == true) || ($(this).val() == "Dispositif Médical de Diagnostic In Vitro" &&  $(this).prop("checked") == true)){
    //     $(".option-ivd").slideDown();
    //     $(".option-title").slideDown();
    //   }else if(($(this).val() == "IVD Medical Device" &&  $(this).prop("checked") == false) || ($(this).val() == "Dispositif Médical de Diagnostic In Vitro" &&  $(this).prop("checked") == false)){
    //     $(".option-ivd").slideUp();
    //   }
    //   if(!$(".certification input:checked").length){
    //     $(".option-title").slideUp();
    //   }
    // }); 


    

  	$("body").on("mousedown", ".toggle-fontsize", function(){
  		if($("#footer").length){
  			setTimeout(function(){
					$("body, html").animate({scrollTop : $("#footer").offset().top},700);
  			},100);	
  		}
  	});

    $(".lightbox-overlay").on("click", function(){
      $(".full-bio.active .close").trigger("click")
    });

    $(".filter-sel-current,.filter-sels-current").on("click", function(){
      if($(this).parent().hasClass("opened")){
        $(this).parent().removeClass("opened");
      }else{
        $(this).parent().addClass("opened");
      }
      $(".post-opened-search").removeClass("post-opened-search");
      return false;
    });

    $("a").on("click", function(){
      if(!$(this).parents(".training-filter").length){
        if($(this).parents(".filter-events").length){
          $.cookie('event-filter', 1, { expires: 7, path: '/' });
        }else{
          $.removeCookie('event-filter');
        }

        if($(this).parents(".search-tabs").length){
          $.cookie('search-filter', 1, { expires: 7, path: '/' });
        }else{
          $.removeCookie('search-filter');
        }
      }

    });

    $(".post-content-left img.alignnone").each(function(){
      if(!$(this).hasClass("alignleft") && !$(this).hasClass("alignright")){
        $(this).wrap("<div class='img-wrap'></div>");
      }
    });
    
    $(".apply-job .btn").on("click", function(){
      var id = $(this).attr("href");
      if($(id).length){
        $("body,html").animate({scrollTop :  $(id).offset().top - $("#header").outerHeight() - 50}, 800);
      }
      return false;
    });

    $(".contact-list-item").on("click", function(e){
      var href = $(this).attr("data-href");
      if(href != ""){
        if($(e.target)[0]['localName'] != "a"){
          window.open(href);
        }
      }
    });

    $(".menu-footer-menu-container .menu > li > a").on("click",function(){
      if($(window).width() < 768) {
        if(!$(this).hasClass("active")){
          $(this).addClass("active");
          $(this).next(".sub-menu").slideDown();
        }else{
          $(this).removeClass("active");
          $(this).next(".sub-menu").slideUp();
        }
      }
      return false;
    });

    if($("body").hasClass("single-training")){
      $.cookie('training', $(".hero-flex h1").attr("data-id"), { expires: 7, path: '/' });
    }
    if($("body").attr("data-id") == 823 || $("body").attr("data-id") == 811 || $("body").attr("data-id") == 821 || $("body").attr("data-id") == 1492 || $("body").attr("data-id") ==  825 || $("body").attr("data-id") == 827){
      $.cookie('certification', $("body").attr("data-id"), { expires: 7, path: '/' });
    }

    bodyClick();
    if($(".training-l").length && $(".training-list-dropdown").length){
      $(".training-l .dropdown-type").appendTo($(".training-list-dropdown"));
    }

    document.addEventListener( 'wpcf7mailsent', function( event ) {
      if ( '286' == event.detail.contactFormId ||  '754' == event.detail.contactFormId  || "3544" == event.detail.contactFormId || "3121" == event.detail.contactFormId || "3545" == event.detail.contactFormId  ) {
        location = $(".logo a").attr("href")+'/thank-you-page/';
      }
    }, false );

    $(".stat-value span").each(function(){
      $(this).attr("data-count", $(this).html());
      $(this).html("0");
    });

    menuMobile();
    $(jQuery("#nav .sub-menu")).each(function(){
      jQuery(this).prev(".sub-desc").andSelf().wrapAll('<div class="mega-wrap"><div></div></div>');
    });
    desktopMenu();
    dropdown();
    openSearchbar();
    carousels();
    scrollTotag($(".down-bottom a"));
    scrollTotag($(".author-photo"));
    scrollAnimation();
    ajaxEvents();
    ajaxTraining();
    ajaxPosts();
    ajaxSearchPosts();
    ajaxJobs();
    dropDownList();
    searchAutocomplate();
    searchAutocomplateNews();
    openPostSearchbar();

    $("body").on("click", ".training-filter ul li a", function(e){
      $(this).parents(".filter-item-list").removeClass("opened");
      if(!$(this).parent().hasClass("current")){
        $(this).parents(".training-filter").find("li").removeClass("current");
        $(this).parents(".training-filter").find(".filter-sel-current").text($(this).text());
        $(this).parent().addClass("current");
        var cat = $(this).parent().attr("data-cat")

        $.ajax({
          type: 'POST',
          url:  '/wp-admin/admin-ajax.php',
          data: 'action=filter_training&cat='+cat,
          success: function(html){ 
            $(".posts-training-list").html("");
            $(html).hide().appendTo(".posts-training-list").fadeIn();
           
            if($(".posts-list").find(".hide-button").length){
              $(".posts-list").next(".event-list-bottom").slideUp();  
            }else{
              $(".posts-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      e.preventDefault();
      return false;
    });


    $(".trainings-section .more-posts").on("click", function(){
      //$(this).trigger("blur");
      if(!$(this).hasClass("inprogres")){
        $(this).addClass("inprogres");
        var cat = $(".training-filter ul li.current").attr("data-cat");
        var count = $(".posts-training-list .post-item").length;
        $.ajax({
          type: 'POST',
          url:  '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_t&count='+count+'&cat='+cat,
          success: function(html){
            $(html).hide().appendTo(".posts-training-list").slideDown();
            $(".trainings-section .more-posts").removeClass("inprogres");
            if($(".posts-training-list").find(".hide-button").length){
              $(".posts-training-list").next(".event-list-bottom").slideUp();
            }else{
              $(".posts-training-list").next(".event-list-bottom").show();
            }
          }
        });

      }
      return false;
    });
    

  });
  $(window).on("load", function(){

        



  	
    $("body").addClass("loaded");
    dropdownHeight();
    fixedHeader();
	trainingHeight();
    
//    setEqualMinHeight($(".tabs-cert"));

    imagedesclist($(".image-desc-list"));
    imagedesclist($(".type-devices-list"));
    setEqualMinHeight($(".posts-slider-inner .post-item-in, .news-info"));
    setEqualMinHeight($(".setEquals"));
    wow = new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    );
    wow.init();  
    BioTextPosition();
    contentHeight();
  });
  $(window).on("scroll", function(){
    fixedHeader();
    scrollAnimation();
    postContentRight();
    if($("body").hasClass("opened-search")){
      $(".opened-search").removeClass("opened-search");
    }
  });
  var rtime;
	var timeout = false;
  $(window).on("resize", function(){
  	trainingHeight();
    
    imagedesclist($(".image-desc-list"));
    setEqualMinHeight($(".posts-slider-inner .post-item-in"));
    BioTextPosition();
    //setEqualMinHeight($(".tabs-cert"));
    setEqualMinHeight($(".setEquals"));
    contentHeight();

    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(function(){
        	dropdownHeight();
        }, 300);
    }
  });

  function scrollAnimation() {
    if($('.stats').length){
      $(".stats").each(function(){
        if((window.pageYOffset + $(window).height()*0.8) > $(this).offset().top ){
          counter($(this).find(".stat-value span"));
        }
      });
    }
    if($('#Homepage_V7_R2_GMED').length){
      $("#Homepage_V7_R2_GMED").each(function(){
        if((window.pageYOffset + $(window).height()*0.5) > $(this).offset().top ){
          $("#Homepage_V7_R2_GMED").addClass("path")
        }
      });
    }


  }
  function bodyClick(){
    $("body").on("click", function(e){

      if(!$(e.target).hasClass("dropdown-sel") && !$(e.target).parents(".dropdown-sel").length){
        $(".dropdown-type").removeClass("hover");
        //console.log(e.target);
      }
    });
    $("body").on("touchend", function(e){
      if(!$(e.target).hasClass("hover") && !$(e.target).parents(".hover").length){
        $("#nav li").removeClass("hover");
        $("body").removeClass("dark-bg");
        $("#nav .mega-wrap").height(0);   
      }
    });
  }
 
  function menuMobile(){
    $("#nav > div > ul > li").each(function(){
      if($(this).hasClass("menu-item-has-children")){
        $(this).find("> .sub-menu > li").clone().appendTo(".main-mobile-menu");
      }else{
        $(this).clone().appendTo(".main-mobile-menu");
      }
    });

    $(".main-mobile-menu .sub-menu").each(function(){
      $(this).prev(".sub-desc").andSelf().wrapAll('<div class="mob-wrap"></div>');
    });
    $(".main-mobile-menu .menu-item-has-children").each(function(){
      $(this).find("> a > span ").clone().prependTo($(this).find(".mob-wrap")).wrapAll("<div class='mob-back'/>")
    });
      
    $(".right-header .btn").clone().appendTo(".main-mobile-menu").removeClass("btn").wrapAll("<li class='m-btn'></li>");
    
    $(".top-menu li").each(function(){
      $(this).clone().appendTo(".extra-mobile-menu");
    });
    $(".widget_icl_lang_sel_widget").clone().appendTo(".toggle-lang");
    //$("#nav > div > ul").clone().appendTo(".mobile-menu-inner");
    //$(".right-header .btn").clone().appendTo(".mobile-menu-inner").wrapAll("<div class='mob-menu-btn'></div>");


    $(".close-menu, .overlay-gmed").on("click", function(){
      $(".menu-icon").trigger("click");

      $("body").removeClass("opened-search");
    });

    $(".search-cl").on("click", function(){
      $("body").removeClass("opened-search");
    });

    $(".mob-back").on("click", function(){
      $(this).parents(".menu-item-has-children").removeClass("active");
    });

    $(".mobile-menu .menu-item-has-children > a").on("click", function(){
      if($(this).parent().hasClass("active")){
        $(this).parent().removeClass("active");
        $(this).parent().find("ul").slideUp();
      }else{
        $(this).parent().addClass("active");
        $(this).parent().find("ul").slideDown();
      }
      return false;
    });

    $(".menu-icon").on("click", function(){
      if($(this).hasClass("active")){
        $(this).removeClass("active");
        var scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
        scrolPosition = -1*scrolPosition;
        $("#wrapper").css({"margin-top":"0px"});
        $("body, html").removeClass("overlayed");
        $("body,html").scrollTop(scrolPosition);

        $("body").removeClass("opened-menu");
        $(".menu-item-has-children").removeClass("active");
      }else{
        $(this).addClass("active");
        $("body").addClass("opened-menu");
        var curposition = $(window).scrollTop();
        $("body, html").addClass("overlayed");
        $("body").addClass("menu-opened");
        $("#wrapper").css({"margin-top":-curposition+"px"});
      }
      return false;
    });
  }

  function Parallax(el, ind, offset) {//ind = 0.02
    var _offset;
    if(el.length){
      el.each(function(){ 
        _offset = (window.pageYOffset + wHeight*offset - $(this).parent().offset().top)*ind;
        _offset = -1*_offset;
        
        if(el.hasClass("three-column-item") && window.pageYOffset + wHeight*offset > $(this).parent().offset().top ){
          _offset = 0;
          
        }
        TweenMax.to($(this), 
          0.6, {
            y: _offset,
        });
      });   
    } 
  }

  // EqualHeight
  function setEqualMinHeight(columns){
    var tallestcolumn = 0;
    var currentHeight = 0;
    columns.each(function(){
      $(this).css({"height":"auto"});
      currentHeight = $(this).outerHeight();
      if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
    });
    columns.css({height: tallestcolumn});
  }

  // EqualHeight
  function imagedesclist(columns){
    var tallestcolumn = 0;
    var currentHeight = 0;
    columns.each(function(){
    	$(this).find(".setEqual").each(function(){
	      $(this).css({"height":"auto"});
	      currentHeight = $(this).outerHeight();
	      if(currentHeight > tallestcolumn){
	        tallestcolumn = currentHeight;
	      }
    	});
    	columns.find(".setEqual").css({height: tallestcolumn});
    });  
  }



  //ddropdown-height
  function dropdownHeight(){
  
    var tallestcolumn = 0;
    var currentHeight = 0;
    $("#nav > div > ul > li.menu-item-has-children").each(function(){
      var columns = $(this).find("> .mega-wrap");
      $(this).find("> .mega-wrap > div > ul > li > .mega-wrap").each(function(){
      	$(this).css({"height":"auto"});
        currentHeight = $(this).outerHeight();
        if(currentHeight > tallestcolumn){
          tallestcolumn = currentHeight;
        }
      });
      columns.attr("data-height", tallestcolumn);
    });
  }


  //descktop menu
  function desktopMenu(){

    if(!$("html").hasClass("device-version")){
      $("#nav > div > ul > li.menu-item-has-children").mouseenter(function(){
        if(!$(this).hasClass("hover")){
          showDropdown($(this));
          $(this).addClass("hover");
          $(this).find("> .mega-wrap > div > ul > li").removeClass("active");
          $(this).find("> .mega-wrap > div > ul > li:first").addClass("active");
          $("body").removeClass("opened-search");
          $(".autocomplete-suggestions").hide();
          $("body").addClass("dark-bg");
        }

      });

      $("#nav > div > ul > li.menu-item-has-children").mouseleave(function(){
        hideDropdown($(this));
        $(this).removeClass("hover");
        $(this).find("> .mega-wrap > div > ul > li").removeClass("active");
        $("body").removeClass("dark-bg");
      });
    }else{

      $("#nav > div > ul > li.menu-item-has-children").on("touchend", function(){

        if($(this).hasClass("hover")){
          hideDropdown($(this));
          $(this).removeClass("hover");
          $(this).find("> .mega-wrap > div > ul > li").removeClass("active");
          $("body").removeClass("dark-bg");
        }else{
          $("#nav > div > ul > li.menu-item-has-children").removeClass("hover");
          $("#nav > div > ul > li.menu-item-has-children").removeClass("active");
          $(".mega-wrap").height(0);

          showDropdown($(this));
          $(this).addClass("hover");
          $(this).find("> .mega-wrap > div > ul > li").removeClass("active");
          $(this).find("> .mega-wrap > div > ul > li:first").addClass("active");
          $("body").removeClass("opened-search");
          $(".autocomplete-suggestions").hide();
          $("body").addClass("dark-bg");
        }  
      });
    }

    if(!$("html").hasClass("device-version")){
      $("#nav > div > ul > li > a").focus(function(){
        hideDropdown($("#nav > div > ul > li"));
        $("#nav > div > ul > li").removeClass("hover");
        $("#nav > div > ul > li").find("> .mega-wrap > div > ul > li").removeClass("active");
        $("body").removeClass("dark-bg");
      });
      $("#nav > div > ul > li.menu-item-has-children > a").focus(function(){
        showDropdown($(this).parent());
        $(this).parent().addClass("hover");
        $(this).parent().find("> .mega-wrap > div > ul > li").removeClass("active");
        $(this).parent().find("> .mega-wrap > div > ul > li:first").addClass("active");
        $("body").removeClass("opened-search");
        $(".autocomplete-suggestions").hide();
        $("body").addClass("dark-bg");
      });

      $("#nav > div > ul > li.menu-item-has-children > .mega-wrap > div > ul > li").mouseenter(function(){
        $("#nav > div > ul > li.menu-item-has-children > .mega-wrap > div > ul > li").removeClass("active");
        $(this).addClass("active");
      });

      $("#nav > div > ul > li > .mega-wrap > div > .sub-menu > li > .mega-wrap > div > .sub-menu > li > a").focus(function(){
        $("#nav > div > ul > li.menu-item-has-children > .mega-wrap > div > ul > li").removeClass("active");
        $(this).parents(".menu-item-has-children").addClass("active");
      });

      $("#nav > div > ul > li.menu-item-has-children > .mega-wrap > div > ul > li").mouseleave(function(){
        //$(this).removeClass("active");
      });
    }


    

    

  }
  function fixedHeader(){
    var h = 110;
    var marginHtml;
    if($(window).width() > 960){
      if(window.pageYOffset < $(".top-sidebar").outerHeight()){
        if($("body").hasClass("admin-bar")){
          marginHtml = $("html").css('margin-top').replace("px", "");
          h = h + marginHtml*1;
        }
      }
      var t = 0;
      if($("body").hasClass("admin-bar")){
        marginHtml = $("html").css('margin-top').replace("px", "");
        //h = h + marginHtml*1;
        t = t + marginHtml*1;
      }
      if(window.pageYOffset > $(".top-sidebar").outerHeight()){
        $("body").addClass("fixed-header");
        $(".header-space").css({"height": h });
        $("#header").css({"top" : t});
      }else{
        $("#header").css({"top" : "auto"});
        $("body").removeClass("fixed-header");
        $(".header-space").css({"height": "0px"});
      }
    }
  }

  function showDropdown(element){
    if(!(element.find("> .mega-wrap").attr("data-height") > 0)) {
      dropdownHeight();
      console.log('height empty');
    }
    element.find("> .mega-wrap").css("height", element.find("> .mega-wrap").attr("data-height")+"px");
  }
  function hideDropdown(element){
    element.find("> .mega-wrap").css("height", "0px");
  }
  function dropdown(){
    $(".search-form .dropdown-type").mouseenter(function(){
      $(this).addClass("hover");
    });
    $(".search-form .dropdown-type").mouseleave(function(){
      $(this).removeClass("hover");
    });

    $(".form-row .dropdown-type .dropdown-sel").on("click",function(){
      if($(this).parent().hasClass("hover")){
        $(this).parent().removeClass("hover");
      }else{
        $(this).parent().addClass("hover");
      }
    });
 
  }
  function openPostSearchbar(){
    $(".post-search").on("click", function(){
      if(!$("body").hasClass("post-opened-search")){
        $("body").addClass("post-opened-search");
      }else{
       $("body").removeClass("post-opened-search"); 
      }
      $(".filter-item-list").removeClass("opened");
      return false;
    });
  }
  function openSearchbar(){
    $(".search-icon").on("click", function(){
      if(!$("body").hasClass("opened-search")){
        $("body").addClass("opened-search");
      }else{
       $("body").removeClass("opened-search"); 
      }
      return false;
    });
  }

  function carousels(){
    $('.posts-slider-inner').on("init", function(){
      $(this).next(".slider-control").append($(this).find(".slick-prev"));
      $(this).next(".slider-control").append($(this).find(".slick-dots"));
      $(this).next(".slider-control").append($(this).find(".slick-next"));
      if($(this).next(".slider-control").find("li").length < 2){
        $(this).next(".slider-control").hide();
      }
    });
    $('.posts-slider-inner').on("breakpoint", function(){
      $(this).next(".slider-control").append($(this).find(".slick-prev"));
      $(this).next(".slider-control").append($(this).find(".slick-dots"));
      $(this).next(".slider-control").append($(this).find(".slick-next"));
      if($(this).next(".slider-control").find("li").length < 2){
        $(this).next(".slider-control").hide();
      }
    });
    $('.posts-slider-inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide > 1){
        $(this).parents(".news-front").find(".news-info").addClass("scale-animation");
        
      }else{
        $(this).parents(".news-front").find(".news-info").removeClass("scale-animation");
       
      }
      if($('.single-event').length) {
        if(nextSlide >= 1){
          $(this).parents(".news-front").find(".news-info").addClass("scale-animation");
        }else{
          $(this).parents(".news-front").find(".news-info").removeClass("scale-animation");
        }
      }
    });
    if($('.single-event').length) {
      // if(wWidth < 768) {
      //   $('.fake-slide').remove();
      // }
      $('.posts-slider-inner').slick({
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true,
       // arrows: false,
        speed: 1000,
        cssEase: 'ease-out',
        dots: true,
        // swipe: false,
        // touchMove: false,
        // draggable: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              // swipe: true,
              // touchMove: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              slide: '.post-item-s'
            }
          },
        ]
      });
    } else {
      $('.posts-slider-inner').slick({
	      infinite: false,
	      slidesToShow: 3,
	      slidesToScroll: 3,
	      // arrows: false,
	      swipe: false,
	      touchMove: false,
	      draggable: false,
	      speed: 1000,
	      cssEase: 'ease-out',
	      dots: true,
	      responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	          	swipe: true,
	            touchMove: true,
	            slidesToShow: 2,
	            slidesToScroll: 2,
              slide: '.post-item'
	          }
	        },
	        {
	          breakpoint: 601,
	          settings: {
	            slidesToShow: 1,
	            speed: 500,
	            swipe: true,
	            touchMove: true,
	            slidesToScroll: 1,
	            slide: '.post-item-s'
	          }
	        },
	      ]
    	});
    }

    $('.event-speakers-slider').on("init", function(){
      $(this).next(".slider-control").append($(this).find(".slick-prev"));
      $(this).next(".slider-control").append($(this).find(".slick-dots"));
      $(this).next(".slider-control").append($(this).find(".slick-next"));
    });
    $('.event-speakers-slider').slick({
      infinite: false,
      speed: 1000,
      dots: true,
      fade: true
    });
  }
  function counter(e){
    var z = 0;
    e.each(function () {
      if(!$(this).hasClass("counted")){
        if($(this).attr("data-count") > 99){          
          z = $(this).attr("data-count")/2;
        }
        $(this).prop('Counter',z).animate({
          Counter: $(this).attr("data-count"),
        }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
        $(this).addClass("counted");
      }
    });
  }
  function scrollTotag(e){
    e.on("click", function(){
      var h = $(this).attr("href");
      if($(h).length){
        $("body, html").animate({scrollTop : $(h).offset().top-50}, 800);
      }
      return false;
    });
  }

  // function notice(){
  //   $("button.accept").on("click", function(){
  //     $.cookie('hide-notice', 1, { expires: 30, path: '/' });
  //     $(".notice-bottom").addClass("hide-notice");
  //   });
  //   if($.cookie('hide-notice')){
  //     $(".notice-bottom").addClass("hide-notice");
  //   }
  // }

  function shareOnTwitter(){
    // $('body').tweetHighlighted({
    //   node: '<a href="#" class="w-button tweet">Tweet</a>',
    //   minLength: 6,
    //   maxLength: 240 * 2,
    //   extra: window.location.href ,
    //   //via: 'waldobroodryk',
    //   popupArgs: 'width=800,height=800,toolbar=0,location=0'
    // });
  }
  function dropDownList(){
    $("body").on("click", ".drop-down-list li", function(){
      $(this).parents(".dropdown-type").removeClass("hover");
      $(this).parent().find("li").removeClass("current");
      $(this).addClass("current");
      $(this).parent().prev().find("span").html($(this).html());
      if($(this).parents(".search-form").length){
        $(this).parents(".search-form").find("input[name='post_type']").val($(this).attr("data-type"));
      }
      if($(this).parents(".training-list-dropdown").length){
        $(this).parents(".form-row").find("input").val($(this).html());
      }
      if($(this).parents(".certification-list-dropdown").length){
        $(this).parents(".form-row").find("input").val($(this).html());
      }
    });

    if($.cookie('training')){
      $(".training-list-dropdown li").each(function(){
        if($(this).attr("data-id") == $.cookie('training')){
          $(this).trigger("click");
        }
      });
    }
    if($.cookie('certification')){
      $(".certification-list-dropdown li").each(function(){
        if($(this).attr("data-id") == $.cookie('certification')){
          $(this).trigger("click");
        }
      });
    }
  }

  function ajaxEvents(){
    $(".upcoming-events-page .more-posts").on("click", function(){
      if(!$(this).hasClass("inprogres")) {
        $(this).addClass("inprogres");
        $(this).trigger("blur");
        var fcount = $(".event-item.featured").length;
        var count = $(".event-item.no-featured").length;


        var cat = $(".filter-item-list li.current").attr("data-cat");
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_events&fcount=' + fcount + '&cat=' + cat + '&count=' + count,
          success: function (html) {
            $(html).hide().appendTo(".events-list").slideDown();
            $(".upcoming-events-page .more-posts").removeClass("inprogres");
            if ($(".events-list").find(".hide-button").length) {
              $(".events-list").next(".event-list-bottom").slideUp();
            } else {
              $(".events-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      return false;
    });
  }

  function ajaxJobs(){
    $(".jobs-section .more-posts").on("click", function(){
      if(!$(this).hasClass("inprogres")) {
        $(this).addClass("inprogres");
        $(this).trigger("blur");
        var count = $(this).parents(".jobs-section").find(".post-item").length;
        var THIS = $(this);
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_jobs&count=' + count,
          success: function (html) {
            $(html).hide().appendTo(THIS.parents(".jobs-section").find(".posts-list")).slideDown();
            $(".jobs-section .more-posts").removeClass("inprogres");
            if (THIS.parents(".jobs-section").find(".posts-list").find(".hide-button").length) {
              THIS.parents(".jobs-section").find(".posts-list").next(".event-list-bottom").slideUp();
            } else {
              THIS.parents(".jobs-section").find(".posts-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      return false;
    });
  }

  function ajaxTraining(){
    $(".training-events-page .more-posts").on("click", function(){
      if(!$(this).hasClass("inprogres")) {
        $(this).addClass("inprogres");
        $(this).trigger("blur");
        var count = $(".event-item").length;
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_trainings&count=' + count,
          success: function (html) {
            $(html).hide().appendTo(".events-list").slideDown();
            $(".training-events-page .more-posts").removeClass("inprogres");
            if ($(".events-list").find(".hide-button").length) {
              $(".events-list").next(".event-list-bottom").slideUp();
            } else {
              $(".events-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      return false;
    });
  }

  function ajaxPosts(){
    $(".posts-section .more-posts").on("click", function(){
      if(!$(this).hasClass("inprogres")) {
        $(this).addClass("inprogres");
        $(this).trigger("blur");
        var count = $(".post-item").length;
        var cat = $(".filter-item-list li.current").attr("data-cat");
        var s = $(".post-search-form-field input").val();
        var tag = $(this).attr("data-tag");
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_posts&count=' + count + '&cat=' + cat + '&s=' + s + '&tag=' + tag,
          success: function (html) {
            $(html).hide().appendTo(".posts-list").slideDown();
            $(".posts-section .more-posts").removeClass("inprogres");
            if ($(".posts-list").find(".hide-button").length) {
              $(".posts-list").next(".event-list-bottom").slideUp();
            } else {
              $(".posts-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      return false;
    });
  }
  function ajaxSearchPosts(){
    $(".clear-seach").on("click", function(){
      $(".post-search-form-field input").val("");
      $("body").removeClass("post-opened-search");
      $(".post-search-bar .clear-seach").removeClass("show");
      var count = 0;
      var cat = $(".filter-item-list li.current").attr("data-cat");
      $.ajax({
        type: 'POST',
        url:  '/wp-admin/admin-ajax.php',
        data: 'action=loadmore_posts&count='+count+'&cat='+cat+'',
        success: function(html){ 
          $(".posts-list").html("");
          $(html).hide().appendTo(".posts-list").slideDown();
          
          if($(".posts-list").find(".hide-button").length){
            $(".posts-list").next(".event-list-bottom").slideUp();  
          }else{
            $(".posts-list").next(".event-list-bottom").show();
          }
        }
      });
      return false;
    });

    $(".post-search-form form").on("submit", function(){
      if($(".post-search-form-field input").val().length > 0){
        $(".post-search-bar .clear-seach").removeClass("show");
        var count = 0;
        var cat = $(".filter-item-list li.current").attr("data-cat");
        var s = $(".post-search-form-field input").val();
        $.ajax({
          type: 'POST',
          url:  '/wp-admin/admin-ajax.php',
          data: 'action=loadmore_posts&count='+count+'&cat='+cat+'&s='+s,
          success: function(html){ 
            $(".posts-list").html("");
            $(html).hide().appendTo(".posts-list").slideDown();
            $(".post-search-bar .clear-seach").addClass("show");
            if($(".posts-list").find(".hide-button").length){
              $(".posts-list").next(".event-list-bottom").slideUp();  
            }else{
              $(".posts-list").next(".event-list-bottom").show();
            }
          }
        });
      }
      return false;
    });
  }

  function searchAutocomplate(){
    var searchRequest;
    $('.search-form-field input').autoComplete({
      minChars: 2,
      source: function(term, suggest){
        try { searchRequest.abort(); } catch(e){}
        searchRequest = $.getJSON("/wp-admin/admin-ajax.php", { searchTerm: term, postType: $(".search-form li.current").attr("data-type"), action: 'search_site' }, function(res) {
          var suggestions = [];
          for (var i=0;i<res.data.length;i++)
            if (~(res.data[i][0] +'`'+ res.data[i][1]).toLowerCase().indexOf(term)) suggestions.push(res.data[i]);
          suggest(suggestions);
        });
      },
      renderItem: function (item, search){
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return '<div class="autocomplete-suggestion" data-link="'+item[1]+'" data-val="'+search+'">'+item[0].replace(re, "<b>$1</b>")+'</div>';
      },
      onSelect: function(e, term, item){
        location.href = item.data('link');
      }
    });
  }
  function searchAutocomplateNews(){
    var searchRequest;
    $('.post-search-form-field input').autoComplete({
      minChars: 2,
      source: function(term, suggest){
        try { searchRequest.abort(); } catch(e){}
        searchRequest = $.getJSON("/wp-admin/admin-ajax.php", { searchTerm: term, postType: "post", action: 'search_site' }, function(res) {
          var suggestions = [];
          for (var i=0;i<res.data.length;i++)
            if (~(res.data[i][0] +'`'+ res.data[i][1]).toLowerCase().indexOf(term)) suggestions.push(res.data[i]);
          suggest(suggestions);
        });
      },
      renderItem: function (item, search){
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return '<div class="autocomplete-suggestion" data-link="'+item[1]+'" data-val="'+search+'">'+item[0].replace(re, "<b>$1</b>")+'</div>';
      },
      onSelect: function(e, term, item){
        location.href = item.data('link');
      }
    });
  }

  function contentHeight(){
    var heightRight = $(".post-content-right-in").height();
    var heightLeft = $(".post-content-left").height();
    if(heightRight > heightLeft){
      $(".post-content-left").css({"height" : heightRight});
    }
  }

  function postContentRight(){
    if($(".post-content-right").length){
      var l = $(".post-content-right").offset().left;
      $(".post-content-right-in").css({
        "left" : l+"px",
        "top" : $("#header").outerHeight()+20,
        "width" : $(".post-content-right").width()
      });

      if(window.pageYOffset + $("#header").outerHeight()+20 > $(".post-content-right").offset().top &&  window.pageYOffset + $(window).height() < $("#footer").offset().top){
        $(".post-content-right-in").removeClass("absolute").addClass("fixed");
      }else if(window.pageYOffset + $(window).height() >= $("#footer").offset().top){
        $(".post-content-right-in").removeClass("fixed").addClass("absolute");

      }else{  
        $(".post-content-right-in").removeClass("fixed absolute");
      }
    }
  }

  function BioTextPosition(){
    $(".full-bio").each(function(){
      var h = $(this).find(".bio-excerpt").height() + 30;
      $(this).find(".entry-content").css({"top" : h});
    });
  }

  function trainingHeight(){
  	let ht = $(".event-item:first .event-item-text").outerHeight();
  	$(".training-side .training-side-in").css({height : ht});
  }

})(jQuery); 

var timoutInterval;
function keyStroke(){
  clearTimeout(timoutInterval);
  timoutInterval = setTimeout( ajaxDYM(),500);
}
function fixSuggestions(link){
  SearchBoxText = document.getElementById('SearchBox').value = link.innerHTML;
  link.innerHTML = "";
  //jQuery(".search-form form").submit();
}
function ajaxDYM(){
  var SearchBoxText = document.getElementById('SearchBox').value;
  o = $Spelling.AjaxDidYouMean(SearchBoxText);
  o.onDidYouMean = function(result){
    var oSuggestionLink= document.getElementById('suggestionLink');
    oSuggestionLink.innerHTML =  result;
  };
}