---
title: Add a logo or a heading to the dashboard | FusionCharts
description: Learn to enhance dashboard presentations with logos or headings using FusionExport. Elevate visual appeal and customization effortlessly. Get started today!
heading: Add a logo or a heading to the dashboard
---

You can add logos, headings, and subheadings to your exported dashboard images. The logo and the heading/subheading can be included at the top of the dashboard. To do so, use the options listed below:

- `--dashboardLogo` (followed by the resolved file path for the logo)
- `--dashboardHeading` (followed by the heading text)
- `--dashboardSubheading` (followed by the subheading text)

To add logos, headings, and subheadings to your exported dashboard images, you can use the CLI or SDKs of the languages mentioned below, using the command given below:

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
	using System.IO;
	using System.Linq;
	using FusionCharts.FusionExport.Client; // Import sdk

    namespace FusionExportTest
    {
        public static class DashboardLogoHead
        {
            public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
            {
                // Instantiate the ExportConfig class and add the required configurations
                ExportConfig exportConfig = new ExportConfig();
                exportConfig.Set("chartConfig", File.ReadAllText("./resources/dashboard_charts.json"));
                exportConfig.Set("templateFilePath", "./resources/template.html");
                exportConfig.Set("dashboardLogo", "./resources/logo.png");
                exportConfig.Set("dashboardHeading", "Dashboard");
                exportConfig.Set("dashboardSubheading", "Powered by FusionExport");

                // Instantiate the ExportManager class
                ExportManager em = new ExportManager(host: host, port: port);
                // Call the Export() method with the export config and the respective callbacks
                em.Export(exportConfig, OnExportDone, OnExportStateChanged);
            }

            // Called when export is done
            static void OnExportDone(ExportEvent ev, ExportException error)
            {
                if (error != null)
                {
                    Console.WriteLine("Error: " + error);
                }
                else
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

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class="tab java-tab">
<pre><code class="language-java">
	import com.fusioncharts.fusionexport.client.*; // import sdk

    public class ExportChart {
        public static void main(String[] args) throws Exception {

            String configPath = "fullpath/resources/static2/resources/multiple.json";
            String templatePath = "fullpath/resources/static2/resources/template.html";

            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig config = new ExportConfig();
            config.set("chartConfig", configPath);
            config.set("templateFilePath", templatePath);
            config.set("dashboardLogo", "fullpath/resources/static2/resources/logo.jpg");
            config.set("dashboardHeading", "Dashboard");
            config.set("dashboardSubheading", "Powered by FusionExport");

            // Instantiate the ExportManager class
            ExportManager manager = new ExportManager(config);
            // Call the export() method with the export config and the respective callbacks
            manager.export(new ExportDoneListener() {
                    @Override
                    public void exportDone(ExportDoneData result, ExportException error) {
                        if (error != null) {
                            System.out.println(error.getMessage());
                        } else {
                            ExportManager.saveExportedFiles("fullPath", result);
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

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class="tab php-tab">
<pre><code class="language-php">
	<?php
	// Adding a logo or heading to the dashboard
	require __DIR__ . '/../vendor/autoload.php';
	// Use the sdk
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;
	// Instantiate the ExportConfig class and add the required configurations
	$exportConfig = new ExportConfig();
	$exportConfig->set('chartConfig', realpath('resources/multiple.json'));
	$exportConfig->set('templateFilePath', realpath('resources/template.html'));
	$exportConfig->set('dashboardLogo', realpath('resources/logo.jpg'));
	$exportConfig->set('dashboardHeading', 'FusionCharts');
	$exportConfig->set('dashboardSubheading', 'The best charting library in the world');
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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="language-javascript">
	// Adding a logo or heading to the dashboard
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
    exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template.html'));
    exportConfig.set('dashboardLogo', path.join(__dirname, 'resources', 'logo.jpg'));
    exportConfig.set('dashboardHeading', 'FusionCharts');
    exportConfig.set('dashboardSubheading', 'The best charting library in the world');

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

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class="tab python-tab">
<pre><code class="language-python">
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
    export_config["chartConfig"] = read_file("dashboard_charts.json")
    export_config["templateFilePath"] = "template.html"
    export_config["dashboardLogo"] = "logo.png"
    export_config["dashboardHeading"] = 'Dashboard'
    export_config["dashboardSubheading"] = 'Powered by FusionExport'

    #
    Provide port and host of FusionExport Service
    export_server_host = "127.0.0.1"
    export_server_port = 1337

    # Instantiate the ExportManager class
    em = ExportManager(export_server_host, export_server_port)# Call the
    export () method with the
    export config and the respective callbacks
    em.export(export_config, on_export_done, on_export_state_changed)

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

## Related Resources

- [Export a dashboard](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)

- [Manipulate the output filename](/exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename)

- [Customize the width and height on an exported chart](/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart)

- [Override the chart config](/exporting-charts/using-fusionexport/tutorials/override-the-chart-config)

- [Change the Export Quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)
