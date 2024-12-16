const formItems = document.querySelectorAll('.form-item');

// Kiểm tra nếu formItems không trống
if (formItems.length > 0) {
   formItems.forEach(item => {
      const input = item.querySelector('.form-input');
      const label = item.querySelector('.form-lb');

      // Kiểm tra nếu input không trống
      if (input) {
         input.addEventListener('focus', () => {
            item.classList.add('focus');
         });

         input.addEventListener('blur', () => {
            item.classList.remove('focus');
            if (input.value) {
               item.classList.add('valid');
            } else {
               item.classList.remove('valid');
            }
         });

         // Kiểm tra giá trị ban đầu của input
         if (input.value) {
            item.classList.add('valid');
         }
      }
   });
}