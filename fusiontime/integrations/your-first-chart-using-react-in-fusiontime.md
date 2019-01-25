---
title: Create a Chart in React | FusionTime
description: This article outlines the steps to be executed for creating your first chart in React using FusionTime.
heading: Create a Chart in React Using FusionTime
---

## Overview

FusionTime is a JavaScript library that helps you visualize and explore time-series data interactively. It supports data with atomicity ranging from milliseconds to years. We have build a simple `react-fusioncharts` component which provides bindings for FusionTime. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project.

In this page, we'll see how to install FusionTime and render a chart using the `react-fusiontcharts` component.

## Installation

To render charts in **React** using FusionTime:

* Install **v13.3.3-sr.1** or later versions of **FusionCharts**.
* Install **v3.0.0** or later versions of `react-fusioncharts`.

Install **FusionTime** and the `react-fusioncharts` component using any of the following methods:

CODE

## Create your First Chart

Now that you have installed, it's time to create your first time series chart using **FusionTime**. To start with we will create a simple time-series chart showcasing **Online sales of a SuperStore**. The chart will look like as shown below:

CHART

The data for the above chart is shown in the table below:

TABLE

To create the above chart, first let's understand the basics of FusionTime in short. In order to render a chart, you need to provide data in form of a [Datatable](/fusiontime/fusiontime-data-engine/overview) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore](/fusiontime/fusiontime-data-engine/overview) and load the data into the `DataTable` in JSON or 2D array format. To create the `DataTable`, you need to provide the following:

* The `schema` which defines the properties of the columns.  
* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema maps the data to the columns of a `DataTable` along with the type for each column and the input format in case of date. You've to mandatorily specify the schema for each `DataTable`.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

**SCHEMA**

In the above code:

* `schema` is the variable in which the array is saved.
* Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
    * name - Specify the name of the column.
    * type - Specify the type of the column.
	* format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a `data.json` file and copy the following code:

**DATA**

To view the full data click [here].

In the above code:

* `data` is the variable in which the data array is saved.
* Each row in the data array corresponds to a row in the `DataTable` and each element in a row are represented by each object of the `schema`. The values in each row of the array represents the following:
    * Time according to the format
    * Total Sales amount 

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](/fusiontime/getting-started/change-default-aggregation).

Now, let's create the `.js` and `.html` file to render the above chart.

### Create `JS` file

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create a `JS` file and copy the following code:

