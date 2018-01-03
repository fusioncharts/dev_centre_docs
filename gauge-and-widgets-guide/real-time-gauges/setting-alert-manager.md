---
permalink: gauge-and-widgets-guide/real-time-gauges/setting-alert-manager.html
title: Setting the Alert Manager | FusionCharts
description: This section talks about setting alert manager. Real-time gauges can be made intuitive by setting an alert indicated when a defined set of values are reached
heading: Setting the Alert Manager
chartPresent: true
---

Gauges can be set to update in real time, either programmatically or by polling the server for data. To know more about how to configure a real-time gauge, click [here]{% linkTo tutorials/gauge-and-widgets-guide/real-time-gauges/setting-up-real-time-gauges.md %}.

Real-time gauges can be made more intuitive by setting an alert that indicates when a defined set of threshold data values are reached.

For example, if you are monitoring the CPU utilization on the server and want to display a warning message when it goes above 70%, you can set an alert using the __Alert Manager__.

An angular gauge configured to do this is shown below:

{% embed_all advanced-charting-real-time-gauges-setting-alert-manager-example-1.js %}

The above example shows the server CPU utilization of __akme.com__. The angular gauge is configured with three color-coded bands to identify levels of utilization of the server. When the CPU utilization is over 70%, an alert is set to display a warning message. The message to be displayed is passed to the `showAlert()` JavaScript method.

The code snippet to set up the alert manager is as follows:

```javascript
chart {
    …..
    …….
    "alerts": {
        "alert": [
            {
                // set the threshold range
                "minvalue": "0",
                "maxvalue": "50",
                // action on reaching the threshold range, JavaScript function showAlert()
                "action": "callJS",
                "param": "showAlert('Current server CPU Utilization is low');"
            }
        ]
    }
}

```

The container element for `alert` is `alerts`, which is a child of the `chart`element.  `alert` is an array of objects where every object defines a threshold range (alert range). One of the following actions can be specified with any alert range:

* Call a JavaScript function

* Show a predefined annotation


<p class="text-info"> Make sure that the alert ranges do not overlap.</p>

An `alert` object contains the following attributes:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>Minimum value for the alert range. For example, to define an alert for the range 0 - 50, `minValue` will be `0`(inclusive).</td>
  </tr>
  <tr>
    <td>`maxValue` </td>
    <td>Maximum value for the alert range. For example, to define an alert for the range 0-50, `maxValue` will be 50 (inclusive).</td>
  </tr>
  <tr>
    <td>`action`</td>
    <td>Action to be taken when the value on the gauge matches an alert range. Possible values for this attribute are:
`CALLJS` – Calls a JavaScript function that is specified in the `param` attribute (explained below).
`SHOWANNOTATION` –  Displays an annotation item or a group. The group id of the annotation  is specified in `param` attribute.
Grouping the annotation items is described in detail in the [Grouping Annotations]{% linkTo tutorials/advanced-charting/annotations/grouping-annotations.md %} article.</td>
  </tr>
  <tr>
    <td>`param` </td>
    <td>Parameter for the action, depending on the type of action:
`CALLJS` -   takes the name of JavaScript function and its parameters
`SHOWANNOTATION` - takes the ID of the annotation items or a .
Due to some security policies, usage of `eval` has been removed and some of the features of param attribute has been deprecated:

* Special characters like `(`, `)`, `-` and `,` cannot be passed as a parameter while function call.
* Multiple functions cannot be passed after `param` attribute.
* A function cannot be defined after `param` attribute.</td>
  </tr>
</table>
