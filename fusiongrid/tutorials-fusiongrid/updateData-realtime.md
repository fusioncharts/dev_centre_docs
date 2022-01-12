---
title: Update data in real-time| FusionGrid
description: This article talks about using column filters
heading: Real-time Data Update
---

# Real-time Data Update
Update data in real-time using the method `appendRows` that updates all tables in your grid. 

## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
Use this method to add new rows or to update existing data.

```json
// using data store - to update row at index 13
dataTable.appendRows([[13, "Grand Cherokee - 2021", "Jeep", 245917, "Detroit, Mich."]]);

// using setRowData
gridInstance.setRowData([[13, "Grand Cherokee - 2021", "Jeep", 245917, "Detroit, Mich."]]);
```

