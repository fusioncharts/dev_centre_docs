---
title: Create a Chart in Svelte | FusionTime
description: This article outlines the steps to be executed for creating your first chart in SvelteJS using FusionTime.
heading: Create a Chart in Svelte
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactive features, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more. These features enhance the experience of exploring and understanding time-series data

We have built a simple `svelte-fusioncharts` component, which provides bindings for **FusionTime**. The `svelte-fusioncharts` component allows you to easily add interactive time-series charts in your **Svelte** application or project without any hassle.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `svelte-fusioncharts` component.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the FusionCharts package to get access to FusionTime and other chart types of the FusionCharts Suite. To install follow the steps below:

Install `svelte-fusioncharts` and `fusioncharts` libraries with the following command:

```json
npm install svelte-fusioncharts fusioncharts --save
```

That completes the installation of FusionCharts and the `svelte-fusioncharts` directive.

## Create Your First Chart

Let's create a time-series chart using `svelte-fusioncharts` component showing **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-react %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

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

### Create the `schema`

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

### Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

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

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-react/data.json) and replace it with the content of the data object in your 'data.json' file.

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

Finally, get ready to render your chart. In the `.svelte` file, import the fusioncharts dependencies and include the consolidated code shown below.

```js
<script>
  import FusionCharts from 'fusioncharts';
  import Timeseries from 'fusioncharts/fusioncharts.timeseries';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
 
  fcRoot(FusionCharts, Timeseries);
 
  let promise,
    jsonify = res => res.json(),
    dataFetch = fetch(
      "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
    ).then(jsonify),
    schemaFetch = fetch(
      "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
    ).then(jsonify);
 
  promise = Promise.all([dataFetch, schemaFetch]);
 
  const getChartConfig = ([data, schema]) => {
    const fusionDataStore = new FusionCharts.DataStore(),
      fusionTable = fusionDataStore.createDataTable(data, schema);
 
    return {
      type: "timeseries",
      width: "100%",
      height: 450,
      renderAt: "chart-container",
      dataSource: {
        data: fusionTable,
        caption: {text: "Sales Analysis"},
        subcaption: {text: "Grocery"},
        yAxis: [
          {
            plot: {
              value: "Grocery Sales Value",
              type: "line"
            },
            format: {
              prefix: "$"
            },
            title: "Sale Value"
          }
        ]
      }
    };
  };
</script>
//Include the chart in the container
<div id="chart-container" >
	{#await promise}
		<p>Fetching data and schema...</p>
	{:then value}
	<SvelteFC
		{...getChartConfig(value)}
	/>	 
	{:catch error}
	    <p>Something went wrong: {error.message}</p>
	{/await}
</div>
 ```
In the above code:

* Include the `fusioncharts` library in the `.svelte` file.
* Include `data.json` and `schema.json` files.
* Define the chart configuration in the FusionCharts constructor:
    * Set the type as `timeseries`.
    * Set the chart container as `container` using the `renderAt` property.
    * Set the width and height (in pixels).
    * Set the name of the `DataTable` as the value of the `data` property of `dataSource`.
    * Set the data to create the chart.
    * Specify the caption of the chart using `text` attribute in `caption` object.
* Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.
* Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the `DataTable`.

You should be able to see the chart. If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

That's it! Your first chart in `SvelteJS` using `FusionTime` is ready.