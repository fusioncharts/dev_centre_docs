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

In this article, we will apply all the above filter operations and check the result based on the DataTable shown below:

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

**Equals** is an operation which you can use to filter specific data values. In the above table, the Country column has three countries in it. To filter the data for United States, use the `equals` operator and set its value to United States.

**Equals** takes two arguments which are:

* Column name on which you want to apply the filter
* The specific value you want to filter.

The data structure to set the `equals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.equals('Country', 'United States');
var dataTable = dataT.query(filter1);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | United States | 5.94 | 3 | 0.95 

### Greater

**Greater** is an operation which you can use to filter data values greater than a specific numeric value. In the above table, the **Sales** column consists of numeric values. Let's apply the `greater` operator to filter the values greater than **100**.

**Greater** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values greater than 100, set the value of this argument to **100**.

The data structure to set the `greater` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.greater('Sales', 100);
var dataTable = dataT.query(filter1);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/26/2011 | India | 342.51 | 7 | 13.22 

### GreaterEquals

This operation is similar to `greater` filter which you can use to filter data values greater than a specific numeric value. Use `greaterEquals` operation when you want to filter the data values greater and equal to the specific value. In the above table, the **Quantity** column consists of numeric value. Let's apply the `greaterEquals` operator to filter the values greater and equal to **3**.

**GreaterEquals** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values greater and equal to 3, set the value of this argument to **3**.

The data structure to set the `greaterEquals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.greaterEquals('Quantity', 3);
var dataTable = dataT.query(filter1);
```

The new DataTable after running the above code looks like:

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

**Less** is an operation which you can use to filter the data values less than a specific numeric value. In the above table, the **Sales** column consists of numeric value. Let's apply the `less` operator to filter the values less than **100**.

**Less** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values less than 100, set the value of this argument to **100**.

The data structure to set the `less` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.less('Sales', 100);
var dataTable = dataT.query(filter1);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

### LessEquals

This operation is similar to `less` filter which can be used when you want to filter the data values less than a specific numeric value. `lessEquals` operation is used when you want to filter the data values less and equal to the specific value. In the above table, the **Quantity** column consists of numeric value. Let's apply the `lessEquals` operator to filter the values less than and equal to **3**.

**LessEquals** takes two arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values less than and equal to 3, set the value of this argument to **3**.

The data structure to set the `lessEquals` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.lessEquals('Quantity', 3);
var dataTable = dataT.query(filter1);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

### Between

**Between** is an operation which can be used when you want to filter the data between specific date/time or value. In the above table, the **Sales** column consists of numeric value. Let's apply the `between` operator to filter the values between **50** and **100**.

**Between** takes three arguments which are:

* Column name on which you want to apply the filter
* To render the chart by values from 50 to 100, set the value of the second argument to **50** and the third argument to **100**.

The data structure to set the `between` filter is shown below:

```
var filter1 = FusionCharts.DataStore.Operators.between('Sales', 50, 100);
var dataTable=dataT.query(filter1);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 79.38 | 3 | 13.82 

### Filter by Condition

Other than the above predefined filters, FusionTime gives an option to filter the data by condition.

Now, let's apply a conditional filter to the root table where all **United States** data and also data with **Sales** greater than **100** and **Shipping Cost** less than **10** will be selected.

To code to apply this filter to the above DataTable is given below:

```
var dataStore = new FusionCharts.DataStore();
var dataTable = dataStore.createDataTable(data, schema);

var filterQuery = FusionCharts.DataStore.Operators.filter((row, columns) => {
	return row[columns.Country] === 'United States' || 
	(row[columns.Sales] > 100 && row[columns.Shipping_Cost] < 10);
});

var filteredData = dataTable.query(filterQuery);
```

The new DataTable after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | United States | 5.94 | 3 | 0.95 