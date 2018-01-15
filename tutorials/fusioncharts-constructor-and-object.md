---
permalink: api/tutorials/fusioncharts-constructor-and-object.html
title: FusionCharts Constructor and Object | FusionCharts
description: All of the charts and maps are constructed using the constructor provided by FusionCharts which accepts a JSON object of chart properties.
heading: FusionCharts Constructor and Object
chartPresent: true
layout: page
---


FusionCharts Suite XT provides huge library of JavaScript charts and maps. All of these charts and maps are constructed using the constructor provided by FusionCharts which accepts a JSON object of chart properties. So it's important to understand the following to use the library effectively: 

- Understanding the FusionCharts constructor
- Familiarity with invoking the APIs using the instance of FusionCharts

Also it is necessary to have a basic understanding of the structure of the JSON object passed as parameter to the FusionCharts constructor.

In this article we are going to cover:

* [Creating charts using the FusionCharts constructor](/tutorials/fusioncharts-constructor-and-object#creating-charts-using-the-fusioncharts-constructor)
* [Accessing already created chart using FusionCharts constructor](/tutorials/fusioncharts-constructor-and-object#accessing-already-created-chart-using-fusioncharts-constructor)
* [Invoking APIs using instance of FusionCharts](/tutorials/fusioncharts-constructor-and-object#invoking-apis-using-instance-of-fusioncharts)
* [Managing Synchronization when Rendering Multiple Charts](/tutorials/fusioncharts-constructor-and-object#managing-synchronization-when-rendering-multiple-charts)


## Creating charts using the FusionCharts Constructor

The FusionCharts constructor accepts a JSON object whose properties are as follows:


- Properties like _id, dimensions, event listeners, chart type, data format, data source_
- Appearance properties like background color, border, canvas background, canvas border and others
- Data of the chart

Here is how the structure looks:

```javascript


{
    //chart properties
    id: “SOME_ID”,
    width: SOME_WIDTH,
    dataFormat: “SUPPORTED_FORMAT”
    dataSource: {
        chart: {
            //chart appearance properties
        },
        data:{
            //data for the chart
        }
    }
}


```

Let us step-by-step build the properties JSON object by considering the above 3 classifications. First are the properties that define the chart like id, dimensions, chart type, data format. All the available properties can be found [here]({{ site.baseurl }}api/fusioncharts.html):


```javascript

var propertiesObject = {
  
  // type of the chart to be rendered
  type : "pie2d",
  
  // unique id of the chart - required to refer to the chart
  id : "sample-chart",
 
  width : "500",//width of the chart
  height: "400",//height of the chart
  
  // id of the HTML element where the chart is rendered
  renderAt: "chart-container",
 
  //format of the data passed to the dataSource property
  dataFormat:"json", 
}

```

Next are the properties which modify the appearance of the chart like background color, border color, border thickness, caption, plot appearance. These properties vary with the type of the chart. Different properties available against each chart type can be found [here]({{ site.baseurl }}chart-attributes.html?chart=area2d). And these properties are defined within the dataSource property of the JSON object:


```javascript

var propertiesObject = {
  // continuing from above code snippet
 
  // chart appearance properties are defined within dataSource.
  
dataSource: {
    chart:{
      // caption of the chart
      caption:"Student aggregate distribution in class",
 
      // hex code of the colors to be used for the background
      bgColor:"EEEEEE,CCCCCC",
 
      // transperancy of each color
      bgAlpha : "70,80",
 
      // contribution of each color to the gradient of the background
      bgRatio:"60, 40",
 
      // colors to be used to fill the pie's in the chart
      paletteColors: "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
 
      // disabling 3D effects on the pies in the chart
      use3DLighting:0,
 
      // color of the border
      borderColor: "#EEEEEE",
 
      // thickness of the border
      borderThickness:3,
 
    }
  }
}

```

Finally comes the property that provides data to the chart. This property, named as data, is defined within the `dataSource` property of the JSON object as shown below:


```javascript

var propertiesObject = {
// properties defined in the first code snippet
 
dataSource : {
    
// cosmetics properties as defined in above code snippet
    
// actual data of the chart
data:[
      {label:">90", value:"10"},
      {label:"70-80", value:"30"},
      {label:"50-70", value:"20"},
      {label:"50", value:"10"}
    ]
  }
}

```

Now we need to pass the above constructed properties JSON object to the FusionCharts constructor as shown below:


```javascript

var sampleChart = new FusionCharts(propertiesObject);
sampleChart.render();

```

Rendering the above constructed chart results in following chart (JSFiddle link [here](http://jsfiddle.net/uhnanqgv/8/)):

{% embed_chart understanding-the-structure-of-fusioncharts-constructor-and-fusioncharts-object-example-1.js %}
## Accessing already created chart using FusionCharts Constructor

We saw above how to build a FusionCharts object by passing a JSON object of chart properties to its constructor. What if we have already constructed the FusionCharts object and want to refer to that same object? Let us see how this works by considering a simple example:

Let's create a button to print the chart's actual data. The html code for this example is given below:


```javascript

<div id="chart-container">FusionCharts will render here</div>
<button id="get-chart-data">Print Chart Data</button>
<div id="chart-data"></div>
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="fusioncharts-sample.js"></script>

```

The button with id `get-chart-data` is the one which will print the chart's underlying data. We will use jQuery so as to make it easy to deal with the event handlers for the button. All the javascript related code will be placed inside `fusioncharts-sample.js` as shown below:

```javascript

$(function(){
  // include here the properties JSON Object defined above
var sampleChart = new FusionCharts(propertiesObject);
sampleChart.render();
  
sampleChart.render();
    $("#get-chart-data").click(getChartData);
});
 
function getChartData(){
  //to be implemented
}

```

In the above JavaScript code we have created a function `getChartData` chart to display the chart data.

FusionCharts class provides an alternative constructor like API which accepts the id of any existing chart and returns the FusionCharts instance identified by the id. The usage of the API looks like below:


```javascript

var existingFusionChartsObject = FusionCharts(“sample-chart-id”);
 
We will use the above API call in the getChartData method to get the chart’s data:
 
function getChartData(){
// Get the chart object
    var chartObj = FusionCharts("sample-chart");
    // Get chart data using the getJSONData API
    var chartData = chartObj.getJSONData()['data'];
    $("#chart-data").text(JSON.stringify(chartData));
 
}

```

In the above code snippet the `getJSONData()` API returns a JSON having structure:


```javascript

{
  chart:{},
  data:{}
}

```

where chart contains the values of the properties controlling chart's appearance and data contains the actual data of the chart. Since we are interested in data property, we fetch the same from the API response.

Loading the HTML in the browser and clicking on "Print Chart Data" gives us the below output (JSFiddle link [here](http://jsfiddle.net/uhnanqgv/8/)):

{% embed_chart understanding-the-structure-of-fusioncharts-constructor-and-fusioncharts-object-example-2.js %}

## Invoking APIs using instance of FusionCharts

We saw above how we can create instance of FusionCharts and also how we can reference an existing FusionCharts instance. The snippets shown in the above sections contained code where some APIs like `render()`, `getJSONData()` were invoked using the FusionCharts instance. In this section we will see more such APIs in action.

Let us add a new button to the HTML snippet from above, to resize the chart to a smaller size. 


```html

<div id="chart-container">FusionCharts will render here</div>
<button id="get-chart-data">Print Chart Data</button>
<button id="resize-chart">Resize Chart</button>
<div id="chart-data"></div>
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="fusioncharts-sample.js"></script>

```

Setup a handler for the button in `fusioncharts-sample.js` as shown below:


```javascript

$("#resize-chart").click(function(){
    resizeChart("sample-chart");
});
 
function resizeChart(chartId){
    FusionCharts(chartId).resizeTo(200,200);
}

```

Loading the HTML in the browser and clicking on the "Resize Chart" reduces the size of the chart as shown below (JSFiddle link [here](http://jsfiddle.net/uhnanqgv/4/)):

{% embed_chart understanding-the-structure-of-fusioncharts-constructor-and-fusioncharts-object-example-3.js %}
Let us look at another API `setChartAttribute` to change the chart attribute. We will add another button to change the chart border's color. The updated HTML is given below:


```html

<div id="chart-container">FusionCharts will render here</div>
<button id="get-chart-data">Print Chart Data</button>
<button id="resize-chart">Resize Chart</button>
<button id="chart-border">Change chart border</button>
<div id="chart-data"></div>

```

Setup the handler for the new button with id `chart-border` as shown below:


```javascript

$("#chart-border").click(function(){
    changeChartBorder("sample-chart", "#990000");
});
     
function changeChartBorder(chartId, borderColor){
    FusionCharts(chartId).setChartAttribute({"borderColor": borderColor});
}

```

In the function `changeChartBorder` we are making use of another API `setChartAttribute` which accepts the JSON object of the properties to be modified. Loading the HTML in the browser and clicking on "Change Chart Border" button results in chart as shown below (JSFiddle link [here](http://jsfiddle.net/uhnanqgv/6/)):

{% embed_chart understanding-the-structure-of-fusioncharts-constructor-and-fusioncharts-object-example-4.js %}
## Managing Synchronization when Rendering Multiple Charts

When the `render()` function is called to render a chart on a page, it sets into motion the following actions for each chart:

* Parsing the configuration of the chart
* Managing space for the chart
* Drawing the graphics of the chart

When there are multiple charts on the same page, for each chart, all these actions were executed in the same thread. For example, if there are two charts on a page, then the configuration parsing and space management for all the charts were executed in the same thread.

v3.12.0 introduces the `asyncRender` property, that lets you execute these actions in separate threads.

So, if there are two charts to be rendered one after the other, calling the `render()` function results in executing multiple threads, in the following sequence:

* Parse configuration and manage space for chart 1
* Parse configuration and manage space for chart 2
* Draw the graphics for chart 1
* Draw the graphics for chart 2

In order to incorporate this feature, some of the [APIs](/api/fusioncharts/fusioncharts-methods) are now given a callback function that is executed when `asyncRender` is set to `1`.