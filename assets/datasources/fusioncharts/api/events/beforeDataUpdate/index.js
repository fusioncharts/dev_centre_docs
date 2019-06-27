{
   type: 'column2d',
   renderAt: 'chart-container',
   width: '500',
   height: '350',
   dataFormat: 'json',
   dataSource: {
      chart: {
         caption: 'Monthly revenue for last year',
         subCaption: "Harry's SuperMart",
         xAxisName: 'Month',
         yAxisName: 'Revenue (In USD)',
         numberPrefix: '$',
         theme: 'fusion',
      },
      data: [
         {
            label: 'Jan',
            value: '420000',
         },
         {
            label: 'Feb',
            value: '810000',
         },
         {
            label: 'Mar',
            value: '720000',
         },
         {
            label: 'Apr',
            value: '550000',
         },
         {
            label: 'May',
            value: '910000',
         },
         {
            label: 'Jun',
            value: '510000',
         },
         {
            label: 'Jul',
            value: '680000',
         },
         {
            label: 'Aug',
            value: '620000',
         },
         {
            label: 'Sep',
            value: '610000',
         },
         {
            label: 'Oct',
            value: '490000',
         },
         {
            label: 'Nov',
            value: '900000',
         },
         {
            label: 'Dec',
            value: '730000',
         },
      ],
   },
   events: {
      /**
       * @description
       * This event is triggered just before chart data is passed to the chart.
       *
       * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
       * @param {Object} dataObj: An object containing all the details related to chart data, such as the format and source of the chart data.
       */

      beforeDataUpdate: function(eventObj, dataObj) {
         var container = document.getElementById('beforeDataUpdate-example');

         function createTable(headers) {
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            headers.forEach(header => {
               var th = document.createElement('th');
               th.innerText = header;
               tr.appendChild(th);
            });
            table.appendChild(tr);
            return table;
         }

         function dataPopulate(data) {
            var tr = document.createElement('tr');
            data.forEach(d => {
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
