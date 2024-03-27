---
permalink: exporting-charts/using-fc-export-server/logging-export-statistics.html
title: Logging Export Statistics | FusionCharts
description: Learn how to use FusionCharts. Export Server to log export statistics, ensuring your charts are efficiently exported and tracked. Start optimizing today!
heading: Logging Export Statistics
chartPresent: True
---

Starting v3.12.1, FusionCharts Suite XT introduces a feature that lets users log export statistics. With the help of this feature, among many other details, a user can obtain the following statistics:

* Type of the exported chart
* Selected export format
* Filename of the exported file
* Time zone of the user who has exported the chart
* Whether the user (exporting the chart) is using the licensed version or the trial version of the product

The implementation of this feature helps to monitor the usage of the export server in either case—when the FusionCharts’ public server is being used as well as when a customer’s private export server is being used. Logging the export statistics helps to understand end user behavior and aids in crucial product management decisions.

The chart shown below is rendered with the logging feature enabled.

{% embed_all logging-export-statistics-example-1.js %}

The logging details can be handled by the export server as well as by the log server.
In case of server-side export and auto-export, both of which involve a call to the export server in the export process flow, the export server handles the logging details.
In case of client-side export, wherein the entire exporting process is carried out on the client, the client makes a separate call to the log server, which then handles the logging details. 

## Analytics UI for Logging Details

The analytics UI has been developed in such a way that the log reports will work in all modern browsers and can be easily consumed by the users. This also helps the administrator to easily keep a tab on the entire volume of exports as well as on individual exports.

This is how the analytics UI looks:

<img src="{% site.BASE_URL %}/images/analytics-ui.png" width="700" height="auto" alt="analytics UI">

>  An end user can view logs only if the user has setup his own export server. In this case, the logs can be seen at __{USER_DOMAIN}/api/v1.0/logs__. <br> FusionCharts provides its users with a Logger UI package that presents the logged in statistics in an easy-to-read, tabular format. The analytics UI image shown above is an example. <br> Users exporting through the FusionCharts public export sever will not be able to view the statistics logged. </p>

## Logging Architecture

The image below shows the architecture of the export statistics logger:

<img src="{% site.BASE_URL %}/images/export-statistics-logging-architecture.png" width="700" height="auto" alt="architecture of the export statistics logger">

## Attributes Used for Enabling Logging of Export Statistics

<table width="100%" border="0" class="table" cellpadding="2" cellspacing="0">
    <thead>
        <tr>
            <th width="25%" valign="top" class="header">Attribute Name</th>
            <th width="10%" valign="top" class="header">Type</th>
            <th width="10%" valign="top" class="header">Range</th>
            <th width="55%" valign="top" class="header">Description</th>
        </tr>
    </thead>
    <tbody>     
        <tr>
            <td valign="top" class="code">`logEnabled`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">Enables the logging of export statistics when set to __1__ <br> __Default value__: 0 (logging is disabled) </td>
        </tr>
        <tr>
            <td valign="top" class="code">`logMode`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">__server__, __client__, __auto__</td>
            <td valign="top" class="text">Used to set the export mode for which the export statistics have to be logged <br> __Default value__: auto </td>
        </tr>
        <tr>
            <td valign="top" class="code">`logHandler`</td>
            <td valign="top" class="text">URL</td>
            <td valign="top" class="text"> </td>
            <td valign="top" class="text"> Used to set the URL for the log endpoint <br> __Default value__: [http://log.api3.fusioncharts.com/](http://log.api3.fusioncharts.com/) <br> The use of __http__ or __https__ will depend on the protocol being used. </td>
        </tr>
    </tbody>
</table>

## Export Statistics Logged

The table below gives a brief description of all the export statistics that are logged:

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
			<td valign="top" class="code"> `chartType` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> Chart type </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `chartCaption` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code"> </td>
			<td valign="top" class="code"> Chart caption </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `chartSubCaption` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code"> </td>
			<td valign="top" class="code"> Chart sub-caption </td>
		</tr>		
		<tr> 
			<td valign="top" class="code"> `isSingleExport` </td>
			<td valign="top" class="code"> Boolean </td>
			<td valign="top" class="code"> 0/1 </td>
			<td valign="top" class="code"> Used to specify whether the export will be a single chart export (__1__) or a batch export (__0__) <br> __Default value__: 1 (single chart export) </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `exportFilename` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code"> </td>
			<td valign="top" class="code"> Name of the file being exported, including the extension <br> __Default value__: FusionCharts </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `exportFormat` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code"> </td>
			<td valign="top" class="code"> Format of the exported file </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `chartOriginUrl` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> URL of the origin host where the chart is embedded <br> Read from request headers
 </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `userAgent` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> Standard browser user agent information used for browser identification <br> Read from request headers </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `isFullVersion` </td>
			<td valign="top" class="code"> Boolean </td>
			<td valign="top" class="code"> 0/1 </td>
			<td valign="top" class="code"> Used to specify whether the licensed version (__1__) or the trial version (__0__) is being used </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `version` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> Version no. of the FusionCharts library being used </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `userTimeZone` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> Time zone of the user exporting the chart </td>
		</tr>
		<tr> 
			<td valign="top" class="code"> `serverDateTime` </td>
			<td valign="top" class="code"> String </td>
			<td valign="top" class="code">  </td>
			<td valign="top" class="code"> Server date and time (in UTC) at the time of export </td>
		</tr>
		<tr>
            <td valign="top" class="code">`exportAction`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">__download__, __save__, __download-save__</td>
            <td valign="top" class="text"> When a private export server is used, the action specifies the action that will be taken on export. <br> The attribute takes the following values: <br>
            - __download__: the exported file is __only downloaded__ on the client and __not saved__ on the server. <br>
	        - __save__: the exported file is __only saved__ on the server and __not downloaded__ on the client. <br>
	        - __download-save__: the exported file is __downloaded__ on the client __and__ also __saved__ on the server <br>
	        - __Default value__: download
            </td>
        </tr>
	</tbody>
</table>
