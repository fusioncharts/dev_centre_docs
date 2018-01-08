---
permalink: exporting-charts/using-fusionexport/tutorials/add-a-logo-or-heading-to-the-dashboard.html
title: Add a logo or a heading to the dashboard | FusionCharts
description: This article talks about the SDKs used for exporting a dashboard.
heading: Add a logo or a heading to the dashboard
chartPresent: False
---

You can add logos, headings, and subheadings to your exported dashboard images. The logo and the heading/subheading can be included at the top of the dashboard. To do so, use the options listed below:

* `--dashboardLogo` (followed by the resolved file path for the logo)
* `--dashboardHeading` (followed by the heading text)
* `--dashboardSubheading` (followed by the subheading text)


To add logos, headings, and subheadings to your exported dashboard images, you can use the CLI or SDKs of the languages mentioned below, using the command given below:

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
    	<p>To add a logos, headings, and subheadings to the exported dashboard image, use the commands listed below: </p>
    	<div>
    		<ul>
    			<li>To add a logo: <strong>--dashboard-logo</strong> or <strong>-G</strong></li>
    			<li>To add a heading: <strong>--dashboard-heading</strong> or <strong>-D</strong></li>
    			<li>To add a subheading: <strong>--dashboard-subheading</strong> or <strong>-B</strong></li>
    		</ul>
    	</div>

		<p><strong>A sample command is shown below:</strong></p>
```javascript
        $ fe -c multiple_charts_config.json -T template.html -G "path/to/logo.png" -D "FusionExport Dashboard" -B "Powered by FusionExport"
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
  dashboardLogo: path.join(__dirname, 'logo.png'),
  dashboardHeading: 'Dashboard',
  dashboardSubheading: 'Powered by FusionExport',
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
        config.set("dashboardLogo", "fullpath/of/logo.png");
        config.set("dashboardHeading", "Dashboard");
        config.set("dashboardSubheading", "Powered by FusionExport");

        // Instantiate the ExportManager class
        ExportManager em = new ExportManager();
        // Call the export() method with the export config and the respective callbacks
        em.export(config, new ExportChart(), new ExportChart());
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
            exportConfig.Set("dashboardLogo", "fullpath/of/logo.png");
            exportConfig.Set("dashboardHeading", "Dashboard");
            exportConfig.Set("dashboardSubheading", "Powered by FusionExport");

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

// Adding a logo or heading to the dashboard

require __DIR__ . '/../vendor/autoload.php';

// Use the sdk
use FusionExport\ExportManager;
use FusionExport\ExportConfig;

// Instantiate the ExportConfig class and add the required configurations
$exportConfig = new ExportConfig();
$exportConfig->set('chartConfig', file_get_contents('resources/multiple.json'));
$exportConfig->set('templateFilePath', realpath('resources/template.html'));
$exportConfig->set('dashboardLogo', realpath('resources/logo.jpg'));
$exportConfig->set('dashboardHeading', 'FusionCharts');
$exportConfig->set('dashboardSubheading', 'The best charting library in the world');

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

from fusionexport import ExportManager, ExportConfig  # Import sdk


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
export_config["dashboardLogo"] = "fullpath/of/logo.png"
export_config["dashboardHeading"] = 'Dashboard'
export_config["dashboardSubheading"] = 'Powered by FusionExport'

# Instantiate the ExportManager class
em = ExportManager()
# Call the export() method with the export config and the respective callbacks
em.export(export_config, on_export_done, on_export_state_changed)

        ```
    </div>
    <div class="tab golang-tab">
```javascript
        // Adding a logo or heading to the dashboard

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

    logoFilePath, err := filepath.Abs("resources/logo.jpg")
    check(err)
    exportConfig.Set("dashboardLogo", logoFilePath);

    exportConfig.Set("dashboardHeading", "FusionCharts");
    exportConfig.Set("dashboardSubheading", "The best charting library in the world");

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