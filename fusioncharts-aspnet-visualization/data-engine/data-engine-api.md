---
title: Data Engine API | FusionCharts
description: This article provides the list of Data Engine APIs available.
heading: Data Engine API
---

## Static Source

### Create

The code to create a StaticSource is given below:

```
StaticSource source = new StaticSource(dataTable);
```

In the above code:

* `dataTable` is the created tabular data. 
* The created data to render the chart is stored in the DataModel of the DataEngine.

### Dispose

If you want to dispose the `StaticSource` object, run the following query:

```
source.Dispose()
```

In the above code, `source` is the object which holds the resultant data.

## DataModel

### Create

To create a DataModel, run the following query:

```
DataModel model = new DataModel();
```

In the above query:

* `DataModel` is a class
* `model` is the object which holds the resultant data.

### Dispose

If you want to dispose the `DataModel` object, run the following query:

```
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.

## Add DataSource to `DataModel` object

To add a DataSource to the `DataModel`, run the following query:

```
model.DataSources.Add(source);
```

## Retrieve Data from DataModel

To retrieve data from the `DataModel`, run the following query:

```
DataTable table = model.Data // Output of the data format is DataTable
```

## Set Date/Time format

To set the date/time format of the data, run the following query:

```
model.DataSourceDateformat = "MM/dd/yyyy hh:mm tt";
```

## Create/Dispose GroupColumn

### Create

To group more than one column of a tabular data, run the following query:

```
GroupColumn model = new GroupColumn { 
	"Sales",
	"Quantity",
	"Shipping Cost"
};
```

In the above code:

* `GroupColumn` is the class object
* `model` is the object which holds the resultant data.
* **Sales**, **Quantity** and **Shipping Cost** are the column name of a tabular data.

### Dispose

To dispose the grouped column, run the following query:

```aspnet
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.

## Create/Dispose SortColumn

### Create

To sort columns of a tabular data, run the following query:

```
SortColumn model = new SortColumn { 
	{"1994",SortColumn.Order.DESC },
  	{"1995",SortColumn.Order.DESC },
  	{"1996",SortColumn.Order.DESC }
};
```

In the above code:

* `SortColumn` is the class object
* `model` is the object which holds the resultant data.
* **Order** is the column name of the tabular data

### Dispose

To dispose the sorted column, run the following query:

```aspnet
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.

## Create/Dispose Aggregation class

### Create

To apply aggregation to a tabular data, run the following query:

```
Aggregation model = new Aggregation {
	{ "Quantity", Aggregation.Function.COUNT },
	{ "Sales", Aggregation.Function.SUM }
};
```

In the above code:

* `Aggregation` is the class object
* `model` is the object which holds the resultant data.
* **Quantity** and **Sales** are the column names on the aggregation function has  been applied.

### Dispose

To dispose the aggregated, run the following query:

```aspnet
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.