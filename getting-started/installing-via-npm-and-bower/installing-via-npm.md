---
permalink: getting-started/installing-via-npm-and-bower/installing-via-npm.html
title: Installing via npm | FusionCharts
description: FusionCharts Suite XT can now be downloaded via the npm and Bower package managers. This section talks about installing FusionCharts Suite XT via npm.
heading: Installing via npm
chartPresent: false
---

This section talks about how the **fusioncharts** and the **fusionmaps** packages can be installed via the **npm** package management software.

<p class="text-info"> The **fusioncharts** package contains files for all charts and widgets and only two map definition files, for the World map and the USA map. The **fusionmaps** package contains files for all charts and widgets and map definition files for all maps. Consequently, it takes longer for installation than the **fusioncharts** package and is recommended only if your application needs maps other than the World and USA maps.</p>

## Installing the **fusioncharts** Package

**Step 1**: Install the FusionCharts package.

   {% highlight javascript lineanchors%}{% raw %}
   npm install fusioncharts
   {% endraw %}{% endhighlight %}
   
**Step 2**: Load FusionCharts using `require`.

   {% highlight javascript lineanchors%}{% raw %}
   var FusionCharts = require("fusioncharts");
   {% endraw %}{% endhighlight %}
   
**Step 3**: Load the charts module using `require`.

   {% highlight javascript lineanchors%}{% raw %}
   require("fusioncharts/fusioncharts.charts")(FusionCharts);
   {% endraw %}{% endhighlight %}
   
**Step 4**: Create the FusionCharts instance required to render the chart.

{% highlight javascript lineanchors%}{% raw %}
	var chart = new FusionCharts ({
	   "type": "column2d",
	   "width": "500",
	   "height": "300",
	   "dataFormat": "json",
	   "dataSource": {
		    chart:{},
		    data: [{value: 500}, {value: 600}, {value: 700}]
	 	}
	}).render("chartContainer");
{% endraw %}{% endhighlight %}

## Installing the **fusionmaps** Package

**Step 1**: Install the FusionMaps package.

   {% highlight javascript lineanchors %}{% raw %} 	
   npm install fusionmaps
   {% endraw %}{% endhighlight %}

**Step 2**: Load FusionCharts using `require`.

   {% highlight javascript lineanchors %}{% raw %} 
   var FusionCharts = require("fusioncharts");
   {% endraw %}{% endhighlight %}
   
**Step 3**: Load the maps module using `require`.

   {% highlight javascript lineanchors %}{% raw %} 
   require("fusioncharts/fusioncharts.maps")(FusionCharts);
   {% endraw %}{% endhighlight %}

   
**Step 4**: Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**, where **MAP_ALIAS** gets replaced by the map's JavaScript alias. Click [here](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html){:target='_blank'} to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included. <br> <br> Therefore, assuming that you need to render the world map, the alias name __world__ replaces __MAP_ALIAS__ in the format.
   
   {% highlight javascript lineanchors %}{% raw %}
   require("fusioncharts/maps/fusioncharts.world")(FusionCharts);
   {% endraw %}{% endhighlight %}

**Step 5**: Create the FusionCharts instance required to render the map.

{% highlight javascript lineanchors %}{% raw %}   
   var chart = new FusionCharts ({
	"type": "world",
	"width": "500",
	"height": "300",
	"dataFormat": "json",
	"dataSource": {
		chart:{}
		
		}	
	}).render("chartContainer");
{% endraw %}{% endhighlight %}

<p class="text-info"> The map definition files have to be included for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there. </p>

## Package-specific Dependencies for npm

- To render a chart belonging to the PowerCharts package, load the PowerCharts module:

	{% highlight javascript lineanchors %}{% raw %}
	require("fusioncharts/fusioncharts.powercharts")(FusionCharts);
	{% endraw %}{% endhighlight %}

- To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

	{% highlight javascript lineanchors %}{% raw %}
	require("fusioncharts/fusioncharts.fusionwidgets")(FusionCharts);
	{% endraw %}{% endhighlight %}

<p class="text-info"> To know which chart belongs to which package, refer the [list of charts](http://www.fusioncharts.com/dev/getting-started/list-of-charts.html){:target='_blank'}. </p>

- To render a map, load the FusionMaps module and the map definition file for that map:

	{% highlight javascript lineanchors %}{% raw %}
	require("fusioncharts/fusioncharts.maps")(FusionCharts);  
require("fusioncharts/maps/fusioncharts.world")(FusionCharts);
	{% endraw %}{% endhighlight %}

<p class="text-info"> To know the map definition file names, refer the [list of maps](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html){:target='_blank'}. </p>

## Chart-specific Dependencies for npm

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file.
  
  {% highlight javascript lineanchors %}{% raw %}
  var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require("fusioncharts/fusioncharts.zoomscatter")(FusionCharts);
  {% endraw %}{% endhighlight %}

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

  {% highlight javascript lineanchors %}{% raw %}
  var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.powercharts")(FusionCharts);  
require("fusioncharts/fusioncharts.treemap")(FusionCharts);
  {% endraw %}{% endhighlight %}

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

  {% highlight javascript lineanchors %}{% raw %}
  var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.ssgrid")(FusionCharts);
  {% endraw %}{% endhighlight %}

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

  {% highlight javascript lineanchors %}{% raw %}
  var FusionCharts = require("fusioncharts");  
require("fusioncharts/fusioncharts.gantt")(FusionCharts);
  {% endraw %}{% endhighlight %}