---
permalink: exporting-charts/using-fc-export-server/modes-of-export/exporting-charts-and-chart-data-using-the-client-side-export-feature.html
title: Exporting Charts and Chart Data Using the Client-side Export Feature | FusionCharts
description: FusionCharts lets you export the rendered charts in the JPG, PNG, SVG, and PDF formats. 
heading: Exporting Charts and Chart Data Using the Client-side Export Feature
chartPresent: true
---

FusionCharts Suite XT, starting v3.8.0, includes support for client-side exporting.

While FusionCharts has an established server-side exporting feature, common concerns with this feature include:

* Availability of a good internet connection to send to and receive data from the server
* Confidentiality concerns around using the publicly hosted export server 
* Technical proficiency at the client's end 

FusionCharts provides programs to set up the export server at a client’s end, but this requires the end user(s) to have a certain amount of knowledge about configuring and using servers. This, again, is a downside. 

The primary need for coming up with the client-side export feature  was to eliminate the need of a server for exporting, thus bringing down the turnaround time it takes for an export, as well as to address the data confidentiality issues. The client-side export feature removes the round-trip involved in exporting from a  server and eliminates the difficulties involved in setting up one with the proper dependencies.

> 
Please note that, at present, this feature is supported only by the __Chrome__,  __Firefox__, and __IE >= 10__ browsers. The FusionCharts team is working to include support for other browsers also.
</p>

Given below is a brief description of the attributes that are used to enable client-side exporting:

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

The sample chart below showcases the client-side export feature. As with server-side export, click <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> from the top-right corner of the chart and select __Export as JPG__.

{% embed_all exporting-charts-and-chart-data-using-the-client-side-export-feature-example-1.js %}

How do you know if the export was done on the client-side? The images below show you the difference:

<table>
	<tr>
		<th> <center> Network tab in the browser console: Client-side export </center> </th>		
	</tr>
	<tr>
		<td> <span> ![image alt text Network tab: Client-side export](/images/getting-started-adding-interactivity-exporting-to-images-or-pdf-client-side-exporting-image-2.jpg) </span></td>
	</tr>
</table>

<table>
	<tr>
		<th> <center> Network tab in the browser console: Server-side export </center> </th>		
	</tr>
	<tr>
		<td> <span> ![image alt text Network tab: Server-side export](/images/getting-started-adding-interactivity-exporting-to-images-or-pdf-client-side-exporting-image-3.jpg) </span> </td>
	</tr>
</table>

The graphic below details the steps that are involved in a client-side export:

{:refdef: style="margin-left: auto; margin-right: auto; width: 6em"}
<img src="{% site.BASE_URL %}/images/exporting-to-images-or-pdf-client-side-exporting-steps.png" width="auto" height="600" alt="client-side export">
{: refdef}

This feature uses the HTML5 API; therefore, it is important that modern browsers include support for:

* Canvas
* BLOB (Binary Large OBject, or large binary data as a single entity)
* base-64 encoding and decoding

These technologies perform the necessary conversion from SVG to the required format (the rendered charts in the JPG, PNG, or PDF formats, or the chart data (in the XLSX format). Using the HTML5 API helps to overcome the earlier browser functionality limitations that hampered the implementation of this feature.

>  FusionCharts supports exporting chart data as XLSX starting v3.11.0. Select __Download as XLSX__ from the menu in the top-right corner of the chart. </p>