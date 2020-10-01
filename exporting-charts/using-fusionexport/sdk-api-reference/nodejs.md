---
title: Node.js | FusionCharts
description: Export from your desktop and web server using Node.js SDKs. A complete list of API reference.
heading: Node.js
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

### Constructor

The constructor of ExportManager takes a config object that can contain host and port values. These values will be used when connecting to FusionExport Server.

#### Parameters

Constructor only accepts an object which should contain following properties:

| Name   | Type     | Default     | Description                                      |
| ------ | -------- | ----------- | ------------------------------------------------ |
| `host` | `String` | `127.0.0.1` | URL of the hosted FusionExport server            |
| `port` | `Number` | 1337        | Port number where FusionExport server is running |

These properties are useful when you are running FusionExport server on the choice of your port and host or running behind a proxy like Nginx. It allows your SDK to send request to the new host and port number where FusionExport is running.

#### Example

```javascript
new ExportManager({
   host: 'api.fusionexport.com',
   port: 1337,
});
```

### Methods

#### `export(exportConfig[, outputDirPath, unzipFlag])`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format.

It returns a promise that resolves to the array filenames of the exported files or gets rejected by an error.

##### Parameters

| Name            | Type           | Default Value | Required | Description                                                                              |
| --------------- | -------------- | ------------- | -------- | ---------------------------------------------------------------------------------------- |
| `exportConfig`  | `ExportConfig` |               | Yes      | Instance of the `ExportConfig` which will include all export configurations              |
| `outputDirPath` | `String`       | `.`           | No       | Directory where you want to save the exported file.                                      |
| `unzipFlag`     | `Boolean`      | `false`       | No       | This parameter allows you to compress/decompress your output bundle into separate files. |

##### Returns

-  **Promise:** It returns a promise that resolves to the array of filenames of the exported files or gets rejected by an error.

##### Example

```javascript
exportManager
   .export(exportConfig, '.', true)
   .then(exportedFiles => {
      exportedFiles.forEach(file => console.log(file));
   })
   .catch(err => {
      console.log(err);
   });
```

#### `exportAsStream(ExportConfig exportConfig)`

You can get exported output as a stream and can work with it. Based on the configuration provided, this method exports your charts and dashboards as a stream.

##### Parameters

| Name         | Type         | Required | Description                                                               |
| ------------ | ------------ | -------- | ------------------------------------------------------------------------- |
| exportConfig | ExportConfig | yes      | Instance of the ExportConfig which will include all export configurations |

##### Returns

-  **Promise:** It returns a promise that resolves to the array of filenames of the exported files or gets rejected by an error.

##### Example

```javascript
exportManager
   .exportAsStream(exportConfig)
   .then(exportedFiles => {
      Object.keys(exportedFiles).forEach(key => {
         console.log(key, exportedFiles[key]);
      });
   })
   .catch(err => {
      console.log(err);
   });
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export weather it is a dashboard export, single export or a batch export.

### Constructor

This constructor does not take any argument.

#### Example

```javascript
new ExportConfig();
```

### Methods

#### `set()`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

##### Returns

-  **ExportConfig:** The instance of the exportConfig for method chaining.

##### Example

```javascript
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'single.json'));
```

#### `get()`

Takes one argument as the key and returns the value. You can find more about the options later on in this guide.

##### Returns

-  The value of the specified config.

##### Example

```javascript
exportConfig.get('chartConfig');
```

#### `has()`

Takes one argument as the key and returns a boolean if it is set or not.

##### Returns

-  **Boolean:** Return a boolean depending on wheather the key is set or not.

##### Example

```javascript
exportConfig.has('chartConfig');
```

#### `remove()`

Takes one argument as the key and removes that value if it was set.

##### Returns

-  **ExportConfig:** The instance of the exportConfig for method chaining.

##### Example

```javascript
exportConfig.remove('chartConfig');
```

#### `clear()`

Clears all the values that were set earlier.

##### Returns

-  **ExportConfig:** The instance of the exportConfig for method chaining.

##### Example

```javascript
exportConfig.clear();
```

## ExportConfig Options

### `chartConfig`

_**Type:** String | Object_

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored. You can also directly pass the chart configuration object and it will still work.

#### Example

```javascript
exportConfig.set('chartConfig', 'resources/chart-config-file.json');
```

### `type`

_**Type:** String_

Sets the format of the output file. As of now we support `png`, `jpeg`, `svg` and `pdf`.

#### Example

```javascript
exportConfig.set('type', 'pdf');
```

### `quality`

_**Type:** String_

Sets the quality of the output file. Provide either `good`, `better` or `best`.

#### Example

```javascript
exportConfig.set('quality', 'best');
```

### `outputFile`

_**Type:** String_

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. `number(start, end, interval)` will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. `timestamp()` will resolve to the current timestamp in unix format.

#### Example

```javascript
exportConfig.set('outputFile', 'path/to/export--<%= number(2) %>');
```

### `template`

_**Type:** String_

Accepts only the template string. Throws an exception if data provided by the user is not a string.

#### Example

```javascript
exportConfig.set('template', '<html>...</html>');
```

### `templateWidth`

Sets the width of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parse value of the string is NaN.

_**Type:** String | Number_

#### Example

```javascript
// With a number
exportConfig.set('templateWidth', 1200);

