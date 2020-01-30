---
title: Java | FusionCharts
description: Export from your desktop and web server using Java SDKs. A complete list of API reference.
heading: Java
---

## Class: ExportManager

ExportManager is the most essential module in order to access actions related to FusionExport like, change the export file quality, set up the file format, etc.

#### Constructor: `new ExportManager()`

**Example**

```javascript
new ExportManager();
```

#### **Method:** `setHostAndPort(String host, int port)`

This take parameters that can contain host and port values. These values will be used when connecting to FusionExport Server.

**Parameters**

| Name | Type    | Default Value | Description                                                                |
| ---- | ------- | ------------- | -------------------------------------------------------------------------- |
| host | String  | 127.0.0.1     | The host address which will be used when connecting to FusionExport server |
| port | Integer | 1337          | The port number which will be used when connecting to FusionExport server  |

**Example**

```javascript
exportManager.setHostAndPort("api.fusionexport.com", 1337);
```

#### **Method:** `export(ExportConfig exportConfig, String outputDirPath, Boolean unzip)`

This is the most important method from ExportManager module. Based on the configuration provided, this method exports your charts and dashboards to the given format.

It returns an array of strings which contain filenames of the exported files.

**Parameters**

| Name          | Type         | Default Value | Required | Description                                                                                                                                                            |
| ------------- | ------------ | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| exportConfig  | ExportConfig |               | Yes      | Instance of the ExportConfig which will include all export configurations                                                                                              |
| outputDirPath | String       | .             | Yes      | Directory where you want to save the exported file. By default the file will be saved in the same directory from where the script is executed. This field is optional. |
| unzip         | Boolean      | false         | Yes      | This parameter allows you to decompress your output bundle into separate files. To allow this behaviour pass true. This field is optional.                             |

**Returns**

- **String[]:** It returns an array of strings which contains the array of filenames of the exported files.

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

- **Promise:** It returns an object with String and `ByteArrayOutputStream` as **HashMap**.

**Example**

```java
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;

import com.fusioncharts.fusionexport.client.*; // import sdk

public class ExportAsStream {
	public static void main(String[] args) throws Exception {

		// Instantiate the ExportManager class
		ExportManager em = new ExportManager();
		// Instantiate the ExportConfig class and add the required configurations
		ExportConfig config = new ExportConfig();
		config.set("chartConfig", "chart-config.json");
		config.set("type", "png");

		HashMap<String, ByteArrayOutputStream> files = em.exportAsStream(config);
		for (String key : files.keySet()) {
			// key contains the file name
			String fileName = key;
			// value has the exported binary data for that particular key/file
			ByteArrayOutputStream baos = files.get(key);

			File newFile = new File("./" + fileName);
			new File(newFile.getParent()).mkdirs();
			FileOutputStream fos = new FileOutputStream(newFile);
			fos.write(baos.toByteArray());
			fos.flush();
			fos.close();
		}
		System.out.println("Done");
	}
}
```

## Class: ExportConfig

ExportConfig class is used to set up all the configs for a single export whether it is a dashboard export, single export or a batch export.

#### **Constructor:** `new ExportConfig()`

This constructor does not take any argument.

**Example**

```javascript
new ExportConfig();
```

#### **Method:** `set(String configName, String value)`

Takes two argument first one as the key second one as the value. You can find more about the options later on in this guide.

**Parameters**

| Name       | Type                       | Default Value | Required | Description         |
| ---------- | -------------------------- | ------------- | -------- | ------------------- |
| configName | String                     | null          | Yes      | Name of the config  |
| value      | String, Integer or Boolean | null          | Yes      | Value of the config |

**Returns**

- ExportConfig: The instance of the exportConfig for method chaining.

**Example**

```javascript
exportConfig.set("chartConfig", "./static/chart-config.json");
```

## ExportConfig Options

There are plenty of options which you can configure in ExportConfig. These options essentially help you set quality of the image to define how your chart is going to look like.

#### `chartConfig`

Sets the configuration of a single chart or multiple charts in an array. This configuration should follow [FusionCharts JSON structure](https://www.fusioncharts.com/dev/chart-attributes/). It accepts, file path of the JSON where chart configurations have been stored.

- **Type:** String

**Example**

```javascript
exportConfig.set("chartConfig", "resourceschart-config-file.json");
```

#### `inputSVG`

This option is useful to export your SVG files to the file formats supported by FusionExport. It accepts file path of the SVG in string format.

- **Type:** String

**Example**

```javascript
exportConfig.set("inputSVG", "resources\vector.svg");
```

#### `templateFilePath`

Sets the path of the HTML template used for dashboard export

- **Type:** String

**Example**

```javascript
exportConfig.set("templateFilePath", "resources\template.html");
```

#### `resourceFilePath`

JSON file having the dependencies of the template when templateFilePath is provided. basePath denotes the base path of the project no local resource should be present outside this directory. include takes one or more glob to specify which files to send to the server. exclude take sone or more glob to specify which files should be excluded.

- **Type:** String

**Example**

```javascript
exportConfig.set("resourceFilePath", "resources\resource.json");
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
exportConfig.set("callbackFilePath", "resourcescallback.js");
```

#### `asyncCapture`

Sets if the export process will wait for CAPTURE_EXIT event

- **Type:** Boolean

**Example**

```javascript
exportConfig.set("asyncCapture", true);
```

#### `maxWaitForCaptureExit`

Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered

- **Type:** Integer

**Example**

```javascript
exportConfig.set("maxWaitForCaptureExit", 8000);
```

#### `dashboardLogo`

Sets the path to the logo file

- **Type:** String

**Example**

```javascript
exportConfig.set("dashboardLogo", "resources/logo.jpg");
```

#### `dashboardHeading`

Sets the title of the dashboard

- **Type:** String

**Example**

```javascript
exportConfig.set("dashboardHeading", "FusionCharts");
```

#### `dashboardSubheading`

Sets the sub-title of the dashboard

- **Type:** String

**Example**

```javascript
exportConfig.set(
  "dashboardSubheading",
  "The best charting library in the world"
);
```

#### `type`

Sets the format of the output file

- **Type:** String

**Example**

```javascript
exportConfig.set("type", "pdf");
```

#### `quality`

Sets the quality of the output file. Provide either good, better or best

- **Type:** String

**Example**

```javascript
exportConfig.set("quality", "best");
```

#### `outputFile`

Sets the output filename template, along with the path. You can write ejs style template for output file names. By default two functions are provided. number(start, end, interval) will resolve to a number respective to the position of the chart config in the chart config array in case of multiple file export. timestamp() will resolve to the current timestamp in unix format.

- **Type:** String

**Example**

```javascript
exportConfig.set("outputFile", "path/to/export--<%= number(2) %>");
```

#### `outputFileDefinition`

JS file defining functions or array to resolve output file names. You can write functions which will be called with the current chartConfig, index and the whole chartConfig list and will be called when resolving each filename. If it's an array then the values will be used sequentially. You have to call this functions or array in the outputFile template.

- **Type:** String

**Example**

```javascript
exportConfig.set("outputFileDefinition", "resources/outputFileDefinition.js");
```
