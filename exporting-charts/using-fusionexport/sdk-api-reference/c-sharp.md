---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/c-sharp.html
title: C# | FusionCharts
description: Export from your desktop and web server using C# SDKs. A complete list of API reference.
heading: Class ExportManager
chartPresent: False
---

**ExportManager** acts as a client, sending the exports chart configuration to the **ExportServer** and delivering the exported charts through the attached listeners.

### Constructors

**ExportManager()**
Constructs an ExportManager with the default export server IP address and port.

**ExportManager(string host, int port)** 
Constructs an ExportManager with the specified export server IP address and port.

**Properties**
__string Host__
Sets and gets the export server’s IP address.

__int Port__
Sets and gets the export server’s port.

### Methods

**Exporter Export(ExportConfig config)**
Exports charts with the specified configurations and returns an Exporter instance.

**Exporter Export(ExportConfig config, ExportDoneListener done)**
Exports charts with the specified configurations and **ExportDone** listener, returning an Exporter instance.

**Exporter Export(ExportConfig config, ExportStateChangedListener stateChanged)**
Exports charts with the specified configurations and **ExportStateChanged** listener, returning an Exporter instance.

**Exporter Export(ExportConfig config, ExportDoneListener done, ExportStateChangedListener stateChanged)**
Exports charts with the specified configurations and **ExportStateChanged** listener, returning an Exporter instance.

## Delegate ExportDoneListener

**ExportDoneListener** is triggered when an export request is completed.

## Delegate ExportStateChangedListener

**ExportStateChangedListener** is triggered during chart export and emits events for every exporting step initiated from the server. This callback can be used to track the progress of the exporting process on the server during chart export.

## Class Exporter
Exporter is responsible for any individual export request made by the ExportManager. Generally, the **ExportManager** uses this class internally to send chart exporting request to the export server.

### Constructors

**Exporter(ExportConfig config)**
Constructs an Exporter with the specified export configurations.

**Exporter(ExportConfig config, ExportDoneListener done)**
Constructs an Exporter with the specified export configurations and ExportDone listener.

**Exporter(ExportConfig config, ExportStateChangedListener stateChanged)**
Constructs an Exporter with the specified export configurations and ExportStateChanged listener.

**Exporter(ExportConfig config, ExportDoneListener done, ExportStateChangedListener stateChanged)**
Constructs an Exporter with the specified export configurations, ExportDone listener and ExportStateChanged listener.

### Properties

**ExportConfig ExportConfig**
Returns the associated export configurations.

**ExportDoneListener ExportDone**
Returns the attached **ExportDone** listener.

**ExportStateChangedListener ExportStateChanged**
Returns the attached **ExportStateChanged** listener.

**string ExportServerHost**
Returns the export server host.

**int ExportServerPort**
Returns the export server port.

### Methods

**void SetExportConnectionConfig(string exportServerHost, int exportServerPort)**
Sets the export server’s IP address and port.

**void Start()**
Starts the chart exporting process according to the export configurations.

**void Cancel()**
Cancels the chart exporting request.

### Class ExportConfig
**ExportConfig** holds the configurations for chart exporting like chart data, template file, dashboard config, and so on. **ExportManager** sends these configurations to the **ExportServer** for exporting charts.

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

### Constructors

**ExportConfig()**
Constructs an ExportConfig object with empty export configurations.

### Properties

**int Count**
Returns the total number of export configurations added.

### Methods

**void Set(string configName, string configValue)**
Sets a single export configuration with the specified configuration value.

**string Get(string configName)**
Returns the configuration value for the specified configuration name.

**bool Remove(string configName)**
Removes the specified configuration and returns true if configName is found.

**bool Has(string configName)**
Checks if the specified configuration is present or not, returning true if the configName is found.

**void Clear()**
Clears all export configurations already added.

**string[] ConfigNames()**
Returns all configuration names in an array.

**string[] ConfigValues()**
Returns all configuration values in an array.

**ExportConfig Clone()**
Returns clone of the existing ExportConfig; that is, this new instance of ExportConfig has the same contents as the current one.

**string GetFormattedConfigs()**
Returns all export configurations in the JSON format.

## Class ExportException

**ExportException** is a subclass of the Exception class. It is thrown if an  error is encountered during the export process.