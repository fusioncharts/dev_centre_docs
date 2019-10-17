---
title: Quick Start Guide using React | FusionCharts
description: This article outlines the steps to be executed for installing FusionCharts using React.
heading: Quick Start Guide
---

In this article, we will learn how to install and set up FusionCharts using React. You can do this using the following:

Two buttons:

Local/CDN | NPM

## Prerequisites

We assume you have already installed NodeJS. If not, click [here](https://nodejs.org/en/) to install it before proceeding any further.

Once you finish installing NodeJS, open the command prompt.  Then, follow the steps mentioned below to install React JS, the `react-fusioncharts` component, and the FusionCharts suite.

### Install React JS

Run the following command to install React JS on your computer:

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** Suite and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.</li>
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</li>
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

That completes the installation of FusionCharts and the react-fusioncharts component.

## Create your first chart

Let's create a Column 2D chart using the react-fusioncharts component showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart-example-1.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart data

The data to render the above chart is shown in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  // Chart Data
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}
```

### Install `react-fusioncharts`

Navigate to the `ReactJS` folder. Now, run the following command to install the `react-fusioncharts` component.

```
npm install react-fusioncharts --save
```

### Install FusionCharts

Run the following command from inside the `ReactJS` folder, to install the FusionCharts suite.

```
npm install fusioncharts --save
```

### Create Your First App

Now that you have finished installing all files necessary to work with React JS, it is time to build the first React app. From inside the `ReactJS` folder, run the following command on the command prompt:

```
create-react-app my-first-app
```

Once the app is ready, navigate to the `my-first-app` folder.

That's it. You're done installing React JS and FusionCharts. Proceed to the <<Quick Start Guide>> to build your first chart with React JS in FusionCharts.

Now, you will see how to build the first chart with React JS and the `react-fusioncharts` component. We assume you have already installed all necessary files and also created the first app using React JS. If not please refer to the <<Installation>> guide before proceeding any further.

Once you have built the first React app, it is time to create your first chart with React JS and FusionCharts. The chart will look as follows:

{% embed_chart getting-started-your-first-chart-example-1.js %}

To build the chart shown above:

1. Go to the `ReactJS` > `my-first-app` > `src` folder. 

2. Open the `App.js` file in an editor of your choice.

Now, copy the following code and replace the code in the `App.js` file with it:

```javascript
//Including react
import React, { Component } from 'react';
//Including the react-fusioncharts component
import ReactDOM from 'react-dom';
//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';
//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';
//Import ReactFC
import ReactFC from 'react-fusioncharts';
//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//Adding the chart as dependency to the core fusioncharts
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
// Step 9 - Creating the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}
```

Now, run the following command to see the first chart on the browser:

```
npm start
```

Now that you have built the first chart using React JS and FusionCharts, it's time to understand the above code and How it Works.
