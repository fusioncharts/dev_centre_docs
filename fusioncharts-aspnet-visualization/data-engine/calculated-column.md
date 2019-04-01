---
title: Calculated Column | FusionCharts
description: This article outlines the steps how to render calculated column.
heading: Calculated Column
---

A calculated column is a column generated with the result of a mathematical expression applied to one or more columns in a DataModel. An end user can provide more than one mathematical expression, for which a new calculated column will be generated every time. Note that whenever a method is invoked to generate one or more calculated columns, a new DataModel is generated with the calculated columns.

#### Create an instance of `CalculatedColumns`

To create a new calculated column, you need to create an instance of the `CalculatedColumns` class. Refer to the code given below:

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

#### Dispose the `calculatedColumns` instance

The code to dispose the `calculatedColumns` object is given below:

```csharp
calculatedColumn.Dispose();
```

In the above code, `calculatedColumn` is the object that holds the names of the columns created with the data derived via the mathematical expressions.
