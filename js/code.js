$(document).ready(function () {
  var audio = document.getElementById('music');
  if (!audio.paused) {
    $(this).find('span').css('backgroundPosition', '100% 0');
  } else {
    $(this).find('span').css('backgroundPosition', '100% -20px');
  }
  $('#u-globalAudio')[0].addEventListener("touchend", function () {
    if (audio.paused) {
      $(this).find('span').css('backgroundPosition', '100% 0');
      audio.play();
    } else {
      $(this).find('span').css('backgroundPosition', '100% -20px');
      audio.pause();
    }
  });
  new Swiper("#swiper-container-v", {
    loop: true,
    direction: "vertical",
    pagination: ".swiper-pagination",
    mousewheelControl: !0,
    watchSlidesProgress: true,
    onInit: function (swiper) {
      swiper.myactive = 0;
    },
    onProgress: function (swiper) {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides[i];
        var progress = slide.progress;
        var translate, boxShadow;
        translate = progress * swiper.height * 0.8;
        scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
        boxShadowOpacity = 0;
        slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
        if (i == swiper.myactive) {
          es = slide.style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
          es.zIndex = 0;
        } else {
          es = slide.style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';
          es.zIndex = 1;
        }
      }
    },
    onTransitionEnd: function (swiper, speed) {
      for (var i = 0; i < swiper.slides.length; i++) { }
      swiper.myactive = swiper.activeIndex;
    },
    onSetTransition: function (swiper, speed) {
      for (var i = 0; i < swiper.slides.length; i++) {
        es = swiper.slides[i].style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
      }
    }
  });
});