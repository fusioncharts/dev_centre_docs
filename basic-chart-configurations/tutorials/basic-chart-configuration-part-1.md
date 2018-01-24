---
permalink: basic-chart-configurations/tutorials/basic-chart-configuration-part-1.html
title: Basic Chart Configuration(Part-1) | FusionCharts
description: This section talks about the basic configurations for charts related to their canvas, background and border.
heading: Basic Chart Configuration(Part-1)
chartPresent: true
---

FusionCharts Suite XT allows you to configure the border, chart background and the data plots present in the chart. This is the first article in a 2-part series where we cover how to configure chart properties. First article covers configuration of charts' appearance via properties while second part digs into usage of FusionCharts API to have the same effect. You can <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-part-2.html" target="_blank">check out part-2 here</a>.

Digesting huge amount of data in the form of numbers is very hard without visualizing the same. Charts are one of the ways of visualizing such huge numbers. We provide a huge library to visualize the data in form of charts and maps.

We support configuring the properties of the charts like its border, background, customizing the data plots to name a few. Such properties can be configured:

* Statically by constructing a <a href="http://json.org/" target="_blank">JSON</a> object of chart properties.
* Dynamically by using the `setChartAttributes` API of the FusionCharts object.

Charts can be made more interesting and visually appealing by modifying their border and background. We offer great support to implement the mentioned enhancements by making use of properties and APIs.

In this article we will show you how to beautify your charts by modifying:

* <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-part-1#changing-background-and-border-of-complete-area-of-chart" class="smoth-scroll">Border and background of the complete area of the chart</a>

* <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-part-1#changing-the-border-and-background-of-the-canvas" class="smoth-scroll">Border and background of the data plot area (which is called canvas)</a>

* <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-part-1#customising-the-columns-of-the-chart" class="smoth-scroll">Border and background of the columns in a column chart</a>


To illustrate the above features we would take the following scenario: plotting the variation of price of petrol in Bangalore in the last 6 months.

## Setting up the Chart with some Sample Data

Before we show you how to beautify the charts, let us first set up rendering of the chart with some sample data (if you are just getting started with FusionCharts, please read <a href="http://www.fusioncharts.com/dev/getting-started/building-your-first-chart.html" target="_blank">this article first</a>). For that we have to create the placeholder in the HTML where the chart would be rendered as shown below:

```html
<!DOCTYPE html>
<html>
<head>
  <title>FusionCharts Column 2D Sample</title>
</head>
<body>
  <!-- HTML Placeholder for the Chart --> 
  <div id="chart-container">FusionCharts will render here</div>
  <!-- JavaScript files for FusionCharts and Zune Theme -->
  <script src="js/fusioncharts.charts.js"></script>
  <script src="js/themes/fusioncharts.theme.zune.js"></script>
  <script src="js/fusioncharts.js"></script>
  <!-- JavaScript code for building the chart -->
  <script src="fusion-chart-column.js"></script>
</body>
</html>
```

Then via JavaScript we have to build and render the chart in the above created placeholder. The chart needs to be provided with some data. It can be done by either using a server side call or by defining some data in the client itself. For this article we are going to adopt the later approach as shown below:

```javascript
var chartData = [
    {
        "label": "Feb 4 2015",
        "value": "62.01"
    },
    {
        "label": "Mar 1, 2015",
        "value": "66.18"
    },
    {
        "label": "April 2, 2015",
        "value": "66.05"
    },
    {
        "label": "May 1, 2015",
        "value": "69.5"
    },
    {
        "label": "Jun 16, 2015",
        "value": "72.94"
    },
    {
        "label": "Jul 1, 2015",
        "value": "73.38"
    }
];
```

The properties which are applied globally to the given chart are initialized in the form of a JSON object below. Names of the properties are self explanatory. Complete list of attributes for a 2D-column-chart can be found <a href="http://www.fusioncharts.com/dev/chart-attributes.html?chart=column2d" target="_blank">here</a>.


```javascript
var chartProperties = {
  "caption": "Price of Petrol in Bangalore",
  "subCaption": "In the last 6 months",
  "xAxisName": "Petrol Price Change Date",
  "yAxisName": "Petrol Price",
  "numberPrefix": "Rs ",
  "rotatevalues": "1",
  "theme": "zune"
}
```

Above properties are responsible for modifying the appearance and providing captions to the chart.

Next we initialize the FusionCharts object by setting its properties for type of chart, id of the HTML element to place the chart, width, height, data format, data source as shown below:

```javascript
var petrolPriceChart = new FusionCharts({
  type: 'column2d',
  renderAt: 'chart-container',
  width: '550',
  height: '350',
  dataFormat: 'json',
  dataSource: {
    "chart": chartProperties,
    "data": chartData
  }
});
```


To render the chart we invoke the render() function of the FusionCharts object as shown below:

```javascript
FusionCharts.ready(function () {
  petrolPriceChart.render();
});
```


With this we have created a simple 2D column chart as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-1.js %}

Click <a href="http://jsfiddle.net/2r4732wj/1/" target="_blank">here</a> to view the above in JSFiddle.


## Configuring Chart Properties Statically

Now that we have the basic chart up and running, let us explore improvising the appearance of the chart by tweaking its properties.


### Changing Background and Border of Complete Area of Chart

Let us first add border to the above chart by modifying the chart properties object as shown below:

```javascript
var chartProperties = {
  //… additional properties defined above
 
  //attribute to activate the border
  "showBorder": "1",
 
  //color of the border
  "borderColor": "#000000",
 
  //thickness of the border
  "borderThickness": "3",
 
  //opacity of the border
  "borderAlpha": "100"
};
```


