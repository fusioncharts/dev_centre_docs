---
title: Overview | FusionCharts
description: This article outlines the DataStore and DataTable.
heading: Overview
---

## What is `DataStore`?

`DataStore` is an in-browser store of tabular data. Mainly, the `DataStore` contains the `DataTable` derived from the original data source along with some data operations. You can then perform data operations on this `DataTable` to transform the data as per your requirement. For any operation applied a new `DataTable` is generated keeping the source data intact.

> 'DataStore' accepts either a JSON object, or a 2D array.

The `DataStore` contains the following:

- `DataTable` to represent the data on which operations can be performed.
- Number of operators to transform the data.
- A propagation mechanism to communicate between different `DataTable` created from the same `DataStore`.

Operations can only be performed on the `DataTable` of `DataStore` and each operation generates a new `DataTable` instead of modifying the same `DataTable`.

You can create new columns for a `DataTable` but new rows can only be inserted in the `DataStore`. The root tables and all derived tables will automatically reflect the new row of data.

## What is a `DataTable`?

The tabular representation of the data is called the `DataTable`, which is stored in the `DataStore`. You can apply one or more operations to an existing `DataTable` to create a new table with the resulting data.

Note that you cannot directly change data in the `DataTable`. Instead, you need to apply one or more operations to an existing `DataTable` to create a new table with the resulting data.

To create a `DataTable`, you need to provide:

- The `schema`, which defines the properties of the columns.

- The actual values for each row and column as the `data`.

### Schema

The schema contains an array of objects. Each object represents a column in the `DataTable`. The schema helps `DataTable` understand the columns in the data, the data type for each column and the input format in case of date. It is mandatory to specify the schema for each `DataTable`.

The schema of a `DataTable` is shown below:

```javascript
let schema = [
  {
    name: "Country",
    type: "string"
  },
  {
    name: "Time",
    type: "date",
    format: "%-m/%-d/%Y"
  },
  {
    name: "Sales",
    type: "number"
  }
];
```

In the above code:

- `schema` is the variable in which the array is saved.
- Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
  - name - Specify the name of the column.
  - type - Specify the type of the column. \* format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

### Data

To add values in each column of the `DataTable` you can provide the data in arrays of JSON object or 2D array. Here, we will use the 2D array format.

The data format is shown below:

```javascript
let data = [
  ["United States", "1/4/2011", 16.448],
  ["United States", "1/5/2011", 272.736],
  ["United States", "1/5/2011", 11.784],
  ["United States", "12/31/2014", 20.72],
  ["United States", "12/31/2014", 13.904],
  ["United States", "12/31/2014", 3.024]
];
```

In the above code:

- `data` is the variable in which the data array is saved.
- Each row in the data array corresponds to a row in the `DataTable` and each element in a row are represented by an object of the `schema`. The values in each row of the array represents the following:
  _ The name of the country.
  _ Time according to the format \* total sales amount

Next, we will discuss the different operators you can apply to the `DataTable`.
