---
permalink: advanced-chart-configurations/drill-down/opening-in-pop-up-or-frames.html
title: Opening Links in Pop-up Windows or Frames | FusionCharts
description: FusionCharts Suite XT lets you define simple links that open in the same window, open in a new window, new pop-up window, new frame, render the whole chart as a hotspot, invoke existing JavaScript functions present within the same page, In this section, you will be shown how you can open links in pop-up windows and open links in frames.
heading: Opening Links in Pop-up Windows or Frames
chartPresent: true
---

FusionCharts Suite XT lets you define simple links that:

* open in [the same window](/advanced-charting/drill-down/simple-drill-down)

* open in [a new window](/advanced-charting/drill-down/simple-drill-down)

* open in a new pop-up window

* open in a new frame

* render the [whole chart as a hotspot](/advanced-charting/drill-down/set-chart-as-hotspot)

* invoke existing [JavaScript functions](/advanced-charting/drill-down/linkedcharts) present within the same page

In this section, you will be shown how you can:

* <a href="/advanced-chart-configurations/drill-down/opening-in-pop-up-or-frames#opening-links-in-pop-up-windows" class="smoth-scroll">open links in pop-up windows</a>

* <a href="/advanced-chart-configurations/drill-down/opening-in-pop-up-or-frames#opening-links-in-frames" class="smoth-scroll">open links in frames</a>

## Opening Links in Pop-up Windows

A column 2D chart configured with links that open in a pop-up window is shown below:

{% embed_all interactivity-drill-down-opening-in-pop-up-or-frames-example-1.js %}

In the above chart, each time a data plot is clicked, the target URL configured for that data plot opens in a pop-up window.

Given below is a brief description of the attribute used to configure links to open in pop-up windows:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`link`
</td>
    <td>It is used to specify the URL of the page to which the user is redirected to when a data plot is clicked. This attribute belongs to the `data` object and is specified for each data plot that is clickable. To open a link in a pop-up window, prefix the target URL with `P-` followed by the window name.

A unique name should be specified for each pop-up window that you have configured for your chart. </td>
  </tr>
</table>






In the data structure above:

* `detailsWin` is specified as the name of the new pop-up window in which the target URL will be rendered

* the window is configured using its cosmetic and functional attributes (explained in the table below)

* the URL Encoded link to be invoked is specified. A hyphen is used as the separator between the attributes and the link.

Given below is a brief description of the attributes that can be configured for the pop-up window:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`height`
</td>
    <td>It is used to specify the height of the pop-up window, in pixels.</td>
  </tr>
  <tr>
    <td>`width`</td>
    <td>It is used to specify the width of the pop-up window, in pixels.</td>
  </tr>
  <tr>
    <td>`resizable` </td>
    <td>It is used to specify whether the manual resizing of the window, by dragging its edges or corners, will be enabled. Setting this attribute to `yes` will enable manual resizing, setting it to `no` will disable it.</td>
  </tr>
  <tr>
    <td>`scrollbars`</td>
    <td>It is used to specify whether scrollbars will be shown for the pop-up window. Setting this attribute to `yes` will show the scrollbars, setting it to `no` (default) will hide them.</td>
  </tr>
  <tr>
    <td>`menubar`</td>
    <td>It is used to specify whether a menu bar will be shown at the top of the pop-up window. Setting this attribute to `yes` will show the menu bar, setting it to `no` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`toolbar`</td>
    <td>It is used to specify whether the toolbar will be shown for the pop-up window. Setting this attribute to `yes` will show the toolbar, setting it to `no` (default) will hide it.</td>
  </tr>
  <tr>
    <td>`location`</td>
    <td>It is used to specify whether the Address bar will be shown in the pop-up window. Setting this attribute to `yes` will show the Address bar, setting it to no (default) will hide it.</td>
  </tr>
  <tr>
    <td>`directories`</td>
    <td>It is used to specify whether any additional toolbars (for example, the Links bar in IE) will be shown for the pop-up window. Setting this attribute to `yes` will show them, setting it to no (default) will hide them.</td>
  </tr>
  <tr>
    <td>`status`</td>
    <td>It is used to specify whether the status bar will be displayed at the bottom of the pop-up window. Setting this attribute to `yes` will show the status bar, setting it to no (default) will hide it.</td>
  </tr>
  <tr>
    <td>`left`</td>
    <td>It is used to specify the distance, in pixels, of the pop-up window from the left edge of the screen. This attributes applies only to the Internet Explorer. If you are using the Netscape Navigator, use the `screenX` attribute.</td>
  </tr>
  <tr>
    <td>`top`</td>
    <td>It is used to specify the distance, in pixels, of the pop-up window from the top edge of the screen. This attributes applies only to the Internet Explorer. If you are using the Netscape Navigator, use the `screenY` attribute.</td>
  </tr>
  <tr>
    <td>`fullscreen`</td>
    <td>It is used to specify whether the pop-up window will be opened in full-screen mode. Setting this attribute to `yes` will show the window in full-screen mode. </td>
  </tr>
</table>


<p class="text-info"> These attributes may not be compatible with all browsers. To check browser compatibility, click [here](http://www.quirksmode.org/js/popup.html). </p>

<p class="text-info">Internally the chart decodes the URL that you set as the link. Before invoking the link, it again encodes the URL. If you are passing multilingual characters via a URL or do not want this decode-encode mechanism to be handled by the chart, you can use the `unescapeLinks` attribute as shown in the code snippet below :

```javascript
{
    "chart": {
        "unescapeLinks": "0"
        ...
    }
    ...
}
```

</p>

## Opening Links in Frames

FusionCharts Suite XT allows you to open links in specified frames on the web page. This feature is useful when you need to create simulated drill-down boards and dashboards.

A column 2D chart configured with links that open in a frame is shown below:

{% embed_all interactivity-drill-down-opening-in-pop-up-or-frames-example-2.js %}

Given below is a brief description of how the `link` attribute is used to open links in frames:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`link`
</td>
    <td>To open a link in a pop-up window, prefix the target URL with `F-` followed by the frame name. The URL Encoded link is then specified after the frame name with the `-` (hyphen) used as the separator.</td>
  </tr>
</table>

<p class="text-info">You can provide `_parent` as the name of the frame. The URL will get loaded in the frame or browser window which is the parent of the current window. Typically, the main browser space becomes the parent frame that contains all the other frames. Hence, if you wish to remove all frames and load the URL freshly on the same location you can use `_parent` as the name of the frame. </p>