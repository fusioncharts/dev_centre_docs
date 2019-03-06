---
title: External Logo | FusionCharts
description: You can load external logos at runtime with can be GIF/JPEG/PNG or SWF files. This section talks about configuring and linking the logo to an external URL
heading: Add External Logo
---

You can load external logos at runtime which will be displayed on the chart. The logos can be GIF/JPEG/PNG or SWF files that reside on the same sub-domain as the chart.

## Add an External Logo

To add an external logo specify the URL of the logo using the `logoURL` attribute. 

Refer to the code below:

```json
{
    "chart": {
        "logoURL": "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-loading-external-logo-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/xwmrw80q/) to edit the above chart.

## Configure the External Logo

To configure the external logo, the following attributes are used:

* Set the transparency of the logo using the `logoAlpha` attribute. 

* Set the scale (0-300) at run time using the `logoScale` attribute.

*  Specify the position of the external logo using the `logoPosition` attribute. You can set initials as values which are - `TL: Top-left`, `TR: Top-right`, `BL: Bottom-left`, `BR: Bottom-right`, `CC: Center`.

Refer to the code below:

```json
{
    "chart": {
        "logoURL": "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
        "logoAlpha": "40",
        "logoScale": "80",
        "logoPosition": "TR"
    }
}
```

The chart will look like as shownn below:

{% embed_chart chart-configurations-loading-external-logo-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/za1a6xer/) to edit the above chart.

## Link Logo to an External URL

To add an external link to the logo, specify the external link using the `logoLink` attribute. 

Refer to the code below:

```json
{
    "chart": {
        "logoLink": "N-http://www.fusioncharts.com/"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-loading-external-logo-example-3.js %}

In the above chart, click on the logo to visit the external link.

Click [here](http://jsfiddle.net/fusioncharts/s0shLfau/) to edit the above chart.