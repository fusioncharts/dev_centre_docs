---
title: Sort data | FusionCharts
description: This article outlines the steps to sort data.
heading: Sort data
---

When you work with large sets of time-based data, one of the major requirements you might face is to sort the data in a specific order - most commonly, ascending or descending. For instance, you may need to plot revenues earned by a company over a number of years, in a descending order, so that the viewer can quickly find out the most and least successful time periods of the company. 

In another instance, you may have to analyze monthly temperature readings in a particular region and find out the coldest winter that region has experienced in the last 20 years or so. Sorting the data in ascending order and building a chart with it is the quickest way to go about it. 

## Types of Sort

In FusionTime, you can sort data in three ways - in the ascending order, in the descending order, or using a comparator function. Here we will discuss these in detail.

**Ascending order** - When you sort one or more columns in the data table in ascending order, the data will be arranged from the lowest to the highest values. FusionTime by default sorts data in ascending order.

**Descending order** - When you sort one or more columns in the data table in descending order, the data will be arranged from the highest to the lowest values.

**Comparator function** - When you use a JavaScript comparator function, it defines the sort order.

Refer to the code samples given below:

```
var sortQuery = sort([
	{column: 'Horsepower'}, //by default is ascending
	{column: 'Mile_Per_Gallon', order: 'desc'}	
]);
```