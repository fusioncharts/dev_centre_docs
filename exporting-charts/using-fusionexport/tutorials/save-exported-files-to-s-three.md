---
permalink: exporting-charts/using-fusionexport/tutorials/save-exported-files-to-s-three.html
title: Save exported files to S3 | FusionCharts
description: This article talks about the SDKs used to save exported files to s3.
heading: Save exported files to S3
chartPresent: False
---

To directly save exported files into s3, you need to obtain below credentials from S3:

* Bucket
* AccessKey
* SecretAccessKey

### Step 1

Navigate to `~/fusionexport_config` directory (for Mac OS and Linux) or  `C:\Users\<username>\fusionexport_config` (for Windows ).

Now, edit the content of the file `s3.json`.

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-javascript">
	{
		"bucket": "",
		"accessKey": "",
		"secretAccessKey": ""
	}
</code></pre>
</div>
</div>
</div>

### Step 2

Add the prefix `s3:` for `--output-file` option.

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-javascript">
	{
		"chart-config": "fusioncharts_chart.js",
		"output-file": "s3:fc-chart-<%= number(1) %>"
	}
</code></pre>
</div>
</div>
</div>