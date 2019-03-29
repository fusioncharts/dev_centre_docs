---
title: Create a Chart in Ember | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Ember using FusionTime.
heading: Create a chart in Ember
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactivity, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more features, which enhance your experience of exploring and understanding time-series data.

We have built a simple `ember-fusioncharts` component which provides bindings for FusionTime. The `ember-fusioncharts` component allows you to easily add interactive time-series charts to any Ember JS project.

In this page, we'll see how to install FusionTime and render an interactive time-series chart using the `ember-fusioncharts` component.

### Installation

Install `FusionTime` and the `ember-fusioncharts` component using the following method:

You can only build time-series charts if you have installed `FusionCharts v13.3.3-sr.1` or later, as well as `ember-fusioncharts v2.2.0` or later.

1. Install the `ember-fusioncharts` module

```bash
$ npm install ember-fusioncharts --save
```

2. Install the `fusioncharts` library

```bash
$ npm install fusioncharts --save
```

3. Import `fusioncharts` and `fusiontime` library to your `ember-cli-build.js` build file:

```javascript
/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Import fusioncharts library
  app.import('node_modules/fusioncharts/fusioncharts.js');
  app.import('node_modules/fusioncharts/fusioncharts.timeseries.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
```

## Create Your First Chart

Let's create a time-series chart using `ember-fusioncharts` component showing **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-ember %}

The data for the above chart is too big to be displayed here. The table below shows the sample data from the above chart:

| Time      | Sales |
| --------- | ----- |
| 01-Feb-11 | 8866  |
| 02-Feb-11 | 2174  |
| 03-Feb-11 | 2084  |
| 04-Feb-11 | 1503  |
| 05-Feb-11 | 4928  |
| 06-Feb-11 | 4667  |
| 07-Feb-11 | 1064  |

FusionCharts accepts a DataTable as the data source. `DataTable` is a part of `DataStore`, which is a tabular representation of the data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  

* `data` - values of each row and column of the `DataTable`.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only 1 `DataStore`.

Next, let's learn how to prepare the schema and the data of the `DataTable`.

## Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`.

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

    * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more about date formats, click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

## Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

Data for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

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

Create a new `data.json` file, and copy the above code there. Next, copy the entire and replace it with the content of the data object in your 'data.json' file.

> It is not mandatory to create a `data.json` file. You could also do the same in your HTML file.

In the above code:

* `data` is the variable in which the data array is stored.

* Each object in the data array corresponds to a row in the tabular representation of the data.

* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:

  * Time according to the format

  * Total Sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

## Render the chart

To render a chart using Ember JS, create a component and use that component to render a time-series chart. For our example, we will call this component `timeseries-viewer`.

Run the command given below on your project, to generate a new component:

```bash
$ ember g component timeseries-viewer
```

Include the code given below in your `timeseries-viewer.js` file.

```javascript
import Component from '@ember/component';

const dataSource = {
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
};

const jsonify = res => res.json();
// This is the remote url to fetch the data.
const dataFetch = fetch( 'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
const schemaFetch = fetch(
'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

export default Component.extend({
  title: 'TimeSeries Example',
  width: 600,
  height: 400,
  type: 'timeseries',
  dataFormat: null,
  dataSource: null,

  init() {
    this._super(...arguments);
    this.set('dataFormat', 'json');
    this.createDataTable();
  },

  createDataTable() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that, we are creating a DataTable by passing our data and schema as arguments
      const fusionDataTable = fusionDataStore.createDataTable(data, schema);
      // After that, we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      dataSource.data = fusionDataTable;
      this.set('dataSource', dataSource);
    });
  }
});
```

In the above code:

* The `Component` class has been imported from `'@ember/component'`.

* A data source has been created by declaring a constant `dataSource`.

* The JSON files containing the data and the schema have been fetched from an external location.

* A DataTable has been created by passing the data and schema as arguments to `fusionDataStore`.

* The time-series data source has been mutated by attaching the DataTable into its `data` property.

Then, use the `fusioncharts-xt` component in your `timeseries-viewer.hbs` template to show your charts. Refer to the code given below:

```javascript
{{fusioncharts-xt
width=width
height=height
type=type
dataFormat=dataFormat
dataSource=dataSource}}
```

Finally, use the `timeseries-viewer` component in your `application.hbs` template. Refer to the code given below:

```javascript
{{timeseries-viewer}}
{{outlet}}
```