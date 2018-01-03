---
permalink: using-with-javascript-libraries/reactjs/install-fusioncharts-reactjs-component-via-npm.html
title: Install FusionCharts ReactJS Component via NPM | FusionCharts
description: FusionCharts Suite XT includes an extensive range of charts, gauges, and maps that you can use to plot static as well as real-time data.
heading: Install FusionCharts ReactJS Component via NPM
chartPresent: false
---

FusionCharts Suite XT includes an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/){:target='_blank'} that you can use to plot static as well as real-time data.

The __React-FusionCharts__ component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single ReactJS component.

This article outlines the steps to be executed for installing all the node modules like react, react-dom, fusioncharts and react-fusioncharts via NPM and rendering charts using the react-fusioncharts component.

### Step 1: Install node modules via NPM

To install `react` module, execute the following commands in the terminal: 

```html
npm install react --save
```

To install `react-dom` module, execute the following commands in the terminal:

```html
npm install react-dom --save
```

To install `fusioncharts` module, execute the following commands in the terminal:

```html
npm install fusioncharts --save
```

To install `react-fusioncharts` module, execute the following commands in the terminal:

```html
npm install react-fusioncharts --save
```

All the above commands can also be done in a single line:

```html
npm install react react-dom fusioncharts react-fusioncharts --save
```

### Step 2: Add the HTML Container Element to Render the Chart

Add a `<div>` HTML container element, which will be used to render the chart, as shown below:

```html

<div id="chart-container"></div>

```

### Step 3: Import react-fusioncharts package via npm

Import react, react-dom, fusioncharts, and react-fusioncharts modules, in the same order, via npm. In your JavaScript code, define an object that consists of all the configurations and their values, required to render FusionCharts.

```html

import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

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

FusionCharts ReactJs component can be used in following two ways:

* To render a chart, use the ReactFC component directly into ReactDOM. The configurations are passed as props of the component.

* Create multiple ReactFC component inside your custom defined component to render individual charts. By this method you will be able to hold the state in your custom defined component and will be able to perform various activities using the component's lifecycle hooks.


__Method 1:__ Render the chart in React application for a standalone chart. We can choose to make a component class or directly render the chart with the ReactFC component class. The object containing the chart configuration properties are passed to the FusionCharts component as props, as shown below: 

```html

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('chart-container')
);

```


__Method 2:__ Create a custom `MyApp` component to render the chart as shown below:

```html

var MyApp = React.createClass({
    ..., // Rest of the React Component Code
    render: function () {
        return (
            <ReactFC {...categoryChartConfigs} />
            <ReactFC {...revenueChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);

```

We also recommend to create an object, with the configuration properties, and passing the values defined. So, you can also pass the configuration properties separately as shown below:

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

Once you are done with the steps given above, your chart will be rendered when you load the page.

## Licensing
<p class="text-info">
React-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [download an evaluation](http://www.fusioncharts.com/download/){:target='_blank'}. You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/){:target='_blank'}).
</p>