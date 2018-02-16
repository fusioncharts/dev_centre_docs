---
permalink: gauge-and-widgets-guide/angular-gauge/dynamically-resizing-gauges.html
title: Dynamically Resizing Gauges | FusionCharts
description: This section will show how one can configure gauges for dynamic resizing or use the JS API function to resize the charts.
heading: Dynamically Resizing Gauges
chartPresent: true
---
<style>
  #chart-container-1 {
    width:400px;
    height:350px;
  }
</style>
In FusionCharts Suite XT, all charts and gauges can resize dynamically when the container element is resized.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/dynamically-resizing-gauges.html#configuring-gauges-for-dynamic-resizing">Configure gauges for dynamic resizing</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/dynamically-resizing-gauges.html#dynamic-resizing-of-gauges-with-manual-values-specified-for-various-gauge-elements">Resize gauges, that have manual values specified for various gauge elements, dynamically</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/angular-gauge/dynamically-resizing-gauges.html#using-js-api-function-resizeto-for-resizing-charts">Use the JS API function resizeTo() for resizing charts</a>

## Configuring Gauges for Dynamic Resizing

To enable the dynamic resizing feature, you need to :

* Set the gauge size in percentage.

* Set the container dimensions such that it can resize dynamically when the browser resizes or due to other changes taking place in the page (like when an element is added/removed or due to user interaction)

Whenever the container element resizes, the gauge can also dynamically resize itself instantly.

An angular gauge configured to resize dynamically looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-dynamically-resizing-gauges-example-1.js %}

Given below is a brief description of the attribute used to configure dynamic resizing for gauges:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`manageResize`</td>
    <td>It is used to specify whether the gauge will dynamically resize when its parent container is resized. Setting this attribute to `1` enables dynamic resizing, setting it to `0` (default) disables it. This attribute is not applicable when the `autoScale` attribute is set to `0`.</td>
  </tr>
  <tr>
    <td>`autoScale`</td>
    <td>If you've defined the chart parameters (like gauge origin, co-ordinates etc.) using a different chart size and now want to scale the chart to a different size, you need to specify the original width and height and then set the `autoScale` attribute to `1`. </td>
  </tr>
</table>


In this example, we have set the chart’s size in percentage and have set `manageResize` to `1` (true) in the chart object of the JSON data. These make the gauge capable of re-calculating the space available and adjusting to its new surroundings whenever the dimensions of the parent container changes.

Two input fields have been rendered with the gauge to enter the target width and height for the container element. When, after entering values in both fields, the `Resize` button is clicked, the width and the height of the container element are resized based on the inputs provided. As soon as the dimensions of the container element change, the gauge automatically resizes itself.

<p class="text-info">Please note that while dynamic resizing, the gauge and all its elements are scaled proportionally and works perfectly only for constrained resizing i.e., both width and height of the gauge are resized in proportions. If the chart is not scaled in proportions, the gauge will scale in the least possible proportion and then leave empty space all around it.</p>

## Dynamic Resizing of Gauges with Manual Values Specified for Various Gauge Elements

You can configure the various functional and cosmetic properties of gauge elements by manually specifying values for each. For example, you can configure the gauge [radius]{% linkTo tutorials/gauge-and-widgets-guide/angular-gauge/configuring-dials.md %}, the [dial radius]{% linkTo tutorials/gauge-and-widgets-guide/angular-gauge/configuring-dials.md %}, the [tick value distance]{% linkTo tutorials/gauge-and-widgets-guide/angular-gauge/configuring-tick-marks.md %}, the [gauge origin]{% linkTo tutorials/gauge-and-widgets-guide/angular-gauge/configuring-angles-and-origins.md %} etc. Ideally, you set these values based on specific width and height dimensions for the gauge. We name these dimensions as the original width and the original height of the gauge.

By default, a gauge set with manually-specified positions and size, when rendered initially, draws itself with all the elements based on the values provided in the JSON/XML. It does not scale its coordinates and other gauge elements. When this gauge is resized, it scales the manually specified values or coordinates based on the dimensions of the initially rendered gauge, that is, the width and height of the gauge when rendered for the first time. Thus, scaling of the various manually configured elements of a gauge will vary and may create problems when the initial dimensions of the gauge are different from the original width and height of the gauge.

