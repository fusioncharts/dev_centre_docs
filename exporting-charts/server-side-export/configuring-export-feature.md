---
permalink: exporting-charts/server-side-export/configuring-export-feature.html
title: Configuring Export Feature | FusionCharts
description: FusionCharts Suite XT lets you export your charts as images or PDFs by using its server-side or client-side export features.
headng: Configuring Export Feature
chartPresent: true
---

FusionCharts Suite XT lets you export your charts as images or PDFs by using its [server-side]{% linkTo tutorials/exporting-charts/server-side-export/introduction.md %}{:target='_blank'} or [client-side]{% linkTo tutorials/exporting-charts/client-side-export/exporting-charts-and-chart-data-using-client-side-exporting.md %}{:target='_blank'} (_since v3.8.0_) export features. Alternatively, FusionCharts also allows you to set up a [private server]{% linkTo tutorials/exporting-charts/server-side-export/setup-private-export-server/asp-net.md %}{:target='_blank'} for exporting your charts.

The server-side export feature can be enabled by setting the `exportEnabled` attribute to __1__. To enable the client-side export feature, set the `exportEnabled` and the `exportAtClientSide` attributes to __1__. 
The export button, ![image alt text Export Button]({{ site.baseurl }}assets/images/getting-started-adding-interactivity-exporting-to-images-or-pdf-client-side-exporting-image-4.jpg), now appears in the top right corner of the chart.

Clicking the export button will display the export menu, as shown in the image below. This menu contains a list of all the possible formats the chart can be exported in.

![image]({{ site.baseurl }}assets/images/exporting-as-image-and-pdf-intro.png)

A number of other features can also be configured like the name of the exported file and the display text for each format that is supported. A chart with these options configured, for the server-side export, is shown below:

{% embed_chart exporting-as-image-and-pdf-configuring-export-feature-example-1.js %}

The following is a complete list of chart level attributes that can be used to enable and configure exporting of charts:

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
            <td valign="top" class="text">Enables server-side exporting of charts as images or PDFs, when set to __1__.</td>
        </tr>     
        <tr>
            <td valign="top" class="code">`exportAtClient`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">Enables use of a private server for server-side export, when set to __1__.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAtClientSide`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">Enables client-side exporting of charts as images or PDFs, when set to __1__.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportShowMenuItem`</td>
            <td valign="top" class="text">Boolean</td>
            <td valign="top" class="text">0/1</td>
            <td valign="top" class="text">This attribute gives you the option to allow the menu items related to export (for example, Save as JPEG etc.) to appear in the context menu of chart.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportFormats`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Lists the format in which the chart will be exported. Custom labels indicating the exported format can also be included. Example:
    `"exportFormats": "PNG=Export as High Quality PNG &#124; PDF=Export as PDF File"`
            </td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportHandler`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">When a private export server is used, it refers to the path of the Export Handler (the ready-to-use scripts provided by FusionCharts). Make sure to provide the file name along with the path. In case of client-side exporting, this refers to the DOM Id of the FusionCharts Export Component that is embedded in your web page, along with the chart.
            </td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAction`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">'save' or 'download'</td>
            <td valign="top" class="text">When a private export server is used, the action specifies whether the exported image will be sent back to the client as a download or whether it will be saved on the server.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportTargetWindow`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text">_self or _blank</td>
            <td valign="top" class="text">When a private export server is used and `exportAction` is set to __download__, this attribute lets you configure whether the exported image/PDF will open in the same window (as an attachment for download) or it will open in a new window.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportCallback`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Sets the name of the JavaScript function that is called when the export process finishes.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportFileName`</td>
            <td valign="top" class="text">String</td>
            <td valign="top" class="text"></td>
            <td valign="top" class="text">Sets the name (excluding the extension) for the output (exported) file.</td>
        </tr>
    </tbody>
</table>

The data structure needed to configure the export menu, for a server-side export, is given below:

{% embed_data exporting-as-image-and-pdf-configuring-export-feature-example-1.js %}

## Experimental Feature Export with Logo Image

Currently, using the FusionCharts export handler, when a chart having a custom logo is exported as an image, the logo is not present in the generated image. We are introducing an experimental feature, which allows the logo present in the chart to be exported as well and be displayed in the resultant image.

To use this feature, set `exportEnabled` to __1__ (because we are using the server-side export feature), and set `exportHandler` to the url `http://export.api3.fusioncharts.com/logo/`. Using this exporter, the generated output will contain the logo along with the chart. 

<p class="text-info">
Note that this is an experimental feature and thus might not be a completely reliable solution.
</p>

