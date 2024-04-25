---
title: Pivot | FusionCharts
description: Discover the power of Pivot in transforming tabular expressions from rows to columns with step-by-step instructions. Uncover insights in our article today!
heading: Pivot
---

**Pivot** is an operator which converts one tabular expression into another - more specifically, from row to column level.

The syntax to apply pivot to the `DataTable` is given below:

```
FusionCharts.DataStore.Operators.pivot(groupConfigArr, pivotColumn, aggrConfigArr);
```

In the above code:

* `FusionCharts.DataStore.Operators` is the namespace in which `pivot` method resides.
* `pivot` is the method applied
* `groupConfigArr`, `pivotColumn` and `aggrConfigArr` are the arguments

Pivot method takes three arguments which are:

* An array of the group by configurations

* Name of the Pivot column.

* An array of the aggregation configurations

### Groupby Configuration

In the first argument of the `pivot` method, each group of configuration object can have the following attributes:

#### `column`

Name of the column from the DataTable created using [schema](/fusiontime/fusiontime-data-engine/overview).

#### `outputAs`

`outputAs` is an attribute used to rename the column on which `pivot` has been applied. The renaming of the column reflects on the new dataTable created after `pivot`.

> If `outputAs` is not applied, the column name remains the same as the previous `DataTable`.

#### `timeUnit`

This attribute is only applicable if you group on date/time. This attribute specifies how the date column should be grouped. For example, if you set `timeUnit` to **Month**, the grouping will be applied month wise. The **month** is one of the `DatetimeUnits` enum and not any random string.

`DateTimeUnits` is a separate enum of `FusionCharts.Utils`. DateTimeUnits consists of:

* Year
* Quarter
* Month
* Week
* Day
* Hour
* Minute
* Second
* Millisecond

> It is mandatory to set the unit using `timeUnit` attribute at the time of date/time grouping.

Refer to the code below:

```
column: 'OrderDate',
timeUnit: FusionCharts.Utils.DatetimeUnits.Month
```

#### `outputFormat`

`outputFormat` attribute is used to set the format of the column being grouped. To set the date/time format of the chart, set the value of `outputFormat` attribute as per your requirement.

If the `outputFormat` of the data is not specified, the default date/time format is as listed below:

<table>
	<tr>
		<th>DateTimeUnits</th>
		<th>Format</th>
		<th>Output Example</th>
	</tr>
	<tr>
		<td>`Year`</td>
		<td>%Y</td>
		<td>2018</td>
	</tr>
	<tr>
		<td>`Month`</td>
		<td>%b %Y</td>
		<td>Jan 2018</td>
	</tr>
	<tr>
		<td>`Day`</td>
		<td>%b %d, %Y</td>
		<td>Jan 01, 2018</td>
	</tr>
	<tr>
		<td>`Hour`</td>
		<td>%b %d, %Y %H hrs</td>
		<td>Jan 01, 2018 23 hrs</td>
	</tr>
	<tr>
		<td>`Minute`</td>
		<td>%b %d, %Y %H:%M</td>
		<td>Jan 01, 2018 23:34</td>
	</tr>
	<tr>
		<td>`Second`</td>
		<td>%b %d, %Y %H:%M:%S</td>
		<td>Jan 01, 2018 23:34:26</td>
	</tr>
	<tr>
		<td>`Millisecond`</td>
		<td>%b %d, %Y %H:%M:%S:%L</td>
		<td>Jan 01, 2018 23:34:26:123</td>
	</tr>
</table>

#### `startValue`

`startValue` attribute specifies the starting point of the binning. If you don't apply this attribute while grouping, the lowest available value is used as the starting point.

> `startValue` attribute is applicable only when you are applying grouping operation to date/time column.

#### `weekStartFrom`

`weekStartFrom` attributes specifies the **weekday** from where you want to start the week at the time of grouping. This attribute is applicable only when **weekly binning** is applied at the time of grouping.

`Weekdays` is a separate enum of `FusionCharts.Utils`. Weekdays consists of:

* Sunday
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday

#### `binSize`

As the name suggests, this attribute sets the size of the bin. The default value of this attribute is `1`.

> `binSize` attribute is applicable only when you are applying grouping operation to date/time column.

For example:

```
[{
	column: 'Import date',
	timeUnit: FusionCharts.Utils.DatetimeUnits.Week,
	weekStartsFrom: FusionCharts.Utils.Weekdays.Monday,
	binSize: 2,
	startValue: +new Date(2018/1/15),
	outputAs: 'Fortinightly sum of imports'
}],
```

In the above code, `binSize` attribute has been set to **2**, which means every bin has 2 weeks data (as the `timeUnit` has been set to `Week`). The bin calculation starts from `startValue` which has been set to a particular date.

## Pivot Column

This argument accepts the column name on which the Pivot operation will be applied.

## Aggregation Configuration

In the second argument of the groupBy method, you can apply the following attributes to each group of configuration:

#### `column`

Name of the column from the dataTable created using schema.

#### `operation`

`operation` is an attribute which applies the mathematical operation to the column on which it is applied. It accepts **string** value. The list of values accepted by this attribute are:

* sum

* avg

* count

* min

* max

* first

* last

* variance

* stddev

#### `outputAs`

`outputAs` is an attribute which is used to rename the column, on which `pivot` has been applied. The renaming of the column reflects in the new DataTable created after `pivot`.

> If the `outputAs` is applied, the column name will be **category name-outputAs value**.

> If the `outputAs` is not applied, the column name will be **category name-previous column name-operation**.

Now, lets apply `pivot` operation to the DataTable given below:

OrderID | Category Name | Customer Country | Customer Continent | Total Purchase Amount
---|---|---|---|---
10248 | Beverages | France | Europe | 168
10253 | Beverages | Brazil | South America | 704.8
10518 | Beverages | Mexico | North America | 3952.5
10250 | Condiments | Brazil | South America | 251.85
10251 | Condiments | France | Europe | 336
10262 | Condiments | USA | North America | 203.8
10252 | Confections | Belgium | Europe | 2591.95
10253 | Confections | Brazil | South America | 640
10332 | Confections | Canada | North America | 121.4

The data structure to apply `pivot` is shown below:

```
var pivotFn = pivot([
    {
    	column: 'Category Name',
    }],
    'Customer Continent',
    [{
        column: 'Total Purchase Amount',
        operation: 'sum'
    }
])
```

The new DataTable after running the above code looks like:

Category | Name	Europe | North America | South America
---|---|---|---
Beverages | 168 | 3952.5 | 704.8
Condiments | 336 | 203.8 | 251.85
Confections | 2591.95 | 121.4 | 640
