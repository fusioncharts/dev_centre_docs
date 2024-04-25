---
title: Select Top Records | FusionCharts
description: Utilize the TopRecords operation to extract a specific number of rows from the top of the data in the DataModel. Read our comprehensive article for details.
heading: Select Top Records
---

`TopRecords` operation should be used only when you want to extract the specific number of rows starting from the topmost row of the **data** in the `DataModel`.

Note that when you use the `TopRecords` operation on a `DataModel`, it will generate a new `DataModel` with only the selected rows of the data.

Let's take a basic example of a tabular data shown below:

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

In the above tabular data, `TopRecords` operation is applied as shown below:

```  
DataModel newModel = model.TopRecords(5);
```

The output after applying `TopRecords` operation is shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31
