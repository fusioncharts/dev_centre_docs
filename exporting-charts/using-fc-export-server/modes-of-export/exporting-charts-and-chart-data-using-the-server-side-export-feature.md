---
permalink: exporting-charts/using-fc-export-server/modes-of-export/exporting-charts-and-chart-data-using-the-server-side-export-feature.html
title: Exporting Charts and Chart Data Using the Server-side Export Feature | FusionCharts
description: Effortlessly export your FusionCharts & chart data using the server-side export feature. Get started today by learning how to configure and use it. Don't delay!
heading: Exporting Charts and Chart Data Using the Server-side Export Feature
chartPresent: true
---

FusionCharts Suite XT lets you export the charts rendered on a web page as images or PDFs. It also lets you export the chart data in an Excel spreadsheet.

FusionCharts Suite XT supports the following 3 modes of export:

* Server-side export
* Client-side export
* Auto export (Default)

In this article, you will be shown how charts and chart data can be exported using the server-side exporting capabilities. 

## Enabling Server-side Export

Given below is the brief description of the attributes used to enable server-side exporting:

<table width="100%" border="0" class="table" cellpadding="2" cellspacing="2">
	<thead>
		<tr>
			<th width="25%" valign="top" class="header"> Attribute Name </th>
			<th width="25%" valign="top" class="header"> Type </th>
			<th width="25%" valign="top" class="header"> Range </th>
			<th width="25%" valign="top" class="header"> Description </th>
		</tr>
	</thead>
	<tbody>
		<tr> 
			<td valign="top" class="code"> `exportEnabled` </td>
			<td valign="top" class="code"> Boolean </td>
			<td valign="top" class="code"> 0/1 </td>
			<td valign="top" class="code"> Enables the exporting feature in charts, when set to __1__ <br> __Default value__: 0 (the exporting feature is disabled) </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `exportMode` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code"> __server__, __client__, __auto__ </td>
			<td valign="top" class="code"> When chart exporting is enabled, this attribute is used to switch between the modes of export. <br> To __enable client-side exporting__, set this attribute to __client__. <br> __Default value__: auto (the auto exporting feature is enabled) <br> __Note__: Starting v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute. However, you don’t need to make any changes to the existing setup because, starting v3.12.1, the FusionCharts library comes with the proper mapping already provided. </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `exportAtClientSide` </td>
			<td valign="top" class="code"> Boolean </td>
			<td valign="top" class="code"> 0/1 </td>
			<td valign="top" class="code"> __Applicable only till v3.12.0__ <br> If chart exporting is enabled, this attribute is used to set whether charts will be exported on the client-side or the server-side. <br> __Default value__: 0 (server-side exporting is enabled) </td>
		</tr>
	</tbody>
</table>

When exporting has been enabled for a chart, the chart is rendered with the export menu button, seen in the top right corner of the chart. Click/hover over the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> button to display the export menu.

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

A live chart with server-side exporting enabled is shown below:

{% embed_all exporting-charts-and-chart-data-using-the-server-side-export-feature-example-1.js %}

__Note__: Go to the JSON tab to see how the `exportEnabled` and `exportMode` attributes have been used in the JSON tab.

## Features of Server-side Exporting

Using the server-side mode of exporting ensures that the exported image has exactly the same quality as the image on the web page. This mode ensures a successful export with a public server as well as a private export server that has been set up correctly.

The complete export process is carried out on the server-side. All exports, therefore, will require a round-trip from the server, which might add to the time it takes to export a chart, depending on the file size, and the network speed.

Two very prominent features of server-side exporting, introduced in v3.12.1, are the support for downloading CORS-enabled embedded images and the logging of export server statistics.  

### CORS-enabled Embedded Image Support

Previously, if the exported chart included an image from an external host (for example, file hosting services like Imgur, AWS S3), the image was removed if the chart was downloaded using the client-side export feature. This limitation was due to browser security restrictions w.r.t exporting such images. Server export, however, never had such a restriction.

In the current implementation, the limitation has been refined to allow embedded images from external hosts that have the __Access-Control-Allow-Origin__ header set to __allow__. This allows images in the current domain, the domain in which the chart is rendered, to be downloaded on the client-side, thus also enabling support for a lot of popular image services.

### Logging Export Statistics

The __log server__ as well as __export server__ can now save the export data, which is the metadata of every export done by the client, along with the timestamp. 
In case of server-side export and auto-export, both of which involve a call to the export server in the export process flow, the export server handles the logging details.
In case of client-side export, wherein the entire exporting process is carried out on the client, the client makes a separate call to the log server, which then handles the logging details.

An analytics UI has also been developed in such a way that the log reports will work in all modern browsers and can be easily consumed by the users. This also helps the administrator to easily keep a tab on the entire volume of exports as well as on individual exports.
