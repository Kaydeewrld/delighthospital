(function($) {
	var anFlag = false;
  var indX;
  var isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
  $(document).ready(function(){
    carouselFlex();
    accordion();
    tabs();
    customForm();
    readMoreLink();
    programDetails();
    animateImages();
    animateBenefitsList();
    careerScripts();
    clientDirectory();
    animateScheme();
    schemeMobile();
    speakersReadBio();
    eventsPage();
    preventEmptySearch();
    searchNav() 
   	$(".i-scheme .i-scheme-row .col-33 .col-in strong").mouseenter(function(){
			anFlag = true;
      indX = $(this).parents(".col-33").attr("data-index");


    }); 
    $(".i-scheme .i-scheme-row .col-33 .col-in strong").mouseleave(function(){
    	if(!$(".i-scheme .i-scheme-row .col-33 .col-in strong").hasClass("active")){
				schemeAnimation.play();
			}
			anFlag = false;
    }); 

    $(".i-scheme .i-scheme-row .col-33 .col-in strong").click(function(e){
			if(!$(this).hasClass("active")){
				$(".i-scheme .i-scheme-row .col-33 .col-in strong").removeClass("active");
				$(".i-scheme .i-scheme-row .col-33 .col-in .i-scheme-popup").fadeOut();
				$(this).addClass("active");
				$(this).next().fadeIn();
				anFlag = true;
      }else{
      	$(".i-scheme .i-scheme-row .col-33 .col-in strong").removeClass("active");
				$(".i-scheme .i-scheme-row .col-33 .col-in .i-scheme-popup").fadeOut();
				schemeAnimation.play();
				anFlag = false;
      }
      e.preventDefault();
      return false;
    });
  });
  $(window).on("load", function(){
   
  });
  $(window).on("scroll", function(){
    animateImages();
    animateBenefitsList();
    animateScheme();
  });
  $(window).on("resize", function(){
   
  }); 

  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
      if(this.value == '-') {
      	this.value = "";	
      }
    });
  };

  function preventEmptySearch() {
    $('.search-form form').on('submit' , function(e) {
      if($('#SearchBox').val() == '') {
        $('.search-form-field').addClass('error');
        e.preventDefault();
        e.stopPropagation();
      }      
    });
    $('.search-form-field').on('keydown' , function(){
      $('.search-form-field').removeClass('error');
    });
  }

  function clientDirectory() {
    $(".inputs-wrap input").inputFilter(function(value) {  return /^-?\d*$/.test(value); });
    $('.inputs-wrap input').bind('paste',function(e) {
      var pasteText = document.querySelector("#insert");
      pasteText.focus();
      document.execCommand("paste");
      setTimeout(function(){
        var str = $('#insert').val();
          var k = 0;
          $('.inputs-wrap input').each(function(){
            $(this).val(str[k]);
            $(this).removeClass('disabled');
            k++;
          });
          $('input[name="code"]').val($('#insert').val());
      },10);
    });  

    $('.inputs-wrap input').keydown(function(e){          
      if($(this).next().length && e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 46 && $(this).val() != '') {
        $(this).next().removeClass('disabled');
        $(this).next().val('');
        $(this).next().trigger('focus');
      }
      if(e.keyCode == 8  && $(this).val() == '') {
        if($(this).prev().length) {
          if($(this).next().val() == '') {
            $(this).next().addClass('disabled');
          }
        }
        $(this).prev().val('');
        $(this).prev().trigger('focus');
      }
      if(e.keyCode == 37) {
       $(this).prev().trigger('focus'); 
      }
      if(e.keyCode == 39) {
        $(this).next().val('');
        $(this).next().trigger('focus');
      }
      $('.inputs-wrap input').focus(function(){
        $(this).val('');
      });

      var _val = '';
      $('.inputs-wrap input').each(function(){
        if($(this).val() == '') {
          _val += ' ';
        } else {
          _val += $(this).val();  
        }          
      });

      $('input[name="code"]').val(_val);      
    });

    $('.inputs-wrap input').keyup(function(e){ 
      // if($(this).next().length && e.keyCode != 8 && e.keyCode != 46 && $(this).val() != '') {
      //   $(this).next().removeClass('disabled');
      //   $(this).next().trigger('focus');
      // }           
      var _val = '';
      $('.inputs-wrap input').each(function(){
        if($(this).val() == '') {
          _val += ' ';
        } else {
          _val += $(this).val();  
        }            
      });
      $('input[name="code"]').val(_val);
      $('.inputs-wrap').removeClass('error'); 
    });

    $('input[name="company_name"]').focus(function(){
      $(this).removeClass('error'); 
      $(this).parent('.col').removeClass('error');
    }); 

    $('.cd-search form').on('submit' , function(e){
      var flag = 0;
      if($('input[name="company_name"]').val() == '') {
        $('input[name="company_name"]').addClass('error'); 
        $('input[name="company_name"]').parent('.col').addClass('error');
        flag = 1;
      } 
      // if($('input[name="code"]').val() == '' || $('.inputs-wrap input.disabled').length != 0) {
      //   $('.inputs-wrap').addClass('error'); 
      //   flag = 1;
      // } 
      if(flag == 0) {
        var code = $('input[name="code"]').val();
        var company =  $('input[name="company_name"]').val();
        company = encodeURIComponent(company);
        console.log(encodeURIComponent(company));
        $.ajax({
          type: 'POST',
          url:  '/wp-admin/admin-ajax.php',
          data: 'action=sertificate_search&code=' + code + '&company=' + company,
          success: function(html){ 
            $('.cd-results').addClass('show');
            $('.cd-results').html(html);
            $("html, body").animate({ scrollTop: $('.cd-results').offset().top - $('#header').innerHeight()}, 500);
          }
        });
      }
      e.preventDefault();
      e.stopPropagation();
    });
  }

  function readMoreLink() { 
    $('body').on('click' , '.read-more:not(".more-posts")' , function(e){
      $(this).trigger("blur");
      $(this).prev('.hidden-part').slideToggle();      
      $(this).toggleClass('clicked');
      if($(this).hasClass('clicked')) {
        if($("html[lang='fr-FR'").length) {
          $(this).find('span').text('Lire moins');
        }else{
          $(this).find('span').text('Read Less');
        }
      } else {
        if($("html[lang='fr-FR'").length) {
          $(this).find('span').text('Voir Plus');
        }else{
          $(this).find('span').text('Read More');
        }
      }
      e.preventDefault();
    });
  }

  function carouselFlex() { 
    $('.carousel-section .carousel-slider').on("init", function(){
      $(this).next(".slider-control").append($(this).find(".slick-prev"));
      $(this).next(".slider-control").append($(this).find(".slick-dots"));
      $(this).next(".slider-control").append($(this).find(".slick-next"));
    });   

    $('.carousel-section .carousel-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
    });
  }

  function accordion() { 
    $('body').on('click' , '.accordion-title' , function(e){
      if($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).parent().removeClass('exp');
        $(this).next().slideUp();  
      } else {
        $(this).parents('.accordion-right').find('.expanded').next().slideUp();
        $(this).parents('.accordion-right').find('.expanded').removeClass('expanded');

        $(this).addClass('expanded');
        $(this).parent().addClass('exp');

        $(this).next().slideDown();  
      }
      var This = $(this);
      setTimeout(function(){
        $("body, html").animate({ scrollTop : This.offset().top - 80},800)
      }, 400);

      e.preventDefault();
    });
  }

  function tabs() { 
    
    $(".tab-title-list ul li").each(function(){
      if($(this).hasClass("current")){
        var i = $(this).index();
        $(this).parents(".tab-title-list").next().find(".tab-inner").eq(i);
      }
    });

    $('body').on('click' , '.tab-title-list ul a' , function(e){
      var i = $(this).parent().siblings('.current').index() + 1;
      $(this).parent().siblings('.current').removeClass('current');
      $(this).parents('.tab-title-list').next().find('.tab-inner-' + i).hide();

      i = $(this).parent().index() + 1;
      $(this).parent().addClass('current');
      $(this).parents('.tab-title-list').next().find('.tab-inner-' + i).fadeIn(600);     

      
      $(this).parents('ul').next().text($(this).text());
      if($(window).width() < 768 && $(this).parents('.tab-title-list').hasClass('opened')){
        $(this).parents('ul').slideUp(); 
        $(this).parents('.tab-title-list').removeClass('opened');
      }

      e.preventDefault();
    });

    $('body').on('click' , '.tab-title-list .current-tab' , function(e){
      $(this).prev().slideToggle();
      $(this).parents('.tab-title-list').addClass('opened');
      e.preventDefault();
    });

    $('body').on('touchstart click', function (e) {  
      if ($('.tab-title-list').hasClass('opened') && $(e.target).parents('.tab-title-list').length != 1) {
        $('.tab-title-list ul').slideToggle();
        $('.tab-title-list').toggleClass('opened');   
      }
    });
    
  }

  function customForm() {
    $(".with-file").each(function(){
      $(this).append('<a class="remove-file" href="javascript();"><span class="hidden">remove</span></a>');
       $(this).find("input").attr("autocomplete", "off")
    });

         

    $(".remove-file").on("click",function(){
      $(this).parents(".with-file").find("input").val("");
      $(this).parents(".with-file").removeClass("selected");
      $(this).parents(".with-file").find(".file-name-contact").text("Choose a file");
      
      if($(this).parents(".with-file").next().find("input").val() == ""){
        $(this).parents(".with-file").next().slideUp();
        $(this).parents(".with-file").next().removeClass("selected");
        $(this).parents(".with-file").next().find(".file-name-contact").text("Choose a file");
      }
      return false;
    });
    

    $("input[type=file]").on("change", function() {
      var valFile = $(this).val().replace("C:\\fakepath\\",'');
      $(this).parent().siblings(".file-name-contact").text(valFile);
      if($(this).val().length){
        $(this).parents(".with-file").addClass("selected");
      }
      if($(this).parents(".with-file").next(".with-file").length){
        $(this).parents(".with-file").next(".with-file").slideDown();
      }

    });

    if($('.select-wrap').length) {
      
      $(".select-wrap select").each(function(){
        if($(this).attr("id") =="positions"){
          $.ajax({
            type: 'POST',
            url:  '/wp-admin/admin-ajax.php',
            data: 'action=get_jobs',
            success: function(html){ 
              $('#positions').append(html).fancySelect().on('change.fs', function() {
                $(this).parent().addClass('changed');
                if(isiOS){
                  //alert($(this).parent().find("select").val());
                  $(this).parent().find(".trigger").html($(this).parent().find("select").val());
                }
              });  
            }
          });
        }else if($(this).attr("id") =="trs"){
          $.ajax({
            type: 'POST',
            url:  '/wp-admin/admin-ajax.php',
            data: 'action=get_trainings',
            success: function(html){ 
              $('#trs').append(html).fancySelect().on('change.fs', function() {
                $(this).parent().addClass('changed');
                if(isiOS){
                  //alert($(this).parent().find("select").val());
                  $(this).parent().find(".trigger").html($(this).parent().find("select").val());
                }
                
                if($(this).val() == "Other"){
                  $(".other-option").slideDown();
                }else{
                  $(".other-option").slideUp();
                }
              });  
            }
          });
        }else{
          $(this).fancySelect({forceiOS : true}).on('change.fs', function() {
            $(this).parent().addClass('changed');
            if(isiOS){
              //alert($(this).parent().find("select").val());
              $(this).parent().find(".trigger").html($(this).parent().find("select").val());
            }
   
            

          });   
        }
      });
      
    }
  }

  function programDetails() { 
    $('body').on('click' , '.program-details .day a' , function(e){
      if($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).next().slideUp();  
      } else {
        $(this).parents('.program-details-inner').find('.expanded').next().slideUp();
        $(this).parents('.program-details-inner').find('.expanded').removeClass('expanded');
        $(this).addClass('expanded');
        $(this).next().slideDown();  
      }
      
      e.preventDefault();
    });
  }

  function parallaxZoomOut(el, ind) {//ind = 0.02
    if(el.length){
      el.each(function(){ 
        var _offset = 1.2 - (window.pageYOffset + wHeight/2 - 100 - $(this).parent().offset().top)*ind/100;
        if(_offset < 1) {
          _offset = 1;
        }
    
        TweenMax.to($(this), 
          0.8, {css:{scale:_offset}});
      });   
    } 
  }
  function animateImages() {
    parallaxZoomOut($('.upcoming-single .upcoming-single-inner .upcoming-single-right span'), 0.07);
    parallaxZoomOut($('.career-section .career-section-inner .career-section-right img'), 0.07);
    parallaxZoomOut($('.uppcoming-item .uppcoming-item-image span img'), 0.07);
    //parallaxZoomOut($('.hero-flex .hero-flex-right span img'), 0.07);
    parallaxZoomOut($('.post-content-left .img-wrap img.alignnone:not(.not-zoom)'), 0.07);
    parallaxZoomOut($('.content-with-image .content-with-image-top-left span img'), 0.07);
    parallaxZoomOut($('.upcoming-training .upcoming-training-inner .upcoming-training-left .upcoming-info-image span'), 0.07);
    
    if($('.type-devices-list').length) {
      if(window.pageYOffset + wHeight*0.7 > $('.type-devices-list').offset().top){
        $('.type-devices-list').addClass('animate');
      }
    }
  }

  function animateBenefitsList() {
    $('.benefits .benefits-inner .benefits-right ul li').each(function() {

      if($(this).offset().top > (window.pageYOffset + wHeight)) {      	
        $(this).removeClass('animate');
      }
      if(window.pageYOffset + wHeight - 200 > $(this).offset().top) {
        $(this).addClass('animate');
      }
    });
  }

  function careerScripts() {
    // $('body').on('click' , '.position-heading' , function(e){           
    //   if(!$(e.target).hasClass('arrow')) {
    //     $(this).parent().toggleClass('expanded');
    //     $(this).next().slideToggle();      
    //     e.preventDefault();
    //   }
    // });
  }
  function animateScheme() {
    if($('.i-scheme').length) {
      if(window.pageYOffset + wHeight*0.5 > $('.i-scheme').offset().top && !$('.i-scheme').hasClass('animate')) {
        schemeAnimation = new TimelineMax({paused: true});
        function detectPositionDot(){
          //alert(schemeAnimation.progress());
          // alert(schemeAnimation.reversed())
          if(anFlag){
         
            if(indX == 0){
              if(schemeAnimation.progress() > 0.01){
                schemeAnimation.tweenTo(0);
              }
            }else if(indX == 1){
              if(schemeAnimation.progress() > 0.19){
                schemeAnimation.tweenTo(2);
              }
            }else if(indX == 2 ){
              if(schemeAnimation.progress() > 0.34){
                schemeAnimation.tweenTo(4);
              }
            }else if(indX == 3 ){
              if(schemeAnimation.progress() > 0.578){
                schemeAnimation.tweenTo(7);
              }
            }else if(indX == 4 ){
              if(schemeAnimation.progress() > 0.808){
                schemeAnimation.tweenTo(8);
              }
            }else if(indX == 5 ){
              if(schemeAnimation.progress() > 0.99){
                schemeAnimation.tweenTo(10);
              }
            }

            

            // if (schemeAnimation.reversed()) {
            //   schemeAnimation.pause();
            // }
          }

          // if(indX == 0){
          //   anFlag
          // }else if(indX == 1){
          //   schemeAnimation.reverse();
          // }else if(indX == 2){
          //   schemeAnimation.reverse();
          // }else if(indX == 3){
          //   schemeAnimation.reverse();
          // }else if(indX == 4){
          //   schemeAnimation.reverse();
          // }else if(indX == 5){
          //   schemeAnimation.reverse();
          // }
        }

        schemeAnimation   
        .to('.scheme-wrap span', 0.5, {y: 100,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 0) 
        .to('.scheme-wrap span', 0.5, {x: 110,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 0.5) 
        //.to('.scheme-wrap span', 0.5, {onComplete:function(){detectPositionDot()}})
        .to('.scheme-wrap span', 0.5, {x: 208,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}}, 2.5)         
        .to('.scheme-wrap span', 0.5, {y: 0,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 3) 
        .to('.scheme-wrap span', 0.5, {x: 309,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 3.5)
        //.to('.scheme-wrap span', 0.5, {onComplete:function(){detectPositionDot()}}, 4)
        .to('.scheme-wrap span', 0.5, {x: 409,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 5.5)
        //.to('.scheme-wrap span', 0.5, {onComplete:function(){detectPositionDot()}}, 7) 
        .to('.scheme-wrap span', 0.5, {y: 100,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 6) 
        .to('.scheme-wrap span', 0.5, {x: 506,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 6.5)
        //.to('.scheme-wrap span', 0.5, {onComplete:function(){detectPositionDot()}}, 8)
        .to('.scheme-wrap span', 0.5, {x: 601,  ease:Linear.easeNone,onComplete:function(){detectPositionDot()}} , 8.5)        
        .to('.scheme-wrap span', 0.5, {y: 0,  ease:Linear.easeNone, onComplete:function(){detectPositionDot()}} , 9) 
        .to('.scheme-wrap span', 0.5, {x: 702,  ease:Linear.easeNone,onComplete:function(){detectPositionDot()}} , 9.5)
        //.to('.scheme-wrap span', 0.5, {onComplete:function(){detectPositionDot()}}, 10)
        .to('.scheme-wrap span', 0.5, {x: 802,  ease:Linear.easeNone,onComplete:function(){detectPositionDot()}} , 11)        
        .to('.scheme-wrap span', 0.5, {y: 100,  ease:Linear.easeNone,onComplete:function(){detectPositionDot()}} , 11.5) 

        .set('.scheme-wrap span' , {className:"-=hide"}, 0)
        .set('.i-scheme-row-top .col-0' , {className:"+=show"}, 0)
        .set('.i-scheme-row-bottom .col-1' , {className:"+=show"}, 1)
        .set('.i-scheme-row-top .col-2' , {className:"+=show"}, 4)
        .set('.i-scheme-row-bottom .col-3' , {className:"+=show"}, 7)
        .set('.i-scheme-row-top .col-4' , {className:"+=show"}, 10)
        .set('.i-scheme-row-bottom .col-5' , {className:"+=show"}, 12)
        .set('.scheme-wrap span' , {className:"+=hide"}, 13);
        //.set('.scheme-wrap .lines' , {className:"+=animate"}, 13);

        $('.i-scheme').addClass('animate');
        var _h = $('.i-scheme-row-top').innerHeight() + 141 - 17;
        $('.lines').css('height' , _h + 'px');
        schemeAnimation.delay(0.5);
        schemeAnimation.timeScale( 1.5 );
        schemeAnimation.play();      
        
      } 

   
    }     
  }
  function schemeMobile() {
    if($('.i-scheme').length) {
      $('.i-scheme .inner').append('<div class="i-scheme-row-m wow fadeIn" />');
      //$('.i-scheme-row-m').append('<h3>' + $('.i-scheme-row-top h3').text() + '</h3>');
      var topBlocks = $('.i-scheme-row-top .col-33');
      var bottomBlocks = $('.i-scheme-row-bottom .col-33');
      
      
      for(var i=0; i < topBlocks.length; i++) {
        $('.i-scheme-row-m').append($(topBlocks[i]).html());
        $('.i-scheme-row-m').append($(bottomBlocks[i]).html());
      }
    }
  }

  function speakersReadBio() {
    $('body').on('click' , '.read-bio, .btn-bio' , function(e) {
      var curposition = $(window).scrollTop();
      $("#wrapper").css({
        "margin-top": -curposition + "px"
      });
      $("body, html").addClass("overlayed");      
      $('.full-bio-' + $(this).attr('data-bio')).addClass("active");
      $("html").addClass("opened-lightbox");
      e.preventDefault();
    });     
    $('body').on('click' , '.full-bio .close' , function(e) {
      $("html").removeClass("opened-lightbox");    
      var scrolPosition = $("#wrapper").css('margin-top').replace("px", "");
      setTimeout(function() {
        scrolPosition = -1 * scrolPosition;
        $("#wrapper").css({
          "margin-top": "0px"
        });
        $("body, html").removeClass("overlayed");
        $("body,html").scrollTop(scrolPosition);
        $('.full-bio.active').removeClass("active");
      }, 100);
      e.preventDefault();
    });     
  }

  function eventsPage() {
    if($('.filter-item-list').length && $.cookie('event-filter') ) {
      $("html, body").animate({ scrollTop: $('.filter-item-list').offset().top - $('#header').innerHeight()}, 1);
    }
  }

  function searchNav() {
    if($('.search-tabs').length && $.cookie('search-filter')) {
      $("html, body").animate({ scrollTop: $('.search-tabs').offset().top - $('#header').innerHeight()}, 1);
    }
  }
  
  
})(jQuery); var schemeAnimation;
