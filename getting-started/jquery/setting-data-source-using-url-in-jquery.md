---
title: Setting Data Source Using URL | FusionCharts
description: Implement URL-based data sources in jQuery with FusionCharts. Streamline data visualization in your web projects. Check out our website for more info.
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute.

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file uisng `jquery-fusioncharts` component.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/jquery/your-first-chart-using-jquery) using JSON, and use a .json file as the data source.

{% embed_chart plain-js-setting-data-using-url-example-1.js %}

The data for this chart is represented in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290                 |
| Saudi     | 260                 |
| Canada    | 180                 |
| Iran      | 140                 |
| Russia    | 115                 |
| UAE       | 100                 |
| US        | 30                  |
| China     | 30                  |

The JSON representation for the above table looks as shown below:

```javascript
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

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart using `require` is given below:

```javascript
//Include fusioncharts
var FusionCharts = require('fusioncharts');

//Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

//Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQFc = require('jquery-fusioncharts');

//Pass FusionCharts as dependency
Charts(FusionCharts);

//Pass theme as dependency
FusionTheme(FusionCharts);

$('#chart-container').insertFusionCharts({
  type: 'column2d',
  width: 700,
  height: 400,
  dataFormat: 'jsonurl',
  dataSource: 'https://static.fusioncharts.com/sample/oilReserves.json' // url of datasource
}
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as XML.

3. To set the datasource using URL:
    * The value of the `dataFormat` has been set to **jsonurl**.
    * A static URL has been set to `dataSource` to render the above chart.

4. Create an HTML template to render the chart.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```html
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

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart using `require` is given below:

```javascript
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var $ = require('jquery');
var jQFc = require('jquery-fusioncharts');

Charts(FusionCharts);
FusionTheme(FusionCharts);

$('#chart-container').insertFusionCharts({
  type: 'column2d',
  width: 700,
  height: 400,
  dataFormat: 'xmlurl',
  dataSource: 'https://static.fusioncharts.com/sample/oilReserves.xml' // url of datasource
}
```

The HTML template of the above sample is shown below:

```HTML
<div id="chart-container">
    FusionCharts will render here
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Stored the chart configuration in an XML object. In the XML object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as XML.

3. To set the datasource using URL:
    * The value of the `dataFormat` has been set to **xmlurl**.
    * A static URL has been set to `dataSource` to render the above chart.

4. Create an HTML template to render the chart.
