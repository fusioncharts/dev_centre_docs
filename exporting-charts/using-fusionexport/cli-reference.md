---
title: CLI Reference | FusionCharts
description: This article contains the list of cli references of FusionExport.
heading: CLI Reference
---

Here you'll get the list of FusionExport CLI references.

### config (--config, -e)
A JSON file that contains any or all of the CLI options.
All the CLI options can be written in a JSON file by providing the JSON file as CLI argument using `--config`, or `-e`, option. The remaining elements are figured out automatically.

**Default:** `fusioncharts_export.json`

config.json file looks like as shown below:

```javascript
{
  "chart-config": "fusioncharts_chart.js",
  "output-file": "fc-<%= number(2, 100, 3)",
  "type": "png",
  "width": 1000,
  "height": 500
}
```

Run the following command in the terminal:

```javascript
$ fe -e fusioncharts_export.json
```

### chart-config (--chart-config, -c)
A JSON or JS file which contains an array of json objects or an object. The object is passed to the chart constructor to render the chart.

**Default:** `fusioncharts_chart.json`

In case of JS file, the object is exported. It also accepts multiple files, directory path or glob pattern in a space separated format. For files containing single chart config, it will create a single exported file. For files containing multiple chart config, it will create a directory named after the respective filename, that will contain the individual exported file.
FusionExport CLI accepts the chart configuration using the `--chart-config` or `-c` option. 

Save the chart configuration in a JSON file. The structure of this JSON file will be as shown below:

```javascript
[
   {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "550",
      "height": "350",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "data": [
            {
               "label": "Mon",
               "value": "15123"
            },
            {
               "label": "Tue",
               "value": "14233"
            },
            {
               "label": "Wed",
               "value": "25507"
            }
         ]
      }
   }
]
```

Run the following command in the terminal:

```javascript
$ fe -c <chart-config-file.json>
```

**JS structure to export a single chart from the CLI is as shown below:**
Save the chart configuration in a JavaScript file. In this case, the whole chart configuration object must be exported. The JS structure to export a single chart from the CLI is as shown below:

```javascript
module.exports = {
  // fusioncharts config
};
```

To use this newly created JavaScript file for export, run the following command:

```javascript
$ fe - c <chart-config-file.js>
```

**For exporting a single chart from the CLI using multiple files:**
If chart configurations are stored in multiple directories and multiple files, all the files can be included using a glob pattern. In that case, the glob pattern should be provided using this option in a string format.

```javascript
module.exports = {
  // fusioncharts config
};
```

To use multiple files for the export, execute the following command:

```javascript
$ fe -c 'resources/charts/file_1.json resources/charts/file_2.json resources/charts/sub_1/* resources/charts/sub_2/*'
```

The output maintains the minimal uncommon folder structure. If any file consists of more than one chart config, a folder gets created based on it’s name and the exported files get exported in that particular folder.

### chart-config-options (--chart-config-options, -O)

JSON object that provides an option to override the chart configuration passed through `--chart-config` option.
The JSON object structure should reflect the object structure of another chart config. It can also take a dot-separated key name of a chart config. It is generally used to manipulate all the chart configs temporarily for export.

**To manipulate all chart configs through chart-config options:**

Let’s say we have a chart config file with multiple chart configs as __multiple-chart-config.json__. The contents of this file are as given below:

```javascript
{
   "type": "pie2d",
   "renderAt": "pie_chart",
   "width": "500",
   "height": "400",
   "dataFormat": "json",
   "dataSource": {
      "chart": {
         "caption": "Number of visitors last week",
         "subCaption": "Bakersfield Central vs Los Angeles Topanga"
      },
      "categories": [
         {
            "category": [
               {
                  "label": "Mon"
               },
               {
                  "label": "Tue"
               },
               {
                  "label": "Wed"
               }
            ]
         }
      ],
      "dataset": [
         {
            "seriesname": "Los Angeles Topanga",
            "data": [
               {
                  "value": "13400"
               },
               {
                  "value": "12800"
               },
               {
                  "value": "22800"
               }
            ]
         }
      ]
   }
},
{
   "type": "mscolumn2d",
   "renderAt": "column_chart",
   "width": "450",
   "height": "420",
   "dataFormat": "json",
   "dataSource": {
      "chart": {
         "caption": "Split of Sales by Product Category",
         "subCaption": "In top 5 stores last month",
         "yAxisname": "Sales (In USD)"
      },
      "categories": [
         {
            "category": [
               {
                  "label": "Bakersfield Central"
               },
               {
                  "label": "Garden Groove harbour"
               }
            ]
         }
      ],
      "dataset": [
         {
            "seriesname": "Food Products",
            "data": [
               {
                  "value": "17000"
               },
               {
                  "value": "19500"
               }
            ]
         },
         {
            "seriesname": "Non-Food Products",
            "data": [
               {
                  "value": "25400"
               },
               {
                  "value": "29800"
               }
            ]
         }
      ]
   }
}
export-config.json
{
  "chart-config": "multiple-chart-config.json",
  "chart-config-options": {
    "dataSource.chart.subCaption": "For last year - Edited",
    "dataSource": {
      "chart": {
        "xAxisname": "Month - Edited"
      }
    }
  }
}
```

