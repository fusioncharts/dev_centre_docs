---
title: FusionTime Methods | FusionCharts
description: Discover the DataStore methods for efficient data management and manipulation. Unlock the potential of DataStore by reading our comprehensive article now.
heading: Methods
---

## DataStore Methods

### `createDataTable(data, schema, config, id)`

CreatesDataTablein the data store.

* **data:** Add values to the `DataTable`, you can provide the data in both JSON and 2D array format.

* **schema**: Schema contains an array which has multiple objects created in it. Each object represents a column in the DataTable.

```
//Schema
[{
    "name": "Time", //Column Name
    "type": "date", //It can be text/number/date/interval
    "format": "%-m/%-d/%Y" //Suitable format for rows
     
}]
```

* **config:** It is an optional argument which contains indexing information, i.e., in which order data should be inserted in the table. If the `config` is not provided then the `DataStore` intelligently picks a column to index.

```
//Config
{
	"enableIndex": true, //default is true
	"indexBy": "Time", //Column Name on which the indexing is applied 
}
```

* **id:** It is an optional string argument to provide a `unique id` of the table.

> The DataStore automatically sets the `id` of the data table, if the `id` is not provided.

### `appendRows([[],[]], id)`

Append rows in the data store. To append rows to a specific data table, specify the `id` of the table while calling the method. If the `id` of the `DataTable` is not specified then the  method `appendRows` keeps on appending rows to the first `DataTable` of the `DataStore`.  

### `getDataTable(id)`

Fetches the DataTable from the DataStore to render the chart.

> To render the chart using specific data table, specify the `id` of the table while calling the method. 

### `on('eventName', handler|[handlers])`

Binds a 'handler' function to an `eventName` event.

To provide multiple handlers, set the multiple handler functions in an array.

### `off('eventName', handler|[handlers])`

Detach one or more 'handler' functions from `eventName` event.

To detach all the handlers using `eventName` event, keep the second argument empty.

### `trigger('eventName', [data])`

Fires an `eventName` event with optional data.

### `dispose()`

Disposes the DataStore.

## DataTable Methods

### `count()`

Returns the total number of items in the data table.

### `getData([offset=0], [numberOfItems=row_count])`

Returns a JSON data.

Example:

```
{
	data: [], //2d array in row major format
	schema: [{},{}] //JSON schema
}
```

* The default value of `offset` argument is `0` or `first index`.

* The default value of `numberOfItems` argument is `count - offset`.

### `min(columnName)`

Returns the minimum value of the specified column.

### `max(columnName)`

Returns the maximum value of the specified column.

### `unique(columnName)`

Returns an array of unique elements of the specified column.

### `extents(columnName)`

Returns both minimum and maximum value of the specified  column.

### `getSchema()`

Returns the schema of the table.

### `addColumns({}, {}, ....)`

Adds one or more columns to the data table.

> If the function is not provided in `calcFn`, addColumns() method will add a column configuration to the `schema`. The `data` remains unchanged and the default value of thw column becomes null.

### `query(queryOperation)`

`query` method perform data operations (like filter, sort, pivot, etc.) on the `DataTable`. It returns a new `DataTable` after performing an operation.

### `getDataStore()`

Returns the source DataStore object.

### `indexOf(columnName)`

Returns the zero based index of the specified column.

### `on('eventName', handler|[handlers])`

Binds a 'handler' function to an `eventName` event.

To provide multiple handlers, set the multiple handler functions in an array.

### `off('eventName', handler|[handlers])`

Detach one or more 'handler' functions from `eventName` event.

To detach all the handlers using `eventName` event, keep the second argument empty.

### `dispose()`

Disposes the table.

## Date Utils

### `FusionCharts.Utils.duration(DatetimeUnits, number)`

Represents the time duration. Example, `2 hours`,  `3 months`, etc

* FusionCharts.Utils.duration(FusionCharts.Utils.DatetimeUnits.Hour, 2)
* FusionCharts.Utils.duration(FusionCharts.Utils.DatetimeUnits.Month, 3)

### `FusionCharts.Utils.before(duration, [date], [isUTC], [weekStartFrom])`

Returns a date offset(negative) from the specified duration.

If `date` argument is not provided, current date is considered and returns the timestamp of the date.

### `FusionCharts.Utils.after(duration, [date], [isUTC], [weekStartFrom])`

Returns a date offset(positive) from the specified duration.

If `date` argument is not provided, current date is considered and returns timestamp of the date.

### `Fusioncharts.Utils.parseDate('date in string representation', 'format', [isUTC])`

Converts the string representation to timestamp.

Example, 

```
let financialYearEnd = parseDate('2018-3-31', '%Y-%m-%d');
```

### `Fusioncharts.Utils.formatDate(timestamp, 'format', [isUTC])`

Converts the timestamp to an appropriate string representation.

Example, 

```
let dateStr = formatDate(1538131630636, '%d %B %Y'); //28 September 2018
```
