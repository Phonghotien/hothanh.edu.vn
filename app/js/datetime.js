const inputDate = $('.input-date');

if (inputDate) {
   inputDate.daterangepicker({
      singleDatePicker: true,
      maxYear: 2024,
      minDate: moment(),
      autoUpdateInput: true,
      locale: {
         format: 'DD-MM-YYYY',
      }
   })
   // Ghi đè sự kiện `apply` để cập nhật input khi người dùng chọn ngày
   inputDate.on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY'));
      $(this).next().removeClass("active");
   });

   // Ghi đè sự kiện `cancel` để xóa giá trị khi người dùng hủy chọn ngày
   inputDate.on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
      $(this).next().removeClass("active");
   });

   inputDate.on('show.daterangepicker', function (ev, picker) {
      $('.daterangepicker .drp-calendar.left .calendar-table').show();
      $(this).next().addClass("active");
   });

   inputDate.on('hide.daterangepicker', function (ev, picker) {
      $(this).next().removeClass("active");
   });
}

const inputTime = $('.input-time');

if (inputTime) {
   inputTime.daterangepicker({
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 1,
      singleDatePicker: true,
      locale: {
         format: 'HH:mm'
      },
      isInvalidDate: function () {
         return true;
      }
   })

   inputTime.daterangepicker({
      timePicker: true,
      timePicker24Hour: true,
      timePickerIncrement: 1,
      singleDatePicker: true,
      locale: {
         format: 'HH:mm'
      },
   });

   inputTime.on('apply.daterangepicker', function (ev, picker) {
      $(this).next().removeClass("active");
   });

   inputTime.on('cancel.daterangepicker', function (ev, picker) {
      $(this).next().removeClass("active");
   });

   inputTime.on('show.daterangepicker', function (ev, picker) {
      $('.daterangepicker .drp-calendar.left .calendar-table').hide();
      $(this).next().addClass("active");
   });

   inputTime.on('hide.daterangepicker', function (ev, picker) {
      $('.daterangepicker .drp-calendar.left .calendar-table').show();
      $(this).next().removeClass("active");
   });
}
