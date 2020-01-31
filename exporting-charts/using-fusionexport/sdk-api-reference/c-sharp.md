---
title: C# | FusionCharts
description: Export from your desktop and web server using C# SDKs. A complete list of API reference.
heading: C Sharp
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

#### **Constructor:** `new ExportManager(string host, int port)`

The Constructor of ExportManager take parameters that contains host and port values. These values will be used when connecting to FusionExport Server.

**Parameters**

| Name   | Type   | Default Value | Description                                                                |
| ------ | ------ | ------------- | -------------------------------------------------------------------------- |
| `host` | string | 127.0.0.1     | The host address which will be used when connecting to FusionExport server |
| `port` | int    | 1337          | The port number which will be used when connecting to FusionExport server  |

**Example**

```javascript
new ExportManager((host: "api.fusionexport.com"), (port: 1337));
```

#### **Method:** `export(ExportConfig exportConfig[, string outputDir, bool unzip])`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format.

It returns a list of strings which contain filenames of the exported files or gets rejected by an error.

**Parameters**

| Name           | Type         | Default Value | Required | Description                                                                                                                                                            |
| -------------- | ------------ | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `exportConfig` | ExportConfig |               | Yes      | Instance of the ExportConfig which will include all export configurations                                                                                              |
| `outputDir`    | string       | .             | No       | Directory where you want to save the exported file. By default the file will be saved in the same directory from where the script is executed. This field is optional. |
| `unzip`        | bool         | true          | No       | This parameter allows you to decompress your output bundle into separate files. To allow this behaviour pass true. This field is optional.                             |

**Returns**

- `List<string>`: It returns a list of strings which contains the array of filenames of the exported files or gets rejected by an error.

**Example**

```javascript
exportManager.Export(exportConfig, ".", true);
```

#### **Method:** `exportAsStream(ExportConfig exportConfig)`

You can get exported output as a stream and can work with it. Based on the configuration provided, this method exports your charts and dashboards as a stream.

**Parameters**

| Name         | Type         | Required | Description                                                               |
| ------------ | ------------ | -------- | ------------------------------------------------------------------------- |
| exportConfig | ExportConfig | yes      | Instance of the ExportConfig which will include all export configurations |

**Returns**

- **Promise:** It returns an object with string and stream as dictionary object.

**Example**

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
	public static class ExportAsStream
	{
		public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
		{
			// Instantiate the ExportConfig class and add the required configurations
			ExportConfig exportConfig = new ExportConfig();
			List<string> results = new List<string>();

			// Instantiate the ExportManager class
			using (ExportManager exportManager = new ExportManager())
			{
				exportConfig.Set("chartConfig", File.ReadAllText("./resources/dashboard_charts.json"));
				exportConfig.Set("templateFilePath", "./resources/template.html");
				exportConfig.Set("type", "pdf");

				// Call the Export() method with the export config
				Dictionary<string, Stream> files = exportManager.ExportAsStream(exportConfig);
			}
			foreach (string path in results)
			{
				Console.WriteLine(path);
			}
			Console.Read();
		}
	}
}
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export weather it is a dashboard export, single export or a batch export.

#### **Constructor:** `new ExportConfig()`

This constructor does not take any argument.

**Example**

```javascript
new ExportConfig();
```

#### **Method:** `Set(string configName, object configValue)`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

**Parameters**

| Name          | Type   | Default Value | Required | Description         |
| ------------- | ------ | ------------- | -------- | ------------------- |
| `configName`  | string | null          | Yes      | Name of the config  |
| `configValue` | object | null          | Yes      | Value of the config |

**Returns**

- void

**Example**

```javascript
exportConfig.Set("chartConfig", "./static/chart-config.json");
```

#### **Method:** `Get(string configName)`

Takes one argument as the key and returns the value.

**Parameters**

| Name         | Type   | Default Value | Required | Description        |
| ------------ | ------ | ------------- | -------- | ------------------ |
| `configName` | string | null          | Yes      | Name of the config |

**Returns**

- **object:** The value of the specified config.

**Example**

```javascript
exportConfig.Get("chartConfig");
```

#### **Method:** `Has(string configName)`

Takes one argument as the key and returns a boolean if it is set or not.

**Parameters**

| Name       | Type   | Default Value | Required | Description        |
| ---------- | ------ | ------------- | -------- | ------------------ |
| configName | string | null          | Yes      | Name of the config |

**Returns**

- **bool:** Return a boolean depending on whether the key is set or not.

**Example**

```javascript
exportConfig.Has("chartConfig");
```

#### **Method:** `Remove(string configName)`

Takes one argument as the key and removes that value if it was set.

**Parameters**

| Name       | Type   | Default Value | Required | Description        |
| ---------- | ------ | ------------- | -------- | ------------------ |
| configName | string | null          | Yes      | Name of the config |

**Returns**

- **bool:** Return a boolean depending on whether the key was deleted.

**Example**

```javascript
exportConfig.remove("chartConfig");
```

#### **Method:** `Clear()`

Clears all the values that were set earlier.

**Returns**

- void

**Example**

```javascript
exportConfig.Clear();
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

#### `chartConfig`

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored.

- **Type:** string

**Example**

```javascript
exportConfig.Set("chartConfig", "resourceschart-config-file.json");
```

#### `inputSVG`

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

- **Type:** string

**Example**

```javascript
exportConfig.Set("inputSVG", "resources\vector.svg");
```

#### `templateFilePath`

Sets the path of the HTML template used for dashboard export

- **Type:** string

**Example**

```javascript
exportConfig.Set("templateFilePath", "resources\template.html");
```

#### `resourceFilePath`

JSON file having the dependencies of the template when templateFilePath is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take some or more glob to specify which files should be excluded.

- **Type:** string

**Example**

```javascript
exportConfig.Set("resourceFilePath", "resources\resource.json");
```

The `resource.json` looks like as shown below:

```javascript
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

Sets the path for a JavaScript file that would be injected at the bottom of the page for each export

- **Type:** string

**Example**

```javascript
exportConfig.Set("callbackFilePath", "resourcescallback.js");
```

#### `asyncCapture`

Sets if the export process will wait for CAPTURE_EXIT event

- **Type:** bool

**Example**

```javascript
exportConfig.Set("asyncCapture", true);
```

#### `maxWaitForCaptureExit`

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

- **Type:** int

**Example**

```javascript
exportConfig.Set("maxWaitForCaptureExit", 8000);
```

#### `dashboardLogo`

Sets the path to the logo file

- **Type:** string

**Example**

```javascript
exportConfig.Set("dashboardLogo", "resourceslogo.jpg");
```

#### `dashboardHeading`

Sets the title of the dashboard

- **Type:** string

**Example**

```javascript
exportConfig.Set("dashboardHeading", "FusionCharts");
```

#### `dashboardSubheading`

Sets the sub-title of the dashboard

- **Type:** string

**Example**

```javascript
exportConfig.set(
  "dashboardSubheading",
  "The best charting library in the world"
);
```

#### `type`

Sets the format of the output file

- **Type:** string

**Example**

```javascript
exportConfig.Set("type", "pdf");
```

#### `quality`

Sets the quality of the output file. Provide either good, better or best

- **Type:** string

**Example**

```javascript
exportConfig.Set("quality", "best");
```

#### `outputFile`

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

- **Type:** string

**Example**

```javascript
exportConfig.Set("outputFile", "path\toexport--<%= number(2) %>");
```

#### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

- **Type:** string

**Example**

```javascript
exportConfig.Set("outputFileDefinition", "resources/outputFileDefinition.js");
```
