---
permalink: exporting-charts/using-fusionexport/tutorials/change-the-export-quality.html
title: Change the export quality | FusionCharts
description: This article talks about the three qualitites in which charts can be exported
heading: Change the export quality
chartPresent: False
---

FusionExport lets you export charts in three different qualities. The three qualities are differentiated as good, better or best. By default FusionExport exports chart in `better` quality.

Use the `-q` or `--quality` option to customize the quality of the exported charts.

To change the export qulaity, you can use the CLI or SDKs of the languages mentioned below, using the command given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="python">Python</a></li>
    <li><a data-toggle="golang">Golang</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-bash">
	$ fe -c column_chart_config.json -q best
</code></pre>
</div>
    
<div class="tab nodejs-tab">
<pre><code class="custom-hlc language-javascript">
	// Exporting a chart with best quality
	const path = require('path');

	// Require FusionExport
	const {
	    ExportManager,
	    ExportConfig
	} = require('../');

	// Instantiate ExportManager
	const exportManager = new ExportManager();

	// Instantiate ExportConfig and add the required configurations
	const exportConfig = new ExportConfig();

	exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'single.json'));
	exportConfig.set('quality', 'best');

	// provide the export config
	exportManager.export(exportConfig);

	// Called when export is done
	exportManager.on('exportDone', (outputFileBag) => {
	    outputFileBag.forEach((op) => {
	        console.log(`DONE: ${op.realName}`);
	    });

	    ExportManager.saveExportedFiles(outputFileBag);
	});

	// Called on each export state change
	exportManager.on('exportStateChange', (state) => {
	    console.log(`[${state.reporter}] ${state.customMsg}`);
	});

	// Called on erroe
	exportManager.on('error', (err) => {
	    console.error(err);
	});
</code></pre>
</div>
<div class="tab java-tab">
<pre><code class="custom-hlc language-java">
	import com.fusioncharts.fusionexport.client.*;

	public class quality {
	    public static void main(String[] args) throws Exception {

	        String rootPath = System.getProperty("user.dir") + java.io.File.separator;
	        String configPath = rootPath + "examples" + java.io.File.separator + "chart-config-file.json";
	        ExportConfig config = new ExportConfig();
	        config.set("chartConfig", configPath);
	        config.set("quality", "best");

	        ExportManager manager = new ExportManager(config);
	        manager.export(new ExportDoneListener() {
	                @Override
	                public void exportDone(ExportDoneData result, ExportException error) {
	                    if (error != null) {
	                        System.out.println(error.getMessage());
	                    } else {
	                        ExportManager.saveExportedFiles(rootPath + "bin" + java.io.File.separator + "static2" + java.io.File.separator + "resources", result);
	                    }
	                }
	            },
	            new ExportStateChangedListener() {
	                @Override
	                public void exportStateChanged(ExportState state) {
	                    System.out.println("STATE: " + state.customMsg);
	                }
	            });

	    }
	}
</code></pre>
</div>
<div class="tab csharp-tab">
<pre><code class="custom-hlc language-cs">
	using System;
	using System.IO;
	using System.Linq;
	using FusionCharts.FusionExport.Client; // Import sdk

	namespace FusionExportTest {
	    public static class Quality {
	        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT) {
	            // Instantiate the ExportConfig class and add the required configurations
	            ExportConfig exportConfig = new ExportConfig();
	            exportConfig.Set("chartConfig", File.ReadAllText("./resources/single.json"));
	            exportConfig.Set("quality", "best");
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
<div class="tab php-tab">
<pre><code class="custom-hlc language-php">
	<?php
	// Exporting a chart with best quality
	require __DIR__ . '/../vendor/autoload.php';
	// Use the sdk
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;
	// Instantiate the ExportConfig class and add the required configurations
	$exportConfig = new ExportConfig();
	$exportConfig->set('chartConfig', realpath('resources/single.json'));
	$exportConfig->set('quality', 'best');
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
</code></pre>
</div>
<div class="tab python-tab">
<pre><code class="custom-hlc language-python">
	#!/usr/bin/env python

	from fusionexport
	import ExportManager, ExportConfig# Import sdk

	def read_file(file_path):
	    try:
	    with open(file_path, "r") as f:
	    return f.read()
	except Exception as e:
	    print(e)


	# Called when
	export is done
	def on_export_done(event, error):
	    if error:
	    print(error)
	else :
	    ExportManager.save_exported_files("exported_images", event["result"])


	# Called on each
	export state change
	def on_export_state_changed(event):
	    print(event["state"])


	# Instantiate the ExportConfig class and add the required configurations
	export_config = ExportConfig()
	export_config["chartConfig"] = read_file("chart-config-file.json")
	export_config["quality"] = "best"

	#
	Provide port and host of FusionExport Service
	export_server_host = "127.0.0.1"
	export_server_port = 1337

	# Instantiate the ExportManager class
	em = ExportManager(export_server_host, export_server_port)# Call the
	export () method with the
	export config and the respective callbacks
	em.export(export_config, on_export_done, on_export_state_changed)
</code></pre>
</div>
<div class="tab golang-tab">
<pre><code class="custom-hlc language-go">
	// Exporting a chart with best quality
	package main

	import (
	    "fmt"

	    "github.com/fusioncharts/fusionexport-go-client"
	)

	// Called when export is done
	func onDone(outFileBag[] FusionExport.OutFileBag, err error) {
	    check(err)
	    FusionExport.SaveExportedFiles(outFileBag)
	}

	// Called on each export state change
	func onStateChange(event FusionExport.ExportEvent) {
	    fmt.Println("[" + event.Reporter + "] " + event.CustomMsg)
	}

	func main() {
	    // Instantiate ExportConfig and add the required configurations
	    exportConfig: = FusionExport.NewExportConfig()

	    exportConfig.Set("chartConfig", "example/resources/single.json")
	    exportConfig.Set("quality", "best")

	    // Instantiate ExportManager
	    exportManager: = FusionExport.NewExportManager()
	    // Call the Export() method with the export config and the respective callbacks
	    exportManager.Export(exportConfig, onDone, onStateChange)
	}

	func check(e error) {
	    if e != nil {
	        panic(e)
	    }
	}
</code></pre>
</div>
</div>
</div>

## Related Resources

* [Export Chart as Image]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-chart-as-image '@@open-newtab')

* [Customize the Width and Height of an Exported Chart]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart '@@open-newtab')

* [Override a Chart Config]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/override-the-chart-config '@@open-newtab')

* [Change the Export Type]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type '@@open-newtab')