---
title: Export chart as image | FusionGrid
description: This article talks about using row animations
heading: Row Animation 
---

Enhance your data by adding transition animations to your rows. In this article, you will learn to add animation to your rows.
In the `rowOptions` object include the properties `animateRows` and `animateRowsDuration`. 
Set your `animateRows` to `true` and choose a value for the duration of the animation, see the syntax below for reference:
```json
config = {
    rowOptions: {
        animateRows: true/false,
        animateRowsDuration: 1 // time in seconds
    }
});
```

## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server, and the server is running

## Code
The grid configuration files are simple `.json` files. Below is an example of how the row transition animations work.
Users can enable or disable the animation and control the animation duration.

```json
var schema = [
  {
    name: "State/UTs"
  },
  {
    name: "Total Vaccination Doses",
    type: "number"
  },
  {
    name: "Dose 1",
    type: "number"
  },
  {
    name: "Dose 2",
    type: "number"
  },
  {
    name: "Population",
    type: "number"
  }
];

var data = [
  ["AndamanandNicobar", 479643, 292988, 186655, 399001],
  ["AndhraPradesh", 49477255, 31444989, 18032266, 91702478],
  ["ArunachalPradesh", 1275290, 768011, 507279, 1711947],
  ["Assam", 26926347, 19853518, 7072829, 35998752],
  ["Bihar", 64306471, 48394063, 15912408, 128500364],
  ["Chandigarh", 1443226, 921706, 521520, 1158040],
  ["Chhattisgarh", 21061573, 14415425, 6646148, 32199722],
  ["DadraandNagarHaveliandDamanandDiu", 1009344, 657198, 352146, 773997],
  ["Delhi", 19972801, 12867945, 7104856, 19301096],
  ["Goa", 2103909, 1252224, 851685, 1521992],
  ["Gujarat", 68340786, 44308197, 24032589, 70400153],
  ["Haryana", 25258059, 17580989, 7677070, 28900667],
  ["HimachalPradesh", 8878504, 5698536, 3179968, 7503010],
  ["JammuandKashmir", 14119283, 9469202, 4650081, 14999397],
  ["Jharkhand", 19665040, 14616783, 5048257, 40100376],
  ["Karnataka", 63020436, 41772114, 21248322, 69599762],
  ["Kerala", 37885171, 25175697, 12709474, 34698876],
  ["Ladakh", 357732, 208209, 149523, 290492],
  ["Lakshadweep", 100086, 55049, 45037, 66001],
  ["MadhyaPradesh", 68103587, 49722785, 18380802, 85002417],
  ["Maharashtra", 94581669, 65231520, 29350149, 124904071],
  ["Manipur", 1876229, 1240398, 635831, 3436948],
  ["Meghalaya", 1688777, 1094538, 594239, 3772103],
  ["Mizoram", 1207679, 707172, 500507, 1308967],
  ["Nagaland", 1168907, 704359, 464548, 2073074],
  ["Odisha", 35373278, 24879861, 10493417, 47099270],
  ["Puducherry", 1104515, 724326, 380189, 1646050],
  ["Punjab", 21649939, 15688144, 5961795, 30501026],
  ["Rajasthan", 61347362, 42228564, 19118798, 79502477],
  ["Sikkim", 957382, 520901, 436481, 658019],
  ["TamilNadu", 54505797, 39779159, 14726638, 83697770],
  ["Telangana", 29887325, 21262277, 8625048, 38157311],
  ["Tripura", 4035565, 2503546, 1532019, 4184959],
  ["UttarPradesh", 124449000, 95441355, 29007645, 231502578],
  ["Uttarakhand", 11047787, 7448839, 3598948, 11700099],
  ["WestBengal", 70561973, 51245364, 19316609, 100896618]
];

var container = document.getElementById("grid-container-for-card");
var dataStore = new FusionGrid.DataStore();
var dataTable = dataStore.createDataTable(data, schema, {
  enableIndex: false
});
var grid = new FusionGrid(container, dataTable, {
  rowOptions: {
    animateRows: true,
    animateRowsDuration: 4
  },
  defaultColumnOptions: {
    sortable: true
  }
});
grid.render();
```
Based on the above configuration, you should see row transition animations on your grid like the illustration below:
<iframe width="100%" height="300" src="//jsfiddle.net/fusioncharts/9w7badLp/1/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

For detailed information on the different methods and events to configure row animations, visit the [Methods](/fusiongrid/API_References/fusiongrid-methods) and [Events](/fusiongrid/API_References/FusionGrid_Events) page.
