---
permalink: api/tutorials/get-formatted-numbers-outside-chart.html
title: Get Formatted Numbers Outside Chart | FusionCharts
description: FusionCharts number formatter module lets you format data, you can get this data even outside the chart area.
heading: Get Formatted Numbers Outside Chart
chartPresent: true
layout: page
---

FusionCharts `number formatter module` lets you format data, you can get this data even outside the chart area.

Given below is a live example of data visualisation along with the raw data. If you wish to see the data in the same format as that within the chart, just click on the format button.

{% embed_chart get-formatted-numbers-outside-chart-example-1.js %}

This cool feature is actually very simple to implement in a page. Think of FusionCharts as a JS library providing you a simple API to format numbers. You can do that in two ways.

1. Reuse the number format used in the chart (included in the page)
2. Use FusionCharts library in the page to specify the number format required

## Reuse the number format used in the chart on page

Number formatting is by default active in all charts. Reuse this format in your page by simply invoking the API as below.

```javascript
	var chart = new FusionCharts ( /* set of parameters */ );
 
	// Rendering of chart is not a prerequisite to use the API on the chart instance.
	// Once the chart instance is created, you can use the number formatter API.
	// Returns the formatted number as string
	chart.formatNumber( theNumberToBeFormatted );
```

## Use FusionCharts library in the page to specify the number format required

You may use FusionCharts library to format number even if you are not rendering a chart using FusionCharts Suite XT in your page. Just include fusioncharts.js in your page and you are ready to format numbers in your page using the number formatter API.

```javascript
	<script type="text/javascript" src="js/fusioncharts.js"></script>
```


A sample API usage is given below. Here, we are formatting bytes to KB, MB and GB.

```javascript
	FusionCharts.formatNumber(1024*1024*1024*5, {numberScaleValue : '1024,1024,1024', numberScaleUnit : ' KB, MB, GB' })
	 
	// Returns "5 GB"
```


The first parameter accepts the number to be formatted. In this case, we provide the size of a memory in bytes.

The second parameter accepts an object of number formatting configurations, here the pair of attributes `numberScaleValue` and `numberScaleUnit` work together to specify the rule of number conversion and defines the system of units.

The API returns a string of the formatted number.

Read more about the FusionCharts Suite Number Format options at [Number Format](/tutorials/configuring-your-chart-basic/number-format).