// const btnShowPopup = document.querySelectorAll(".btn-popupRe");
const popupClose = document.querySelectorAll(".popup-close");
const popupOverlay = document.querySelectorAll(".popup-overlay");
const bodypp = document.getElementsByTagName("body")[0];
const popup = document.querySelectorAll(".popup");
// if (btnShowPopup) {
//     btnShowPopup.forEach((item) => {
//         item.addEventListener("click", () => {
//             popup.classList.add("open");
//             body.classList.add("no-scroll");
//         });
//     });
// }
if (popupClose) {
   popupClose.forEach((item) => {
      item.addEventListener("click", () => {
         popup.forEach((item) => {
            item.classList.remove("open");
            bodypp.classList.remove("no-scroll");
            startLenis();
         });
      });
   });
}
if (popupOverlay) {
   popupOverlay.forEach((item) => {
      item.addEventListener("click", () => {
         popup.forEach((item) => {
            item.classList.remove("open");
            bodypp.classList.remove("no-scroll");
            startLenis();
         });
      });
   });
}

const popupOpens = document.querySelectorAll(".popup-open");
if (popupOpens) {
   popupOpens.forEach((item) => {
      item.addEventListener("click", (e) => {
         e.preventDefault();
         const idString = item.getAttribute("data-popup");
         if (popup) {
            popup.forEach((item) => {
               if (item.getAttribute("data-popup-id") == idString) {
                  item.classList.add("open");
                  bodypp.classList.add("no-scroll");
                  stopLenis();
               }
            });
         }
      });
   });
}