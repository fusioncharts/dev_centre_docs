---
title: Python | FusionCharts
description: Export from your desktop and web server using Python SDKs. A complete list of API reference.
heading: Python
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

#### **Constructor:** `ExportManager(host, port)`\*\*

The Constructor of ExportManager take parameters that may contain host and port values. These values will be used when connecting to FusionExport Server.

**Parameters**

| Name   | Type   | Default Value | Description                                                                |
| ------ | ------ | ------------- | -------------------------------------------------------------------------- |
| `host` | string | 127.0.0.1     | The host address which will be used when connecting to FusionExport server |
| `port` | int    | 1337          | The port number which will be used when connecting to FusionExport server  |

**Example**

```javascript
em = ExportManager("api.fusionexport.com", 1337);
```

#### **Method:** `export(export_config, output_dir='.', unzip=False)`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format.

It returns an array of string which contains filenames of the exported files.

**Parameters**

| Name            | Type         | Default Value | Required | Description                                                                                                                                                            |
| --------------- | ------------ | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `export_config` | ExportConfig |               | Yes      | Instance of the ExportConfig which will include all export configurations                                                                                              |
| `output_dir`    | String       | .             | No       | Directory where you want to save the exported file. By default the file will be saved in the same directory from where the script is executed. This field is optional. |
| `unzip`         | Boolean      | false         | No       | This parameter allows you to decompress your output bundle into separate files. To allow this behaviour pass true. This field is optional.                             |

**Returns**

- **Array:** It returns an array of strings which contains the array of filenames of the exported files.

**Example**

```javascript
export_manager.export(export_config, ".", true);
```

#### **Method:** `exportAsStream(exportConfig)`

This is a method from ExportManager module.

**Parameters**

| Name         | Type         | Required | Description                                                               |
| ------------ | ------------ | -------- | ------------------------------------------------------------------------- |
| exportConfig | ExportConfig | yes      | Instance of the ExportConfig which will include all export configurations |

**Returns**

- **Promise:** It returns an object with filename and stream as key-value pair.

**Example**

```javascript
import shutil
import os

#!/usr/bin/env python
from fusionexport import ExportManager, ExportConfig  # Import sdk

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

export_config["chartConfig"] = "config-user.json"

# Instantiate the ExportManager class
em = ExportManager(host="127.0.0.1", port=1337)

# Call the export() method with the export config and the output location
exported_files = em.exportAsStream(export_config)

# print list of exported files
print("Exported file(s): ")
for file in exported_files:
	with open(file, 'wb') as f:
		f.write(exported_files[file])
		print("\t" + os.path.abspath(file))
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export whether it is a dashboard export, single export or a batch export.

#### **Constructor:** `new ExportConfig()`

This constructor does not take any argument.

**Example**

```javascript
export_config = ExportConfig();
```

#### **Method:** `set(config_name, config_value)`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

**Parameters**

| Name           | Type                      | Default Value | Required | Description         |
| -------------- | ------------------------- | ------------- | -------- | ------------------- |
| `config_name`  | String                    | null          | Yes      | Name of the config  |
| `config_value` | String, Number or Boolean | null          | Yes      | Value of the config |

**Returns**

- None

**Example**

```javascript
export_config.set("chartConfig", "config.json");
```

#### **Method:** `get()`

Takes one argument as the key and returns the value.

**Parameters**

| Name          | Type   | Default Value | Required | Description        |
| ------------- | ------ | ------------- | -------- | ------------------ |
| `config_name` | String | null          | Yes      | Name of the config |

**Returns**

- String, Number or Boolean: The value of the specified config.

**Example**

```javascript
export_config.get("chartConfig");
```

#### **Method:** `has()`

Takes one argument as the key and returns a boolean if it is set or not.

**Parameters**

| Name          | Type   | Default Value | Required | Description        |
| ------------- | ------ | ------------- | -------- | ------------------ |
| `config_name` | String | null          | Yes      | Name of the config |

**Returns**

- **Boolean:** Return a boolean depending on whether the key is set or not.

**Example**

```javascript
export_config.has("chartConfig");
```

#### **Method:** `remove()`

Takes one argument as the key and removes that value if it was set.

**Parameters**

| Name          | Type   | Default Value | Required | Description        |
| ------------- | ------ | ------------- | -------- | ------------------ |
| `config_name` | String | null          | Yes      | Name of the config |

**Returns**

- **Boolean:** depending on whether the config_name is removed or not.

**Example**

```javascript
export_config.remove("chartConfig");
```

#### **Method:** `clear()`

Clears all the values that were set earlier.

**Returns**

- None

**Example**

```javascript
export_config.clear();
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

#### `chartConfig`

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored.

- **Type:** String

**Example**

```javascript
export_config.set("chartConfig", "resources/chart-config-file.json");
```

#### `inputSVG`

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

- **Type:** String

**Example**

```javascript
export_config.set("inputSVG", "resources/vector.svg");
```

#### `templateFilePath`

Sets the path of the HTML template used for dashboard export

- **Type:** String

**Example**

```javascript
export_config.set("templateFilePath", "resources/template.html");
```

#### `resourceFilePath`

JSON file having the dependencies of the template when templateFilePath is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take sone or more glob to specify which files should be excluded.

- **Type:** String

**Example**

```javascript
export_config.set("resourceFilePath", "resources/resource.json");
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

Sets the path for a Javascript file that would be injected at the bottom of the page for each export

- **Type:** String

**Example**

```javascript
export_config.set("callbackFilePath", "resources/callback.js");
```

#### `asyncCapture`

Sets if the export process will wait for CAPTURE_EXIT event

- **Type:** Boolean

**Example**

```javascript
export_config.set("asyncCapture", True);
```

#### `maxWaitForCaptureExit`

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

- **Type:** Integer

**Example**

```javascript
export_config.set("maxWaitForCaptureExit", 8000);
```

#### `dashboardLogo`

Sets the path to the logo file

- **Type:** String

**Example**

```javascript
export_config.set("dashboardLogo", "resources/logo.jpg");
```

#### `dashboardHeading`

Sets the title of the dashboard

- **Type:** String

**Example**

```javascript
export_config.set("dashboardHeading", "FusionCharts");
```

#### `dashboardSubheading`

Sets the sub-title of the dashboard

- **Type:** String

**Example**

```javascript
export_config.set(
  "dashboardSubheading",
  "The best charting library in the world"
);
```

#### `type`

Sets the format of the output file

- **Type:** String

**Example**

```javascript
export_config.set("type", "pdf");
```

#### `quality`

Sets the quality of the output file. Provide either good, better or best

- **Type:** String

**Example**

```javascript
export_config.set("quality", "best");
```

#### `outputFile`

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

- **Type:** String

**Example**

```javascript
export_config.set("outputFile", "path/to/export--<%= number(2) %>");
```

#### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

- **Type:** String

**Example**

```javascript
export_config.set("outputFileDefinition", "resources/outputFileDefinition.js");
```