// With a string
exportConfig.set('templateWidth', '1200');
```

### `templateHeight`

_**Type:** String | Number_

Sets the height of the viewport in which it will get rendered. Throws an exception when the data provided by the user is not a string or when the parsed value of the string is NaN.

#### Example

```javascript
// With a number
exportConfig.set('templateHeight', 3000);

// With a string
exportConfig.set('templateHeight', '3000');
```

#### `templateFormat`

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

```javascript
exportConfig.set('templateFormat', 'A4');
```

### `templateFilePath`

_**Type:** String_

Sets the path of the HTML template used for dashboard export

#### Example

```javascript
exportConfig.set('templateFilePath', 'resources/template.html');
```

### `headerEnabled`

_**Type:** Boolean_

This enables header in the exported PDF file. When the value of this property is set to `true`, following components will be added in the header automatically:

1. `title` : Left aligned
2. `url` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```javascript
exportConfig.set('headerEnabled', true);
```

### `footerEnabled`

_**Type:** Boolean_

This enables footer in the exported PDF file. When the value of this property is set to `true`, following components will be added in the header automatically:

1. `pageNumber` : Left aligned
2. `date` : Right aligned

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```javascript
exportConfig.set('footerEnabled', true);
```

### `headerComponents` / `footerComponents`

_**Type:** Object_

These properties will allow you to configure the components which you want to show in the header and footer respectively. As of now five components are supported in both header and footer: `title`, `url`, `date`, `pageNumber` and `logo`. All the properties will have following attributes to configure:

| Attributes | Type   | Description                                                                                        |
| ---------- | ------ | -------------------------------------------------------------------------------------------------- |
| `position` | String | Will accept values like `left` and `right` which are **case-insensitive**.                         |
| `style`    | String | Style defined in CSS string                                                                        |
| `format`   | String | **Only applicable for `pageNumber`**. It will accept two keywords, `currentPage` and `totalPages`. |
| `src`      | String | **Only applicable for `logo`**. It will accept aboslute URL of the logo file                       |

Please keep in mind that this property should be used while exporting to PDF only.

#### Example

```javascript
exportConfig.set('headerComponents', {
   date: {
      position: 'left',
      style: '',
   },
   pageNumber: {
      position: 'right',
      format: '{{current}} of {{total}}',
   },
});
```

### `headerStyle` / `footerStyle`

_**Type**: Object_

Style defined here will be set to all the components provided in either header or footer as a default. You have to provide style in the CSS string format just like the way you define an inline style.

#### Example

```javascript
exportConfig.set('headerStyle', "font-family: 'Source Sans Pro', colour:'#000';");
```

### `orientation`

_**Type**: String_

This property will accept `portrait` or `landscape` as values. As the name suggests, it will set the orientation of the page. By default the value will be `portrait`.

#### Example

```javascript
exportConfig.set('orientation', 'landscape');
```

### `pageMargin`

_**Type**: String | Object_

It will add margins on the page layout. It will accept both string and object. In case of string, margins will get applied on all four sides. In case of object `top`, `right`, `bottom`, `left` are the properties. Units for providing margins are:

-  `px` - pixel
-  `in` - inch
-  `cm` - centimeter
-  `mm` - millimeter

#### Example

```javascript
exportConfig.set('margin', '10cm');
exportConfig.set('margin', {
   top: '10px',
   right: '20px',
   bottom: '20px',
   left: '10px',
});
```

### `resourceFilePath`

_**Type:** String_

JSON file having the dependencies of the template when `templateFilePath` is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take sone or more glob to specify which files should be excluded.

#### Example

```javascript
exportConfig.set('resourceFilePath', 'resources/resource.json');
```

The `resource.json` looks like as shown below:

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

```javascript
exportConfig.set('callbackFilePath', 'resources/callback.js');
```

### `asyncCapture`

_**Type:** Boolean_

Sets if the export process will wait for `CAPTURE_EXIT` event

#### Example

```javascript
exportConfig.set('asyncCapture', true);
```

### `maxWaitForCaptureExit`

_**Type:** Number_

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

#### Example

```javascript
exportConfig.set('maxWaitForCaptureExit', 8000);
```

### `inputSVG`

_**Type:** String_

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

#### Example

```javascript
exportConfig.set('inputSVG', 'resources/vector.svg');
```

### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

_**Type:** String_

#### Example

```javascript
exportConfig.set('outputFileDefinition', 'resources/outputFileDefinition.js');
```
