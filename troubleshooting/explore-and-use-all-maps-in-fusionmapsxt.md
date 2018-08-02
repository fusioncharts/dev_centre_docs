---
permalink: troubleshooting/explore-and-use-all-maps-in-fusionmapsxt.html
title: Explore and use all Maps in FusionMaps XT | FusionCharts
description: FusionMaps XT includes more than 1500 maps, detailing every region across the globe. This page shows how to explore the collection and use all of the available maps.
heading: Explore and use all Maps in FusionMaps XT
chartPresent: false
---

FusionMaps XT offers beautiful and interactive maps to plot geographical data effectively, like revenue by regions, population by state, survey and election results. It has over 1500+ maps including all continents, major countries, and all US states. By default, FusionMaps XT does not ship with all these maps for faster download. 

To add these maps to your web application, download the map definition files and follow the steps given below.  

* Click [here](http://www.fusioncharts.com/downloads/addons/fusionmaps-xt-definition.zip) to download the maps definition files

Locate the **fusioncharts** folder in your web application, containing `fusioncharts.js` and `fusioncharts.maps.js`. These two JavaScript files must be present in your web application to render any map.

* Copy the **/maps** folder from the download package and paste it in your **fusioncharts** folder. This copies all the maps available in FusionMaps XT to your web application. If you need to render specific maps only, you can manually select those map definition files, and copy them to **/maps** folder in your **fusioncharts** folder.

* You can now start building any map you want for your application. Each map can be referenced in the `FusionCharts()` constructor as **maps/map_name** (e.g., **'maps/california'**). The FusionCharts library automatically loads the relevant map definition files.