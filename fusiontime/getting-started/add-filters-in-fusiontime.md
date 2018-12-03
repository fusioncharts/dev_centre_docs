---
title: Add Filters | FusionCharts
description: This article outlines the steps to add filters.
heading: Add Filters
---

Filters in FusionTime are predefined functions which help in filtering out some specific data you want to visualize in the chart. Some of the predefined filters in FusionTime are:

* Greater

* Less

* Between

## Greater

**Greater** is a filter which can be used when you want to filter the data values greater than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values greater than 500. In this scenario, we have to use the `greater` operator which will render the chart using data plots with the value above 500.

For better understanding, let's create a chart with no filters applied to it. For example, a chart showcasing online sales of SuperStore in the United States of America.

The chart is shown below:

<Live chart>

Now, let's apply the `greater` filter and set its value to **500**. The chart looks like as shown below:

<Live chart>

In the above chart, the rendered data plot's values are greater than **500**. The data structure to set the `greater` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.greater('Sales', 500);

var dataT_1 = dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* Set the `greater` filter using the `FusionCharts.DataStore` consturctor.

* Apply the filter to the `dataTable`. 

## Less

**Less** is a filter which can be used when you want to filter the data less than a specific numeric value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values less than 1000. In this scenario, we have to use the `less` filter which will render the chart using data plots with the value below 1000.

Let's apply the `less` filter to the above chart and set its value to **1000**. The chart looks like as shown below:

<Live chart>

In the above chart, the rendered data plot's values are less than **1000**. The data structure to set the `less` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.less('Sales', 100);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* Set the `less` filter using the `FusionCharts.DataStore` constructor.

* Apply the filter to the `dataTable`.

## Between

**Between** is a filter which can be used when you want to render the chart using data between specific date/time or value. Let's assume that we have data with values from 100 to 1500. Out of these values, you only want to visualize the values from 500 to 1000. In this scenario, we have to use the `between` filter which will render the chart using data plots with the value from 500 to 1000.

Let's apply the `between` filter to the above single series chart and set its value from 500 to 1000. The chart looks like as shown below:

<Live chart>

In the above chart, the rendered data plot's values are more than **500** but less than **1000**. The data structure to set the `between` filter is shown below:

```

var dataT= dataStore.getDataTable();

var filter1 = FusionCharts.DataStore.Operators.between('Sales', 500, 1000);

var dataT_1=dataT.query(filter1);

```

In the above code:

* Store the `dataTable` in a variable.

* Set the `between` filter using the `FusionCharts.DataStore` constructor.

* Apply the filter to the `dataTable`.

