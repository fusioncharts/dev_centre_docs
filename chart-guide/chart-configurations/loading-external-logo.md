---
title: Add External Logo | FusionCharts
description: You can load external logos at runtime with can be GIF/JPEG/PNG or SWF files. This section talks about configuring and linking the logo to an external URL
heading: Add External Logo
breadcrumb: [["Home", "/"], ["Add External Logo"]]
---

You can load external logos at runtime which will be displayed over the chart. The logos can be GIF/JPEG/PNG or SWF files that reside on the same sub-domain as the chart.

## Add an external logo

To add an external logo specify the URL of the logo using the `logoURL` attribute. 

Refer to the code below:

```
{
    "chart": {
        "theme": "fint",
        "caption": "Monthly Revenue",
        "subCaption": "Last year",
        "xAxisName": "Month",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
       **"logoURL": "http://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",**
    },

 ```

The chart will look like as shown below:

<chart>

## Configure the external logo

To configure the external logo follow the steps given below:

* Set the transparency of the logo using the `logoAlpha` attribute. 

* Set the scale (0-300) at run time using the `logoScale` attribute.

*  Specify the position of the external logo using the `logoPosition` attribute. You can set initials as values which are - `TL: Top-left`, `TR: Top-right`, `BL: Bottom-left`, `BR: Bottom-right`, `CC: Center`.

Refer to the code below:

```
{
    "chart": {
        "theme": "fint",
        "caption": "Monthly Revenue",
        "subCaption": "Last year",
        "xAxisName": "Month",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        **"logoURL": "http://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",**
        "logoAlpha": "40",
        "logoScale": "110",
        "logoPosition": "TR"
    },

 ```

The chart will look like as shownn below:

<chart>

## Link logo to an external URL

To add an external link to the logo, specify the exterlink using the `logoLink` attribute. 

Refer to the code below:

```
{
    "chart": {
        "theme": "fint",
        "caption": "Monthly Revenue",
        "subCaption": "Last year",
        "xAxisName": "Month",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "logoURL": "http://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
        "logoAlpha": "40",
        "logoScale": "90",
        "logoPosition": "TR",
        **"logoLink": "N-http://www.fusioncharts.com/"**
    },

 ```

The chart will look like as shown below:

<chart>

