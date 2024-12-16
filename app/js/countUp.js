// let num = document.querySelectorAll(".countNum");
// num.forEach((v) => {
//     let n = parseInt(v.textContent);
//     var countUp = new CountUp(v, n, {
//         separator: ".",
//         decimal: '.',
//     });
//     // let check = true;
//     // window.addEventListener("scroll", () => {
//     //     if (v.getBoundingClientRect().top < window.innerHeight && check) {
//     //         countUp.start();
//     //         check = false;
//     //     }
//     // });
//     let $window = $(window);

//     function scrollAddClass(el, className) {
//         $(el).each(function () {
//             let el = this;
//             if (
//                 $(el).offset().top <
//                 $window.scrollTop() + ($window.height() / 10) * 8
//             ) {
//                 countUp.start();
//                 $(el).addClass(className);
//             }
//         });
//     }

//     function bindImageAnimations() {
//         scrollAddClass(".countNum", "is-inview");

//         $window.on("scroll", function () {
//             scrollAddClass(".countNum", "is-inview");
//         });
//     }
//     bindImageAnimations();
// });
let a = 0;
let counterBlock = document.querySelector(".counter-js");
if (counterBlock) {
   let oTop = counterBlock.offsetTop - window.innerHeight;
   $(window).on("scroll", function () {
      if (a == 0 && $(window).scrollTop() > oTop) {
         console.log($(".countNum").attr("data-count"));
         $(".countNum").each(function () {
            let $this = $(this),
               countTo = parseInt($this.attr("data-count"), 10);
            $({
               countNum: $this.text(),
            }).animate(
               {
                  countNum: countTo,
               },

               {
                  duration: 3000,
                  easing: "swing",
                  step: function () {
                     let formattedNum = formatNumber(this.countNum);
                     $this.text(formattedNum);
                  },
                  complete: function () {
                     let formattedNum = formatNumber(this.countNum);
                     $this.text(formattedNum);
                  },
               }
            );
         });
         a = 1;
      }
   });
}

// Hàm format để chuyển đổi số lớn hơn 5 chữ số thành dạng K
function formatNumber(num) {
   let roundedNum = Math.floor(num);
   return roundedNum >= 10000 ? `${Math.floor(roundedNum / 1000)}k` : roundedNum;
}
