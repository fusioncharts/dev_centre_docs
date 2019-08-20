---
title: Configure GroupBy | FusionCharts
description: This article outlines the steps to configure GroupBy.
heading: GroupBy
---

**GroupBy** in FusionTime is used to group rows that have the same values. It is used to arrange identical data into groups, i.e. if a particular column has the same values in different rows, `groupBy` will arrange these rows in a group.

For better understanding, let's create a chart without grouping. For example, a chart showcasing online sales of SuperStore in the United States of America.

The chart is shown below:

{% embed_ftChart online-sales-single-series %}

Now, let's apply `groupBy` to the above chart.

FusionTime uses columns and rows as dataTable to feed data to the chart. In the above sample, we have three columns **Order Date**, **Country**, and **Sales**.

The code to apply the `groupBy` is given below:

```javascript
var dataT= dataStore.getDataTable();
    var group1 = FusionCharts.DataStore.Operators.groupBy(
        [{
            column: 'OrderDate',
            timeUnit: FusionCharts.DataStore.DatetimeUnits.Month
        }],
        [{
            column: 'Sales',
            operation: 'sum',
            outputAs: 'Total_Sales'
        }]
    );
    var dataT_1=dataT.query(group1);
```

In the above code:

* Store the DataTable in a variable.

* Apply the column name on which the grouping will take place.

* In the same object, set the unit in which you want the data to be grouped. In the above sample, the grouping is done on monthly basis.

* Next, set the column on which you want to apply the operation. In this case, the **sum** operation is applied to the **Sales** column. This will calculate the sum of the grouped values.

* In the next step, the above operation is applied to the dataTable and the chart will be rendered using it.
