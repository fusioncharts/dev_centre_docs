---
title: Calculated Column | FusionCharts
description: This article outlines the steps how to render calculated column.
heading: Calculated Column
---

**A calculated column** is a column generated as a result of a mathematical expression applied to one or more columns in a `DataModel`. You can provide more than one mathematical expression on multiple columns of a `DataModel`. This will generate a new `DataModel` which will contain the existing and the calculated columns.

Let's take a basic example of tabular data in a DataModel.

| Month     | Revenues | Profits |
| --------- | -------- | ------- |
| January   | 16000    | 4000    |
| February  | 20000    | 5000    |
| March     | 18000    | 3000    |
| April     | 19000    | 4000    |
| May       | 15000    | 1000    |
| June      | 21000    | 7000    |
| July      | 16000    | 1000    |
| August    | 20000    | 4000    |
| September | 17000    | 1000    |
| October   | 22000    | 8000    |
| November  | 19000    | 2000    |
| December  | 23000    | 7000    |

In the above data, we have columns for **Month**, **Revenue** and **Profit**. The mathematical formula to calculate the **Profit %** is, **(Profit \*100) / Revenue**. To create a new column for **Profit %**, with the existing ones, refer to the code below:

```csharp
CalculatedColumns calculatedColumns = new CalculatedColumns {
   {"(Profit * 100) / Revenue","Profit %" }
};
DataModel resultModel = model.AddNewCalculatedColumns(calculatedColumns);
```

In the above code:

- `calculatedColumns` is an object which holds information of the data to be calculated.
- `model` is an object of the source DataModel.
- `resultModel` is the object which holds the resultant data.

The new data of the newly created **DataModel** after applying the above formula to the table is shown below:

| Month     | Revenues | Profits | Profit % |
| --------- | -------- | ------- | -------- |
| January   | 16000    | 4000    | 25       |
| February  | 20000    | 5000    | 25       |
| March     | 18000    | 3000    | 16.66    |
| April     | 19000    | 4000    | 21.05    |
| May       | 15000    | 1000    | 6.66     |
| June      | 21000    | 7000    | 33.33    |
| July      | 16000    | 1000    | 6.25     |
| August    | 20000    | 4000    | 25       |
| September | 17000    | 1000    | 5.88     |
| October   | 22000    | 8000    | 36.36    |
| November  | 19000    | 2000    | 10.52    |
| December  | 23000    | 7000    | 30.43    |

The code to dispose the `calculatedColumns` object is given below:

```csharp
calculatedColumn.Dispose();
```

In the above code, `calculatedColumn` is the object that holds the names of the columns created with the data derived via the mathematical expressions.

> If the column name of a table includes space, for example, `Order Date` provide it in the mathematical expression as `[Order Date]`.
