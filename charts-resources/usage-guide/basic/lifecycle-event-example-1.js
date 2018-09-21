{
    type: 'column2d',
    height: '400',
    width:'400',
    dataFormat:'json',
    renderAt:'chart-container',
    dataSource: {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
      },
      "data": [{
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        },
        {
          "label": "UAE",
          "value": "100"
        },
        {
          "label": "US",
          "value": "30"
        },
        {
          "label": "China",
          "value": "30"
        }
      ],
    },
    "events":{
      "beforeRender": function(e, d){
        var customDiv = document.createElement('p');
        customDiv.style.padding = "10px";
        customDiv.style.background = "rgb(245, 242, 240)";
        customDiv.style.textAlign = "center";
        customDiv.innerText = 'beforeDataUpdate, dataUpdated';
        customDiv.className = 'inner-container';
        e.data.container.appendChild(customDiv);
      },
      "drawComplete":function(e, d){
        var p = e.sender.ref.parentNode;
        var ele  = p.getElementsByClassName('inner-container');
        ele[0].innerText = ele[0].innerText + ', drawComplete';
      },
      "renderComplete": function(e, d){
        var p = e.sender.ref.parentNode;
        var ele  = p.getElementsByClassName('inner-container');
        ele[0].innerText = ele[0].innerText + ', renderComplete';
      }
    }
  }