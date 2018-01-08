---
permalink: exporting-charts/using-fusionexport/tutorials/enabling-logging.html
title: Enable logging | FusionCharts
description: Enagbles the logging feature
heading: Enable logging
chartPresent: False
---

By default, export logging is disabled. It can be enabled by setting a log destination:

* Provide the log file path using the `--log-dest` option
* Provide the log file name using the `--log-file` option
* Provide the log level using the `--log-level` option

Refer to the example below:

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        $ fe -c multiple_charts_config.json -d uat/ -f test.log -l 5
        ```
    </div>
</div>

The different log levels are described in the <a href="/exporting-charts/using-fusionexport/cli-reference.html">CLI reference section</a>.