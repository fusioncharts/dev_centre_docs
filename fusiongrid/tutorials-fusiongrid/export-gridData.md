---
title: Export Grid | FusionGrid
description: This article talks about using column filters
heading: Data Export
---
# Export your Grid
Learn how to export all data rendered on your grid, use the method `export` to download all your grid data into a `CSV`, `JSON`, or `XLS` format file. 
Users can export their grids in two ways, the `full` mode or the `view` mode. 

`full` - exports all data is exported.
`view`- exports only the data (rows and columns) present in the current grid instance view. 

```json
gridInstance.export({
  format: "csv", // other options are "json" and "xls"
  mode: "full" // other option is "view"
});
```
## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server, and the server is running

## Code
The following is an example of a grid that enables the different export types.
```json
var schema = [
  { name: "Season" },
  { name: "DateTime", type: "datetime" },
  { name: "HomeTeam" },
  { name: "AwayTeam" },
  { name: "FTHG", type: "number" },
  { name: "FTAG", type: "number" }
];

var data = [
  ["1993-94", "1993-08-14T00:00:00Z", "Arsenal", "Coventry", 0, 3],
  ["1993-94", "1993-08-14T00:00:00Z", "Aston Villa", "QPR", 4, 1],
  ["1993-94", "1993-08-14T00:00:00Z", "Chelsea", "Blackburn", 1, 2],
  ["1993-94", "1993-08-14T00:00:00Z", "Liverpool", "Sheffield Weds", 2, 0],
  ["1993-94", "1993-08-14T00:00:00Z", "Man City", "Leeds", 1, 1],
  ["1993-94", "1993-08-14T00:00:00Z", "Newcastle", "Tottenham", 0, 1],
  ["1993-94", "1993-08-14T00:00:00Z", "Oldham", "Ipswich", 0, 3],
  ["1993-94", "1993-08-14T00:00:00Z", "Sheffield United", "Swindon", 3, 1],
  ["1993-94", "1993-08-14T00:00:00Z", "Southampton", "Everton", 0, 2],
  ["1993-94", "1993-08-14T00:00:00Z", "West Ham", "Wimbledon", 0, 2],
  ["1993-94", "1993-08-15T00:00:00Z", "Norwich", "Man United", 0, 2],
  ["1993-94", "1993-08-16T00:00:00Z", "Tottenham", "Arsenal", 0, 1],
  ["1993-94", "1993-08-17T00:00:00Z", "Everton", "Man City", 1, 0],
  ["1993-94", "1993-08-17T00:00:00Z", "Ipswich", "Southampton", 1, 0],
  ["1993-94", "1993-08-17T00:00:00Z", "Leeds", "West Ham", 1, 0],
  ["1993-94", "1993-08-17T00:00:00Z", "Wimbledon", "Chelsea", 1, 1],
  ["1993-94", "1993-08-18T00:00:00Z", "Blackburn", "Norwich", 2, 3],
  ["1993-94", "1993-08-18T00:00:00Z", "Coventry", "Newcastle", 2, 1],
  ["1993-94", "1993-08-18T00:00:00Z", "Man United", "Sheffield United", 3, 0],
  ["1993-94", "1993-08-18T00:00:00Z", "QPR", "Liverpool", 1, 3],
  ["1993-94", "1993-08-18T00:00:00Z", "Sheffield Weds", "Aston Villa", 0, 0],
  ["1993-94", "1993-08-18T00:00:00Z", "Swindon", "Oldham", 0, 1],
  ["1993-94", "1993-08-21T00:00:00Z", "Blackburn", "Oldham", 1, 0]
];
var container = document.getElementById("grid-container");
var dataStore = new FusionGrid.DataStore();
var dataTable = dataStore.createDataTable(data, schema, {
  enableIndex: false
});
var grid = new FusionGrid(container, dataTable, {
  columns: [
    {
      headerName: "Event",
      children: [
        {
          field: "Season"
        },
        {
          field: "DateTime"
        }
      ]
    },
    {
      headerName: "Teams",
      children: [
        {
          field: "HomeTeam"
        },
        {
          field: "AwayTeam"
        }
      ]
    }
  ],
  defaultColumnOptions: {
    searchable: true
  }
});
grid.render();

document.getElementById("csv-btn").addEventListener("click", () => {
  grid.export({ format: "csv" });
});

document.getElementById("json-btn").addEventListener("click", () => {
  console.log(grid.export({ format: "json" }));
});

document.getElementById("xls-btn").addEventListener("click", () => {
  grid.export({ format: "xls" });
});

document.getElementById("getCSVData-btn").addEventListener("click", () => {
  console.log(grid.getCSVData());
});

document.getElementById("mode-view-btn").addEventListener("click", () => {
  grid.export({ format: "csv", mode: "view" });
});

document.getElementById("no-skip-btn").addEventListener("click", () => {
  grid.export({ format: "csv", mode: "view", skipColumnHeaderGroups: false });
});
```

Based on the code above the grid will look as follows:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/yes496qj/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to export your grid, visit the [Methods](/fusiongrid/API_References/Fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.
