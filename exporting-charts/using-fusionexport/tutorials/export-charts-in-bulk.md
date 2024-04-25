---
title: Export charts in bulk | FusionCharts
description: Read on to discover exporting multiple charts simultaneously with FusionExport. Simplify configuration with a single JSON file & enhance app performance.
heading: Export charts in bulk
---

In this article, you will learn about the chart configuration and the code that enables you export multiple charts simultaneously using FusionExport. 

For exporting multiple charts simultaneously, you don’t need to create multiple JSON files containing individual chart configuration. Rather, you can use a single configuration file to accomplish the same task, simply by writing each chart’s configuration as elements of an array. 

This approach also helps to increase the performance of an application by reading a single file containing JSON configurations of all the charts, instead of several files containing a chart configuration each.

## Prerequisites

Before starting with the code, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks) 

## Chart Configuration

The chart configuration file is a simple `.json` file, and can contain multiple chart configurations. For exporting multiple charts simultaneously in bulk:

* The JSON must consist of an array of objects

* Each object contains configurations for individual charts

Given below is a schematic representation of a JSON file containing configurations of three charts.

```
[
    {
        // chart 1 configuration
    },
    {
        // chart 2 configuration
    },
    {
        // chart 3 configuration
    }
]
```

If you are executing the template code without any changes, the chart configuration file should be in the following path:

```Bash
<code_executed_from_this_directory>/resources/chart-config-file.json
```

In this tutorial, we will use the configuration of three charts:

* [A Column 2D Chart](/chart-attributes/?chart=column2d)

* [A Pie Chart](/chart-attributes/?chart=pie2d)

* [A Line Chart](/chart-attributes/?chart=line)

The accepted format of configuration is the same as that of charts you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite-xt). Refer to [Chart Attributes](/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts.

```json
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
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }]
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
        }, {
            "label": "Apparels",
            "value": "146330"
        }, {
            "label": "Electronics",
            "value": "105070"
        }, {
            "label": "Household",
            "value": "49100"
        }]
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
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "23507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }],
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

Based on the above configuration, the exported charts will look like the images below.

![Change-the-Export-Type](/images/export-charts-in-bulk-image-1.png)

> It is **not** mandatory to create a file containing the chart configuration. In the code, you can directly create an object containing a serialized JSON string representation of the chart configuration, and pass it on to the `ExportConfig.set()` object of the FusionExport SDK you are using. For more clarity, see the inline comments in the template code.

## Code

Before you start with the code, we suggest going through the steps that the code accomplishes. 

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method. 

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).

4. Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults.

> When multiple charts are exported, the default output files will have names like `export--1.png`, `export--2.png`, `export--3.png`, etc. If you execute the template code without any changes, you can find it in the same directory from where the code has been executed. 

> For detailed information on the vast number of possibilities, refer to [FusionExport SDK API Reference](/exporting-charts/using-fusionexport/sdk-api-reference/), and select the SDK of your choice from the left navigation panel.

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

namespace FusionExportTest {
    public static class BulkExport {
        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT) {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            List < string > results = new List < string > ();

            // Instantiate the ExportManager class
            using(ExportManager exportManager = new ExportManager()) {
                exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, outputDir = ".", unzip = true));
            }

            foreach(string path in results) {
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
        // Call the export() method with the export config and the respective callbacks
        manager.export(config, outputDir = ".", unzip = true);
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
  $exportManager->export($exportConfig, $outputDir = '.', $unzip = true);

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

// Provide the exportConfig
// Optionally, print the exported file names and error messages, if any

exportManager.export(exportConfig, outputDir = '.', unzip = true).then((exportedFiles) => {
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

# Call the export() method with the export_config as an argument
em.export(export_config, outputDir = ".", unzip = True)
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
