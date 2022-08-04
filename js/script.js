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
  console.log(headerActive)
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
});


window.onload = function(){

};