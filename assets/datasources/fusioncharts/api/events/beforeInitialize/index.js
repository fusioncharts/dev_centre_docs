{
   type: 'column2d',
   renderAt: 'chart-container',
   width: '600',
   height: '420',
   dataFormat: 'json',
   dataSource: {
       "chart": {
           "caption": "Monthly revenue for last year",
           "subCaption": "Harry's SuperMart",
           "xAxisName": "Month",
           "yAxisName": "Revenue (In USD)",
           "numberPrefix": "$",
           "showValues": "1",
           "valueFontColor": "#ffffff",
           "placevaluesInside": "1",
           "rotatevalues": "1",
           "theme": "fusion"
       },
       "data": [{
           "label": "Jan",
           "value": "420000"
       }, {
           "label": "Feb",
           "value": "810000"
       }, {
           "label": "Mar",
           "value": "720000"
       }, {
           "label": "Apr",
           "value": "550000"
       }, {
           "label": "May",
           "value": "910000"
       }, {
           "label": "Jun",
           "value": "510000"
       }, {
           "label": "Jul",
           "value": "680000"
       }, {
           "label": "Aug",
           "value": "620000"
       }, {
           "label": "Sep",
           "value": "610000"
       }, {
           "label": "Oct",
           "value": "490000"
       }, {
           "label": "Nov",
           "value": "900000"
       }, {
           "label": "Dec",
           "value": "730000"
       }]
   },
   "events": {

       /**
        * @description
        * The beforeInitialize event is triggered every time a new instance of the FusionCharts object is created.
        *
        * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
        * @param {Object} dataObj: An object containing all the details related to the chart, such as the chart type, the format and source of chart data, and so on.
        */

       "beforeInitialize": function(eventObj, dataObj) {
           console.log(eventObj);
           var header = document.getElementById('header');
           header.style.display = 'block';

           var tempDiv = document.createElement('div');
           var attrsTable = document.getElementById('attrs-table');
           var titleDiv, valueDiv;
           for (var prop in dataObj) {
               titleDiv = document.createElement('div');
               titleDiv.className = 'title';
               titleDiv.innerHTML = prop;

               valueDiv = document.createElement('div');
               valueDiv.className = 'value';
               valueDiv.innerHTML = dataObj[prop];

               tempDiv.appendChild(titleDiv);
               tempDiv.appendChild(valueDiv);
           }
           attrsTable.innerHTML = '';
           attrsTable.appendChild(tempDiv);
       }
   }
}