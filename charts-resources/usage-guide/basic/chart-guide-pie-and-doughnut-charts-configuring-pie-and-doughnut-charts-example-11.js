{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "animateClockwise": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "285040"
        }, {
            "label": "Apparels",
            "value": "146330"
        }, {
            "label": "Electronics",
            "value": "105070"
        }, {
            "label": "Household",
            "value": "49100"
        }]
    },
    "events": {
      "rendered" : function(eventObj, argObject){
        var chartRef = eventObj.sender;
        console.log("test"); 
      
    },

    'beforeRender': function(eventObj, args) {
      // Form controllers div
      var controls = document.createElement('div'),
        chartContainer = args.container;

      if(!document.getElementById("controllers")) {

        controls.setAttribute('id', 'controllers');
        controls.innerHTML = "<input id='change' type='Button' value='Refresh'/>";
        chartContainer.parentNode.insertBefore(controls, chartContainer.nextSibling);

        var btnResize = document.getElementById('change');
        btnResize.addEventListener("click",  function() {
          var chartRef = eventObj.sender;
          chartRef.render();
        });
      }
    }
  }
}
