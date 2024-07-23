---
title: Pagination | FusionCharts
description: Extract data only from a specific page and return the resultant data into another instance of the DataModel.
heading: Pagination
---

Extract data only from a specific page and return the resultant data into another instance of the `DataModel`.

## Set page size

The code to set the page size is given below:

```csharp
model.PageSize = 15;
```

In the above code, the value of `PageSize` property of the `model` object is set to 15. When displayed in tabular form, this DataModel will only be able to show 15 items per page.

#### Get records from specific page

The code to get records from specific pages is given below:

```csharp
DataModel dataModel = model.GetItemsFromPages(2, 3);
```

In the above code:

- `model` is an object of the source DataModel.
- `GetItemsFromPages(int, int)` is a method of the `model` object. It extracts records only from pages 2 and 3.
