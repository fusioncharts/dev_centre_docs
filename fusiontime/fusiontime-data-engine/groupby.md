---
title: GroupBy | FusionCharts
description: Master the GroupBy method in FusionTime to efficiently group and aggregate your time-series data. Upgrade your data analysis and visualization skills today!
heading: GroupBy
---

## In the code below:

**GroupBy** is used to group the rows that have the same values in one or more columns. For example, if a particular column has the same values in different rows, `groupBy` will arrange these rows in a group.

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

#### `column`

Name of the column from the DataTable created using [schema](/fusiontime/fusiontime-data-engine/overview).

#### `outputAs`

`outputAs` is an attribute used to rename the column on which `groupBy` has been applied. The renaming of the column reflects on the new dataTable created after `groupBy`.

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

If the `outputFormat` of the data is not specified, an example of a default date/time format is given below:

```javascript
unitDefaultFormats = {
	'Year': '%Y', // 2018
	'Month': '%b %Y', // Jan 2018
	'Day': '%b %d, %Y', // Jan 01, 2018
	'Hour': '%b %d, %Y %H hrs', // Jan 01, 2018 23 hrs
	'Minute': '%b %d, %Y %H:%M', // Jan 01, 2018 23:34
	'Second': '%b %d, %Y %H:%M:%S', // Jan 01, 2018 23:34:26
	'Millisecond': '%b %d, %Y %H:%M:%S:%L' // Jan 01, 2018 23:34:26:123
};
```

The detailed table specifing the date/time format, is given [here](/fusiontime/fusiontime-attributes#datetime-format).

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

### Aggregation Configuration

In the second argument of the groupBy method, you can apply the following attributes to each group of configuration:

#### `column`

Name of the column from theDataTablecreated using [schema](/fusiontime/fusiontime-data-engine/overview)..

#### `operation`

`operation` is an attribute which denotes the aggregation method to be applied on each created group. It accepts **string** value. The list of values accepted by this attribute are:

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

`outputAs` is an attribute which is used to rename the column, on which `groupBy` has been applied. The renaming of the column reflects in the new dataTable created after `groupBy`.

> If the `outputAs` is not applied, the column name will be **previous column name-operation**.

Now, lets apply `groupBy` operation to the DataTable given below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

The data structure to group the data is shown below:

```
var groupQuery = groupBy(
	[{
		column: 'Order Date', // Column to which groupBy has been applied
		timeUnit:FusionCharts.Utils.DatetimeUnits.Day
	}],
	[{
		column: 'Sales',
		operation: 'sum',
		outputAs: 'Total_Sales'
	}]
);
```

The new DataTable after running the above code looks like:

Order Date | Total_Sales
---|---
1/22/2011 | 191.29
1/24/2011 | 216.078
1/26/2011 | 421.89
