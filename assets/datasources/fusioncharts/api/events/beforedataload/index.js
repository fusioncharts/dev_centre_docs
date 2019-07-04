{
   type: 'area2d',
   renderAt: 'chart-container',
   width: '400',
   height: '300',
   dataFormat: 'json',
   dataSource: {
      chart: {
         caption: 'Sales of Liquor',
         subCaption: 'Last week',
         theme: 'fusion',
      },
      data: [
         {
            label: 'Mon',
            value: '4123',
         },
         {
            label: 'Tue',
            value: '4633',
         },
         {
            label: 'Wed',
            value: '5507',
         },
         {
            label: 'Thu',
            value: '4910',
         },
         {
            label: 'Fri',
            value: '5529',
         },
         {
            label: 'Sat',
            value: '5803',
         },
         {
            label: 'Sun',
            value: '6202',
         },
      ],
   },
   events: {
      /**
       * @description
       * Triggered when the data is updated to a chart. This hook can be used by the theme manager to update the chart data.
       *
       * @param {Object} evtObj: An object containing all the details related to this event like eventId, sender, etc.
       * @param {Object} dataObj: An object containing all the details related to the linked item.
       */
      beforedataload: function(eventObj, dataObj) {
         var container = document.getElementById('beforedataload-example');

         function createTable(headers) {
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            headers.forEach(function(header) {
               var th = document.createElement('th');
               th.innerText = header;
               tr.appendChild(th);
            });
            table.appendChild(tr);
            return table;
         }

         function dataPopulate(data) {
            var tr = document.createElement('tr');
            data.forEach(function(d) {
               var td = document.createElement('td');
               td.innerText = d;
               tr.appendChild(td);
            });
            return tr;
         }

         var table = createTable(['Parameter Name', 'Parameter Value']);

         for (var prop in dataObj) {
            var dataEle = dataPopulate([prop, dataObj[prop]]);
            table.appendChild(dataEle);
         }

         container.appendChild(table);
      }
   }
}