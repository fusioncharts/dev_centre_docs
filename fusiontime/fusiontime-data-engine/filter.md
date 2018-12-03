---
title: Filters | FusionCharts
description: This article outlines the steps to add filter operations.
heading: Filters
---

The data engine comes with a set of operations that you can use to filter a set of data values from a large dataset, based on one or more conditions. If you apply one of these on the master `DataTable`, which in turn will generate a new child table with the filtered data, and then render the chart using the child table.

## Types of filters

Filters support different types of data values - while you can apply some to columns with any data type, there are some that only support specific kinds of data, such as number or date. The available filters are:

* Equals

* Greater

* Greater or Equals

* Lesser

* Lesser or Equals

* Between

You can find more details about these filters, given below:

### Equals

**Equals** is an operation which can be used when you want to filter specific data value. Let's assume that we have sales data from January 2015 to June 2016. Out of these values, you only want to visualize the sales data for a specific date. In this scenario, we have to use the `equals` operator which will render the chart using data plots for a particular date.

The data structure to set the `equals` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.equals('Date', 21/06/2015);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `equals` filter resides.

* Apply the filter to the `dataTable`.

**Equals** take two arguments which are:

* Column name on which you want to apply the filter

* The specific value with respect to which you want the chart to be created.

### Greater

**Greater** is an operation which can be used when you want to filter the data values greater than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values greater than 500. In this scenario, we have to use the `greater` filter which will render the chart using data plots with the value above 500.

The data structure to set the `greater` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.greater('Sales', 500);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `greater` filter resides.

* Apply the filter to the `dataTable`.

**Greater** takes two arguments which are:

* Column name on which you want to apply the filter

* To render the chart by values greater than 500, set the value of this argument to **500**.

### Greater or Equals

This operation is similar to `greater` filter which can be used when you want to filter the data values greater than a specific numeric value. `greaterOrEquals` operation is used when you want to filter the data values greater or equal to the specific value.  Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values greater or equal to 500. In this scenario, we have to use the `greaterOrEquals` filter which will render the chart using data plots with the value above and equal to 500.

The data structure to set the `greater` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.greaterOrEquals('Sales', 500);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `greaterOrEquals` filter resides.

* Apply the filter to the `dataTable`.

**GreaterOrEquals** takes two arguments which are:

* Column name on which you want to apply the filter

* To render the chart by values greater and equal to 500, set the value of this argument to **500**.

### Lesser

**Lesser** is an operation which can be used when you want to filter the data values less than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values less than 1000. In this scenario, we have to use the `lesser` filter which will render the chart using data plots with the value above 1000.

The data structure to set the `lesser` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.less('Sales', 1000);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `lesser` filter resides.

* Apply the filter to the `dataTable`.

**Lesser** takes two arguments which are:

* Column name on which you want to apply the filter

* To render the chart by values less than 1000, set the value of this argument to **1000**.

### Lesser or Equals

This operation is similar to `lesser` filter which can be used when you want to filter the data values less than a specific numeric value. `greaterOrEquals` filter is used when you want to filter the data values less than or equal to the specific value.  Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values less than or equal to 500. In this scenario, we have to use the `lesserOrEquals` filter which will render the chart using data plots with the value below and equal to 500.

The data structure to set the `lesser` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.lessOrEquals('Sales', 500);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `lesserOrEquals` filter resides.

* Apply the filter to the `dataTable`.

**LesserOrEquals** takes two arguments which are:

* Column name on which you want to apply the filter

* To render the chart by values less than and equal to 500, set the value of this argument to **500**.

### Between

**Between** is an operation which can be used when you want to render the chart using data between specific date/time or value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values from 500 to 1000. In this scenario, we have to use the `between` filter which will render the chart using data plots with the value from 500 to 1000.

The data structure to set the `between` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.between('Sales', 500, 1000);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* `FusionCharts.DataStore.Operators` is the namespace in which `between` filter resides.

* Apply the filter to the `dataTable`.

**Between** takes three arguments which are:

* Column name on which you want to apply the filter

* To render the chart by values from 500 to 1000, set the value of the second argument to **500** and the third argument to **1000**.

You can see an example with multiple filters, given below. In this example, the filters `equals`, `between`, 'greater or equals`, and `lesser or equals` have been applied to a `DataTable`, to return results where:

* The value of `country` equals "USA".

* The value of `date` is greater than or equals to `Last 7 days from today`, as well as lesser than or equals to `Current date`.

Refer to the code given below:

<CODE>

