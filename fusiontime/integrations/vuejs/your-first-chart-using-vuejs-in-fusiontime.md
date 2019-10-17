---
title: Create a Chart in Vue | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Vue using FusionTime.
heading: Create a Chart in Vue
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactive features, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more. These features enhance the experience of exploring and understanding time-series data.

We have built a simple `vue-fusioncharts` component, which provides bindings for **FusionTime**. The `vue-fusioncharts` directive allows you to easily add interactive time-series charts to any **Vue** project.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `vue-fusioncharts` directive.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the FusionCharts package to get access to FusionTime and other chart types of the FusionCharts Suite. To install follow the steps below:

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
<div class='mt-20'>1. Include [Vue](https://vuejs.org/) core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
<div class='mt-20'>4. Include the FusionTime file to render time-series charts</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including vue  --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue@2.3.3"&gt;&lt;/script>
    &lt;!-- Step 2 - Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 4 - Including the FusionTime File --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div class='mt-30'><strong>To install FusionTime and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
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

* Import the chart component from `vue-fusioncharts` component package to your component file and use **Vue.component** to register it locally.

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

## Create Your First Chart

Let's create a timeseries charts using `vue-fusioncharts` component showing **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-vuejs %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-vuejs/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time      | Sales |
| --------- | ----- |
| 01-Feb-11 | 8866  |
| 02-Feb-11 | 2174  |
| 03-Feb-11 | 2084  |
| 04-Feb-11 | 1503  |
| 05-Feb-11 | 4928  |
| 06-Feb-11 | 4667  |
| 07-Feb-11 | 1064  |

FusionTime accepts a [DataTable](/fusiontime/fusiontime-data-engine/overview#what-is-a-datatable-) as the data source. `DataTable`  is the tabular representation of data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  
* `data` - which contains the values of each row and column of the DataTable.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Now, let's learn how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object represents a column of the above table.

> `name` and `type` are mandatory keys for each object. If the object type is `time` then `format` is also a mandatory key.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```json
Let schema = [{
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

### Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-vuejs/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

```json
var data = [
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

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-vuejs/data.json) and replace it with the content of the data object in your 'data.json' file.

> It is not mandatory to create a `data.json` file. You can also do the same in your HTML file.

In the above code:

* `data` is the variable in which the data array is stored.
* Each object in the data array corresponds to a row in the tabular representation of the data.
* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:
  * Time according to the format
  * Total sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

### Render the chart

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
    width: '700',
    height: '400',
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
    // In this Promise we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema.
    Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // After that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.dataSource.data = fusionTable;
    });
  }
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-html">
&lt;html lang="en"&gt;
  &lt;head&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/fusioncharts@3.13.3-sr.1/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/fusioncharts@3.13.3-sr.1/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;!-- If you want to use vue-fusioncharts as a plugin --&gt;
    &lt;script src="https://unpkg.com/vue-fusioncharts@3.0.1/dist/vue-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- If you want to use vue-fusioncharts as a component --&gt;
    &lt;!-- &lt;script src="https://unpkg.com/vue-fusioncharts@3.0.0/component/index.js"&gt;&lt;/script&gt; --&gt;
    &lt;script&gt;
      // Register vue-fusioncharts as a plugin if you want to use it globally
      Vue.use(VueFusionCharts, FusionCharts);

      // Links to fetch data and schema for TimeSeries chart
      const jsonify = res =&gt; res.json();
      var dataFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
      ).then(jsonify);
      var schemaFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
      ).then(jsonify);

      // Create vue-fusioncharts component
      // let vFC = VueFusionChartsComponent(FusionCharts);

      var app = new Vue({
        el: '#app',
        // Register the vue-fusioncharts component you created earlier if you want to use it locally
        // components: { fusioncharts: vFC },
        data: {
          width: '700',
          height: '400',
          type: 'timeseries',
          dataFormat: 'json',
          displayChart: false,
          dataSource: {
            // Initially data is set as null
            data: null,
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
        },
        mounted: function() {
          // In this Promise we will create our DataStore and using that we will create a custom DataTable which takes two
          // parameters, one is data another is schema.
          Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
            const data = res[0];
            const schema = res[1];
            // First we are creating a DataStore
            const fusionDataStore = new FusionCharts.DataStore();
            // After that we are creating a DataTable by passing our data and schema as arguments
            const fusionTable = fusionDataStore.createDataTable(data, schema);
            // After that we simply mutated our timeseries datasource by attaching the above
            // DataTable into its data property.
            this.dataSource.data = fusionTable;
          });
        }
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-html">
&lt;html lang="en"&gt;
  &lt;head&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script type="text/javascript" src="path/to/local/vue.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;!-- If you want to use vue-fusioncharts as a plugin --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- If you want to use vue-fusioncharts as a component --&gt;
    &lt;!-- &lt;script src="https://unpkg.com/vue-fusioncharts@3.0.0/component/index.js"&gt;&lt;/script&gt; --&gt;
    &lt;script&gt;
      // Register vue-fusioncharts as a plugin if you want to use it globally
      Vue.use(VueFusionCharts, FusionCharts);

      // Links to fetch data and schema for TimeSeries chart
      const jsonify = res =&gt; res.json();
      var dataFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
      ).then(jsonify);
      var schemaFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
      ).then(jsonify);

      // Create vue-fusioncharts component
      // let vFC = VueFusionChartsComponent(FusionCharts);

      var app = new Vue({
        el: '#app',
        // Register the vue-fusioncharts component you created earlier if you want to use it locally
        // components: { fusioncharts: vFC },
        data: {
          width: '700',
          height: '400',
          type: 'timeseries',
          dataFormat: 'json',
          displayChart: false,
          dataSource: {
            // Initially data is set as null
            data: null,
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
        },
        mounted: function() {
          // In this Promise we will create our DataStore and using that we will create a custom DataTable which takes two
          // parameters, one is data another is schema.
          Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
            const data = res[0];
            const schema = res[1];
            // First we are creating a DataStore
            const fusionDataStore = new FusionCharts.DataStore();
            // After that we are creating a DataTable by passing our data and schema as arguments
            const fusionTable = fusionDataStore.createDataTable(data, schema);
            // After that we simply mutated our timeseries datasource by attaching the above
            // DataTable into its data property.
            this.dataSource.data = fusionTable;
          });
        }
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

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