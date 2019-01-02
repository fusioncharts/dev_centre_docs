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

* `dataTable` is the DataTable.
* Create an instance/object of StaticSource(source) with the DataTable `dataTable`.

### Dispose

The code to dispose the `StaticSource` object is given below:

```
source.Dispose()
```

In the above code, `source` is the object of `StaticSource` class.

## DataModel

### Create

The code to create a DataModel is given below:

```
DataModel model = new DataModel();
```

In the above code:

* `DataModel` is a class
* `model` is an object/instance of the DataModel.

### Dispose

The code to dispose the `DataModel` object is given below:

```
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.

## Add DataSource to `DataModel` object

The code to add a DataSource to the `DataModel` is given below:

```
model.DataSources.Add(source);
```

## Retrieve Data from DataModel

The code to retrieve data from the `DataModel` is given below:

```
DataTable table = model.Data // Output of the data format is DataTable
```

## Set Date/Time format

To set the date/time format of the Data, set DataSourceDateformat  property of DataModel instance.

To set the date/time format of the data, set the `DataSourceDateformat` property of DataModel instance. The code is given below:

```
model.DataSourceDateformat = "MM/dd/yyyy hh:mm tt";
```

## Create/Dispose GroupColumn

### Create

The code to group more than one column of a tabular data is given below:

```
GroupColumn model = new GroupColumn { 
	"Sales",
	"Quantity",
	"Shipping Cost"
};
```

In the above code:

* `GroupColumn` is the class.
* `model` is the instance of `GroupColumn` which holds the grouping information.
* **Sales**, **Quantity** and **Shipping Cost** are the column name of a tabular data.



### Dispose

The code to dispose the grouped column is given below:

```csharp
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.

## Create/Dispose SortColumn

### Create

The code to sort columns of a tabular data is given below:

```
SortColumn model = new SortColumn { 
	{"1994",SortColumn.Order.DESC },
  	{"1995",SortColumn.Order.DESC },
  	{"1996",SortColumn.Order.DESC }
};
```

In the above code:

* `SortColumn` is the class.
* `model` is the instance of `SortColumn` which holds the sorting information.
* `Order` is an enum of `SortColumn` which defines the sorting order.

### Dispose

THe code to dispose the sorted column is given below:

```csharp
model.Dispose()
```

In the above code, `model` is the object which holds the Aggregation information.

## Create/Dispose Aggregation class

### Create

The code to apply aggregation to a tabular data is given below:

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

The code to dispose the aggregated is given below:

```csharp
model.Dispose()
```

In the above code, `model` is the object which holds the resultant data.