---
permalink: using-with-server-side-languages/php/creating-charts-with-zend-and-fusioncharts.html
title: Creating Charts with Zend and FusionCharts | FusionCharts
description: This section showcases how you can use this FusionCharts PHP wrapper with Zend framework.
heading: Creating Charts with Zend and FusionCharts
chartPresent: true
---

## Outline

 - Introduction
 - Requirements
 - Creating Application & Configuration
 - Creating Chart Object and Rendering the Chart
 - Summary

Zend Framework is a cluster of professional PHP packages that can be used to develop web applications and services using PHP 5.6+. It provides 100% object oriented code using a broad spectrum of language features.

In this tutorial, we will be creating JavaScript charts using Zend and FusionCharts.

FusionCharts is a comprehensive JavaScript charting library packed with 90+ charts and 1000+ maps. 

One chart type can’t be used for visualising all types of data. FusionCharts offers a wide range of charts to choose from, depending on the type of data to be plotted and the type of analysis to be done. The package includes basic charts like the column chart, pie chart, doughnut chart, and so on; domain-specific power charts like the logarithmic charts, spline charts, error charts, and so on; gauges and widgets like the angular gauge, bulb gauge, thermometer gauge, and funnel and pyramid charts, and so on; and maps for all continents, major countries, and all US states.

FusionCharts works well across all browsers (including older ones like IE6) and has some pretty cool and useful features like client-side image export, events, themes, annotations, etc.

Without much ado then, let’s get started on how we can use the Zend Framework with FusionCharts for creating charts.

We’ll first list down the components that we need for creating charts. Here’s what we’ll require: 

## XAMPP (Server)

We are going to use the XAMPP server for this tutorial. You can use any other server that supports PHP and its frameworks like the MAMP server, the AMPPS server, etc. You can download XAMPP from [here](https://www.apachefriends.org/download.html); it is available across all major platforms including Windows, OS X, and Linux.

## Zend Framework

Zend uses Composer as its package dependency manager. You can install Zend using the composer command given below:

```bash 
	$ composer require zendframework/zendframework
```

<p class="text-info"> To know more about installing Zend and its packages, click [here](https://framework.zend.com/downloads).</p>

## FusionCharts

You can [download](http://www.fusioncharts.com/download/) the latest version of FusionCharts Suite XT from here. Alternately, you can also install it using the npm or bower package managers, using the commands given below:

__For npm:__
```bash 
	$ npm install fusioncharts
$ npm install fusionmaps
```

__For Bower:__
```bash 
	$ bower install fusioncharts
$ bower install fusionmaps
```

<p class="text-info">FusionCharts also provides a dedicated PHP wrapper to create charts in PHP. You can download it from [here](http://www.fusioncharts.com/php-charts/).</p>

Now, as we have our environment ready, let’s create a Zend skeleton application in which we will embed our chart. For this, we will use the Composer command given below:

```bash 
	$ composer create-project -s dev zendframework/skeleton-application path/to/install
```

This command will install an initial set of dependencies needed for our application and we can now start configuring our application using the steps given below.

Click [here](https://docs.zendframework.com/tutorials/getting-started/skeleton-application/) to read more about the skeleton application and details on how you can create one.


### Step 1: Setting up the virtual host

In this step, we will define a virtual host for our application by adding the code given below in the httpd.conf file of our apache web server.

```php

    <VirtualHost *:80>
	    ServerName zf-tutorial.localhost
	    DocumentRoot /path/to/zend framework/public
	    SetEnv APPLICATION_ENV "development"
	    <Directory /path/to/zend framework/public>
	        DirectoryIndex index.php
	        AllowOverride All
	        Require all granted
        </Directory>
	</VirtualHost>

```

Once we have made the changes in our config file, we will save the file and restart the server. We will now start our zend skeleton application using [this URL](http://localhost:8080/) to verify we are on right path. 

### Step 2: Creating the PHP file

In this step, we will create a new PHP file, which will include our chart object. First, we will include the FusionCharts PHP wrapper in our file using the code given below:

```php
    <?php
	    // including FusionCharts PHP charts wrapper
	    include("fusioncharts/fusioncharts.php");
	?>
```

Next, we will include the FusionCharts package JavaScript files and chart container, which will be a HTML div element in the HTML code in our PHP file. 

```html+php
	<html>
	   <head>
	     <title>Creating charts in PHP with Zend and FusionCharts</title>
	     <!-- including FusionCharts core package files -->
	     <script type="text/javascript" src="path/to/fusioncharts.js"></script>
	     <script type="text/javascript" src="path/to/fusioncharts.charts.js"></script>
	    </head>
	    <body>
	      <div id="chartContainer">Chart will render here!</div>
	    </body>
</html>

```

Next, we will create a chart object using the FusionCharts PHP wrapper class and append it in our PHP file.

```php
    
	<?php
	    // chart object
	    $columnChart = new FusionCharts("column3d", "zend-chart" , 600, 300, "chartContainer", "json",
	        '{
	            "chart": {
	                // chart cosmetics and properties
	    "caption": "Quarterly Revenue",
	                "subCaption": "Last year",
	                "xAxisName": "Quarter",
	                "yAxisName": "Amount (In USD)",
	                "theme": "fint",
	                "numberPrefix": "$",
	                "usePlotGradientColor": "1",
	                "plotGradientColor": "#eeeeee"
	            },
	            "data": [
	                    {
	                        "label": "Q1",
	                        "value": "1950000",
	                        "color": "#008ee4"
	                    }, 
	                    {
	                        "label": "Q2",
	                        "value": "1450000",
	                        "color": "#9b59b6"
	                    }, 
	                    {
	                        "label": "Q3",
	                        "value": "1730000",
	                        "color": "#6baa01"
	                    }, 
	                    {
	                        "label": "Q4",
	                        "value": "2120000",
	                        "color": "#e44a00"
	                    }
	                ]
	            }'
	    );
	    // rendering the chart
	    $columnChart->render();
?>

```

To know more about creating the chart object, you can check out [this developer documentation page](http://www.fusioncharts.com/dev/using-with-server-side-languages/php/introduction.html) on the FusionCharts website.
We have now created our PHP file that we will place inside the public folder of our server. 


### Step 3: Executing the PHP file

In this step, we will render the chart we created by executing the PHP file created in step 2 via the browser using this URL: http://localhost/phpFileName where `phpFileName` is the name of the file you created; in our example,  this will be `columnChart_json.php`. If you’ve followed all the directions given above properly, you should have a working chart as shown in the screenshot below: 

![screenshot : Creating Charts with Zend and FusionCharts]({{ site.baseurl }}assets/images/creating-charts-with-zend-and-fusioncharts.jpg)

<p class="text-info"> If you see any errors in your code, click [here](https://github.com/Pr3rana/fc-sample/tree/master/php/php_frameworks/zend) to view the complete source code of the sample project we created for this tutorial. </p>


