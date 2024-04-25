---
title: Export a Dashboard | FusionCharts
description: Master exporting dashboards with multiple charts using FusionExport effortlessly. Dive into our comprehensive article for detailed guidance on exporting.
heading: Export a Dashboard
---

FusionExport allows you to export dashboards containing multiple charts. In this tutorial you will learn how to export a dashboard using FusionExport.

## Prerequisites

Before starting with the code, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

## Steps to Create a Dashboard 

The major steps are discussed below:

1. Create the ingredients for a basic dashboard:
    * Create a [dashboard template](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#sample-template), which is an HTML file.
    * Create a [chart configuration file](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#sample-configuration) (JSON) which shall contain configuration of multiple charts.

2. Write the export [code](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#code) in one of the languages for which FusionExport has [SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks). The export code takes care of embedding the charts into the template before exporting the dashboard.

3. (**Optional, but recommended**) Add some [styling](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#stylecss) (inline CSS, or a seperate CSS file) for the HTML template. 

In the following sections, you will learn about the implementing the steps discussed above.

## Dashboard Template and Chart Configuration

A dashboard is basically a web page consisting of two components:

* A template, which forms the structure of the dashboard and is fairly static 

* Charts, which are dynamic in the sense that they change based on the data associated with them

Using the above principle, you can export a dashboard using FusionExport - all you need is two files (apart from the obvious export code, which depends on the SDK/language you prefer):

* A **template** for the dashboard, which is nothing but an **HTML** file containing the structure of the dashboard. The most import aspect of this `.html` file is the `div` elements, which acts as containers where the charts will be eventually rendered. The value of the `id` element for these `div` attributes is used by FusionExport to correctly map the charts with their respective `div`.

* A **chart configuration** file, which is a **JSON** file containing configuration for the charts that need to be rendered. Each of these chart configurations has a `renderAt` attribute, the value for which must be the exact same string as the value of the `id` attribute for its corresponding `div` in the HTML template. 

### Sample Template

For this tutorial, we will use an extremely simple `.html` template, which has the provision to render three charts.

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>FusionExport Dashboard</title>
    </head>
    <body>
        <div id="column_chart">
            <!-- COLUMN 2D CHART RENDERED HERE -->
        </div>
        <div id="pie_chart">
            <!-- PIE CHART RENDERED HERE -->
        </div>
        <div id="line_chart">
            <!-- LINE CHART RENDERED HERE -->
        </div>
    </body>
</html>
```

If you execute the export code without any modification, the HTML template must be in the path:

```
<export_code_runs_from_this_directory>/resources/dashboard-template.html
```

### Sample Configuration
In a JSON file containing the configuration of multiple charts:
* The JSON must consist of an array of objects
* Each object contains configurations for individual charts

Given below is a schematic representation of a JSON file containing configurations of three charts.

```
[
    {
        // chart 1 configuration
    },
    {
        // chart 2 configuration
    },
    {
        // chart 3 configuration
    }
]
```

For this tutorial, we will a `.json` the configuration file for three charts:

* [A Column 2D Chart](/chart-attributes/?chart=column2d)

* [A Pie Chart](/chart-attributes/?chart=pie2d)

* [A Line Chart](/chart-attributes/?chart=line)

If you are executing the template code without any changes, the chart configuration file should be in the following path:

```Bash
<code_executed_from_this_directory>/resources/chart-config-file.json
```

The accepted format of configuration is the same as that of charts you can generate using [FusionCharts Suite](https://www.fusioncharts.com/download/fusioncharts-suite-xt). Refer to [Chart Attributes](/chart-attributes/?chart=column2d) for detailed information on the possible configurations of the charts.

> Observe the use of the `renderAt` attribute for each of the chart configurations. The value of `renderAt` must be the exact same string as the value of the `id` attribute, for its corresponding `div` in the HTML template.

```
[{
    "type": "column2d",
    "renderAt": "column_chart",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Number of visitors in the last 3 days",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "theme": "fusion"
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }]
    }
}, {
    "type": "pie2d",
    "renderAt": "pie_chart",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Food",
            "value": "285040"
        }, {
            "label": "Apparels",
            "value": "146330"
        }, {
            "label": "Electronics",
            "value": "105070"
        }, {
            "label": "Household",
            "value": "49100"
        }]
    }
}, {
    "type": "line",
    "renderAt": "line_chart",
    "width": "550",
    "height": "350",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "theme": "fusion",
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "lineThickness": "2"
        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "23507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "18500",
                "color": "#29C3BE",
                "displayvalue": "Average{br}weekly{br}footfall",
                "valueOnRight": "1",
                "thickness": "2"
            }]
        }]
    }
}]
```

Based on the above configuration, the following charts will be `embedded` into the dashboard:

![Change-A-Dashboard](/images/export-a-dashboard-image-1.png)

## Code

Before you start with the code, we suggest going through the steps that the code accomplishes. 

1. Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.

2. Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method. Use the `templateFilePath` parameter of the `set()` method to pass the path of the dashboard template file.

3. Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the dashboard, and save the output file to the path you provide as the value of the `outputDir` parameter (by default, it is the directory from which the code is being executed).

4. Use the instance of `ExportManager()` to perform pass success messages using the `on()` method, and save the exported chart in an appropriate file format using the `saveExportedFiles()` method.

### Exported Dashboard

Based on the template, chart configurations, and the code mentioned above, the exported dashboard looks like the image below.

![Export-A-Dashboard](/images/export-a-dashboard-image-2.png)

> The bare bones dashboard is not suitable for business usage. We strongly recommend [adding CSS](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#stylecss) to the HTML template, so that the dashboard looks presentable.

> The above guidelines may vary slightly based on the programming language you are using, and the customizations you want on top of the defaults.

> The exported dashboard will have the default name of `export--1.png`. If you execute the template code without any changes, you can find it in the same directory from where the code has been executed. 

> For detailed information on the vast number of possibilities, refer to [FusionExport SDK API Reference](/exporting-charts/using-fusionexport/sdk-api-reference/), and select the SDK of your choice from the left navigation panel.

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
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FusionCharts.FusionExport.Client; // Import sdk

namespace FusionExportTest
{
    public static class Dashboard
    {
        public static void Run(string host = Constants.DEFAULT_HOST, int port = Constants.DEFAULT_PORT)
        {
            // Instantiate the ExportConfig class and add the required configurations
            ExportConfig exportConfig = new ExportConfig();
            List<string> results = new List<string>();

            // Instantiate the ExportManager class
            using (ExportManager exportManager = new ExportManager())
            {
                exportConfig.Set("chartConfig", File.ReadAllText("./resources/chart-config-file.json"));

                // ATTENTION - Pass the path of the dashboard template
                exportConfig.Set("templateFilePath", "./resources/template.html");

                // Call the Export() method with the export config
                results.AddRange(exportManager.Export(exportConfig, outputDir = ".", unzip = true));
            }

            foreach (string path in results)
            {
                Console.WriteLine(path);
            }
            Console.Read();

        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab java-tab">
<pre><code class="language-java">
import com.fusioncharts.fusionexport.client.*; // import sdk

public class Script {
    public static void main(String[] args) throws Exception {
        String configPath = "resources/chart-config-file.json";

        // Instantiate the ExportConfig class and add the required configurations
        ExportConfig config = new ExportConfig();
        // Provide path of the chart configuration which we have defined above. 
        // You can also pass the same object as serialized JSON.
        config.set("chartConfig", configPath);

        // ATTENTION - Pass the path of the dashboard template
        config.set("templateFilePath", "./resources/dashboard-template.html");

        // Instantiate the ExportManager class
        ExportManager manager = new ExportManager();
        // Call the export() method with the export config and the respective callbacks
        manager.export(config, outputDir = ".", unzip = true);
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab php-tab">
<pre><code class="language-php">
<?php
	// Import dependencies
	require DIR__ . '/../vendor/autoload.php';
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;

	// Instantiate the ExportConfig class and add the required configurations
	$exportConfig = new ExportConfig();
	// Provide path of the chart configuration which we have defined above.  
	// You can also pass the same object as serialized JSON.
	$exportConfig->set('chartConfig', realpath('resources/chart-config-file.json'));

	// ATTENTION - Pass the path of the dashboard template
	$exportConfig->set('templateFilePath', realpath('resources/dashboard-template.html'));

	// Instantiate the ExportManager class
	$exportManager = new ExportManager();

	// Call the export() method with the exportConfig and the respective callbacks
	$exportManager->export($exportConfig, $outputDir = '.', $unzip = true);
?>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab nodejs-tab">
<pre><code class="language-javascript">
// ********** IMPORT AND RESOLVE DEPENDENCIES ***********

// Import 'path' core module of Node.js
const path = require('path');

// Import FusionExport SDK client for Node.js
const {
    ExportManager,
    ExportConfig
} = require('fusionexport-node-client');


// ********** EXPORT CONFIG ***********

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();


// Provide path of the chart configuration which we have defined above.
// You can also pass the same object as serialized JSON.
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'chart-config-file.json'));

// ATTENTION - Pass the path of the dashboard template
exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'dashboard-template.html'));


// ********** EXPORT-MANAGER ***********

// Instantiate ExportManager
const exportManager = new ExportManager();


// ***** OUTPUT ******

// Provide the exportConfig
// Optionally, print the exported file names and error messages, if any

exportManager.export(exportConfig, outputDir = '.', unzip = true).then((exportedFiles) => {
    exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
    console.log(err);
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab python-tab">
<pre><code class="language-python">
# Import sdk
from fusionexport import ExportManager, ExportConfig 

# Instantiate the ExportConfig class and add the required configurations
export_config = ExportConfig()

# Provide path of the chart configuration which we have defined above.
# You can also pass the same object as serialized JSON.
export_config["chartConfig"] = read_file("resources/chart-config-file.json")

# ATTENTION - Pass the path of the dashboard template
export_config["templateFilePath"] = "resources/dashboard-template.html"

# Provide port and host of FusionExport Service
export_server_host = "127.0.0.1"
export_server_port = 1337

# Instantiate the ExportManager class
em = ExportManager(export_server_host, export_server_port)

# Call the export() method with the export_config as its argument
em.export(export_config, outputDir = ".", unzip = True)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

## Styling the HTML template

The bare bones template generates a dashboard which is not pretty enough for modern business usage. Therefore, we strongly recommend adding some style to the template. For minimal style, you can write some inline CSS, although it is always better to maintain a separate stylesheet file. 

As shown below, you can associate a `style.css` file with the HTML template, and then write some CSS to make the dashboard look presentable. 

### Modified HTML template

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>FusionExport Dashboard</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="chart" id="column_chart">
            <!-- COLUMN 2D CHART RENDERED HERE -->
        </div>
        <div class="chart" id="pie_chart">
            <!-- PIE CHART RENDERED HERE -->
        </div>
        <div class="chart" id="line_chart">
            <!-- LINE CHART RENDERED HERE -->
        </div>
    </body>
</html>
```

