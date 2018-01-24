---
permalink: using-with-javascript-libraries/reactjs/introduction.html
title: Introduction to FusionCharts ReactJS Component | FusionCharts
description: The React-FusionCharts Component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications
heading: Introduction to FusionCharts ReactJS Component
chartPresent: false
---

FusionCharts Suite XT includes an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) that you can use to plot static as well as real-time data.

The __React-FusionCharts__ Component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single ReactJS component.

## Downloading the Component

You can download the React-FusionCharts component from [here](http://www.fusioncharts.com/reactjs-charts/).

## Installing the React-FusionCharts Component

To install the React-FusionCharts component for your applications, follow the steps given below:

### Step 1: Include `fusioncharts.js` and `react-fusioncharts.js`

In your HTML, include the `fusioncharts.js` and the `react-fusioncharts.js` JavaScript files, as shown in the code below:

```html

<script type="text/javascript" src="https://unpkg.com/react@0.13.3/dist/JSXTransformer.js"></script>
<script type="text/javascript" src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
<script type="text/javascript" src="https://unpkg.com/react-fusioncharts/dist/react-fusioncharts.js"></script>

```

<p class="text-info"> It is mandatory that the __react-fusioncharts.js__ file be included after all other script files. </p>

### Step 2: Add the HTML Container Element to Render the Chart

Add a `<div>` HTML container element, which will be used to render the chart, as shown below:

```html

<div id="chart-container"></div>

```

### Step 3: Define the Chart Configuration

As shown in the code below, in your JavaScript code, define an object that contains the configuration for a FusionCharts Suite XT chart. Set the chart data source using the regular [FusionCharts JSON format](/getting-started/building-your-first-chart).

```html

var chartConfigs = {
    type: "Column2D",
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    dataSource: {
        chart:{},
        data: [{value: 500}, {value: 600}, {value: 700}]
    }
};

```

### Step 4: Render the Chart

The chart object is now passed to the FusionCharts component as the props object. The chart is then rendered using the `FusionCharts` tag, as shown in the code below:

```html

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('chart-container')
);

```

__An Alternative Method for Passing Chart Configuration__

The alternative method for passing chart configuration combines steps __3__ and __4__, as shown in the code below:

```html

var chartData = {
        chart: {},
        data: [{value: 500}, {value: 600}, {value: 700}]
    };

ReactDOM.render(
    <ReactFC
        type = "Column2D"
        className = "fc-column2d"  // ReactJS attribute-name for DOM classes
        dataFormat = "JSON"
        dataSource = {chartData}/>,
    document.getElementById('chart-container')
);

```


Once the installation is complete, you are ready to start creating and customizing your charts using the React-FusionCharts component. Read on to see how.

## Licensing
<p class="text-info">
React-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [download an evaluation](http://www.fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/)).
</p>