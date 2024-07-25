---
permalink: exporting-charts/using-fc-export-server/modes-of-export/exporting-charts-and-chart-data-using-the-auto-export-feature.html
title: Exporting Charts and Chart Data Using the Auto Export Feature | FusionCharts
description: Explore FusionCharts' auto-export feature to effortlessly export charts and data. Optimize your workflow with FusionCharts Export Server. Get started today!
heading: Exporting Charts and Chart Data Using the Auto Export Feature
chartPresent: true
---

## The table below shows the comparison between the server-side and client-side modes of export:

FusionCharts Suite XT lets you export charts as images and PDF as well as the chart data in the XLSX format.
To enable chart export, the suite supports the following three modes of export:

- Server-side export
- Client-side export
- Auto export

While FusionCharts already included support for server-side and client-side exporting, it introduces the auto export feature in its v3.12.1.

Before we delve into details about the auto export feature, let us first take at a look at the comparison between the server-side and clinet-side exporting modes to understand what prompted the need for an auto export mode.

The table below shows the comparison between the server-side and client-side modes of export:

<table> 
	<tr>
		<td> </td>
		<th> <b> Server-side Export </b> </th>
		<th> <b> Client-side Export </b> </th>
	</tr>
	<tr> 
		<th> <b> Advantages </b> </th>
		<td> The entire export process is carried out through the export server. This ensures that the quality of the exported chart is the same as that on the webpage. </td>
		<td> The entire export process is carried out through the client’s browser. This ensures privacy, eliminating the data confidentiality concerns that may arise due to using a publicly hosted export server. </td>
	</tr>
	<tr>
		<th> <b> Disadvantages </b> </th>
		<td> Exporting takes significantly longer, the process further delayed depending on the file size and the network speed. </td>
		<td> The success of the export process depends on the capabilities and the version of the browser being used. </td>
	</tr> 
</table>

As is understood from the above table, each of the above two modes of exporting has its own pros and cons. Choosing one over the other is tricky, unless one has extremely precise requirements and priorities.

To ensure that a better trade-off is achieved, FusionCharts Suite XT v3.12.1 introduces the auto export feature that combines the capabilities of both modes, making optimum utilization of the advantages offered by each.

Given below is a brief description of the attributes used to enable to the auto export mode:

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
			<td valign="top" class="code"> When chart exporting is enabled, this attribute is used to switch between the modes of export. <br>  <br> __Default value__: auto (the auto exporting feature is enabled) <br> __Note__: Starting v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute. </td>
		</tr>
	</tbody>
</table>

The sample chart below showcases the auto export feature. Click/hover over the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> button from the top-right corner of the chart and select an export format.

{% embed_all exporting-charts-and-chart-data-using-the-auto-export-feature-example-1.js %}

Switch to the JSON tab of the chart rendered above to see how the `exportEnabled` and `exportMode` attributes are used.

> Note that when export is enabled, the export mode is set to to **auto** by default. Therefore, exiplicitly defining the `exportMode` is not needed. However, we've shown it in this example, so that you know how the attribute is used. </p>

> Starting v3.132.10, the `exportMode` attribute replaces the `exportAtClient Side` attribute.
> A description of the `exportMode` attribute is given in the table above.
> However, you don’t need to make any changes to the existing setup because, starting v3.12.1, the FusionCharts library comes with the proper mapping already provided. </p>
