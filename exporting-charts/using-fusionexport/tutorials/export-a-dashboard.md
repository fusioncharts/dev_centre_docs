---
permalink: exporting-charts/using-fusionexport/tutorials/export-a-dashboard.html
title: Export a dashboard | FusionCharts
description: This article talks about the SDKs used for exporting a dashboard.
heading: Export a dashboard
chartPresent: False
---

To export an image of the dashboard, create a template file as an HTML file, containing the layout and supporting static resources __(JS, CSS, images, and fonts)__.
The template must contain the placeholder elements for the charts, preferably using `<div>`. The chart config array must contain the charts with the `renderAt` attribute that match the IDs of the elements stated above. 
To export a dashboard, you can use the CLI or SDKs of the languages mentioned below, using the command given below:

<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="python">Python</a></li>
    <li><a data-toggle="golang">Golang</a></li>
</ul>

<div class="tab-content extra-tabs">
    <div class="tab cli-tab active">
    	<div>We’ll name the template file with the placeholder elements as <strong>template.html</strong>.</div>
    	<div class="mt-20 pb-10"><strong>The following code goes into the template.html file:</strong></div>
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
        <div class="mt-30 pb-10"><strong>The multiple_charts_config.json contains the configurations of the charts to be exported. The following code goes into the multiple_charts_config.json file: </strong></div>
```json
        [
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
]
        ```
        <div class="mt-30 pb-10">Special attention needs to be given to the <strong>renderAt</strong> attribute. As you can see, our template contains two elements with the IDs <strong>#pie_chart</strong> and <strong>#column_chart</strong>.
        </div>
        <div class="mt-10 pb-10">In the configuration file, you need to include the same <strong>renderAt</strong> attribute so that when you finally export the charts, FusionExport will replace those divs with the actual charts.</div>
        <div class="mt-20 pb-10"><strong>To create the template, run the following command:</strong></div>
```javascript
        $ fe -c multiple_charts_config.json -T template.html
        ```

        <div class="mt-20 pb-10">The <strong>--resources</strong> option is not mandatory; it is needed only when --remote-export-enabled is set to true. Most resources that are mentioned in the template, using the &lt;link&gt;, &lt;script&gt; or &lt;img&gt; tags, are found intelligently. If any additional fonts or links are present in the CSS or any dynamic links are included in the JavaScript file, you can specify them using the <strong>--resources</strong> option.</div>
        
        <div class="mt-20 pb-10"><strong>The format of the --resources option is as shown below:</strong></div>

```json
        {
    "images": [
        "filename.jpg",
        "img/cat.png"
    ],
    "stylesheets": [
        "",
        ""
    ],
    "javascripts": [
        "",
        ""
    ],
    "fonts": [
        "",
        ""
    ]
}
        ```


    </div>
    
    <div class="tab nodejs-tab">
```javascript
        const fs = require('fs');
const path = require('path');
// require fusionexport
const FusionExport = require('../');

const chartConent = fs.readFileSync(path.resolve(__dirname, 'dashboard_charts.json')).toString();
const chartConfig = JSON.parse(chartConent);

const host = '127.0.0.1';
const port = 1337;

// instantiate FusionExport
const fusion = new FusionExport({ host, port });

const exportConfig = {
  chartConfig,
  templateFilePath: path.join(__dirname, 'template.html'),
};

// provide the export config
fusion.export(exportConfig);

fusion.on('exportDone', (files) => {
  // files can be read from files array
  // e.g. [{tmpPath:"", realName: ""}]
});

fusion.on('exportStateChange', (state) => {
  // called for export progress state change
});

fusion.on('error', (err) => {
  // catch error here
});

        ```
    </div>
    <div class="tab java-tab">
```java
        import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import com.fusioncharts.fusionexport.client.*; // import sdk

public class ExportChart implements ExportDoneListener, ExportStateChangedListener {

    public static void main(String[] args) {

        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        config.set("chartConfig", readFile("fullpath/of/dashboard_charts.json"));
        config.set("templateFilePath", "fullpath/of/template.html");

        // Instantiate the ExportManager class
        ExportManager em = new ExportManager();
        // Call the export() method with the export config and the respective callbacks
        em.export(config,  new ExportChart(),  new ExportChart());
    }

    @Override // Called when export is done
    public void exportDone(String result, ExportException error) {
        if (error != null) {
            System.out.println(error.getMessage());
        } else {
            System.out.println("DONE: " + result);
        }
    }

    @Override // Called on each export state change
    public void exportStateChanged(String state) {
        System.out.println("STATE: " + state);
    }

    private static String readFile(String file) {
        String fileContent = "";
        try {
            File f = new File(file);
            FileInputStream inp = new FileInputStream(f);
            byte[] bf = new byte[(int) f.length()];
            inp.read(bf);
            fileContent = new String(bf, "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileContent;
    }
}

        ```
    </div>
    <div class="tab csharp-tab">
