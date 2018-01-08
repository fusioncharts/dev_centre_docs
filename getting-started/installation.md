---
permalink: getting-started/installation.html
title: Installation | FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop/mobile web browsers. This article talks about steps to download FusionCharts library
heading: Installation
chartPresent: false
---

FusionCharts Suite XT is a JavaScript library that runs on your desktop and mobile web browsers. 

<p class="text-info">
Installation of FusionCharts Suite XT merely involves __copying and pasting the JavaScript files from the download package into your project folder__.

Thereafter, you can simply include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. <br/><br/>

Starting v3.11.2, the **FusionCharts Suite XT can be installed via the npm and Bower** package managers. Click [here](/getting-started/installing-via-npm-and-bower/installing-fusioncharts-suite-xt-via-npm-and-bower) for detailed instructions on installation via npm and Bower. 
</p>

The JavaScript files of FusionCharts Suite library are located in `js` folder of your download package. You should see these JavaScript files in your `fusioncharts` folder now:

File Name | Description
---|---
 `fusioncharts.js` | This is the core FusionCharts library, which you need to include in all your pages where a chart, gauge or map is required to be generated.
`fusioncharts.charts.js` | This file is required to render all charts present under FusionCharts XT.
`fusioncharts.widgets.js` | This file is required to render all gauges present under FusionWidgets XT.
`fusioncharts.powercharts.js` | This file is required to render all charts present under PowerCharts XT.
`fusioncharts.gantt.js` | This file is required to render the Gantt chart, present under FusionWidgets XT.
`fusioncharts.treemap.js` | This file is required to render the Treemap chart, present under PowerCharts XT.
`fusioncharts.zoomscatter.js` | This file is required to render the Zoom scatter chart, present under FusionCharts XT.
`fusioncharts.maps.js`  |This file is core map renderer file. The map definitions, however, are stored separately, as explained next.
`maps/*` | This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps  - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definition of all the 965 maps offered by FusionMaps XT from [here](http://www.fusioncharts.com/download/maps/definition)
`themes/*` | This folder contains pre-packaged themes that can be used by charts, gauges and maps to style them through a central FusionCharts theme (JSON) file. Each theme file has its own name, through which it is referenced.

## Setting Up FusionCharts Suite XT on your Web Server

 * Create a folder named `fusioncharts` in the document root of your web application. You can name the folder differently, and place it within another folder as well instead of root. However, copying it to the root of your application allows all the pages in your application to easily access the library from anywhere.
 * In the download package, locate the `js` folder. Copy all the JavaScript files from this folder and paste it in the `fusioncharts` folder, which you created earlier.

And that’s it. The installation is complete and you can start building charts using FusionCharts XT in your web applications.

## Setting Up FusionCharts Suite XT on Your Local Machine (File system)

If you need to create charts on your local machine for general charting or testing purposes, do the following:

 * Create a folder `fusioncharts` in your working folder.
 * Copy the JavaScript files from the `js` folder of the download package and paste it in your `fusioncharts` folder.
 * Create HTML pages and include the above JavaScript files through a relative path to start creating charts

<p class="text-info">
Do note that while rendering your charts locally (without a web server, even if `localhost`), you will not be able to load data from XML or JSON files present on your hard-drive, due to security restrictions enforced by most modern browsers—including Google Chrome. Generally, Chrome requires you to have a local server set up (localhost) to run things.
</p>

## Integrating Only Specific Products from FusionCharts Suite XT

FusionCharts Suite XT consists of 4 products:

 * __FusionCharts XT__ - It offers all the general-purpose charts like column, bar, line, area, pie, combination and stacked charts to advanced charts like combination, scroll, zoom line, XY Plot, Marimekko and Pareto charts.
 * __FusionWidgets XT__ - It renders a variety of gauges and charts including speedometer charts (also called angular gauge and dial chart), linear gauges, bulb gauge, Gantt charts, funnel and pyramid charts. In addition, it also offers sparklines and bullet graphs that can be embedded within content to show a lot of KPIs in a compact space.
 * __PowerCharts XT__ - It offers a set of advanced charts for domain-specific usage like network diagrams, profit-loss analysis, financial planning, stock price plotting and hierarchical structures. It also offers visually editable charts to simulate what-if scenarios and radar (spider) charts to compare multiple entities on multiple parameters.
 * __FusionMaps XT__ - It offers interactive maps to plot geographical data like revenue by regions, population by state, survey and election results effectively. You can also drop markers on the map to pinpoint places like office locations and flight routes. It has over 965 maps including all continents, major countries and all US states.

By default, when you set up FusionCharts Suite XT on your web server or your local file system, you can create all the 90+ charts and 1000+ maps (after downloading the map definition files separately). However, if you need to use just a specific FusionCharts Suite XT product, you need to do the following:

 * __FusionCharts XT__: Copy only `fusioncharts.js` and `fusioncharts.charts.js` files from your `js`folder to your working directory.

 * __FusionWidgets XT__: Copy only `fusioncharts.js`, `fusioncharts.widgets.js`, and `fusioncharts.gantt.js` files from your `js` folder to your working directory.

 * __PowerCharts XT__: Copy only `fusioncharts.js` and `fusioncharts.powercharts.js` files from your `js` folder to your working directory.

 * __FusionMaps XT__: Copy only `fusioncharts.maps.js` from your `js` folder and the specific map definition js files from the `maps` sub folder to your working directory. You will need to download map definition files from [here](http://www.fusioncharts.com/download/maps/definition) and copy-paste the maps folder within your `fusioncharts` directory.

 <p class="text-info">`Note:` Include `fusioncharts.treemap.js`, `fusioncharts.zoomscatter.js` and `fusioncharts.gantt.js` to render the respective chart types.</p>

This method comes in handy when you have licensed only specific product(s) from FusionCharts Suite XT, and need to overwrite the evaluation version files with the licensed ones. In such a scenario, you will copy the licensed JavaScript files of the relevant product from the licensed download pack (provided after purchase) to your project folder and overwrite the existing evaluation files.

The charts generated using licensed file would not show the watermark any more. However, any chart generated using other products, which you do not have a license for, would continue showing the evaluation watermark.

### If the watermark shows up for your licensed files, even after overwriting, check for these:

  * Are you copying the correct JavaScript files and overwriting at the right location?
  * Have you cleared your browser cache?

