---
title: Column Filter | FusionGrid
description: This article talks about using column filters
heading: Column Filter
---

# Column Filter
For a better data analysis you can apply filters on specific columns to show most relevant data first. There are four types of filters you can apply to your grid.
Enable the filter option by setting the `defaultColumnOptions` method to true. 
```json
config = {
    defaultColumnOptions: {
        filter: {
          enable: true,
          type: 'conditional' // other value is 'value'
        }
    }
};
```

## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Conditional Filter
Use conditions and logical operations such as, or and and, to filter your data. 

Below is the list of all applicable conditions based on column data type. 
<table>
<tr>
		<th>Numeric</th>
		<th>String</th>
		<th>Date</th>
</tr>
   <tr>
	<td>= (equals/is)</td>
	<td>is</td>
	<td>is</td>
</tr>
<tr>
	<td>≠ (not equal to/is not)</td>
	<td>is not</td>
	<td>is not</td>
</tr>
  <tr>
	<td>< (less than)</td>
	<td>contains</td>
	<td>is before</td>
</tr>
  <tr>
	<td>> (greater than)</td>
	<td>does not contain</td>
	<td>is after</td>
</tr>
  <tr>
	<td>≤ (less than or equal to)</td>
	<td>starts with</td>
	<td>is on and before</td>
</tr>
 <tr>
	<td>≥ (greater than or equal to)</td>
	<td>ends with</td>
	<td>is on and after</td>
</tr>
   <tr>
	<td>↔ (between/in range)</td>
	<td>is empty</td>
	<td>is within</td>
</tr>
   <tr>
	<td>is empty</td>
	<td>is not empty</td>
	<td></td>
</tr>
  <tr>
	<td>is not empty</td>
	<td></td>
	<td></td>
</tr>
</table>

### Code
The following is an example of a grid with conditional filters:
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
    searchable: true,
    filter: true
  }
});
grid.render();
```
Below is how the grid displays:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/azcvfu8e/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Value Filter 
This filter will allow users to select one or multiple values from the column to filter rows in the grid.
Users can use clear option to clear the selection. Alternatively, they can use Select All option as well.

### Code
The following is an example with a value filter configured.

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
    searchable: true,
    filter: {
      enable: true,
      type: "conditional"
    }
  }
});
grid.render();
```
Below is how the grid displays:
<iframe width="100%" height="400" src="//jsfiddle.net/fusioncharts/azcvfu8e/1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to configure column filters, visit the [Methods](/fusiongrid/API_References/Fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.

