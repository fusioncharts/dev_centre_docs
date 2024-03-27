---
title: Overview | FusionCharts
description: Export your dashboards to various formats like PNG, JPG, SVG & PDF using FusionExport. Send them as attachments, printable documents & email them. Try now!
heading: Overview
---

FusionExport, allows you to export your dashboards to images and PDFs. The exported files can be used for sending emails, attachments and printable documents. It supports formats like PNG and JPG and vector formats like SVG and PDF.

Unlike FusionCharts which runs in the client or in a browser, FusionExport runs on your server. When you download FusionExport, you will get a binary file which you have to run on your server like any other service. Using FusionExport SDKs or API endpoints, you can integrate it into your backend. The only connecting line between FusionCharts and FusionExport is - they both expect data-source in JSON format. 

## Package Structure

As mentioned above, there are two primary components of FusionExport:

1. FusionExport Server
2. FusionExport SDKs

### FusionExport Server

FusionExport Server is a binary file which you will get when you download FusionExport. You have to run FusionExport server on your backend infrastructure. We support Windows, Mac, and Linux, so that you don't have to worry about cross-platform integration.

### FusionExport SDKs

Once you start FusionExport server on your system, you can send requests to export your dashboards via API endpoints but to ease your development flow, we have build SDKs for few popular languages like C#, Java, PHP, Node.js and Python.

![FusionExport Server](/images/FusionExport-server.png)

## Implementations

Now that you are aware of what you get with FusionExport. Let's explore how you can implement FusionExport in your infrastructure based on your use cases. There are three common use cases  of FusionExport:

1. Add 'Download dashboard as PDF' button to your live dashboards
2. Send dashboards over email in an email-friendly format or as a PDF attachment
3. Automate server-side generation of dashboards for scheduled reporting

You can see them in action by trying one of the[ demo of FusionExport](https://www.fusioncharts.com/demos/dashboards/wealth-management-dashboard-with-export/).

### Add Download dashboard as PDF button to your live dashboards

Most popular feature in a dashboard is to be able to download it in PDF. And you know how hard it could be to generate charts on the server, make it a print-friendly version of it, convert it to PDF and so on. FusionExport eases out this process for you. The diagram below will give you a good understanding of the overall flow of the application.

![FusionExport - FlowChart - Download dashboard as a PDF](/images/FusionExport-Flowchart.png)

### Send dashboards over email in an email-friendly format or as a PDF attachment

Another most common use case for FusionExport is to be able to send an email which contains the dashboards. Instead of sending plain tables or CSV files in the email, you can send real charts and take the product engagement to a next level. Here is how you can implement it:

![FusionExport - FlowChart - Send dashboards over an email](/images/FusionExport-Flowchart-Send.png)

### Automate server-side generation of dashboards for scheduled reporting

You will also come up with a need to not only generate PDF but also schedule them to people. In other words, you have to write a CRON job to send reports. Here is how you can do it:

![FusionExport - FlowChart - Automated reports generation](/images/FusionExport-Flowchart-Automated.png)

## Difference between Export Handler and FusionExport

FusionCharts comes bundled with a free add-on called 'Export Handler' which lets you export your charts to images. But there are few limitations with Export Handler where FusionExport prevails.

<table>
	<tr>
		<th></th>
		<th>Export handler</th>
		<th>FusionExport</th>
	</tr>
	<tr>
		<td>Export individual charts to PNG, JPG, SVG, PDF</td>
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
		<td>No user interactions required</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
</table>

## Ready to get started?

* [Install FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server)
* [Install FusionExport Server SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)
* [Export chart as a image](/exporting-charts/using-fusionexport/tutorials/export-chart-as-image)
* [Export a dashboard](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)
