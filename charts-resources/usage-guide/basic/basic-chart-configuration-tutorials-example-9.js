{
   type: 'column2d',
   width: '550',
   height: '350',
   dataFormat: 'json',
   dataSource: {
     "chart": {
       "caption": "Price of Petrol in Bangalore",
       "subCaption": "In the last 6 months",
       "xAxisName": "Petrol Price Change Date",
       "yAxisName": "Petrol Price",
       "numberPrefix": "Rs ",
       "rotatevalues": "1",
       "theme": "zune"
     },

     "data": [{
       "label": "Feb 4 2015",
       "value": "62.01"
     }, {
       "label": "Mar 1, 2015",
       "value": "66.18",
     }, {
       "label": "April 2, 2015",
       "value": "66.05"
     }, {
       "label": "May 1, 2015",
       "value": "69.5"
     }, {
       "label": "Jun 16, 2015",
       "value": "72.94"
     }, {
       "label": "Jul 1, 2015",
       "value": "73.38"
     }]
   },

   "events": {
     "beforeRender": function(evt, args) {

       var chartdata = document.createElement('div');

       //Create a button to download SVG and style the button
       var background = document.createElement('input');
       background.setAttribute('type', 'button');
       background.setAttribute('value', 'Modify Background');
       background.setAttribute("class", "btn");

       var canvas = document.createElement('input');
       canvas.setAttribute('type', 'button');
       canvas.setAttribute('value', 'Modify Canvas');
       canvas.setAttribute("class", "btn");

       var dataplot = document.createElement('input');
       dataplot.setAttribute('type', 'button');
       dataplot.setAttribute('value', 'Modify Data Plot');
       dataplot.setAttribute("class", "btn");

       chartdata.appendChild(background);
       chartdata.appendChild(canvas);
       chartdata.appendChild(dataplot);

       //background.onclick = modifyBackground;
       //canvas.onclick = modifyCanvas;
       //dataplot.onclick = modifyDataplot;


       chartdata.setAttribute("class", "btn-group");
       args.container.appendChild(chartdata);

       function modifyBackground() {
         //attribute to activate the border
         evt.sender.setChartAttribute("showBorder", 1);
         //color of the border
         evt.sender.setChartAttribute("borderColor", "#000000");
         //thickness of the border
         evt.sender.setChartAttribute("borderThickness", 3);
         //opacity of the border
         evt.sender.setChartAttribute("borderAlpha", 100);
         //hex code of the colors to be used for the background
         evt.sender.setChartAttribute("bgColor", "#DDDDDD");
         //opaqueness of each color
         evt.sender.setChartAttribute("bgAlpha", 70);
         //transparency of the canvas background
         evt.sender.setChartAttribute("canvasBgAlpha", 0);
       }

       function modifyCanvas() {
         //modification for canvas
         evt.sender.setChartAttribute("canvasBgColor", "#1790e1");
         evt.sender.setChartAttribute("canvasBgAlpha", 10);
         evt.sender.setChartAttribute("canvasBorderColor", "#666666");
         evt.sender.setChartAttribute("canvasBorderThickness", 2);
         evt.sender.setChartAttribute("canvasBorderAlpha", 80);
         //properties for defining canvas border
         evt.sender.setChartAttribute("showCanvasBorder", "1");
       }

       function modifyDataplot() {
         var dataPlotProperties = {
           //Using plot gradient color
           "usePlotGradientColor": "1",
           //Applying plot gradient color
           "plotGradientColor": "#1aaf5d",
           //Applying fill angle for plots
           "plotFillAngle": "45",
           //Applying fill ratio for plots
           "plotFillRatio": "50,0"
         };

         // passing the JSON object of properties to the setChartAttribute API
         evt.sender.setChartAttribute(dataPlotProperties);
       }
     }
   }

 }