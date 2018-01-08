---
permalink: getting-started/installing-via-npm-and-bower/rendering-charts-via-npm.html
title: Rendering Charts via npm | FusionCharts
description: FusionCharts Suite XT can now be downloaded via the npm and Bower package managers. This section talks about rendering charts via npm.
heading: Rendering Charts via npm
chartPresent: true
---

The [Installing via npm](/getting-started/installing-via-npm-and-bower/installing-via-npm) article was about how you can install FusionCharts Suite XT version via npm package manager.
This section demonstrates rendering a chart via npm.

Take a look at the column 2D chart shown below:

{% embed_chart chart-guide-standard-charts-creating-standard-charts-example-1.js %}

The data structure needed to render this chart via npm is given below:

```javascript
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
var chart = new FusionCharts ({
	"type": "column2d",
	"width": "500",
	"height": "300",
	"dataFormat": "json",
	"dataSource": {
	    chart:{},
	    data: [{
            "label": "Jan",
            "value": "420000"
        }, 
        {
            "label": "Feb",
            "value": "810000"
        }, 
        {
            "label": "Mar",
            "value": "720000"
        }, 
        {
            "label": "Apr",
            "value": "550000"
        }, 
        {
            "label": "May",
            "value": "910000"
        }, 
        {
            "label": "Jun",
            "value": "510000"
        }, 
        {
            "label": "Jul",
            "value": "680000"
        }, 
        {
            "label": "Aug",
            "value": "620000"
        }, 
        {
            "label": "Sep",
            "value": "610000"
        }, 
        {
            "label": "Oct",
            "value": "490000"
        }, 
        {
            "label": "Nov",
            "value": "900000"
        }, 
        {
            "label": "Dec",
            "value": "730000"
        }]
	}
}).render("chartContainer");

```