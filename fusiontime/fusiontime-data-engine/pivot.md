---
title: Pivot | FusionCharts
description: This article outlines the steps to add pivot.
heading: Pivot
---

**Pivot** is an operator which converts one tabular expression into another - more specifically, from row to column level. `Pivot` is an operator which converts one tabular expression into another - more specifically, from row to column level. The columns are converted to rows only if it is handled in a better way.

Example,
In most of the data tables, **rows** are Records and **columns** are fields. Let's take a basic example of a data table shown below:

Name | Age | Height | Weight
---|---|---|---
Liza | 28 | 175 | 67
David | 24 | 182 | 78
Alex | 31 | 172 | 70

In the above table, each column represents a particular detail of persons. Selecting a particular column gives you that particular detail of every person. Here, column is a `dimension` with all the values of same unit.

Now, let's take an example of a financial data showing **Monthly Sales and Profit data**.

Item | Jan | Feb | Mar
---|---|---|---
Sales | 4000 | 3100 | 5500
Profit | 1500 | 900 | 2100

The above data table has column showing time but with monetary values. The calculation using these columns may create conflicts

Let's apply **Pivot** to the above table.

Date | Sales | Profit
---|---|---
Jan | 4000 | 1500
Feb | 3100 | 900
Mar | 5500 | 2100

Now, in the above table date column has all dates and the others have monetary value. This is how Pivot works and is applied to the data table.

Applying `Pivot` to a `DataTable` transforms the grouping of a particular column into multiple columns.

The syntax to apply pivot to the `DataTable` in the DataStore is given below:

```
FusionCharts.DataStore.Operators.pivot(groupConfigArr, pivotColumn, aggrConfigArr);
```

In the above code:

* `FusionCharts.DataStore.Operators` is the namespace in which `pivot` method resides.
* `pivot` is the method applied
* `groupConfigArr`, `pivotColumn` and `aggrConfigArr` are the arguments

Pivot method takes three arguments which are:

* An array of the group by configurations

* Name of the Column on which you want to apply the pivot method

* An array of the aggregation configurations

## Group by Configuration

This argument is the same as of [groupBy]({% site.baseurl %}/fusiontime/fusiontime-data-engine/groupby) method. It is used to arrange identical data into groups of a table. In the first argument, each group of configuration object can have the following attributes:

### column

Name of the column from the dataTable created using [schema]({% site.baseurl %}/fusiontime/fusiontime-data-engine/overview).

### outputAs

`outputAs` is an attribute which is used to rename the column on which groupBy has been applied. The renaming of the column reflects on the new dataTable created after groupBy.

> The `outputAs` is not applied, the column name remains the same as the previous `DataTable`.

The new column name becomes:

```
[columnName-operation]
```

### timeUnit

This attribute is only applicable if you group on date/time. This attribute specifies how the date column should be grouped. For example, if you set `timeUnit` to **Month**, the grouping will be applied month wise. The **month** is one of the `DatetimeUnits` enum and not any random string.

`DateTimeUnits` is a separate enum of `FusionCharts.DataStore`. DateTimeUnits consists of:

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

Syntax to apply `timeUnit` attribute is:

```
column: 'OrderDate',
timeUnit: FusionCharts.DataStore.DatetimeUnits.Month
```

`outputFormat` attribute is used to set the format of the column being grouped. To set the date/time format of the chart, set the value of `outputFormat` attribute as per your requirement.

List of predefined date/time format is given below:

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
		<td>%b %d %Y</td>
		<td>Jan 01 2018</td>
	</tr>
	<tr>
		<td>`Hour`</td>
		<td>%b %d %Y %H hrs</td>
		<td>Jan 01 2018 23 hrs</td>
	</tr>
	<tr>
		<td>`Minute`</td>
		<td>%b %e, %Y %H:%M</td>
		<td>Jan 01, 2018 23:34</td>
	</tr>
	<tr>
		<td>`Second`</td>
		<td>%b %e, %Y %H:%M:%S</td>
		<td>Jan 01, 2018 23:34:26</td>
	</tr>
	<tr>
		<td>`Millisecond`</td>
		<td>%b %e, %Y %H:%M:%S:%L</td>
		<td>Jan 01, 2018 23:34:26:123</td>
	</tr>
</table>

### startValue

`startValue` attribute specifies the starting point of the binning. If you don't apply this attribute while grouping, the lowest available value is used as the starting point.

> `startValue` attribute is applicable only when you are applying grouping operation to date/time column.

### weekStartFrom

`weekStartFrom` attributes specifies the **weekday** from where you want to start the week at the time of grouping. This attribute is applicable only when **weekly binning** is applied at the time of grouping.

`WeekDays` is a separate enum of `FusionCharts.DataStore`. Weekdays consists of:

* Sunday
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday

### binSize

As the name suggests, this attribute sets the size of the bin. The default value of this attribute is `1`.

> `binSize` attribute is applicable only when you are applying grouping operation to date/time column.

For example:

```
[{
	column: 'Import date',
	timeUnit: DatetimeUnits.Week,
	weekStartsFrom: Weekdays.Monday,
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

#### Column

Name of the column from the dataTable created using schema.

#### outputAs

`outputAs` is an attribute which is used to rename the column, on which `groupBy` has been applied. The renaming of the column reflects in the new dataTable created after `groupBy`.

> If the `outputAs` is not applied, the column name remains the same as the previous `DataTable`.

#### operation

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