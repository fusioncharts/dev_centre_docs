---
title: Select | FusionCharts
description: Utilize the Select operation to display specific columns of the DataTable. Explore our article and discover more about the Select operation on the Data Table.
heading: Select
---

## Let's take a basic example of a DataTable shown below:

`Select` operation should be used only when you want to see few specific columns of the `DataTable`. You can use this operation to select one or more columns using different criteria as per your requirements. 

Note that when you use the `Select` operation on a `DataTable`, it will generate a child table with only the selected columns.

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

In the above table, `select` operation is applied as shown below:

```  
let fusionDataStore = new FusionCharts.DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);
let selectedData = fusionTable.query(FusionCharts.DataStore.Operators.select(['Country', 'Sales']));
```

The new DataTable after applying `select` operation is shown below:

Country | Sales
---|---
Australia | 59.724
United States | 125.248 
Australia | 6.318
Australia | 110.808 
United States | 40.08 
India | 59.25
United States | 5.94 
India | 79.38
India | 342.51
