---
title: Export Grid | FusionGrid
description: This article talks about using column filters
heading: Data Export
---
# Export your Grid
Learn how to export all data rendered on your grid, use the method `export` to download all your grid data into a `CSV`, `JSON`, or `XLS` format file. 

## Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
Users can export their grids in two ways, the `full` mode or the `view` mode. 

`full` - exports all data is exported.
`view`- exports only the data (rows and columns) present in the current grid instance view. 

```json
gridInstance.export({
  format: "csv", // other options are "json" and "xls"
  mode: "full" // other option is "view"
});
```