### style.css

```css
.chart {
	border: 1px solid black;
	width: 98%;
	margin-left: 10px;
	margin-right: 10px;
}
```

Based on the above styling, the exported dashboard looks like the image below:

![Export-A-Dashboard](/images/export-a-dashboard-image-2.png)

> You can use frameworks like [Bootstrap](http://getbootstrap.com/) to style the template and make the exported dashboard look even better.
	
## Using custom fonts

You can now export your Dashboards using local fonts, as shown below.
	
### Modified HTML template

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>FusionExport Dashboard</title>
    <link rel="stylesheet" href="style.css">
	</head>
<body>
<div class="page">

    <h1 text="Title goes here">Title goes here</h1>
    <!--<p class="small text-muted">-->
        <!--Confidential: The following report contains confidential information. Do not distribute, email, fax, or transfer via any-->
        <!--electronic mechanism unless it has been approved by the recipient company's security policy. All copies and backups-->
        <!--of this document should be saved on protected storage at all times. Do not share any of the information contained-->
        <!--within this report with anyone unless they are authorized to view the information. Violating any of the previous-->
        <!--instructions is grounds for termination.-->
    <!--</p>-->
    <div class="row" th:each="chartConfig: ${chartConfigs}">
        <div class="card">
            <div class="card-body">
                <h2 th:text="${chartConfig.title}">Column Chart</h2>
                <div id="column_chart"></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
```	
	
### style.css
	
```CSS
	@font-face {
  font-family: "open_sans_condensed";
  font-style: normal;
  font-weight: normal;
  src: url("./fonts/opensanscondensed-lightitalic-webfont.woff") format("woff"),
    url("./fonts/opensanscondensed-lightitalic-webfont") format("woff2"),
    url("./fonts/OpenSansCondensed-LightItalic.ttf") format("truetype");
}

.column_chart {
  border: 1px solid black;
  width: 98%;
  margin-left: 10px;
  margin-right: 10px;
}

h1 {
  font-family: "open_sans_condensed", sans-serif !important;
}
```	
	
	
## Related Resources

* [Add a logo or a heading to the dashboard](/exporting-charts/using-fusionexport/tutorials/add-a-logo-or-heading-to-the-dashboard)

* [Export a D3 Chart](/exporting-charts/using-fusionexport/tutorials/export-a-d3-chart)