Execute the following command:

```javascript
$ fe -e export-config.json
```

All charts will now have the sub-caption set to For __last year-Edited__ and the x-axis name set to __Month-Edited__.

### input-file (--input-file, -i)

The SVG file that needs to be exported.

**Default:** `fusioncharts_chart.json`

* Used to export SVG files
* Export an SVG file

To the SVG file, named as `vector.svg` for our example, execute the following command::

```javascript
$ fe -i vector.svg
```

### output-file (--output-file, -o)

Output files that need to be generated.

**Default:** `export--<%= number(1) %>.png`

Output file provides a template to name the exported files. If you want to place all the files in a directory with the default naming, you can just specify a directory. To specify a directory, the template should end with a path separator respective to the OS and all the exported files will be placed inside that directory.
Output file names are resolved from an EJS template. There are two built in functions that you can use right away.

The two built in method structures are:

- `number(start, end, step)`: Increments a number from start to end with the `step (interval)` as mentioned. The end and step are optional parameters.
- `timestamp()`: Provides the current time in milliseconds.

Shift this and the examples after the methods are described.

```javascript
export--<%= number(1) %>

exp--<%= timestamp() %>.png

exp--<%= number(5, 100, 2) %>_<%= timestamp() %>
```

If an extension is provided with the filename, the output type gets inferred from that.
Any zipped output will always be named **fusioncharts_export.zip**.

To export using output file template, run the following command:

```javascript
$ fe -c multiple-chart-config.json -o export--<%= number(1) %>.jpg
```

To export to __S3__ or __FTP__, just prepend `s3:` and `ftp:` to the output file string respectively.

```javascript
$ fe -c multiple-chart-config.json -o s3:export--<%= number(1) %>.jpg
```

### output-file-definition (--output-file-definition, -F)

JS or JSON file that contains methods and arrays to be used for naming the output files.
Custom functions and arrays can also be provided on top of the two built in functions to construct the output file names.

An example of an output definition file named as __def.js__ is as shown below:

```javascript
module.exports = {
  captionIndexStr: (chartConfig, index, chartConfigList) => {
    const caption = chartConfig.dataSource.chart.caption;
    return `${caption}__${index}`;
  },
  dates: [
    '17-11-2017_fc_1',
    '17-11-2017_fc_2',
    '17-11-2017_fc_3',
    '17-11-2017_fc_4'
  ]
};
```

The `captionIndexStr` function receives three parameters from the FusionExport CLI system. These can be used to generate filenames dynamically. The return value of the function will be used as the name of the output file.
This option also accepts array inputs that are iterated through to create file names dynamically.

To export a file using the above file, run the following command:

```javascript
$ fe -c multiple-chart-config.json -o ‘exp--<%= captionIndexStr() %>_<%= dates %>’ -F def.js
```

### output-as-zip (--output-as-zip, -z)

Exports the output files either as individual files or in a zip format.

**Default:** `false`

The output gets exported in zip format. This option takes boolean value.

```javascript
$ fe -c multiple-chart-config.json -z 1
```

### type (--type, -t)

Specifies the type of the output file. This will override any extension provided in the `--output-file` option.

**Default:** `png`

Output type can be any of the following:

- png, jpg, jpeg, pdf, svg, csv, xls, xlsx, html for chart export
- png, jpg, jpeg, pdf, html, svg for svg export
- png, jpg, jpeg, pdf, html for dashboard export

Example:

```javascript
$ fe -c single.json -t xlsx
```

### quality (--quality, -q) v1.0.0

Specifies the quality of the output file.

**Default:** `better`

Quality can be any of the following:

* **good:** Exported image dimension to chart ratio - 1
* **better:** Exported image dimension to chart ratio - 2
* **best:** Exported image dimension to chart ratio - 3

Example:

```javascript
$ fe -c single.json -q best
```

### width (--width, -W)

Specifies the width of the chart.
If this option is specified, all the charts will be rendered with the specified width.

### height (--height, -H)

Specifies the height of the chart.
If this option is specified, all the charts will be rendered with the specified height.

