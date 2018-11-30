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

1. Apply the `greater` filter and set its value to **500**. 

2. Apply the `less` filter and set its value to **1000**. 

3. Apply `groupBy` on **OrderDate** column

4. Set the operation as `sum` on **Sales** column.

5. Once you are done with the above steps, use `pipe` operation to run the above steps in sequence.

The code snippet for the above steps is given below:

```
let dataStore = new DataStore(data, schema, { enableIndex: true, indexBy: 'OrderDate' }),

     defaultDT = dataStore.getDataTable();

   filter1 = greater('Sales', 500);

   filter2 = less('Sales', 1000);

   group1 = groupBy(

   [{

         column: 'OrderDate',

         timeUnit: DatetimeUnits.Month

   }],

   [{

         column: 'Sales',

         operation: 'sum',

         outputAs: 'Total_Sales'

    }]

   );

pipeDT = defaultDT.query(pipe(filter1, filter2, group1));

```

The chart after applying the **Pipe** operator looks like as shown below:

<Live Chart>