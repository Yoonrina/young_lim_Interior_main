$(function(){

  //header hover
  $('header').mouseover(function(){
    $('header').addClass('white');
  });

  $('header').mouseleave(function(){
    curr = $(window).scrollTop();

    $('header').removeClass('white');
    $('.gnb_menu_box').stop().animate({height:0},200,'easeOutQuad');
    $('.gnb_menu_box').removeClass('op1');
    $('.gnb_third_box').removeClass('on');
    $('.gnb_menu_box').css({'min-height':0});
    if(curr > 0){
      $('header').addClass('white');
    }
    if($('.search_area').height() > 0){
      $('header').addClass('white');
    }
  });

  //header scroll
  $('body').on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    curr = $(window).scrollTop();
    //console.log(wheel+'////'+curr);

    if(wheel > 0){
      $('header').removeClass('hide');
      $('header').addClass('white');
        if(curr <= 200){
          $('header').removeClass('white');
            if($('.gnb_menu_box').hasClass('op1')){
              $('header').addClass('white');
            }
        }
    }else{
      $('header').addClass('hide');
      $('.gnb_menu_box').stop().animate({height:0},200,'easeOutQuad');
    }
  });
  $(document).keydown(function() {
    curr = $(window).scrollTop();
    if(curr <= 200){
      $('header').removeClass('white');
    }else{
      $('header').addClass('white');
    };
  });
  

  //sub box
  $('.open_sub').mouseover(function(){
    h = $('.gnb_menu_box').children().outerHeight();
    target = $(this).children('a').attr('href');

    $('.gnb_menu_box').stop().animate({height:h},200,'easeOutQuad');
    $('.gnb_menu_box').addClass('op1');
    $('header').addClass('white');

    $('.menu_item').removeClass('show');
    $(target).addClass('show');
  });
  
  $('.not').mouseover(function(){
    $('.gnb_menu_box').stop().animate({height:0},200,'easeOutQuad');
    $('.gnb_menu_box').removeClass('op1');
  });


  //gnb_third_box
  $('.gnb_sub_box .g_s_item').mouseover(function(){
    third = $(this).find('.gnb_third_box');
    h = third.height()+50;

    $('.gnb_third_box').removeClass('on');
    third.addClass('on');

    $('.gnb_menu_box').css({'min-height':360});
    $('.gnb_menu_box').stop().animate({height:h},200);

  });

  //gnb_menu_slide
  var swiper = new Swiper(".slid_box", {
    cssMode: true,
    loop:true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".slid_box .next",
      prevEl: ".slid_box .prev",
    },
    pagination: {
      el: ".slid_box .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  //search
  $('.search').click(function(e){
    e.preventDefault();
    h = $('.search_area .inner').outerHeight();
    
    if($('.search_area').height() > 0){
      $('.search_area').stop().animate({height:0},200,'easeOutQuad');
    }else{
      $('.search_area').stop().animate({height:0},200,'easeOutQuad');
      $('.search_area').stop().animate({height:h},200,'easeOutQuad');
        if($('.gnb_menu_box').height()>0){
          $('.gnb_menu_box').stop().animate({height:0},200,'easeOutQuad');
          $('.gnb_menu_box').css({'min-height':0});
        }
    }
  });


  // sc_main_vis
  var swiper = new Swiper(".vis_box", {
    cssMode: true,
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    mousewheel: true,
    keyboard: true,
  });

  $('.vis_txt').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 50
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"0% 100%",
        end:"100% 0%",
      //markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:2,
    });
  });


  // sc_product
  var swiper = new Swiper(".pro_box", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //sc_style_proposal
  $('.tab_title .tab_link').click(function(e){
    e.preventDefault();

    target = $(this).attr('href');

    $('.tab_link').removeClass('on');
    $(this).addClass('on');

    $('.all_layout').removeClass('on');
    $(target).addClass('on');
  });


  $('.modern').each(function(index,item){
    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 100
    }
    gsap.fromTo(item,{
      yPercent:yVal,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:item,
        start:"-50% 100%",
        end:"0% 100%",
        //markers:true,
        scrub:5,
      },
      opacity:1,
      yPercent:0,
      duration:0.5,
    })
  })
  $('.modern_topic h3').each(function(index,item){
    gsap.fromTo(item,{
      yPercent:50,
    },{
      scrollTrigger:{
        trigger:item,
        start:"-50% 100%",
      //markers:true,
      scrub:0.5,
      },
      yPercent:0,
      duration:1,
    });
  });


  $('.ncu').each(function(index,item){
    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 0
    }
    gsap.fromTo(item,{
      yPercent:yVal,
      opacity:0,
    },{
      scrollTrigger:{
        trigger:item,
        start:"-270% 100%",
        end:"-100% 0%",
        //markers:true,
        scrub:1,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })
  $('.ncu_topic h3').each(function(index,item){
    gsap.fromTo(item,{
      yPercent:50,
    },{
      scrollTrigger:{
        trigger:item,
        start:"-1000% 100%",
        end:"-900% 0%",
      //markers:true,
      scrub:0.5,
      },
      yPercent:0,
      duration:1,
    });
  });



  //sc_brand_intro
  $('.vidio_btn').click(function(e){
    e.preventDefault();
    $('.sc_brand_intro .vidio_box').addClass('play');
    $('.sc_brand_intro iframe').attr('src','https://www.youtube.com/embed/L3GplJfWC-s?autoplay=1');
  });



  //sc_pick
  var teb_btn = ['키친/붙박이장', '바스/타일', '도어', '중문', '창호', '몰딩/월/마루'];
  var swiper = new Swiper('.teb_img', {
    cssMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (teb_btn[index]) + '</span>';
        },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    mousewheel: true,
    keyboard: true,
  });





  //motion
  $('.up_item').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 100
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
      // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
      // stagger:0.5,
    });
  });



  //slide btn hover icon
  $('.s_btn').mousemove(function(e){
    // console.log(1);
    child = $('.cursor');

    $('.cursor').addClass('show');

    if($(this).hasClass('swiper-button-disabled')){
      $('.cursor').addClass('disabled');
    }else{
      $('.cursor').removeClass('disabled');
    }

    w = child.width()/2
    h = child.height()/2

    gsap.to('.cursor',{
      x:e.clientX-w,
      y:e.clientY-h,
      duration:0.1
    })
  });


  $('.s_btn.next').hover(function(){
    $('.cursor').addClass('right')
  },function(){
    $('.cursor').removeClass('right')
  })


  $('.s_btn').mouseleave(function(){
    $('.cursor').removeClass('show')
   })



});