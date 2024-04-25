---
title: Overview | FusionCharts
description: Gain in-depth insights into FusionCharts DataEngine's data source store and discover the ease of data integration from DataTable with the StaticSource class.
heading: Overview
---

## Data Source

DataModel has a store for data source. In FusionCharts DataEngine the supported data source class is StaticSource. You can create an instance of  StaticSource and it to the data source store of a DataModel instance. StaticSource accepts data from the DataTable.

> Data Source either accepts raw data or keeps the configuration of the data.

## What is DataModel?

DataModel is a class of FusionCharts DataEngine which has a data source store, methods to perform operation on data, a DataTable for output data and if it is derived from another DataModel, a reference of that DataModel.

The DataModel contains the folliowing:

* Data on which operations can be performed.
* Number of operators to transform the data.
* Operations can only be performed on the Data of DataModel and each operation generates a new DataModel instead of modifying the same one.

To get the detailed list of the Data Engine APIs click [here](/fusioncharts-aspnet-visualization/data-engine/data-engine-api).
