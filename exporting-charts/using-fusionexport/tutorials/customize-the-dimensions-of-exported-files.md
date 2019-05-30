---
title: Customize the Dimensions of Exported Files | FusionCharts
description: This article talks about the SDKs used for exporting a dashboard.
heading: Customize the dimensions of exported files
---

While exporting a dashboard FusionExport allows you to customize the height and width of the exported image. This helps you to specify the exact dimensions as per your requirement.

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

## Customize the dimension

To customize the height and width of the exported dashboard images, follow the steps given below:

- Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.
- Set the `templateHeight` and `templateWidth` attribute to customize the height and width of the exported files respectively.
- Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).
- Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults.

The sample code to customize the dimension is given below:

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
                exportConfig.Set('templateWidth', 1200);
                exportConfig.Set('templateWidth', 1800);
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
        config.set("templateWidth", "1200");
        config.set("templateHeight", "1800");
        
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
$exportConfig->set('templateWidth', '1200');
$exportConfig->set('templateHeight', '1800');


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
const path = require('path');
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

const exportConfig = new ExportConfig();
const exportManager = new ExportManager();

exportConfig.set('chartConfig', path.join(__dirname, 'chart_configs.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'template.html'));
exportConfig.set('templateWidth', 800)
// exportConfig.set('templateWidth', 1200)
// exportConfig.set('templateWidth', 1800)

async function run() {
 const files = await exportManager.export(exportConfig, '.', true);
 files.forEach((file) => console.log(file));
}
run();
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
    <link href="style.css" rel="stylesheet" type="text/css" />
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
        width: 100%;
        float: left;
      }

      @media (min-width: 1000px) {
        .dashboard-container .dashboard-row .chart {
          width: 50%;
          float: left;
        }
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
            <div class="pri-chart" id="chart-container-1"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-2"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-3"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-4"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-5"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

<div class="btn-holder mt-1"><a href="https://cdn.fusioncharts.com/resources/downloads/dev-centre/fusionexport-output.pdf" class="btn btn-secondary-grad text-uppercase mr-1"> Download Exported PDF</a><a href="https://github.com/fusioncharts/fusionexport-tutorials/tree/master/dimensions" class="btn btn-outline-secondary text-uppercase"> Download Source Code</a></div>

## Related Resources

After you have changed the export type for a single chart, we recommend learning how to:

* [Change the Export Quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)

* [Customize the Width and Height of an Exported Chart](/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart)

* [Override a Chart Config](/exporting-charts/using-fusionexport/tutorials/override-the-chart-config)