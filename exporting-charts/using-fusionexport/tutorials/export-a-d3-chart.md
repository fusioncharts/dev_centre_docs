---
title: Export a D3 chart | FusionCharts
description: This article talks about exporting a D3 chart using FusionExport.
heading: Export a D3 chart
---

It is possible to export D3-based visualizations with FusionExport. To demonstrate, we will export this [chord diagram](https://bl.ocks.org/mbostock/1046712).

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
<pre><code class="custom-hlc language-c">
	using System;
	using System.IO;
	using System.Linq;
	using FusionCharts.FusionExport.Client; // Import sdk

	namespace FusionExportTest {
	    public static class D3_Exp {
	        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT) {
	            // Instantiate the ExportConfig class and add the required configurations
	            ExportConfig exportConfig = new ExportConfig();
	            exportConfig.Set("templateFilePath", "./resources/template_d3.html");
	            exportConfig.Set("type", "jpg");
	            exportConfig.Set("asyncCapture", true);
	            // Instantiate the ExportManager class
	            ExportManager em = new ExportManager(host: host, port: port);
	            // Call the Export() method with the export config and the respective callbacks
	            em.Export(exportConfig, OnExportDone, OnExportStateChanged);
	            Console.Read();
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
</code></pre></div>

<div class="tab java-tab">
<pre><code class="custom-hlc language-java">
	import com.fusioncharts.fusionexport.client.*;

	public class d3_exp {
	    public static void main(String[] args) throws Exception {

	        String rootPath = System.getProperty("user.dir") + java.io.File.separator;
	        String templateRelativePath = "src\\test\\resources\\static2\\resources\\template_d3.html".replace("\\", java.io.File.separator);
	        String templateAbsolutePath = rootPath + templateRelativePath;
	        ExportConfig config = new ExportConfig();

	        config.set("templateFilePath", templateAbsolutePath);
	        config.set("type", "pdf");
	        config.set("asyncCapture", true);

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
</code></pre></div>

<div class="tab php-tab">
<pre><code class="custom-hlc language-php">
	<?php
	// D3 export
	require __DIR__ . '/../vendor/autoload.php';
	// Use the sdk
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;
	// Instantiate the ExportConfig class and add the required configurations
	$exportConfig = new ExportConfig();
	$exportConfig->set('templateFilePath', realpath('resources/template_d3.html'));
	$exportConfig->set('type', 'jpg');
	$exportConfig->set('asyncCapture', 'true');
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
</code></pre></div>

<div class="tab nodejs-tab">
<pre><code class="custom-hlc language-javascript">
	// D3 export
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

	exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template_d3.html'));
	exportConfig.set('type', 'jpg');
	exportConfig.set('asyncCapture', true);

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
</code></pre></div>

<div class="tab python-tab">
<pre><code class="custom-hlc language-python">
	#!/usr/bin/env python

	from fusionexport import ExportManager, ExportConfig  # Import sdk

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
	        ExportManager.save_exported_files("exported_images", event["result"])


	# Called on each export state change
	def on_export_state_changed(event):
	    print(event["state"])


	# Instantiate the ExportConfig class and add the required configurations
	export_config = ExportConfig()
	export_config["templateFilePath"] = "template_d3.html"
	export_config["type"] = "pdf"
	export_config["asyncCapture"] = "true"

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

* [Export the Output Files as a Zip]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip)

* [Export a Dashboard]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)

* [Manipulate the Output Filename]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename)

* [Export Charts in Bulk]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-charts-in-bulk)