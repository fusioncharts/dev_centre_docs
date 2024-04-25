---
title: Data Engine API | FusionCharts
description: Enhance data operations with the seamless integration of Data Engine API. Click to explore our comprehensive article and discover a deeper understanding.
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

## Set Culture

To set the culture to `en-US`, set the `Culture` of the `model`.

The code is given below:

```csharp
model.Culture = new CultureInfo("en-us");
``` 

To set the maximum year till which the dates will be returned with the year in `yy` format, set the `year` value to `TwoDigitYearMax` under `Calendar`.

The code is given below:

```csharp
model.Culture.Calendar.TwoDigitYearMax = 2010;
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

### Logical Operator

To apply logical operators to the data, set it's instance of the DataModel as shown below:

**`AND` Operator**

```csharp
DataModel andOperator = model.Where("Order Date is between 1/22/2011 to 1/24/2011 and Country = United States");
```

**`OR` Operator**

```csharp
DataModel orOperator = model.Where("Name starts with I or Name starts with A");
```

## Pivot

To apply `pivot` operation to the data, set the `pivotModel` instance of the DataModel as shown below:

```csharp
DataModel pivotModel = model.Pivot(row, column, aggregation);
```

## Pagination

To code to set the page size is given below:

```csharp
model.PageSize = 15;
```

The code to get records from specific pages is given below:

```csharp
DataModel dataModel = model.GetItemsFromPages(2, 3);
```

## Top

The code to apply `topRecords` operation is given below:

```csharp
DataModel newModel = model.TopRecords(5);
```

## Select

The code to apply `select` operation to the data is given below:

```csharp
DataModel newModel = model.SelectColumns("Country","Sales");
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
