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


## MSSQL Source

Apart from Static Source, the DataEngine of FusionCharts.NET also lets you use data from an MSSQL server. Here's how you should proceed to do that:

### Configure data source

Before the FusionCharts DataEngine can fetch data from MSSQL, it needs to connect to the server. The DataEngine can do so in one of the following ways:

#### SQL Authentication

If the MSSQL server has SQL authentication, refer to the code given below:

```


/* create object */
/* SQL Authentication */

MsSqlClass msSql = new MsSqlClass("username", "password","servername","databasename", sourcetype, "sourcename")|




```


In the above code:

* `username` is the username for the MSSQL server

* `password` is the password for the MSSQL server

* `servername` is the name of the MSSQL server

* `databasename` is the name of the database you want DataEngine to connect to

* `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type DataBaseClass.SourceType. It can take the values of `TABLE`, `VIEW`, or `QUERY`.

* `sourcename` is the name of the data source. If you want DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want to use the result of a query as the source, provide the query string.

#### Windows Authentication

If the MSSQL server has Windows authentication, refer to the code given below:

```


/* create object */
/* Windows Authentication */
MsSqlClass msSql = new MsSqlClass("servername","databasename", sourcetype, "sourcename")|





```


In the above code:

* `servername` is the name of the MSSQL server

* `databasename` is the name of the database you want DataEngine to connect to

* `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type DataBaseClass.SourceType. It can take the values of `TABLE`, `VIEW`, or `QUERY`.

* `sourcename` is the name of the data source. If you want the DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want the DataEngine to use the result of a query as the source, provide the query string.

#### Connection String

If you want to use a different type of authentication apart from the two given above, you need to provide a connection string to the DataEngine. Refer to the code given below:

```


/* create object */
/* provide connection string from user end */
MsSqlClass msSql = new MsSqlClass("connectionstring", sourcetype, "sourcename")|





```


In the above code:

* `connectionstring` is the connection string. 

* `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type DataBaseClass.SourceType. It can take the values of `TABLE`, `VIEW`, or `QUERY`.

* `sourcename` is the name of the data source. If you want the DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want to use the result of a query as the source, provide the query string.





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

The code to create instance of `GroupColumn` class is shown below:

> This instance will be used to group more than one column of a tabular data.

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

The code to create instance of `SortColumn` class is shown below:

> This instance will be used to sort more than one column of a tabular data.

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

The code to create instance of `Aggregation` class is shown below:

> This instance will be used to aggregate more than one column of a tabular data.

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