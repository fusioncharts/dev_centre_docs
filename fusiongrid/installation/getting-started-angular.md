---
title: Install FusionGrid Angular | FusionGrid
description: Installation steps
heading: Getting Started with Angular
---

# Create a Grid in Angular

We have built a lightweight and straightforward Angular component for the FusionGrid JavaScript grid Library. The 'angular-fusiongrid' component allows you to easily include FusionGrid in your Angular projects.

This page shows you how to install and render a grid using the 'angular-fusiongrid' component.

## Prerequisite

* Install the Node.js, NPM/Yarn globally in your machine.
* Install AngularCLI globally in your machine.
* Install the FusionGrid and Angular components in your project.

## Installation 

You can install 'fusiongrid' and the 'angular-fusiongrid' components via npm or Yarn. First, download directly all binaries files located on our [github repository](https://github.com/fusioncharts/angular-fusiongrid) and follow the respective steps below. 

### Install from NPM

Open the terminal and enter:
```bash
npm install fusiongrid
npm install angular-fusiongrid
```

### Install from Yarn

Open the terminal and enter:
```bash
yarn add angular-fusiongrid
```
## Usage

Create your application using the AngularCLI, and import {FusionGridModule} from 'angular-fusiongrid', and 'FusionGrid' to your application. Here is an example:

```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FusionGridModule } from 'angular-fusiongrid';
FusionGridModule.setFGRoot(FusionGrid);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Configure the Grid

Here is a basic sample that shows how to create a grid using 'angular-fusiongrid'.
In the app.component.ts add the below code:
```json
import { Component } from '@angular/core';
import FusionGrid from "@fusioncharts/fusiongrid"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  schema = [
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

  data = [
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
  dataTable: any;

  gridConfig: any = {
    columns: [
      { field: 'Rank',width: '70px'},
      { 
        field: 'Make',
      },
      {
        field: 'Units Sold',
        width: '100px',
      },
      {
        field: 'Assembly Location',
        headerText: 'Assembly Location in US'
      },
    ]
  }
  constructor() {
    const dataStore = new FusionGrid.DataStore();
    this.dataTable = dataStore.createDataTable(this.data, this.schema, {
      enableIndex: false
    });
  }
}
```

Add the Fusion grid component selector in the app.component.html

```json
`<fusion-grid style="width: 1000px;height: 1000px;" [dataTable]="dataTable" 
    [gridConfig]="gridConfig">
</fusion-grid>`;
```
You can attach an event as follows:
```json
<fusion-grid style="width: 1000px;height: 1000px;" [dataTable]="dataTable" [gridConfig]="gridConfig" (initialized)="initialized($event)"> </fusion-grid>
```
 
## See your grid
![Automobile Ranking](/fusiongrid/images/automobile_ranking_sample.png)