### callbacks (--callbacks, -b)

JS file that provides an option to bind custom methods to the events fired by the FusionCharts library.

**Default:** `fusioncharts_export_callbacks.js`

Using this option, you can add a custom javascript file while exporting. Here’s an example of a custom javascript that can be included while the export is taking place.

The content present in the __custom.js__ file is shown below:

```javascript
document.body.style.transform = "rotate(-10deg)";
```

Once done, run the following command:

```javascript
$ fe -c chart.json -b custom.js
```

### template (--template, -T) v1.0.0

HTML file to be used for dashboard export.

**Default:** `template.html`

To export an image of a dashboard, create a template as an HTML file, containing the layout and supporting static resources __(JS, CSS, images,__ and __fonts)__.
The template must contain placeholder elements for the charts, preferably `<divs>`. The chart config array must contain the charts with the `renderAt` attribute that match the IDs of the elements stated above.

The following code goes into the HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chart</title>
  </head>
  <body>
    <div id="pie_chart"></div>
    <div id="column_chart"></div>
  </body>
</html>
```

The **multiple_charts_config.json** contains the configurations of the charts to be exported. The following code goes into the **multiple_charts_config.json** file: 

```javascript
{
   "type": "pie2d",
   "renderAt": "pie_chart",
   "width": "500",
   "height": "400",
   "dataFormat": "json",
   "dataSource": {
      "chart": {
         "caption": "Number of visitors last week",
         "subCaption": "Bakersfield Central vs Los Angeles Topanga"
      },
      "categories": [
         {
            "category": [
               {
                  "label": "Mon"
               },
               {
                  "label": "Tue"
               },
               {
                  "label": "Wed"
               }
            ]
         }
      ],
      "dataset": [
         {
            "seriesname": "Los Angeles Topanga",
            "data": [
               {
                  "value": "13400"
               },
               {
                  "value": "12800"
               },
               {
                  "value": "22800"
               }
            ]
         }
      ]
   }
},
{
   "type": "mscolumn2d",
   "renderAt": "column_chart",
   "width": "450",
   "height": "420",
   "dataFormat": "json",
   "dataSource": {
      "chart": {
         "caption": "Split of Sales by Product Category",
         "subCaption": "In top 5 stores last month",
         "yAxisname": "Sales (In USD)"
      },
      "categories": [
         {
            "category": [
               {
                  "label": "Bakersfield Central"
               },
               {
                  "label": "Garden Groove harbour"
               }
            ]
         }
      ],
      "dataset": [
         {
            "seriesname": "Food Products",
            "data": [
               {
                  "value": "17000"
               },
               {
                  "value": "19500"
               }
            ]
         },
         {
            "seriesname": "Non-Food Products",
            "data": [
               {
                  "value": "25400"
               },
               {
                  "value": "29800"
               }
            ]
         }
      ]
   }
}
```

`renderAt` is one of the more important attribute out here. As you can see, the template contains two `<div>` elements with the IDs `#pie_chart` and `#column_chart`.
In the configuration file, you need to include the same `renderAt` attribute so that when you finally export the charts, FusionExport will replace those divs with the actual charts.

To create the template, run the following command:

```javascript
$ fe -c multiple_charts_config.json -T template.html
```

### resources (--resources, -r) v1.0.0

JSON file that contains all the resources that will be injected into the template while rendering charts.

**Default:** `resources.json`

This option is not mandatory; it is required only when `--remote-export-enabled` option is set to `true`. Most resources that are mentioned in the template using the `<link>`, `<script>` or `<img>` tags, are found intelligently. If any additional fonts and links are present in CSS or if any dynamic links are included in the JavaScript file, you can specify them using the `--resources` option.

The format of the `--resources` option is as shown below:

```javascript
{
    "basePath": "src/build",
    "include": [
        "*.jpg",
        "*.png"
    ],
    "exclude": [
        "filename.jpg"
    ]
}
```

### dashboard-logo (--dashboard-logo, -G)

**Logo path**

To place a banner on top of the exported dashboard, specify the logo which you want to use in that banner. Note that this is only available for dashboard export.

Example:

```javascript
$ fe -c multiple_charts_config.json -T template.html -G logo.png
```

### dashboard-heading (--dashboard-heading, -D)

**Heading of the exported dashboard**

To place a banner on top of the exported dashboard, you can also specify the heading that you want to use in that banner. Note that this is only used for dashboard export.

Example:

```javascript
$ fe -c multiple_charts_config.json -T template.html -D ‘Financial Analysis’
```

### dashboard-subheading (--dashboard-subheading, -B)

**Subheading of the exported dashboard**

