---
title: How to Render a Chart using React | FusionCharts
description: This article outlines the steps to be executed for rendering FusionCharts using React.
heading: How It Works?
---

In this section, you will see how the different sections of the code for the first chart work. Before going through this article, refer to the <<Installation>> and <<Quick Start Guide>> to get started.

## Import the libraries

The first part of the code is where you import all the necessary files of react and FusionCharts.

```javascript
//Step - 1: Include react
import React, { Component } from 'react';
//Step - 2: Include the react-fusioncharts component
import ReactDOM from 'react-dom';
//Step - 3: Include the fusioncharts library
import FusionCharts from 'fusioncharts/core';
//Step - 4: Include the chart type
import Column2D from 'fusioncharts/viz/column2d';
//Step - 5: Import ReactFC
import ReactFC from 'react-fusioncharts';
//Step - 6: Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//Step - 7: Add the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
/*
//Step - 8: Create the JSON object to store the chart configurations
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
        // Step - 9: Add Chart Data
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
// Step - 10: Create the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}
*/
```

In the above section of the code, do the following:

* Include the `React` component from `react`

* Import `ReactDOM` from `react-dom` to include the React JS Document Object Model

* Import `FusionCharts` from `fusioncharts-core` to include the `fusioncharts` library

* Import `Column2D` from 'fusioncharts/viz/column2d' to include the chart type

* import `ReactFC` from 'react-fusioncharts' to include the `react-fusioncharts` component

* Import `FusionTheme` from 'fusioncharts/themes/fusioncharts.theme.fusion' to use the `fusion` theme in the chart

* Use the `fcRoot` method to add the chart as dependency to the core `fusioncharts`

### Create FusionCharts constructor

Next, create a JSON object to store the various chart properties and configurations as shown below:

```javascript
/*
//Step - 1: Include react
import React, { Component } from 'react';
//Step - 2: Include the react-fusioncharts component
import ReactDOM from 'react-dom';
//Step - 3: Include the fusioncharts library
import FusionCharts from 'fusioncharts/core';
//Step - 4: Include the chart type
import Column2D from 'fusioncharts/viz/column2d';
//Step - 5: Import ReactFC
import ReactFC from 'react-fusioncharts';
//Step - 6: Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//Step - 7: Add the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
*/
//Step - 8: Create the JSON object to store the chart configurations
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
/*
        // Step - 9: Add Chart Data
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
// Step - 10: Create the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
} */
```

In the above code:

* Set the value of `type` to 'column2d'. This indicates that you want to build a Column 2D chart.
*  Set the value of `width` to '700'. This is the width of the chart.
* Set the value of `height` to `400`. This is the height of the chart.
* Set the value of `dataFormat` to 'json'. This indicates the format of data the chart will accept.
* Provide the data for the chart within the `dataSource` object. You can either provide a link to an external JSON file, or provide the entire data here. In the given example, you will find the entire data provided within this section. 

### Add Chart Data

Now it is time to provide the chart data within the  `dataSource` object.

```javascript
/*
//Step - 1: Include react
import React, { Component } from 'react';
//Step - 2: Include the react-fusioncharts component
import ReactDOM from 'react-dom';
//Step - 3: Include the fusioncharts library
import FusionCharts from 'fusioncharts/core';
//Step - 4: Include the chart type
import Column2D from 'fusioncharts/viz/column2d';
//Step - 5: Import ReactFC
import ReactFC from 'react-fusioncharts';
//Step - 6: Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//Step - 7: Add the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
//Step - 8: Create the JSON object to store the chart configurations
const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": 
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Step - 9: Add Chart Data
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
/*
// Step - 10: Create the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
} */
```

In the above section:

* Create a `chart` object within the `dataSource` object to provide the attributes for configuring various chart elements. 

* Create a `data` object under the `chart` object to provide the chart data.

* Provide the values for data labels and data values of each plot point using `label` and `value` attributes.

### Create DOM element

Finally, create the DOM element to pass the `react-fusioncharts` component to the chart.

```javascript
/*
//Step - 1: Include react
import React, { Component } from 'react';
//Step - 2: Include the react-fusioncharts component
import ReactDOM from 'react-dom';
//Step - 3: Include the fusioncharts library
import FusionCharts from 'fusioncharts/core';
//Step - 4: Include the chart type
import Column2D from 'fusioncharts/viz/column2d';
//Step - 5: Import ReactFC
import ReactFC from 'react-fusioncharts';
//Step - 6: Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//Step - 7: Add the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
//Step - 8: Create the JSON object to store the chart configurations
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
        // Step - 9: Add Chart Data
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
*/
// Step - 10: Create the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}
```

In the above code:

* Create the `DOM` element to pass the `react-fusioncharts` component

* Use the `render` function to render the chart on the browser

Next we will see the available charts, widgets and maps, in the List of charts and List of maps respectively.
