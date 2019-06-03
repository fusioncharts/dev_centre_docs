---
title: Overview | FusionCharts
description: FusionExport__, allows you to export JavaScript chart as a static image and export multiple charts as a zip file. The exported files can be used for sending emails, attachments and printable documents.
heading: Overview
---

FusionExport allows you to export your dashboards to images and PDFs. You can embed the exported files into emails, attach them to emails/chat messages, or print them out. FusionExport supports formats like PNG and JPG, as well as vector formats like SVG and PDF.

Unlike FusionCharts which runs in the client or in a browser, FusionExport runs on your server. When you download FusionExport, you get a binary file that you have to run on your server, just like any other service. You can integrate FusionExport into the backend using FusionExport SDKs or API endpoints. The only similarity between FusionCharts and FusionExport is that they both accept data in JSON format. 

## Package Structure

As mentioned above, there are two primary components of FusionExport:

1. FusionExport Server
2. FusionExport SDKs

### FusionExport Server

FusionExport Server is a binary file that you get when you download FusionExport. You have to run FusionExport server on your backend infrastructure. FusionExport supports Windows, Mac, and Linux, so that you don't have to worry about cross-platform integration.

### FusionExport SDKs

Once you start FusionExport Server on your system, you can send requests to export your dashboards via API endpoints. However, to ease your development flow, we have built SDKs for few popular languages like C#, Java, PHP, Node.js, and Python.

![FusionExport Server](/images/FusionExport-server.png)

## Implementation

Now that you are aware of what you get with FusionExport, let's explore how you can implement FusionExport in your infrastructure based on use cases. There are three common use cases of FusionExport:

1. Add 'Download dashboard as PDF' button to your live dashboards
2. Send dashboards over email in an email-friendly format or as a PDF attachment
3. Automate server-side generation of dashboards for scheduled reporting

You can see them in action by trying one of the[ demos of FusionExport](https://www.fusioncharts.com/demos/dashboards/wealth-management-dashboard-with-export/).

### Add `Download Dashboard as PDF` button to your live dashboards

Most popular feature in a dashboard is the option to download it in PDF format. However, it can be rather difficult to generate charts on the server, make printer-friendly versions for each of them, convert them to PDF format, and so on. FusionExport simplifies this process for you. The diagram below will give you a good understanding of the overall flow of the application.

![FusionExport - FlowChart - Download dashboard as a PDF](/images/FusionExport-Flowchart.png)

### Send dashboards over email in an email-friendly format or as a PDF attachment

Another common use case for FusionExport is to be able to send an email, with the dashboards embedded into it. Instead of sending plain tables or CSV files in the email, you can send customized charts and take product engagement to the next level. Here is how you can implement it:

![FusionExport - FlowChart - Send dashboards over an email](/images/FusionExport-Flowchart-Send.png)

### Automate server-side generation of dashboards for scheduled reporting

There may be times when you need to not only generate PDF, but also schedule them to people. In other words, you have to write a CRON job to send reports. Here is how you can do it:

![FusionExport - FlowChart - Automated reports generation](/images/FusionExport-Flowchart-Automated.png)

## Difference between Export Handler and FusionExport

FusionCharts comes bundled with a free add-on called 'Export Handler' which lets you export your charts to images. However, there are a few limitations to Export Handler, where FusionExport prevails.

<table>
	<tr>
		<th></th>
		<th>Export Handler</th>
		<th>FusionExport</th>
	</tr>
	<tr>
		<td>Export individual charts to PNG, JPG, SVG, or PDF</td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Generate charts on a server</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Export live dashboards</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Dynamically add/modify data while exporting</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>No user interaction required</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
</table>

## Ready to get started?

* [Install FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server)
* [Install FusionExport Server SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)
* [Export chart as an image](/exporting-charts/using-fusionexport/tutorials/export-chart-as-image)
* [Export a dashboard](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)