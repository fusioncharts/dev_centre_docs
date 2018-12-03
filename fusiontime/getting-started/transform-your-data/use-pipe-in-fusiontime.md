---
title: Use Pipe | FusionCharts
description: This article outlines the steps to use Pipe.
heading: Use Pipe
---

**Pipe** is an operation which lets you run two or more data operations in a sequence. Instead of applying multiple filters one by one to a `DataTable`, you can combine them in one single step using **pipe** and apply to the** **DataTable. 

For better understanding, let's create a chart with the default data. For example, a chart showcasing online sales of SuperStore in the United States of America.

The chart is shown below:

{% embed_ftChart online-sales-single-series %}

Now, let's add some operations to the above chart. Follow the steps given below:

1. Apply the `equals` filter and set its value to **India**.

2. Apply the `greater` filter and set its value to **500**.

3. Once you are done with the above steps, use `pipe` operation to run the above steps in sequence.

The chart after applying the **Pipe** operator looks like as shown below:

{% embed_ftChart getting-started-filter-pipe %}

The code to render the above chart is given below:

```
//Pipe Operation Applied to the data table in the Data Store
const dataStore = new FusionCharts.DataStore(data, schema, {enableIndex: true}),
defaultDT = dataStore.getDataTable();
filter1 = FusionCharts.DataStore.Operators.equals('Country', 'India');
filter2 = FusionCharts.DataStore.Operators.greater('Sales', 500);
pipeDT = defaultDT.query(FusionCharts.DataStore.Operators.pipe(filter1, filter2));

new FusionCharts({
    type: 'timeseries',
    renderAt: 'container',
    width: 1000,
    height: 650,
    dataSource: {
        data: pipeDT,
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in India'
        }
    }
}).render()  
```

In the above code:

* Store the `dataTable` in a variable.
* Set the `equals` filter using the `FusionCharts.DataStore` constructor and store it in a variable.
* Set the `greater` filter using the `FusionCharts.DataStore` consturctor and store it in a variable.
* Set the `pipe` operation to run the above filters in sequence.
* Apply the filter to the `dataTable`.