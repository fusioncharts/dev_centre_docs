---
title: Overview | FusionCharts
description: This article provides the list of APIs available
heading: Overview
---

## Data Source

DataModel consists of data source store. In FusionCharts.NET the supported data source is StaticSource which is a class of DataEngine. You can create the StaticSource and add the instance to the data source of the DataModel. StaticSource accepts tabular data format. The code to create a StaticSource is given below:

```
StaticSource source = new StaticSource(dataTable);
```

In the above code `dataTable` is the created tabular data. 

The created data to render the chart is stored in the DataModel  of the DataEngine.

## What is DataModel?

DataModel is an in-browser store of data sources and tabular data. Mainly, the DataModel contains the data derived from the original data source along with some data operations. You can then perform data operations on this data to transform the data as per your requirement. For any operation applied a new data is generated keeping the source data intact. The newly created DataModel always has a reference to its parent DataModel.

The DataModel contains the folliowing:

* Data on which operations can be performed.
* Number of operators to transform the data.
* Operations can only be performed on the Data of DataModel and each operation generates a new Data instead of modifying the same one.

### Create DataModel

To create a DataModel, run the following query:

```
DataModel model = new DataModel();
```

In the above query:

* `DataModel` is a class
* `model` is the object which holds the resultant DataModel.

### Add DataSource to `DataModel` object

To add a DataSource to the `DataModel`, run the following query:

```
model.DataSources.Add(source);
```

### Retrieve Data from DataModel

To retrieve data from the `DataModel`, run the following query:

```
DataTable table = model.Data // Output is the data format is  DataTable
```

### Dispose DataModel object

If you want to dispose the `DataModel` object, run the following query:

```
model.Dispose()
```