---
title: FusionExport Server | FusionCharts
description: This article FusionExport Server. It accepts export requests from FusionExport CLI, SDK clients and browsers and provides exported images in return.
heading: FusionExport Server
---

FusionExport server is an HTTP server which accepts data in JSON format to export your charts and data to file format you wish to export. Although, you can directly communicate with the server using endpoints but it is recommended to download one of the [FusionExport SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks) which will make it easy to implement FusionExport in your infrastructure.

## Installation

To install the FusionExport Server click [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server).

## CLI Options

FusionExport server accepts following command line arguments to configure the server very easily.

Option|Alias|Default|Description
-|-|-|-
`--host`|-H|127.0.0.1|IP address of the server host.
`--port`|-P|1337|Port number where you want to run the server.
`--worker-count`|-W|2|Maximum number of workers to spawn.
`--library-directory-path`|-L||Custom FusionCharts library directory path. Useful while using licensed version of FusionCharts.
`--config-file`|-C||Configuration file path.

### Config File Options

To persist the config every time you start the server or for getting access to more special options or you can pass a config file through the `--config-file` or `-C` option of the CLI. It should be a JSON file having the following properties.

Option|Default|Description
-|-|-
`host`|127.0.0.1|IP address of the server host.
`port`|1337|Port number where you want to run the server.
`workerCount`|2|Maximum number of workers to spawn.
`libraryDirectoryPath`||Custom FusionCharts library directory path. Useful while using licensed version of FusionCharts.
`allowSave (1)`|true|Allow saving of exported images in disk.
`savePath (1)`|exported_images|Path to save the exported images.

## Docker

To run FusionExport server from Docker, click [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server#docker-6) for detailed installation setup.

### Docker Config

Docker takes the following config in it's `.env` file.

Option|Default|Description
-|-|-
`SERVICE_PORT`|1337|Port number where you want to run the server
`DATA_SAVE_PATH (1)`|~/.fusionexport|Storage path for saving the exported images

## HTTP Endpoints

### /api/v2.0/export

Required for supporting the latest export features of FusionExport.

* HTTP Method: `POST`

Param Name|Default|Description
--- | --- | ---
`chartConfig`||Array of chart configs to export. These chart configurations are similar to FusionCharts Chart attributes.
`type`|png|Output file type. Accepts either png, jpg, pdf, svg, csv or html.
`quality`|better|Output file quality (good / better / best)
`outputFile`|export--<%= number(1) %>|Output filename
`payload`||The zipped dependency files which could include resources like HTML templates, images, CSS etc.
`templateFilePath`|template/template.html|Template file path inside the payload zip.
`callbackFilePath`|callbackFile.js|Callback file path inside the payload zip. This file will be executed upon successful execution of the export action.
`outputFileDefinition`||Output file definition file inside the payload zip.
`dashboardHeading`|FusionCharts|Dashboard heading text.
`dashboardSubheading`|The best charting library in the world|Dashboard subheading text.
`dashboardLogo`|dashboardLogo.jpg|Dashboard logo file inside the payload zip.
`inputSVG`|inputSVG.svg|SVG file path inside the payload zip.
`asyncCapture`|false|Set the async capture flag.
`maxWaitForCaptureExit`|6000|Timeout in ms for async capture to trigger.

### /api/v1.0/export

Required for supporting export functionality of FusionCharts library.

*  HTTP Method: `POST`

Param Name|Default|Description
--- | --- | ---
`stream_type`||In this case where charts will be rendered and exported. SVG/IMAGE-DATA
`stream`|{}|In case of svg, it will contain the svg string. In case of image data, it will contain the base64 string.
`parameters`|exportfilename=FusionCharts|exportformat=png, exportactionnew=save, This will contain the output filename, format, and the action to be perform.
`meta_bgColor`|#FFFFFF|Background color to be used.
`meta_bgAlpha`||Alpha value for the background.
`meta_DOMId`||DOM Id.
`meta_width`||Width of the chart.
`meta_height`||Height of the chart.
`chart_caption`||Caption or title.
`chart_sub_caption`||Sub caption or subtitle.
`is_single_export`||Whether it is bulk, or a single export.
`is_full_version`||Whether it is a trial, or a paid version.
`user_time_zone`||User timezone.
`log_enabled`|true|Whether logging is enabled.
`version`||Version.