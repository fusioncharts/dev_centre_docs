---
title: Python | FusionCharts
description: Export from your desktop and web server using Python SDKs. A complete list of API reference.
heading: Python
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

### Constructor

The constructor of ExportManager take parameters that may contain host and port values. These values will be used when connecting to FusionExport Server.

#### Parameters

| Name   | Type   | Default Value | Description                                                                |
| ------ | ------ | ------------- | -------------------------------------------------------------------------- |
| `host` | string | 127.0.0.1     | The host address which will be used when connecting to FusionExport server |
| `port` | int    | 1337          | The port number which will be used when connecting to FusionExport server  |

These properties are useful when you are running FusionExport server on the the port and host of your choice or running behind a proxy like Nginx. It allows the SDK to send request to the new host and port number where FusionExport is running.

#### Example

```python
em = ExportManager("api.fusionexport.com", 1337)
```

### Methods

#### `export(export_config, output_dir='.', unzip=False)`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format. It returns an array of string which contains filenames of the exported files.

#### Parameters

| Name            | Type           | Default Value | Required | Description                                                                        |                 
| --------------- | -------------- | ------------- | -------- | ---------------------------------------------------------------------------------- |
| `export_bulk`    | `Boolean`      | `true`        | Yes      | Allows users to export charts into multiple files.                                 |
| `export_config`  | `ExportConfig` |               | Yes      | Instance of the `ExportConfig` which will include all export configurations.       |
| `output_dir` | `String`       | `.`           | No       | Directory where you want to save the exported file.                                |
| `unzip`     | `Boolean`      | `true`        | No       | Allows you to compress/decompress your output bundle into separate files.          |


#### Returns

-  **List:** It returns a list of strings which contains the array of filenames of the exported files.

#### Example

```python
exported_files = em.exportAsStream(export_config)
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export whether it is a dashboard export, single export or a batch export.

### Constructor

This constructor does not take any argument.

#### Example

```python
export_config = ExportConfig()
```

### Methods

#### `set(config_name, config_value)`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

#### Example

```python
export_config.set("chartConfig", "config.json")
```

#### `get(config_name)`

Takes one argument as the key and returns the value.

#### Returns

-  The value of the specified config.

#### Example

```python
export_config.get("chartConfig")
```

### `has(config_name)`

Takes one argument as the key and returns a boolean if it is set or not.

#### Returns

-  **Boolean:** Return a boolean depending on whether the key is set or not.

#### Example

```python
export_config.has("chartConfig")
```

### `remove(config_name)`

Takes one argument as the key and removes that value if it was set.

#### Returns

-  **Boolean:** depending on whether the config_name is removed or not.

#### Example

```python
export_config.remove("chartConfig")
```

### `clear()`

Clears all the values that were set earlier.

#### Example

```python
export_config.clear()
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

### `chartConfig`

