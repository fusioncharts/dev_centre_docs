---
title: Setup to Install Maps | FusionCharts
description: Master setting up FusionCharts maps effortlessly with our comprehensive guide. Learn step-by-step instructions for seamless integration. Dive in now!
heading: Setup
---

## Install maps

> Replace the map definition files (of v3.12.2 or older) with the latest files available in [download package](https://www.fusioncharts.com/download/fusioncharts-suite-xt) while upgrading to __v3.13.0__.

You install maps automatically, as part of the FusionCharts Suite XT package. For detailed instructions on installing FusionCharts Suite XT or FusionMaps XT, click [here](/getting-started/plain-javascript/your-first-chart-using-plain-javascript#installation-and-including-dependencies). Once installed, ensure that `fusioncharts.js` and `fusioncharts.maps.js` files are present in the `fusioncharts` folder. If you want to use any specific map, you also need to paste its definition files in the `fusioncharts/maps/folder`.

## Install additional map files

The FusionCharts Suite XT download package contains only the USA and World maps as part of the package. To work with other maps, you need the definition files for them. A map definition file contains all the data necessary to create and render a map. You can download the additional map definition files from [here](https://www.fusioncharts.com/download/map-definition-files).

Note that the definition files you download will yield maps in extremely high resolutions. If you do not need such high resolution maps, send in a [request for custom resolution maps](https://www.fusioncharts.com/download/map-definition-files) to our Customer Support team.

Once you download the map definition package, locate the `maps` folder in the package. Copy the relevant map definition files from the `maps` folder of the download package to the `fusioncharts/maps` folder to start using them. For example, if you need to render the California map, copy the `fusioncharts.california.js` file from the maps folder of the download package and paste it into the `fusioncharts/maps/` folder.
