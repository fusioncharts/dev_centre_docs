---
permalink: getting-started/ruby-on-rails/install-using-ruby-on-rails.html
title: Installation | FusionCharts
description: In this section, you will be shown how you can create a simple chart using the FusionCharts and ruby on rails.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts Ruby on Rails** wrapper that lets you create interactive, data-driven charts. It lets you generate the required JavaScript and HTML code as a string on the server, which is then used to render charts on a browser.

In this article, we will show you how you can download and install the **FusionCharts Ruby on Rails** wrapper and all the other dependencies on your system.

## Download FusionCharts Library

In order to install and start working with Ruby on Rails and FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the `js` folder from fusioncharts-suite-xt to your project's JavaScript folder.

* The download package also contains `fusioncharts-rails` file under `fusioncharts-suite-xt > integrations > ror` folder. This folder will also contain Ruby on Rails FusionCharts native Export Handlers. The folder structure is shown below:

![Ruby on Rails Js Folder]({% site.baseurl %}/gif/ror-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `ror` folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the `ror` folder from `fusioncharts-suite-xt > integrations > ror` to your project's JavaScript folder.

Copy the JavaScript files from above and paste them in the `vendor/assets/javascripts/fusioncharts/` folder.

Add the following code lines in the **app/assets/javascripts/application.js** file:

```
//= require fusioncharts/fusioncharts
//= require fusioncharts/fusioncharts.widgets
//= require fusioncharts/themes/fusioncharts.theme.fusion
```

> Ensure that the **config.assets.debug** flag in the **development.rb** file (config/environments/development.rb) is enabled (set to **true**).

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the downloaded package into your project folder.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt` folder:

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

Now, To install the Rails wrapper:

* Add this line to your application’s `Gemfile`:

```rb
gem ‘fusioncharts-rails’
```

RubyGems contain package information along with the files to install. To read more on gems, click [here](http://rubygems.org/gems/fusioncharts-rails).

* On the command line prompt, execute the following command:

```bash
$bundle
```
This command will automatically install the `fusioncharts-rails` gem.

* You can also install the gem directly from the command line prompt, without making any edits to the **Gemfile**. To do this, use the code line given below:

```bash
$gem install fusioncharts-rails
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails '@@open-newtab').

## Installing FusionMaps (map visualizations) for your project

FusionCharts can provide more than 1000 maps that cater to all your map visualization requirements. But to keep the library lightweight, by default it ships only with two maps - the **world** map, and the **map of the USA**. To render rest of the maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files. Place the downloaded map definition files in the same location where `fusioncharts.js` files are placed.

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

**Add the following code lines in the `app/assets/javascripts/application.js` file:**

```
//= require fusioncharts/fusioncharts.maps
//= require fusioncharts/maps/fusioncharts.world
```

**To install the Rails wrapper:**

* Add this line to your application’s `Gemfile`:

```rb
gem ‘fusioncharts-rails’
```

RubyGems contain package information along with the files to install. To read more on gems, click [here](http://rubygems.org/gems/fusioncharts-rails).

**On the command line prompt, execute the following command:**

```bash
$bundle
```

This command will automatically install the `fusioncharts-rails` gem.

**You can also install the gem directly from the command line prompt, without making any edits to the Gemfile. To do this, use the code line given below:**

```bash
$gem install fusioncharts-rails
```

## Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project and set the theme attribute to the correct name. Which could be `zune`, `carbon`, `ocean`.