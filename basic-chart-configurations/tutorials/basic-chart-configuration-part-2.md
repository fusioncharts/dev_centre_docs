---
permalink: basic-chart-configurations/tutorials/basic-chart-configuration-part-2.html
title: Basic Chart Configuration(Part-2) | FusionCharts
description: This section talks about the basic configurations for charts related to their canvas, background & border.
heading: Basic Chart Configuration(Part-2)
chartPresent: true
---

This is the second article in a 2-part series where we cover how to configure chart properties. First article covers configuration of charts' appearance via properties while second part digs into usage of FusionCharts API to have the same effect. You can <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-part-1.html" target="_blank">check out part-1 here</a>.

In first-part we saw how to modify the appearance of the chart using the chart properties. In this article we will see how to make use of the APIs exposed by FusionCharts to set values for these properties dynamically.

We have modified the HTML a bit to accommodate rendering of chart and its modification via the APIs. We are going to use <a href="https://jquery.com/" target="_blank">jQuery</a> to bind events to the buttons and <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> for CSS related requirements. The below is the modified HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>FusionCharts Column 2D Sample</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>Chart Rendered by using Chart properties</h3>
        <!-- Column 2D chart showing variation of price of petrol in the last six months -->
        <div id="chart-container">FusionCharts will render here</div>
 
      </div>
      <div class="col-md-6">
        <h3>Chart Rendered by using APIs</h3>
        <div id="api-chart-container">FusionCharts will render here</div>
        <input type="button" id="background-btn" class="btn btn-primary" value="Modify Background"/>
        <input type="button" id="canvas-btn" class="btn btn-primary" value="Modify Canvas"/>
        <input type="button" id="dataplot-btn" class="btn btn-primary" value="Modify Data Plot"/>
 
      </div>
    </div>
    <!-- Displaying the values of the properties applied -->
    <div class="row">
      <div class="col-md-offset-6 col-md-6">
        <br/>
        <span id="chartAttributeValues"></span>
    </div>
 
  </div>
 
  <script src="js/jquery-2.1.4.js"></script>
  <script src="js/fusioncharts.js"></script>
  <script src="fusion-chart-column.js"></script>
  <script src="fusion-chart-column-api.js"></script>
</body>
</html>
```


The modification of the chart now is powered by the click of the buttons which are represented as shown below:

```html
<input type="button" id="background-btn" class="btn btn-primary" value="Modify Background"/>
<input type="button" id="canvas-btn" class="btn btn-primary" value="Modify Canvas"/>
<input type="button" id="dataplot-btn" class="btn btn-primary" value="Modify Data Plot"/>
```


We have also added a new JavaScript file to add related code in that file:

```html
<script src="fusion-chart-column-api.js"></script>
```


We are going to reuse the chartData and chartProperties JSON objects explained in the part 1 of this series.

```javascript
var apiChart = new FusionCharts({
  type: 'column2d',
  renderAt: 'api-chart-container',
  width: '550',
  height: '350',
  dataFormat: 'json',
  dataSource: {
    "chart": chartProperties,
    "data": chartData
  }
});
$(function(){
  $("#background-btn").click(function(){
    modifyBackground();
  });
 
  $("#canvas-btn").click(function(){
    modifyCanvas();
  });
 
  $("#dataplot-btn").click(function(){
    modifyDataplot();
  });
 
  apiChart.render();
});
 
function modifyBackground(){
  //to be implemented
}
 
function modifyCanvas(){
  //to be implemented
}
 
