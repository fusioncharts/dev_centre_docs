---
title: Export PDF files in Print Format | FusionCharts
description: This article talks about how to export PDF files in print format.
heading: Export PDF files in print format
---

So far we have seen how to export dashboards as PNG. Let's take a scenario, wherein the requirement is to export the chart in A4 format for a better print output. To do this, you have to go through a lot of changes like adjusting the pixel, create a template, improve the quality, etc. FusionExport allows you to export your PDF files in print-friendly format using the `templateFormat` attribute.

Before you start with the code implementations, check out the following video which contains the step by step process to set the print friendly format for your exported PDF file.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/e9ff3172776345659455b6ef7eb240d3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Now, let’s check out the basic steps to export PDF files in print format.

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

## Export in print format

Using `templateFormat` you can export your PDF files in Print-friendly format. `templateFormat`
is a parameter which accepts the PDF format when you export charts.

Setting the `templateFormat` for a particular PDF page sets the priority over `templateWidth` and `templateHeight` of the exported file.

The list of template formats and their default height and width is given below:

| Format    | Width (inches) | Height (inches) |
| --------- | -------------- | --------------- |
| `Letter`  | 8.5            | 11              |
| `Legal`   | 8.5            | 14              |
| `Tabloid` | 11             | 17              |
| `Ledger`  | 17             | 11              |
| `A0`      | 33.1           | 46.8            |
| `A1`      | 23.4           | 33.1            |
| `A2`      | 16.5           | 23.4            |
| `A3`      | 11.7           | 16.5            |
| `A4`      | 8.27           | 11.7            |
| `A5`      | 5.83           | 8.27            |

The sample code to export PDF files in print format is given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">

    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content">
<div class="tab csharp-tab active">
<pre><code class="language-csharp">
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    public static class ExportSingleChart
    {
        static void Main(string[] args)
        {
            string chartConfigFile = System.Environment.CurrentDirectory + "\\resources\\dashboard_charts.json";
            string templateFilePath = System.Environment.CurrentDirectory + "\\resources\\template.html";

            // Instantiate the ExportManager class
            using (ExportManager exportManager = new ExportManager())
            {
                exportConfig.Set("chartConfig", chartConfigFile);
                exportConfig.Set("templateFilePath", templateFilePath);
                exportConfig.Set("templateFormat", "letter");
                exportConfig.Set("type", "pdf");
                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, @"D:\temp\exported-charts", true));
            }

            foreach (string path in results)
            {
                Console.WriteLine(path);
            }
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
        String templatePath ="fullpath/resources/static2/resources/template.html";

        // Instantiate the ExportManager class
        ExportManager em = new ExportManager();
        
        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        config.set("chartConfig", configPath);
        config.set("templateFilePath", templatePath);
        config.set("type", "pdf");
        config.set("templateFormat", "letter");
        
        String[] files = em.export(config,".",true);
        
        for(String f : files) {
            System.out.println(f);
        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class="tab php-tab">
<pre><code class="language-php">
<?php

// Exporting a dashboard

require __DIR__ . '/../vendor/autoload.php';
// Use the sdk
use FusionExport\ExportManager;
use FusionExport\ExportConfig;

// Instantiate the ExportConfig class and add the required configurations
$exportConfig = new ExportConfig();
$exportConfig->set('chartConfig', realpath(__DIR__ . '/resources/multiple.json'));
$exportConfig->set('templateFilePath', realpath(__DIR__ . '/resources/template.html'));
$exportConfig->set('type', 'pdf');
$exportConfig->set('templateFormat', 'letter');


// Instantiate the ExportManager class
$exportManager = new ExportManager();
// Call the export() method with the export config
$files = $exportManager->export($exportConfig, '.', true);

foreach ($files as $file) {
    echo $file . "\n";
}
?>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class="tab nodejs-tab">
<pre><code class="language-javascript">
// Exporting a dashboard
const path = require('path');
// Require FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node-client');
// Instantiate ExportManager
const exportManager = new ExportManager();
// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'multiple.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template.html'));
exportConfig.set('templateFormat', 'letter');
exportConfig.set('type', 'pdf');
// provide the export config
exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class="tab python-tab">
<pre><code class="language-python">
#!/usr/bin/env python

from fusionexport import ExportManager, ExportConfig  # Import sdk

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

export_config["chartConfig"] = "dashboard_charts.json"

export_config["templateFilePath"] = "template.html"
export_config["type"] = "pdf"
export_config["templateWidth"] = 1200
export_config["templateHeight"] = 1800


# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)
# Call the export() method with the export config and the output location
exported_files = em.export(export_config, "./exports", True)
#print(exported_files)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

In the above code:

- Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its set() method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.
- Set the `type` to `pdf`.
- Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).
- Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

