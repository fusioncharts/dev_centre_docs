---
title: Add CLI options in a file | FusionCharts
description: This article talks about the SDKs used for cli options in a file.
heading: Add CLI options in a file
---

All the CLI export config options can be written in a JSON file. To do this, you need to provide the JSON file as CLI arguments using the `--config`, or `-e`, option. The remaining elements will be automatically figured out from that file.
The content of the __fusionexport_config.json__ file is given below:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-json">
	{
		"chart-config": "uat/50charts.js",
		"output-file": "uat/export-<%= number(1, 100) %>",
		"type": "png",
		"width": 1000,
		"height": 500,
		"log-dest": "uat/",
		"log-file": "test.log",
		"log-level": "silly",
		"remote-export-enabled": false
	}
</code></pre>
</div>
</div>
</div>

Once done, run the following command:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-bash">
	$ fe -e fusioncharts_config.json
</code></pre>
</div>
</div>
</div>

## Related Resources

* [Override the chart config]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/override-the-chart-config)

* [Export in bulk using multiple JSON]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-in-bulk-using-multiple-js-json-files)