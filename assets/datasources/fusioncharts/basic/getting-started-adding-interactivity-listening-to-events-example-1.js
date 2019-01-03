 {
     type: 'pie2d',
     renderAt: 'chart-container',
     width: '450',
     height: '300',
     dataFormat: 'json',
     dataSource: {
         "chart": {
             "caption": "Split of visitors by age group",
             "subCaption": "Last year",
             "enableSmartLabels": "0",
             "showPercentValues": "1",
             "showTooltip": "0",
             "decimals": "1",
             "theme": "fusion"
         },
         "data": [{
             "label": "Teenage",
             "value": "1250400"
         }, {
             "label": "Adult",
             "value": "1463300"
         }, {
             "label": "Mid-age",
             "value": "1050700"
         }, {
             "label": "Senior",
             "value": "491000"
         }]
     },
     "events": {
         "beforeRender": function(evt, args) {
             var indicator = document.createElement("div");
             indicator.setAttribute("id", "indicatorDiv");
             indicator.style.cssText = "color: #1790e1; width: 480px; font-family: 'Arial','Helvatica'; font-size: 14px; padding: 10px;";
             indicator.innerHTML = "Hover on any of the pie slice to view details.";
             args.container.appendChild(indicator);
         },

         "dataplotrollover": function(evt, data) {
             var txt = "Age group : " + data.categoryLabel + ",<br/>No. of visitors : " + data.value;
             document.getElementById('indicatorDiv').innerHTML = txt;
         },
         "dataplotrollout": function(evt, data) {
             document.getElementById('indicatorDiv').innerHTML =
                 "Hover on any of the pie slice to view details.";
         },


     }
 }
