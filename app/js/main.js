AOS.init({
   startEvent: 'DOMContentLoaded',
   offset: 0,
   duration: 1200,
   delay: '200',
   easing: 'ease',
   once: true,
   mirror: true,
   disable: function () {
      return $(window).width() <= 768;
   },
});

$('.gallery').each(function () {
   const $this = $(this);
   const $item = $this.find('.gItem');
   $(function () {
      $this.lightGallery({
         selector: $item,
         thumbnail: true,
         zoom: true,
      });
   });
});


function functionSlider(element, customizeOption, typePagi) {
   const swiperSlider = document.querySelectorAll(element);
   if (swiperSlider.length > 0) {
      swiperSlider.forEach(item => {
         const swiper = item.querySelector('.swiper');
         const pagi = item.querySelector('.swiper-pagination');
         const next = item.querySelector('.swiper-next');
         const prev = item.querySelector('.swiper-prev');

         // Mặc định kiểu pagination là 'bullets' nếu không chỉ định
         if (!typePagi) {
            typePagi = 'bullets';
         }

         const swiperOptions = {
            watchSlidesProgress: true,
            pagination: {
               el: pagi,
               type: typePagi,
               clickable: true,
            },
            navigation: {
               nextEl: next,
               prevEl: prev,
            },
            fadeEffect: {
               crossFade: true,
            },
            ...customizeOption,
         };

         // Nếu `typePagi` là `scrollbar`, cấu hình lại cho Swiper
         if (typePagi === 'scrollbar') {
            swiperOptions.scrollbar = {
               el: pagi,
               draggable: true,
            };
            delete swiperOptions.pagination; // Không dùng `pagination` khi sử dụng `scrollbar`
         }

         var slide = new Swiper(swiper, swiperOptions);

         // Kiểm tra và ẩn nút điều hướng nếu số lượng slide không vượt quá slidesPerView
         function toggleNavigationButtons() {
            const totalSlides = slide.slides.length;
            const slidesPerView = slide.params.slidesPerView === 'auto' ? 1 : slide.params.slidesPerView;

            if (totalSlides <= slidesPerView) {
               if (next) next.style.display = 'none';
               if (prev) prev.style.display = 'none';
            } else {
               if (next) next.style.display = 'flex';
               if (prev) prev.style.display = 'flex';
            }
         }

         // Kiểm tra ngay khi khởi tạo Swiper
         slide.on('init', toggleNavigationButtons);
         slide.on('resize', toggleNavigationButtons);
         slide.init();

         // Tìm và cuộn tới slide chứa .swiper-btn.active
         const activeSlide = item.querySelector('.swiper-slide .swiper-btn.active');
         if (activeSlide) {
            const activeSlideIndex = Array.from(slide.slides).findIndex(s => s.contains(activeSlide));
            if (activeSlideIndex !== -1) {
               slide.slideTo(activeSlideIndex, 0);
            }
         }
      });
   }
}

function functionThumbSlider(element, customizeOption) {
   const swiperSlider = document.querySelectorAll(element);
   const swiperInstances = [];

   swiperSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');

      const slide = new Swiper(swiper, {
         watchSlidesProgress: true,
         ...customizeOption,
      });

      swiperInstances.push(slide);
   });

   return swiperInstances;
}

function functionMainSlider(element, thumbSliderInstances, customizeOption, typePagi) {
   const swiperSlider = document.querySelectorAll(element);

   if (swiperSlider) {
      swiperSlider.forEach((item, index) => {
         const swiper = item.querySelector('.swiper');
         const pagi = item.querySelector('.swiper-pagination');
         const next = item.querySelector('.swiper-next');
         const prev = item.querySelector('.swiper-prev');

         if (!typePagi) {
            typePagi = 'bullets';
         }

         new Swiper(swiper, {
            watchSlidesProgress: true,
            pagination: {
               el: pagi,
               type: typePagi,
               clickable: true,
            },
            navigation: {
               nextEl: next,
               prevEl: prev,
            },
            fadeEffect: {
               crossFade: true
            },
            thumbs: {
               swiper: thumbSliderInstances[index], // Sử dụng thumb slider tương ứng
            },
            ...customizeOption,
         });
      });
   }
}

