---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/php.html
title: PHP | FusionCharts
description: Export from your desktop and web server using PHP SDKs. A complete list of API reference.
heading: Class ExportManager
chartPresent: False
---

__ExportManager__ acts as a client, sending the chart exporting configurations to the __ExportServer__ and delivering the exported charts through the attached listeners.

### Constructors

**public function __construct($host = Constants::DEFAULT_HOST, $port = Constants::DEFAULT_PORT)**

Constructs an __ExportManager__ with the specified export server IP address and port.

### Methods

**public function export(ExportConfig $exportConfig, $exportDoneListener = null, $exportStateChangedListener = null)**
Exports chart with specified configurations, __ExportDone__ listener and __ExportStateChanged__ listener and returns an __Exporter__ instance.

## Class Exporter

Exporter is responsible for any individual export request made by the __ExportManager__. Generally the __ExportManager__ uses this class internally to make chart exporting request to export server.

### Constructors

__public function __construct(ExportConfig $exportConfig, $exportDoneListener, $exportStateChangedListener)__
Constructs an Exporter with the specified export configurations, __ExportDone__ listener and __ExportStateChanged__ listener.

### Methods

**public function setExportConnectionConfig($exportServerHost, $exportServerPort)**
Sets export server IP address and port.

**public function start()**
Starts the chart exporting process according to the export configurations.

**public function cancel()**
Cancels the chart exporting request.

## Class ExportConfig

**ExportConfig** holds the configurations for chart exporting like chart data, template file, dashboard config, etc. These configurations are sent to the **ExportServer** by **ExportManager** to export charts.

### Constructors

**public function __construct()**
Constructs an ExportConfig object with empty export configurations.

### Methods

**public function set($name, $value)**
Sets a single export configuration with the specified configuration value. It returns the object so it can be chained.

**public function get($name)**
Returns configuration value for the specified configuration name.

**public function remove($name)**
Removes the specified configuration and returns true if configName is found. It returns the object to be chained.

**public function has($name)**
Checks if the specified configuration is present or not, returning true if the configName is found.

**public function clear()**
Clears all export configurations already added.

**public function count()**
Returns the total number of configuration currently stored.

**public function configNames()**
Returns all configuration names as an array.

**public function configValues()**
Returns all configuration values as an array.

**public function clone()**
Returns a new instance of ExportConfig with same contents as the current one.

**public function getFormattedConfigs()**
Returns all export configurations in JSON format.

The supported export configurations are as follows:

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a Javascript file that would be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of fusionCharts Javascript library to use the licensed version of FusionCharts.

* `asyncCapture` - Sets if the export process will wait for `CAPTURE_EXIT` event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `exportFile` - Sets the output filename template, along with the path.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).