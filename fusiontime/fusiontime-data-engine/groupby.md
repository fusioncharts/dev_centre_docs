---
title: GroupBy | FusionCharts
description: This article outlines the steps to groupby.
heading: GroupBy
---

`GroupBy` is used to group the rows that have the same values in one or more columns. For example, if a particular column has the same values in different rows, `groupBy` will arrange these rows in a group.

When you apply `groupBy` into a `DataTable`, it transforms the data and creates a new `DataTable`. The syntax to apply groupBy to the `DataTable` in the DataStore is given below:

```
FusionCharts.DataStore.Operators.groupBy(groupConfigArr, aggrConfigArr);
```

In the above code:

* `FusionCharts.DataStore.Operators` is the namespace in which `groupBy` method resides.
* `groupBy` is the method applied
* `groupConfigArr` and `aggrConfigArr` are the arguments

GroupBy method takes two arguments which are:

* An array of the group by configurations.

* An array of the aggregation configurations.

### Groupby Configuration

In the first argument of the `groupBy` method, each group of configuration object can have the following attributes:

#### Column

Name of the column from the dataTable created using [schema]({% site.baseurl %}/fusiontime/fusiontime-data-engine/overview).

#### outputAs

`outputAs` is an attribute used to rename the column on which `groupBy` has been applied. The renaming of the column reflects on the new dataTable created after `groupBy`.

> If `outputAs` is not applied, the column name remains the same as the previous `DataTable`.

The new column name becomes:

```
[columnName-operation]
```

#### timeUnit

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

Refer to the code below:

```
column: 'OrderDate',
timeUnit: FusionCharts.DataStore.DatetimeUnits.Month
```

#### outputFormat

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

#### startValue

`startValue` attribute specifies the starting point of the binning. If you don't apply this attribute while grouping, the lowest available value is used as the starting point.

> `startValue` attribute is applicable only when you are applying grouping operation to date/time column.

#### weekStartFrom

`weekStartFrom` attributes specifies the **weekday** from where you want to start the week at the time of grouping. This attribute is applicable only when **weekly binning** is applied at the time of grouping.

`WeekDays` is a separate enum of `FusionCharts.DataStore`. Weekdays consists of:

* Sunday
* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday

#### binSize

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

### Aggregation Configuration

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