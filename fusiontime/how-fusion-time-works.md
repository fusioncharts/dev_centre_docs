---
title: How FusionTime Works | FusionCharts
description: This article defines the flow of FusionTime.
heading: How FusionTime Works
---

FusionTime is a JavaScript library that helps you visualize and explore time-series data interactively. It supports data with atomicity ranging from milliseconds to years. Along with the capability to smartly aggregate data on the time axis, it also has built-in powerful components (like time navigator, range selectors, event markers, etc.) which enable easy and intuitive exploration of large data over a long time period and smart annotations.

In this article, we will discuss the complete flow starting from connecting data from the data source to rendering the chart. 

## How FusionTime is different from FusionCharts

While FusionCharts can help you visualize data in dozens of different ways, FusionTime works exclusively with time series data. Unlike other varieties of charts in FusionCharts, which only (till now) accept data in JSON/XML, FusionTime accepts data in rows and columns as a `Datatable`. You can then apply different data operations (filter, grouping, etc.) on the `DataTable` to optimize your data as per the requirement. 

## FusionTime Data Layer

So, how do you create the `DataTable`? The FusionTime data layer comes with a `DataStore` which accepts data in JSON/2D array format. The data fed in the 'DataStore' is converted to a root 'DataTable' using the `createDataTable()` method. This `DataTable` is the root `DataTable` which contains the source data. So all you need to do is provide the source data in JSON/2D array to the `DataStore` and the data engine takes care of the rest. You can then either provide this `DataTable` to render the chart or apply data operations to create new `DataTable` with optimized data.

The `DataStore` also contains a set of data operators (filter, grouping, etc.) which can be applied to any `DataTable`. Any operations applied on `DataTable` to optimize data generates a new child `DataTable`. Likewise any number of data tables can be generated from either the master or other child data tables. You can then provide any one of the `DataTables` to render the chart. 

To help understand better refer to the illustration below:

![](null)

The above illustration is a flow diagram which defines the following:

* Source data transfered to the browser in JSON/2D array format from the data source.

* The data is then fed in the `DataStore`. To identify the data you need schema and data which we will discuss later.

* The JSON/2D array format of source data is then converted into the root `DataTable` which is stored in the `DataStore`. 

* The root `DataTable` is then fed to the chart renderer along with chart configurations to render the chart. 

* Alternatively, you can also apply data operations on the root `DataTable` to generate another child `DataTable`.

* You can then feed the derived `DataTable` to the chart renderer along with chart configurations to render the chart.

Now that you have the basic understanding of the data flow for FusionTime it's time to install and build your first chart. 

