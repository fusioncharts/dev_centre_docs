---
title: Setting Data Source Using URL | FusionCharts
description: FusionCharts lets you pass the complete JSON/XML chart data using a JSON file or a URL without losing any functionality
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using `vue-fusioncharts` component.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example]({% site.baseurl %}/getting-started/vue/your-first-chart-using-vuejs) using JSON, and use a .json file as the data source.

{% embed_chart plain-js-setting-data-using-url-example-1.js %}

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

> If you are using multi-lingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart is given below:

```
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

var app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: '700',
        height: '400',
        dataFormat: 'jsonurl',
        dataSource: 'https://static.fusioncharts.com/sample/oilReserves.json' // url of datasource
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
</div>
```

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```
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

The code to render a chart is given below:

```
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Column2D)

var app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: '700',
        height: '400',
        dataFormat: 'xmlurl',
        dataSource: 'https://static.fusioncharts.com/sample/oilReserves.xml' // url of datasource
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
</div>
```