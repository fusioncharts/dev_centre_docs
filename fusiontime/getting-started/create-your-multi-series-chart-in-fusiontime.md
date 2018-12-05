---
title: Create a Chart with Multiple Data Plots | FusionCharts
description: This article outlines the steps to be executed for creating chart using multiple data plots.
heading: Add Multiple Data Plots
---

Previously, we have learned how to create a [simple chart]({% site.baseurl %}/fusiontime/getting-started/create-your-first-chart-in-fusiontime) with one plot type. FusionTime allows you to visualize charts with multiple plots.  

In this article, we'll create our first chart with multiple plots which will compare online sales of SuperStore in the **US** and **India**. 

The chart is shown below:

{% embed_ftChart online-sales-multi-series %}

## Create the `schema`

To define the schema, let's create a `schema.json` file and copy the following code:

```JSON
let schema = [{
    "name": "Country",
    "type": "string"
}, {
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```
To understand the `schema.json` in details click [here]({% site.baseurl %}/fusiontime/getting-started/create-your-first-chart-in-fusiontime).

## Create `data`

To add the data, let's create a `data.json` file and copy the following code:

```
let data = [
    [
        "United States",
        "1/4/2011",
        16.448
    ],
    [
        "United States",
        "1/5/2011",
        272.736
    ],
    [
        "United States",
        "1/5/2011",
        11.784
    ],
    ...
    ...
    [
        "India",
        "12/31/2014",
        364.59
    ],
    [
        "India",
        "12/31/2014",
        72
    ],
    [
        "India",
        "12/31/2014",
        39.42
    ]
]
```

In the above code:

* `data` is the variable in which the data array is saved.

* For each data plots in the chart, an array is created which consists of values (sub-array) for each row in the `DataTable`. The values in the sub-array represent:

    * In this example, we are showing the sales of two countries as India and USA.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. 

## Create the `index` file

Creating a chart with multiple plots is very simple in FusionTime. You just needs to specify the particular dimensional column name in the `series` attribute within [y-axis]({% site.baseurl %}/fusiontime/fusiontime-component/y-axis-in-fusiontime) object. The unique list of the dimensional values of the column gets plotted on the canvas. To do this, create an `index` file and copy the following code: 

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='local'>Local</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab npm-tab active'>
<pre><code class="custom-hlc language-javascript">
import FusionCharts from 'fusioncharts/core';
import TimeSeries from 'fusioncharts/viz/timeseries';
import DataStore from 'fusioncharts/datastore';

import data from './data';
import schema from './schema';

FusionCharts.addDep(TimeSeries);

let fusionDataStore = new FusionCharts.DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);

window.charInstance = new FusionCharts({
    type: 'timeseries',
    renderAt: 'container',
    width: "90%",
    height: 650,
    dataSource: {
        data: fusionTable,
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in India & the US'
        },
        yAxis: [{
            "plot": {
                "value": "Sales",
                "type": "line"
            }
        }],
        "series": "Country"
    }
});
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab local-tab'>
<pre><code class="custom-hlc language-javascript">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta http-equiv"Sales"&gt;
  &lt;style type="text/css"&gt;
  #container {
    width: 700px;
  }
  &lt;/style&gt;
  
  &lt;/head&gt;

&lt;body&gt;
  &lt;div id="container"&gt;&lt;/div&gt;
  &lt;script src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
  &lt;script src="path/to/local/data.js"&gt;&lt;/script&gt;
  &lt;script src="path/to/local/schema.js"&gt;&lt;/script&gt;
  &lt;script&gt;
    let fusionDataStore = new FusionCharts.DataStore();
    let fusionTable = fusionDataStore.createDataTable(data, schema);

    new FusionCharts({
      type: 'timeseries',
      renderAt: 'container',
      width: "95%",
      height: 650,
      dataSource: {
        data: fusionTable,
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in India & the US'
        },
        yAxis: [{
            "plot": {
                "value": "Sales",
            }
        }],
        "series": "Country"
      }
    }).render()
  &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

The above code is similar to that of the [Create your first chart]({% site.baseurl %}/fusiontime/getting-started/create-your-first-chart-in-fusiontime). In order to add multiple data plots do the following:

* Specify the value of the plot as `Sales` using the `value` attribute within the `plot` object.
* Specify the series as `Country` using the `series` atrribute within the `yAxis` object.

That's it! Your chart with multiple plots is ready.

Next, we will discuss about the FusionTime [JSON structure]({% site.baseurl %}/fusiontime/getting-started/fusiontime-json-structure).