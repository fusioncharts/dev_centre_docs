---
title: Sort Data | FusionCharts
description: This article outlines the steps to sort data.
heading: Sort Data
---

One of the major requirements while working with large sets of data is to sort the data in a specific order - most commonly, ascending or descending. 

For instance, you may need to plot revenues earned by a company over a number of years, in a descending order, so that you can quickly find out the most and least successful time periods in terms of revenue generation of the company. 

In another instance, you may have to analyze monthly temperature readings in a particular region and find out the coldest winter that region has experienced in the last 20 years or so. Sorting the data in ascending order is the quickest way to go about it. 

In this article we will discuss about the types of sorting and how to apply them.

## Types of Sort

In FusionTime, you can sort data in three ways - in the ascending order, in the descending order, or using a comparator function.

In this article, we will apply all the types of sort and check the result based on the DataTable shown below:

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

### Ascending Order

When you sort one or more columns in the `DataTable` in ascending order, the data will be arranged from the lowest to the highest values. By default, FusionTime sorts data in ascending order. 

The code to sort the above table with respect to the `Sales` column in ascending order is given below:

```
var sortQuery = sort([
	{column: 'Sales', order: 'asc'}	
]);

var sortedData = dataTable.query(customSortQuery);
```

The new DataTable after setting the `Sales` column in ascending order is shown below:

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

### Descending Order

When you sort one or more columns in the `DataTable` in descending order, the data will be arranged from the highest to the lowest values.

The code to sort the above table with respect to the `Sales` column in descending order is given below:		

```
var sortQuery = sort([
	{column: 'Sales', order: 'desc'}	
]);

var sortedData = dataTable.query(customSortQuery);
```

The new DataTable after setting the `Sales` column in descending order is shown below:

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

### Comparator Function

You can use the JavaScript comparator function to sort the data.

Let's assume you want to sort the above DataTable by the total profit in descending order, i.e., the highest sale will appear at the top of the table. The total profit is calculated using `(Sales * Quantity) - Shipping Cost` formula.

The code to apply this sorting to the above DataTable is given below:

```
var customSortQuery = FusionCharts.DataStore.Operators.sort((a, b) => {
  return ((b[2]*b[3]) - b[4]) - ((a[2]*a[3]) - a[4]);
}); // 0 based index of Sales, Quantity & Shipping cost are 2,3,4 respectively

var sortedData = dataTable.query(customSortQuery);
```

The new DataTable looks as shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|---  
1/26/2011 | India | 342.51 | 7 | 13.22
1/22/2011 | United States | 125.248 | 3 | 3.64
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/24/2011 | Australia | 110.808 | 3 | 9.92
1/24/2011 | India | 59.25 | 5 | 4.27  
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/22/2011 | Australia | 6.318 | 1 | 1.77