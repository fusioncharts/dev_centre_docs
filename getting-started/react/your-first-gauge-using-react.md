---
title: Your First Chart in React using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-fusioncharts component.
heading: Create a chart in React using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React** component which provides bindings for **FusionCharts**. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project. 

In this page, we'll see how to install FusionCharts and render a gauge using the `react-fusionCharts` component.

## Installation

Install **FusionCharts** and the `react-fusioncharts` component using any of the following methods:

**Local files:**

To install the **FusionCharts** package and the `react-fusioncharts` component follow the steps below:

1. Include the [React ](https://reactjs.org/)core library.

2. Include [Babel ](https://babeljs.io/)for [JSX ](https://unpkg.com/babel-standalone/babel.min.js) transpiling.

1. Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

3. Include the `react-fusioncharts` module.

4. Include the FusionCharts theme file to apply the style to the charts.

The consolidated code is shown below:

<head>
    <meta charset="utf-8">
    <title>React - FusionCharts</title>
    <!-- Step 1 - Including react-->
    <script type="text/javascript" src="path/to/local/react.js"></script>
    <script type="text/javascript" src="path/to/local/react-dom.js"></script>
    <!-- Step 2 - Including Babel for JSX transpiling-->
    <script type="text/javascript" src="path/to/local/babel-core.js"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- Step 4 - Including the react-fusioncharts component-->
    <script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
    <!-- Step 5 - Including the fusion theme-->
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>

**Using CDN links:**

To install the FusionCharts package and the react-fusioncharts component follow the steps below:

1. Include the [React ](https://reactjs.org/)core library.

2. Include [Babel ](https://babeljs.io/)for [JSX ](https://unpkg.com/babel-standalone/babel.min.js) transpiling.

3. Include the **FusionCharts** JavaScript files from CDN.

4. Include the `react-fusioncharts` module.

5. Include the FusionCharts theme file to apply the style to the charts.

The consolidated code is shown below:

<head>
    <meta charset="utf-8">
    <title>React - FusionCharts</title>
    <!-- Step 1 - Including react -->
    <script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script type="text/javascript"

src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- Step 2 - Including Babel for JSX transpiling-->
    <script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <!-- Step 3 - Including the react-fusioncharts component -->
    <script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**"></script>
    <!-- Step 4 - Including the react-fusioncharts component -->
    <script type="text/javascript" src="**https://unpkg.com/react-fusioncharts@2.0.1/dist/react-fusioncharts.min.js**"></script>
    <!-- Step 5 - Including the fusion theme-->
    <script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**"></script>
</head>

**Using npm**

To install fusioncharts and the react-fusioncharts component via npm follow the steps below:

1. Install the **react-fusioncharts** module

$ npm install react-fusioncharts --save

2. Install the **fusioncharts** package

$ npm install fusioncharts --save

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data. 

To start with, we'll build a simple angular gauge showcasing Nordstorm's Customer Satisfaction Score as shown below. 

In this page, we will create the gauge using npm. To know how to create gauge using **local files** and **CDN** click here.

The angular gauge is shown below:

<live gauge>

The thresholds for the above sample have been defined using the following range:


Range|Color|Hex Code||
-|-|-|-
0-50|Red|#F2726F||
50-75|Yellow|#FFC533||
75-100|Green|#62B58F||



So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. In this example, we will use the JSON format as shown below:

<JSON DATA>

In the above JSON: 

* Create the **chart** object to define the elements of the gauge.

* Create the **colorRange** array to set the color associated with the specific range of values.

* Specify the **min** and **max** value within the **color** array under the **colorRange** array.

* Specify the hex code of the color within the **color** array.

* Create the **dials** array to represent the customer satisfaction score.

* Create the **dial** array under the **dials** array and set the value of the dial.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the gauge

To render the gauge, follow the steps below:

1. Include **react.**

2. Include **react-fusioncharts**

3. Include the **fusioncharts** library

4. Include gauge type.

5. Include the FusionCharts theme file to apply the style to the charts.

6. Add the gauge and the theme as a dependency to the core.

7. Store the chart configurations as a JSON object. In this JSON object:

* Set the gauge type as `angulargauge`.  Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

* Set the width and height (in pixels). 

* Set the `dataFormat` as **json**.

* Embed the json data as the value of the `dataSource`.

8. Create the DOM element and pass the `react-fusioncharts` component directly to the **ReactDOM.render()** method.

The consolidated code is shown below:

// Step 1 - Including react

import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component

import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

// Step 4 - Including the chart type
import AngularGauge from 'fusioncharts/viz/angulargauge';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the gauge as dependency to the core fusioncharts

ReactFC.fcRoot(FusionCharts, AngularGauge, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'angulargauge', // The gauge type
        width: '450', // Width of the gauge
        height: '250', // Height of the gauge
        dataFormat: 'json', // Data type
        dataSource: {
            // Gauge Configuration
            "chart": {
                "caption": "Nordstorm's Customer Satisfaction Score for 2017",
                "lowerLimit": "0",
                "upperLimit": "100",
                ...            },
            // Chart Data
            "colorRange": {
                "color": [{
                    "minValue": "0",
                    "maxValue": "50",
                    "code": "#F2726F"
                }, {
                    "minValue": "50",
                    "maxValue": "75",
                    "code": "#FFC533"
                }, {
                    "minValue": "75",
                    "maxValue": "100",
                    "code": "#62B58F"
                }]
            },
            "dials": {
                "dial": [{
                    "value": "81"
                }]
            }
        }
    };

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);

That's it! Your first gauge using `react-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

