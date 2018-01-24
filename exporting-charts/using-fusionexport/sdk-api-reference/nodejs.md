---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/nodejs.html
title: Node.js | FusionCharts
description: Export from your desktop and web server using Node.js SDKs. A complete list of API reference.
heading: Class ExportManager
chartPresent: False
---

__ExportManager__ acts as a client, sending the export chart configuration to the __ExportServer__ and delivers the exported charts through the attached listeners. It extends the __EventEmitter__ class.

### Constructor

#### ExportManager([options])

**options.host:** This is used to specify the export server host; if not specified, the default value is used. The default host is 0.0.0.0.

**options.port:** This is used to specify the export server port; if not specified, the default value is used. The default port is 1337.

### Methods

#### export(exportConfig)

Exports charts and dashboards with the specified export configurations. This method returns promise.

**ExportConfig**
FusionExport accepts multiple options at a time. Using the SDK, you can set different options while exporting.

The supported export configurations are as follows: 

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a JavaScript file that will be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of FusionCharts JavaScript library to use the licensed version of FusionCharts.

* `asyncCapture` - It shows if the export process will wait for CAPTURE_EXIT event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `exportFile` - It shows the output filename template, along with the path.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).

### Events

**exportDone**
This event is called when the export is completed. The event callback is called with the list of exported files stored in an array.

**exportStateChange**
This callback function is called with a single argument, and __state__ during chart export. It emits events for every exporting step initiated from the server. This callback can be used to track the progress of export on the server during chart export.

**error**
If an error is encountered while exporting, this event is triggered with the exact error details.