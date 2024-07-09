---
permalink: api/tutorials/get-svg-representation-of-a-chart.html
title: Get SVG Representation of a Chart | FusionCharts
description: Transform any chart into an SVG image with ease using our tutorial! By leveraging native browser support for SVG, you can embed charts into web pages.
heading: Get SVG Representation of a Chart
chartPresent: true
layout: page
---

## Shown below is a code snippet that shows you how to get a SVG string from a chart.

Using FusionCharts Suite XT you can easily get the SVG string of any chart using the `getSVGString` method. Shown below is a chart that displays the SVG string of a chart when the button is clicked.

{% embed_chart get-svg-representation-of-a-chart-example-1.js %}

Shown below is a code snippet that shows you how to get a SVG string from a chart.

```javascript
	var svgString = revenueChart.getSVGString();
```

Here the chart reference is stored in `revenueChart` and the svgString variable contains the SVG representation of the chart.

Alternatively you can also download a SVG file of your chart using the export functionality. You must enable the export feature using the exportEnabled attribute at the chart level like this

```javascript
	"exportEnabled" : "1"
```


You will see a list of options when you click on the icon on the top right of the screen, one of them being Download as SVG vector image.
