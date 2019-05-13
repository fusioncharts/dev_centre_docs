---
title: Create your First Chart | FusionCharts
description: This article outlines the steps to be executed for creating your first chart.
heading: Create Your First Chart
---

FusionTime, like the name implies, is a product which is used to plot time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time.

In this article, you'll see how to install FusionTime and render your first time-series chart.

## Installation

Install **FusionTime** using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install `FusionTime` via npm run the command below:</strong></div>
<pre><code class="language-PowerShell">
    $ npm install fusioncharts
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install `FusionTime` follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusiontime).</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of **FusionTime**.

## Create a chart

Now that you have installed FusionTime, it's time to create your first time-series chart. To start with we will create a simple time-series chart showcasing **Online sales of a SuperStore**. The chart will look as shown below:

{% embed_ftChart online-sales-single-series %}

Click [here](https://jsfiddle.net/fusioncharts/Lut0752a/) to edit the above chart.

The data for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time     | Sales   |
| -------- | ------- |
| 1/4/2011 | 16.448  |
| 1/5/2011 | 272.736 |
| 1/5/2011 | 11.784  |
| 1/5/2011 | 3.54    |
| 1/6/2011 | 19.536  |
| 1/7/2011 | 2573.82 |
| 1/7/2011 | 609.98  |

To create the above chart, first, let's understand the basics of FusionTime. In order to render a chart, you need to provide data in form of a [Datatable](/fusiontime/fusiontime-data-engine/overview) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore](/fusiontime/fusiontime-data-engine/overview) and load the data into the `DataTable` in JSON or 2D array format. To create the `DataTable`, you need to provide the following:

- The `schema` defines the properties of the columns.
- The `data`, which contains the actual values for each row and column of the DataTable.

Next, let's learn how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema maps the data to the columns of a `DataTable` along with the type for each column and the input format in case of date. You have to mandatorily specify the schema for each `DataTable`.

To define the schema, let's create a **schema.json** file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```JSON
let schema = [{
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```

In the above code:

- `schema` is the variable in which the array is saved.
- Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
  - name - Specify the name of the column.
  - type - Specify the type of the column.
  - format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in either JSON or 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a `data.json` file and copy the following code:

```json
let data = [
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
        "12/31/2014",
        20.72
    ],
    [
        "12/31/2014",
        13.904
    ],
    [
        "12/31/2014",
        3.024
    ]
]
```

Create a new `data.json` file, and copy the complete data from [here](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series/data.json).

> It is not mandatory to create a `data.json` file. You could also do the same in your HTML file.

In the above code:

- `data` is the variable in which the data array is stored.
- Each row in the data array corresponds to a row in the `DataTable` and each element in a row are represented by each object of the `schema`. The values in each row of the array represent the following:
  - Time according to the format
  - Total Sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](/fusiontime/getting-started/change-default-aggregation).

Now, let's create the `.html` file to render the above chart.

### Create `index` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index` file and copy the following code:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab npm-tab active'>
<pre><code class="language-javascript">
import FusionCharts from 'fusioncharts/core';
import TimeSeries from 'fusioncharts/viz/timeseries';
import DataStore from 'fusioncharts/datastore';

import data from './data';
import schema from './schema';

FusionCharts.addDep(TimeSeries);

let fusionDataStore = new DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);

window.charInstance = new FusionCharts({
type: 'timeseries',
renderAt: 'container',
width: "90%",
height: 650,
dataSource: {
data: fusionTable,
caption: {
text: 'Online Sales of a SuperStore'
}
}
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-javascript">
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
            caption: {
                text: 'Online Sales of a SuperStore in the US'
            }
        }
    }).render()

&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

In the above code:

- Include `fusioncharts.js` file.

- Include `data.json` and `schema.json` files.

- Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.

- Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the the `DataTable`.

- Define the chart configuration in the FusionCharts constructor:

  - Set the type as `timeseries`.

  - Set the chart container as `container` using the `renderAt` property.

  - Set the width and height (in pixels).

  - Set the name of the `DataTable` as the value of the `data` property of `dataSource`.

  - Set the data to create the chart.

  - Specify the caption of the chart using `text` attribute in `caption` object.

That's it! Your first chart using FusionTime is ready.

Next, we will discuss on how to create a [multivariate](/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime) chart.
