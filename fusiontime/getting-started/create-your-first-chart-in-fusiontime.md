---
title: Create your First Chart | FusionCharts
description: This article outlines the steps to be executed for creating your first chart.
heading: Create your First Chart
---

FusionTime, like the name implies, is a product which is used to plot time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time. 

In this article, you'll see how to install FusionTime and render your first time series chart.

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

Now that you have installed, it's time to create your first time series chart using FusionTime. To start with we will create a simple time-series chart showcasing **Online sales of a SuperStore**. The chart will look like as shown below:

{% embed_ftChart online-sales-single-series %}

The data for the above chart is shown in the table below:

Date | Sales
- | -
1/4/2011 | 16.448
1/5/2011 | 272.736
1/5/2011 | 11.784
1/5/2011 | 3.54
1/6/2011 | 19.536
1/7/2011 | 2573.82
1/7/2011 | 609.98
... | ...
... | ...
... | ...
... | ...

To create the above chart, first let's understand the basics of FusionTime in short. In order to render a chart, you need to provide data in form of a [Datatable](/fusiontime/fusiontime-data-engine/overview) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore](/fusiontime/fusiontime-data-engine/overview) and load the data into the `DataTable` in JSON or 2D array format. To create the `DataTable`, you need to provide the following:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`. 

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema maps the data to the columns of a `DataTable` along with the type for each column and the input format in case of date. You've to mandatorily specify the schema for each `DataTable`.

To define the schema, let's create a `schema.json` file and copy the following code:

> Note: It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.


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
* `schema` is the variable in which the array is saved.
* Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
    * name - Specify the name of the column.
    * type - Specify the type of the column.
    * format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a `data.json` file and copy the following code:

```
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
    ...
    ...
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
To view the full data click [here](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json)

In the above code:
* `data` is the variable in which the data array is saved.
* Each row in the data array corresponds to a row in the `DataTable` and each element in a row are represented by each object of the `schema`. The values in each row of the array represents the following:
    * Time according to the format
    * Total Sales amount 

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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
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

Now, let's create a chart showcasing **Global Online sales of a SuperStore**. The tabular data contains multiple columns with measures (**Sales, Quantity, Shipping cost**) rendered on separate canvases from which we will render the chart for using Sales column.

The data for the above chart is shown in the table below:

Order Date | Country | Sales | Quantity | Shipping Cost
- | - | - | - | -
Australia | 1/1/2011 | 120.366 | 3 | 9.72 
Australia | 1/1/2011 | 113.67 | 5 | 4.70 
Australia | 1/1/2011 | 55.242 | 2 | 1.80 
... | ... | ... | ... | ...
... | ... | ... | ... | ...
United States | 1/7/2011 | 6.54 | 1 | 1.13 
United States | 1/7/2011 | 5.48 | 2 | 0.52 
United States | 1/8/2011 | 76.728 | 3 | 6.69 
... | ... | ... | ... | ...
... | ... | ... | ... | ...
India | 1/11/2011 | 141.57 | 3 | 15.62 
... | ... | ... | ... | ...
... | ... | ... | ... | ...
... | ... | ... | ... | ...
... | ... | ... | ... | ...
India | 1/24/2011 | 59.25 | 5 | 4.27 
United States | 1/24/2011 | 5.94 | 3 | 0.95 
India | 1/26/2011 | 79.38 | 3 | 13.82 
India | 1/26/2011 | 342.51 | 7 | 13.22 
... | ... | ... | ... | ...
... | ... | ... | ... | ...

The chart to showcase the sales data will look like as shown below:

{% embed_ftChart online-sales-single-series-multiple-measures %}

**Create the Schema**

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
}, {
    "name": "Quantity",
    "type": "number"
}, {
    "name": "Shipping Cost",
    "type": "number"
}]
```

In the above code:

* `schema` is the variable in which the array is saved.

* The first object creates the first column in the `DataTable`. In the above sample **Country** is the name of the column. 

* The second object set the **date/time** [format](/fusiontime/api-reference/fusiontime-attributes#datetime-format) for the chart. The name of the column has been set to **Time** and the data format has been set to `%-m/%-d/%Y`.

* The next three are the columns for three measures of the chart:

    * **Sales**.
    * **Quantity**.
    * **Shipping Cost**. 

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

To add the data, let's create a `data.json` file and copy the following code:

```
let data = [
    [
        "India",
        "1/11/2011",
        141.57,
        3,
        15.62
    ],
    [
        "India",
        "1/24/2011",
        59.25,
        5,
        4.27
    ],
    [
        "India",
        "1/26/2011",
        79.38,
        3,
        13.82
    ],
    ...
    ...
    [
        "Australia",
        "12/30/2014",
        10.854,
        3,
        3.76
    ],
    [
        "Australia",
        "12/30/2014",
        16.92,
        2,
        3.21
    ],
    [
        "Australia",
        "12/30/2014",
        27.945,
        3,
        2.48
    ]
]
```
To view the full data click [here](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-multi-variate/data.json)

In the above code:

* `data` is the variable in which the data array is saved. 

* For each data plot in the chart, an array is created which consists of values for each row in the `DataTable`. The values in the array represent:

    * The name of the **Country** from which the product has been ordered.

    * **Order date** in the format defined.

    * **Sales** per day

    * **Quantity** of the product ordered

    * **Shipping cost** of the product

Now, let's create the `.html` file to render the above chart.

## Create `index` file

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
    width: "95%",
    height: 650,
    dataSource: {
        data: fusionTable,
            chart: {
            },
            caption: {
                text: 'Global Online Sales of a SuperStore'
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
  &lt;title&gt;FusionCharts TimeSeries&lt;/title&gt;
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
          text: 'Global Online Sales of a SuperStore'
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

Next, we will discuss on how to create a [multivariate](/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime) chart.