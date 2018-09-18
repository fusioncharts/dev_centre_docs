---
title: Export charts in bulk | FusionCharts
description: This article talks about the SDKs used for exporting charts in bulk.
heading: Export charts in bulk
---

How about, instead of exporting a single chart at a time, you could export multiple charts at one go?
Exporting charts in bulk is now easier than ever. In a JSON file, save the configurations of all the charts to be exported in an array. That means, each element in the array should hold one single chart's configuration.

To export charts in bulk, you can use the CLI or SDKs of the languages mentioned below, using the command given below:

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

	namespace FusionExportTest
	{
	    public static class BulkExport
	    {
	        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
	        {
	            // Instantiate the ExportConfig class and add the required configurations
	            ExportConfig exportConfig = new ExportConfig();
	            exportConfig.Set("chartConfig", File.ReadAllText("./resources/bulk.json"));

	            // Instantiate the ExportManager class
	            ExportManager em = new ExportManager(host: host, port: port);
	            // Call the Export() method with the export config and the respective callbacks
	            em.Export(exportConfig, OnExportDone, OnExportStateChanged);
	        }
	        
	        // Called when export is done
	        static void OnExportDone(ExportEvent ev, ExportException error)
	        {
	            if(error != null)
	            {
	                Console.WriteLine("Error: " + error);
	            } else
	            {
	                var fileNames = ExportManager.GetExportedFileNames(ev.exportedFiles);
	                Console.WriteLine("Done: " + String.Join(", ", fileNames)); // export result
	            }
	        }
	        
	        // Called on each export state change
	        static void OnExportStateChanged(ExportEvent ev)
	        {
	            Console.WriteLine("State: " + ev.state.customMsg);
	        }
	    }
	}
</code></pre>
</div>

<div class="tab java-tab">
<pre><code class="custom-hlc language-java">
	import com.fusioncharts.fusionexport.client.*; // import sdk

	public class ExportChart {
	    public static void main(String[] args) throws Exception {

	        String chartConfig = "fullpath/resources/static/bulk.json";

	        // Instantiate the ExportConfig class and add the required configurations
	        ExportConfig config = new ExportConfig();
	        config.set("chartConfig", chartConfig);

	        // Instantiate the ExportManager class
	        ExportManager manager = new ExportManager(config);
	        // Call the export() method with the export config and the respective callbacks
	        manager.export(new ExportDoneListener() {
	                @Override
	                public void exportDone(ExportDoneData result, ExportException error) {
	                    if (error != null) {
	                        System.out.println(error.getMessage());
	                    } else {
	                        ExportManager.saveExportedFiles("fullpath", result);
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
	// Export in Bulk
	require __DIR__ . '/../vendor/autoload.php';
	// Use the sdk
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;
	// Instantiate the ExportConfig class and add the required configurations
	$exportConfig = new ExportConfig();
	$exportConfig->set('chartConfig', realpath('resources/multiple.json'));
	$exportConfig->set('outputFile', 'php-export-<%= number(5) %>');
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

<div class="tab nodejs-tab">
<pre><code class="custom-hlc language-javascript">
	// Export in Bulk
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

	exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'multiple.json'));
	exportConfig.set('outputFile', 'export-<%= number(5) %>');

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
	export_config["chartConfig"] = read_file("bulk.json")

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

* [Export a D3 Chart]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-d3-chart)

* [Export in Bulk Using Multiple JSON Files]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-in-bulk-using-multiple-js-json-files)