---
title: Data Source | FusionCharts
description: Learn to configure data sources like Static Source, MSSQL, CSV, & JSON files in FusionCharts for better data visualization.Explore features & tutorials here.
heading: Data Source
---

## Static Source

### Create

The code to create a `StaticSource` is given below:

```csharp
StaticSource source = new StaticSource(dataTable);
```

In the above code:

- `dataTable` is the DataTable.
- Create an instance/object of `StaticSource`(source) with the DataTable `dataTable`.

### Dispose

The code to dispose the `StaticSource` object is given below:

```
source.Dispose()
```

In the above code, `source` is the object of `StaticSource` class.

## MSSQL Source

Apart from Static Source, you can also use data from MSSQL server.

### Configure data source

To fetch the data from MSSQL, connect the DataEngine to the server. DataEngine can be connected to the server in the following ways:

**SQL Authentication**

If the MSSQL server has SQL authentication, refer to the command given below:

```csharp
/* create object */
/* SQL Authentication */

MsSqlClass msSql = new MsSqlClass("username", "password", "servername", "databasename", sourcetype, "sourcename")
```

In the above command:

- `username` is the username for the MSSQL server.
- `password` is the password for the MSSQL server.
- `servername` is the name of the MSSQL server.
- `databasename` is the name of the database you want DataEngine to connect to.
- `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type `DataBaseClass.SourceType`. It can take the values of `TABLE`, `VIEW`, or `QUERY`.
- `sourcename` is the name of the data source. If you want DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want to use the result of a query as the source, provide the query string.

**Windows Authentication**

If the MSSQL server has Windows authentication, refer to the command given below:

```csharp
/* create object */
/* Windows Authentication */
MsSqlClass msSql = new MsSqlClass("servername","databasename", sourcetype, "sourcename")|
```

In the above command:

- `servername` is the name of the MSSQL server.
- `databasename` is the name of the database you want DataEngine to connect to.
- `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type `DataBaseClass.SourceType`. It can take the values of `TABLE`, `VIEW`, or `QUERY`.
- `sourcename` is the name of the data source. If you want the DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want the DataEngine to use the result of a query as the source, provide the query string.

**Connection String**

To use a different type of authentication, provide a connection string to the DataEngine. Refer to the command given below:

```csharp
/* create object */
/* provide connection string from user end */
MsSqlClass msSql = new MsSqlClass("connectionstring", sourcetype, "sourcename")
```

In the above command:

- `connectionstring` is a string that specifies information about a data source and the means of connecting to it. The connection string may include attributes such as the **name** of the driver, **server**, **database** and security information such as `username` and `password`.
- `sourcetype` is the type of data source you want DataEngine to fetch the data from. It is an enum of type `DataBaseClass.SourceType`. It can take the values of `TABLE`, `VIEW`, or `QUERY`.
- `sourcename` is the name of the data source. If you want the DataEngine to use a table or a view as the source, provide the name of the respective table/view. If you want to use the result of a query as the source, provide the query string.

## CSV File

### Local File

The code to fetch data from a CSV file stored in the local computer is given below:

```csharp
CsvFileSource csvFileSource = new CsvFileSource("filePath");
```

In the above code `filepath` is the complete path to the CSV file in the local computer. It is used to create an instance/object of `CsvFileSource` (`csvFileSource`).

### File from another network

The code to fetch data from a CSV file stored in another network is given below:

```csharp
CsvFileSource csvFileSource = new CsvFileSource("filePath", "userName", "password");
```

In the above code:

- `filepath` is the complete path to the CSV file in the local computer. It is used to create an instance/object of `CsvFileSource` (`csvFileSource`).
- `userName` and `password` are the credentials needed to log in to the target network. They are also used to create an instance/object of `CsvFileSource` (`csvFileSource`).

### Dispose the object

The code to dispose the `csvFileSource` object is given below:

```csharp
csvFileSource.Dispose();
```

In the above code, `csvFileSource` is the object that holds the file configuration.

## JSON File

### Local File

The code to fetch data from a JSON file stored in the local computer is given below:

```csharp
JsonFileSource jsonFileSource = new JsonFileSource("filePath");
```

In the above code `filepath` is the complete path to the JSON file in the local computer. It is used to create an instance/object of `JsonFileSource`(`jsonFileSource`).

### File from another network

The code to fetch data from a JSON file stored in another network is given below:

```csharp
JsonFileSource jsonFileSource = new JsonFileSource("filePath", "userName", "password");
```

In the above code:

- `filepath` is the complete path to the CSV file in the local computer. It is used to create an instance/object of `CsvFileSource` (`csvFileSource`).
- `userName` and `password` are the credentials needed to log in to the target network. They are also used to create an instance/object of `CsvFileSource` (`csvFileSource`).

The code to dispose the `JsonFileSource` object is given below:

```csharp
jsonFileSource.Dispose();
```

In the above code, `jsonFileSource` is the object that holds the file configuration.
