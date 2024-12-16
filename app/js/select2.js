$(document).ready(function () {
   $('.re-select-main').select2();
   const selectTwo = document.querySelectorAll('.re-select-ser')
   if (selectTwo) {
      selectTwo.forEach(sl => {
         $(sl).select2();
         $(sl).on('select2:select', function (e) {
            // const selectx = document.querySelectorAll(sl);
            sl.parentElement.parentElement.classList.add('valid')
         });
      })
   }
});