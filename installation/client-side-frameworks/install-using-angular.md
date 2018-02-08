---
title: Install using Angular JS| FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop/mobile web browsers. This article talks about steps to install using angular js
heading: Angular JS
breadcrumb: [["Home", "/"], ["Angular JS"]]
---

The Angular-FusionCharts directive, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS directive.

## Download

You can download the Angular-FusionCharts directive from [here](https://www.fusioncharts.com/angularjs-charts/).

## Install

In your HTML, include the `fusioncharts.js` and the `angular-fusioncharts.js` JavaScript file. It is necessary to include the `angular-fusioncharts.js` file after all other files.

```
<script type="text/javascript" src="/path/to/fusioncharts.js"></script>
<script type="text/javascript" src="/path/to/angular.js"></script>
<script type="text/javascript" src="/path/to/angular-fusioncharts.js"></script>

```
## Install via NPM

To install `angular2-fusioncharts` library, run:

```
$ npm install angular2-fusioncharts --save

```
Once the installation is complete, add the following code (to import the library) to the Angular `AppModule`:

```
import {
    BrowserModule
} from '@angular/platform-browser';

import {
    NgModule
} from '@angular/core';

import {
    AppComponent
} from './app.component';

* // Import angular2-fusioncharts*

import {
    FusionChartsModule
} from 'angular2-fusioncharts';

* // Import FusionCharts library and chart modules*

import * as FusionCharts from 'fusioncharts';

import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

* // Pass the fusioncharts library and chart modules*

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({

    declarations: [

        AppComponent,

        FusionChartsComponent

    ],

    imports: [

        BrowserModule,

        * // Specify FusionChartsModule as import*

        FusionChartsModule

    ],

    providers: [],

    bootstrap: [AppComponent]

})

export class AppModule {}

```

Now, you can use components and directives of the library in your Angular application.

## Licensing

Angular-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can **[download an evaluation](https://www.fusioncharts.com/download/)**. You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is **[free for non-commercial and personal use](https://www.fusioncharts.com/download/free/)**) .

## Related Resources

* How to render a chart using AngularJS?

* How to render a gauge using AngularJS?

* How to render a map using AngularJS?