

functionSlider('.hmember-slider', {
   speed: 1800,
   slidesPerView: "auto",
   autoplay: {
      delay: 7000,
   },
});
functionSlider('.student-slider', {
   speed: 1800,
   slidesPerView: "auto",
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 7000,
   },
});


const hcourseThumb = functionThumbSlider('.hcourse-thumb-slider', {
   freeMode: true,
   speed: 1200,
   effect: 'slide',
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   slidesPerView: "auto",
});


functionMainSlider('.hcourse-slider', hcourseThumb, {
   speed: 1500,
   slidesPerView: "auto",
   effect: 'fade',
});

functionSlider('.hbanner-slider', {
   speed: 1800,
   slidesPerView: "auto",
   spaceBetween: 0,
   effect: 'fade',
   autoplay: {
      delay: 7000,
   },
})
