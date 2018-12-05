---
title: Filters | FusionCharts
description: This article outlines the steps to add filter operations.
heading: Filters
---

The `DataStore` comes with a set of operations that you can use to filter data values from a large dataset, based on one or more conditions. If you apply one of these operations on the `DataTable` it generates a new child table with the filtered data.

## Types of filters

The predefined filters are:

* Equals
* Greater
* GreaterEquals
* Less
* LessEquals
* Between

In this article, we will apply all the above filter operations and check the result based on the data table shown below:

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

### Equals

**Equals** is an operation which can be used when you want to filter specific data value. Let's assume that we have sales data from January 2015 to June 2016. Out of these values, you only want to visualize the sales data for a specific date. In this scenario, we have to use the `equals` operator which will render the chart using data plots for a particular date.

**Equals** takes two arguments which are:

* Column name on which you want to apply the filter
* The specific value you want to filter.

The data structure to set the `equals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.equals('Country', 'United States');
var dataTable = dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | United States | 5.94 | 3 | 0.95 

### Greater

**Greater** is an operation which can be used when you want to filter the data values greater than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values greater than 500. In this scenario, we have to use the `greater` filter which will render the chart using data plots with the value above 500.

**Greater** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values greater than 500, set the value of this argument to **500**.

The data structure to set the `greater` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.greater('Sales', 100);
var dataTable = dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/26/2011 | India | 342.51 | 7 | 13.22 

### GreaterEquals

This operation is similar to `greater` filter which can be used when you want to filter the data values greater than a specific numeric value. `greaterEquals` operation is used when you want to filter the data values greater or equal to the specific value.  Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values greater or equal to 500. In this scenario, we have to use the `greaterEquals` filter which will render the chart using data plots with the value above and equal to 500.

**GreaterEquals** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values greater and equal to 500, set the value of this argument to **500**.

The data structure to set the `greaterEquals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.greaterEquals('Quantity', 3);
var dataTable=dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22 

### Less

**Less** is an operation which can be used when you want to filter the data values less than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values less than 1000. In this scenario, we have to use the `less` filter which will render the chart using data plots with the value above 1000.

**Less** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values less than 1000, set the value of this argument to **1000**.

The data structure to set the `less` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.less('Sales', 100);
var dataTable = dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

### LessEquals

This operation is similar to `less` filter which can be used when you want to filter the data values less than a specific numeric value. `lessEquals` filter is used when you want to filter the data values less than or equal to the specific value.  Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values less than or equal to 500. In this scenario, we have to use the `Equals` filter which will render the chart using data plots with the value below and equal to 500.

**LessEquals** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values less than and equal to 500, set the value of this argument to **500**.

The data structure to set the `lessEquals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.lessEquals('Quantity', 3);
var dataTable = dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

### Between

**Between** is an operation which can be used when you want to render the chart using data between specific date/time or value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values from 500 to 1000. In this scenario, we have to use the `between` filter which will render the chart using data plots with the value from 500 to 1000.

**Between** takes three arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values from 500 to 1000, set the value of the second argument to **500** and the third argument to **1000**.

The data structure to set the `between` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.between('Sales', 50, 100);
var dataTable=dataT.query(filter1);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 79.38 | 3 | 13.82 

### Filter by condition

Other than the above predefined filters, FusionTime gives an option to filter the data by condition.

Now, let's apply a conditional filter to the root table where all **United States** data with **Sales** greater than **100** and **Shipping Cost** less than **10** will be filtered.

To code to apply this filter to the above data table is given below:

```
var dataStore = new FusionCharts.DataStore();
var dataTable = dataStore.createDataTable(data, schema);

var filterQuery = FusionCharts.DataStore.Operators.filter((row, columns) => {
	return row[columns.Country] === 'United States' || 
	(row[columns.Sales] > 100 && row[columns.Shipping_Cost] < 10);
});

var filteredData = dataTable.query(filterQuery);
```

The new data table after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 