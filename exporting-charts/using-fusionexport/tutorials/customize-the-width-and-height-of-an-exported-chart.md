---
permalink: exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart.html
title: Customize the width and height of an exported chart | FusionCharts
description: This article talks about the SDKs used for customizing the width an height of an exported chart.
heading: Customize the width and height of an exported chart
chartPresent: False
---

We can manipulate the width or height of the exported images. The `--width`, or `-W`, option is used to change the width; the `--height`, or `-H`, option is used for changing the height.
During bulk export, you can override the height and width of all the charts using the following command:

<div class="code-wrapper">
<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
<div class="tab cli-tab active">
<pre><code class="custom-hlc language-bash">
	$ fe -c multiple_charts_config.json -W 800 -H 400
</code></pre>
</div>
</div>
</div>

> It doesn't work with direct SVG input.

## Related Resources

* [Change the Export Type]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type '@@open-newtab')

* [Override the Chart Config]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/override-the-chart-config '@@open-newtab')

* [Add a logo and heading to the dashboard]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/add-a-logo-or-heading-to-the-dashboard '@@open-newtab')