---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/nodejs.html
title: Node.js | FusionCharts
description: Export from your desktop and web server using Node.js SDKs. A complete list of API reference.
heading: Node.js
chartPresent: False
---

## Class ExportManager

**ExportManager** acts as a client which sends the export chart configuration to the **FusionExport Service**. It delivers the exported charts through attached listeners and extends the **EventEmitter** class.

### Constructor

**`ExportManager([options])**

* **options.host** 

    * Specifies the export server's host 

    * Default value: `0.0.0.0`

* **options.port**

    * Specifies the export server's port

    * Default value: `1337`

### Methods

**export(exportConfig)**

* Export charts and dashboards with the specified export configuration

* Returns promise

**static saveExportedFiles(outputFileBag, dirPath = `.`)**

It is a helper function to save the whole `outputFileBag` in the specified directory. It can also take an enclosing directory path as the second parameter. The directory path will be appended with the output file paths before saving.

**static getExportedFileNames(exportedOutput)**

It extracts all the realPath from  `outputFileBag`

### Events

**exportDone**

* **outputFileBag:** It is an array of `outputBags`. Each `outputBag` has a `realName` and a `fileContent` value. `realName` is the path where the file needs to be saved with the resolved filename.

Called when the export is completed.

**exportStateChange**

* **state:** It is a state object with `reporter`, `exportDone`, `uuid`, `customMsg` properties.

Emits events for every exporting step is initiated from the server

**error**

Triggered when an error is encountered

## Class ExportConfig

**ExportConfig** holds the configurations to export chart with chart data, template file, dashboard config, etc. These configurations are sent to the **FusionExport Service** by **ExportManager** to export charts.

### Constructors

**ExportConfig()**

Constructs an **ExportConfig** object with empty export configurations

### Methods

**set(name, value)**

Sets a single export configuration with the specified configuration value.

Returns the object which can be chained.

**get(name)**

Gets a single export configuration with the specified configuration name.

**remove(name)**

Removes the specified configuration and returns `true` if **configName** is found.

Returns the object which can be chained.

**has(name)**

Checks if the specified configuration is present; returns `true` if the **configName** is found.

**clear()**

Clears all export configurations which are already added

**count()**

Returns the total number of configurations already added

**configNames()**

Returns all configuration names in an array

**configValues()**

Returns all configuration values in an array

**clone()**

Returns a clone of the existing **ExportConfig**

**getFormattedConfigs()**

Returns all export configurations in the JSON format

## Supported Export Configurations

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a Javascript file that would be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of fusionCharts Javascript library to use the licensed version of FusionCharts.

* `asyncCapture` - Sets if the export process will wait for CAPTURE_EXIT event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `quality` - Sets the quality of the output file. Provide either good, better or best.

* `outputFile` - Sets the output filename template, along with the path.

* `outputFileDefinition` - JS file defining functions or array to resolve output file names.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).

* `resourceFilePath` - JSON file having the dependencies of the template when `templateFilePath` is provided.