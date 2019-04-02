---
title: Calculated Column | FusionCharts
description: This article outlines the steps how to render calculated column.
heading: Calculated Column
---

A calculated column is a column generated as a result of a mathematical expression applied to one or more columns in a `DataModel`. You can provide more than one mathematical expression on multiple columns of a `DataModel`. This will generate a new `DataModel` which will contain the existing and the calculated columns.

#### Create

To create a new calculated column, refer to the code below:

```csharp
CalculatedColumns calculatedColumns = new CalculatedColumns {
    {"SellingPrice - (Cost * Unit)","Profit" },
    {"ExpiryYear - ManufactureYear","Validity" }
};
```

In the above code:

- `calculatedColumns` is an object of the `CalculatedColumns` class.
- "SellingPrice - (Cost \* Unit)" is the expression provided by the user. On program execution, it creates a new column "Profit" with the result of the expression, and generates a new DataModel with the resultant data. Note that "SellingPrice", "Cost", and "Unit" are all columns from `model`, the source `DataModel` object.
- "ExpiryYear - ManufactureYear" is the expression provided by the user. On program execution, it creates a new column "Validity", with the result of the expression, and generates a new DataModel with the resultant data. Note that "ManufactureYear" and "ExpiryYear" are both columns from `model`, the source `DataModel` object.

#### Get result in DataModel

The code to get the result from the steps mentioned in the previous section into the `DataModel` is given below:

```csharp
DataModel resultModel = model.AddNewCalculatedColumns(calculatedColumns);
```

In the above code:

- `model` is an object of the source DataModel.
- `AddNewCalculatedColumns(calculatedColumns)` is a method of the `model` object.

#### Dispose

The code to dispose the `calculatedColumns` object is given below:

```csharp
calculatedColumn.Dispose();
```

In the above code, `calculatedColumn` is the object that holds the names of the columns created with the data derived via the mathematical expressions.
