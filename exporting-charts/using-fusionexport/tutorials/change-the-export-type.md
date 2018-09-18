---
title: Change the export type | FusionCharts
description: This article talks about the SDKs used for changing the export type of a chart.
heading: Change the export type
---

## Supported Types

FusionExport supports exporting charts to the following file types:

* PNG
* JPEG
* PDF
* SVG
* HTML
* CSV
* XLS
* XLSX

## Prerequisites

Before starting with the code, ensure that you have:

1. [Downloaded and installed FusionExport Server]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks) 

## Chart Configuration

The chart configuration files are simple `.json` files. If you are executing the template code without any changes, the chart configuration file should be in the following path:

```bash
[code_executed_from_this_directory]/resources/chart-config-file.json
```

> It is **not** mandatory to create a file containing the chart configuration. In the code, you can directly create an object containing a serialized JSON string representation of the chart configuration, and pass it on to the `ExportConfig.set()` object of the FusionExport SDK you are using. For more clarity, see the inline comments in the [template code]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type#code-4).

The accepted format of configuration is the same as that of charts you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite). Refer to [Chart Attributes]({% site.baseurl %}/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts. 

Except for the case of exporting dashboards, all other exports work on the basis of the chart configuration that you create. Here, we will use the configuration of a simple Column 2D chart.

```JavaScript
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
}]
```

Based on the above configuration, the exported chart will look like the image below.

![Change-the-Export-Type]({% site.baseurl %}/images/change-the-export-type-image-1.png)

## Code

Before you start with the code, we suggest going through the steps that the code accomplishes.

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method.  You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method. Use the `set()` method to change the export `type`, by passing any of the [supported types]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type#supported-types-1) as one of its arguments.

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`.

4. Use the instance of `ExportManager()` to perform pass success messages using the `on()` method, and save the exported chart in an appropriate file format using the `saveExportedFiles()` method.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults

> In most cases, the default output file name is `export--1.png`. If you execute the template code without any changes, you can find it in the same directory from where the code has been executed.

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content">

<div class="tab csharp-tab">
<pre><code class="custom-hlc language-cs">
using System;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest {
    public static class ExportSingleChart {
        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT) {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            // Provide path of the chart configuration which we have defined above. 
            // You can also pass same the object as serialized JSON.
            exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

            // *** ATTENTION - MODIFY THE EXPORT TYPE ***
            // OPTIONS ARE: 'png' (default) | 'jpeg' | 'pdf' | 'svg' | 'html' | 'csv' | 'xls' | 'xlsx'
            exportConfig.Set("type", "jpeg");

            // Instantiate the ExportManager class
            ExportManager em = new ExportManager(host: host, port: port);
            // Call the Export() method with the export config and the respective callbacks
            em.Export(exportConfig, OnExportDone, OnExportStateChanged);
        }

        // Called when export is done
        static void OnExportDone(ExportEvent ev, ExportException error) {
            if (error != null) {
                Console.WriteLine("Error: " + error);
            } else {
                var fileNames = ExportManager.GetExportedFileNames(ev.exportedFiles);
                Console.WriteLine("Done: " + String.Join(", ", fileNames)); // export result
            }
        }

        // Called on each export state change
        static void OnExportStateChanged(ExportEvent ev) {
            Console.WriteLine("State: " + ev.state.customMsg);
        }
    }
}
</code></pre>
</div>

<div class="tab java-tab">
<pre><code class="custom-hlc language-java">
import com.fusioncharts.fusionexport.client.*; // import sdk

public class Script {
    public static void main(String[] args) throws Exception {
        String configPath = "resources/chart-config-file.json";

        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        // Provide path of the chart configuration which we have defined above. 
        // You can also pass the same object as serialized JSON.
        config.set("chartConfig", configPath);

        // ++++++ ATTENTION - MODIFY THE EXPORT TYPE ++++++
        // OPTIONS ARE: 'png' (default) | 'jpeg' | 'pdf' | 'svg' | 'html' | 'csv' | 'xls' | 'xlsx'
        config.set("type", "jpeg");

        // Instantiate the ExportManager class
        ExportManager manager = new ExportManager(config);
        // Call the export() method with the export config and the respective callbacks
        manager.export(new ExportDoneListener() {
                @Override
                public void exportDone(ExportDoneData result, ExportException error) {
                    if (error != null) {
                        System.out.println(error.getMessage());
                    } else {
                        ExportManager.saveExportedFiles(".", result);
                    }
                }
            },
            new ExportStateChangedListener() {
                @Override
                public void exportStateChanged(ExportState state) {
                    System.out.println("STATE: " + state.reporter);
                }
            });
    }
}
</code></pre>
</div>

<div class="tab php-tab">
<pre><code class="custom-hlc language-php">
<?php

  // Import dependencies
  require
DIR__ . '/../vendor/autoload.php';
  use FusionExport\ExportManager;
  use FusionExport\ExportConfig;

  // Instantiate the ExportConfig class and add the required configurations
  $exportConfig = new ExportConfig();
  // Provide path of the chart configuration which we have defined above.  
  // You can also pass the same object as serialized JSON.
  $exportConfig->set('chartConfig', realpath('resources/chart-config-file.json'));

  // ++++++ ATTENTION - MODIFY THE EXPORT TYPE ++++++
  // OPTIONS ARE: 'png' (default) | 'jpeg' | 'pdf' | 'svg' | 'html' | 'csv' | 'xls' | 'xlsx'
  $exportConfig->set('type', 'jpeg');

  // Called on each export state change
  $onStateChange = function ($event) {
      $state = $event->state;
      echo('STATE: [' . $state->reporter . '] ' . $state->customMsg . "\n");
  };

  // Called when export is done
  $onDone = function ($event, $e) {
      $export = $event->export;
      if ($e) {
          echo('ERROR: ' . $e->getMessage());
      } else {
          foreach ($export as $file) {
              echo('DONE: ' . $file->realName. "\n");
          }
          ExportManager::saveExportedFiles($export);
      }
  };

  // Instantiate the ExportManager class
  $exportManager = new ExportManager();

  // Call the export() method with the export config and the respective callbacks
  $exportManager->export($exportConfig, $onDone, $onStateChange);

?>
</code></pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="custom-hlc language-javascript">
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
// You can also pass same object as serialized JSON.
// Results in the default output file being a .png of ‘better’ quality
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'chart-config-file.json'));

// ++++++ ATTENTION - MODIFY THE EXPORT TYPE ++++++
// OPTIONS ARE: 'png' (default) | 'jpeg' | 'pdf' | 'svg' | 'html' | 'csv' | 'xls' | 'xlsx'
exportConfig.set('type', 'jpeg');


// ********** EXPORT-MANAGER ***********

// Instantiate ExportManager
const exportManager = new ExportManager();

// Provide the exportConfig to exportManager()
exportManager.export(exportConfig);


// ***** OUTPUT ******

// Called when export is done
exportManager.on('exportDone', (outputFileBag) => {
    outputFileBag.forEach((op) => {
        console.log('EXPORT DONE');
    });

    ExportManager.saveExportedFiles(outputFileBag);
});
</code></pre>
</div>

<div class="tab python-tab">
<pre><code class="custom-hlc language-python">
# Import sdk
from fusionexport import ExportManager, ExportConfig 

# Read the chart configuration file
def read_file(file_path):
    try:
        with open(file_path, "r") as f:
            return f.read()
    except Exception as e:
        print(e)


# Called when export is done
def on_export_done(event, error):
    if error:
        print(error)
    else:
        # The first argument represents the path for saving the output
        ExportManager.save_exported_files(".", event["result"])


# Called on each export state change
def on_export_state_changed(event):
    print(event["state"])


# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()
// Provide path of the chart configuration which we have defined above. // You can also pass the same object as serialized JSON.
export_config["chartConfig"] = read_file("resources/chart-config-file.json")

// ++++++ ATTENTION - MODIFY THE EXPORT TYPE ++++++
// OPTIONS ARE: 'png' (default) | 'jpeg' | 'pdf' | 'svg' | 'html' | 'csv' | 'xls' | 'xlsx'
export_config["type"] = "jpeg"

# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)

# Call the export() method with the export config and the respective callbacks
em.export(export_config, on_export_done, on_export_state_changed)
</code></pre>
</div>
</div>
</div>

## Related Resources

After you have changed the export type for a single chart, we recommend learning how to:

* [Change the Export Quality]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)

* [Customize the Width and Height of an Exported Chart]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart)

* [Override a Chart Config]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/override-the-chart-config)