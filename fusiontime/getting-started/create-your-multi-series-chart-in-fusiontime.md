---
title: Create Chart | FusionCharts
description: This article outlines the steps to be executed for creating a multi-series chart.
heading: Create Multi-Series Chart
---

FusionTime allows you to visualize charts with multiple plots for multiple datasets. Previously, we have learned how to create a simple chart with one plot typel  

In this article, we'll create our first chart with multiple plots which will compare online sales of SuperStore in the **United States of America** and **India**. 

The chart is shown below:

{% embed_ftChartData online-sales-multi-series %}

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
}]
```
To understand the `schema.json` in details click [here]({% site.baseurl %}/fusiontime/getting-started/create-your-first-chart-in-fusiontime).

## Create `data`

To add the data, let's create a `data.json` file and copy the following code:

{% embed_ftGenre online-sales-multi-series data %}

In the above code:

* `data` is the variable in which the data array is saved.

* For each data plots in the chart, an array is created which consists of values (sub-array) for each row in the `DataTable`. The values in the sub-array represent:

    * In this example, we are showing the sales of two countries as India and USA.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

## Create the `.html` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index.html` file and copy the following code: 

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv"Sales">
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
      width: "95%",
      height: 650,
      dataSource: {
        data: fusionTable,
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in India & the US'
        },
        yAxis: [{
            "plot": {
                "value": "Sales",
                "type": "line"
            }
        }],
        "series": "Country"
      }
    }).render()
  </script>
</body>

</html>
```

The above code is similar to that of the [Create your first chart]({% site.baseurl %}/fusiontime/getting-started/create-your-first-chart-in-fusiontime). In order to add multiple data plots do the following:

* Specify the value of the plot as `Sales` using the `value` attribute within the `plot` object.
* Specify the plot type as `line` using the `type` attribute within the `plot` object.
* Specify the series as `Country` using the `series` atrribute within the `yAxis` object.

That's it! Your chart with multiple plots is ready.

Next, we will discuss on how to create a [multivariate]({% site.baseurl %}/fusiontime/getting-started/create-your-multi-variate-chart-in-fusiontime) chart.