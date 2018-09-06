---
title: Your First Chart in React using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-fusioncharts component.
heading: Create a chart in React using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React** component which provides bindings for **FusionCharts**. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project. 

In this page, we'll see how to install FusionCharts and render a chart using the `react-fusionCharts` component.

## Installation

Install **FusionCharts** and the `react-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install fusioncharts and the `react-fusioncharts` component via npm follow the steps below:</strong></div>
<div>1. Install the `react-fusioncharts` module</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install react-fusioncharts --save
</code></pre>
<div>2. Install the `fusioncharts` package</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install fusioncharts --save
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<div><strong>To install the FusionCharts package and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the `react-fusioncharts` module.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including react --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script &gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script &gt;
    &lt;!-- Step 2 - Including Babel for JSX transpiling --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script &gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script &gt;
    &lt;!-- Step 4 - Including the react-fusioncharts component--&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react-fusioncharts@2.0.1/dist/react-fusioncharts.min.js"&gt;&lt;/script &gt;
    &lt;!-- Step 5 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js"&gt;&lt;/script &gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>


<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** package and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.</li>
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the `react-fusioncharts` component.</li>
        <li>Include the FusionCharts theme file to apply the style to the charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including react  --&gt;
    &lt;script type="text/javascript" src="path/to/local/react.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/react-dom.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including Babel for JSX transpiling --&gt;
    &lt;script type="text/javascript" src="path/to/local/babel-core.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 5 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts and the react-fusioncharts component.

## Create your first chart

Let's create a Column 2D chart using the react-fusioncharts component showing the "Countries With Most Oil Reserves". 

In this page, we will create the chart using npm. To know how to create charts using **local files** and **CDN** click here.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart-example-1.js %}

The data for the above chart is shown in the table below:

Country|No. of Oil Reserves||
-|-|-
Venezuela|290||
Saudi|260||
Canada|180||
Iran|140||
Russia|115||
UAE|100||
US|30||
China|30||

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format as shown below:

```json
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts. 

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include **react.**

2. Include **react-fusioncharts**

3. Include the **fusioncharts** library

4. Include the chart type

5. Include the FusionCharts theme file to apply the style to the charts

6. Add the chart and the theme as a dependency to the core

7. Store the chart configurations in a JSON object. In this JSON object:
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

8. Create the `DOM` element and pass the react-fusioncharts component directly to the **ReactDOM.render()** method.

The consolidated code is shown below:

```JavaScript
// Step 1 - including react

import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component

import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

// Step 5 - Including the theme as fusion

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: { 

// Chart Configuration 
        "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]
        }
    };

// Step 8 - Creating the DOM element to pass the react-fusioncharts component 
ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);
```

That's it! Your first chart using `react-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.