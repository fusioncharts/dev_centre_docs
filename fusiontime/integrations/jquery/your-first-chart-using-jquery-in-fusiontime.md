---
title: Create a Chart in jQuery | FusionTime
description: This article outlines the steps to be executed for creating your first chart in jQuery using FusionTime.
heading: Create a Chart in jQuery
---

FusionTime is a JavaScript charting library that helps you visualize and explore time-series data. In FusionTime, you get lots of out-of-the-box interactive features, such as time navigator, date range selectors, tooltips with crosslines, interactive legend, and more. These features enhance the experience of exploring and understanding time series data.

We have built a simple `jquery-fusioncharts` plugin which provides bindings for **FusionTime**. The `jquery-fusioncharts` plugin allows you to easily add interactive time-series charts to any **jQuery** project.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `jquery-fusioncharts` plugin.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the **FusionCharts** package to get access to FusionTime. To install follow the steps below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install `fusiontime` and the `jquery-fusioncharts` module via npm follow the steps below:</strong></div>
<div class='mt-20'>1. Install the `jquery-fusioncharts` module. </div>
<pre><code class="language-javascript">
$ npm install jquery-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install `fusioncharts` package</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install `fusiontime` and the `jquery-fusioncharts` module follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [jquery](https://jquery.com/) core library.</li>
        <li>Include the `jquery-fusioncharts` module.</li>
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the `fusiontime` file to render time-series charts.</li>
    </ol>
</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/fusioncharts@3.13.3-sr.1/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div><strong>To install `fusiontime` and the `jquery-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [jQuery](https://jquery.com/) core library.</li>
        <li>Include the `jquery-fusioncharts` module.</li>
        <li>Include the **FusionCharts** JavaScript files locally.</li>
        <li>Include the `fusiontime` file to render time-series charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;script type="text/javascript" src="path/to/local/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

## Create Your First Chart

Let's create a time-series chart using `jquery-fusioncharts` component showing **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-jquery %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-jquery/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time     | Sales   |
| -------- | ------- |
| 1/4/2011 | 16.448  |
| 1/5/2011 | 272.736 |
| 1/5/2011 | 11.784  |
| 1/5/2011 | 3.54    |
| 1/6/2011 | 19.536  |
| 1/7/2011 | 2573.82 |
| 1/7/2011 | 609.98  |

FusionTime accepts a [DataTable](/fusiontime/fusiontime-data-engine/overview#what-is-a-datatable-) as the data source. `DataTable`  is the tabular representation of data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  
* `data` - which contains the values of each row and column of the DataTable.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Now, let's learn how to prepare the schema and the data of the `DataTable`.

## Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object represents a column of the above table.

> `name` and `type` are mandatory keys for each object. If the object type is `time` then `format` is also a mandatory key.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```json
[{
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```

In the above code:

* `schema` is the variable in which the array is stored.
* Each object of a schema maps to a column of the tabular representation of the data.
* The JSON object has the following attributes:
  * name - Specify the name of the column of the tabular representation of data
  * type - Specify the type of the column.
  * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

## Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-jquery/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

```json
[
    [
        "1/4/2011",
        16.448
    ],
    [
        "1/5/2011",
        272.736
    ],
    [
        "1/5/2011",
        11.784
    ],
    [
        "1/5/2011",
        3.54
    ],
    [
        "1/6/2011",
        19.536
    ],
    [
        "1/7/2011",
        2573.82
    ],
]
```

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) and replace it with the content of the data object in your 'data.json' file.

> It is not mandatory to create a `data.json` file. You can also do the same in your HTML file.

In the above code:

* `data` is the variable in which the data array is stored.
* Each object in the data array corresponds to a row in the tabular representation of the data.
* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:
  * Time according to the format
  * Total Sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

## Render the chart

To render the chart, create a `.js` file and copy the following code:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-javascript">
const $ = require('jquery');
const TimeSeries = require('fusioncharts/fusioncharts.timeseries');
const FusionCharts = require('fusioncharts');
const jQueryFusionCharts = require('jquery-fusioncharts');

TimeSeries(FusionCharts); // Resolve TimeSeries as dependency for FusionCharts.
jQueryFusionCharts(FusionCharts); // Resolve FusionCharts as dependency for jqueryFusionCharts.

var jsonify = res => res.json();
var dataFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
var schemaFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

Promise.all([dataFetch, schemaFetch]).then(res => {
  const data = res[0];
  const schema = res[1];
  // First we are creating a DataStore
  const fusionDataStore = new FusionCharts.DataStore();
  // After that we are creating a DataTable by passing our data and schema as arguments
  const fusionTable = fusionDataStore.createDataTable(data, schema);

  $('document').ready(function() {
    $('#chart-container').insertFusionCharts({
      type: 'timeseries',
      width: '600',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        data: fusionTable,
        caption: {
          text: 'Sales Analysis'
        },
        subcaption: {
          text: 'Grocery'
        },
        yAxis: [
          {
            plot: {
              value: 'Grocery Sales Value',
              type: 'line'
            },
            format: {
              prefix: '$'
            },
            title: 'Sale Value'
          }
        ]
      }
    });
  });
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>Use a bundler `browserify`, to bundle the script. Click [here](http://browserify.org/) to know more.</strong></div>
<pre><code class="language-Bash">
$ browserify script.js -o bundle.js
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
var jsonify = res =&gt; res.json();
var dataFetch = fetch(
    'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
var schemaFetch = fetch(
    'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
    const data = res[0];
    const schema = res[1];
    // First we are creating a DataStore
    const fusionDataStore = new FusionCharts.DataStore();
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(data, schema);

    $('document').ready(function() {
        $('#chart-container').insertFusionCharts({
            type: 'timeseries',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                data: fusionTable,
                caption: {
                    text: 'Sales Analysis'
                },
                subcaption: {
                    text: 'Grocery'
                },
                yAxis: [{
                    plot: {
                        value: 'Grocery Sales Value',
                        type: 'line'
                    },
                    format: {
                        prefix: '$'
                    },
                    title: 'Sale Value'
                }]
            }
        });
    });
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
var jsonify = res =&gt; res.json();
var dataFetch = fetch(
    'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
var schemaFetch = fetch(
    'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
    const data = res[0];
    const schema = res[1];
    // First we are creating a DataStore
    const fusionDataStore = new FusionCharts.DataStore();
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(data, schema);

    $('document').ready(function() {
        $('#chart-container').insertFusionCharts({
            type: 'timeseries',
            width: '700',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                data: fusionTable,
                caption: {
                    text: 'Sales Analysis'
                },
                subcaption: {
                    text: 'Grocery'
                },
                yAxis: [{
                    plot: {
                        value: 'Grocery Sales Value',
                        type: 'line'
                    },
                    format: {
                        prefix: '$'
                    },
                    title: 'Sale Value'
                }]
            }
        });
    });
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

In the above code:

* A DataStore is created by declaring a new constant `fusionDataStore`.
* Define the chart configuration in the FusionCharts constructor:

  * Set the type as `timeseries`.

  * Set the chart container as `container` using the `renderAt` property.

  * Set the width and height (in pixels).

  * Set the name of the `DataTable` as the value of the `data` property of `dataSource`.

  * Set the data to create the chart.

  * Specify the caption of the chart using `text` attribute in the `caption` object.

Also, include the following code in your `.html` file:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
    &lt;title&gt;Jquery FusionTime&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="chart-container"&gt;FusionCharts will render here...&lt;/div&gt;
    &lt;script src="./bundle.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;jQuery FusionCharts Plugin Sample&lt;/title&gt;
    &lt;script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.3.1.min.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://unpkg.com/fusioncharts/fusioncharts.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://unpkg.com/fusioncharts@3.13.3-sr.1/fusioncharts.timeseries.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"
    &gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="chart-container"&gt;FusionCharts will render here...&lt;/div&gt;

    &lt;script src="./index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;jQuery FusionCharts Plugin Sample&lt;/title&gt;
    &lt;script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.3.1.min.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://unpkg.com/fusioncharts/fusioncharts.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://unpkg.com/fusioncharts@3.13.3-sr.1/fusioncharts.timeseries.js"
    &gt;&lt;/script&gt;
    &lt;script
      type="text/javascript"
      src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"
    &gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="chart-container"&gt;FusionCharts will render here...&lt;/div&gt;

    &lt;script src="./index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first chart in **jQuery** using **FusionTime** is ready.

