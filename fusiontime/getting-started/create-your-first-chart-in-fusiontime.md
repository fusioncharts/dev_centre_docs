---
title: Create your First Chart | FusionCharts
description: This article outlines the steps to be executed for creating your first chart.
heading: Create your First Chart
---

FusionTime, like the name implies, is a product which is used to plot discrete time-series data. FusionTime helps to evaluate patterns and trends in time-series data over a period of time. 

In this article, we'll create a simple time-series line chart showcasing online sales of SuperStore in the US.

The chart is shown below:

{% embed_ftChartData online-sales-single-series %}

FusionTime uses columns and rows of the in-browser `DataTable` to feed data to the chart. This allows you to apply different data operations on the `DataTable` to transform the data as per your requirement. To create a DataTable you need to provide:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`. 

## Create the `schema`

The schema contains an array which has multiple objects created in it. Each object creates a column in the `DataTable`. The schema helps DataTable understand the columns in your data, the data type for each column and input format (in case of date). You've to mandatorily specify the schema for each DataTable for FusionTime to render it.

To define the schema, let's create a `schema.js` file and copy the following code:

Note: It is not mandatory to create the schema in a different .js file. You can also define the schema within the index.html file.

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

* The first object creates the first column in the `DataTable`. In the above sample **Country** is the name of the column.

* The second object sets the **date/time** format for the chart. The name of the column has been set to **Time** and the date format has been set to `%-m/%-d/%Y`.

* The last object creates the third column named **Sales, **the values of which will map to the data plots.

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a data.js file and copy the following code:

{% embed_ftGenre online-sales-single-series data %}

In the above code:

* `data` is the variable in which the data array is saved.

* Each element of the data array has values specific to each row of the `DataTable`. The values in the array represent:

    * The name of the **Country**.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

## Create `index.html` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index.html` file and copy the following code: 

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Create your First Chart</title>
  <style type="text/css">
  #container {
    width: 700px;
  }
  </style>
</head>

<body>
  <div id="container"></div>
  <script src="path/to/local/fusioncharts.js"></script>
  <script src="path/to/local/data.js"></script>
  <script src="path/to/local/schema.js"></script>
  <script>
    let fusionDataStore = new FusionCharts.DataStore();
    let fusionTable = fusionDataStore.createDataTable(data, schema);

    new FusionCharts({
      type: 'timeseries',
      renderAt: 'container',
      width: "90%",
      height: 650,
      dataSource: {
        data: fusionTable,
        chart: {
        },
        "yAxis": [{
            "plot": {
                "title": "Sales"
            }
        }],
        caption: {
          text: 'Online Sales of a SuperStore in the US'
        }
      }
    }).render()
  </script>
</body>

</html>
```

In the above code:

* Include `fusioncharts.js` file.

* Include `data.js` and `schema.js` files.

* Pass the `schema` and `data` to the Data Store which sets the `DataTable` used to render the chart.

* Fetch the `DataTable` from the data store using the `FusionCharts.DataStore()` method.

* Define the chart configuration in the JSON:

    * Set the type as `timeseries`.

    * Set the chart container as `container`.

    * Set the width and height (in pixels).

    * Set the name of the `DataTable` as the value of the `dataSource` property.

That's it! Your first chart using FusionTime is ready.