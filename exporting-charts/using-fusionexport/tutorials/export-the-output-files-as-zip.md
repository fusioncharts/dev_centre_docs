---
title: Export the output files as a zip | FusionCharts
description: This article talks about the SDKs used for exporting output files as a zip.
heading: Export the output files as a zip
---

When exporting multiple charts simultaneously, or emailing multiple charts as attachments, it is helpful to have a `.zip` file that bundles all the charts together. FusionExport natively allows you to export charts as a `.zip` file, thus saving your time and effort. In this article, we show how to use FusionExport for exporting charts as a zip file - it's as easy as setting a flag to `true` in the code!

## Prerequisites

Before starting with the code, ensure that you have:

1. [Downloaded and installed FusionExport Server]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

## Chart Configuration

The chart configuration file is a simple `.json` file, and can contain multiple chart configurations. Since in this tutorial we will show how to export multiple charts as a zip file, we will put configuration of 3 charts in a single file. 

> Even a single chart can be exported as a zip file.

For exporting multiple charts simultaneously in bulk:

* The JSON must consist of an array of objects

* Each object contains configurations for individual charts

Given below is a schematic representation of a JSON file containing configurations of three charts.

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

* [A Column 2D Chart]({% site.baseurl %}/chart-attributes/?chart=column2d)

* [A Pie Chart]({% site.baseurl %}/chart-attributes/?chart=pie2d)

* [A Line Chart]({% site.baseurl %}/chart-attributes/?chart=line)

The accepted format of configuration is the same as that of charts you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite). Refer to [Chart Attributes]({% site.baseurl %}/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts.

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

Based on the above configuration, three charts will be exported and then zipped, generating an output file with the default name `fusioncharts_export.zip` in the same directory from here the export code is executed. You may unzip the file and inspect the exported charts - they will look like the images below.

![Export-Chart-As-Image]({% site.baseurl %}/images/export-chart-as-image-1.png)

> It is **not** mandatory to create a file containing the chart configuration. In the code, you can directly create an object containing a serialized JSON string representation of the chart configuration, and pass it on to the `ExportConfig.set()` object of the FusionExport SDK you are using. For more clarity, see the inline comments in the [template code](ADD LINK).

## Code

Before you start with the code, we suggest going through the steps that the code accomplishes. 

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method. To export charts as a zip file, pass the value of the `exportAsZip` parameter of the `set()` as `true`.

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`.

4. Use the instance of `ExportManager()` to perform pass success messages using the `on()` method, and save the exported chart in an appropriate file format using the `saveExportedFiles()` method. The three charts will be exported, compressed, and then zipped, generating an output file with the default name `fusioncharts_export.zip` in the same directory from here the export code is executed.

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
            // You can also pass the same object as serialized JSON.
            exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

            // ATTENTION - Export charts as a zip file
            // exportConfig.set("exportAsZip", "true")

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

        // ATTENTION - Export charts as a zip file
        config.set("exportAsZip", "true");

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

  // ATTENTION - Export charts as a zip file
  $exportConfig->set('exportAsZip', true);

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
// You can also pass the same object as serialized JSON.
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'chart-config-file.json'));

// ATTENTION - Export charts as a zip file
exportConfig.set('exportAsZip', true);


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

# Provide path of the chart configuration which we have defined above.
# You can also pass the same object as serialized JSON.
export_config["chartConfig"] = read_file("resources/chart-config-file.json")

# ATTENTION - Export charts as a zip file
export_config["exportAsZip"] = True

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

* [Change the Export Type]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

* [Change the Export Quality]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)

* [Export the Output Files as a Zip]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip)

* [Export a Dashboard]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)

* [Export a D3 Chart]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-d3-chart)