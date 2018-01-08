---
permalink: exporting-charts/using-fusionexport/tutorials/export-a-d3-chart.html
title: Export a D3 chart | FusionCharts
description: This article talks about exporting a D3 chart using FusionExport.
heading: Export a D3 chart
chartPresent: False
---

It is possible to export D3-based visualizations with FusionExport. To demonstrate, we will export this [chord diagram](https://bl.ocks.org/mbostock/1046712).

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
```html
        <!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    font: 10px sans-serif;
  }

  .chord {
    fill-opacity: .67;
  }
</style>

<body>
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script>
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

    var svg = d3.select("body").append("svg")
      .attr("width", outerRadius * 2)
      .attr("height", outerRadius * 2)
      .append("g")
      .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    d3.json(
      "https://gist.githubusercontent.com/sandeep1995/141a2045ab9e4c8f450c970682b89b00/raw/7aacb8a793c2d9e0ed60ad0251e1b754b2c430f2/filename.json",
      function(error, imports) {
        if (error) throw error;

        var indexByName = d3.map(),
          nameByIndex = d3.map(),
          matrix = [],
          n = 0;

        // Returns the Flare package name for the given class name.
        function name(name) {
          return name.substring(0, name.lastIndexOf(".")).substring(6);
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
            for (var i = -1; ++i < n;) row[i] = 0;
          }
          d.imports.forEach(function(d) {
            row[indexByName.get(name(d))]++;
          });
        });

        chord.matrix(matrix);

        var g = svg.selectAll(".group")
          .data(chord.groups)
          .enter().append("g")
          .attr("class", "group");

        g.append("path")
          .style("fill", function(d) {
            return fill(d.index);
          })
          .style("stroke", function(d) {
            return fill(d.index);
          })
          .attr("d", arc);

        g.append("text")
          .each(function(d) {
            d.angle = (d.startAngle + d.endAngle) / 2;
          })
          .attr("dy", ".35em")
          .attr("transform", function(d) {
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" +
              "translate(" + (innerRadius + 26) + ")" +
              (d.angle > Math.PI ? "rotate(180)" : "");
          })
          .style("text-anchor", function(d) {
            return d.angle > Math.PI ? "end" : null;
          })
          .text(function(d) {
            return nameByIndex.get(d.index);
          });

        svg.selectAll(".chord")
          .data(chord.chords)
          .enter().append("path")
          .attr("class", "chord")
          .style("stroke", function(d) {
            return d3.rgb(fill(d.source.index)).darker();
          })
          .style("fill", function(d) {
            return fill(d.source.index);
          })
          .attr("d", d3.svg.chord().radius(innerRadius));

        // Emitting CAPTURE_EXIT event after d3 chart render complete
        FusionExport.emit('CAPTURE_EXIT');

      });

    d3.select(self.frameElement).style("height", outerRadius * 2 + "px");
  </script>
</body>
        ```
        <div class="mt-20 pb-10">Pay special attention to <strong>FusionExport.emit('<code>CAPTURE_EXIT</code>')</strong>. You need to emit the <code>CAPTURE_EXIT</code> event when the render is complete.</div>
        <div class="mt-20 pb-10"><strong>The fusioncharts_config.json looks like as follows:</strong></div>
```javascript
        {
  "template": "path/to/d3_exp/template.html",
  "output-file": "./",
  "type": "pdf",
  "async-capture": true
}
        ```

        <div class="mt-20 pb-10"><strong>Once done, run the following command:</strong></div>
```javascript
        $ fe -e fusioncharts_config.json
        ```
    </div>
    
    <div class="tab nodejs-tab">
```javascript
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
        ```
    </div>
    <div class="tab java-tab">
```java
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
        ```
    </div>
    <div class="tab php-tab">
```php
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
        ```
    </div>
    <div class="tab python-tab">
```python
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
        ```
    </div>
    <div class="tab golang-tab">
```javascript
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
        ```
    </div>
</div>