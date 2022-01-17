---
title: Row Sorting | FusionGrid
description: This article talks about using row sorting
heading: Row Sorting
---

# Row Sorting
For a faster way of analyzing and grouping relevant data, Fusiongrid allows users to sort columns in ascending and descending order. 
To enable this feature on your grid include the property 'sortable' and set it to 'true', see the below syntax for reference:
```json
config = {
	columns: [{
		field: 'country_name',
            sortable: {
                enable: true/false
            }
      }]
};
```



## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
The following are examples of different sorting configuration.

```json
var schema = [
  { name: "Season" },
  { name: "DateTime", type: "datetime" },
  { name: "HomeTeam" },
  { name: "AwayTeam" },
  { name: "FTHG", type: "number" },
  { name: "FTAG", type: "number" },
  { name: "FTR" }
];

var data = [
  ["1993-94", "1993-08-14T00:00:00Z", "Arsenal", "Coventry", 0, 3, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Aston Villa", "QPR", 4, 1, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Chelsea", "Blackburn", 1, 2, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Liverpool", "Sheffield Weds", 2, 0, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Man City", "Leeds", 1, 1, "D"],
  ["1993-94", "1993-08-14T00:00:00Z", "Newcastle", "Tottenham", 0, 1, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Oldham", "Ipswich", 0, 3, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Sheffield United", "Swindon", 3, 1, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Southampton", "Everton", 0, 2, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "West Ham", "Wimbledon", 0, 2, "A"],
  ["1993-94", "1993-08-15T00:00:00Z", "Norwich", "Man United", 0, 2, "A"],
  ["1993-94", "1993-08-16T00:00:00Z", "Tottenham", "Arsenal", 0, 1, "A"],
  ["1993-94", "1993-08-17T00:00:00Z", "Everton", "Man City", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Ipswich", "Southampton", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Leeds", "West Ham", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Wimbledon", "Chelsea", 1, 1, "D"],
  ["1993-94", "1993-08-18T00:00:00Z", "Blackburn", "Norwich", 2, 3, "A"],
  ["1993-94", "1993-08-18T00:00:00Z", "Coventry", "Newcastle", 2, 1, "H"],
  [
    "1993-94",
    "1993-08-18T00:00:00Z",
    "Man United",
    "Sheffield United",
    3,
    0,
    "H"
  ],
  ["1993-94", "1993-08-18T00:00:00Z", "QPR", "Liverpool", 1, 3, "A"],
  [
    "1993-94",
    "1993-08-18T00:00:00Z",
    "Sheffield Weds",
    "Aston Villa",
    0,
    0,
    "D"
  ],
  ["1993-94", "1993-08-18T00:00:00Z", "Swindon", "Oldham", 0, 1, "A"],
  ["1993-94", "1993-08-21T00:00:00Z", "Blackburn", "Oldham", 1, 0, "H"]
];

var container = document.getElementById("grid-container");
var dataStore = new FusionGrid.DataStore();
var dataTable = dataStore.createDataTable(data, schema, {
  enableIndex: false
});
var grid = new FusionGrid(container, dataTable, {
  defaultColumnOptions: {
    sortable: true
  }
});
grid.render();
```

Notice in the example below that upon the first click, the column is sorted in ascending order, a second click sorts the column to descending order and a third click clearls the sorting. 
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/umt8v9o1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Or you can also configure your columns to sort with sort methods.
```json
var schema = [
  { name: "Season" },
  { name: "DateTime", type: "datetime" },
  { name: "HomeTeam" },
  { name: "AwayTeam" },
  { name: "FTHG", type: "number" },
  { name: "FTAG", type: "number" },
  { name: "FTR" }
];

var data = [
  ["1993-94", "1993-08-14T00:00:00Z", "Arsenal", "Coventry", 0, 3, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Aston Villa", "QPR", 4, 1, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Chelsea", "Blackburn", 1, 2, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Liverpool", "Sheffield Weds", 2, 0, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Man City", "Leeds", 1, 1, "D"],
  ["1993-94", "1993-08-14T00:00:00Z", "Newcastle", "Tottenham", 0, 1, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Oldham", "Ipswich", 0, 3, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "Sheffield United", "Swindon", 3, 1, "H"],
  ["1993-94", "1993-08-14T00:00:00Z", "Southampton", "Everton", 0, 2, "A"],
  ["1993-94", "1993-08-14T00:00:00Z", "West Ham", "Wimbledon", 0, 2, "A"],
  ["1993-94", "1993-08-15T00:00:00Z", "Norwich", "Man United", 0, 2, "A"],
  ["1993-94", "1993-08-16T00:00:00Z", "Tottenham", "Arsenal", 0, 1, "A"],
  ["1993-94", "1993-08-17T00:00:00Z", "Everton", "Man City", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Ipswich", "Southampton", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Leeds", "West Ham", 1, 0, "H"],
  ["1993-94", "1993-08-17T00:00:00Z", "Wimbledon", "Chelsea", 1, 1, "D"],
  ["1993-94", "1993-08-18T00:00:00Z", "Blackburn", "Norwich", 2, 3, "A"],
  ["1993-94", "1993-08-18T00:00:00Z", "Coventry", "Newcastle", 2, 1, "H"],
  [
    "1993-94",
    "1993-08-18T00:00:00Z",
    "Man United",
    "Sheffield United",
    3,
    0,
    "H"
  ],
  ["1993-94", "1993-08-18T00:00:00Z", "QPR", "Liverpool", 1, 3, "A"],
  [
    "1993-94",
    "1993-08-18T00:00:00Z",
    "Sheffield Weds",
    "Aston Villa",
    0,
    0,
    "D"
  ],
  ["1993-94", "1993-08-18T00:00:00Z", "Swindon", "Oldham", 0, 1, "A"],
  ["1993-94", "1993-08-21T00:00:00Z", "Blackburn", "Oldham", 1, 0, "H"]
];

var container = document.getElementById("grid-container");
var dataStore = new FusionGrid.DataStore();
var dataTable = dataStore.createDataTable(data, schema, {
  enableIndex: false
});
var grid = new FusionGrid(container, dataTable, {});
grid.render();

document.getElementById("sort-btn").addEventListener("click", () => {
  grid.sort({ column: "HomeTeam", order: "asc" });
});
```
Here is how the grid renders:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/v4bup87o/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to configure row sorting options, visit the [Methods](/fusiongrid/API_References/Fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.

