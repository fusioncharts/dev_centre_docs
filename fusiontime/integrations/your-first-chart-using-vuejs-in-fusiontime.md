---
title: Create a Chart in Vue | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Vue using FusionTime.
heading: Create a Chart in Vue Using FusionTime
---

## Overview

FusionTime is a product which is used to plot time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time. We have built a simple `vue-fusioncharts` component which provides bindings for FusionTime. The `vue-fusioncharts` component allows you to easily add rich and interactive charts to any **Vue** project.

In this page, we'll see how to install FusionTime and render a chart using the `vue-fusiontcharts` component.

## Installation

To render charts in **Vue** using FusionTime:

* Install **v13.3.3-sr.1** or later versions of **FusionCharts**.
* Install **v3.0.0** or later versions of `vue-fusioncharts`.

Install **FusionTime** and the `vue-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install FusionTime and the `vue-fusioncharts` component via npm follow the steps below:</strong></div>
<div class='mt-20'>1. Install the `vue-fusioncharts` component</div>
<pre><code class="language-javascript">
$ npm install vue-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install `fusioncharts` package</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install FusionTime and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</div>
<div class='mt-20'>4. Include the FusionTime file to render the time-series charts</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including vue  --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue@2.3.3"&gt;&lt;/script>
    &lt;!-- Step 2 - Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 4 - Including the FusionTime File --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div class='mt-30'><strong>To install FusionTime and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</div>
<div class='mt-20'>4. Include the FusionTime file to render time-series charts.</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including vue  --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the FusionTime File --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

## Usage

The two methods to add `vue-fusioncharts` component to your project are:
* Register globally as a plugin
* Register locally in your component

### Registering globally as a plugin

* Import **vue**, `vue-fusioncharts`, and **FusionCharts** in main app file.

```javascript
import Vue from `vue`;
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries;
```

* Register it as a plugin in your **Vue** object

```javascript
Vue.use(VueFusionCharts, FusionCharts, TimeSeries);
```

> The above method to add the component to your project is recommended only if you want to avail the `vue-fusioncharts` component from anywhere in the application.

### Registering locally in your component

* Import the chart component from `vue-fusioncharts`** **component package to your component file and use **Vue.component** to register it locally.

```javascript
import Vue from `vue`;
import VueFusionChartsComponent from 'vue-fusioncharts/component';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries;

const vueFusionCharts = VueFusionChartsComponent(FusionCharts, TimeSeries);

Vue.component('fusioncharts', vueFusionCharts);
```

> The above method to add the component in your project is recommended when you want to restrict the availability of `vue-fusioncharts` component to a specific file or folder.

## Create your First Chart

Let's create a timeseries charts using `vue-fusioncharts` component showing **Sales Analysis of a Grocery shop**.

The chart will look as shown below:

{% embed_ftChart integrations-vuejs %}

The data for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time      | Sales |
| --------- | ----- |
| 01-Feb-11 | 8866  |
| 02-Feb-11 | 2174  |
| 03-Feb-11 | 2084  |
| 04-Feb-11 | 1503  |
| 05-Feb-11 | 4928  |
| 06-Feb-11 | 4667  |
| 07-Feb-11 | 1064  |

In order to render a chart, you need to provide data in form of a [Datatable](/fusiontime/fusiontime-data-engine/overview#what-is-a-datatable-) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore](/fusiontime/fusiontime-data-engine/overview#what-is-datastore-) and load the data into the `DataTable` in JSON or 2D array format. To create the `DataTable`, you need to provide the following:

* The `schema` which defines the properties of the columns.  
* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`. 

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema maps the data to the columns of a `DataTable` along with the type for each column and the input format in case of date. You've to mandatorily specify the schema for each `DataTable`.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```json
[{
  "name": "Time",
  "type": "date",
  "format": "%d-%b-%y"
}, {
  "name": "Grocery Sales Value",
  "type": "number"
}]
```

In the above code:

* `schema` is the variable in which the array is saved.
* Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
  * name - Specify the name of the column.
  * type - Specify the type of the column.
  * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-vuejs/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

> It is not mandatory to create a `data.json` file. You can create the same in HTML file.

```json
var data = [
    [
        "01-Feb-11",
        8866
    ],
    [
        "02-Feb-11",
        2174
    ],
    [
        "03-Feb-11",
        2084
    ],
    [
        "04-Feb-11",
        1503
    ],
    [
        "05-Feb-11",
        4928
    ],
    ...
    ...
    ...
]
```

To view the full data click [here](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-vuejs/data.json)

In the above code:

* `data` is the variable in which the data array is saved.
* Each object in the data array corresponds to a object in the `DataTable`.
* Each element in a object are represented by each object of the `schema`. The values in each object of the array represent the following:
  * Time according to the format
  * Total Sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](/fusiontime/getting-started/change-default-aggregation).

Now, let's create the `.js` and `.html` file to render the above chart.

### Create `JS` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create a `JS` file and copy the following code:

```javascript
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

// register VueFusionCharts
Vue.use(VueFusionCharts, FusionCharts, TimeSeries);

const jsonify = res => res.json();
const dataFetch = fetch(
'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
const schemaFetch = fetch(
'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

const chart = new Vue({
  el: '#app',
  data: {
    width: '500',
    height: '300',
    type: 'timeseries',
    dataFormat: 'json',
    dataSource: {
      data: null,
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
  },
  mounted: function() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  }
});
```

In the above code:

* Include Vue and `vue-fusioncharts` component.

* Include the fusioncharts library.

* Include the TimeSeries as chart type.

* Include `data.json` and `schema.json` files.

* Define the chart configuration in the FusionCharts constructor:

    * Set the type as `timeseries`.

    * Set the chart container as `container` using the `renderAt` property.

    * Set the width and height (in pixels).

    * Set the name of the `DataTable` as the value of the `data` property of `dataSource`.

    * Set the data to create the chart.

    * Specify the caption of the chart using `text` attribute in the `caption` object.

* Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.

* Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the `DataTable`.

The HTML template of the above example is:

```html
<div id="app">
  <fusioncharts
    :width="width"
    :height="height"
    :type="type"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
    FusionCharts will render here...
  </fusioncharts>
</div>
```