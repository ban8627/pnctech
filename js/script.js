$(document).ready(function(){
  // header mouse enter event
  let headerWrap = $('.header-wrap');
  let headerHeight = 140;
  let logo = $('.logo > a');
  let gnb = $('.gnb');
  let depth2 = $('.depth2');
  let utillLang = $('.lang');
  let siteMapbt = $('.site-map');

  let headerActive = headerHeight + 250;
  gnb.mouseenter(function(){
    headerWrap.addClass('active').css('height',headerActive);
    logo.addClass('active');
    depth2.css('visibility','visible');
    utillLang.addClass('active');
    siteMapbt.addClass('active');
  });
  gnb.mouseleave(function(){
    headerWrap.removeClass('active').css('height',headerHeight);
    logo.removeClass('active');
    depth2.css('visibility','hidden');
    utillLang.removeClass('active');
    siteMapbt.removeClass('active');
  });

  // header languge event
  let languge = $(utillLang).find('li');
  languge.click(function(event){
    event.preventDefault();
    languge.removeClass('active');
    $(this).addClass('active');
    });


    let swVisual = new Swiper(".sw-visual",{
      loop:true,
      slidesPerView: 1,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },
      speed: 500,
      allowTouchMove: true,
      observer: true,
      observeParents: true,
      pagination: {
        el:'.sw-visual-bullet-box',
        type:'bullets',
        clickable: true,

      },
      paginationClickable: true,
      watchSlidesProgress: true,
      navigation: {
          nextEl: ".sw-visual-next",
          prevEl: ".sw-visual-prev",
      },
    });

    function swFraction(){
      let swBullet = $('.sw-visual-bullet-box > .swiper-pagination-bullet');
      let temp = swBullet.hasClass('swiper-pagination-bullet-active');
      if(temp == true){
        
      }
    }
});


window.onload = function(){
  
  };