When a gauge is rendered initially using the original width and original height, and then resized dynamically to different dimensions, the gauge can automatically re-calculate and scale these manual values to fit all the gauge elements to the new size.

However, it is observed that when the dimensions of the initially rendered gauge are NOT the same as the original width and original height (based on which the other parameters have been defined),

1. The initially rendered gauge and all its elements do not scale and fit to the current dimensions of the gauge.

2. On further resizing the gauge, all its elements scale based on the dimensions of the initially rendered gauge.

<p class="text-info">This scenario is apparent in applications that have containers with dynamic dimensions like web parts, panels, etc. These containers are not set with fixed dimensions. Rather, they derive their dimensions based on various conditions like the space available, the number of rows and columns, etc.</p>

This may lead to either a cropped gauge or a gauge with lots of extra space and even when you further resize the container, the gauge will not fit into the given space and will always remain cropped or spaced.

To take care of this scenario, you need to pass the original width and height (as values to the attributes `origW` and `origH`, respectively) to the gauge. On receiving the original width and height, the gauge checks them against the current dimensions and scales everything accordingly.

The below sample is calculated with a original width of 390 pixels and original height of 300 pixels. And a host of attributes (like, `gaugeOriginX`, `gaugeOriginY`, `gaugeOuterRadius` and `valueX` and `valueY` on dial object) are defined with fixed coordinate values. Now if you have to render this chart with any values other than 390 pixels wide  and 300 pixels tall, several of the gauge elements may not be positioned as intended. To solve this issue we have defined `origw` and `origh` attributes to `390` and `300` respectively in the `chart` object. And have provided a different width and height (300 and 280) for the chart. The chart still appears as expected.

An angular gauge, with element sizes manually-specified, configured for dynamic resize looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-dynamically-resizing-gauges-example-2.js %}

Given below is a brief description of the attributes that control dynamic resizing:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`origW`</td>
    <td>It is used to specify the original width of the gauge, if you have opted to dynamically resize the chart. It refers to the width based on which the various elements of the gauge have been manually configured.</td>
  </tr>
  <tr>
    <td>`origH`</td>
    <td>It is used to specify the original height of the gauge, if you have opted to dynamically resize the chart. It refers to the height based on which the various elements of the gauge have been manually configured.</td>
  </tr>
</table>




{% embed_all gauge-and-widgets-guide-angular-gauge-dynamically-resizing-gauges-example-2.js %}

In a similar way, the annotations present in a gauge can also be scaled and resized dynamically.

<p class="text-warning">Please also note that the dynamic resizing feature will not work if you have set `"autoScale": "0"`.</p>

## Using JS API Function `resizeTo()` for Resizing Charts

The FusionCharts JavaScript API allows you to resize an existing chart using the `resizeTo()` function. You can pass the new width and height of the chart in pixels or percent parameters to the `resizeTo()` function. You can also change the width and height property of the chart object and then call the `resizeTo()` function.

An angular gauge configured for using the `resizeTo()` functions looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-dynamically-resizing-gauges-example-3.js %}

Given below is a brief description of the `resizeTo()` function:

<table>
  <tr>
    <th>API Method signature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`resizeTo(width:String, height:String)`</td>
    <td>It is used to resize an existing chart. This method accepts the width and height values as parameters. The width and height can be specified in pixels or as percentage values. </td>
  </tr>
</table>

<pre style="display:none">
<!-- HACK: Apply css to chart container before chart rendering logic is prepared.
     Cannot be done through any chart events.
-->
<script pagespeed_no_defer="" type="text/javascript">
var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    var divid = divs[i].id;
    if (divid.indexOf('chartContainersources_xt_docs_tag_data') != -1) {
        $("#" + divid.toString()).css({
            "width": "450px",
            "height": "300px"
        });
        break;
    }
}
</script>
</pre>
