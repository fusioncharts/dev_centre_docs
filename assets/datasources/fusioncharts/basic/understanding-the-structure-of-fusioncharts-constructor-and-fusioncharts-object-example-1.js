{
  type : "pie2d",//type of the chart to be rendered
  width : "500",//width of the chart
  height: "400",//height of the chart
  dataFormat:"json", //format of the data passed to the dataSource property
 //chart appearance properties are defined within dataSource.
  dataSource: {
      chart:{
        //caption of the chart
        caption:"Aggregate distribution in class of 70 students",

        //hex code of the colors to be used for the background
        bgColor:"EEEEEE,CCCCCC",

        //transperancy of each color
        bgAlpha: "70,80",

        //contribution of each color to the gradient of the background
        bgRatio:"60, 40",

        //disabling 3D effects on the pies in the chart
        use3DLighting:0,

        //theme
        theme: "fusion",

        //color of the border
        "borderColor": "#EEEEEE",

        //thickness of the border
        "borderThickness": "3",

      },
      data:[
        {label:">90", value:"10"},
        {label:"70-80", value:"30"},
        {label:"50-70", value:"20"},
        {label:"<50", value:"10"}
      ]
    },
    "events": {
    "beforeRender": function(evt, args) {
          var btn = document.createElement('input'),
              container = document.createElement('DIV'),
              p = document.createElement('p'),
              chartRef = evt.sender;

          btn.setAttribute("value","PRINT CHART DATA");
          btn.setAttribute("type","button");
          btn.setAttribute("class", "btn");

          container.setAttribute("class","btn-group")
          container.appendChild(btn);
          container.appendChild(p);

          args.container.parentNode.insertBefore(container, args.container.nextSibling);

          btn.onclick = function(){
              var chartData = chartRef.getJSONData()['data'];
              p.innerHTML = JSON.stringify(chartData);
          };
        }
    }
}
