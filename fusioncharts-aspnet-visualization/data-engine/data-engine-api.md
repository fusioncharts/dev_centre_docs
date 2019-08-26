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

## Add Filter

To apply filter to the data of the chart, set the properties of following filter instances:

### Null

To apply the `null` filter to the data of the chart, set the `nullOperation` instance of the DataModel as shown below:

```csharp
DataModel nullOperation = model.Where("Country is null"); //Country is the Column name
```

### Not Null

To apply the `not null` filter to the data of the chart, set the `notNullOperation` instance of the DataModel as shown below:

```csharp
DataModel notNullOperation = model.Where("Country is not null");
```

### Equal

To apply `equal` filter operation, set the `equalOperation` instance of the DataModel as shown below:

```csharp
DataModel equalOperation = model.Where("Country = United States");
```

### Not Equal

To apply `not equal` filter operation, set the `notEqualOperation` instance of the DataModel as shown below:

```csharp
DataModel notEqualOperation = model.Where("Country != United States");
```

### Greater

To apply `greater` filter operation, set the `greaterOperation` instance of the DataModel as shown below:

```csharp
DataModel greaterOperation = model.Where("Sales > 100");
```

### Greater or Equal

To apply `greater or equal` filter operation, set the `greaterEqualOperation` instance of the DataModel as shown below:

```csharp
DataModel greaterEqualOperation = model.Where("Quantity >= 3");
```

### Less

To apply `less` filter operation, set the `lessOperation` instance of the DataModel as shown below:

```csharp
DataModel lessOperation = model.Where("Sales < 100");
```

### Less or Equal

To apply `less or equal` filter operation, set the `lessEqualOperation` instance of the DataModel as shown below:

```csharp
DataModel lessEqualOperation = model.Where("Quantity <= 3");
```

### Between

To apply `between` filter operation, set the `betweenOperation` instance of the DataModel as shown below:

```csharp
DataModel betweenOperation = model.Where("Order Date is between 1/22/2011 to 1/24/2011");
```

### Begins with

To apply `begins with` filter operation, set the `beginsWithOperation` instance of the DataModel as shown below:

```csharp
DataModel beginsWithOperation = model.Where("Country begins with A");
```

### Contains

To apply `contains` filter operation, set the `containsOperation` instance of the DataModel as shown below:

```csharp
DataModel containsOperation = model.Where("Country contains d");
```

### Ends with

To apply `ends with` filter operation, set the `endsWithOperation` instance of the DataModel as shown below:

```csharp
DataModel endsWithOperation = model.Where("Country ends with a");
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

## Create/Dispose Calculated Column

### Create

To create a new calculated column, you need to create an instance of the `CalculatedColumns` class. Refer to the code given below:

```csharp
CalculatedColumns calculatedColumns = new CalculatedColumns {
    {"SellingPrice - (Cost * Unit)","Profit" },
    {"ExpiryYear - ManufactureYear","Validity" }
};
```

### Dispose

The code to dispose the `calculatedColumns` object is given below:

```csharp
calculatedColumn.Dispose();
```
