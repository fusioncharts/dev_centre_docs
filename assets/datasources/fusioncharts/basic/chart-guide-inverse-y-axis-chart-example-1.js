{
   type: 'InverseMSColumn2D',
   dataFormat: 'json',
   renderAt: 'chart-container',
   width: '500',
   height: '300',
   dataSource: {
       "chart": {
           "caption": "Average Page Load Time (hsm.com)",
           "subCaption": "Last Week",
           "showBorder": "0",
           "xAxisName": "Day",
           "yAxisName": "Time (In Sec)",
           "numberSuffix": "s",
           "placeValuesInside": "0",
           "valueFontColor": "#333333",
           "rotateValues": "0",
           "theme": "fusion"

       },
       "categories": [{
           "category": [{
               "label": "Mon"
           }, {
               "label": "Tue"
           }, {
               "label": "Wed"
           }, {
               "label": "Thu"
           }, {
               "label": "Fri"
           }, {
               "label": "Sat"
           }, {
               "label": "Sun"
           }]
       }],
       "dataset": [{
           "seriesname": "Loading Time",
           "allowDrag": "0",
           "data": [{
               "value": "6"
           }, {
               "value": "5.8"
           }, {
               "value": "5"
           }, {
               "value": "4.3"
           }, {
               "value": "4.1"
           }, {
               "value": "3.8"
           }, {
               "value": "3.2"
           }]
       }]
   },
   events: {
       'beforeRender': function(evt, args) {
           // creating div for controllers
           var controllers = document.createElement('div'),
               chartRef = evt.sender;
           controllers.setAttribute('id', 'controllers');
           // Create radio buttons inside div

           controllers.innerHTML = "<input name='btnGrp' id='inversemscolumn2d' type='radio' value='inversemscolumn2d' checked> Inverse Column 2D Chart</input><input name='btnGrp' id='mscolumn2d' type='radio' value='mscolumn2d'>Column 2D Chart</input>";
           args.container.appendChild(controllers);
           // set css style for controllers div
           controllers.style.cssText = 'width:500px;text-align: center';

           // set css styles for "input" elements in controls div
           var input = controllers.getElementsByTagName('input');
           for (var i = 0; i < input.length; i++) {
               if (input[i].getAttribute('type') == 'text') input[i].style.cssText = 'max-width: 50px;';
           }
           // select radio-button according to current type
           document.getElementById(chartRef.chartType()).setAttribute('checked', 'true');
       },
       'renderComplete': function(evt, args) {
           var chartRef = evt.sender;
           var radio = document.getElementsByTagName('input'),
               timeChart = chartRef,
               radElem,
               val;
           for (var i = 0; i < radio.length; i++) {
               radElem = radio[i];
               if (radElem.type === 'radio') {
                   radElem.onclick = function() {
                       val = this.getAttribute('value');
                       val && timeChart.chartType(val);
                   };
               }
           }
       }
   }
}
