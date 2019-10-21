---
title: Pivot | FusionCharts.NET
description: This article outlines the steps how apply pivot to the data.
heading: Pivot
---

Pivot is an operation with which you can group data from one or more columns, and convert them into aggregated tables by "pivoting" (transposing/rotating) around unique values of a particular column (called the pivot column).

In FusionCharts.NET, when you apply to pivot on an object of the `DataModel` class, it creates a new object of the `DataModel` class with the result. You need to create the following:

* An object of the `GroupColumn` class and provide the names of the columns you want to group
* A second object of the `GroupColumn` class and provide the name of the pivot column
* An object of the `Aggregation` class and provide the aggregate function you want to use (i.e., `SUM`)

Let's apply pivot operation on the table given below:

| Order Date | Country       | Sales   | Quantity | Shipping Cost |
| ---------- | ------------- | ------- | -------- | ------------- |
| 1/22/2011  | Australia     | 59.724  | 6        | 27.43         |
| 1/22/2011  | United States | 125.248 | 3        | 3.64          |
| 1/23/2012  | Australia     | 6.318   | 1        | 1.77          |
| 1/24/2013  | Australia     | 110.808 | 3        | 9.92          |
| 1/23/2012  | United States | 40.08   | 6        | 4.31          |
| 1/22/2011  | India         | 59.25   | 5        | 4.27          |
| 1/24/2013  | United States | 5.94    | 3        | 0.95          |
| 1/23/2012  | India         | 79.38   | 3        | 13.82         |
| 1/24/2013  | India         | 342.51  | 7        | 13.22         |

The code to apply to pivot on the above table using the `Country` and `Order Date` columns, as well as `SUM` as the aggregation function performed on the `Sales` column, is given below:

```javascript
/* row field(s) of pivot table */ 
GroupColumn row = new GroupColumn {
    { "Country"}
};
/* this will be pivot column */
GroupColumn column = new GroupColumn();
column.Add("Order Date", GroupColumn.DateGrouping.YEAR);
/* aggregation function to be applied */
Aggregation aggregation = new Aggregation {
    { "Quantity",Aggregation.Function.SUM }
};
/* apply Pivot on an existing DataModel - i.e., model */
DataModel pivotModel = model.Pivot(row, column, aggregation);
```

After applying the pivot operation on the above table, the newly created table looks like shown below:

| Country       | 2011 | 2012 | 2013 |
| ------------- | ---- | ---- | ---- |
| Australia     | 6    | 1    | 3    |
| United States | 3    | 6    | 3    |
| India         | 5    | 3    | 7    |

In the above code:

* `row` is an object of the `GroupColumn` class, which is applied to the `Country` column.
* `column` is an object of the `GroupColumn` class, which adds the column `Order Date` from the data source to the table created after pivoting, and populates it with data grouped on the basis of years from `Order Date`. Note that `Order Date` is the pivot column in the above sample.
* `aggregation` is an object of the `Aggregation` class, which is applied to the `Quantity` column and accepts the value of a mathematical operator - `SUM`.