_**Type:** String_

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow the [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON file where chart the configurations have been stored.

#### Example

```python
export_config.set("chartConfig", "resources/chart-config-file.json")
```

### `type`

_**Type:** String_

Sets the format of the output file. As of now, it supports `png`, `jpeg`, `svg` and `pdf`. The default value is `pdf`.

#### Example

```python
export_config.set("type", "pdf")
```

### `quality`

_**Type:** String_

Sets the quality of the output file. Provide either `good`, `better` or `best`

#### Example

```python
export_config.set("quality", "best")
```

### `template`

_**Type:** String_

Accepts only the template string. Throws an exception if data provided by the user is not a string.

#### Example

```python
export_config.set("template", "<html>...</html>")
```

### `templateFilePath`

_**Type:** String_

Sets the path of the HTML template used for dashboard export

#### Example

```python
export_config.set("templateFilePath", "resources/template.html")
```

### `templateWidth`

_**Type:** String/Number_

Sets the width of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parse value of the string is NaN.

#### Example

```python
# With a number
export_config.set("templateWidth", 1200)

# With a string
export_config.set("templateWidth", "1200")
```

### `templateHeight`

_**Type:** String / Number_

Sets the height of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parsed value of the string is NaN.

#### Example

```python
# With a number
export_config.set("templateHeight", 3000)

# With a string
export_config.set("templateHeight", "3000")
```

### `templateFormat`

_**Type:** String_

Sets the format of the PDF pages during a PDF export. This option takes priority over templateWidth and templateHeight. Throws an exception when the data provided by the user is not a string or when the format is not in the supported set. The available options are:\*\*

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

```python
export_config.set("templateFormat", "A4")
```
### `header`

_**Type:** String_

Enables users to add a header inside the exported file.

#### Example

```python
export_config.set("header", "header value");
```
### `subheader`

_**Type:** String_

Enables users to add a subheader inside the exported file.

#### Example

```python
export_config.set("subheader", "subheader value");
```

### `headerEnabled`

_**Type:** Boolean_

This enables header in the exported PDF file. When the value of this property is set to `true`, the following components will be added in the header automatically:

1. `title` : Left aligned
2. `url` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```python
export_config.set('headerEnabled', True)
```

### `footerEnabled`

_**Type:** Boolean_

This enables footers in the exported PDF file. When the value of this property is set to `true`, the following components will be added in the header automatically:

1. `pageNumber` : Left aligned
2. `date` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```python
export_config.set('footerEnabled', True)
```

### `headerComponents` / `footerComponents`

_**Type:** Object_

These properties will allow you to configure the components which you want to show in the header and footer respectively. As of now, the five components are supported in both header and footer: `title`, `url`, `date`, `pageNumber` and `logo`. All the properties will have the following attributes to configure:

| Attributes | Type   | Description                                                                                        |
| ---------- | ------ | -------------------------------------------------------------------------------------------------- |
| `position` | String | Will accept values like `left` and `right` which are **case-insensitive**.                         |
| `style`    | String | Style defined in CSS string                                                                        |
| `format`   | String | **Only applicable for `pageNumber`**. It will accept two keywords, `currentPage` and `totalPages`. |
| `src`      | String | **Only applicable for `logo`**. It will accept aboslute URL of the logo file                       |

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```python
export_config.set('headerComponents', {
   'date': {
      'position': 'left',
      'style': '',
   },
   'pageNumber': {
      'position': 'right',
      'format': '{{current}} of {{total}}',
   },
})
```

### `headerStyle` / `footerStyle`

_**Type**: String_

The style defined here will be set to all the components provided in either the header or footer as a default. You have to provide style in the CSS string format just like the same way you define an inline style.

#### Example

```python
export_config.set('headerStyle', "font-family: 'Source Sans Pro', colour:'#000';")
```

### `orientation`

_**Type**: String_

This property will accept `portrait` or `landscape` as values. As the name suggests, it will set the orientation of the page. By default the value will be `portrait`.

#### Example

```python
export_config.set('orientation', 'landscape')
```

### `pageMargin`

_**Type**: String | Object_

It will add margins on the page layout. It will accept both string and object. In case of string, margins will get applied on all four sides. In case of object `top`, `right`, `bottom`, `left` are the properties. Units for providing margins are:

-  `px` - pixel
-  `in` - inch
-  `cm` - centimeter
-  `mm` - millimeter

#### Example

```python
export_config.set('margin', '10cm')
export_config.set('margin', {
   'top': '10px',
   'right': '20px',
   'bottom': '20px',
   'left': '10px',
})
```

### `resourceFilePath`

_**Type:** String_

JSON file having the dependencies of the template when `templateFilePath` is provided. basePath denotes the base path of the project no local resource should be present outside this directory. `include` takes one or more glob to specify which files to send to the server. `exclude` takes one or more glob to specify which files should be excluded.

#### Example

```python
export_config.set("resourceFilePath", "resources/resource.json")
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

_**Type:** String_
Sets the path for a JavaScript file that would be injected at the bottom of the page for each export

#### Example

```python
export_config.set("callbackFilePath", "resources/callback.js")
```

### `asyncCapture`

_**Type:** Boolean_

Is set if the export process waits for the `CAPTURE_EXIT` event

#### Example

```python
export_config.set("asyncCapture", True)
```

### `maxWaitForCaptureExit`

_**Type:** Integer_

Sets the maximum time FusionExport would wait for the `CAPTURE_EXIT` event to be triggered

#### Example

```python
export_config.set("maxWaitForCaptureExit", 8000)
```

### `outputFile`

_**Type:** String_

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

#### Example

```python
export_config.set("outputFile", "path/to/export--<%= number(2) %>")
```

### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

_**Type:** String_

#### Example

```python
export_config.set("outputFileDefinition", "resources/outputFileDefinition.js")
```

### `inputSVG`

_**Type:** String_

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

#### Example

```python
export_config.set("inputSVG", "resources/vector.svg")
```
