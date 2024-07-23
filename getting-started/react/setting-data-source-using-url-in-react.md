---
title: Setting Data Source Using URL | FusionCharts
description: Setting Data Source effortlessly in React with FusionCharts, optimizing your data visualization capabilities for web applications seamlessly.
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using `react-fusioncharts` component.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/react/your-first-chart-using-react) using JSON, and use a .json file as the data source.

{% embed_chartData plain-js-setting-data-using-url-example-1.js json %}

The data for this chart is represented in the table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

The JSON representation for the above table looks as shown below:

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

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your HTML page.

> If you are using multilingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

The full code of the above sample is given below:

```javascript
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: 'column2d',
  width: 700,
  height: 400,
  dataFormat: 'jsonurl',
  dataSource: 'https://static.fusioncharts.com/sample/oilReserves.json', // url of datasource
};

class Chart extends Component {
  render () {
    return (
      <ReactFC {...chartConfigs} />
    )
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Set the value of `exportEnabled` attribute to `1`, which enables the export feature of the chart.

3. To set the datasource using URL:
    * Set the value of the `dataFormat` to **jsonurl**.
    * Set the static URL to `dataSource` to render the above chart.

4. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```xml
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```
Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

The full code of the above sample is:

```javascript
//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

//Including the chart type
import Column2D from 'fusioncharts/viz/column2d';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: 'column2d',
  width: 700,
  height: 400,
  dataFormat: 'xmlurl',
  dataSource: 'https://static.fusioncharts.com/sample/oilReserves.xml', // url of datasource
};

//Your react component
class Chart extends Component {
  render () {
    return (
      <ReactFC {...chartConfigs} />
    )
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as XML.
    * Set the value of `exportEnabled` attribute to `1`, which enables the export feature of the chart.

3. To set the datasource using URL:
    * Set the value of the `dataFormat` to **xmlurl**.
    * Set the static URL to `dataSource` to render the above chart.

4. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
