---
permalink: exporting-charts/using-fusionexport/tutorials/override-the-chart-config.html
title: Override the chart config | FusionCharts
description: This article talks about the SDKs used for overriding the chart config.
heading: Override the chart config
chartPresent: False
---

The  `--chart-config-options` option can be used to change the chart configuration, as shown in the example below: 

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        {
  "chart-config": "uat/fusioncharts_chart.js",
  "chart-config-options": {
    "dataSource.chart.subCaption": "FusionExport",
    "dataSource": {
      "chart": {
        "theme": "ocean"
      }
    }
  }
}
        ```
    </div>
</div>

In the above configuration, we are replacing the subheadings of all charts as well as adding a theme to the configuration.
Once done, run the following command:

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        $ fe -e fusioncharts_config.json
        ```
    </div>
</div>