---
permalink: exporting-charts/using-fusionexport/tutorials/export-a-d3-chart.html
title: Export a D3 chart | FusionCharts
description: This article talks about exporting a D3 chart using FusionExport.
heading: Export a D3 chart
chartPresent: False
---

It is possible to export D3-based visualizations with FusionExport. To demonstrate, we will export this [chord diagram](https://bl.ocks.org/mbostock/1046712).

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

<div class="tab-content extra-tabs">
<div class="tab cli-tab active">
<div class="mt-20 pb-10">Let’s create a template file named <code>template.html</code> and load the <code>d3.js</code> library. Write the necessary code to render the chord diagram. Now, use the <code>--asyncCapture</code> CLI option to hook into D3’s rendering life-cycle and export the chart after D3 completes the rendering. </div>
<div class="mt-20 pb-10"><strong>template.html</strong></div>
<pre><code class="custom-hlc language-html+xml">
	&lt;!DOCTYPE html&gt;
		&lt;meta charset=&quot;utf-8&quot;&gt;
		&lt;style&gt;
		  body {
		    font: 10px sans-serif;
		  }

		  .chord {
		    fill-opacity: .67;
		  }
		&lt;/style&gt;

		&lt;body&gt;
		  &lt;script src=&quot;https://d3js.org/d3.v3.min.js&quot;&gt;&lt;/script&gt;
		  &lt;script&gt;
		    var outerRadius = 1366 / 2,
		      innerRadius = outerRadius - 130;

		    var fill = d3.scale.category20c();

		    var chord = d3.layout.chord()
		      .padding(.04)
		      .sortSubgroups(d3.descending)
		      .sortChords(d3.descending);

		    var arc = d3.svg.arc()
		      .innerRadius(innerRadius)
		      .outerRadius(innerRadius + 20);

		    var svg = d3.select(&quot;body&quot;).append(&quot;svg&quot;)
		      .attr(&quot;width&quot;, outerRadius * 2)
		      .attr(&quot;height&quot;, outerRadius * 2)
		      .append(&quot;g&quot;)
		      .attr(&quot;transform&quot;, &quot;translate(&quot; + outerRadius + &quot;,&quot; + outerRadius + &quot;)&quot;);

		    d3.json(
		      &quot;https://gist.githubusercontent.com/sandeep1995/141a2045ab9e4c8f450c970682b89b00/raw/7aacb8a793c2d9e0ed60ad0251e1b754b2c430f2/filename.json&quot;,
		      function(error, imports) {
		        if (error) throw error;

		        var indexByName = d3.map(),
		          nameByIndex = d3.map(),
		          matrix = [],
		          n = 0;

		        // Returns the Flare package name for the given class name.
		        function name(name) {
		          return name.substring(0, name.lastIndexOf(&quot;.&quot;)).substring(6);
		        }

		        // Compute a unique index for each package name.
		        imports.forEach(function(d) {
		          if (!indexByName.has(d = name(d.name))) {
		            nameByIndex.set(n, d);
		            indexByName.set(d, n++);
		          }
		        });

		        // Construct a square matrix counting package imports.
		        imports.forEach(function(d) {
		          var source = indexByName.get(name(d.name)),
		            row = matrix[source];
		          if (!row) {
		            row = matrix[source] = [];
		            for (var i = -1; ++i &lt; n;) row[i] = 0;
		          }
		          d.imports.forEach(function(d) {
		            row[indexByName.get(name(d))]++;
		          });
		        });

		        chord.matrix(matrix);

		        var g = svg.selectAll(&quot;.group&quot;)
		          .data(chord.groups)
		          .enter().append(&quot;g&quot;)
		          .attr(&quot;class&quot;, &quot;group&quot;);

		        g.append(&quot;path&quot;)
		          .style(&quot;fill&quot;, function(d) {
		            return fill(d.index);
		          })
		          .style(&quot;stroke&quot;, function(d) {
		            return fill(d.index);
		          })
		          .attr(&quot;d&quot;, arc);

		        g.append(&quot;text&quot;)
		          .each(function(d) {
		            d.angle = (d.startAngle + d.endAngle) / 2;
		          })
		          .attr(&quot;dy&quot;, &quot;.35em&quot;)
		          .attr(&quot;transform&quot;, function(d) {
		            return &quot;rotate(&quot; + (d.angle * 180 / Math.PI - 90) + &quot;)&quot; +
		              &quot;translate(&quot; + (innerRadius + 26) + &quot;)&quot; +
		              (d.angle &gt; Math.PI ? &quot;rotate(180)&quot; : &quot;&quot;);
		          })
		          .style(&quot;text-anchor&quot;, function(d) {
		            return d.angle &gt; Math.PI ? &quot;end&quot; : null;
		          })
		          .text(function(d) {
		            return nameByIndex.get(d.index);
		          });

		        svg.selectAll(&quot;.chord&quot;)
		          .data(chord.chords)
		          .enter().append(&quot;path&quot;)
		          .attr(&quot;class&quot;, &quot;chord&quot;)
		          .style(&quot;stroke&quot;, function(d) {
		            return d3.rgb(fill(d.source.index)).darker();
		          })
		          .style(&quot;fill&quot;, function(d) {
		            return fill(d.source.index);
		          })
		          .attr(&quot;d&quot;, d3.svg.chord().radius(innerRadius));

		        // Emitting CAPTURE_EXIT event after d3 chart render complete
		        FusionExport.emit('CAPTURE_EXIT');

		      });

		    d3.select(self.frameElement).style(&quot;height&quot;, outerRadius * 2 + &quot;px&quot;);
		  &lt;/script&gt;
		&lt;/body&gt;
	&lt;/html&gt;
</code></pre>
<div class="mt-20 pb-10">Pay special attention to <strong>FusionExport.emit('<code>CAPTURE_EXIT</code>')</strong>. You need to emit the <code>CAPTURE_EXIT</code> event when the render is complete.</div>
<div class="mt-20 pb-10"><strong>The fusioncharts_config.json looks like as follows:</strong></div>

<pre><code class="custom-hlc language-javascript">
	{
	  "template": "path/to/d3_exp/template.html",
	  "output-file": "./",
	  "type": "pdf",
	  "async-capture": true
	}
</code></pre>
<div class="mt-20 pb-10"><strong>Once done, run the following command:</strong></div>
<pre><code class="custom-hlc language-javascript">
	$ fe -e fusioncharts_config.json
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
</code></pre></div>
<div class="tab golang-tab">
<pre><code class="custom-hlc language-javascript">
	// D3 export

	package main

	import (
		"fmt"

		"github.com/fusioncharts/fusionexport-go-client"
	)

	// Called when export is done
	func onDone(outFileBag []FusionExport.OutFileBag, err error) {
		check(err)
		FusionExport.SaveExportedFiles(outFileBag)
	}

	// Called on each export state change
	func onStateChange(event FusionExport.ExportEvent) {
		fmt.Println("[" + event.Reporter + "] " + event.CustomMsg)
	}

	func main() {
		// Instantiate ExportConfig and add the required configurations
		exportConfig := FusionExport.NewExportConfig()

		exportConfig.Set("templateFilePath", "example/resources/template_d3.html")
		exportConfig.Set("type", "pdf")
		exportConfig.Set("asyncCapture", true)

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
</code></pre>
</div>
</div>
</div>

## Related Resources

* [Export the Output Files as a Zip]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip '@@open-newtab')

* [Export a Dashboard]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-dashboard '@@open-newtab')

* [Manipulate the Output Filename]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename '@@open-newtab')

* [Export Charts in Bulk]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-charts-in-bulk '@@open-newtab')