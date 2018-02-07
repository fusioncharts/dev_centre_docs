---
title: Installation | FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop/mobile web browsers. This article talks about steps to download FusionCharts library
heading: Installation
breadcrumb: [["Home", "/"], ["Installation"]]
---

FusionCharts Suite XT—the industry's most comprehensive charting solution— is all about easing the whole process of data visualization through charts. This developer center includes everything that you'd want to know about FusionCharts Suite XT.

## Download

FusionCharts Suite XT is a JavaScript library that runs on your desktop and mobile web browsers. Click [here](https://www.fusioncharts.com/download/) to download the library.

> Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the download package into your project folder. Thereafter, you can simply include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps.

The JavaScript files of FusionCharts Suite library are located in `js` folder of your download package. Following is the list of **js** files present in your `fusioncharts` folder:


File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to include in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js`|This file is required to render all charts present under FusionCharts XT.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart, present under FusionWidgets XT.|
`fusioncharts.treemap.js`|This file is required to render the Treemap, present under PowerCharts XT.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart, present under FusionCharts XT.|
`fusioncharts.maps.js`|This file is core map renderer file. The map definitions, however, are stored separately, as explained next.|
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`.   You can download definition of all the 965 maps offered by FusionMaps XT from here.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges and maps to style them through a central FusionCharts theme (JSON) file. Each theme file has its own name, through which it is referenced.|



> Starting v3.11.2, the FusionCharts Suite XT can be installed via the npm and Bower package managers.

## Installation

## Set up FusionCharts Suite XT on local machine

If you need to create charts on your local machine for general charting or testing purposes, do the following:

* Create a folder `fusioncharts` in your working folder.

* Copy the JavaScript files from the `js` folder of the download package and paste it in your `fusioncharts` folder.

* Create HTML pages and include the above JavaScript files through a relative path to start creating charts

> While rendering charts locally (without a web server, even if **localhost**), you will not be able to load data from XML or JSON files present on your hard-drive, due to security restrictions enforced by most modern browsers—including Google Chrome. Generally, Chrome requires you to have a local server set up (localhost) to run things.

## Integrate specific products from the Suite

FusionCharts Suite XT consists of 4 products:

* **FusionCharts XT** - It offers all the general-purpose charts like column, bar, line, area, pie, combination and stacked charts to advanced charts like combination, scroll, zoom line, XY Plot, Marimekko and Pareto charts.

* **FusionWidgets XT** - It renders a variety of gauges and charts including speedometer charts (also called angular gauge and dial chart), linear gauges, bulb gauge, Gantt charts, funnel and pyramid charts. In addition, it also offers sparklines and bullet graphs that can be embedded within content to show a lot of KPIs in a compact space.

* **PowerCharts XT** - It offers a set of advanced charts for domain-specific usage like network diagrams, profit-loss analysis, financial planning, stock price plotting and hierarchical structures. It also offers visually editable charts to simulate what-if scenarios and radar (spider) charts to compare multiple entities on multiple parameters.

* **FusionMaps XT** - It offers interactive maps to plot geographical data like revenue by regions, population by state, survey and election results effectively. You can also drop markers on the map to pinpoint places like office locations and flight routes. It has over 1000 maps including all continents, major countries and all US states.

By default, when you set up FusionCharts Suite XT on your web server or your local file system, you can create all the 90+ charts and 1000+ maps (after downloading the map definition files separately). However, if you need to use just a specific FusionCharts Suite XT product, you need to do the following:

* **FusionCharts XT**: Copy only `fusioncharts.js` and `fusioncharts.charts.js` files from your `js` folder to your working directory.

* **FusionWidgets XT**: Copy only `fusioncharts.js`, `fusioncharts.widgets.js`, and `fusioncharts.gantt.js` files from your `js` folder to your working directory.

* **PowerCharts XT**: Copy only `fusioncharts.js` and `fusioncharts.powercharts.js` files from your `js` folder to your working directory.

* **FusionMaps XT**: Copy only `fusioncharts.maps.js` from your `js` folder and the specific map definition js files from the `maps` sub-folder to your working directory. You will need to download map definition files from [here](https://www.fusioncharts.com/download/maps/definition) and copy-paste the maps folder within your `fusioncharts` directory.

> Include **fusioncharts.treemap.js**, **fusioncharts.zoomscatter.js** and **fusioncharts.gantt.js** to render the respective chart types.

This method comes in handy when you have licensed only specific product(s) from FusionCharts Suite XT, and need to overwrite the evaluation version files with the licensed ones. In such a scenario, you will copy the licensed JavaScript files of the relevant product from the licensed download pack (provided after purchase) to your project folder and overwrite the existing evaluation files.

The charts generated using licensed file would not show the watermark any more. However, any chart generated using other products, which you do not have a license for, would continue showing the evaluation watermark.

## Install via npm

Now, talks about how the **fusioncharts** and the **fusionmaps** packages can be installed via **NPM** package management software.

> The **fusioncharts** package contains files for all charts and widgets and only two map definition files, for the World map and the USA map. The **fusionmaps** package contains files for all charts and widgets and map definition files for all maps. Consequently, it takes longer for installation than the fusioncharts package and is recommended only if your application needs maps other than the World and USA maps.

### Install FusionCharts package

**Step 1**: Install the FusionCharts package.

```

npm install fusioncharts

```

**Step 2**: Load FusionCharts using `require`.

```

var FusionCharts = require("fusioncharts");

```

**Step 3**: Load the charts module using `require`.

```

require("fusioncharts/fusioncharts.charts")(FusionCharts);

```

### Install FusionMaps package

**Step 1**: Install the FusionMaps package.

```

npm install fusionmaps

```

**Step 2**: Load FusionCharts using `require`.

```

var FusionCharts = require("fusioncharts");

```

**Step 3**: Load the maps module using `require`.

```

require("fusioncharts/fusioncharts.maps")(FusionCharts);

```

**Step 4**: Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.<MAP_ALIAS>**, where **MAP_ALIAS** gets replaced by the map's JavaScript alias. Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included. 

Therefore, assuming that you need to render the world map, the alias name **world** replaces **MAP_ALIAS** in the format.

```

require("fusioncharts/maps/fusioncharts.world")(FusionCharts);

```

> The map definition files have to be included for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

### Package-specific Dependencies for npm

* To render a chart belonging to the PowerCharts package, load the PowerCharts module:

```

require("fusioncharts/fusioncharts.powercharts")(FusionCharts);

```

* To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

```

require("fusioncharts/fusioncharts.fusionwidgets")(FusionCharts);

```

> To know which chart belongs to which package, refer the **[list of charts](https://www.fusioncharts.com/dev/getting-started/list-of-charts.html)**.

* To render a map, load the FusionMaps module and the map definition file for that map:

```

require("fusioncharts/fusioncharts.maps")(FusionCharts);  
require("fusioncharts/maps/fusioncharts.world")(FusionCharts);

```

> To know the map definition file names, refer the **[list of maps](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html)**.

### Chart-specific Dependencies for npm

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

* To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files before the **fusioncharts.zoomscatter.js** file.

```

var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require("fusioncharts/fusioncharts.zoomscatter")(FusionCharts);

```

* To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files before the **fusioncharts.treemap.js** file.

```

var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.powercharts")(FusionCharts);  
require("fusioncharts/fusioncharts.treemap")(FusionCharts);

```

* To render the SS Grid chart only the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```

var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.ssgrid")(FusionCharts);

```

* To render the Gantt chart only the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```

var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.gantt")(FusionCharts);

```

## Install via Bower

This section talks about how the **fusioncharts** and the **fusionmaps** packages can be installed via **Bower** package management software.

> The **fusioncharts** package contains files for all charts and widgets and only two map definition files, for the World map and the USA map. The **fusionmaps** package contains files for all charts and widgets and map definition files for all maps. Consequently, it takes longer for installation than the fusioncharts package and is recommended only if your application needs maps other than the World and USA maps.

### Install FusionCharts package

**Step 1**: Install the FusionCharts package.

```

bower install fusioncharts

```

**Step 2**: Load FusionCharts module.

```

<script src="bower_components/fusioncharts/fusioncharts.js"></script>

```

**Step 3**: Load the charts module.

```

<script src="bower_components/fusioncharts/fusioncharts.maps.js"></script>

```

### Install FusionMaps package

**Step 1**: Install the FusionMaps package.

```

bower install fusionmaps

```

**Step 2**: Load FusionCharts.

```

<script src="bower_components/fusionmaps/fusioncharts.js"></script>

```

**Step 3**: Load the maps module.

```

<script src="bower_components/fusionmaps/fusioncharts.maps.js"></script>

```

**Step 4**: Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.<MAP_ALIAS>.js**, where **MAP_ALIAS** gets replaced by the map's JavaScript alias. Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included. 

Therefore, assuming that you need to render the world map, the alias name **world** replaces **MAP_ALIAS** in the format.

```

<script src="bower_components/fusionmaps/maps/fusioncharts.world.js"></script>

```

> Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

### Package-specific Dependencies for Bower

* To render a chart belonging to the PowerCharts package, load the PowerCharts module:

```

<script src="bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>

```

* To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

```

<script src="bower_components/fusioncharts/fusioncharts.fusionwidgets.js"> </script>

```

> To know which chart belongs to which package, refer the **[list of charts](https://www.fusioncharts.com/dev/getting-started/list-of-charts.html)**.

* To render a map, load the FusionMaps module and the map definition file for that map:

```

<script src="bower_components/fusioncharts/fusioncharts.maps.js"> </script>
<script src="bower_components/fusioncharts/maps/fusioncharts.world.js"> </script>

```

> To know the map definition file names, refer the **[list of maps](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html)**.

### Chart-specific Dependencies for Bower

For some chart types, you need to include/exclude certain files. These chart types and the corresponding files are mentioned below:

* To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files before the **fusioncharts.zoomscatter.js** file.

```

<script src = "bower_components/fusioncharts/fusioncharts.js"> </script> 
<script src = "bower_components/fusioncharts/fusioncharts.charts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.zoomscatter.js"> </script>

```

* To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files before the **fusioncharts.treemap.js** file.

```

<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.treemap.js"> </script>

```

* To render the SS Grid chart only the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```

<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.ssgrid.js"> </script>

```

* To render the Gantt chart only the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```

<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>  
<script src = "bower_components/fusioncharts/fusioncharts.gantt.js"> </script>

```

## Related Resources

* How to render a chart using Pure JavaScript?

* How to render a gauge using Pure JavaScript?

* How to render a map using Pure JavaScript?

