---
title: Export Charts as Zip Files with FusionExport
description: Effortlessly graph export multiple charts as a zip file using FusionExport. Save time by bundling charts together for easy sharing. Try it now!
heading: Export the output files as a zip
---

When exporting multiple charts simultaneously, or emailing multiple charts as attachments, it is helpful to have a `.zip` file that bundles all the charts together. FusionExport natively allows you to **graph export** and charts as a `.zip` file, thus saving your time and effort. In this article, we show how to use FusionExport for exporting charts as a zip file - it's as easy as setting a flag called `unzip` to `false` in the code.

## Prerequisites

Before starting with the code, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

## Chart Configuration

The chart configuration file is a simple `.json` file, and can contain multiple chart configurations. Since in this tutorial we will show how to export multiple charts or a single **graph export** as a zip file, we will put configuration of 3 charts in a single file. 

> Even a single chart can be exported as a zip file.

For exporting multiple charts simultaneously in bulk:

* The JSON must consist of an array of objects

* Each object contains configurations for individual charts

Given below is a schematic representation of a JSON file containing configurations of three charts for a **graph export**.

```
[{
	// chart 1 configuration
}, {
	// chart 2 configuration
}, {
	// chart 3 configuration
}]
```

If you are executing the template code without any changes, the chart configuration file should be in the following path:

```Bash
[code_executed_from_this_directory]/resources/chart-config-file.json
```

In this tutorial, we will use the configuration of three charts:

* [A Column 2D Chart](/chart-attributes/?chart=column2d)

* [A Pie Chart](/chart-attributes/?chart=pie2d)

* [A Line Chart](/chart-attributes/?chart=line)

