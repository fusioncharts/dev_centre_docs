---
title: Data Engine API | FusionCharts
description: This article provides the list of Data Engine APIs available.
heading: Data Engine API
---

## Static Source

### Create

The code to create a StaticSource is given below:

```csharp
StaticSource source = new StaticSource(dataTable);
```

### Dispose

The code to dispose the `StaticSource` object is given below:

```csharp
source.Dispose()
```

## MSSQL Source

Apart from Static Source, the DataEngine of FusionCharts.NET also lets you use data from an MSSQL server. Here's how you should proceed to do that:

### Configure data source

Before the FusionCharts DataEngine can fetch data from MSSQL, it needs to connect to the server. The DataEngine can do so in one of the following ways:

**SQL Authentication**

If the MSSQL server has SQL authentication, refer to the command given below:

```csharp
/* create object */
/* SQL Authentication */

MsSqlClass msSql = new MsSqlClass("username", "password", "servername", "databasename", sourcetype, "sourcename")
```

**Windows Authentication**

If the MSSQL server has Windows authentication, refer to the command given below:

```csharp
/* create object */
/* Windows Authentication */
MsSqlClass msSql = new MsSqlClass("servername","databasename", sourcetype, "sourcename")|
```

**Connection String**

If you want to use a different type of authentication apart from the two given above, you need to provide a connection string to the DataEngine. Refer to the command given below:

```csharp
/* create object */
/* provide connection string from user end */
MsSqlClass msSql = new MsSqlClass("connectionstring", sourcetype, "sourcename")
```

## CSV File

### Local/another network file

The code to fetch data from a CSV file stored in the local computer is given below:

```csharp
CsvFileSource csvFileSource = new CsvFileSource("filePath");
```

### File from another network

The code to fetch data from a CSV file stored in another network is given below:

```csharp
CsvFileSource csvFileSource = new CsvFileSource("filePath", "userName", "password");
```

### Dispose

The code to dispose the `csvFileSource` object is given below:

```csharp
csvFileSource.Dispose();
```

## JSON File

### Local/another network file

The code to fetch data from a JSON file stored in the local computer is given below:

```csharp
JsonFileSource jsonFileSource = new JsonFileSource("filePath");
```

### File from another network

The code to fetch data from a JSON file stored in another network is given below:

```csharp
JsonFileSource jsonFileSource = new JsonFileSource("filePath", "userName", "password");
```

### Dispose

The code to dispose the `JsonFileSource` object is given below:

```csharp
jsonFileSource.Dispose();
```

## DataModel

### Create

The code to create a DataModel is given below:

```csharp
DataModel model = new DataModel();
```

### Dispose

The code to dispose the `DataModel` object is given below:

```csharp
model.Dispose()
```

## Add DataSource to `DataModel` object

The code to add a DataSource to the `DataModel` is given below:

```csharp
model.DataSources.Add(source);
```

## Retrieve Data from DataModel

The code to retrieve data from the `DataModel` is given below:

```csharp
DataTable table = model.Data // Output of the data format is DataTable
```

## DataModel Schema

`ColumnSchema` of the DataModel data is used to get the schema.

The code is given below:

```csharp
List<Schema> modelSchema = model.ColumnSchema
```

## Set Date/Time format

To set the date/time format of the data, set the `DataSourceDateformat` property of DataModel instance.

The code is given below:

```csharp
model.DataSourceDateformat = "MM/dd/yyyy hh:mm tt";
```

## Create/Dispose GroupColumn

### Create

The code to create instance of `GroupColumn` class is shown below:

> This instance will be used to group more than one column of a tabular data.

```csharp
GroupColumn model = new GroupColumn {
	"Sales",
	"Quantity",
	"Shipping Cost"
};
```

### Dispose

The code to dispose the grouped column is given below:

```csharp
model.Dispose()
```

## Create/Dispose SortColumn

### Create

The code to create instance of `SortColumn` class is shown below:

> This instance will be used to sort more than one column of a tabular data.

```csharp
SortColumn model = new SortColumn {
	{"1994",SortColumn.Order.DESC },
  	{"1995",SortColumn.Order.DESC },
  	{"1996",SortColumn.Order.DESC }
};
```

### Dispose

THe code to dispose the sorted column is given below:

```csharp
model.Dispose()
```

## Create/Dispose Aggregation class

### Create

The code to create instance of `Aggregation` class is shown below:

> This instance will be used to aggregate more than one column of a tabular data.

```csharp
Aggregation model = new Aggregation {
	{ "Quantity", Aggregation.Function.COUNT },
	{ "Sales", Aggregation.Function.SUM }
};
```

### Dispose

The code to dispose the aggregated is given below:

```csharp
model.Dispose()
```
