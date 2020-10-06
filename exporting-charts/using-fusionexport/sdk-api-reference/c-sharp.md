---
title: C# | FusionCharts
description: Export from your desktop and web server using C# SDKs. A complete list of API reference.
heading: C Sharp
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

### Constructor

The constructor of ExportManager take parameters that contains host and port values. These values will be used when connecting to FusionExport Server.

#### Parameters

| Name   | Type   | Default Value | Description                                                                |
| ------ | ------ | ------------- | -------------------------------------------------------------------------- |
| `host` | string | 127.0.0.1     | The host address which will be used when connecting to FusionExport server |
| `port` | int    | 1337          | The port number which will be used when connecting to FusionExport server  |

These properties are useful when you are running FusionExport server on the port and host of your choice or running behind a proxy like Nginx. It allows the SDK to send request to the new host and port number where FusionExport is running.

#### Example

```csharp
new ExportManager((host: "api.fusionexport.com"), (port: 1337));
```

### Methods

#### `export(ExportConfig exportConfig[, string outputDir, bool unzip])`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format. It returns a list of strings which contain filenames of the exported files or gets rejected by an error.

##### Parameters

| Name            | Type           | Default Value | Required | Description                                                                              |
| --------------- | -------------- | ------------- | -------- | ---------------------------------------------------------------------------------------- |
| `exportConfig`  | `ExportConfig` |               | Yes      | Instance of the `ExportConfig` which will include all export configurations              |
| `outputDirPath` | `String`       | `.`           | No       | Directory where you want to save the exported file.                                      |
| `unzipFlag`     | `Boolean`      | `false`       | No       | This parameter allows you to compress/decompress your output bundle into separate files. |

##### Returns

-  `List<string>`: It returns a list of strings which contains the array of filenames of the exported files or gets rejected by an error.

##### Example

```javascript
exportManager.Export(exportConfig, '.', true);
```

#### `exportAsStream(ExportConfig exportConfig)`

You can get exported output as a stream and can work with it. Based on the configuration provided, this method exports your charts and dashboards as a stream.

##### Parameters

| Name           | Type           | Required | Description                                                               |
| -------------- | -------------- | -------- | ------------------------------------------------------------------------- |
| `exportConfig` | `ExportConfig` | yes      | Instance of the ExportConfig which will include all export configurations |

##### Returns

-  **Object:** It returns an object with string and stream as dictionary object.

##### Example

```csharp
Dictionary<string, Stream> files = exportManager.ExportAsStream(exportConfig);
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export weather it is a dashboard export, single export or a batch export.

### Constructor

This constructor does not take any argument.

#### Example

```csharp
new ExportConfig();
```

### Methods

#### `Set(string configName, object configValue)`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

##### Example

```csharp
exportConfig.Set("chartConfig", "./static/chart-config.json");
```

#### `Get(string configName)`

Takes one argument as the key and returns the value. You can find more about the options later on in this guide.

##### Returns

-  **object:** The value of the specified config.

##### Example

```csharp
exportConfig.Get("chartConfig");
```

#### `Has(string configName)`

Takes one argument as the key and returns a boolean if it is set or not. You can find more about the options later on in this guide.

##### Returns

-  **bool:** Return a boolean depending on whether the key is set or not.

##### Example

```csharp
exportConfig.Has("chartConfig");
```

#### `Remove(string configName)`

Takes one argument as the key and removes that value if it was set. You can find more about the options later on in this guide.

##### Returns

-  **bool:** Return a boolean depending on whether the key was deleted.

#### Example

```csharp
exportConfig.remove("chartConfig");
```

#### `Clear()`

Clears all the values that were set earlier. You can find more about the options later on in this guide.

##### Example

```csharp
exportConfig.Clear();
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

### `chartConfig`