When placing a banner on top of the exported dashboard, you can specify the subheading that you want to use in that banner. Note that this is only valid for dashboard export.

Example:

```javascript
$ fe -c multiple_charts_config.json -T template.html -G logo.png -D ‘Financial Analysis’ -B ‘A descriptive analysis’
```

### async-capture (--async-capture, -a)

**Enables asynchronous capture**

**Default:** `false`
Exporting can be invoked from the injected JavaScript `--callbacks option`.
If the `--async-capture` option is enabled, the injected script must emit `CAPTURE_EXIT` event.

Example: `scrollcombidy2d` chart config.

```javascript
{
  module.exports = {
  type: 'scrollcombidy2d',
  renderAt: 'chart-container',
  width: '550',
  height: '400',
  dataFormat: 'json',
  id: 'myChartId', // for referring the chart instance
  dataSource: {
     // rest of the config
     }
};
```

The intention here is to take a snap of the whole chart. By default, the chart’s width is `550px`. We will increase the width and then ask FusionExport to start processing. Following is the content of the __callback.js__ file:

```javascript
FusionCharts.items.myChartId.addEventListener('renderComplete', (evt) => {
    evt.sender.resizeTo('3000', '400');
    FusionExport.emit('CAPTURE_EXIT');
});
```

Run the following command:

```javascript
$ fe -c scrollchart.js -b callback.js -async-capture true
```

### async-capture-timeout (--async-capture-timeout, -m)

Maximum time (in milliseconds) the system will wait for async-capture event to trigger.

**Default:** `6000`

By default, maximum time FusionExport waits for the `CAPTURE_EXIT` event is `6` seconds. It can be increased up to `60` seconds using `--async-capture-timeout` option.

Here is an example of the export config file.

```javascript
{
  "chart-config": "scrollchart.js",
  "callbacks": "callback.js",
  "async-capture": "true",
  "async-capture-timeout": "4000",
  "output-file": "fc-<%= number(1, 10) %>",
  "type": "jpeg"
}
```

`--async-capture-timeout` option takes input as milliseconds.

### log-dest (--log-dest, -d)

Enables logging and sets the log destination.

By default, export logging is disabled. It can be enabled by setting a log destination.

You can provide the log file path using the following command:

```javascript
$ fe -c single.json -d logs/
```

### log-file (--log-file, -f)

**Default:** `fusioncharts_export.log`

You can provide the log file name using the following command:

```javascript
$ fe -c single.json -d logs/ -f custom.log
```

### log-level (--log-file, -f)

**Default:** `fusioncharts_export.log`

You can provide the log file name using the following command:

```javascript
$ fe -c single.json -d logs/ -f custom.log
```

### log-level (--log-level, -l)

**Default:** `info`

You can provide the log level using the following command:

```javascript
$ fe -c single.json -d logs/ -f custom.log -l 5
```

The supported log levels are:

```javascript
0: error
1: warn
2: info
3: verbose
4: debug
5: silly
```

Both the number format and string format can be provided in this option.

### host (--host, -S) v1.0.0

Host of FusionExport service.

**Default:** `127.0.0.1`

Provides the host on which the `fusionexport-service` is running.

You can provide the host using the following command:

```javascript
$ fe -c single.json -S 192.156.56.65
```

### port (--port, -P) v1.0.0

Port of FusionExport service.

**Default:** `1337`

Provides the port on which the `fusionexport-service` is running.

You can provide the port using the following command:

```javascript
$ fe -c single.json -S 192.156.56.65 -P 3443
```

### ftp-config (--ftp-config, -p) v1.0.0

Config file for FTP connection during FTP export.

During FTP export, FTP configuration can be passed through this as a JSON file. The JSON structure looks like as follows:

```javascript
ftpConfig.json
{
  "host": "189.156.78.98",
  "port": "1332",
  "user": "someone",
  "password": "faultysome"
}
```

You can provide the FTP config using the following command:

```javascript
$ fe -c single.json -o "ftp:fc-<%= number(1) %>" -p ftpConfig.json
```

### S3-config (--s3-config, -s) v1.0.0

Config file for S3 connection during S3 export.

While exporting, S3 configuration can be passed as a JSON file. The JSON structure looks like as follows:

```javascript
s3Config.json
{
  "bucket": "somebigbucket",
  "accessKey": "ASDFSDF$#%FDSAF",
  "secretAccessKey": "ASDFDSF#$RF%#WE$#^f35f2354frADFDSF"
}
```

You can provide the S3 config using the following command:

```javascript
$ fe -c single.json -o "s3:fc-<%= number(1) %>" -s s3Config.json
```
