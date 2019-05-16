---
permalink: exporting-charts/using-fc-export-server/client-side-export/exporting-charts-and-chart-data-using-client-side-exporting.html
title: Exporting Charts and Chart Data Using Client-side Exporting | FusionCharts
description: Using client-side export feature one can eliminate the need of a server for exporting thus bringing down the turnaround time it takes for an export
heading: Exporting Charts and Chart Data Using Client-side Exporting
chartPresent: true
---

Harry has created charts comparing vendor quotations for a very critical project. To add his charts to a project-progress presentation, he needs the charts as JPEGs. So far, he has used the FusionCharts [server-side export feature](/exporting-charts/using-fc-export-server/exporting-charts-as-image-and-pdf) to export images, this requires extensive efforts and domain expertise.

To his relief, FusionCharts Suite XT, starting v3.8.0, includes support for client-side exporting, which also eases Harry's concerns about data confidentiality.

While FusionCharts has an established server-side exporting feature, common concerns with this feature include:

- Availability of a good internet connection to send to and receive data from the server
- Confidentiality concerns around using the publicly hosted export server
- Technical proficiency at the client's end
  FusionCharts provides programs to set up the export server at a client’s end, but this requires the end user(s) to have a certain amount of knowledge about configuring and using servers. This, again, is a downside.

The primary need for coming up with the client-side export feature was to eliminate the need of a server for exporting, thus bringing down the turnaround time it takes for an export, as well as to to address the data confidentiality issues. The client-side export feature removes the round-trip involved in exporting from a server and eliminates the difficulties involved in setting up one with the proper dependencies.

To enable the client-side export feature for your application, all you need to do is set the `exportEnabled` and the `exportAtClientSide` (since v3.8.0) attributes to **1** and you are good to go.

> Please note that, at present, this feature is supported only by the **Chrome**, **Firefox**, and **IE >= 10** browsers. The FusionCharts team is working to include support for other browsers also.

</p>

The sample chart below showcases the client-side export feature. As with server-side export, click <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> from the top-right corner of the chart and select **Export as JPG**.

{% embed_all getting-started-adding-interactivity-exporting-to-images-or-pdf-example-1.js %}

How do you know if the export was done on the client-side? The images below show you the difference:

<table>
	<tr>
		<th style="width: 90%; "> <center> Network tab in the browser console: Client-side export </center> </th>
		<th style="width: 90%"> <center> Network tab in the browser console: Server-side export </center> </th>		
	</tr>
	<tr>
		<td style="width: 90"> <span> ![image alt text Network tab: Client-side export](/images/getting-started-adding-interactivity-exporting-to-images-or-pdf-client-side-exporting-image-2.jpg) </span> {: .center-align .table-img} </td>
		<td style="width: 90%"> <span>![image alt text Network tab: Server-side export](/images/getting-started-adding-interactivity-exporting-to-images-or-pdf-client-side-exporting-image-3.jpg) </span> {: .center-align .table-img} </td>
	</tr>
</table>

The graphic below details the steps that are involved in a client-side export:

{:refdef: style="margin-left: auto; margin-right: auto; width: 6em"}
![image alt text](/images/exporting-to-images-or-pdf-client-side-exporting-steps.png)
{: refdef}

This feature uses the HTML5 API; therefore, it is important that modern browsers include support for:

- Canvas
- BLOB (Binary Large OBject, or large binary data as a single entity)
- base-64 encoding and decoding

These technologies perform the necessary conversion from SVG to the required format (the rendered charts in the JPG, PNG, or PDF formats, or the chart data (in the XLSX format). Using the HTML5 API helps to overcome the earlier browser functionality limitations that hampered the implementation of this feature.

> FusionCharts supports exporting chart data as XLSX starting v3.11.0. Select **Download as XLSX** from the menu in the top-right corner of the chart. </p>
