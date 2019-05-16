---
permalink: exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server-php.html
title: Setup Private Export Server Using PHP | FusionCharts
description: To setup a private export server in PHP, you will need the official PHP export handle provided in the FusionCharts package.
heading: PHP
chartPresent: false
---

To setup a private export server in PHP, you will need the __official PHP export handler__ provided in the FusionCharts package. The export handler will provide the necessary files to configure the export server. It will handle all exporting requests sent by the user and generate the chart in the requested format.
The PHP export handler is dependent on two external modules—__Inkscape__ and __ImageMagick__—for conversion. These modules need to be downloaded and installed separately on the same server.

>  Starting FusionCharts Suite XT v3.11.0, __Inkscape__ and __ImageMagick__ are no longer required for browsers with canvas support. </p>

## How does it work?

__Step 1__: A chart is rendered in the browser.

__Step 2__: When an export option is selected, the chart generates the SVG string that represents the current state and sends it to the export server.

__Step 3__: The export server captures the SVG string.

__Step 4__: The export server invokes a system call triggering __Inkscape__ to convert the FusionCharts generated SVG string (which is passed to the server-side script over AJAX) to __PDF__, __PNG__, and __SVG__. However, __Inkscape__ still has a limitation of generating a JPG file. Hence, __ImageMagick__ is used to create the __JPG__ files. To export chart data as __XLSX__, the CSV data generated from the charts is converted to the XLSX format.

>  FusionCharts v3.11.0 onwards, images can be processed on client-side for modern browsers (with canvas support). This eliminates the use of third party softwares like __Inkscape__ and __ImageMagick__ for server-side as well as client-side exporting. </p>

__Step 5__: The export handler either writes the exported chart/chart data to disk, based on the configuration provided by the chart, or streams it back to the user as a download.

>  Starting v3.11.0, FusionCharts supports exporting chart data as __XLSX__. To export the chart data in the XLSX format using server-side exporting, it is mandatory that the exporting server has the latest code, which is available in the FusionCharts package. Alternatively, the FusionCharts export link __export.api3.fusioncharts.com__ can also be used.  </p>

## Installation

__Step 1__: Setup a Linux-based server with __administrative__ access to install the export handler. This is particularly important if you are using a shared hosting service for your web server.

__Step 2__: Install both __Inkscape__ and __ImageMagick__ as they are necessary dependencies for the PHP export handler to work.

__Step 3__: Copy files from the FusionCharts PHP Export Handler to the Linux server.

__Step 4__: Place the __tmp__ and __Exported_Images__ folders at the same folder level as the __index.php__ file. Both the folders should have __write access__, as the temporary and saved image files will be written to them.

## Inkscape

Inkscape is an open source vector graphics editor. What sets Inkscape apart is its use of Scalable Vector Graphics (SVG), an open XML-based W3C standard, as the native format. Inkscape has a powerful command line interface and can be used in scripts for a variety of tasks, such as exporting and format conversions. 
For more details, click [here](http://inkscape.org/doc/inkscape-man.html).

## ImageMagick

ImageMagick is a free and open-source software suite for displaying, converting, and editing raster image and vector image files. The software mainly consists of a number of command-line interface utilities for manipulating images.
For more details, click [here](http://www.imagemagick.org/).

## Configuring the export server

To use the private export server, the following attributes need to be configured correctly in the chart.

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
            <td valign="top" class="text">Set to __0__ to enable export via a Private Export Server.</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportHandler`</td>
            <td valign="top" class="text">Set to the absolute path of the export handler, for example: __http://www.example.com/fcExportHandler/FCExporter__</td>
        </tr>
        <tr>
            <td valign="top" class="code">`exportAction`</td>
            <td valign="top" class="text">Set to __save__ to store the exported file on the private export server itself. Set to __download__ to send the file back to the user (client) for download.</td>
        </tr>
</table>