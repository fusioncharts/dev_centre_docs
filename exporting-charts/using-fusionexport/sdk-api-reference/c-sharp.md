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

```csharp
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

-  `List<string>`: It returns a list of strings which contains the array of filenames of the exported files or gets rejected by an error.

**Example**

```javascript
exportManager.Export(exportConfig, '.', true);
```

#### **Method:** `exportAsStream(ExportConfig exportConfig)`

You can get exported output as a stream and can work with it. Based on the configuration provided, this method exports your charts and dashboards as a stream.

**Parameters**

| Name         | Type         | Required | Description                                                               |
| ------------ | ------------ | -------- | ------------------------------------------------------------------------- |
| exportConfig | ExportConfig | yes      | Instance of the ExportConfig which will include all export configurations |

**Returns**

-  **Object:** It returns an object with string and stream as dictionary object.

**Example**

```csharp
Dictionary<string, Stream> files = exportManager.ExportAsStream(exportConfig);
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export weather it is a dashboard export, single export or a batch export.

#### **Constructor:** `new ExportConfig()`

This constructor does not take any argument.

**Example**

```csharp
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

-  void

**Example**

```csharp
exportConfig.Set("chartConfig", "./static/chart-config.json");
```

#### **Method:** `Get(string configName)`

Takes one argument as the key and returns the value.

**Parameters**

| Name         | Type   | Default Value | Required | Description        |
| ------------ | ------ | ------------- | -------- | ------------------ |
| `configName` | string | null          | Yes      | Name of the config |

**Returns**

-  **object:** The value of the specified config.

**Example**

```csharp
exportConfig.Get("chartConfig");
```

#### **Method:** `Has(string configName)`

Takes one argument as the key and returns a boolean if it is set or not.

**Parameters**

| Name       | Type   | Default Value | Required | Description        |
| ---------- | ------ | ------------- | -------- | ------------------ |
| configName | string | null          | Yes      | Name of the config |

**Returns**

-  **bool:** Return a boolean depending on whether the key is set or not.

**Example**

```csharp
exportConfig.Has("chartConfig");
```

#### **Method:** `Remove(string configName)`

Takes one argument as the key and removes that value if it was set.

**Parameters**

| Name       | Type   | Default Value | Required | Description        |
| ---------- | ------ | ------------- | -------- | ------------------ |
| configName | string | null          | Yes      | Name of the config |

**Returns**

-  **bool:** Return a boolean depending on whether the key was deleted.

**Example**

```csharp
exportConfig.remove("chartConfig");
```

#### **Method:** `Clear()`

Clears all the values that were set earlier.

**Returns**

-  void

**Example**

```csharp
exportConfig.Clear();
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

#### `chartConfig`

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("chartConfig", "resourceschart-config-file.json");
```

#### `inputSVG`

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("inputSVG", "resources\vector.svg");
```

#### `templateFilePath`

Sets the path of the HTML template used for dashboard export

-  **Type:** string

**Example**

```csharp
exportConfig.Set("templateFilePath", "resources\template.html");
```

#### `template`

Send HTML template in string format to be used for dashboard export

-  **Type:** string

**Example**

```csharp
exportConfig.Set("template", "<html>...</html>");
```

#### `templateWidth`

Sets the width of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parse value of the string is NaN.

-  **Type:** String/Number

**Example**

```csharp
// With a number
exportConfig.Set("templateWidth", 1200);

// With a string
exportConfig.Set("templateWidth", "1200");
```

#### `templateHeight`

Sets the height of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parsed value of the string is NaN.

-  **Type:** String/Number

**Example**

```csharp
// With a number
exportConfig.Set("templateHeight", 3000);

// With a string
exportConfig.Set("templateHeight", "3000");
```

#### `templateFormat`

Sets the format of the PDF pages during a PDF export. This option takes priority over templateWidth and templateHeight. Throws an exception when the data provided by the user is not a string or when the format is not in the supported set.

-  **Type:** String

**The available options are:**

-  `Letter`: 8.5in x 11in
-  `Legal`: 8.5in x 14in
-  `Tabloid`: 11in x 17in
-  `Ledger`: 17in x 11in
-  `A0`: 33.1in x 46.8in
-  `A1`: 23.4in x 33.1in
-  `A2`: 16.5in x 23.4in
-  `A3`: 11.7in x 16.5in
-  `A4`: 8.27in x 11.7in
-  `A5`: 5.83in x 8.27in

**Example**

```csharp
exportConfig.Set("templateFormat", "A4");
```

#### `resourceFilePath`

JSON file having the dependencies of the template when templateFilePath is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take some or more glob to specify which files should be excluded.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("resourceFilePath", "resources\resource.json");
```

The `resource.json` looks like as shown below:

```json
{
   "basePath": "../src/",
   "include": ["**/*.js"],
   "exlcude": [".env"]
}
```

#### `callbackFilePath`

Sets the path for a JavaScript file that would be injected at the bottom of the page for each export

-  **Type:** string

**Example**

```csharp
exportConfig.Set("callbackFilePath", "resourcescallback.js");
```

#### `asyncCapture`

Sets if the export process will wait for CAPTURE_EXIT event

-  **Type:** bool

**Example**

```csharp
exportConfig.Set("asyncCapture", true);
```

#### `maxWaitForCaptureExit`

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

-  **Type:** int

**Example**

```csharp
exportConfig.Set("maxWaitForCaptureExit", 8000);
```

#### `type`

Sets the format of the output file. As of now we support, `png`, `jpeg`, `svg` and `pdf`.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("type", "pdf");
```

#### `quality`

Sets the quality of the output file. Provide either good, better or best

-  **Type:** string

**Example**

```csharp
exportConfig.Set("quality", "best");
```

#### `outputFile`

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("outputFile", "path\toexport--<%= number(2) %>");
```

#### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

-  **Type:** string

**Example**

```csharp
exportConfig.Set("outputFileDefinition", "resources/outputFileDefinition.js");
```
