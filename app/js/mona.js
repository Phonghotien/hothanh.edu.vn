var monaContents = document.querySelectorAll('.mona-content');

if (monaContents) {
   monaContents.forEach(function (monaContent) {
      var tables = monaContent.querySelectorAll('table');

      tables.forEach(function (table) {
         var scrollDiv = document.createElement('div');
         scrollDiv.className = 'scroll-table';

         table.parentNode.insertBefore(scrollDiv, table);

         scrollDiv.appendChild(table);
      });
   });
}