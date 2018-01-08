---
permalink: using-with-javascript-libraries/angular4/installing-the-fusioncharts-angular4-component-via-npm.html
title: Installing the FusionCharts Angular4 Component via NPM | FusionCharts
description: This article outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the vue-fusioncharts component.
heading: Installing the FusionCharts Angular4 Component via NPM
chartPresent: false
---
The FusionCharts Angular4 component lets you include FusionCharts in your angular4 projects and add interactive JavaScript charts and graphs to your angular4 applications.

This article outlines the steps to be executed for downloading and installing all the node modules via NPM and rendering charts using the __angular4-fusioncharts__ component.

### Downloading the component

You can download the __angular4-fusionCharts__ component from [here](https://www.fusioncharts.com/angular4-fusioncharts/).

To install the __angular4-fusioncharts__ component for your applications, follow the steps given below:

### Step 1: Install the angular4-fusioncharts wrapper framework via NPM

To install the `fusioncharts` module, execute the following command in the terminal:

```html
npm install fusioncharts --save
```

To install the `angular4-fusioncharts` module, execute the following command in the terminal:

```html
npm install angular4-fusioncharts --save
```

The above commands can also be given in a single line, as shown below:

```html
npm install fusioncharts angular4-fusioncharts --save
```

### Step 2: Import angular4-fusioncharts in the root __@Ngmodule__

In the root Angular __@Ngmodule__, import __FusionChartsModule__ from __angular4-FusionCharts__ and add the FusionChartsModule as a dependency, as shown below:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular4-fusioncharts';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 3: Add the __FusionCharts__ component

In the template, add the `<fusioncharts>` component in the section where you wish to render the chart. To do this, add the following code in your Angular __AppComponent__:

```javascript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource;

    constructor() {
        this.dataSource = {
            "chart": {
                "caption": "Harry's SuperMart",
                "subCaption": "Top 5 stores in last month by revenue",
                "numberprefix": "$",
                "theme": "fint"
            },
            "data": [{
                    "label": "Bakersfield Central",
                    "value": "880000"
                },
                {
                    "label": "Garden Groove harbour",
                    "value": "730000"
                },
                {
                    "label": "Los Angeles Topanga",
                    "value": "590000"
                },
                {
                    "label": "Compton-Rancho Dom",
                    "value": "520000"
                },
                {
                    "label": "Daly City Serramonte",
                    "value": "330000"
                }
            ]
        }
    }
}
```

Use the `<fusioncharts>` tag in your __app.component.html__ template, as shown below:

```html
<fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource"
></fusioncharts>
```

Once the installation is complete, you can now create and customize your charts using the __angular4-fusioncharts__ component. The subsequent articles in this section will tell you how.

## Licensing

Angular4-FusionCharts is an open-source resource and distributed under the terms of the MIT/X11 License. You will still need to include FusionCharts in your page. This project provides no direct functionality. You can download a [free evaluation version](https://www.fusioncharts.com/download/) here. You will still need to purchase a FusionCharts license to use in a commercial environment ([FusionCharts is free for noncommercial and personal use](https://www.fusioncharts.com/download/free/)).