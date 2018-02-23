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
	const fs = require('fs');
	const path = require('path');
	// require fusionexport
	const FusionExport = require('fusionexport-node-client');



	const host = '127.0.0.1';
	const port = 1337;

	// instantiate FusionExport
	const fusion = new FusionExport({ host, port });

	const exportConfig = {
	  templateFilePath: path.join(__dirname, '..', 'data', 'd3_exp', 'template.html'),
	  asyncCapture: true,
	  type: 'pdf'
	};

	// provide the export config
	fusion.export(exportConfig);

	fusion.on('exportDone', (files) => {
	  console.log(files);
	});

	fusion.on('exportStateChange', (state) => {
	  console.log(state);
	});

	fusion.on('error', (err) => {
	  console.error(err)
	})
</code></pre></div>
<div class="tab java-tab">
<pre><code class="custom-hlc language-java">
	import com.fusioncharts.fusionexport.client.*; // import sdk

	public class ExportChart implements ExportDoneListener, ExportStateChangedListener {

	    public static void main(String[] args) {

	        // Instantiate the ExportConfig class and add the required configurations
	        ExportConfig config = new ExportConfig();
	        config.set("templateFilePath", "fullpath/of/template.html");
	        config.set("asyncCapture", "true");
	        config.set("type", "pdf");

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
	}
</code></pre></div>
<div class="tab csharp-tab">
<pre><code class="custom-hlc language-c">
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
	            exportConfig.Set("templateFilePath", "fullpath/of/template.html");
	            exportConfig.Set("asyncCapture", "true");
	            exportConfig.Set("type", "pdf");

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
	$exportConfig->set('templateFilePath', realpath('../data/d3_exp/template.html'));
	$exportConfig->set('type', 'pdf');
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
</code></pre></div>
<div class="tab python-tab">
<pre><code class="custom-hlc language-python">
	#!/usr/bin/env python

	from fusionexport import ExportManager, ExportConfig  # Import sdk


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
	export_config["templateFilePath"] = "fullpath/of/template.html"
	export_config["asyncCapture"] = True
	export_config["type"] = "pdf"

	# Instantiate the ExportManager class
	em = ExportManager()
	# Call the export() method with the export config and the respective callbacks
	em.export(export_config, on_export_done, on_export_state_changed)
</code></pre></div>
<div class="tab golang-tab">
<pre><code class="custom-hlc language-javascript">
	// D3 export

	package main

	import (
	    "io/ioutil"
	    ".." // import the sdk
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

	    templateFilePath, err := filepath.Abs("../data/d3_exp/template.html")
	    check(err)
	    exportConfig.Set("templateFilePath", templateFilePath)

	    exportConfig.Set("type", "pdf")
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
</code></pre>
</div>
</div>
</div>