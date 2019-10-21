---
title: Create a Chart in Angular | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Angular using FusionTime.
heading: Create a Chart in Angular
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactivity, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more. These features enhance the experience of exploring and understanding time-series data.

We have built a simple `angular-fusioncharts` component which provides bindings for **FusionTime**. The `angular-fusioncharts` directive allows you to easily add interactive time-series charts to any **Angular** project.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `angular-fusioncharts` directive.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the FusionCharts package to get access to FusionTime and other chart types of the FusionCharts Suite. To install, follow the steps below:

**Step 1: Install angular-fusioncharts**

```bash
$ npm install angular-fusioncharts --save
```

**Step 2: Install fusioncharts core library**

```bash
$ npm install fusioncharts --save
```

That completes the installation of **FusionTime** and the `angular-fusioncharts` component.

## Create Your First Chart

Let's create a time-series chart using `angular-fusioncharts` directive showing **Daily sales of a grocery store**.

The chart is shown below:

{% embed_ftChart integrations-angular %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angular/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

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
* `data` - which contains the values of each row and column of the DataTable

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Next, let's learn how to prepare the schema and the data of the `DataTable`.

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

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angular/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

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

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angular/data.json) and replace it with the content of the data object in your 'data.json' file.

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

## Render the chart

To render the chart follow the steps below:

**Step 1:** In `app.module.ts` include the necessary files and add the dependency.

* Import `angular-fusioncharts` in the root `@NgModule`.
* Import FusionCharts library in the root `@NgModule`.
* Import FusionTime in the root `@NgModule`.
* Pass the `fusioncharts` library and chart modules.

```javascript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; // Import timeseries
// Pass the fusioncharts library and timeseries modules
FusionChartsModule.fcRoot(FusionCharts, TimeSeries);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Specify FusionChartsModule as import
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Step 2:** Add data to the angular `app.component.ts`

Set the JSON data within the `AppComponent` class as shown below:

```javascript
// In app.component.ts
import { Component } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
const dataUrl =
'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json';
const schemaUrl =
'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json';
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: any;
  type: string;
  width: string;
  height: string;
  constructor() {
    this.type = 'timeseries';
    this.width = '700';
    this.height = '400';
    this.dataSource = {
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
    this.fetchData();
  }
  fetchData() {
    let jsonify = res => res.json();
    let dataFetch = fetch(dataUrl).then(jsonify);
    let schemaFetch = fetch(schemaUrl).then(jsonify);
    Promise.all([dataFetch, schemaFetch]).then(res => {
      let data = res[0];
      let schema = res[1];
      let fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      ); // Instance of DataTable to be passed as data in dataSource
      this.dataSource.data = fusionTable;
    });
  }
}
```

**Step 3:** Now use the `fusioncharts` component in `app.component.html`.

Create the chart container and set the following:

* Chart `width` and `height`.
* The data source.

```html
<div>
  <fusioncharts
    [type]="type"
    [width]="width"
    [height]="height"
    [dataSource]="dataSource"
  ></fusioncharts>
</div>
```

That's it! Your first chart in **Angular** using **FusionTime** is ready.