---
title: Configuring the Export Feature | FusionCharts
description: Stop wasting time! Set up FusionCharts Export Server for effortless exports. Check out our list of attributes used for exporting charts. Export today!
heading: Configuring the Export Feature
---

FusionCharts Suite XT lets you export your charts (as **JPG**, **PNG**, **SVG**, and **PDF**) and chart data ( as **XLSX** and **CSV**) by using its [server-side](/exporting-charts/using-fc-export-server/modes-of-export/exporting-charts-and-chart-data-using-the-server-side-export-feature) to export charts.

The exporting feature can be enabled by setting the `exportEnabled` attribute to 1. The mode of export can be selected by setting the `exportMode` attribute to server, client, or auto, as required.

When export is enabled, the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> button appears in the top-right corner of the chart. Clicking this button will display the export menu, as shown in the image below. This menu contains a list of all the possible formats the chart can be exported in.

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

A number of other features can also be configured like the name of the exported file and the display text (in the menu) for each format that is supported. For example, in the chart shown below, we've changed menu item label for three out of the five items and changed the default file name (used when the file is downloaded).

{% embed_all exporting-as-image-and-pdf-configuring-export-feature-example-1.js %}

The following is a complete list of `chart` level attributes that can be used to enable and configure exporting of charts:

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
            <td valign="top" class="code">`exportEnabled`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">Enables the exporting feature in charts, when set to __1__ <br> __Default value__: 0 (the exporting feature is disabled) </td>
        </tr> 
        <tr> 
            <td valign="top" class="code"> `exportMode` </td>
            <td valign="top" class="code"> String </td>
            <td valign="top" class="code"> __server__, __client__, __auto__ </td>
            <td valign="top" class="code"> When chart exporting is enabled, this attribute is used to switch between the modes of export. <br> __Default value__: auto (the auto exporting feature is enabled) <br> __Note__: Starting v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute. However, you don’t need to make any changes to the existing setup because, starting v3.12.1, the FusionCharts library comes with the proper mapping already provided.</td>
        </tr> 
        <tr>
            <td valign="top" class="code">`exportAtClientSide`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">__Applicable only till v3.12.0__ <br> If chart exporting is enabled, this attribute is used to set whether charts will be exported on the client-side or the server-side. <br> __Default value__: 0 (server-side exporting is enabled) </td>
        </tr>   
        <tr>
            <td valign="top" class="code">`exportAtClient`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">Enables use of a private server for server-side export, when set to __1__.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportShowMenuItem`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">This attribute gives you the option to allow the menu items related to export (for example, __Export as JPG__ ) to appear in the chart's context menu.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportFormats`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Lists the formats in which the chart can be exported. Custom labels indicating the exported format can also be configured. Example:
    `"exportFormats": "PNG=Export as High Quality Image|PDF=Export as Printable|XLSX=Export Chart Data"`
            </td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportHandler`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">When a private export server is used, this attribute refers to the path of the __Export Handler__ (the ready-to-use scripts provided by FusionCharts). Make sure to provide the file name along with the path. In case of client-side exporting, this refers to the DOM ID of the FusionCharts Export Component that is embedded in your web page, along with the chart.
            </td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAction`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">__download__, __save__, __download-save__</td>
            <td valign="top" class="text">When a private export server is used, the action specifies the action that will be taken on export. <br> The attribute takes the following values: <br> __download__: the exported file is __only downloaded__ on the client and __not saved__ on the server <br> __save__: the exported file is __only saved__ on the server and __not downloaded__ on the client <br> __download-save__: the exported file is __downloaded__ on the client __and__ also __saved__ on the server
                __Default value__: download </td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportTargetWindow`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">___self__ or ___blank__</td>
            <td valign="top" class="text">When a private export server is used and `exportAction` is set to __download__ or __download-save__, this attribute lets you configure whether the exported image/PDF/XLSX will open in the same window (as an attachment for download) or in a new window.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportCallback`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Sets the name of the JavaScript function that is called when the export process completes</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportFileName`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Sets the name (excluding the extension) for the output (exported) file. <br> __Default value__: FusionCharts </td>
        </tr>
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

## Experimental Feature Export with Logo Image

Currently, using the FusionCharts export handler, when a chart having a custom logo is exported as an image, the logo is not present in the generated image. We are introducing an experimental feature, which allows the logo present in the chart to be exported as well and be displayed in the resultant image.

To use this feature, set `exportEnabled` to **1** (because we are using the server-side export feature), and set `exportHandler` to the url **http&#58;//export.api3.fusioncharts.com/logo/**. Using this exporter, the generated output will contain the logo along with the chart.

> This is an experimental feature and thus might not be a completely reliable solution.
