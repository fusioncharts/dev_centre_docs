---
title: Overview | FusionCharts
description: This article is the overview of the FusionCharts.NET Data Engine.
heading: Overview
---

## Data Source

DataModel consists of data source store. In FusionCharts.NET the supported data source is StaticSource which is a class of DataEngine. You can create the StaticSource and add the instance to the data source of the DataModel. StaticSource accepts tabular data format.

## What is DataModel?

DataModel is an in-browser store of data sources and tabular data. Mainly, the DataModel contains the data derived from the original data source along with some data operations. You can then perform data operations on this data to transform the data as per your requirement. For any operation applied a new data is generated keeping the source data intact. The newly created DataModel always has a reference to its parent DataModel.

The DataModel contains the folliowing:

* Data on which operations can be performed.
* Number of operators to transform the data.
* Operations can only be performed on the Data of DataModel and each operation generates a new Data instead of modifying the same one.

To get the detailed list of the Data Engine APIs click [here]({% site.baseurl %}/fusioncharts-aspnet-visualization/data-engine/data-engine-api).