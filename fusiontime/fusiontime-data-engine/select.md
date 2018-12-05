---
title: Select | FusionCharts
description: This article outlines the steps to add select operation.
heading: Select
---

`Select` operation should be used only when you want to see few specific columns of the `DataTable`. You can use this operation to select one or more columns using different criteria as per your requirements. 

Note that when you use the `Select` operation on a `DataTable`, it will generate a child table with only the selected columns.

In the following example, you can see how data is selected from the `DataTable` using the fields `Country` and `Origin`.

Refer to the code given below:

```  
let fusionDataStore = new FusionCharts.DataStore();
let fusionTable = fusionDataStore.createDataTable(data, schema);
let selectedData = fusionTable.query(FusionCharts.DataStore.Operators.select(['Country', 'Origin']));
```