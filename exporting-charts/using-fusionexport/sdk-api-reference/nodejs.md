---
title: Node.js | FusionCharts
description: Export from your desktop and web server using Node.js SDKs. A complete list of API reference.
heading: Node.js
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

### **Constructor:** `new ExportManager(config)`

The constructor of ExportManager takes a config object that can contain host and port values. These values will be used when connecting to FusionExport Server.

**Parameters**

Name | Type | Default Value | Description
--- | --- | --- | ---
config | Object | {} | The host and port values which will be used when connecting to FusionExport server

**Example**

```jsonjson
new ExportManager({ 
	host: 'api.fusionexport.com',
	port: 1337,
})
```

#### **Method:** `export(exportConfig[, outputDirPath, unzipFlag])`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format. 

It returns a promise that resolves to the array filenames of the exported files or gets rejected by an error.

**Parameters**

Name | Type | Default Value | Required | Description
--- | --- | --- | --- | ---
exportConfig | ExportConfig |  | Yes | Instance of the ExportConfig which will include all export configurations
outputDirPath | String | . | No | Directory where you want to save the exported file. By default the file will be saved in the same directory from where the script is executed. This field is optional.
unzipFlag | Boolean | false | No | This parameter allows you to decompress your output bundle into separate files. To allow this behaviour pass true. This field is optional.

**Returns**

* **Promise:** It returns a promise that resolves to the array of filenames of the exported files or gets rejected by an error.

**Example**

```json
exportManager.export(exportConfig, '.', true)
.then((exportedFiles) => {
	exportedFiles.forEach(file => console.log(file));
})
.catch((err) => {
	console.log(err);
});
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export weather it is a dashboard export, single export or a batch export.

#### **Constructor:** new ExportConfig()

This constructor does not take any argument.

**Example**

```json
new ExportConfig();
```

## **Method:** set()

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

**Parameters**

Name | Type | Default Value | Required | Description
--- | --- | --- | --- | ---
key | String | null | Yes | Name of the config
value | String, Number or Boolean | null | Yes | Value of the config

**Returns**

* **ExportConfig:** The instance of the exportConfig for method chaining.

**Example**

```json
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'single.json'));
```

#### **Method:** get()

Takes one argument as the key and returns the value.

**Parameters**

Name | Type | Default Value | Required | Description
--- | --- | --- | --- | ---
key | String | null | Yes | Name of the config

**Returns**

* String, Number or Boolean: The value of the specified config.

**Example**

```json
exportConfig.get('chartConfig')
```

#### **Method:** has()

Takes one argument as the key and returns a boolean if it is set or not.

**Parameters**

Name | Type | Default Value | Required | Description
--- | --- | --- | --- | ---
key | String | null | Yes | Name of the config

**Returns**

* **Boolean:** Return a boolean depending on wheather the key is set or not.

**Example**

```json
exportConfig.has('chartConfig')
```

#### **Method:** remove()

Takes one argument as the key and removes that value if it was set.

**Parameters**

Name | Type | Default Value | Required | Description
--- | --- | --- | --- | ---
key | String | null | Yes | Name of the config

**Returns**

* **ExportConfig:** The instance of the exportConfig for method chaining.

**Example**

```json
exportConfig.remove('chartConfig')
```

#### **Method:** clear()

Clears all the values that were set earlier.

**Returns**

* **ExportConfig:** The instance of the exportConfig for method chaining.

**Example**

```json
exportConfig.clear()
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like. 

#### `chartConfig`

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored.

* **Type:** String

**Example**

```json
exportConfig.set('chartConfig', 'resources/chart-config-file.json')
```

#### `inputSVG`

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

* **Type:** String

**Example**

```json
exportConfig.set('inputSVG', 'resources/vector.svg')
```

#### `templateFilePath`

Sets the path of the HTML template used for dashboard export

* **Type:** String

**Example**

```json
exportConfig.set('templateFilePath', 'resources/template.html');
```

#### `resourceFilePath`

JSON file having the dependencies of the template when templateFilePath is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take sone or more glob to specify which files should be excluded.

* **Type:** String

**Example**

```json
exportConfig.set('resourceFilePath', 'resources/resource.json');
```

The `resource.json` looks like as shown below:

```json
{
	"basePath": "../src/",
	"include": [
		'**/*.js'
	],
	"exlcude": [
    	'.env'
	]
}
```

#### `callbackFilePath`

Sets the path for a Javascript file that would be injected at the bottom of the page for each export

* **Type:** String

**Example**

```json
exportConfig.set('callbackFilePath', 'resources/callback.js')
```

#### `asyncCapture`

Sets if the export process will wait for CAPTURE_EXIT event

* **Type:** Boolean

**Example**

```json
exportConfig.set('asyncCapture', true)
```

#### `maxWaitForCaptureExit`

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

* **Type:** Integer

**Example**

```json
exportConfig.set('maxWaitForCaptureExit', 8000)
```

#### `dashboardLogo`

Sets the path to the logo file

* **Type:** String

**Example**

```json
exportConfig.set('dashboardLogo', 'resources/logo.jpg')
```

#### `dashboardHeading`

Sets the title of the dashboard

* **Type:** String

**Example**

```json
exportConfig.set('dashboardHeading', 'FusionCharts');
```

#### `dashboardSubheading`

Sets the sub-title of the dashboard

* **Type:** String

**Example**

```json
exportConfig.set('dashboardSubheading', 'The best charting library in the world')
```

#### `type`

Sets the format of the output file

* **Type:** String

**Example**

```json
exportConfig.set('type', 'pdf')
```

#### `quality`

Sets the quality of the output file. Provide either good, better or best

* **Type:** String

**Example**

```json
exportConfig.set('quality', 'best')
```

#### `outputFile`

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

* **Type:** String

**Example**

```json
exportConfig.set('outputFile', 'path/to/export--<%= number(2) %>')
```

#### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

* **Type:** String

**Example**

```json
exportConfig.set('outputFileDefinition', 'resources/outputFileDefinition.js')
```