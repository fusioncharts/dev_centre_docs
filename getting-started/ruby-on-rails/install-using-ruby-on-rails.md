---
title: Installation | FusionCharts
description: In this section, you will be shown how you can create a simple chart using the FusionCharts and ruby on rails.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts server-side RoR wrapper** that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page for generating charts.

In this article, we will show you how to download and install the **FusionCharts Rails gem** wrapper and all the other dependencies on your system.

## Download FusionCharts Library

In order to install and start working with Ruby on Rails and FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to apply themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> You need to copy all the files/folders from `fusioncharts-suite-xt > js` to `vendor/assets/javascripts/fusioncharts/` folder of your Rails application.

* The download package contains FusionCharts gem under `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder. The `rubyonrails` folder will also contain native RoR FusionCharts **[Export Handler]({% site.baseurl %}/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/ruby-on-rails '@@open-newtab')**. The folder structure is shown below: 

![Ruby on Rails Js Folder]({% site.baseurl %}/gif/ror-folder-structure.gif)

> The `rubyonrails` folder in the FusionCharts Suite XT package is available from v3.13.0.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt > js` folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js`|This file is required to render all charts present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.charts.js` provided they are in the same folder.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.widgets.js` provided they are in the same folder.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.powercharts.js` provided they are in the same folder.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.gantt.js` provided they are in the same folder.|
`fusioncharts.treemap.js`|This file is required to render the Treemap. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.treemap.js` provided they are in the same folder.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomscatter.js` provided they are in the same folder.|
`fusioncharts.zoomline.js`|This file is required to render the Zoom line charts. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomline.js` provided they are in the same folder.|
`fusioncharts.overlappedbar2d.js`|This file is required to render the Overlapped Bar 2D chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedbar2d.js` provided they are in the same folder.|
`fusioncharts.overlappedcolumn2d.js`|This file is required to render the Overlapped Column 2D chart, present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedcolumn2d.js` provided they are in the same folder.|
`fusioncharts.maps.js`|This file is the core map renderer file. The map definitions, however, are stored separately, as explained next. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.maps.js` provided they are in the same folder.|
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1400+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. To include FusionCharts library files, follow the steps gievn below:

**Step 1: Include the FusionCharts package**

To include core `fusioncharts` library in your project add the following line in the **app/assets/javascripts/application.js** file:

```Ruby
//= require fusioncharts/fusioncharts
```

**Step 2: Include the Theme file (optional)**

This step is optional, the chart will render with the default theme (`fusion`) even if the theme is not applied.

```Ruby
//= require fusioncharts/themes/fusioncharts.theme.fusion
```

To add the FusionCharts Rails wrapper, use any of the following process:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='rubygems'>RubyGems</a></li>
  <li><a data-toggle='manual'>Manual</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab rubygems-tab active'>
<div><strong>Add this line to your application’s `Gemfile`:</strong></div>
<pre><code class="custom-hlc language-ruby">
	gem ‘fusioncharts-rails’
</code></pre>
<div><strong>RubyGems contain package information along with the files to install. On the command line prompt, execute the following command:</strong></div>
<pre><code class="custom-hlc language-ruby">
	$bundle
</code></pre>
<div><strong>This command will automatically install the `fusioncharts-rails` gem. You can also install the gem directly from the command line prompt, without making any edits to the `Gemfile`. To do this, use the code line given below:</strong></div>
<pre><code class="custom-hlc language-ruby">
	$gem install fusioncharts-rails
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab manual-tab'>
<div><strong>Step 1: </strong>Copy all files from `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder.</div>
<div><strong>Step 2: </strong>Paste the copied files to the `lib` folder of your application</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/ruby-on-rails/your-first-chart-using-ruby-on-rails '@@open-newtab').

## Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the product FusionMaps. 
To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the rest the of map definition files, when you need to plot maps of those countries/regions.

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace for upgrading to the latest map definition files.

To render a map, you need to include FusionCharts library in your project. Add the following code in the **app/assets/javascripts/application.js** file.

```Ruby
//= require fusioncharts/fusioncharts
//= require fusioncharts/fusioncharts.maps
//= require fusioncharts/maps/fusioncharts.world
```

To add FusionMaps, use any of the following process:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='rubygems'>RubyGems</a></li>
  <li><a data-toggle='manual'>Manual</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab rubygems-tab active'>
<div><strong>Add this line to your application’s `Gemfile`:</strong></div>
<pre><code class="custom-hlc language-ruby">
	gem ‘fusioncharts-rails’
</code></pre>
<div><strong>RubyGems contain package information along with the files to install. On the command line prompt, execute the following command:</strong></div>
<pre><code class="custom-hlc language-ruby">
	$bundle
</code></pre>
<div><strong>This command will automatically install the `fusioncharts-rails` gem. You can also install the gem directly from the command line prompt, without making any edits to the `Gemfile`. To do this, use the code line given below:</strong></div>
<pre><code class="custom-hlc language-ruby">
	$gem install fusioncharts-rails
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab manual-tab'>
<div><strong>Step 1: </strong>Copy all files from `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder.</div>
<div><strong>Step 2: </strong>Paste the copied files to the `lib` folder of your application</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**Load other Map Definition files**

To use any other map (except world and USA) from the 1400+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, then copy those map files to your current `/maps` folder. The map definition files are named in the format `fusioncharts.[MAP_ALIAS].js`, where MAP_ALIAS represents the country, state or region name.

To include map definition files in your project add the following code in the **app/assets/javascripts/application.js** file. Assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```Ruby
//= require fusioncharts/maps/fusioncharts.california
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

## Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

Include the theme files in the `vendor/assets/javascripts/fusioncharts/` folder of your project. This step is optional, the chart will render with the default theme (fusion) even if the theme is not applied.  

Add the following code in the `app/assets/javascripts/application.js` file as shown below:

```
//= require fusioncharts/fusioncharts
//= require fusioncharts/themes/fusioncharts.theme.fusion
``` 

> Including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme you have to set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').