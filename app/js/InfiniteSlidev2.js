
if ($('.header-top-slider').length !== 0) {

   $(function () {
      $('.infinityslider-1 .swiper-wrapper').infiniteslide({
         'speed': 100, //speed this is px/min
         'direction': 'left', //choose  up/down/left/right
         'pauseonhover': true, //if true,stop onmouseover
         'responsive': false, //width/height recalculation on window resize. child element's width/height define %/vw/vh,this set true.
         'clone': 1 //if child elements are too few (elements can't "infinite"), set 2 or over.
      });
   });
}

if ($('.abPartner-slider').length !== 0) {

   $(function () {
      $('.infinityslider-2 .swiper-wrapper').infiniteslide({
         'speed': 100, //speed this is px/min
         'direction': 'left', //choose  up/down/left/right
         'pauseonhover': true, //if true,stop onmouseover
         'responsive': false, //width/height recalculation on window resize. child element's width/height define %/vw/vh,this set true.
         'clone': 1 //if child elements are too few (elements can't "infinite"), set 2 or over.
      });
   });
}