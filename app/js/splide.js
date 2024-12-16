const hpartner = document.querySelectorAll(".hpartner-slider .splide")
if (hpartner) {
   hpartner.forEach((splidex, index) => {
      new Splide(splidex, {
         type: 'loop',
         drag: 'free',
         // focus: 'center',
         perMove: 1,
         perPage: 7,
         direction: index == 1 ? "rtl" : "ltr",
         autoScroll: {
            speed: 0.5,
         },
         //   breakpoints: {
         //     420: {
         //       perPage: 2,
         //     },
         //     501: {
         //       perPage: 3,
         //     },
         //     769: {
         //       perPage: 4,
         //     }
         //   },
      }).mount(window.splide.Extensions);
   })
}
const gallery = document.querySelectorAll(".hgallery-slider .splide")
if (gallery) {
   gallery.forEach((splidex, index) => {
      new Splide(splidex, {
         type: 'loop',
         drag: 'free',
         // focus: 'center',
         perMove: 1,
         perPage: 7,
         direction: index == 1 ? "rtl" : "ltr",
         autoScroll: {
            speed: 0.5,
         },
         //   breakpoints: {
         //     420: {
         //       perPage: 2,
         //     },
         //     501: {
         //       perPage: 3,
         //     },
         //     769: {
         //       perPage: 4,
         //     }
         //   },
      }).mount(window.splide.Extensions);
   })
}