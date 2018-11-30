---
title: Create Multivariate Chart | FusionCharts
description: This article outlines the steps to be executed for creating a multivariate chart.
heading: Create Multivariate Chart
---

FusionTime lets you analyze variations among different variable by stacking a number of linked charts (referred to as multivariate charts) vertically, one after another. The charts share a common X-axis, while the Y-axis is different in each one. 

In this article, we'll create a multivariate chart showcasing the database of the Global SuperStore. The chart contains multiple values (**Sales, Quantity, Shipping cost**) rendered on separate canvases. All the three canvas share the same time axis (x-axis).

The multivariate chart is shown below:

{% embed_ftChartData online-sales-multi-variate %}

FusionTime uses columns and rows as `DataTable` to feed data to the chart. This allows you to apply different data operations on the `DataTable` to transform your data as per your requirement. To create a `DataTable` you need to provide:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column as the data.

Now, let's check how to prepare the schema and the data for the `DataTable`.

## Create the `schema`

The schema contains an array which has multiple objects created in it. Each object creates a column in the `DataTable`. The schema helps `DataTable` understand the columns in your data, the data type for each column and input format (in case of date). You've to mandatorily specify the schema for each DataTable for FusionTime to render it.

To define the schema, let's create a `schema.js` file and copy the following code:

```JSON
{
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

* The second object set the **date/time** format for the chart. The name of the column has been set to **Time** and the data format has been set to `%-m/%-d/%Y`.

* The next three are the three measures of the chart:

    * **Sales**.

    * **Quantity**.

    * **Shipping Cost**. 

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a data.js file and copy the following code:

{% embed_ftData online-sales-multi-variate %}

In the above code:

* `data` is the variable in which the data array is saved. 

* For each data plot in the chart, an array is created which consists of values for each row in the `DataTable`. The values in the array represent:

    * The name of the **Country** from which the product has been ordered.

    * **Order date** in the format defined.

    * **Sales** per day

    * **Quantity** of the product ordered

    * **Shipping cost** of the product

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
  <title>FusionCharts TimeSeries</title>
</head>

<body>
  <div id="container"></div>
  <script src="./build/fusioncharts.js"></script>
  <script src="./data.js"></script>
  <script src="./schema.js"></script>
  <script>
    const dataStore = new FusionCharts.DataStore(data, schema);

    new FusionCharts({
      type: 'timeseries',
      renderAt: 'container',
      width: "95%",
      height: 650,
      dataSource: {
        data: dataStore.getDataTable(),
        chart: {
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

* When `schema.js` and `data.js` is created, using both the files FusionTime creates a `DataTable` which is stored in DataStore. 

* Define the chart configuration in the JSON.

    * Set the type as `timeseries`.

    * Set the chart container as `container`.

    * Set the width and height (in pixels).

    * Embed the `DataTable` as the value of the `dataSource`.

That's it! Your first multivariate chart is ready.

