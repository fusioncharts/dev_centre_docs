---
title: Order By | FusionCharts
description: Discover essential sorting techniques for large datasets in our comprehensive article! Learn to arrange data in ascending or descending order with Order By.
heading: Order By
---

One of the major requirements while working with large sets of data is to sort the data in a specific order - most commonly, ascending or descending. 

For instance, you may need to plot revenues earned by a company over a number of years, in a descending order, so that you can quickly find out the most and least successful time periods in terms of revenue generation of the company. 

In another instance, you may have to analyze monthly temperature readings in a particular region and find out the coldest winter that region has experienced in the last 20 years or so. Sorting the data in ascending order is the quickest way to go about it. 

In this article we will discuss about the types of sort and how to apply them.

## Types of Sort

In FusionCharts.Net, you can sort data in two ways - in the ascending order, or in the descending order.

In this article, we will apply all the types of sort and check the result based on the tabular data shown below:

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

## Ascending Order

When you sort one or more columns of a tabular data in ascending order, the data will be arranged from the lowest to the highest values. FusionCharts.Net by default sorts data in ascending order. 

The code to sort the above tabular data with respect to the **Sales** column in ascending order is given below:

```
SortColumn columnData = new SortColumn {
  	{
  		"Sales",SortColumn.Order.ASC
  	}
};
DataModel newModel = model.OrderBy(columnData);
```

The new data after setting the `Sales` column in ascending order is shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|---  
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/26/2011 | India | 79.38 | 3 | 13.82 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/22/2011 | United States | 125.248 | 3 | 3.64
1/26/2011 | India | 342.51 | 7 | 13.22

## Descending Order

When you sort one or more columns of a tabular data in descending order, the data will be arranged from the highest to the lowest values.

The code to sort the above table with respect to the `Sales` column in descending order is given below:		

```

SortColumn columnData = new SortColumn

 {

  	{"Sales",SortColumn.Order.DESC }

 };

DataModel newModel = model.OrderBy(columnData);

```

The new data after setting the `Sales` column in descending order is shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|---  
1/26/2011 | India | 342.51 | 7 | 13.22
1/22/2011 | United States | 125.248 | 3 | 3.64
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | United States | 5.94 | 3 | 0.95 

