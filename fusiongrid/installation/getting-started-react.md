---
title: Install FusionGrid React| FusionGrid
description: Installation steps for React
heading: Install FusionGrid with React
---

# Create a Grid in React

We have built a lightweight and straightforward React component for the FusionGrid JavaScript grid Library. The 'react-fusiongrid' component allows you to include FusionGrid in your VueJS projects easily.

This page shows you how to install and render a grid using the 'react-fusiongrid' component.

## Prerequisite

* Install the Node.js, NPM/Yarn globally in your machine.
* Install the FusionGrid and React components in your project.

## Installation 

You can install 'fusiongrid' and the 'react-fusiongrid' components via npm or Yarn. First, download directly all binaries files located on our [github repository](https://github.com/fusioncharts/vue-fusiongrid) and follow the respective steps below. 

### Install from NPM

Open the terminal and enter:
```bash
-- npm install 'fusiongrid@1.1.0'
—- npm install react-fusiongrid
```
### Install from Yarn

Open the terminal and enter:
```bash
yarn add react-fusiongrid
```

## Usage

Create your application using the 'create-react-app' command, and import react, 'react-fusiongrid', and ‘FusionGrid’ to your application. Here is an example:

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFusionGrid } from "react-fusiongrid";
import FusionGrid from "@fusioncharts/fusiongrid";

ReactFusionGrid.fgRoot(FusionGrid);
If you have created your app using tools like ‘webpack’ or ‘parcel’,
Import ‘React’, ‘react-fusioncharts’ and ‘FusionCharts’  to your application as follows:
 
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2d from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Column2d);
```
> Note: This way of import is not supported in IE11 and below.

## Configure the Grid

Here is a basic sample that shows how to create a grid using 'react-fusiongrid':
```json
import React from 'react';
import ReactDOM from 'react-dom';
import FusionGrid, { DataStore } from 'fusiongrid';
import ReactFusionGrid from 'react-fusiongrid';

ReactFusionGrid.fgRoot(FusionGrid);

const schema = [
  {
      name: 'Rank',
      type: 'number',
  }, {
      name: 'Model'
  },
  {
      name: 'Make'
  },
  {
      name: 'Units Sold',
      type: 'number'
  },
  {
      name: 'Assembly Location'
  }
];
const data = [
  [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
  [2, "Pickup", "Ram", 633694, "Warren, Mich."],
  [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
  [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
  [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
  [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
  [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
  [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
  [9, "Civic", "Honda", 325650, "Greensburg, Ind."],
  [10, "Corolla", "Toyota", 304850, "Blue Springs, Miss."],
  [11, "Accord", "Honda", 267567, "Marysville, Ohio"],
  [12, "Tacoma", "Toyota", 248801, "San Antonio, Tex."],
  [13, "Grand Cherokee", "Jeep", 242969, "Detroit, Mich."],
  [14, "Escape", "Ford", 241338, "Louisville, Ky."],
  [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
  [16, "Sierra", "GMC", 232325, "Flint, Mich."],
  [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
  [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
  [19, "Cherokee", "Jeep", 191397, "Belvidere, Ill."],
  [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
];

const gridConfig = {
  layout: { density: "compact", autoHeight: true },
  rowOptions: {
    style: { "background-color": "oldlace" },
    hover: {
      enable: true,
      style: { "background-color": "white" },
    },
  }
};

const dataStore = new DataStore();
const dataTable = dataStore.createDataTable(data, schema, {
enableIndex: false
});

ReactDOM.render(<ReactFusionGrid width={400} height={400} data={dataTable} config={gridConfig} />, document.getElementById('root'));
```

## Working with Events

To attach event callbacks to a FusionGrid component, follow the pattern below.

Write the callback:

As a separate function:
```json
```javascript
var gridEventCallback  = function (eventObj, dataObj) {
  [Code goes here]
}
Or, as a component class method:
gridEventCallback (eventObj, dataObj) {
  [Code goes here]
}
Attach the callback to an event through the React-FG component:
<ReactFC
  width={width}
  height={height}
  data={data}
  fgEvent-EVENTNAME={this.chartEventCallback}
/>
```
Where the EVENTNAME property is replaced by the event you want to track.

## See your grid
![Automobile Ranking](/fusiongrid/images/automobile_ranking_sample.png)