The JSON data of the above chart is shown below:

```json
[
  {
    "type": "mscolumn2d",
    "renderAt": "chart-container-1",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "App Publishing Trend",
        "subcaption": "2012-2016",
        "xaxisname": "Years",
        "yaxisname": "Total number of apps in store",
        "formatnumberscale": "1",
        "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
        "theme": "fusion",
        "drawcrossline": "1"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2012"
            },
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "iOS App Store",
          "data": [
            {
              "value": "125000"
            },
            {
              "value": "300000"
            },
            {
              "value": "480000"
            },
            {
              "value": "800000"
            },
            {
              "value": "1100000"
            }
          ]
        },
        {
          "seriesname": "Google Play Store",
          "data": [
            {
              "value": "70000"
            },
            {
              "value": "150000"
            },
            {
              "value": "350000"
            },
            {
              "value": "600000"
            },
            {
              "value": "1400000"
            }
          ]
        },
        {
          "seriesname": "Amazon AppStore",
          "data": [
            {
              "value": "10000"
            },
            {
              "value": "100000"
            },
            {
              "value": "300000"
            },
            {
              "value": "600000"
            },
            {
              "value": "900000"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "msline",
    "renderAt": "chart-container-2",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Reach of Social Media Platforms amoung youth",
        "yaxisname": "% of youth on this platform",
        "subcaption": "2012-2016",
        "showhovereffect": "1",
        "numbersuffix": "%",
        "drawcrossline": "1",
        "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2012"
            },
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Facebook",
          "data": [
            {
              "value": "62"
            },
            {
              "value": "64"
            },
            {
              "value": "64"
            },
            {
              "value": "66"
            },
            {
              "value": "78"
            }
          ]
        },
        {
          "seriesname": "Instagram",
          "data": [
            {
              "value": "16"
            },
            {
              "value": "28"
            },
            {
              "value": "34"
            },
            {
              "value": "42"
            },
            {
              "value": "54"
            }
          ]
        },
        {
          "seriesname": "LinkedIn",
          "data": [
            {
              "value": "20"
            },
            {
              "value": "22"
            },
            {
              "value": "27"
            },
            {
              "value": "22"
            },
            {
              "value": "29"
            }
          ]
        },
        {
          "seriesname": "Twitter",
          "data": [
            {
              "value": "18"
            },
            {
              "value": "19"
            },
            {
              "value": "21"
            },
            {
              "value": "21"
            },
            {
              "value": "24"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "stackedcolumn2d",
    "renderAt": "chart-container-3",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Yearly Energy Production Rate",
        "subcaption": " Top 5 Developed Countries",
        "numbersuffix": " TWh",
        "showsum": "1",
        "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
        "theme": "fusion",
        "drawcrossline": "1"
      },
      "categories": [
        {
          "category": [
            {
              "label": "Canada"
            },
            {
              "label": "China"
            },
            {
              "label": "Russia"
            },
            {
              "label": "Australia"
            },
            {
              "label": "United States"
            },
            {
              "label": "France"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Coal",
          "data": [
            {
              "value": "400"
            },
            {
              "value": "830"
            },
            {
              "value": "500"
            },
            {
              "value": "420"
            },
            {
              "value": "790"
            },
            {
              "value": "380"
            }
          ]
        },
        {
          "seriesname": "Hydro",
          "data": [
            {
              "value": "350"
            },
            {
              "value": "620"
            },
            {
              "value": "410"
            },
            {
              "value": "370"
            },
            {
              "value": "720"
            },
            {
              "value": "310"
            }
          ]
        },
        {
          "seriesname": "Nuclear",
          "data": [
            {
              "value": "210"
            },
            {
              "value": "400"
            },
            {
              "value": "450"
            },
            {
              "value": "180"
            },
            {
              "value": "570"
            },
            {
              "value": "270"
            }
          ]
        },
        {
          "seriesname": "Gas",
          "data": [
            {
              "value": "180"
            },
            {
              "value": "330"
            },
            {
              "value": "230"
            },
            {
              "value": "160"
            },
            {
              "value": "440"
            },
            {
              "value": "350"
            }
          ]
        },
        {
          "seriesname": "Oil",
          "data": [
            {
              "value": "60"
            },
            {
              "value": "200"
            },
            {
              "value": "200"
            },
            {
              "value": "50"
            },
            {
              "value": "230"
            },
            {
              "value": "150"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "stackedcolumn2dline",
    "renderAt": "chart-container-4",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "showvalues": "0",
        "caption": "Apple's Revenue & Profit",
        "subcaption": "(2013-2016)",
        "numberprefix": "$",
        "numbersuffix": "B",
        "plottooltext": "Sales of $seriesName in $label was <b>$dataValue</b>",
        "showhovereffect": "1",
        "yaxisname": "$ (In billions)",
        "showsum": "1",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "iPhone",
          "data": [
            {
              "value": "21"
            },
            {
              "value": "24"
            },
            {
              "value": "27"
            },
            {
              "value": "30"
            }
          ]
        },
        {
          "seriesname": "iPad",
          "data": [
            {
              "value": "8"
            },
            {
              "value": "10"
            },
            {
              "value": "11"
            },
            {
              "value": "12"
            }
          ]
        },
        {
          "seriesname": "Macbooks",
          "data": [
            {
              "value": "2"
            },
            {
              "value": "4"
            },
            {
              "value": "5"
            },
            {
              "value": "5.5"
            }
          ]
        },
        {
          "seriesname": "Others",
          "data": [
            {
              "value": "2"
            },
            {
              "value": "4"
            },
            {
              "value": "9"
            },
            {
              "value": "11"
            }
          ]
        },
        {
          "seriesname": "Profit",
          "plottooltext": "Total profit in $label was <b>$dataValue</b>",
          "renderas": "Line",
          "data": [
            {
              "value": "17"
            },
            {
              "value": "19"
            },
            {
              "value": "13"
            },
            {
              "value": "18"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "doughnut3d",
    "renderAt": "chart-container-5",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Top 5 countries with Global Oil Reserves",
        "subcaption": "MMbbl= One Million barrels",
        "enablesmartlabels": "1",
        "showlabels": "1",
        "numbersuffix": " MMbbl",
        "usedataplotcolorforlabels": "1",
        "plottooltext": "$label, <b>$value</b> MMbbl",
        "theme": "fusion"
      },
      "data": [
        {
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        }
      ]
    }
  }
]
```

