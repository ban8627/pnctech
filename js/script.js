$(document).ready(function () {
  // visual slide
  let swVisual = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sw-visual-bullet-box',
      type: 'bullets',
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
        if (slideTotal == 0) {
          slideTotal = 5;
          swFrac.html("<span class='sw-visual-pgf-current'>" + aBullet + "</span>" + '/' + slideTotal);
        } else {
          swFrac.html("<span class='sw-visual-pgf-current'>" + aBullet + "</span>" + '/' + slideTotal);
        }
      }
    },
    observer: true,
    observeParents: true,
  });

  let visualBt = $('.control-bt');
  visualBt.click(function () {
    let temp = visualBt.hasClass('pause');
    if (temp == true) {
      swVisual.autoplay.stop();
      visualBt.removeClass('pause').addClass('play').text('play_arrow');
    } else {
      swVisual.autoplay.start();
      visualBt.removeClass('play').addClass('pause').text('pause');
    }
  })



  // news-slide
  let newsSwiper = new Swiper('.sw-news', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    pagination: {
      el: '.news-fraction',
      type: 'fraction'
    }
  });

  // left side bar bt
  let leftSide = $('.l-side-bar');
  let leftBtn = leftSide.find('a');

  leftBtn.click(function () {
    leftBtn.removeClass('on');
    $(this).addClass('on');
  })

  // footer - related box
  let fSite = $('.related-site');
  fSite.click(function () {
    $(this).find('.related-list').toggle();
  })
});

window.onload = function () {
  AOS.init();

  window.addEventListener("wheel", function (e) {
    e.preventDefault();
  }, {
    passive: false
  });
  let pncHtml = $("html");
  let page = 1;
  let lSideBt = $('.l-side-bar').find('a');
  const sideBar = $('.side-bar');

  pncHtml.animate({
    scrollTop: 0
  }, 10);

  $(window).on("wheel", function (e) {
    if (pncHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
      lSideBt.removeClass('on');
      lSideBt.eq(page).addClass('on');
      if (page == 2) {
        valueCounter();
        logo.addClass('active');
        mainMenu.addClass('active');
        utillLang.addClass('active');
        siteMapbt.addClass('active');
      }
      if (page == 3) {
        logo.removeClass('active');
        mainMenu.removeClass('active');
        utillLang.removeClass('active');
        siteMapbt.removeClass('active');
      }
      if (page == 4) {
        sideBar.hide();
      }
      if (page == 5) {
        return;
      }
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      lSideBt.removeClass('on');
      lSideBt.eq(page - 2).addClass('on');
      if (page == 5) {
        sideBar.show();
      } 
      if (page == 4) {
        valueCounter();
        logo.addClass('active');
        mainMenu.addClass('active');
        utillLang.addClass('active');
        siteMapbt.addClass('active');
      }
      if (page == 3) {
        logo.removeClass('active');
        mainMenu.removeClass('active');
        utillLang.removeClass('active');
        siteMapbt.removeClass('active');
      }
      if (page == 1) {

        return;
      }
      page--;
    }
    let posTop = (page - 1) * $(window).height();
    pncHtml.animate({
      scrollTop: posTop
    }, 800);
  });
  // header mouse enter event
  let headerWrap = $('.header-wrap');
  let headerHeight = 140;
  let logo = $('.logo > a');
  let gnb = $('.gnb');
  let mainMenu = $('.depth1 > li > a');
  let depth2 = $('.depth2');
  let utillLang = $('.lang');
  let siteMapbt = $('.site-map');

  let headerActive = headerHeight + 250;
  gnb.mouseenter(function () {
    headerWrap.addClass('active').css('height', headerActive);
    logo.addClass('active');
    depth2.css('visibility', 'visible');
    utillLang.addClass('active');
    siteMapbt.addClass('active');
  });
  gnb.mouseleave(function () {
    headerWrap.removeClass('active').css('height', headerHeight);
    logo.removeClass('active');
    depth2.css('visibility', 'hidden');
    utillLang.removeClass('active');
    siteMapbt.removeClass('active');
  });

  // header languge event
  let languge = $(utillLang).find('li');
  languge.click(function (event) {
    event.preventDefault();
    languge.removeClass('active');
    $(this).addClass('active');
  });
  // value count up
  function valueCounter() {
    $('.g-value').each(function () {
      let gvDC = $(this);
      let countTo = gvDC.attr('data-count');
      $({
        countNum: (countTo - 100) < 0 ? 0 : (countTo - 100)
      }).animate({
        countNum: countTo
      }, {
        duration: 1000,
        easing: 'linear',
        step: function () {
          gvDC.text(Math.floor(this.countNum));
        },
        complete: function () {
          gvDC.text(this.countNum);
        }
      });
    });
  };

  window.onresize = (event)=>{
    let winWidth = window.innerWidth;
  if(winWidth <= 2000){
    
  } else if( winWidth <= 1300 ) {
    sideBar.hide();

  } else if ( winWidth <= 800 ) {

  } else if ( winWidth <= 480) {

  }
}
;
};