function functionSliderGrid(element, customizeOption, typePagi, totalSlides) {
   const swiperSliders = document.querySelectorAll(element);
   if (swiperSliders) {
      swiperSliders.forEach(slider => {
         const swiper = slider.querySelector('.swiper');
         const pagi = slider.querySelector('.swiper-pagination');
         const next = slider.querySelector('.swiper-next');
         const prev = slider.querySelector('.swiper-prev');
         if (!typePagi) {
            typePagi = 'bullets';
         }

         // Tính số hàng dựa trên số lượng slide của slider hiện tại
         const slideCount = slider.querySelectorAll('.swiper-slide').length;
         const rows = slideCount < totalSlides ? 1 : 2;

         var slide = new Swiper(swiper, {
            watchSlidesProgress: true,
            pagination: {
               el: pagi,
               type: typePagi,
               clickable: true,
            },
            navigation: {
               nextEl: next,
               prevEl: prev,
            },
            fadeEffect: {
               crossFade: true
            },
            grid: {
               rows: rows,
               fill: 'row',
            },
            ...customizeOption  // Sử dụng toàn bộ customizeOption
         });
      });
   }
}
functionSlider('.fpopup-slider', {
   speed: 1200,
   slidesPerView: 1,
});
document.addEventListener('DOMContentLoaded', function () {
   const fpopup = document.querySelector('.fpopup');
   const fpopupbody = document.querySelector('body');

   // Kiểm tra nếu popup tồn tại thì mới tiếp tục
   if (fpopup) {
      // Thêm class "open" mặc định khi trang tải
      if (!fpopup.classList.contains('open')) {
         fpopup.classList.add('open');
         fpopupbody.classList.add('no-scroll'); // Tắt scroll khi popup mở
      }

      const closeBtn = document.querySelector('.fpopup-close');
      const overlay = document.querySelector('.fpopup-overlay');

      // Hàm đóng popup bằng cách remove class "open"
      function closePopup() {
         if (fpopup.classList.contains('open')) {
            fpopup.classList.remove('open');
            fpopupbody.classList.remove('no-scroll'); // Bật scroll khi popup đóng
         }
      }

      // Lắng nghe sự kiện click vào nút close
      if (closeBtn) {
         closeBtn.addEventListener('click', closePopup);
      }

      // Lắng nghe sự kiện click vào overlay
      if (overlay) {
         overlay.addEventListener('click', closePopup);
      }

      // Tự động xóa class "open" sau 30 phút
      setTimeout(function () {
         closePopup();
      }, 1800000); // 1800000 milliseconds = 30 minutes
   }
});

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// Hàm để tạm dừng Lenis
function stopLenis() {
   // lenis.stop();
}

// Hàm để kích hoạt lại Lenis
function startLenis() {
   // lenis.start();
}

// const sections = document.querySelectorAll('main section:not(.sec-load)');

// sections.forEach((section, index) => {
//   section.style.zIndex = index + 1; // Tăng dần z-index từ 1
// });

document.addEventListener('DOMContentLoaded', function () {
   const videoJs = document.querySelector('.videoJs');
   if (videoJs) {
      const video = videoJs.querySelector('video');
      const videoBtn = document.querySelector('.videoBtnJs');
      videoBtn.classList.add("active");
      // Bắt sự kiện click vào nút
      videoBtn.addEventListener('click', function () {
         if (video.paused) {
            video.play();
            videoBtn.classList.add("active");
         } else {
            videoBtn.classList.remove("active");
            video.pause();
         }
      });
   }

});

function logMess(mess) {
   console.log(mess)
}

window.logMess = logMess;
window.functionSlider = functionSlider;
window.functionThumbSlider = functionThumbSlider;
window.functionMainSlider = functionMainSlider;
window.functionSliderGrid = functionSliderGrid;