```c
        using System;
using System.IO;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            exportConfig.Set("chartConfig", File.ReadAllText("fullpath/of/dashboard_charts.json"));
            exportConfig.Set("templateFilePath", "fullpath/of/template.html");

            // Instantiate the ExportManager class
            ExportManager em = new ExportManager();
            // Call the Export() method with the export config and the respective callbacks
            em.Export(exportConfig, OnExportDone, OnExportStateChanged);
        }
        
        // Called when export is done
        static void OnExportDone(string result, ExportException error)
        {
            if(error != null)
            {
                Console.WriteLine("Error: " + error);
            } else
            {   
                Console.WriteLine("Done: " + result); // export result
            }
        }
        
        // Called on each export state change
        static void OnExportStateChanged(string state)
        {
            Console.WriteLine("State: " + state);
        }
    }
}

        ```
    </div>
    <div class="tab php-tab">
```php
        <?php

// Exporting a dashboard
require __DIR__ . '/../vendor/autoload.php';

// Use the sdk
use FusionExport\ExportManager;
use FusionExport\ExportConfig;

// Instantiate the ExportConfig class and add the required configurations
$exportConfig = new ExportConfig();
$exportConfig->set('chartConfig', file_get_contents('resources/multiple.json'));
$exportConfig->set('templateFilePath', realpath('resources/template.html'));

// Called on each export state change
$onStateChange = function ($state) {
  echo('STATE: [' . $state->reporter . '] ' . $state->customMsg . "\n");
};

// Called when export is done
$onDone = function ($export, $e) {
    if ($e) {
        echo('ERROR: ' . $e->getMessage());
    } else {
        foreach ($export as $file) {
            echo('DONE: ' . $file->realName . "\n");
            copy($file->tmpPath, $file->realName);
        }
    }
};

// Instantiate the ExportManager class
$exportManager = new ExportManager();
// Call the export() method with the export config and the respective callbacks
$exportManager->export($exportConfig, $onDone, $onStateChange);

        ```
    </div>
    <div class="tab python-tab">
```python
        #!/usr/bin/env python

from fusionexport import ExportManager, ExportConfig # Import sdk

def read_file(file_path):
    try:
        with open(file_path, "r") as f:
            return f.read()
    except Exception as e:
        print(e)


# Called when export is done
def on_export_done(result, error):
    if error:
        print(error)
    else:
        print(result)


# Called on each export state change
def on_export_state_changed(state):
    print(state)


# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()
export_config["chartConfig"] = read_file("dashboard_charts.json")
export_config["templateFilePath"] = "fullpath/of/template.html"

# Instantiate the ExportManager class
em = ExportManager()
# Call the export() method with the export config and the respective callbacks
em.export(export_config, on_export_done, on_export_state_changed)

        ```
    </div>
    <div class="tab golang-tab">
```javascript
        // Exporting a dashboard

package main

import (
    "io/ioutil"
    "../FusionExport" // import the sdk
    "path/filepath"
    "fmt"
)

func saveFiles(fileBag []FusionExport.OutFileBag) {
    for _, file := range fileBag {
        fmt.Println(file.RealName)
        fileData, err := ioutil.ReadFile(file.TmpPath)
        check(err)
        err = ioutil.WriteFile(file.RealName, fileData, 0644)
        check(err)
    }
}

// Called when export is done
func onDone (outFileBag []FusionExport.OutFileBag, err error) {
    check(err)
    saveFiles(outFileBag)
}

// Called on each export state change
func onStateChange (event FusionExport.ExportEvent) {
    fmt.Println("[" + event.Reporter + "] " + event.CustomMsg)
}

func main() {
    // Instantiate ExportConfig and add the required configurations
    exportConfig := FusionExport.NewExportConfig()

    chartConfig, err := ioutil.ReadFile("resources/multiple.json")
    check(err)
    exportConfig.Set("chartConfig", string(chartConfig))

    templateFilePath, err := filepath.Abs("resources/template.html")
    check(err)
    exportConfig.Set("templateFilePath", templateFilePath)

    // Instantiate ExportManager
    exportManager := FusionExport.NewExportManager()
    // Call the Export() method with the export config and the respective callbacks
    exportManager.Export(exportConfig, onDone, onStateChange)
}

func check(e error) {
    if e != nil {
        panic(e)
    }
}

        ```
    </div>
</div>