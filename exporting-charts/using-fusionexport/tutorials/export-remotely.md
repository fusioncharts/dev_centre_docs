---
permalink: exporting-charts/using-fusionexport/tutorials/export-remotely.html
title: Export remotely | FusionCharts
description: This article talks about the SDKs used for export remotely.
heading: Export remotely
chartPresent: False
---

To export charts remotely, you need to deploy the FusionExport Web Service and get the export URL. 
To do this, enable the `--remote-export-enabled` option and pass the `--export-url` option as shown in the command below:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
<pre><code class="language-bash">
	$ fe -c column_chart_config.json -R true -u http://localhost:3000/api/v1.0/export
</code></pre>
</div>
</div>
</div>