function modifyDataplot(){
  //to be implemented
}
```


You can notice that the above chart is being rendered at HTML component with id 'api-chart-container'. The event handlers have been setup for each of the buttons but the implementations of the event handlers have been left empty and will be implemented in the rest of the article. Loading the HTML in the browser gives us the below result:

{% embed_chart basic-chart-configuration-tutorials-example-8.js %}
{% embed_chart basic-chart-configuration-tutorials-example-9.js %}

Click <a href="http://jsfiddle.net/2r4732wj/8/" target="_blank">here</a> to view the above in JSFiddle.

Along with using the `setChartAttribute` API, we will show you how to fetch values of the properties using the `getChartAttribute` API. The getChartAttribute API takes a name of property or array of names of properties as the parameter and returns a JSON object of name of property and value of property pairs. Below is the implementation of the method showChartProperties which uses the API and prints the values to the HTML element with id: chartAttributeValues:

```javascript
function showChartProperties(propertiesArray){
  var propertiesValue = apiChart.getChartAttribute(propertiesArray);
  for (var key in propertiesValue){
    var val = propertiesValue[key];
    $("#chartAttributeValues").append("<b>" + key + "</b>" + " = " + val + "<br/>");
  }
}
```


We will invoke the above API with the array of properties as shown below:

```javascript
showChartProperties(["showBorder", "borderColor", "borderThickness", "borderAlpha", "bgColor", "bgAlpha", "canvasBgAlpha"]);
```


Now let us code the event handlers for each of the button starting with "__Modify Background__" button.

## Implementing the modifyBackground() function

We make use of the apiChart object and its setChartAttribute API to modify the chart’s appearance. The setChartAttribute API accepts two parameters - the name of the attribute and its value. The below code is the implementation of the `modifyBackground()` function:

```javascript
function modifyBackground(){
  apiChart.setChartAttribute("showBorder", 1);
  apiChart.setChartAttribute("borderColor", "#000000");
  apiChart.setChartAttribute("borderThickness", 3);
  apiChart.setChartAttribute("borderAlpha", 100);
  apiChart.setChartAttribute("bgColor", "#DDDDDD");
  apiChart.setChartAttribute("bgAlpha", 70);
  apiChart.setChartAttribute("canvasBgAlpha", 0);
  showChartProperties(["showBorder", "borderColor", "borderThickness", "borderAlpha", "bgColor", "bgAlpha", "canvasBgAlpha"]);
}
```


You can see from the code above that the values for the chart properties are being set via the API and not as part of the properties JSON object.

Loading the same HTML in the browser and clicking on the "__Modify Background__" button results in view as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-8.js %}
{% embed_chart basic-chart-configuration-tutorials-example-10.js %}

Click <a href="http://jsfiddle.net/2r4732wj/9/" target="_blank">here</a> to view the above in JSFiddle.


## Implementing the modifyCanvas() function

The below code sets the background and border of the canvas:

```javascript
function modifyCanvas(){
  apiChart.setChartAttribute("canvasBgColor", "#1790e1");
  apiChart.setChartAttribute("canvasBgAlpha", 10);
  apiChart.setChartAttribute("canvasBorderColor", "#666666");
  apiChart.setChartAttribute("canvasBorderThickness", 2);
  apiChart.setChartAttribute("canvasBorderAlpha", 80);
  apiChart.setChartAttribute("showCanvasBorder", "1");
  showChartProperties(["canvasBgColor", "canvasBgAlpha", "canvasBorderColor", "canvasBorderThickness", "canvasBorderAlpha", "showCanvasBorder"]);
}
```

Loading the same HTML in the browser and clicking on the "__Modify Canvas__" button results in view as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-8.js %}
{% embed_chart basic-chart-configuration-tutorials-example-11.js %}

Click <a href="http://jsfiddle.net/2r4732wj/11/" target="_blank">here</a> to view the above in JSFiddle.

## Implementing the modifyDataplot() function

In the above two examples we were modifying properties one at a time. But now we will see how to do change many at a time. The below code sets the background and border of the data plot using the setChartAttribute API:

```javascript
function modifyDataplot(){
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
 
  /*
  passing the JSON object of properties to
  the setChartAttribute API
  */
  apiChart.setChartAttribute(dataPlotProperties);
 
  showChartProperties(["usePlotGradientColor", "plotGradientColor", "plotFillAngle", "plotFillRatio"]);
}
```


Loading the same HTML in the browser and clicking on the “Modify Data Plot” button results in view as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-8.js %}
{% embed_chart basic-chart-configuration-tutorials-example-12.js %}


Click <a href="http://jsfiddle.net/2r4732wj/11/" target="_blank">here</a> to view the above in JSFiddle.

## Where can you apply this newly learned knowledge?

Now a question may arise as to why use these properties or where to use them. Here are the scenarios where these properties might be useful:

* Modifying the background of the data plot on certain events like hover or click.
* Making certain data plots stand out from other data plots by giving it different background color (highest or lowest values).