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

```
npm install --save react
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

Now that you have built the first chart using React JS and FusionCharts, it's time to understand the above code and <<How it Works>>.
