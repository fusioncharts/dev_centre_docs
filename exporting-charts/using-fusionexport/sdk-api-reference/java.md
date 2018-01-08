---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/java.html
title: Java | FusionCharts
description: Export from your desktop and web server using Java SDKs. A complete list of API reference.
heading: Class ExportManager
chartPresent: False
---

**ExportManager** acts as a client, sending the exports chart configuration to the __ExportServer__ and delivering the exported charts through the attached listeners.

### Constructors

#### ExportManager()

Constructs an ExportManager with a default export server IP address and port.

#### ExportManager(String host, int port)

Constructs an ExportManager with the specified export server IP address and port.

### Methods

**void setHost(String host)** 
Sets the export server IP address

**String getHost()** 
Returns the export server IP address

**void setPort(int port)** 
Sets the export server port

**int getPort()**
Returns the export server port

**Exporter export(ExportConfig exportConfig)**
Exports charts with the specified configurations and returns an Exporter instance.

**Exporter export(ExportConfig config, ExportDoneListener done)**
Exports charts with the specified configurations and __ExportDone__ listener, returning an Exporter instance.

**Exporter Export(ExportConfig config, ExportStateChangedListener stateChanged)**
Exports charts with the specified configurations and __ExportStateChanged__ listener, returning an Exporter instance.

**Exporter Export(ExportConfig config, ExportDoneListener done, ExportStateChangedListener stateChanged)**
Exports charts with the specified configurations, __ExportDone__ listener and __ExportStateChanged__ listener, and returns an Exporter instance.

## Interface ExportDoneListener

ExportDoneListener is fired when an export request is completed.

### Methods

**void exportDone(String result, ExportException error)**
This method is called after the chart is exported.

## Interface ExportStateChangedListener

ExportStateChangedListener is fired during chart export and emits events for every exporting step from the server. This callback  can be used to track the progress on the server during chart export.

### Methods

**void exportStateChanged(String state)**

This method is called for each chart exporting event with the specified state.

## Class Exporter

Exporter is responsible for any individual export request made by the **ExportManager**. Generally, the **ExportManager** uses this class internally to make a chart exporting request to the export server.

### Constructors

**Exporter(ExportConfig config)**
Constructs an Exporter with the specified export configurations.

**Exporter(ExportConfig config, ExportDoneListener done)**
Constructs an Exporter with the specified export configurations and ExportDone listener.

**Exporter(ExportConfig config, ExportStateChangedListener stateChanged)**
Constructs an Exporter with the specified export configurations and ExportStateChanged listener.

**Exporter(ExportConfig config, ExportDoneListener done, ExportStateChangedListener stateChanged)**
Constructs an Exporter with the specified export configurations, ExportDone listener and ExportStateChanged listener.

### Methods

**ExportConfig getExportConfig()**
Returns the associated export configurations.

**ExportDoneListener getExportDoneListener()**
Returns the attached **ExportDone** listener.

**ExportStateChangedListener getExportStateChangedListener()**
Returns the attached ExportStateChanged listener.

**String getExportServerHost()**
Returns the export server host.

**int getExportServerPort()**
Returns the export server port.

**void setExportConnectionConfig(String exportServerHost, int exportServerPort)**
Sets export server IP address and port.

**void start()**
Starts the chart exporting process according to the export configurations.

**void cancel()**
Cancels the chart exporting request.

## Class ExportConfig

ExportConfig holds the configurations for exporting the chart, like chart data, template file, dashboard config, etc. These configurations are sent to the ExportServer by ExportManager to export charts.

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

* `exportFile` - Sets the output filename template, along with path.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).

### Constructors

**ExportConfig()**
Constructs an ExportConfig object with empty export configurations.

### Methods

**void set(String configName, string configValue)**
Sets a single export configuration with the specified config value.

**String get(String configName)**
Returns config value for the specified config name.

**boolean remove(String configName)**
Removes the specified configuration and returns true if configName is found.

**boolean has(String configName)**
Checks if the specified configuration is present or not, returning true if the configName is found.

**void clear()**
Clears all export configurations added earlier.

**int count()**
Returns the total number of export configurations added.

**String[] configNames()**
Returns all configuration names as an array.

**String[] configValues()**
Returns all configuration values as an array.

**ExportConfig clone()**
Returns a new instance of ExportConfig with the same content as the current one.

**String getFormattedConfigs()**
Returns all export configurations in JSON format.

## Class ExportException

ExportException is a subclass of the Exception class. It is thrown in case any error occurs during the export process.