---
title: Overview | FusionCharts
description: This article outlines the DataStore and DataTable.
heading: Overview
---

## What is `DataStore`?

`DataStore` is an in-browser store of tabular data. Mainly, the `DataStore` contains the `DataTable` derived from the original data source along with some data operations. You can then perform data operations on this `DataTable` to transform the data as per your requirement. For any operation applied a new `DataTable` is generated keeping the source data intact.

> 'DataTable' accepts both arrays of JSON object or 2D array.

The `DataStore` contains the following:
* `DataTable` to represent the data on which operations can be performed.
* Number of operators to transform the data.
* A propagation mechanism to communicate between different `DataTable` created from the same `DataStore`.

Operations can only be performed on the `DataTable` of `DataStore` and each operation generates a new `DataTable` instead of modifying the same `DataTable`.

You can create new columns for a `DataTable` but new rows can only be inserted in the `DataStore`. The default table and all derived tables created from the default table will automatically reflect the new row of data.


## What is a `DataTable`?

The tabular representation of the data is called the `DataTable`, which is stored in the `DataStore`. You can apply one or more operations to an existing `DataTable` to create a new table with the resulting data. 

Note that you cannot directly change data in the `DataTable`. Instead, you need to apply one or more operations to an existing `DataTable` to create a new table with the resulting data.

To create a `DataTable`, you need to provide:

* The `schema`, which defines the properties of the columns.  

* The `actual` values for each row and column as the data.

### Schema

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema helps `DataTable` understand the columns in your data, the data type for each column and the input format in case of date. It is mandatory to specify the schema for each `DataTable`.

The schema of a `DataTable` is shown below:

```
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
* The first object represents the first column in the `DataTable`. In the above sample Country is the name of the column.
* The second object sets the date/time format for the chart. The name of the column has been set to `Time` and the date format has been set to `%-m/%-d/%Y`.
* The last object represents the third column named Sales, the values of which will map to the data plots.

### Data

To add values in each column of the `DataTable` you can provide the data in arrays of JSON object or 2D array. In this article, we will use the 2D array format.

The data format is shown below:

```
[
    [
        "United States",
        "1/4/2011",
        16.448
    ],
    [
        "United States",
        "1/5/2011",
        272.736
    ],
    [
        "United States",
        "1/5/2011",
        11.784
    ],
…
```

In the above code:
* `data` is the variable in which the data array is saved.
* Each element of the data array has values specific to each row of the DataTable. The values in the array represent the following:
	* The name of the Country.
	* Time according to the format
	* Value of the data plots, i.e. sales per date. 

Next, we will discuss the different operators which you can apply to the `DataTable`.

