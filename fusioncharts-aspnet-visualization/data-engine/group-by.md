---
title: Group By | FusionCharts
description: GroupBy operation in FusionGrid groups identical rows of tabular data based on specified criteria. Check our article to know more about groupBy operation.
heading: Group By
---

## The code to group the above tabular data with respect to the Country and Quantity column is shown below:

**GroupBy** is used to group the identical rows of tabular data. For example, if a particular column has the same values in different rows, `groupBy` will group those rows.

When you apply `GroupBy` to a DataModel, it transforms it and creates a new DataModel.

Now, let's apply `groupBy` operation on the tabular data of a DataModel given below:

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

The code to group the above tabular data with respect to the **Country** and **Quantity** column is shown below:

```
GroupColumn columnData = new GroupColumn {
	"Country",
	"Quantity"
};

DataModel groupModel = model.GroupBy(columnData);
```

In the above code:

* **GroupColumn** is a class.
* **columnData** is the class object which holds information of the data to be grouped.
* **Country** and **Quantity** are the column names from the above tabular data.
* **DataModel** is a class.
* **groupModel** is the object which holds the resultant data.

The output after running the above code looks like:

Country | Quantity
---|---
Australia | 6
United States | 6 
Australia | 1 
United States | 3 
India | 3 
India | 1

If you want to perform `GroupBy` on a column of data type `DateTime`, you can use the `DateGrouping` enum of the class `GroupColumn`. Refer to the code below:

```
GroupColumn groupColumnSet = new GroupColumn {
	{"Country" },
	{"OrderDate",GroupColumn.DateGrouping.YEAR },
	{"city" },
	{"sales" },
	{"shippedDate",GroupColumn.DateGrouping.QUARTER }
};
```

In the above code:

`DateGrouping` is an enum of the type `GroupColumn.DateGrouping`. It accepts the following values:

* YEAR
* HALFYEAR
* QUARTER
* MONTH
* DATE
* HOUR
* MINUTE
* SECOND
* MILLISECOND
* NONE
