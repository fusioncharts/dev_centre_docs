---
title: Overview | FusionCharts
description: This article outlines the DataStore and DataTable.
heading: Overview
---

FusionTime is used to plot discrete time data. It uses columns and rows as a `DataTable` to feed data to the chart. To create a chart using FusionTime you need to provide data as a `DataTable`. The source data that you provide is stored as the master `DataTable` in the `DataStore`. In this article, we will discuss the basics of both `DataStore` and `DataTable`. 

## What is `DataStore`

**DataStore** is an in-browser store of tabular data. Mainly, the `DataStore` contains the master `Datatable` of the source data. You can then perform data operations on this `DataTable` to transform the data as per your requirement. After, you perform an operation a child `DataTable` is generated keeping the source data intact. New **columns** can be created in the `DataTable` but new rows can only be created in DataStore.

> You can add values to the `DataTable` in both JSON and 2D array format.

## What is a `DataTable`

In FusionTime, the chart is rendered using data in tabular format only. The tabular representation of the data is called `DataTable`, which supports relational algebra operations. 

Note that you cannot directly change data in the `DataTable`. Instead, you need to apply one or more operations to an existing `DataTable` to create a new table with the resulting data. A new `DataTable` can only be created by applying some operation on an existing `DataTable`. 

To create a `DataTable`, you need to provide:

* The `schema`, which defines the properties of the columns.  

* The `actual` values for each row and column as the data.

For a detailed list of operations to manipulate the data in the `DataTable`, click here.

