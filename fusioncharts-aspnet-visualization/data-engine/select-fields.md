---
title: Select Fields | FusionCharts
description: Optimize your data analysis by selecting specific columns from tabular data with the Select operation in DataModel. Check out the article to discover more!
heading: Select Fields
---

`Select` operation should be used only when you want to extract a few specific columns from the tabular **data** in the `DataModel`.

Note that when you use the `Select` operation on a `DataModel`, it will generate a new `DataModel` with only the selected columns in the data.

## Let's take a basic example of a  tabular data in a DataModel.

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

In the above data, `select` operation is applied as shown below:

```  
DataModel newModel = model.SelectColumns("Country","Sales");
```

The new data of the **DataModel** after applying `select` operation is shown below:

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
