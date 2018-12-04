---
title: Create Multivariate Chart | FusionCharts
description: This article outlines the steps to be executed for creating a multivariate chart.
heading: Create Multivariate Chart
---

FusionTime lets you analyze variations among different variables co related by stacking a number of linked charts (referred to as multivariate charts) vertically, one after another. The charts share a common time axis, while the Y-axis is different in each one. 

In this article, we'll create a multivariate chart showcasing the database of the Global SuperStore. The chart contains multiple values (**Sales, Quantity, Shipping cost**) rendered on separate canvases. All the three canvases share the same time axis (x-axis).

The multivariate chart is shown below:

{% embed_ftChart online-sales-multi-variate %}

Now, let's check how to prepare the schema and the data for the `DataTable`.

## Create the `schema`

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

* The second object set the **date/time** format for the chart. The name of the column has been set to **Time** and the data format has been set to `%-m/%-d/%Y`.

* The next three are the three measures of the chart:

    * **Sales**.

    * **Quantity**.

    * **Shipping Cost**. 

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create `data`

To add the data, let's create a `data.json` file and copy the following code:

{% embed_ftGenre online-sales-multi-variate data %}

In the above code:

* `data` is the variable in which the data array is saved. 

* For each data plot in the chart, an array is created which consists of values for each row in the `DataTable`. The values in the array represent:

    * The name of the **Country** from which the product has been ordered.

    * **Order date** in the format defined.

    * **Sales** per day

    * **Quantity** of the product ordered

    * **Shipping cost** of the product

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

## Create `.html` file

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
  </script>
</body>

</html>
```

That's it! Your first multivariate chart is ready.