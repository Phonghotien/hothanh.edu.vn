
$('.scroll-down').click(function () {
   $('html, body').animate({
      scrollTop: $('section').next().offset().top
   }, 100);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".hguest-item");
//   if(items){
//       items.forEach(item => {
//           const description = item.querySelector(".hguest-des");
//           const descriptionHeight = description.offsetHeight;
//           // Gán chiều cao của .hguest-des vào biến CSS --des-height
//           document.documentElement.style.setProperty("--des-height", `${descriptionHeight}px`);
//       });
//   }
// });

const abInfo = document.querySelector(".abInfo");

if (abInfo) {
   const topabInfo = abInfo.querySelector(".abInfo-des-top");
   const botabInfo = abInfo.querySelector(".abInfo-des-bot");
   // Lấy chiều cao của từng phần tử
   const topHeight = topabInfo.offsetHeight;
   const botHeight = botabInfo.offsetHeight;

   // Gán giá trị chiều cao vào CSS của từng phần tử
   topabInfo.style.setProperty("--top-height", `${topHeight}px`);
   botabInfo.style.setProperty("--bot-height", `${botHeight}px`);
}
