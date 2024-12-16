const hdSIcon = document.querySelector('.hd-icon-search');
const hdSForm = document.querySelector('.re-search');
const bodysearch = document.getElementsByTagName("body")[0];

let isOpensearch = false;
if (hdSIcon) {
   hdSIcon.addEventListener('click', () => {
      isOpen = !isOpensearch;
      if (isOpensearch) {
         hdSForm.classList.add('open')
         bodysearch.style.overflowY = "hidden";
      } else {
         hdSForm.classList.remove('open')
         bodysearch.style.overflowY = "scroll";
      }
   })
   window.addEventListener('click', (e) => {
      if (!e.target.closest('.hd-icon-search') && !e.target.closest('.re-search')) {
         isOpensearch = false;
         hdSForm.classList.remove('open')
         bodysearch.style.overflowY = "scroll";
      }
   })
}
var searchMains = document.querySelectorAll(".searchMain");

if (searchMains) {
   searchMains.forEach((item) => {
      var searchIconJs = item.querySelector('.searchIconJs');
      var searchOverlayJs = item.querySelector('.searchOverlayJs');
      var searchBarJs = item.querySelector('.searchBarJs');
      var searchCloseJs = item.querySelector('.searchCloseJs');
      let isOpensearch = false;

      function HandleOpen() {
         isOpensearch = !isOpensearch;
         if (isOpensearch) {
            item.classList.add("active");
            searchOverlayJs.classList.add("active");
            searchBarJs.classList.add("active");
            searchCloseJs.classList.add("active");
            bodysearch.classList.add("no-scroll");
            bodysearch.style.overflowY = "hidden";

         } else {
            item.classList.remove("active");
            searchOverlayJs.classList.remove("active");
            searchBarJs.classList.remove("active");
            searchCloseJs.classList.remove("active");
            bodysearch.classList.remove("no-scroll");
            bodysearch.style.overflowY = "scroll";

         }
      }

      function HandleClose() {
         isOpensearch = false;
         item.classList.remove("active");
         searchOverlayJs.classList.remove("active");
         searchBarJs.classList.remove("active");
         searchCloseJs.classList.remove("active");
         bodysearch.classList.remove("no-scroll");
         bodysearch.style.overflowY = "scroll";

      }

      if (searchIconJs) {
         searchIconJs.addEventListener("click", () => {
            HandleOpen()
         });
      }
      if (searchOverlayJs) {
         searchOverlayJs.addEventListener("click", function () {
            HandleClose()
         });
      }
      if (searchCloseJs) {
         searchCloseJs.addEventListener("click", function () {
            HandleClose()
         });
      }
   });
}