Reloading the same example gives us the below graph with the border:

{% embed_chart basic-chart-configuration-tutorials-example-2.js %}

Click <a href="http://jsfiddle.net/2r4732wj/2/" target="_blank">here</a> to view the above in JSFiddle.

Now let us enhance the same chart by modifying its background as shown below:

```javascript
var chartProperties = {
  //… additional properties defined above
 
  //hex code of the colors to be used for the background
  "bgColor": "EEEEEE,CCCCCC",
 
  //opaqueness of each color
  "bgAlpha" : "70,80",
 
  //contribution of each color to the gradient of the background
  "bgRatio": "60, 40",
 
  /*
  setting the canvas background as transparent so that the
  chart background is seen through the canvas.
  */
  "canvasBgAlpha": "0",
};
```


The chart now looks as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-3.js %}

Click <a href="http://jsfiddle.net/2r4732wj/3/" target="_blank">here</a> to view the above in JSFiddle.


### Changing the Border and Background of the Canvas

Canvas is the area of the chart on which columns of the chart are plotted i.e it excludes the area where the chart title, subtitle, axis names are shown. As we did with the entire chart area, we will show you how to customise the border and background of the canvas.

Firstly let's modify the background of the canvas:

```javascript
var chartProperties = {
  //additional properties defined above
 
  //background color of the canvas
  "canvasBgColor":"#1790e1",
 
  //transparency of the canvas background
  "canvasBgAlpha":"10"
};
```


With the above changes the chart now looks as:

{% embed_chart basic-chart-configuration-tutorials-example-4.js %}

Click <a href="http://jsfiddle.net/2r4732wj/4/" target="_blank">here</a> to view the above in JSFiddle.


Now lets add a border to the canvas area as shown below:

```javascript
var chartProperties = {
  //additional properties defined above
  
  //properties for defining canvas border
  "showCanvasBorder": "1",
  "canvasBorderColor":"#666666",
  "canvasBorderThickness": "4",
  "canvasBorderAlpha": “80”
}
```

This changes the chart as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-5.js %}

Click <a href="http://jsfiddle.net/2r4732wj/5/" target="_blank">here</a> to view the above in JSFiddle.


### Customising the Columns of the chart

Now let us customize the individual columns of the chart by changing their border and background color. We will show you how to fill the columns of the chart with gradient and add a border.

First let us fill the columns of the chart with gradient using the properties as shown below:

```javascript
var chartProperties = {
  // additional properties defined above
    
  //properties for customizing data plot background
  "paletteColors": "#008ee4, #9b59b6, #6baa01, #e44a00",
  "usePlotGradientColor" : 1,
  "plotGradientColor":"#ffffff"
}
```

We can even override the color and opacity of the individual columns of the chart as shown below:

```javascript
var chartData = [
  {
    "label": "Feb 4 2015",
    "value": "62.01"
  },
  {
    "label": "Mar 1, 2015",
    "value": "66.18",
 
//overriding default color and transparency values
    "color": "#8e0000",
    "alpha": "100"
  },
  {
    "label": "April 2, 2015",
    "value": "66.05"
  },
  {
    "label": "May 1, 2015",
    "value": "69.5"
  },
  {
    "label": "Jun 16, 2015",
    "value": "72.94"
  },
  {
    "label": "Jul 1, 2015",
    "value": "73.38"
  }
];
```


The chart now looks like:

{% embed_chart basic-chart-configuration-tutorials-example-6.js %}

Click <a href="http://jsfiddle.net/2r4732wj/6/" target="_blank">here</a> to view the above in JSFiddle.

Next let us look at modifying the border of columns in the chart. By default the columns have border. We can enable or disable it by using the 'showPlotBorder' property. We can even change the border to a dashed border as well. As we saw with the background color of the columns, we can override the border format for individual columns.

Let us look at how to define the border format for all of the columns of the chart first. and then we will look at how to override border properties for individual columns.

```javascript
var chartProperties = {
  //… additional chart properties defined above
 
  //properties to configure plot border
  "showPlotBorder": "1",
  "plotBorderDashed": "1",
  "plotBorderDashLen": "4",
  "plotBorderDashGap": "4",
  "plotBorderThickness": "1",
  "plotBorderColor": "#000000"
}
```

Let us override the border of the second column of the chart as shown below:

```javascript
var chartData = [
  {
    "label": "Feb 4 2015",
    "value": "62.01"
  },
  {
    "label": "Mar 1, 2015",
    "value": "66.18",
    //properties to override individual plot background
    "color": "#008000",
    "alpha": "70",
    //properties to override individual plot border
    "dashed":0
  },
  {
    "label": "April 2, 2015",
    "value": "66.05"
  },
  {
    "label": "May 1, 2015",
    "value": "69.5"
  },
  {
    "label": "Jun 16, 2015",
    "value": "72.94"
  },
  {
    "label": "Jul 1, 2015",
    "value": "73.38"
  }
];
```


Any property specific to a column goes with the chart data and the properties that are applicable to all the columns are defined in the chart properties.

With this change the chart now looks as shown below:

{% embed_chart basic-chart-configuration-tutorials-example-7.js %}

Click <a href="http://jsfiddle.net/2r4732wj/7/" target="_blank">here</a> to view the above in JSFiddle.

One can notice the difference in the format of the dash of the border between the second column and other columns above.

This article was about configuring chart properties statically. In the <a href="/basic-chart-configurations/tutorials/basic-chart-configuration-tutorials-2.html" target="_blank">next part(part-2)</a> we will see how to use FusionCharts API to achieve the same results at runtime (dynamically).