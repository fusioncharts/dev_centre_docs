---
title: How FusionTime Works | FusionCharts
description: This article defines the flow of FusionTime.
heading: How FusionTime Works
---

FusionTime is a JavaScript library that helps you visualize and explore time-series data interactively. It supports data with atomicity ranging from milliseconds to years. FusionTime comes along with the following features:

- Smartly aggregate data on the [time axis](/fusiontime/fusiontime-component/time-axis)
- Built-in powerful components like,
  - [Time navigator](/fusiontime/fusiontime-component/time-navigator)
  - [Time range selectors](/fusiontime/fusiontime-component/standard-range-selector)
  - [Event markers](/fusiontime/fusiontime-component/time-marker) and many more.

In this article, we will discuss the complete flow of how FusionTime works. To start with let’s get an overview of the difference from existing FusionCharts.

## How FusionTime is different from FusionCharts

While FusionCharts can help you visualize data in dozens of different ways, FusionTime works exclusively with time series data. Unlike other varieties of charts in FusionCharts, which only (till now) accept data in JSON/XML, FusionTime accepts data in rows and columns as a [Datatable](/fusiontime/fusiontime-data-engine/overview). You can then apply different data operations ([filter](/fusiontime/fusiontime-data-engine/filter), [grouping](/fusiontime/fusiontime-data-engine/groupby), etc.) on the `DataTable` to optimize your data as per the requirement.

## FusionTime Data Layer

FusionTime data layer is comprised of a DataStore and a DataTable. So, how do you create the `DataTable`? The FusionTime data layer comes with a [DataStore](/fusiontime/fusiontime-data-engine/overview) which accepts data in JSON/2D array format. The data fed in the `DataStore` is converted to a root `DataTable`. This root `DataTable` contains the source data in a tabular format.

Once the root data table is available, one can either use it to render the chart or apply data operations on it, to create a new `DataTable` with modified data. Data operations are chain operations which can be applied on any data table. Once we decide on the data table for a particular FusionTime chart, we can instantiate the chart using the particular derived data table.

The `DataStore` also contains a set of data operators (filter, grouping, etc.) which can be applied to any `DataTable`. Any operation applied on a `DataTable` to optimize data generates a new child DataTable. Likewise, any number of data tables can be generated from either the master or other child data tables. You can then provide any one of them to render the chart.

To help understand better refer to the illustration below:

![FT Works](/images/how-fusion-time-works.svg)

The above illustration is a flow diagram which defines the following:

- Source data fetched to the browser in JSON/2D array format from the data source like WebService, Databases, etc.
- Create a `DataStore` and load your data to create the root `DataTable`.
- The root `DataTable` is then fed to the chart renderer along with chart configurations to render the chart.
- Alternatively, you can also apply data operations on the root `DataTable` to generate another derived `DataTable`.
- You can then feed the derived `DataTable` to the chart renderer along with chart configurations to render the chart.

Now that you have the basic understanding of the data flow for FusionTime it's time to install and build your [first chart](/fusiontime/getting-started/create-your-first-chart-in-fusiontime).
