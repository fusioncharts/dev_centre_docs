---
title: Join Operations using Pipe | FusionCharts
description: This article outlines the steps to use Pipe.
heading: Join Operations Using Pipe
---

**Pipe** is an operation which lets you run two or more data operations in a sequence. Instead of applying multiple filters one by one to a `DataTable`, which creates multiple DataTable(s), you can combine them in one single step using **pipe** and apply to the **DataTable**. This creates only one DataTable.

Let's take a basic example of a DataTable shown below:

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

Now, let's add some operations to the above table:

* Apply the `equals` filter on **Country** column.

```
var filter1 = FusionCharts.DataStore.Operators.equals('Country', 'India');
```

* Apply the `greater` filter on **Quantity** column.

```
var filter2 = FusionCharts.DataStore.Operators.greater('Quantity', 3);
```

Once you are done with the above steps, apply `pipe` operation to run the above steps in sequence.

The `pipe` operation is applied as shown below:

```
filter1 = FusionCharts.DataStore.Operators.equals('Country', 'India');
filter2 = FusionCharts.DataStore.Operators.greater('Quantity', 3);
pipeDataTable = fusionTable.query(FusionCharts.DataStore.Operators.pipe(filter1, filter2));
```

The new DataTable after applying `pipe` operation is shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 342.51 | 7 | 13.22 