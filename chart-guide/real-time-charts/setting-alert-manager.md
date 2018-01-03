---
permalink: chart-guide/real-time-charts/setting-alert-manager.html
title: Setting Alert Manager | FusionCharts
description: The alert manager helps you define thresholds for data values and perform specific actions for the defined thresholds.
heading: Setting Alert Manager
chartPresent: true
---

The alert manager helps you define thresholds for data values and perform specific actions for the defined thresholds. For example, if you are plotting a real-time temperature chart and wish to play a sound when the temperature reaches between 90 and 100 Fahrenheit, you can do this using the alert manager.

As long as they don’t overlap, you can define any number of threshold ranges. For each threshold range, you can specify one of the following actions:

* Call a JavaScript function and pass parameters to it

* Show a predefined annotation on the chart


In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/setting-alert-manager.html#configuring-the-alert-manager-for-all-datasets">Configure the alert manager for all datasets on the chart</a>

* <a href="{{ site.baseurl }}chart-guide/real-time-charts/setting-alert-manager.html#configuring-the-alert-manager-for-individual-datasets">Configure the alert manager for individual datasets</a>


## Configuring the Alert Manager for all Datasets

A real-time chart, in which the alert manager is configured to call a JavaScript function, looks like this:

{% embed_all advanced-charting-real-time-charts-setting-alert-manager-example-1.js %}


The container object for alerts is `alerts` property, which is a child of the `datasource` object.

Now, for each alert range object , you need to define an `alert` array element as a child of the `alerts` object. The `alert` array elements can have the following attributes:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>It is used to specify the minimum value for a threshold range. For example, to define an alert for the range 5-8, 5 is the minimum value.

When real-time values are matched against the value for `minValue`, the value is inclusive. For example, if 5 is the minimum value and also the real-time value, actions defined for the range 5-8, using the alert manager, will be executed.
</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>It is used to specify the maximum value for a threshold range. For example, to define an alert for the range 5-8, 8 is the maximum value.

Like the minimum value, the maximum value is also inclusive during value checks.
</td>
  </tr>
  <tr>
    <td>`action`</td>
    <td>This attribute defines the action to be taken, when the chart value matches an alert range. Possible values for this attribute are:<br/>
    `CALLJS` – It calls a JavaScript function (specified using the  `param` attribute – explained next) when the chart value matches against an alert range. To pass parameters to the JavaScript function, specify the exact function name and parameters in the `param` attribute – for example, `"param": "showAlert('Online Transaction above average');"`<br/>
    `SHOWANNOTATION` – You can create custom annotations and annotation groups (with named IDs). This action lets you show a predefined annotation group in the chart. For example, you may define an annotation group of three circles, that represent three status indicators in the colors red, green, and yellow, and assign an annotation group ID for them. By default, you may hide all status indicators. Later, based on the chart’s value, you may show an annotation. The group Id of the annotation to be shown is defined using the `param` attribute. When the chart value falls out of the that alert range, the chart hides the annotation.</td>
  </tr>
  <tr>
    <td>`param`</td>
    <td>It accepts the parameter for an action, depending on the type of action specified using the `action` attribute. For the `CALLJS` action, it takes the name of the JavaScript function and for the `SHOWANNOTATION` action, it takes the ID of the annotation group in order to show the annotation.
    Due to some security policies, usage of `eval` has been removed and some of the features of param attribute has been deprecated:

* Special characters like `(`, `)`, `-` and `,` cannot be passed as a parameter while function call.
* Multiple functions cannot be passed after `param` attribute.
* A function cannot be defined after `param` attribute.</td>
  </tr>
  <tr>
    <td>`occurOnce`</td>
    <td>It specifies whether an alert threshold range will be executed only once. Often, you might need an alert threshold range to act only once, irrespective of how many times the value goes into the range. Setting this attribute to `1` will notify the alert manager only the first time a value falls into that range. For example, for a temperature range 70-80 Fahrenheit , if you want to be notified only once when the temperature is  75, set the `occurOnce` attribute to `1` for this range.
</td>
  </tr>
</table>


## Configuring the Alert Manager for Individual Datasets

In real-time charts, you can control the datasets that are checked by the alert manager to raise any events.

For example, if you are comparing the transactions of a Retail Store and an Online Store using a single real-time column chart, you may want alerts to be defined and raised only for the Online Store. In this case, you can disable the alerts for the Retail Store's dataset.

Given below is a brief description of the attribute used to configure the alert manager for individual datasets:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`checkForAlerts`</td>
    <td>It is used to specify whether the values of a dataset will be checked for alerts. Setting this attribute to `0` disables the check for that dataset, setting it to `1` (default) enables it.</td>
  </tr>
</table>


```javascript
{
    "dataset": [{
        "seriesname": "Retail Store",
        "checkForAlerts": "0",
        "alpha": "100",
        "data": [{
            "value": "15"
        }]
    }, {
        "seriesname": "Online",
        "alpha": "100",
        "data": [{
            "value": "2"
        }]
    }]
}
```