---
title: Create Multi-Series Chart | FusionCharts
description: This article outlines the steps to be executed for creating a multi-series chart.
heading: Create Multi-Series Chart
---

FusionTime includes multi-series charts that allow you to plot data for multiple datasets. 

In this article, we'll create our first multi-series chart which will compare online sales of SuperStore in the United States of America and India. 

The multi-series chart is shown below:

<Live chart>

FusionTime uses columns and rows as `DataTable` to feed data to the chart. This allows you to apply different data operations on the `DataTable` to transform your data as per your requirement. To create a `DataTable` you need to provide:

* The `schema` which defines the properties of the columns.  

* The `actual` values for each row and column as the data.

Now, let's check how to prepare the schema and the data for the `DataTable`.

## Create the schema

The schema contains an array which has multiple objects created in it. Each object creates a column in the `DataTable`. The schema helps DataTable understand the columns in your data, the data type for each column and input format (in case of date). You've to mandatorily specify the schema for each DataTable for FusionTime to render it.

To define the schema, let's create a `schema.js` file and copy the following code:

<Code Snippet>

In the above code:

* `schema` is the variable in which the array is saved.

* The first object creates the first column in the `DataTable`. In the above sample **Country** is the name of the column.

* The second object sets the **date/time** format for the chart. The name of the column has been set to **Time** and the date format has been set to `%-m/%-d/%Y`.

* The last object creates the third column named **Sales** with the values of the data plots.

Now that we have the columns ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

## Create data

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a data.js file and copy the following code:

<Code Snippet>

In the above code:

* `data` is the variable in which the data array is saved.

* For each data plots in the chart, an array is created which consists of values for each row in the `DataTable`. The values in the array represent:

    * In this example, we are showing the sales of two countries as India and USA.

    * **Time** according to the format.

    * **Value** of the data plots, i.e. sales per date.

We are all set with our data to create the chart. Now, let's create the `.html` file to render the above chart.

## Create index.html file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create an `index.html` file and copy the following code: 

<Code Snippet>

In the above code:

* Include `fusioncharts.js` file.

* Include `data.js` and `schema.js` files.

* When `schema.js` and `data.js` is created, using both the files FusionTime creates a dataTable which is stored in DataStore. 

* Define the chart configuration in the JSON.

    * Set the type as `timeseries`.

    * Set the chart container as `container`.

    * Set the width and height (in pixels).

    * Embed the `DataTable` as the value of the `dataSource`.

    * In the `dataSource`, specify the `DataTable` using which the chart is rendered.

    * Specify the series which implies the datasets rendered in the chart.

That's it! Your first multi-series chart is ready.

