---
permalink: exporting-charts/using-fusionexport/tutorials/asynchronous-capture.html
title: Asynchronous capture | FusionCharts
description: This article talks about the SDKs used for asynchronous capture.
heading: Asynchronous capture
chartPresent: False
---

Exporting can be invoked from the injected JavaScript (done using the `--callbackFilePath` option). If the `--asyncCapture` option is enabled, the injected script will trigger the  `CAPTURE_EXIT` event.
You need to call the following method to invoke the export:

```javascript
FusionExport.emit('CAPTURE_EXIT');
```

By default, __FusionExport waits for 6 seconds for the event to trigger/occur__. You can opt to increase the wait time up to 60 seconds. To do so, set the `--maxWaitForCaptureExit` option in milliseconds.
To use asynchronous capture, you can use the CLI or SDKs of the languages mentioned below, using the commands given below:

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
    	<div class="mt-20 pb-10">Exporting can be invoked from the injected JavaScript (using the<code>--callbacks</code> option). If <code>--async-capture</code> option is enabled, the injected script must emit CAPTURE_EXIT event.</div>
    	
    	<div class="mt-20 pb-10"><strong>An example of a scrollCombidy2d chart is shown below:</strong></div>
```javascript
        // scrollchart.js
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
		<div class="mt-20 pb-10">The intention here is to take a snap of the whole chart. By default, the chart’s width is `550px`. We will increase the width and then ask FusionExport to start processing.</div>
		<div class="mt-20 pb-10"><strong>Following is the content of the callback.js file:</strong></div>
```javascript
        FusionCharts.items.myChartId.addEventListener('renderComplete', (evt) => {
    evt.sender.resizeTo('3000', '400');
    FusionExport.emit('CAPTURE_EXIT');
});
        ```

        <div class="mt-20 pb-10"><strong>Run the following command:</strong></div>
```javascript
        $ fe -c scrollchart.js -b callback.js -async-capture true
        ```

        <div>By default, the maximum time that FusionExport waits for the <code>`CAPTURE_EXIT`</code> event is 6 seconds. It can be increased up to 60 seconds using `--async-capture-timeout` option.</div>
        <div class="mt-20 pb-10"><strong>Here is an example export_config.json file.</strong></div>
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

		The `--async-capture-timeout` option takes input as milliseconds. 
    </div>
    
    <div class="tab nodejs-tab">
```javascript
        const fs = require('fs');
const path = require('path');

// require fusionexport
const FusionExport = require('../');

const chartConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'scrollchart.json')).toString());
const host = '127.0.0.1';
const port = 1337;

// instantiate FusionExport
const fusion = new FusionExport({ host, port });

const exportConfig = {
  chartConfig,
  callbackFilePath: path.join(__dirname, 'expand_scroll.js'),
  asyncCapture: true,
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
        config.set("chartConfig", readFile("fullpath/of/scrollchart.json"));
        config.set("callbackFilePath", "fullpath/of/expand_scroll.js");
        config.set("asyncCapture", "true");

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
            exportConfig.Set("chartConfig", File.ReadAllText("fullpath/of/scrollchart.json"));
            exportConfig.Set("callbackFilePath", "fullpath/of/expand_scroll.js");
            exportConfig.Set("asyncCapture", "true");

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

// Async capture

require __DIR__ . '/../vendor/autoload.php';

// Use the sdk
use FusionExport\ExportManager;
use FusionExport\ExportConfig;

// Instantiate the ExportConfig class and add the required configurations
$exportConfig = new ExportConfig();
$exportConfig->set('chartConfig', file_get_contents('resources/single.json'));
$exportConfig->set('callbackFilePath', realpath('resources/expand_scroll.js'));
$exportConfig->set('asyncCapture', 'true');

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
export_config["chartConfig"] = read_file("scrollchart.json")
export_config["callbackFilePath"] = "fullpath/of/expand_scroll.js"
export_config["asyncCapture"] = True

# Instantiate the ExportManager class
em = ExportManager()
# Call the export() method with the export config and the respective callbacks
em.export(export_config, on_export_done, on_export_state_changed)

        ```
    </div>
    <div class="tab golang-tab">
```javascript
        // Async capture

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

    chartConfig, err := ioutil.ReadFile("resources/single.json")
    check(err)
    exportConfig.Set("chartConfig", string(chartConfig))

    callbackFilePath, err := filepath.Abs("resources/expand_scroll.js")
    check(err)
    exportConfig.Set("callbackFilePath", callbackFilePath)

    exportConfig.Set("asyncCapture", "true")

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