---
title: FusionTime Methods | FusionCharts
description: This article contains the list of fusion time methods.
heading: Methods
---

## DataStore Methods

### `createDataTable(data, schema, config, id)`

Creates data table in the data store.

* **data:** 2D To add values to the DataTable you can provide the data in both JSON and 2D array format.

* **schema**: schema contains an array which has multiple objects created in it. Each object represents a column in the DataTable.

```
//Schema
[{
    "name": "Time", //Column Name
    "type": "date", //It can be text/number/date/interval
    "format": "%-m/%-d/%Y" //Suitable format for rows
    "enableUTC": "false" //Sets whether the time zone should be local or the one specified in the chart
}]
```

* **config:** It is an optional argument which contains indexing information,i.e., in which order data should be inserted in the table.

```
//Config
{
	"enableIndex": true, //default is true
	"indexBy": "columnName", //Column Name on which the indexing is applied
	"enableUTC": true/false 
}
```

* **id:** It is an optional string argument to provide a `unique id` of the table.

> The DataStore automatically sets the `id` of the data table, if the `id` is not provided.

### `appendRows([[],[]], id)`

Append rows in the data store. `appendRows` keeps on appending rows to the first data table of the DataStore.

> To append rows to a specific data table, specify the `id` of the table while calling the method. 

### `getDataTable(id)`

Fetches the data table from the DataStore to render the chart.

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

`query` method perform operations on the DataTable. It returns a new DataTable after performing an operation.

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

### `duration(Unit, number)`

Represents the time duration. Example, `2 hours`,  `3 months`, etc

* duration(Units.Hour, 2)
* duration(Units.Month, 3)

### `before(duration, [date], [enableUTC], [weekStartFrom])`

Returns a date offset(negative) from the specified duration.

If `date` argument is not provided, current date is considered and returns the timestamp of the date.

### `after(duration, [date], [enableUTC], [weekStartFrom])`

Returns a date offset(positive) from the specified duration.

If `date` argument is not provided, current date is considered and returns timestamp of the date.

### `parseDate('date in string representation', 'format', [enableUTC])`

Converts the string representation to timestamp.

Example, 

```
let financialYearEnd = parseDate('2018-3-31', '%Y-%m-%d');
```

### `formatDate(timestamp, 'format', [enableUTC])`

Converts the timestamp to an appropriate string representation.

Example, 

```
let dateStr = formatDate(1538131630636, '%d %B %Y'); //28 September 2018
```