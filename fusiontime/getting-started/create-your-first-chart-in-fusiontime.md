---
title: Create your First Chart | FusionCharts
description: This article outlines the steps to be executed for creating your first chart.
heading: Create your First Chart
---

FusionTime, like the name implies, is a product which is used to plot time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time. 

In this article, you'll see how to install FusionTime and render your first time series chart.

## Installation

Installing FusionCharts automatically installs FusionTime and all the other dependencies. Install FusionCharts using any of the following steps:

Install **FusionCharts** using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install `FusionTime` via npm run the command below:</strong></div>
<pre><code class="custom-hlc language-PowerShell">
    $ npm install fusioncharts
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install `FusionTime` follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of **FusionTime**.

## Create your first chart

Let's create a simple time-series chart showcasing online sales of SuperStore in the US.

The chart is shown below:

{% embed_ftChart online-sales-single-series %}

Data to the FusionTime needs to be fed from a [Datatable]({% site.baseurl %}/fusiontime/fusiontime-data-engine/overview) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore]({% site.baseurl %}/fusiontime/fusiontime-data-engine/overview) and load the data into the `DataTable` in JSON or 2D array format. To feed data to FusionTime, you need to provide the following:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`. 

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema helps DataTable understand the columns in your data, the data type for each column and the input format in case of date. You've to mandatorily specify the schema for each DataTable for FusionTime to render it.

To define the schema, let's create a `schema.json` file and copy the following code:

> Note: It is not mandatory to create the schema in a different .json file. You can also define the schema within the `.html` file.


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

In the above code:
* `schema` is the variable in which the array is saved.
* Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
    * name - Specify the name of the column.
    * type - Specify the type of the column.
    * format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here]({% site.baseurl %}/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

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
        "United States",
        "12/31/2014",
        20.72
    ],
    [
        "United States",
        "12/31/2014",
        13.904
    ],
    [
        "United States",
        "12/31/2014",
        3.024
    ]
]
```

In the above code:

* `data` is the variable in which the data array is saved.

* Each element of the data array has values specific to each row of the `DataTable`. The values in the array represent:

    * The name of the **Country**.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

### Create `index` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index` file and copy the following code: 

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
        "yAxis": [{
            "plot": {
                "title": 'Sales ($)'
            }
        }],
        caption: {
            text: 'Online Sales of a SuperStore in the US'
        }
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
  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
  &lt;title&gt;Create your First Chart&lt;/title&gt;
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
        width: "90%",
        height: 650,
        dataSource: {
            data: fusionTable,
            "yAxis": [{
                "plot": {
                    "title": 'Sales ($)'
                }
            }],
            caption: {
                text: 'Online Sales of a SuperStore in the US'
            }
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


In the above code:

* Include `fusioncharts.js` file.

* Include `data.json` and `schema.json` files.

* Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.

* Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the the `DataTable`.

* Define the chart configuration in the FusionCharts constructor:

    * Set the type as `timeseries`.

    * Set the chart container as `container` using the `renderAt` property.

    * Set the width and height (in pixels).

    * Set the name of the `DataTable` as the value of the `data` property of `dataSource`.

    * Set the data to create the chart.

    * Specify the caption of the chart using `text` attribute in `caption` object.

That's it! Your first chart using FusionTime is ready.

Next, we will discuss on how to add create a [multi-variate]({% site.baseurl %}/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime) chart.