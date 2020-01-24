---
title: Create Multivariate Chart | FusionCharts
description: This article outlines the steps to be executed for creating a multivariate chart.
heading: Create Multivariate Chart
---

In FusionTime, you can create a chart with multiple canvases showing different measures in each canvas.

{% embed_chartAnatomy ft-multivariate-chart.json %}

In this article, we will create a multivariate chart showcasing the database of the Global SuperStore. The chart contains multiple columns with measures (**Sales, Quantity, Shipping cost**) rendered on separate canvases. All the three canvases share the same [time axis](/fusiontime/fusiontime-component/time-axis) (X-axis).

The multivariate chart will look as shown below:

{% embed_ftChart online-sales-multi-variate %}

Click [here](https://jsfiddle.net/fusioncharts/yfewbpLq/) to edit the above chart.

The data for the above chart is shown in the table below:

| Order Date | Sales   | Quantity | Shipping Cost |
| ---------- | ------- | -------- | ------------- |
| 1/1/2011   | 120.366 | 3        | 9.72          |
| 1/3/2011   | 113.67  | 5        | 4.70          |
| 1/5/2011   | 55.242  | 2        | 1.80          |
| 1/6/2011   | 6.54    | 1        | 1.13          |
| 1/7/2011   | 5.48    | 2        | 0.52          |
| 1/8/2011   | 76.728  | 3        | 6.69          |

Now, let's check how to prepare the schema and the data for the `DataTable`.

## Create the `schema`

To define the schema, let's create a `schema.json` file and copy the following code:

```JSON
let schema = [{
    "name": "Order Date",
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

- `schema` is the variable in which the array is saved.

- The first object creates the first column in the `DataTable`. The first object sets the **date/time** [format](/fusiontime/api-reference/fusiontime-attributes#datetime-format) for the chart. The name of the column has been set to **Time** and the data format has been set to `%-m/%-d/%Y`.

- The next three are the columns for three measures of the chart:

  - **Sales**.

  - **Quantity**.

  - **Shipping Cost**.

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

To add the data, let's create a `data.json` file and copy the following code:

```json
let data = [
    [
        "1/11/2011",
        141.57,
        3,
        15.62
    ],
    [
        "1/24/2011",
        59.25,
        5,
        4.27
    ],
    [
        "1/26/2011",
        79.38,
        3,
        13.82
    ],
    [
        "12/30/2014",
        10.854,
        3,
        3.76
    ],
    [
        "12/30/2014",
        16.92,
        2,
        3.21
    ],
    [
        "12/30/2014",
        27.945,
        3,
        2.48
    ]
]
```

To view the full data click [here](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-multi-variate/data.json)

In the above code:

- `data` is the variable in which the data array is saved.

- For each data plot in the chart, an array is created which consists of values for each row in the `DataTable`. The values in the array represent:

  - **Order date** in the format defined.

  - **Sales** per day

  - **Quantity** of the product ordered

  - **Shipping cost** of the product

We are all set with our data to create the chart.

> By default, FusionTime applies the `average` function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](/fusiontime/getting-started/change-default-aggregation).

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

That's it! Your first multivariate chart is ready.

Now, let's see an example where out of the above four columns we will render the chart using the time column and the data of **Sales** and **Quantity**.

The chart to showcase the quantity sold will look as shown below:

{% embed_ftChart online-sales-single-series-multiple-measures %}

The code to render the data of **Sales** and **Quantity** column is shown below:

```javascript
window.charInstance = new FusionCharts({
  type: "timeseries",
  renderAt: "container",
  width: "95%",
  height: 650,
  dataSource: {
    data: fusionTable,
    chart: {},
    yAxis: ["Sales", "Quantity"],
    caption: {
      text: "Global Online Sales of a SuperStore"
    }
  }
});
```

Next, we will discuss on how to create [multiple plots](/fusiontime/getting-started/create-your-multi-series-chart-in-fusiontime) in a time-series chart.