_**Type:** string_

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow the [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON file where the chart configurations have been stored.

#### Example

```csharp
exportConfig.Set("chartConfig", "resourceschart-config-file.json");
```

### `type`

_**Type:** string_

Sets the format of the output file. As of now, it supports `png`, `jpeg`, `svg` and `pdf`.

#### Example

```csharp
exportConfig.Set("type", "pdf");
```

### `quality`

Sets the quality of the output file. Provide either `good`, `better` or `best`.

_**Type:** string_

#### Example

```csharp
exportConfig.Set("quality", "best");
```

### `templateFilePath`

_**Type:** string_

Sets the path of the HTML template used for dashboard export

#### Example

```csharp
exportConfig.Set("templateFilePath", "resources\template.html");
```

### `template`

_**Type:** string_

Send an HTML template in string format to be used for dashboard export

#### Example

```csharp
exportConfig.Set("template", "<html>...</html>");
```

### `templateWidth`

_**Type:** String | Number_

Sets the width of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parse value of the string is NaN.

#### Example

```csharp
// With a number
exportConfig.Set("templateWidth", 1200);

// With a string
exportConfig.Set("templateWidth", "1200");
```

### `templateHeight`

_**Type:** String | Number_

Sets the height of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parsed value of the string is NaN.

#### Example

```csharp
// With a number
exportConfig.Set("templateHeight", 3000);

// With a string
exportConfig.Set("templateHeight", "3000");
```

### `templateFormat`

_**Type:** String_

Sets the format of the PDF pages during a PDF export. This option takes priority over templateWidth and templateHeight. Throws an exception when the data provided by the user is not a string or when the format is not in the supported set. The available options are:

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

#### Example

```csharp
exportConfig.Set("templateFormat", "A4");
```

### `headerEnabled`

_**Type:** Boolean_

This enables header in the exported PDF file. When the value of this property is set to `true`, the following components will be added in the header automatically:

1. `title` : Left aligned
2. `url` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```csharp
exportConfig.Set('headerEnabled', true);
```

### `footerEnabled`

_**Type:** Boolean_

This enables footers in the exported PDF file. When the value of this property is set to `true`, the following components will be added in the header automatically:

1. `pageNumber` : Left aligned
2. `date` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```csharp
exportConfig.Set('footerEnabled', true);
```

### `headerComponents` / `footerComponents`

_**Type:** String_

These properties will allow you to configure the components which you want to show in the header and footer respectively. As of now, the five components are supported in both header and footer: `title`, `url`, `date`, `pageNumber` and `logo`. All the properties will have the following attributes to configure:

| Attributes | Type   | Description                                                                                        |
| ---------- | ------ | -------------------------------------------------------------------------------------------------- |
| `position` | String | Will accept values like `left` and `right` which are **case-insensitive**.                         |
| `style`    | String | Style defined in CSS string                                                                        |
| `format`   | String | **Only applicable for `pageNumber`**. It will accept two keywords, `currentPage` and `totalPages`. |
| `src`      | String | **Only applicable for `logo`**. It will accept aboslute URL of the logo file                       |

Please keep in mind that this property should be used while exporting to PDF only and these properties should be passed in string format with JSON notations.

#### Example

```csharp
exportConfig.Set("headerComponents", "{ \"title\": { \"style\": \"color:blue;\" } }");
```

### `headerStyle` / `footerStyle`

_**Type**: String_

The style defined here will be set to all the components provided in either the header or footer as a default. You have to provide style in the CSS string format just like the same way you define an inline style.

#### Example

```csharp
exportConfig.set('headerStyle', "font-family: 'Source Sans Pro', colour:'#000';");
```

### `orientation`

_**Type**: String_

This property will accept `portrait` or `landscape` as values. As the name suggests, it will set the orientation of the page. By default the value will be `portrait`.

#### Example

```csharp
exportConfig.Set('orientation', 'landscape');
```

### `pageMargin`

_**Type**: String | Object_

It will add margins on the page layout. It will accept both string and object. In case of string, margins will get applied on all four sides. In case of object `top`, `right`, `bottom`, `left` are the properties. Units for providing margins are:

-  `px` - pixel
-  `in` - inch
-  `cm` - centimeter
-  `mm` - millimeter

#### Example

```csharp
exportConfig.Set('margin', '10cm');
exportConfig.Set('margin', "{ top: '10px', right: '20px' }");
```

### `resourceFilePath`

_**Type:** string_

JSON file having the dependencies of the template when `templateFilePath` is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take some or more glob to specify which files should be excluded.

#### Example

```csharp
exportConfig.Set("resourceFilePath", "resources\resource.json");
```

An example of `resource.json` is shown below:

```json
{
   "basePath": "../src/",
   "include": ["**/*.js"],
   "exlcude": [".env"]
}
```

### `callbackFilePath`

_**Type:** string_

Sets the path for a JavaScript file that would be injected at the bottom of the page for each export

#### Example

```csharp
exportConfig.Set("callbackFilePath", "resourcescallback.js");
```

### `asyncCapture`

Is set if the export process waits for the `CAPTURE_EXIT` event

_**Type:** bool_

#### Example

```csharp
exportConfig.Set("asyncCapture", true);
```

### `maxWaitForCaptureExit`

_**Type:** int_

Sets the maximum time FusionExport waits for the `CAPTURE_EXIT` event to be triggered

#### Example

```csharp
exportConfig.Set("maxWaitForCaptureExit", 8000);
```

### `outputFile`

_**Type:** string_

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

#### Example

```csharp
exportConfig.Set("outputFile", "path\toexport--<%= number(2) %>");
```

### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

_**Type:** string_

#### Example

```csharp
exportConfig.Set("outputFileDefinition", "resources/outputFileDefinition.js");
```

### `inputSVG`

_**Type:** string_

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

#### Example

```csharp
exportConfig.Set("inputSVG", "resources\vector.svg");
```
