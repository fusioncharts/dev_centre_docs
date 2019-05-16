---
permalink: exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server-asp-net.html
title: Setup Private Export Server using ASP.NET | FusionCharts
description: To setup a private export server in ASP.NET, you will need the official ASP.NET export handler provided in the FusionCharts package.
heading: ASP.NET
chartPresent: false
---

To setup a private export server in ASP.NET, you will need the **official ASP.NET export handler** provided in the FusionCharts package. The export handler will provide the necessary files to configure the export server. It will handle all exporting requests sent by the user and generate the chart in the requested format.

## How Does It Work?

**Step 1**: A chart is rendered in the browser.

**Step 2**: When an export option is selected, the chart generates the SVG string that represents the current state of the chart and sends it to the export server.

**Step 3**: The export server captures the SVG string.

**Step 4**: The export handler captures the SVG string and uses the SharpVectors library to convert the chart/chart data into the required format.

**Step 5**: The export handler either writes the exported chart/chart data to disk, based on the configuration provided by the chart, or streams it back to the user as a download.

> Starting v3.11.0, FusionCharts supports exporting chart data as **XLSX**. To export a chart in the XLSX format, using server-side exporting, it is mandatory that the exporting server has the latest code, which is available in the FusionCharts package. Alternatively, the FusionCharts export link, **export.api3.fusioncharts.com**, can also be used. </p>

## Installation

**Step 1**: Unzip the **asp-net-export-handler.zip** folder in your IIS wwwroot folder (e.g. C:\inetpub\wwwroot).

**Step 2**: Add an application in your server and set the physical path to the above folder.

**Step 3**: Make sure 'IUSR' has the proper read/write permissions in the **Exported_Images** folder.

**Step 4**: FusionCharts' export request contains some XML data, which is restricted in .NET 4 or above. Therefore, you may need to add the following configuration in your 'web.config' file:

```html
<system.web>
  <httpRuntime requestValidationMode="2.0" />
</system.web>
```

## Configuring the Export Server

To use the private export server, the following attributes need to be configured correctly in the chart:

<table width="95%" border="0" class="table" cellpadding="2" cellspacing="0">
        <tr>
            <th width="25%" valign="top" class="header">Attribute Name</th>
            <th width="75%" valign="top" class="header">Description</th>
        </tr>
        <tr>
            <td valign="top" class="code">`exportEnabled`</td>
            <td valign="top" class="text">Set to __1__ to enable exporting the chart.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAtClient`</td>
            <td valign="top" class="text">Set to __0__ to enable export via a private export server.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportHandler`</td>
            <td valign="top" class="text">Set to the absolute path of the export handler, for example: __http&#58;//www.example.com/fcExportHandler/FCExporter__</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAction`</td>
            <td valign="top" class="text">Set to __save__ to store the exported file on the private export server itself. Set to __download__ to send the file back to the user (client) for download.</td>
        </tr>
</table>
