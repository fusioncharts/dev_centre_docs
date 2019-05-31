---
title: Your First Gauge in React using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the react-fusioncharts component.
heading: Create a Gauge in React using FusionCharts
chartPresent: false
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React** component which provides bindings for **FusionCharts**. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project.

In this page, we'll see how to install FusionCharts and render a gauge using the `react-fusionCharts` component.

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
<pre><code class="language-javascript">
    $ npm install react-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>2. Install the `fusioncharts` JS files</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div><strong>To install the FusionCharts Suite and the `react-fusioncharts` component follow the steps below:</strong></div>
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
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including react --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script>
    &lt;script type="text/javascript" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script>
    &lt;!-- Step 2 - Including Babel for JSX transpiling --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script>
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 4 - Including the react-fusioncharts component--&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react-fusioncharts@2.0.1/dist/react-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Step 5 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** Suite and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.</li>
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the `react-fusioncharts` component.</li>
        <li>Include the FusionCharts theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-javascript">
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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the gauge

To render the gauge, follow the steps below:

1. Include `react`

2. Include `react-fusioncharts`

3. Include the `fusioncharts` library

4. Include gauge type.

5. Include the FusionCharts theme file to apply style to the charts.

6. Include the `ExcelExport` module to export chart data in XLSX format.

7. Add the gauge, theme and ExcelExport as a dependency to the core.

8. Store the chart configurations as a JSON object. In this JSON object:

   - Set the gauge type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).

   - Set the width and height (in pixels).

   - Set the `dataFormat` as **json**.

   - Embed the json data as the value of the `dataSource`.

9. Create the DOM element and pass the `react-fusioncharts` component directly to the **ReactDOM.render()** method.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-javascript">// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Include the ExcelExport
import ExcelExport from 'fusioncharts/features/excelexport';

// Step 7 - Adding the chart, theme and ExcelExport as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme, ExcelExport);

// Step 8 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'angulargauge', // The gauge type
    width: '450', // Width of the gauge
    height: '250', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
      "chart": {
          "caption": "Nordstrom's Customer Satisfaction Score for 2017",
          "lowerLimit": "0",
          "upperLimit": "100",
          "showValue": "1",
          "numberSuffix": "%",
          "theme": "fusion",
          "showToolTip": "0"
      },
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

// Step 9 - Creating the DOM element to pass the react-fusioncharts component 
class App extends React.Component {
  render() {
     return (
     &lt;ReactFC
        {...chartConfigs}/&gt;
     );
  }
}

export default App
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including react --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script>
    &lt;!-- Including react-dom --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script> 
    &lt;!-- Including babel --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script> 
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script> 
    &lt;!-- Including the fusioncharts library to render charts --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.charts.js"&gt;&lt;/script> 
    &lt;!-- Including react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/react-fusioncharts@2.0.1/dist/react-fusioncharts.min.js"&gt;&lt;/script> 
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script> 
    &lt;script type="text/jsx"&gt;
    ReactFC.fcRoot(FusionCharts);
    const chartConfigs = {
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Nordstrom's Customer Satisfaction Score for 2017",
                "lowerLimit": "0",
                "upperLimit": "100",
                "showValue": "1",
                "numberSuffix": "%",
                "theme": "fusion",
                "showToolTip": "0"
            },
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
    &lt;/script&gt;
    &lt;script type="text/jsx"&gt;
    ReactDOM.render(
        &lt;ReactFC {...chartConfigs} /&gt;,
        document.getElementById('chart-container')
    );
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id='chart-container'&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including react --&gt;
    &lt;script type="text/javascript" src="path/to/local/react.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-dom --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-dom.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including babel --&gt;
    &lt;script type="text/javascript" src="path/to/local/babel.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts library to render charts --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.widgets.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script type="text/jsx"&gt;
    ReactFC.fcRoot(FusionCharts);
    const chartConfigs = {
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            // Gauge Configuration
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
    &lt;/script&gt;
    &lt;script type="text/jsx"&gt;
    ReactDOM.render(
        &lt;ReactFC {...chartConfigs} /&gt;,
        document.getElementById('chart-container')
    );
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id='chart-container'&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first gauge using `react-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
