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

  // visual slide
  let swVisual = new Swiper(".sw-visual",{
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el:'.sw-visual-bullet-box',
      type:'bullets',
      clickable: true,
    },
    navigation: {
        nextEl: ".sw-visual-next",
        prevEl: ".sw-visual-prev",
    },
    on: {      
      slideChange: function () {
        let aBullet = this.realIndex + 1;
        let slideTotal = $('.sw-visual-bullet-box > span').length;
        let swFrac = $('.sw-visual-pgf');
        if(slideTotal == 0){
          slideTotal = 5;
          swFrac.html( "<span class='sw-visual-pgf-current'>" + aBullet + "</span>" + '/' + slideTotal );
        }else{
          swFrac.html( "<span class='sw-visual-pgf-current'>" + aBullet + "</span>" + '/' + slideTotal );
        }
      }
    },
    observer: true,
    observeParents: true,
  });

  let visualBt = $('.control-bt');
  visualBt.click(function(){
    let temp = visualBt.hasClass('pause');
    if(temp == true){
      swVisual.autoplay.stop();
      visualBt.removeClass('pause').addClass('play').text('play_arrow');
    }else {
      swVisual.autoplay.start();
      visualBt.removeClass('play').addClass('pause').text('pause');
    }
  })

  // value count up
  function valueCounter() {
    $('.g-value').each(function () {
      let gvDC = $(this);
      let countTo = gvDC.attr('data-count');
      $({countNum: (countTo - 100) < 0 ? 0 : (countTo - 100)}).animate({ 
        countNum: countTo },
        { duration: 1000,
          easing: 'linear',
          step: function () {
            gvDC.text(Math.floor(this.countNum));
          },
          complete: function () {
            gvDC.text(this.countNum);
          }
        }
      );
    });
  };
  valueCounter();

  // news-slide
  let newsSwiper = new Swiper('.sw-news',{
    slidesPerView: 3,
    spaceBetween: 30,
    navigation:{
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    pagination:{
      el:'.news-fraction',
      type:'fraction'
    }
  });



  // footer - related box
  let fSite = $('.related-site');
  fSite.click(function(){
    $(this).find('.related-list').toggle();
  })
});

window.onload = function(){
  
  };