{
    type: 'column2d',
    height: '400',
    width: '700',
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
      "dataUpdated": function(e, d){
        var message = "Hover on the plot to see the percentage along with the label";
        var customDiv = document.createElement('p');
        customDiv.innerText = message;
        customDiv.style.padding = "10px";
        customDiv.style.background = "rgb(245, 242, 240)";
        customDiv.style.textAlign = "center";
        e.sender.ref.appendChild(customDiv);

        var total = 0;
        e.sender.args.dataSource.data.forEach(function(dataObj){
          total += parseFloat(dataObj.value);
        });


        e.sender.addEventListener("dataplotrollover", function(rollEvent, rollData){
          var value = (rollData.value / total * 100).toFixed(2);
          customDiv.innerHTML = '<b>' + rollData.categoryLabel + '</b> is <b>' + value + '%</b> of top 8 oil reserve countries';
        }); 

        e.sender.addEventListener("dataplotrollout", function(rollEvent, rollData){
          customDiv.innerText = message;
        });
      }
    }
  }