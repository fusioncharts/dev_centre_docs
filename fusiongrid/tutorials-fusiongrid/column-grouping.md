---
title: Export Grid | FusionGrid
description: This article talks about using grouping columns
heading: Data Export
---

To create a multi-column group, the user need to define the group name and then columns as children of the group, as follows:
```json
config = {
	columns: [{
            headerName: 'Employee Details',
            children: [{
	            field: 'Name'
            },{
	            field: 'Country'
            }]
       }]
};
```

## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server, and the server is running

## Code
The following is an example of grouping columns in your grid:
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
  ]
});
grid.render();
```
And this is the result:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/k8wLsueq/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to configure column grouping, visit the [Methods](/fusiongrid/API_References/Fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.
