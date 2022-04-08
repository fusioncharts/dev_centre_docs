---
title: Export chart as image | FusionGrid
description: This article talks about using column search filters
heading: Search Filter
---

For a faster way of analyzing and finding the relevant data, Fusiongrid implemented a quick search functuonality. 
To include a search bar on your grid include the property 'searchable' and set it to 'true', see the below syntax for reference:
```json
config = {
    defaultColumnOptions: {
        searchable: {
             enable: true/false
			multiColSearch: true/false
        }
    }
};
```
## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server, and the server is running

## Code
Enable the `searcheable` method to enable quick search on your grid columns.
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
    searchable: true
  }
});
grid.render();

```
The above code will display as follows:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/wb2Lt9k4/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Users can search for relevant data in their grid using the column search or by calling specific API methods. 
There are two ways or searching when using API methods, instant search or pattern search. 
* Instant Search - search columns based on your text input.
* Pattern Search - use the `*` sign to help you find information quicker.
** `*search-text`- displays results where search text is present after the `*` sign.
** `search-text*`- displays results where search text is present before the `*` sign.
** `*search-text*`- displays results where search text is present between the `*` signs.

You can also perform a multiple column search to You can enable the multiple column search to be able to search one column and then search on another column.
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
    searchable: {
      enable: true,
      multiColSearch: true
    }
  }
});
grid.render();
```
The above code will display as follows:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/dqaxpubf/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Or search columns using search methods.
* `search` - Use this method to searche the grid. By default, the text provided will be used to search across all columns.
* `getSearchText`- Use this method to get the search text passed by in the search input box. If this method is called without any argument, then it returns all the search text across all columns.
* `resetSearch` - Use this method to reset the search applied in the grid. If this method is called without any argument, then it clears the search across all the columns.

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
  defaultColumnOptions: {
    searchable: true
  }
});
grid.render();

document.getElementById("search-btn").addEventListener("click", () => {
  const searchText = document.getElementById("search-text").value;
  grid.search(searchText);
});

document.getElementById("reset-btn").addEventListener("click", () => {
  grid.resetSearch();
});
```
The above code will display as follows:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/tgcs5wup/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to configure the search filters, visit the [Methods](/fusiongrid/API_References/fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.
