const btnToTop = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
   if (window.scrollY > 10) {
      btnToTop.classList.add("active");
   } else {
      btnToTop.classList.remove("active");
   }
});
if (btnToTop) {
   btnToTop.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });
}
$(document).ready(function () {
   if (window.scrollY > 10) {
      btnToTop.classList.add("active");
   } else {
      btnToTop.classList.remove("active");
   }
});


// Lắng nghe sự kiện scroll
window.addEventListener("scroll", () => {
   const fbtn = document.querySelector(".fbtn");
   const windowHeight = window.innerHeight; // Chiều cao cửa sổ
   const documentHeight = document.documentElement.scrollHeight; // Tổng chiều cao của nội dung
   const scrollPosition = window.scrollY + windowHeight; // Vị trí scroll hiện tại

   // Nếu vị trí scroll đạt đến hoặc vượt qua cuối màn hình
   if (scrollPosition >= documentHeight) {
      fbtn.classList.add("hidden");
   } else {
      fbtn.classList.remove("hidden");
   }
});
