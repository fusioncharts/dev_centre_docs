---
title: Override the chart config | FusionCharts
description: This article talks about the SDKs used for overriding the chart config.
heading: Override the chart config
---

The  `--chart-config-options` option can be used to change the chart configuration, as shown in the example below: 

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="language-json">
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
</code></pre>
</div>
</div>

In the above configuration, we are replacing the subheadings of all charts as well as adding a theme to the configuration.
Once done, run the following command:

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
<pre><code class="language-bash">
	$ fe -e fusioncharts_config.json
</code></pre>
</div>
</div>
</div>

## Related Resources

* [Customize the Width and Height of an Exported Chart](/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart)

* [Change the Export Type](/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

* [Add a logo and Heading to the Dashboard](/exporting-charts/using-fusionexport/tutorials/add-a-logo-or-heading-to-the-dashboard)

* [Change the Export Quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)