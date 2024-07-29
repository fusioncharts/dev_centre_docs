---
title: Group By with Aggregation | FusionCharts
description: This article outlines the steps how apply group by data and apply aggregation
heading: Group By with Aggregation
---

In FusionCharts.Net, you can apply GroupBy and Aggregation operations to a DataModel at the same time.

## Let's apply both operations on the tabular data of a DataModel.

* Grouping to the Country column.

* SUM Aggregation function to the Sales column.

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

The code to apply grouping and aggregation function is shown below:

```

GroupColumn columnData = new GroupColumn { 

	"Country"

};

Aggregation aggregateSum = new Aggregation {

	"Sales", Aggregation.Function.SUM

};

DataModel totalSales = model.GroupingWithAggregation(columnData, aggregateSum);

```

In the above code:

* **GroupColumn** is a class.

* **columnData** is an object which holds information of the data to be grouped.

* **Country** is the column name from the above tabular data.

* **Aggregation** is a class.

* **aggregateSum** is the class object which holds information of the data to be aggregated.

* **Sales** is the column name on which the aggregation function will be applied.

* In `Aggregation.Function.SUM`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.

* **DataModel** is a class.

* **totalSales** is the object which holds the resultant data.

The output after running the above code looks like:

Country | Sales
--- | ---
Australia | 176.85
United States | 171.268
India | 481.14

