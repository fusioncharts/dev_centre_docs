---
permalink: exporting-charts/exporting-multiple-charts-in-a-single-image.html
title: Exporting Multiple Charts in a Single Image | FusionCharts
description: This article talks about how to export multiple charts at once and customize them or selectively export charts.
heading: Exporting Multiple Charts in a Single Image
chartPresent: true
---

Starting version 3.11.0, FusionCharts Suite XT lets you export all charts on a page in a single image at once, in the __JPG__ and __PNG__ formats. With this, you also have the option of customizing the exported charts for parameters like the width and height of the exported chart, the background color, transparency, and so on.

<p class='text-info'> Multiple charts can be exported at once only in the PNG and JPG formats. </p>

This article explains how you can:

* <a href="{{ site.baseurl }}exporting-charts/exporting-multiple-charts-in-a-single-image.html#exporting-multiple-charts-at-once-and-customizing-the-exported-charts">Export multiple charts at once and customize them</a>

* <a href="{{ site.baseurl }}exporting-charts/exporting-multiple-charts-in-a-single-image.html#selectively-exporting-charts">Selectively export charts</a>

## Exporting Multiple Charts at Once and Customizing the Exported Charts

To demonstrate how multiple charts can be exported in a single image, we've created a sample with four charts. The sample also includes a button that is to be clicked to download the charts in an image. 

Take a look at the sample shown below. Click the __Export Charts__ button to export the charts in a single image.

<input type="submit" value="Export Charts" onclick="batchExportConfig();" />

{% embed_chart exporting-multiple-charts-in-a-single-image-example-1.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-2.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-3.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-4.js %}


The image thus downloaded is as shown below:

![Downloaded Image]({{ site.baseurl }}assets/images/batchExport.png)

Read on to know the methods, objects, and attributes that are used to export multiple charts using the default export configuration as well as how you can customize it.

The `FusionCharts.batchExport()` method enables batch export of charts. This method can take:

* No arguments

__OR__

* Object as an argument

The arguments taken by this method are explained below:

__Note:__ All the above arguments listed below are case sensitive.

<table>
	<tr> 
		<th> Argument </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> No argument </td>
		<td> Default; all charts are exported vertically according to their original height and width </td>
	</tr>
	<tr> 
		<td> `imageWidth` </td>
		<td> Width of the image to be exported (Default width = maximum chart width + 10) </td>
	</tr>
	<tr>
		<td> `imageHeight` </td>
		<td> Height of the image to be exported (Default height = (total height of all charts + 5) * (no of charts + 1)) </td>
	</tr>
	<tr>
		<td> `charts` object </td>
		<td> The required configuration for the chart can be provided in this object using the attributes described below: <br> <br> `id`: Valid FusionCharts ID, to attach the chart on the main image <br> `x`: X-coordinate of the of the starting position for the exported chart; default value=5 <br> `y`: Y-coordinate position for the exported chart; default value=previous chart's bottom position+5 <br> `width`: Custom width for the exported chart; default value=chart’s current width <br> `height`: Custom height for the exported chart; default value=chart’s current height <br> <br> __Note__: If only one value from the weight and the height of the chart is provided, the value of the other is calculated in a way that the aspect ratio is maintained. </td>
	</tr>
	<tr>
		<td> `background` object </td>
		<td> The required configuration for the ​*exported image's*​ background can be provided in this object using the attributes described below: <br> <br> `bgColor`: Background color for the exported image; default value=white  
			`bgImage`: Background image for the exported image  
			`bgImageAlpha`: Transparency of the background image  
			`bgImageX`: X-coordinate of the starting position of the image  
			`bgImageY`: Y-coordinate of the starting position of the image  
			`bgImageWidth`: Width of the background image; default value=original width of the image  
			`bgImageHeight`: Height of the background image; default value=original height of the image <br> <br> 
			__Note__: If only one value from the weight and the height of the chart is provided, the value of the other is calculated in a way that the aspect ratio is maintained. </td>
	</tr>
	<tr>
		<td> `exportTargetWindow` </td>
		<td> Set to ___self__ to open the exported image in the same window <br> Set to ___blank__ to open the exported image in a new window </td>
	</tr>
	<tr>
		<td> `exportAction` </td>
		<td> Set to ___save__ to save the exported image on the server <br> Set to ___download__ to send back the image to the client as a download </td>
	</tr>
	<tr>
		<td> `exportFileName` </td>
		<td> Default file name (excluding the extension) for the exported image </td>
	</tr>
	<tr>
		<td> `exportHandler` </td>
		<td> __For server-side exporting__: Path of the Export Handler (the ready-to-use scripts provided by FusionCharts) <br> <br> __For client-side exporting__: DOM ID of the FusionCharts Export Component embedded in the web page, along with the chart </td>
	</tr>
	<tr>
		<td> `exportFormat` </td>
		<td> List of formats in which the chart can be exported (Not supported for SVG format)</td>
	</tr>
	<tr>
		<td> `exportCallback` </td>
		<td> Name of the JavaScript function that is called when the export process finishes </td>
	</tr>
	<tr>
		<td> `exportAtClientSide` </td>
		<td> Set to __1__ to enable client-side exporting <br> <br> __Note__: This attribute is applicable only till v3.12.0.</td>
	</tr>
	<tr>
		<td> `exportMode` </td>
		<td> When chart exporting is enabled, this attribute is used to switch between the modes of export. <br> __Default value__: auto (the auto exporting feature is enabled) <br> __Note__: Starting v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute. However, you don’t need to make any changes to the existing setup because, starting v3.12.1, the FusionCharts library comes with the proper mapping already provided.</td>
	</tr>
