---
title: Enable logging | FusionCharts
description: Enagbles the logging feature
heading: Enable logging
---

By default, export logging is disabled. It can be enabled by setting a log destination:

* Provide the log file path using the `--log-dest` option
* Provide the log file name using the `--log-file` option
* Provide the log level using the `--log-level` option

Refer to the example below:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
<pre><code class="language-bash">
	$ fe -c multiple_charts_config.json -d uat/ -f test.log -l 5
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

The different log levels are described in the [CLI reference section](/exporting-charts/using-fusionexport/cli-reference).

## Related Resources

* [Inject extra JavaScript while Exporting](/exporting-charts/using-fusionexport/tutorials/inject-extra-javascript-while-exporting)