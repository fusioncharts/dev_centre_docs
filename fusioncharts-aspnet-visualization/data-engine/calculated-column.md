---
title: Calculated Column | FusionCharts
description: This article outlines the steps how to render calculated column.
heading: Calculated Column
---

A calculated column is a column generated as a result of a mathematical expression applied to one or more columns in a `DataModel`. You can provide more than one mathematical expression on multiple columns of a `DataModel`. This will generate a new `DataModel` which will contain the existing and the calculated columns.

#### Create

Suppose we have a `DataModel` with three columns in the table, **SellingPrice**, **Cost** and **Unit**. The mathematical formula to calculate the profit is, **SellingPrice - (Cost \* Unit)**. Result of this will be a new `DataModel` with four columns, **SellingPrice**, **Cost**, **Unit** and **Profit**.

To create a new column with the existing ones, refer to the code below:

```csharp
CalculatedColumns calculatedColumns = new CalculatedColumns {
    {"SellingPrice - (Cost * Unit)","Profit" }
};
DataModel resultModel = model.AddNewCalculatedColumns(calculatedColumns);
```

In the above code:

- `calculatedColumns` is an object which holds information of the data to be calculated.
- `model` is an object of the source DataModel.
- `resultModel` is the object which holds the resultant data.

#### Dispose

The code to dispose the `calculatedColumns` object is given below:

```csharp
calculatedColumn.Dispose();
```

In the above code, `calculatedColumn` is the object that holds the names of the columns created with the data derived via the mathematical expressions.
