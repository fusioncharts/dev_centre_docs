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

To save the output file to S3, add the prefix `S3:` for output-file option and pass the S3 configs in the `S3-config` option.

Now, edit the content of the file `fusioncharts-config.json.json`.

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-javascript">
	{
	    "chart-config": "fusioncharts_chart.js",
	    "output-file": "s3:fc-chart-<%= number(1) %>",
	    "s3-config": {
	        "bucket": "coolbucket",
	        "accessKey": "ADFASDF#DDF$",
	        "secretAccessKey": "dfasdAS$32rdsf$234rfdsaf"
	    }
	}
</code></pre>
</div>
</div>
</div>

Run the following command:

```
$ fe -c fusioncharts-config.json
```

## Related Resources

* [Manipulate the output filename]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename)

* [Export the Output Files as a Zip]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip)