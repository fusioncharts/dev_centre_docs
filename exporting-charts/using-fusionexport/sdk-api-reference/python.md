---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/python.html
title: Python | FusionCharts
description: Export from your desktop and web server using Python SDKs. A complete list of API reference.
heading: Class ExportManager
chartPresent: False
---

__ExportManager__ acts as a client, sending the export chart configuration to the __ExportServer__ and delivering the exported charts through the attached listeners.

### Constructor

**ExportManager( [host], [port] ):**
__host:__ This is used to specify the export server host; if not specified, the default value is used.

__port:__ This is used to specify the export server port; if not specified, the default value is used. 

### Methods

**port( [port] )**
Exporter is responsible for any individual export request made by the ExportManager. Generally, the ExportManager uses this class internally to make chart exporting request to export server.
If the port is given, then it updates the export server port with specified value. Otherwise it returns the current port.

**host( [host] )**
If the host is given, then it updates the export server host with specified value. Otherwise it returns the current host.

**export( [export_config], [export_done_listener], [export_state_changed_listener] )**
Exports charts with the specified configurations, **ExportDone** listener and **ExportStateChanged listener**, and returns an **Exporter** instance.

__export_config:__ An instance of ExportConfig class containing export configurations.

__export_done_listener:__ A callback function which is called with two arguments, result and error, when an export request is completed.

__export_state_changed_listener:__ A callback function which is called with single argument __state__ during chart export and emits events for every exporting steps from server. This callback  can be used to track the progress on the server during chart export.

## Class Exporter

Exporter is responsible for any individual export request made by the __ExportManager__. Generally, the __ExportManager__ uses this class internally to make chart exporting request to export server.

### Constructor

**Exporter( [export_config], [export_done_listener], [export_state_changed_listener] )**

__export_config:__ An instance of __ExportConfig__ class containing export configurations.

__export_done_listener:__ A callback function which is called with two arguments __result__ and __error__ when an export request is completed.

__export_state_changed_listener:__ A callback function which is called with single argument state during chart export and emits events for every exporting steps from server. This callback  can be used to track the progress on the server during chart export.

### Methods

**export_config()**
Returns the associated export configurations.

**export_done_listener()**
Returns the attached ExportDone listener.

**export_state_changed_listener()**
Returns the attached ExportStateChanged listener.

**export_server_host()**
Returns the export server host.

**export_server_port()**
Returns the export server port.

**set_export_connection_config(host, port)**
Sets export server's IP address and port.

**start()**
Starts the chart exporting process according to the export configurations.

**cancel()**
Cancels the chart exporting request.

## Class ExportConfig

__ExportConfig__ holds the configurations for exporting charts, like chart data, template file, dashboard config, etc. These configurations are sent to the __ExportServer__ by __ExportManager__ to export charts.

The supported export configurations are as follows:

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a Javascript file that would be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of fusionCharts Javascript library to use the licensed version of FusionCharts.

* `asyncCapture` - It shows if the export process will wait for `CAPTURE_EXIT` event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `exportFile` - Sets the output filename template, along with the path.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).

### Constructor

**ExportConfig(config_dict)**
Initializes the __ExportConfig__ object with the specified configuration dictionary, if not given then an empty __ExportConfig__ object is created.

### Methods

**set(config_name, config_value)**
Sets a single export configuration with the specified configuration value. Also you can use [ ] operator to set the configuration like dictionary.

**get(config_name)**
Returns config value for the specified configuration name. Also you can use [ ] operator to access the configuration value like dictionary.

**remove(config_name)**
Removes the specified configuration and returns True if config_name is found, otherwise returns False. Also you can use __del__ operator to delete a single configuration.

**has(config_name)**
Checks if the specified configuration is present, returning True if the config_name is found, otherwise returning False. Also you can use __in__ operator to check a configuration is set or not.

**clear()**
Clears all the export configurations added earlier.

**count()**
Returns the number of total export configurations added. Also you can use __len()__ function to get the total count of configurations added.

**config_names()**
Returns all configuration names as a list.

**config_values()**
Returns all configuration values as a list.

**clone()**
Returns a new instance of ExportConfig with same contents as the current one.

**get_formatted_configs()**
Returns all export configurations in JSON format.

## Class ExportError

__ExportError__ is a subclass of the __Exception__ class. It is thrown in case any error occurs during the export process.