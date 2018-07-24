---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angular component to create charts.
heading: Installation
chartPresent: false
---

The **angular-fusionCharts** component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single Angular component.

In this article, we will show you how you can download and install the `angular-fusionCharts` component and all the other dependencies on your system. You can install FusionCharts in your application using npm.

## Install FusionCharts via npm

Before installing and starting work with **angular-fusionCharts** wrapper, let's get familiar with the list of JavaScript files present in your **fusioncharts-suite-xt** folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js`|This file is required to render all charts present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.charts.js`.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.widgets.js`.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.powercharts.js`.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.gantt.js`.|
`fusioncharts.treemap.js`|This file is required to render the Treemap. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.treemap.js`.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomscatter.js`.|
`fusioncharts.zoomline.js`|This file is required to render the Zoom line charts. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomline.js`.|
`fusioncharts.overlappedbar2d.js`|This file is required to render the Overlapped Bar 2D chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedbar2d.js`.|
`fusioncharts.overlappedcolumn2d.js`|This file is required to render the Overlapped Column 2D chart, present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedcolumn2d.js`.|
`fusioncharts.maps.js`|This file is the core map renderer file. The map definitions, however, are stored separately, as explained next. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.maps.js`.|
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definitions of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective file names.|

Now, let's discuss how to install the `fusioncharts` module via npm. The `fusioncharts` package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via npm and rendering charts using the `angular-FusionCharts` wrapper.

### Step 1: Install fusioncharts

```shell
npm install fusioncharts --save
```

### Step 2: Install `angular-fusioncharts` wrapper

To install the `angular-fusioncharts` wrapper, copy the following line of code:

```shell
npm install angular-fusioncharts --save
```

### Step 3: Import **FusionChartsModule**

To import fusioncharts module in `app.module.ts` (in your application), copy the following line of code:

```shell
import { FusionChartsModule } from 'angular-fusioncharts';
```

### Step 4: Import FusionCharts library via npm

To import the `fusioncharts` library in `app.module.ts`(in your application), copy the following line of code:

```shell
import * as FusionCharts from 'fusioncharts';
```

### Step 5: Import other charts

To use charts and gauges from **PowerCharts** and **Widgets**, import their respective modules using:

```shell
import * as Widgets from 'fusioncharts/fusioncharts.widgets'; // Widgets
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts'; //PowerCharts
```

Note: To import specific charts, include the following import statements in your code:

```shell
import * as Gantt from 'fusioncharts/fusioncharts.gantt'; // Gantt
import * as Treemap from 'fusioncharts/fusioncharts.treemap'; // Treemap
import * as Zoomscatter from 'fusioncharts/fusioncharts.zoomscatter'; //Zoom Scatter
import * as Zoomline from 'fusioncharts/fusioncharts.zoomline'; //Zoom Line
import * as Overlappedbar2d from 'fusioncharts/fusioncharts.overlapped2d'; //Overlapped Bar 2D
import * as Overlappedcolumn2d from 'fusioncharts/fusioncharts.overlappedcolumn2d'; //Overlapped Column 2D
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/angular/angular/your-first-chart-using-angular '@@open-newtab').

## Include Maps via npm

FusionCharts can provide more than 1000 maps that cater to all your map visualization requirements. But to keep the library lightweight, by default it ships only with two maps - the **world** map, and the **map of the USA**. To render rest of the maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files. To include the downloaded map definition files, copy the following line of code:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```Shell
import * as Maps from 'fusioncharts/fusioncharts.maps'; // Maps
```

To include the **map definition** file you want to render, copy the following line of code:

```Shell
import * as World from 'fusioncharts/maps/fusioncharts.world' // World Map
```

## Include Themes via **npm**

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include the definition files placed in **fusioncharts/themes**, copy the following line of code:

```Shell
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Add Dependencies to the Environment

You can add all the dependencies to the angular environment in the main module, i.e., `app.module.ts` using **fcRoot(FusionCharts, [Comma separated dependencies])** function of the FusionCharts module:

```
FusionChartsModule.fcRoot(FusionCharts, Charts)  // FusionCharts and Charts
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FusionChartsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
    export class AppModule {
}
```

In the above code, we have added only `Charts` as the dependency to the environment. To add multiple dependencies, such as, Widgets, Maps, etc., include them within `FusionChartsModule.fcRoot(FusionCharts, ...)`. For example:

* `FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, Fusion)`: To import charts, widgets and themes.

* `FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, PowerCharts)`: To import charts, widgets and PowerCharts.

* `FusionChartsModule.fcRoot(FusionCharts, Maps, world)`: To import charts, maps and World map.