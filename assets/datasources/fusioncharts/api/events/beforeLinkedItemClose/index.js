{
   type: 'column2d',
   renderAt: 'chart-container',
   width: '500',
   height: '300',
   dataFormat: 'json',
   dataSource: {
      chart: {
         theme: 'fusion',
         caption: 'Top 3 Juice Flavors',
         subcaption: 'Last year',
         xaxisname: 'Flavor',
         yaxisname: 'Amount (In USD)',
         numberprefix: '$',
      },
      data: [
         {
            label: 'Apple',
            value: '810000',
            link: 'newchart-xml-apple',
         },
         {
            label: 'Cranberry',
            value: '620000',
            link: 'newchart-xml-cranberry',
         },
         {
            label: 'Grapes',
            value: '350000',
            link: 'newchart-xml-grapes',
         },
      ],
      linkeddata: [
         {
            id: 'apple',
            linkedchart: {
               chart: {
                  theme: 'fusion',
                  caption: 'Apple Juice - Quarterly Sales',
                  subcaption: 'Last year',
                  numberprefix: '$',
                  palettecolors: '#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78',
                  plottooltext: '$label, $dataValue,  $percentValue',
               },
               data: [
                  {
                     label: 'Q1',
                     value: '157000',
                  },
                  {
                     label: 'Q2',
                     value: '172000',
                  },
                  {
                     label: 'Q3',
                     value: '206000',
                  },
                  {
                     label: 'Q4',
                     value: '275000',
                  },
               ],
            },
         },
         {
            id: 'cranberry',
            linkedchart: {
               chart: {
                  theme: 'fusion',
                  caption: 'Cranberry Juice - Quarterly Sales',
                  subcaption: 'Last year',
                  numberprefix: '$',
                  palettecolors: '#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78',
                  plottooltext: '$label, $dataValue,  $percentValue',
               },
               data: [
                  {
                     label: 'Q1',
                     value: '102000',
                  },
                  {
                     label: 'Q2',
                     value: '142000',
                  },
                  {
                     label: 'Q3',
                     value: '187000',
                  },
                  {
                     label: 'Q4',
                     value: '189000',
                  },
               ],
            },
         },
         {
            id: 'grapes',
            linkedchart: {
               chart: {
                  theme: 'fusion',
                  caption: 'Grapes Juice - Quarterly Sales',
                  subcaption: 'Last year',
                  numberprefix: '$',
                  palettecolors: '#f8bd19,#e44a00,#008ee4,#33bdda,#6baa01,#583e78',
                  plottooltext: '$label, $dataValue,  $percentValue',
               },
               data: [
                  {
                     label: 'Q1',
                     value: '45000',
                  },
                  {
                     label: 'Q2',
                     value: '72000',
                  },
                  {
                     label: 'Q3',
                     value: '95000',
                  },
                  {
                     label: 'Q4',
                     value: '108000',
                  },
               ],
            },
         },
      ],
   },
   events: {
      /**
       * @description
       * Triggered before a chart is to be rendered.
       *
       * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
       * @param {Object} dataObj: An object containing all the details related to the chart, such as the chart width and height.
       */

      beforeRender: function(eventObj, dataObj) {
         var chartRef = eventObj.sender;
         /* Configured properties for LinkedCharts */
         chartRef.configureLink(
            {
               overlayButton: {
                  message: 'Close',
                  fontColor: '880000',
                  bgColor: 'FFEEEE',
                  borderColor: '660000',
               },
            },
            0
         );
      },

      /**
       * @description
       * Triggered just before a linked chart is closed.
       *
       * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
       * @param {Object} dataObj: An object containing all the details related to the linked item.
       */

      beforeLinkedItemClose: function(eventObj, dataObj) {
         var container = document.getElementById('beforeLinkedItemClose-example');

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