The accepted format of configuration is the same as that of charts you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite-xt). Refer to [Chart Attributes](/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts.

```javascript
[{
    "type": "column2d",
    "renderAt": "chart-container",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Number of visitors in the last 3 days",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "theme": "fusion"
        },
        "data": [{
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
}, {
    "type": "pie2d",
    "renderAt": "chart-container",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion"
        },
        "data": [{
                "label": "Food",
                "value": "285040"
            },
            {
                "label": "Apparels",
                "value": "146330"
            },
            {
                "label": "Electronics",
                "value": "105070"
            },
            {
                "label": "Household",
                "value": "49100"
            }
        ]
    }
}, {
    "type": "line",
    "renderAt": "chart-container",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "theme": "fusion",
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "lineThickness": "2"
        },
        "data": [{
                "label": "Mon",
                "value": "15123"
            },
            {
                "label": "Tue",
                "value": "14233"
            },
            {
                "label": "Wed",
                "value": "23507"
            },
            {
                "label": "Thu",
                "value": "9110"
            },
            {
                "label": "Fri",
                "value": "15529"
            },
            {
                "label": "Sat",
                "value": "20803"
            },
            {
                "label": "Sun",
                "value": "19202"
            }
        ],
        "trendlines": [{
            "line": [{
                "startvalue": "18500",
                "color": "#29C3BE",
                "displayvalue": "Average{br}weekly{br}footfall",
                "valueOnRight": "1",
                "thickness": "2"
            }]
        }]
    }
}]
```

Based on the above configuration, three charts will be exported and then zipped, generating an output file with the default name `fusioncharts_export.zip` in the same directory from here the **graph export** code is executed. You may unzip the file and inspect the exported charts - they will look like the images below.

![Export-The-Output-File](/images/export-charts-in-bulk-image-1.png)

> It is **not** mandatory to create a file containing the chart configuration. In the code, you can directly create an object containing a serialized JSON string representation of the chart configuration, and pass it on to the `ExportConfig.set()` object of the FusionExport SDK you are using. For more clarity, see the inline comments in the template code mentioned below.

## Code

Before you start with the code, we suggest going through the steps that the **graph export** code accomplishes. 

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method. To export charts as a zip file, pass the value of the `exportAsZip` parameter of the `set()` as `true`.

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`.

4. Use the instance of `ExportManager()` to perform **graph export** pass success messages using the `on()` method, and save the exported chart in an appropriate file format using the `saveExportedFiles()` method. The three charts will be exported, compressed, and then zipped, generating an output file with the default name `fusioncharts_export.zip` in the same directory from here the export code is executed.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults.

> By default, the zip file will have the name `fusioncharts_export.zip`. If you execute the template code without any changes, you can find it in the same directory from where the code has been executed. 

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content extra-tabs">

<div class="tab csharp-tab active">
<pre><code class="language-csharp">
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    public static class OutputAsZip
    {
        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
        {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            List&lt;string&gt; results = new List&lt;string&gt;();

            // Instantiate the ExportManager class
            using (ExportManager exportManager = new ExportManager())
            {
                exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, outputDir = ".", unzip = false));
            }

            foreach (string path in results)
            {
                Console.WriteLine(path);
            }

            Console.Read();

        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab java-tab">
<pre><code class="language-java">
import com.fusioncharts.fusionexport.client.*; // import sdk

public class Script {
    public static void main(String[] args) throws Exception {
        String configPath = "resources/chart-config-file.json";

        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        // Provide path of the chart configuration which we have defined above. 
        // You can also pass the same object as serialized JSON.
        config.set("chartConfig", configPath);

        // Instantiate the ExportManager class
        ExportManager manager = new ExportManager();
        // Call the export() method with the export config and the flag unzip = false
        manager.export(config, outputDir = ".", unzip = false);
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab php-tab">
<pre><code class="language-php">
<?php

  // Import dependencies
  require DIR__ . '/../vendor/autoload.php';
  use FusionExport\ExportManager;
  use FusionExport\ExportConfig;

  // Instantiate the ExportConfig class and add the required configurations
  $exportConfig = new ExportConfig();
  // Provide path of the chart configuration which we have defined above.  
  // You can also pass the same object as serialized JSON.
  $exportConfig->set('chartConfig', realpath('resources/chart-config-file.json'));

  // Instantiate the ExportManager class
  $exportManager = new ExportManager();

  // Call the export() method with the exportConfig and the respective callbacks
  $exportManager->export($exportConfig, $outputDir = '.', $unzip = false);

?>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="language-javascript">
// ********** IMPORT AND RESOLVE DEPENDENCIES ***********

// Import 'path' core module of Node.js
const path = require('path');

// Import FusionExport SDK client for Node.js
const {
    ExportManager,
    ExportConfig
} = require('fusionexport-node-client');


// ********** EXPORT CONFIG ***********

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();


// Provide path of the chart configuration which we have defined above.
// You can also pass the same object as serialized JSON.
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'chart-config-file.json'));


// ********** EXPORT-MANAGER ***********

// Instantiate ExportManager
const exportManager = new ExportManager();


// ***** OUTPUT ******

// Provide the exportConfig and unzip = false
// Optionally, print the exported file names and error messages, if any

exportManager.export(exportConfig, outputDir = '.', unzip = false).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab python-tab">
<pre><code class="language-python">
# Import sdk
from fusionexport import ExportManager, ExportConfig 

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

# Provide path of the chart configuration which we have defined above.
# You can also pass the same object as serialized JSON.
export_config["chartConfig"] = read_file("resources/chart-config-file.json")

# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)

# Call the export() method with the export_config and unzip = False
em.export(export_config, outputDir = ".", unzip = False)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

## Related Resources

* [Change the export type](/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

* [Change the export quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)

* [Export the Output Files as a Zip](/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip)

* [Export a Dashboard](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)

* [Export a D3 Chart](/exporting-charts/using-fusionexport/tutorials/export-a-d3-chart)

## Ready to Zip Up Your Charts?

Effortlessly export and share multiple Charts at once with our FusionExport solution. Simply follow these steps and get a downloadable zip file containing all your charts in one convenient location. Try now!

## Conclusion

Effortlessly **graph export** and share multiple charts at once with our FusionExport solution. By following the steps outlined above, you can generate a downloadable zip file containing all your charts in one convenient location. This feature saves you time and effort, ensuring your charts are neatly bundled together for easy sharing and distribution.

Whether you're exporting multiple charts simultaneously or emailing them as attachments, FusionExport's zip file functionality streamlines the process. Try it now and experience the convenience of graph export with FusionExport.

## FAQs

### How do I export multiple charts as a zip file using FusionExport?
To export multiple charts as a zip file using FusionExport, you need to do is define configs in JSON (one file per chart), set exportAsZip=true in the SDK client, and run export. All charts will zip into "fusioncharts_export.zip".

### Is it mandatory to create a chart configuration file for exporting charts?
No, it is not mandatory to create a separate chart configuration file for graph export. You can directly create an object containing a serialized JSON string representation of the chart configuration and pass it to the ExportConfig.set() method in the FusionExport SDK.

### What are the benefits of exporting charts as a zip file?
Zipping your FusionExport charts brings a triple threat of benefits. Sharing becomes easy, as all charts are bundled in a single file. It helps save precious time by exporting everything simultaneously, ditching the individual exports. Also, keeping your files organized with zipped charts means a clean and clutter-free storage system.

### What types of programming languages are compatible with graph export?
The graph export functionality is compatible with a wide range of programming languages, including JavaScript, Node.js, Python, Java, C#, and PHP. This flexibility allows you to integrate the export process into your existing projects regardless of the language you're using, making it a versatile solution for exporting charts.