The HTML template for the above code is given below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Wealth Management</title>
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      body {
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        background-color: #f8f9fd;
      }
      .dashboard-container {
        box-sizing: border-box;
        padding-left: 8px;
        padding-right: 8px;
        background-color: #f8f9fd;
        padding: 30px;
      }
      .dashboard-container .dashboard-row {
        margin-left: -8px;
        margin-right: -8px;
      }
      .dashboard-container .dashboard-row:after {
        content: "";
        display: table;
        clear: both;
      }
      .dashboard-container .dashboard-row .intro-block,
      .dashboard-container .dashboard-row .chart {
        box-sizing: border-box;
        padding: 8px 8px;
      }
      .dashboard-container .dashboard-row .intro-block h1 {
        margin-bottom: 10px;
      }
      .dashboard-container .dashboard-row .chart {
        width: 50%;
        float: left;
      }
      .dashboard-container .dashboard-row .chart:first-child {
        box-sizing: border-box;
        float: initial;
        width: 100%;
      }
      .dashboard-container .dashboard-row .chart .chart-block {
        background-color: #fff;
        border: 1px solid #f0f1f7;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 2px 10px 0 rgba(33, 35, 68, 0.05) !important;
      }
      .pri-chart {
        width: auto;
        height: 600px;
      }
      .sec-chart {
        width: auto;
        height: 400px;
      }
      .dashboard-container .mt-0 {
        margin-top: 0;
      }
      .dashboard-container hr {
        border: none;
        border-top: 1px dotted rgba(49, 49, 49, 0.09);
        margin: 25px 0 15px;
      }
    </style>
  </head>
  <body>
    <div class="dashboard-container">
      <div class="dashboard-row">
        <div class="intro-block">
          <h1>Your dashboard header</h1>
          <p class="mt-0">
            Your amazing subtitle
          </p>
          <hr />
        </div>
      </div>
      <div class="dashboard-row">
        <div class="chart">
          <div class="chart-block">
            <div class="pri-chart" id="chart-container-map"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-top-adv"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-reg"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-reg-monthly"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-product"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```
<div class="btn-holder mt-1"><a href="https://cdn.fusioncharts.com/resources/downloads/dev-centre/fusionexport-output.pdf" class="btn btn-secondary-grad text-uppercase mr-1"> Download Exported PDF</a><a href="https://github.com/fusioncharts/fusionexport-tutorials/tree/master/dimensions" class="btn btn-outline-secondary text-uppercase"> Download Source Code</a></div>

## Add pagination

Pagination is useful when you want to print a document into discrete pages. FusionExport allows you to add page breaks in exported PDF files. Before you start with the code implementations to add pagination, check out the following video which contains the step by step process.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/584dbe32ac8e4d9e83bdd44276ee9720" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Now, let’s check out the basic steps to add page breaks in exported PDFs.

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

The sample code to set the dimension of the viewport is given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">

    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content">
<div class="tab csharp-tab active">
<pre><code class="language-csharp">
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    public static class ExportSingleChart
    {
        static void Main(string[] args)
        {
            string chartConfigFile = System.Environment.CurrentDirectory + "\\resources\\dashboard_charts.json";
            string templateFilePath = System.Environment.CurrentDirectory + "\\resources\\template.html";

            // Instantiate the ExportManager class
            using (ExportManager exportManager = new ExportManager())
            {
                exportConfig.Set("chartConfig", chartConfigFile);
                exportConfig.Set("templateFilePath", templateFilePath);
                exportConfig.Set('templateWidth', 900);
                exportConfig.Set('templateWidth', 900);
                exportConfig.Set("type", "pdf");
                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, @"D:\temp\exported-charts", true));
            }

            foreach (string path in results)
            {
                Console.WriteLine(path);
            }
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
        String templatePath ="fullpath/resources/static2/resources/template.html";

        // Instantiate the ExportManager class
        ExportManager em = new ExportManager();
        
        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        config.set("chartConfig", configPath);
        config.set("templateFilePath", templatePath);
        config.set("type", "pdf");
        config.set("templateWidth", "900");
        config.set("templateHeight", "900");
        
        String[] files = em.export(config,".",true);
        
        for(String f : files) {
            System.out.println(f);
        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab php-tab">
<pre><code class="language-php">
<?php

// Exporting a dashboard

require __DIR__ . '/../vendor/autoload.php';
// Use the sdk
use FusionExport\ExportManager;
use FusionExport\ExportConfig;

// Instantiate the ExportConfig class and add the required configurations
$exportConfig = new ExportConfig();
$exportConfig->set('chartConfig', realpath(__DIR__ . '/resources/multiple.json'));
$exportConfig->set('templateFilePath', realpath(__DIR__ . '/resources/template.html'));
$exportConfig->set('type', 'pdf');
$exportConfig->set('templateWidth', '900');
$exportConfig->set('templateHeight', '900');


// Instantiate the ExportManager class
$exportManager = new ExportManager();
// Call the export() method with the export config
$files = $exportManager->export($exportConfig, '.', true);

foreach ($files as $file) {
    echo $file . "\n";
}
?>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="language-javascript">
// Exporting a dashboard
const path = require('path');
// Require FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node-client');
// Instantiate ExportManager
const exportManager = new ExportManager();
// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'multiple.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template.html'));
exportConfig.set('templateFormat', 'letter');
exportConfig.set('type', 'pdf');
// provide the export config
exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab python-tab">
<pre><code class="language-python">
#!/usr/bin/env python

from fusionexport import ExportManager, ExportConfig  # Import sdk

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

export_config["chartConfig"] = "dashboard_charts.json"

export_config["templateFilePath"] = "template.html"
export_config["type"] = "pdf"
export_config["templateWidth"] = 900
export_config["templateHeight"] = 900


# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)
# Call the export() method with the export config and the output location
exported_files = em.export(export_config, "./exports", True)
#print(exported_files)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

In the above code:

- Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.
- Set the value of `templateHeight` less than your content height. This automatically divides the page into multiple pages.
- You can also set the value of `templateWidth` to control the viewpoint width where the templates are rendered.
- Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).
- Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

> You can also achieve the same result using `templateFormat` which allows you to export PDF files and print friendly format.

The JSON data to render the above chart is given below:

```json
[
  {
    "type": "mscolumn2d",
    "renderAt": "chart-container-1",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "App Publishing Trend",
        "subcaption": "2012-2016",
        "xaxisname": "Years",
        "yaxisname": "Total number of apps in store",
        "formatnumberscale": "1",
        "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
        "theme": "fusion",
        "drawcrossline": "1"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2012"
            },
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "iOS App Store",
          "data": [
            {
              "value": "125000"
            },
            {
              "value": "300000"
            },
            {
              "value": "480000"
            },
            {
              "value": "800000"
            },
            {
              "value": "1100000"
            }
          ]
        },
        {
          "seriesname": "Google Play Store",
          "data": [
            {
              "value": "70000"
            },
            {
              "value": "150000"
            },
            {
              "value": "350000"
            },
            {
              "value": "600000"
            },
            {
              "value": "1400000"
            }
          ]
        },
        {
          "seriesname": "Amazon AppStore",
          "data": [
            {
              "value": "10000"
            },
            {
              "value": "100000"
            },
            {
              "value": "300000"
            },
            {
              "value": "600000"
            },
            {
              "value": "900000"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "msline",
    "renderAt": "chart-container-2",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Reach of Social Media Platforms amoung youth",
        "yaxisname": "% of youth on this platform",
        "subcaption": "2012-2016",
        "showhovereffect": "1",
        "numbersuffix": "%",
        "drawcrossline": "1",
        "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2012"
            },
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Facebook",
          "data": [
            {
              "value": "62"
            },
            {
              "value": "64"
            },
            {
              "value": "64"
            },
            {
              "value": "66"
            },
            {
              "value": "78"
            }
          ]
        },
        {
          "seriesname": "Instagram",
          "data": [
            {
              "value": "16"
            },
            {
              "value": "28"
            },
            {
              "value": "34"
            },
            {
              "value": "42"
            },
            {
              "value": "54"
            }
          ]
        },
        {
          "seriesname": "LinkedIn",
          "data": [
            {
              "value": "20"
            },
            {
              "value": "22"
            },
            {
              "value": "27"
            },
            {
              "value": "22"
            },
            {
              "value": "29"
            }
          ]
        },
        {
          "seriesname": "Twitter",
          "data": [
            {
              "value": "18"
            },
            {
              "value": "19"
            },
            {
              "value": "21"
            },
            {
              "value": "21"
            },
            {
              "value": "24"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "stackedcolumn2d",
    "renderAt": "chart-container-3",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Yearly Energy Production Rate",
        "subcaption": " Top 5 Developed Countries",
        "numbersuffix": " TWh",
        "showsum": "1",
        "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
        "theme": "fusion",
        "drawcrossline": "1"
      },
      "categories": [
        {
          "category": [
            {
              "label": "Canada"
            },
            {
              "label": "China"
            },
            {
              "label": "Russia"
            },
            {
              "label": "Australia"
            },
            {
              "label": "United States"
            },
            {
              "label": "France"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Coal",
          "data": [
            {
              "value": "400"
            },
            {
              "value": "830"
            },
            {
              "value": "500"
            },
            {
              "value": "420"
            },
            {
              "value": "790"
            },
            {
              "value": "380"
            }
          ]
        },
        {
          "seriesname": "Hydro",
          "data": [
            {
              "value": "350"
            },
            {
              "value": "620"
            },
            {
              "value": "410"
            },
            {
              "value": "370"
            },
            {
              "value": "720"
            },
            {
              "value": "310"
            }
          ]
        },
        {
          "seriesname": "Nuclear",
          "data": [
            {
              "value": "210"
            },
            {
              "value": "400"
            },
            {
              "value": "450"
            },
            {
              "value": "180"
            },
            {
              "value": "570"
            },
            {
              "value": "270"
            }
          ]
        },
        {
          "seriesname": "Gas",
          "data": [
            {
              "value": "180"
            },
            {
              "value": "330"
            },
            {
              "value": "230"
            },
            {
              "value": "160"
            },
            {
              "value": "440"
            },
            {
              "value": "350"
            }
          ]
        },
        {
          "seriesname": "Oil",
          "data": [
            {
              "value": "60"
            },
            {
              "value": "200"
            },
            {
              "value": "200"
            },
            {
              "value": "50"
            },
            {
              "value": "230"
            },
            {
              "value": "150"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "stackedcolumn2dline",
    "renderAt": "chart-container-4",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "showvalues": "0",
        "caption": "Apple's Revenue & Profit",
        "subcaption": "(2013-2016)",
        "numberprefix": "$",
        "numbersuffix": "B",
        "plottooltext": "Sales of $seriesName in $label was <b>$dataValue</b>",
        "showhovereffect": "1",
        "yaxisname": "$ (In billions)",
        "showsum": "1",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "2013"
            },
            {
              "label": "2014"
            },
            {
              "label": "2015"
            },
            {
              "label": "2016"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "iPhone",
          "data": [
            {
              "value": "21"
            },
            {
              "value": "24"
            },
            {
              "value": "27"
            },
            {
              "value": "30"
            }
          ]
        },
        {
          "seriesname": "iPad",
          "data": [
            {
              "value": "8"
            },
            {
              "value": "10"
            },
            {
              "value": "11"
            },
            {
              "value": "12"
            }
          ]
        },
        {
          "seriesname": "Macbooks",
          "data": [
            {
              "value": "2"
            },
            {
              "value": "4"
            },
            {
              "value": "5"
            },
            {
              "value": "5.5"
            }
          ]
        },
        {
          "seriesname": "Others",
          "data": [
            {
              "value": "2"
            },
            {
              "value": "4"
            },
            {
              "value": "9"
            },
            {
              "value": "11"
            }
          ]
        },
        {
          "seriesname": "Profit",
          "plottooltext": "Total profit in $label was <b>$dataValue</b>",
          "renderas": "Line",
          "data": [
            {
              "value": "17"
            },
            {
              "value": "19"
            },
            {
              "value": "13"
            },
            {
              "value": "18"
            }
          ]
        }
      ]
    }
  },
  {
    "type": "doughnut3d",
    "renderAt": "chart-container-5",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
        "caption": "Top 5 countries with Global Oil Reserves",
        "subcaption": "MMbbl= One Million barrels",
        "enablesmartlabels": "1",
        "showlabels": "1",
        "numbersuffix": " MMbbl",
        "usedataplotcolorforlabels": "1",
        "plottooltext": "$label, <b>$value</b> MMbbl",
        "theme": "fusion"
      },
      "data": [
        {
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        }
      ]
    }
  }
]
```

The HTML template for the above code is given below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Wealth Management</title>
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      body {
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        background-color: #f8f9fd;
      }
      .dashboard-container {
        box-sizing: border-box;
        padding-left: 8px;
        padding-right: 8px;
        background-color: #f8f9fd;
        padding: 30px;
      }
      .dashboard-container .dashboard-row {
        margin-left: -8px;
        margin-right: -8px;
      }
      .dashboard-container .dashboard-row:after {
        content: "";
        display: table;
        clear: both;
      }
      .dashboard-container .dashboard-row .intro-block,
      .dashboard-container .dashboard-row .chart {
        box-sizing: border-box;
        padding: 8px 8px;
      }
      .dashboard-container .dashboard-row .intro-block h1 {
        margin-bottom: 10px;
      }
      .dashboard-container .dashboard-row .chart {
        width: 50%;
        float: left;
      }
      .dashboard-container .dashboard-row .chart:first-child {
        box-sizing: border-box;
        float: initial;
        width: 100%;
      }
      .dashboard-container .dashboard-row .chart .chart-block {
        background-color: #fff;
        border: 1px solid #f0f1f7;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 2px 10px 0 rgba(33, 35, 68, 0.05) !important;
      }
      .pri-chart {
        width: auto;
        height: 600px;
      }
      .sec-chart {
        width: auto;
        height: 400px;
      }
      .dashboard-container .mt-0 {
        margin-top: 0;
      }
      .dashboard-container hr {
        border: none;
        border-top: 1px dotted rgba(49, 49, 49, 0.09);
        margin: 25px 0 15px;
      }
    </style>
  </head>
  <body>
    <div class="dashboard-container">
      <div class="dashboard-row">
        <div class="intro-block">
          <h1>Your dashboard header</h1>
          <p class="mt-0">
            Your amazing subtitle
          </p>
          <hr />
        </div>
      </div>
      <div class="dashboard-row">
        <div class="chart">
          <div class="chart-block">
            <div class="pri-chart" id="chart-container-map"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-top-adv"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-reg"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-reg-monthly"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-product"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

<div class="btn-holder mt-1"><a href="https://cdn.fusioncharts.com/resources/downloads/dev-centre/fusionexport-output.pdf" class="btn btn-secondary-grad text-uppercase mr-1"> Download Exported PDF</a><a href="https://github.com/fusioncharts/fusionexport-tutorials/tree/master/dimensions" class="btn btn-outline-secondary text-uppercase"> Download Source Code</a></div>