</table>

For the above exported image, we have specified the:

* Default file name of the exported image
* Format of the exported image

The data structure of the `batchExport()` method, to export the charts in the above sample is given below:

```javascript

batchExportConfig = function() {
	FusionCharts.batchExport({
	    "charts":[
	       {"id":"chart-1"},
	       {"id":"chart-2"},
	       {"id":"chart-3"},
	       {"id":"chart-4"}
	    ],
      "exportFileName":"batchExport",
      "exportFormat":"jpg",
      "exportAtClientSide":"1",      
  	});
};

```

## Selectively Exporting Charts

The previous sample has four charts—the sales report for Apple products from 2012 to 2015. Let's say that out of these four charts, you need to download only two charts—assume, only the ones for the years __2015__ and __2012__.

The `charts` object argument of the `batchExport()` method lets you configure this selection. All you need to do is, in the `charts` object, specify the IDs of only those charts that you need to export. 

Take a look at the sample shown below:

<input type="submit" value="Export Charts" onclick="selectiveBatchExportConfig();" />

{% embed_chart exporting-multiple-charts-in-a-single-image-example-1.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-2.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-3.js %}
{% embed_chart exporting-multiple-charts-in-a-single-image-example-4.js %}

When you click the __Export Charts__ button in this sample, the image downloaded is as shown below:

![Downloaded Image]({{ site.baseurl }}assets/images/selectiveBatchExport.png)


For the above exported image, we have specified the:

* Width and height of the exported image
* Default file name of the exported image
* Format of the exported image


Therefore, to download only the charts for the years __2015__ and __2012__, this is how you code the `batchExport()` method:

```javascript

batchExportConfig1 = function() {
	FusionCharts.batchExport({
	    "charts":[
	       {"id":"chart-1", x: 25, y: 25, width: 400, height: 225},	       
	       {"id":"chart-4", x: 25, y: 275, width: 400, height: 225}
	    ],
	  "imageWidth": 450,
	  "imageHeight": 525,
      "exportFileName":"selectiveBatchExport",
      "exportFormat":"jpg",
      "exportAtClientSide":"1",      
  	});
};

```

<script pagespeed_no_defer="" type="text/javascript" data-chart='true' src='{{ site.baseurl }}/resources/js/exporting-multiple-charts-in-a-single-image.js'></script>