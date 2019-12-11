---
title: Angular Gauge | FusionCharts
description: Angular gauges are essentially like the speedometer or the fuel gauge. They use a radial scale to display the data range & a dial to indicate the data value.
heading: Angular Gauge
---

> This chart type belongs to **FusionWidgets XT**.

Angular gauges are essentially like the speedometer or the fuel gauge of a car. You can use an angular gauge (also called a meter or dial gauge) to display a specific data point, using a dial over a radial scale with defined limits. You can associate colors with sections of the data to indicate specific ranges within the data, e.g., green for satisfactory, yellow for caution, and red for alarm.

{% embed_chartAnatomy angular-gauge.json %}

## Basics of an angular gauge

A simple angular gauge looks like the following:

{% embed_all gauges-and-widgets-angular-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/qaemety9/) to edit the above chart.

As you can see in the example given above, you can create a gauge by defining the minimum and maximum values (referred to as lower limit and upper limit). Within that scale, you can create various qualitative ranges (color ranges) to classify your data. The purpose is to classify a value as belonging to a predetermined range. For example, you may define a range called "Best" that consists of values between 60 and 100. Or you might create a range called "Weak" that consists of values between 30 and 60. For each range, you can define a color, to visually distinguish the ranges from each other.

## Elements of the gauge

An angular gauge consists of the following elements:

### Color range

An angular gauge displays the data values on a radial scale. The radial scale is marked by a lower limit and an upper limit, i.e. the minimum and maximum values that can be plotted. Within that scale, you can create various sections to classify your data - each section can have a different background color, border color, etc,. to differentiate them from one another. These sections are called color ranges. In the above chart, we have 3 color ranges marked as green, yellow, and red. There can be any number of color ranges. For each color range, you need to specify the minimum and maximum values and the hex color code for the range.

Each color range should have it's own unique range value. So, if you define a range as 0-50, set the minimum value of the next range as 50, so that there is no overlap with the previous section. Similarly, if you set the upper limit of the chart as 100, set the maximum value of the last range as 100.

### Dials (data indicators)

Dials are used to point to the desired value on the radial scale. You can point to more than one value using multiple dials. Each dial can have its individual properties, like color (border and background), width (both base and top), radius, and value.

### Tick marks

Tick marks are the calibration marks on the radial scale to help interpret the reading. You can draw two types of tick marks on the chart:

-  Major Tick Marks – These are the bigger lines around the radial scale.

-  Minor Tick Marks – These are the smaller lines enclosed within the bigger lines.

For all the tick marks, you can specify the color, height, and thickness. You can also specify the number of tick marks that you want to have on the chart, as well as choose whether to show/hide the tick mark values.

### Tooltips

For each dial on the chart, you can set a tooltip to display the value of that particular dial. You can customize the background color and border color of the tool-tip, as well as choose whether to show/hide it.

### Trend points / trend arcs / trend markers

You can define trend points, arcs or markers on the angular gauge chart. For example, if you want to highlight a certain value (e.g., last year's average), you can use the trend point feature to do so.

### Annotations

Using annotations, you can draw custom shapes, display text, or load images on the gauge.

Take a look at a standard angular gauge enlisting the various basic components:

{% embed_all gauges-and-widgets-angular-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/77QP6/) to edit the above chart.

## Simple angular gauge example

As an example, create an angular gauge that indicates the customer satisfaction score for the last week at Harry's SuperMart. To create the angular gauge by plotting the customer satisfaction score, do the following:

-  Specify the type using the `type` attribute. To render Angular gauge, set `angulargauge`.

-  Set the container object using `renderAt` attribute.

-  Specify the dimension of the chart using `width` and `height` attributes.

-  Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

-  Define the minimum value as `0` and the maximum value as `100`.

-  Divide the gauge scale into three regions, indicating a bad, a satisfactory, and a good customer satisfaction index. Color code the three regions in red, yellow, and green, respectively.

-  Point the dial of the angular gauge to a certain value (say, 67).

Define the scale on which the score will be plotted, as shown in the table below:

| Range   | What it means                  | Color  |
| ------- | ------------------------------ | ------ |
| 0-50%   | Bad customer satisfaction      | Red    |
| 50-75%  | Moderate customer satisfaction | Yellow |
| 75-100% | Good customer satisfaction     | Green  |

Use the following attributes to create a simple angular gauge with the data given above:

-  Specify the lower limit (or the minimum value) of the gauge scale using the `lowerLimit` attribute.

-  Specify the upper limit (or the maximum value) of the gauge scale using the `upperLimit` attribute.

-  Specify the label to be displayed with the lower limit value on the gauge scale, using the `lowerLimitDisplay` attribute.

-  Specify the label to be displayed with the upper limit value on the gauge scale, using the `upperLimitDisplay` attribute.

-  Render the data value along with the gauge by setting the value of the `showValue` attribute to `1`.

-  Show the data value (if being rendered) below the pivot, by setting the value of the `valueBelowPivot` attribute to `1`.

-  Specify the lower limit of a color range using the `minValue` attribute.

-  Specify the upper limit of a color range using the `maxValue` attribute.

-  Specify the value that should be plotted on the gauge scale, using the `value` attribute.

Refer to the code below:

```json
{
   "chart": {
      "caption": "Customer Satisfaction Score",
      "subcaption": "Last week",
      "lowerLimit": "0",
      "upperLimit": "100",
      "lowerLimitDisplay": "Bad",
      "upperLimitDisplay": "Good",
      "showValue": "1",
      "valueBelowPivot": "1",
      "theme": "fusion"
   },
   "colorRange": {
      "color": [
         {
            "minValue": "0",
            "maxValue": "50",
            "code": "#e44a00"
         },
         {
            "minValue": "50",
            "maxValue": "75",
            "code": "#f8bd19"
         },
         {
            "minValue": "75",
            "maxValue": "100",
            "code": "#6baa01"
         }
      ]
   },
   "dials": {
      "dial": [
         {
            "value": "67"
         }
      ]
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/qaemety9/) to edit the above chart.

The angular gauge chart in the FusionCharts Suite XT offers configuration options that you can use to improve the visual representation of the gauge.

## Configure the gauge gradient fill

An angular gauge is usually rendered with solid colors filled in the background. To enhance the visual representation of charts, use a gradient fill for the background.

Use the following attributes to configure the gradient fill for the gauge:

-  Specify the gradient fill formula for the gauge scale using the `gaugeFillMix` attribute. Note that the color constituents are applied from the inner side to the outer side of the scale, which means that the color you specify first will be applied to the inner radius and the subsequent colors will move out towards the outer radius.

-  specify the ratio in which each of the colors specified for the gradient fill will be applied to the gauge scale using the `gaugeFillRatio` attribute. Note that if you set this attribute as empty, it instructs the gauge to automatically distribute the gradient color constituents.

Refer to the code below:

```json
{
   "chart": {
      "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
      "gaugeFillRatio": "15"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/577w5/) to edit the above chart.

## Show/hide the gauge border

Set the value of the `showGaugeBorder` attribute to `0`, to hide the gauge border.

Refer to the code below:

```json
{
   "chart": {
      "showGaugeBorder": "0"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/qmfofgwk/) to edit the above chart.

> In the above sample, the shadow has been hidden through the use of the `fusion` theme. Shadows might interfere with the border color.

## Configure border cosmetics for each color range

Use the following attributes to individually configure the color and transparency of the border of each range on the gauge scale:

-  Specify the hex code for the color that will be applied to the range border, using the `borderColor` attribute.

-  Set the transparency for the range border (between `0` for transparent and `100` for opaque) using the `borderAlpha` attribute.

Note: To configure borders individually for each color range, use the attributes that belong to the `color` object, which in turn belongs to the `colorRange` object.

Refer to the code below:

```json
{
   "chart": {},
   "colorRange": {
      "color": [
         {
            "borderColor": "#780101",
            "borderAlpha": "100"
         }
      ]
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/ACBTf/) to edit the above chart.

## Configure the entire border for the gauge at once

Use the following attributes to configure the entire border of the gauge scale at once:

-  Specify the hex code of the color to be used to render the entire border of the gauge, using the `gaugeBorderColor` attribute.

-  Specify the thickness, in pixels, for the entire border of the gauge, using the `gaugeBorderThickness` attribute.

-  Specify the transparency for the entire border of the gauge (between `0` for transparent and `100` for opaque) using the `gaugeBorderAlpha` attribute.

Refer to the code below:

```json
{
   "chart": {
      "gaugeBorderColor": "#111111",
      "gaugeBorderThickness": "1",
      "gaugeBorderAlpha": "100"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/B2g8Q/) to edit the above chart.

## Set the border color as a derivative of the fill color

Specify the derivative of the fill color that should be applied to the border, using the `gaugeBorderColor` attribute.

Refer to the code below:

```json
{
   "chart": {
      "gaugeBorderColor": "{dark-30}"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/PwP4L/) to edit the above chart.

## Configure outer and inner radius

Based on the data values provided, the gauge automatically calculates the outer and inner radii for the color range scale. You can, however, explicitly set the radii for the gauge using the following attributes:

-  Specify the outer radius (in pixels) for the color range scale, using the `gaugeOuterRadius` attribute.

-  Specify the inner radius (in pixels) for the color range scale, using the `gaugeInnerRadius` attribute. Note that this attribute can take two types of values - either as exact pixels or as a percentage of the outer radius.

Refer to the code below:

```json
{
   "chart": {
      "gaugeOuterRadius": "180",
      "gaugeInnerRadius": "120"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/44E7B/) to edit the above chart.

## Configure pivot properties

Like the range scale and the border of the angular gauge, you can also configure the pivot that points to a data value on the range scale.

### Set the pivot radius

The gauge automatically calculates the pivot radius based on the data values that you provide. However, you can also explicitly set the pivot radius (in pixels), using the `pivotRadius` attribute.

Refer to the code below:

```json
{
   "chart": {
      "pivotRadius": "10"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/C2rW2/) to edit the above chart.

## Configure pivot border cosmetics

Use the following attributes to configure pivot border cosmetics:

-  Specify the hex code of the color that will be applied to the pivot border, using the `pivotBorderColor` attribute.

-  Specify the transparency of the pivot border (between `0` for transparent and `100` for opaque) using the `pivotBorderAlpha` attribute.

Refer to the code below:

```json
{
   "chart": {
      "pivotBorderColor": "#333333",
      "pivotBorderAlpha": "100"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/hqC87/) to edit the above chart.

## Configure pivot fill cosmetics

Use the following attributes to configure pivot fill cosmetics:

-  Specify the hex code of the fill color for the pivot, using the `pivotFillColor` attribute.

-  Specify the transparency for the fill color for the pivot (between `0` for transparent and `100` for opaque) using the `pivotFillAlpha` attribute.

Refer to the code below:

```json
{
   "chart": {
      "pivotFillColor": "#5599CC",
      "pivotFillAlpha": "100"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/56cXa/) to edit the above chart.

## Configure the pivot fill color with a gradient fill mix

The `pivotFillColor` attribute fills the pivot with a single solid color. However, you can also fill the pivot with a gradient fill, by using the attributes given below:

-  Specify the gradient fill formula using the `pivotFillMix` attribute.

-  Specify the ratio in which the gradient color constituents will be applied to the pivot, using the `pivotFillRatio` attribute.

Refer to the code below:

```json
{
   "chart": {
      "pivotFillColor": "#1122CC",
      "pivotFillMix": "{dark-50},{light-30},{dark-40}",
      "pivotFillRatio": "70,30"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/8MzDD/) to edit the above chart.

## Configure the pivot fill with a linear gradient

Specify whether the gradient fill for the pivot should be linear or radial, by setting the value of the `pivotFillType` attribute to `linear` or `radial` (default), respectively.

Refer to the code below:

```json
{
   "chart": {
      "pivotFillType": "linear"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/neAZZ/) to edit the above chart.

## Configure dials

With FusionCharts Suite XT, you can configure dials in angular gauges for several cosmetic and functional properties.

### Configure the border

Use the following attributes to configure the borders of a dial:

-  Specify the hex code of the color that will be used to render the dial border, using the `borderColor` attribute.

-  Specify the thickness (in pixels) of the dial border using the `borderThickness` attribute.

-  Specify the transparency of the border of the dial (between `0` for transparent and `100` for opaque) using the `borderAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "value": "67",
            "bgColor": "#777777",
            "borderColor": "#111111",
            "borderThickness": "1",
            "borderAlpha": "100"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/6FXdq/) to edit the above chart.

## Configure the Background

Specify the hex code of the color(s) that will be used to fill the background for the dial, using the `bgColor` attribute. Set the value as a single color to render a solid-fill background or as a comma-separated list of colors to render a gradient-fill background.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "bgColor": "#999999"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/VbvM4/) to edit the above chart.

## Configure the radius and the rear extension

By default, the gauge automatically configures the radius of the dial. However, you can also explicitly specify the radius for the dial, as well as the rear extension (extension on the opposite side), using the following attributes:

-  Specify the radius for the dial (in pixels) using the `radius` attribute.

-  Specify the distance (in pixels) by which the dial will extend beyond the pivot, in the opposite direction, using the `rearExtension` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "radius": "140",
            "rearExtension": "15"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/B9Q68/) to edit the above chart.

## Configure base and top widths

If you Increase the base and the top width of a dial, you can increase the thickness of both. That way, you can create different dial shapes to suit your design requirements. Use the following attributes to do so:

-  Specify the width (in pixels) of the bottom of the dial (the part connected to the pivot), using the `baseWidth` attribute.

-  Specify the width (in pixels) of the top of the dial, using the `topWidth` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "baseWidth": "15",
            "topWidth": "3"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/E2rz2/) to edit the above chart.

## Configure hover effects

You can use hover effects to modify how the dial reacts when you hover the mouse pointer over it. Use the following attributes to configure hover effects:

-  Set the value of the `showHoverEffect` attribute to `1`, to enable hover effect for the gauge elements.

-  Specify the hex code for the color to be used to render the dial when you hover the mouse pointer over it, using the `bgHoverColor` attribute.

-  Specify the transparency (between `0` for transparent and `100` for opaque) for the dial when you hover the mouse pointer over it, using the `bgHoverAlpha` attribute.

-  Specifies the hex code for the color that will be used to render the border of the dial when you hover the mouse pointer over it, using the `borderHoverColor` attribute.

-  Specify the transparency (between `0` for transparent and `100` for opaque) for the border of the dial when you hover the mouse pointer over it, using the `borderHoverAlpha` attribute.

-  Specify the thickness for the border of the dial when you hover the mouse pointer over it, using the `borderHoverThickness` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
        "showHoverEffect": "1",
    },
    "colorRange": {
        "color": [
           ...
        ]
    },
    "dials": {
        "dial": [{
            "bgHoverColor": "#cccccc",
            "bgHoverAlpha": "80",
            "BorderHoverColor": "#999999",
            "BorderHoverAlpha": "80",
            "BorderHoverThickness": "2"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-51.js %}

Click [here](http://jsfiddle.net/fusioncharts/jJM7e/) to edit the above chart.

## Add custom tool-text for the dial

Specify the text that will be rendered as the tooltip when you hover the mouse pointer over it, using the `tooltext` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "tooltext": "Current customer satisfaction score is 67"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-49.js %}

Click [here](http://jsfiddle.net/fusioncharts/zc72rux0/) to edit the above chart.

> Note: You can only get a gauge with configured tooltip text (like the one shown above) when the gauge does not receive real time updates. In case of real time updates, the data value will change at specific intervals of time and, therefore, you will need to update the tooltip text accordingly. You can use macros to do this.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "value": "67",
            "tooltext": "Current customer satisfaction score is $value"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-50.js %}

Click [here](http://jsfiddle.net/fusioncharts/RXe47/) to edit the above chart.

The above sample replaces the hard-coded value with the macro \$value. Now, whenever you roll the mouse pointer over the dial, the current value of the dial will be displayed along with the text set in the `tooltext` attribute of the `dial` element.

To see a detailed list of available macros, please refer to [this](/chart-guide/chart-configurations/tool-tips#introduction-to-macros) link.

## Add multiple dials on the gauge

You can add any number of dials to an angular gauge, and configure each dial to have its own value and individual properties. To create multiple dials, you need to create multiple `dial` objects, with one object for each dial. Note that you need to separately initialize the attributes for the functional and cosmetic properties of each dial, in each object instance.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "value": "67",
            "showValue": "1",
            "valueX": "200",
            "valueY": "180",
            "bgAlpha": "10",
            "tooltext": "Last year's average : $value",
            "rearExtension": "15"
        }, {
            "value": "78",
            "showValue": "1",
            "valueX": "250",
            "valueY": "220",
            "tooltext": "Current year's average : $value",
            "rearExtension": "15"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/7L2PT/) to edit the above chart.

## Customize dial values

Apart from configuring the appearance of the dial, you can also show/hide dial values and configure their placement. Use the following attributes to configure dial values:

-  Display the value of the dial, by setting the value of the `showValue` attribute to `1`.

-  Specify the x-position of the `value` text field using the `valueX` attribute.

-  Specify the y-position of the `value` text-field using the `valueY` attribute.

-  Specify the font family to be used to render the values on the gauge, using the `valueFont` attribute.

-  Specify the hex code of the color that will be used to render the value, using the `valueFontColor` attribute.

-  Set the font size for the value (between `0` and `72`) using the `valueFontSize` attribute.

-  Set the value of the `valueFontBold` attribute to `1`, to apply bold formatting to the value.

-  Set the value of the `valueFontItalic` attribute to `1`, to apply italic formatting to the value.

-  Specify the hex code for the color that will be used to render the background of the value, using the `valueBgColor` attribute.

-  Specify the hex code for the color that will be used to render a border around the value text, using the `valueBorderColor` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the value using the `valueAlpha` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the font of the value using the `valueFontAlpha` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the value background using the `valueBgAlpha` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the value border using the `valueBorderAlpha` attribute.

-  Specify the thickness (in pixels) for the value border, using the `valueBorderThickness` attribute.

-  Specify the radius (in pixels) for the value border, using the `valueBorderRadius` attribute.

-  Set the value of the `valueBorderDashed` attribute to `1`, to render the border around the value using dashed lines.

-  Specify the length (in pixels) of each dash (if you render the value border using dashed lines), using the `valueBorderDashLen` attribute.

-  Specify the gap (in pixels) between two consecutive dashes (if you render the value border using dashed lines), using the `valueBorderDashGap` attribute.

Refer to the code below:

```json
{
   "chart": {
      "caption": "Average Customer Satisfaction Score",
      "subcaption": "Last year vs Current year",
      "lowerLimit": "0",
      "upperLimit": "100",
      "valueFontSize": "16",
      "valueFontBold": "1",
      "valueBgColor": "#cccccc",
      "valueBorderColor": "#999999",
      "valueAlpha": "80",
      "valueBorderThickness": "2",
      "valueBorderRadius": "2",
      "valueBorderDashed": "1",
      "valueBorderDashGap": "2",
      "valueBorderDashLen": "5",
      "gaugeFillMix": "{dark-40},{light-40},{dark-20}",
      "theme": "fusion"
   },
   "colorRange": {
      "color": [
         {
            "minValue": "0",
            "maxValue": "50",
            "code": "#e44a00"
         },
         {
            "minValue": "50",
            "maxValue": "75",
            "code": "#f8bd19"
         },
         {
            "minValue": "75",
            "maxValue": "100",
            "code": "#6baa01"
         }
      ]
   },
   "dials": {
      "dial": [
         {
            "value": "67",
            "showValue": "1",
            "valueX": "190",
            "valueY": "180",
            "tooltext": "Last year's average : $value",
            "rearExtension": "15"
         },
         {
            "value": "78",
            "showValue": "1",
            "valueX": "260",
            "valueY": "220",
            "tooltext": "Current year's average : $value",
            "rearExtension": "15"
         }
      ]
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/6qz8g6w9/) to edit the above chart.

## Update dials using id

When you use angular gauges with multiple dials in real time applications, you need to update each dial with the correct value. Use the `id` attribute to specify a unique identification for a dial on the gauge.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "id": "Dial 1"
        }]
    }
}
```

## Show/hide tick marks and tick values

Use the following attributes to show/hide tick marks and values:

-  Set the value of the `showTickMarks` attribute to `0`, to hide tick marks.

-  Set the value of the `showTickValues` attribute to `0`, to hide tick values.

Refer to the code below:

```json
{
   "chart": {
      "showTickMarks": "0",
      "showTickValues": "0"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/mT4uH/) to edit the above chart.

## Place tick marks and tick values inside gauge

By default, the tick marks and tick values are rendered outside the gauge scale. However, you can configure them to be placed inside the gauge, using the following attributes:

-  Set the value of the `placeTicksInside` attribute to `1`, to place tick marks inside the gauge.

-  Set the value of the `placeValuesInside` attribute to `1`, to place tick values inside the gauge.

Refer to the code below:

```json
{
   "chart": {
      "placeTicksInside": "1",
      "placeValuesInside": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/GySkt/) to edit the above chart.

## Configure the number of major and minor tick marks

Based on the data you provide, the gauge automatically decides the number of major and minor tick marks to render. However, you can use the following attributes to explicitly specify the number of major and minor tick marks:

-  Specify the number of major tick marks to be rendered on the gauge scale, using the `majorTMNumber` attribute.

-  Specify the number of minor tick marks to be rendered on the gauge scale, using the `minorTMNumber` attribute.

Refer to the code below:

```json
{
   "chart": {
      "majorTMNumber": "9",
      "minorTMNumber": "4"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-23.js %}

Click [here](http://jsfiddle.net/fusioncharts/sq4RC/) to edit the above chart.

### Configure cosmetics for major and minor tick marks

You can customize the color, transparency, height, and thickness of of the major and minor tick marks, using the following attributes:

-  Specify the hex code of the color of the major tick marks using the `majorTMColor` attribute.

-  Specify the transparency (between `0` for transparent and `100` for opaque) of the major tick marks using the `majorTMAlpha` attribute.

-  Specify the height of the major tick marks using the `majorTMHeight` attribute.

-  Specify the thickness of the major tick marks using the `majorTMThickness` attribute.

-  Specify the hex code of the color of the minor tick marks using the `minorTMColor` attribute.

-  Specify the transparency (between `0` for transparent and `100` for opaque) of the minor tick marks, using the `minorTMAlpha` attribute.

-  Specify the height of the minor tick marks using the `minorTMHeight` attribute.

-  Specify the thickness of the minor tick marks using the `minorTMThickness` attribute.

Refer to the code below:

```json
{
   "chart": {
      "majorTMColor": "#333333",
      "majorTMAlpha": "100",
      "majorTMHeight": "15",
      "majorTMThickness": "2",
      "minorTMColor": "#666666",
      "minorTMAlpha": "100",
      "minorTMHeight": "12",
      "minorTMThickness": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-24.js %}

Click [here](http://jsfiddle.net/fusioncharts/S89ML/) to edit the above chart.

## Show every nth tick value

You can choose to only show every n<sup>th</sup> tick mark on the angular gauge scale and hide all tick marks in between, by setting the value of the `tickValueStep` attribute to a whole number (n).

Refer to the code below:

```json
{
   "chart": {
      "tickValueStep": "2"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-25.js %}

Click [here](http://jsfiddle.net/fusioncharts/n3qt2/) to edit the above chart.

## Set decimals for tick values

You can show decimal numbers as tick values. For these decimal numbers, you can configure how many digits are rendered after the decimal point and whether digits are forced to display values after the decimal point. Use the following attributes to do so:

-  Specify the number of digits to be rendered after the decimal point, using the `tickValueDecimals` attribute.

-  Set the value of the `forceTickValueDecimals` attribute to `1`, to force tick values to show decimal places.

Refer to the code below:

```json
{
   "chart": {
      "tickValueDecimals": "1",
      "forceTickValueDecimals": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-26.js %}

Click [here](http://jsfiddle.net/fusioncharts/cPR9z/) to edit the above chart.

## Set tick value distance

You can set the distance between tick values, using the following attributes:

-  Specify the distance (in pixels) between tick marks and their corresponding values, using the `tickValueDistance` attribute.

-  Set the value of the `manageValueOverLapping` attribute to `1`, to automatically eliminate overlapping of tick values and trend values.

-  Set the value of the `autoAlignTickValues` attribute to `1`, to force the gauge to automatically place tick values. That way, you can reduce overlapping of the tick values with the gauge.

Refer to the code below:

```json
{
   "chart": {
      "autoAlignTickValues": "1",
      "manageValueOverLapping": "1",
      "tickValueDistance": "25"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-27.js %}

Click [here](http://jsfiddle.net/fusioncharts/hh646/) to edit the above chart.

## Add trend points

Trend points are elements that you use to show a target value on the gauge. For example, while plotting the average customer satisfaction score for the current year, you might also want to show the average score for the last year for comparison. You can show this average score as a trend point on the gauge.

Add a simple trend point to the gauge and customize it, using the following attributes:

-  Specify the starting value for the trend point using the `startValue` attribute.

-  Display a label for the trend point, using the `displayValue` attribute. Note that if you do not specify a label, then the chart will display the data value at the trend point.

-  Specify whether the trend point value will be rendered inside the gauge, by setting the value of the `valueInside` attribute to `1`.

-  Specify the hex code of the color to be used to render the trend point and its associated text, using the `color` attribute.

-  Specify the thickness of the trend point (in pixels) using the `thickness` attribute.

-  Specify the radius of the trendpoint (in pixels) using the `radius` attribute.

-  Specify whether you want to render the trend point as a dashed line, by setting the value of the `dashed` attribute to `1`.

-  Specify the length of each dash (in pixels), if the trend point will be rendered as a dashed line, using the `dashLen` attribute.

-  Specify the gap between each dash (in pixels), if the trend point will be rendered as a dashed line, using the `dashGap` attribute.

-  Specify the distance (in pixels) between a trend line and its corresponding value, using the `trendValueDistance` attribute.

Note: These attributes belong to the `point` object, which in turn belongs to the `trendpoints` object.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "trendpoints": {
        "point": [{
            "startValue": "62",
            "displayValue": "Last Year",
            "color": "#0075c2",
            "thickness": "2",
            "radius": "180",
            "innerRadius": "82",
            "alpha": "100",
            "valueInside": "1",
            "dashed": "1",
            "dashLen": "2",
            "dashGap": "1",
            "trendValueDistance": "3"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-28.js %}

Click [here](http://jsfiddle.net/fusioncharts/M5u7c/) to edit the above chart.

## Show trend markers

For each trend point, you can show a triangular marker and customize it. Use the following attributes to do so:

-  Set a marker to be rendered for each trend point on the gauge, by setting the value of the `useMarker` attribute to `1`.

-  Specify the hex code of the color to be used to render the marker, using the `markerColor` attribute.

-  Specify the hex code of the color to be used to render the border of the marker, using the `markerBorderColor` attribute.

-  Specify the radius (in pixels) of the marker, using the `markerRadius` attribute.

-  Specify the tooltip text to be rendered when you hover the mouse pointer over the marker, using the `markerTooltext` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "trendpoints": {
        "point": [{
            "startValue": "62",
            "useMarker": "1",
            "markerColor": "#F1f1f1",
            "markerBorderColor": "#666666",
            "markerRadius": "10",
            "markerTooltext": "Previous year's average was 62"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-29.js %}

Click [here](http://jsfiddle.net/fusioncharts/MEtf5/) to edit the above chart.

## Create a trend arc

You can create trend-arcs to represent a range of values, instead of a single value. Use the following attributes to do so:

-  Specify the starting value for the trend arc, using the `startValue` attribute.

-  Specify the ending value for the trend arc, using the `endValue` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "trendpoints": {
        "point": [{
            "startValue": "80",
            "endValue": "100"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-30.js %}

Click [here](http://jsfiddle.net/fusioncharts/CLRvS/) to edit the above chart.

## Customize a trend arc

Use the following attributes to customize the functional and cosmetic properties of a trend arc:

-  Specify the radius (in pixels) of the trend arc, using the `radius` attribute.

-  Specify the radius (in pixels) of the inner side of the arc, using the `innerRadius` attribute.

-  Specify the hex code of the color to be used to render the trend arc, using the `color` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the trend arc using the `alpha` attribute.

-  Hide the border around the trend arc by setting the value of the `showBorder` attribute to `1`.

-  Specify the hex code of the color to be used to render the trend arc border, using the `borderColor` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "trendpoints": {
        "point": [{
            "startValue": "80",
            "endValue": "100",
            "radius": "180",
            "innerRadius": "5",
            "displayValue": "Target",
            "color": "#0075c2",
            "alpha": "40"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-31.js %}

Click [here](http://jsfiddle.net/fusioncharts/dc4kX/) to edit the above chart.

## Configure angles and origins

Using FusionCharts Suite XT, you can draw the angular gauge from virtually any start angle to any end angle and in both directions.

## Create gauges with `chart` object attributes

Use the following attributes of the `chart` object to create charts of various angles and from various starting points:

-  Set the angle (between `-360` and `360`) at which the gauge will start drawing, using the `gaugeStartAngle` attribute.

-  Set the angle (between `-360` and `360`) at which the gauge will finish drawing, using the `gaugeEndAngle` attribute.

-  Manually specify the x - coordinate at which the center of the gauge will be placed, using the `gaugeOriginX` attribute.

-  Manually specify the y-coordinate at which the center of the gauge will be placed, using the `gaugeOriginY` attribute. Note that the `gaugeOriginX` and `gaugeOriginY` attributes are useful when you design gauges with small angles or use custom objects to draw certain objects, and need to set the exact center position.

-  Specify the outer radius (in pixels) for the color range scale, using the `gaugeOuterRadius` attribute.

-  Specify the inner radius (in pixels) for the color range scale, using the `gaugeInnerRadius` attribute. Note that this attribute can take two types of values, either as exact pixels, or as a percentage of the outer radius.

## Configure gauge angles

The angular gauge processes angles as shown in the images below:

![Angular-Angle](/images/angular-angles-2.jpg)

You can represent each point in the circle by two angles - a positive angle and a negative angle, to plot bi-directional angular gauges. To flip the gauge, all you need to do is swap the default values of the `gaugeStartAngle` and the `gaugeEndAngle` attributes.

Refer to the code below:

```json
{
   "chart": {
      "gaugeStartAngle": "0",
      "gaugeEndAngle": "90"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-32.js %}

Click [here](http://jsfiddle.net/fusioncharts/gfp1wve3/) to edit the above chart.

> When specifying the start and end angles for gauges, always make sure the difference between start and end angle is not more than 360 degrees. Otherwise, the gauge will not behave as intended.

## Allow automatic positioning of gauge origins

Based on the start and end angle measures of the gauge, the x and y center points (origins) of the gauge are automatically positioned. You can change the values of the startAngle and the endAngle attributes to alter the position of the origin for each gauge.

Refer to the code below:

```json
{
   "chart": {
      "gaugeStartAngle": "45",
      "gaugeEndAngle": "135"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-33.js %}

Click [here](http://jsfiddle.net/fusioncharts/dh2h5drx/) to edit the above chart.

> Along with positioning the origins, a JavaScript angular gauge also scales itself to best-fit within the available space.

## Manually set gauge origins

You can manually configure the gauge origins if the automatic adjustment of the origins based on the start and end angle measures does not meet your requirement. To manually set gauge origins, you will need to explicitly set your required values for the `gaugeOriginX` and `gaugeOriginY` attributes.

Refer to the code below:

```json
{
   "chart": {
      "gaugeOriginY": "230"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-34.js %}

Click [here](http://jsfiddle.net/fusioncharts/o4cfv31a/) to edit the above chart.

> In the above example, only the `gaugeOriginY` attribute has been modified, to shift the origin upward, you can do similar adjustments with `gaugeOriginX` also.

## Configure gauges for dynamic resizing

To enable the dynamic resizing feature, you need to :

-  Set the gauge size in percentage.

-  Set the container dimensions such that it can resize dynamically when the browser resizes or due to other changes taking place in the page (like when an element is added/removed or due to user interaction).

Whenever you resize the container element, the gauge can also dynamically resize itself instantly. Use the following attributes to enable this feature:

-  Specify whether the gauge will dynamically resize when its parent container is resized, by setting the value of the `manageResize` attribute to `1`. Note that this attribute is not applicable when you set the `autoScale` attribute to `0`.

-  Specify the original width and height of the chart and then set the `autoScale` attribute to 1, if you've defined chart parameters (gauge origin, coordinates, etc.) using a specific chart size and now want to scale the chart to a different size.

Refer to the code below:

```json
{
    "chart": {
        "manageResize": "1"
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "trendPoints": {
        "point": [
            ...
        ]
    },
    "annotations": {
        "autoscale": "1",
        "groups": [{
            ...
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-35.js width:400px height:300px display:inline-block %}

Click [here](http://jsfiddle.net/fusioncharts/wLLzwssf/) to edit the above chart.

In the above example, you can see the chart's size set in percentage and the `manageResize` attribute set to `1` (true) in the chart object of the JSON data. These make the gauge capable of re-calculating the space available and adjusting to its new surroundings, whenever you modify the dimensions of the parent container.

Two input fields have been rendered with the gauge to enter the target width and height for the container element. If you click the 'Resize' button after entering values in both fields, the width and the height of the container element will be resized based on your inputs. As soon as the dimensions of the container element change, the gauge will automatically resize itself.

> When you dynamically resize, the gauge and all its elements will be scaled proportionally and work perfectly only for constrained resizing, i.e., both width and height of the gauge will resize in proportions. If you do not scale the chart in proportions, the gauge will scale in the least possible proportion and leave empty space all around.

## Dynamically resize gauges with manual values for elements

You can configure the various functional and cosmetic properties of gauge elements by manually specifying values for each, in order to dynamically resize them. For example, you can configure the gauge [radius](/chart-guide/gauges-and-widgets/angular-gauge#configure-dials-22), the [dial radius](/chart-guide/gauges-and-widgets/angular-gauge#configure-dials-22), the [tick value distance](/chart-guide/gauges-and-widgets/angular-gauge#showhide-tick-marks-and-tick-values-32), the [gauge origin](/chart-guide/gauges-and-widgets/angular-gauge#configure-angles-and-origins), etc. Ideally, you should set these values based on specific width and height dimensions for the gauge. You can name these dimensions as the original width and the original height of the gauge.

By default, a gauge set with manually-specified positions and size, when rendered initially, draws itself with all the elements based on the values provided in the JSON/XML. It does not scale its coordinates and other gauge elements. When you resize the gauge, it scales the manually specified values or coordinates based on the dimensions of the initially rendered gauge, that is, the width and the height of the gauge when rendered for the first time. Thus, scaling of the various manually configured elements of a gauge will vary and may create problems when the initial dimensions of the gauge are different from the original width and height of the gauge.

When a gauge is rendered initially using the original width and original height, and then resized dynamically to different dimensions, the gauge can automatically recalculate and scale these manual values to fit all the gauge elements to the new size.

However, you will see that when the dimensions of the initially rendered gauge are NOT the same as the original width and original height (based on which the other parameters have been defined):

1. The initially rendered gauge and all its elements do not scale and fit to the current dimensions of the gauge.

2. On further resizing the gauge, all its elements scale based on the dimensions of the initially rendered gauge.

> This scenario is apparent in applications that have containers with dynamic dimensions like web parts, panels, etc. These containers are not set with fixed dimensions. Rather, they derive their dimensions based on various conditions like the space available, the number of rows and columns, etc.

This may lead to either a cropped gauge or a gauge with lots of extra space, and even when you further resize the container, the gauge will not fit into the given space and will always remain cropped or spaced.

To take care of this scenario, you need to pass the original width and height (as values to the attributes `origW` and `origH`, respectively) to the gauge. On receiving the original width and height, the gauge will check them against the current dimensions and scale everything accordingly.

The `origW` and `origH`attributes function as follows:

-  Specify the original width of the gauge using the `origW` attribute, if you want to dynamically resize the chart. It refers to the width based on which the various elements of the gauge have been manually configured.

-  Specify the original height of the gauge using the `origH` attribute, if you want to dynamically resize the chart. It refers to the height based on which the various elements of the gauge have been manually configured.

Refer to the code below:

```json
{
    "chart": {
        "origw": "390",
        "origh": "300",
        "gaugeOriginX": "195",
        "gaugeOriginY": "280",
        "gaugeOuterRadius": "200",
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            "valueX": "8.9",
            "valueY": "10.1"
        }]
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-36.js %}

Click [here](http://jsfiddle.net/fusioncharts/v5f4szq0/ '@open-newtab') to edit the above chart.

The sample given above is calculated with a original width of 390 pixels and original height of 300 pixels. You can also see that a host of attributes (`gaugeOriginX`, `gaugeOriginY`, and `gaugeOuterRadius`, as well as `valueX` and `valueY` on the `dial` object) have been defined with fixed coordinate values. Now, if you have to render this chart with any values other than 390 pixels wide and 300 pixels tall, several of the gauge elements may not be positioned as intended. To solve this issue, you can define `origw` and `origh` attributes to `390` and `300` respectively, in the `chart` object, and provide a different width and height (`300` and `280`) for the chart. The chart will still appear as expected. In a similar way, you can also dynamically scale and resize the annotations present in a gauge.

> The dynamic resizing feature will not work if you have set **"autoScale": "0"**.

## Set Alert Manager

Gauges can be set to update in real time, either programmatically or by polling the server for data. To know more about how to configure a real-time gauge, click [here](/chart-guide/gauges-and-widgets/angular-gauge#create-real-time-angular-gauge).

Real-time gauges can be made more intuitive by setting an alert that indicates when a defined set of threshold data values are reached.

For example, if you are monitoring the CPU utilization on the server and want to display a warning message when it goes above 70%, you can set an alert using the **Alert Manager**.

An `alert` object contains the following attributes:

-  Specify the `minValue` attribute to set the minimum value for the alert range. For example, to define an alert for the range 0 - 50, `minValue` will be `0`(inclusive).

-  Specify the `maxValue` attribute to set the maximum value for the alert range. For example, to define an alert for the range 0-50, `maxValue` will be 50 (inclusive).

-  `action` attribute is to used when the value on the gauge matches an alert range. Possible values for the this attribute are:

   -  `CALLJS` – Calls a JavaScript function that is specified in the `param` attribute (explained below).
   -  `SHOWANNOTATION` – Displays an annotation item or a group. The group id of the annotation is specified in `param` attribute.

-  `param` attribute is used to set the action of the parameter depending on the type of action:

   -  `CALLJS` - takes the name of JavaScript function and its parameters
   -  `SHOWANNOTATION` - takes the ID of the annotation items or a .

Due to some security policies, usage of `eval` has been removed and some of the features of param attribute has been deprecated:

-  Special characters like `(`, `)`, `-` and `,` cannot be passed as a parameter while function call.
-  Multiple functions cannot be passed after `param` attribute.
-  A function cannot be defined after `param` attribute.

Let's create a sample to show the server CPU utilization of **akme.com**. The angular gauge is configured with three color-coded bands to identify levels of utilization of the server. When the CPU utilization is over 70%, an alert is set to display a warning message. The message to be displayed is passed to the `showAlert()` JavaScript method.

The code snippet to set up the alert manager is as follows:

```
chart {
  ...
  "alerts": {
    "alert": [{
      // set the threshold range
      "minvalue": "0",
      "maxvalue": "50",
      // action on reaching the threshold range, JavaScript function showAlert()
      "action": "callJS",
      "param": "showAlert('Current server CPU Utilization is low');"
    }]
  }
}
```

An angular gauge configured to do this is shown below:

{% embed_chart gauges-and-widgets-angular-example-48.js %}

Click [here](http://jsfiddle.net/fusioncharts/k6he33en/) to edit the above chart.

The container element for `alert` is `alerts`, which is a child of the `chart` element. `alert` is an array of objects where every object defines a threshold range (alert range). One of the following actions can be specified with any alert range:

-  Call a JavaScript function

-  Show a predefined annotation

> Make sure that the alert ranges do not overlap.

## Use JS API function resizeTo() to resize charts

Using the FusionCharts JavaScript API, you can resize an existing chart using the resizeTo() function. You can pass the new width and height of the chart in pixels or percent parameters to the function, or change the width and height property of the chart object and then call the function. The API Method signature for the function is - resizeTo(width:String, height:String).

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "annotations": {
        "groups": [{
            ...
            "items": [{
                ...
            }]
        }]
    }
},
"events": {
    "initialized": function(evtObj, argObj) {
        var scoreArray = [],
            score,
            speedScore,
            flag,
            diff;
            evtObj.sender.resetInterval = setInterval(function() {
                var i,
                    percent,
                    num = 30;
                score = 40 +
                    parseInt(Math.floor(Math.random() * 170));
                if (!speedScore) {
                    speedScore = score;
                }
                diff = (score - speedScore);

                for (i = 0; i < 5; i++) {
                    percent = num - (i * 5);
                    scoreArray[i] = diff * (percent / 100);
                }
                flag = 0;

            }, 1000);
            evtObj.sender.changeInterval = setInterval(function() {
                if (speedScore && diff) {
                    speedScore += scoreArray[flag];
                    flag += 1;
                    evtObj.sender.feedData && evtObj.sender.feedData("value=" + speedScore);

                }
            }, 2000);
    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.resetInterval);
        clearInterval(evtObj.sender.changeInterval);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-37.js %}

Click [here](http://jsfiddle.net/fusioncharts/aesajvL0/) to edit the above chart.

## Create an editable angular gauge

You can use the angular gauge in FusionCharts Suite XT as an input control, to visually drag and change the value of the dial. Once you drag the dial in a particular direction, the gauge can retrieve the updated value using FusionCharts' events. However, in order to do so, you need to convert any normal gauge to an editable one.

### Convert a normal gauge to an editable gauge

You can convert a normal angular gauge to an editable gauge, by either converting all its dials to editable ones, or just specific ones. Specify whether the gauge will be rendered as editable, by setting the value of the `editMode` attribute to `1`. If a gauge has multiple dials and you want to make all of them editable, define the `editMode` attribute for the `chart` object. If a gauge has multiple dials and you only want to make specific dials editable, define the `editMode` attribute as a part of the `dial` object, which belongs to the `dials` object.

To make all of the dials editable, refer to the code below:

```json
{
   "chart": {
      "editMode": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-38.js %}

Click [here](http://jsfiddle.net/fusioncharts/6benn62w/) to edit the above chart.

To make only one of the dials editable, refer to the code below:

```json
{
    "chart": {
        ...
    },
    "colorRange": {
        "color": [
            ...
        ]
    },
    "dials": {
        "dial": [{
            ...
            "editMode": "1"
        }, {
            ...
        }]
    },
    "annotations": {
        ...
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-39.js %}

Click [here](http://jsfiddle.net/fusioncharts/zdf4kym8/) to edit the above chart.

## Create an editable gauge in the earlier versions

If you are using an earlier version of FusionCharts Suite XT, you might benefit from this brief recap of how to create an editable gauge.

Once you change the value of the gauge, the latter automatically calls the `FC_ChartUpdated(DOMId)` JavaScript function.

You need to define this method in your HTML page and then write the JavaScript code to retrieve the data using `getData(index)` or `getDataForId(id)` method as shown below:

## Create real time angular gauge

The angular gauge is a real time chart, which can continuously request new data from the server and display the same, without involving any page refreshes. The chart initializes itself, loads new data periodically and auto-updates to reflect the current state of data. There are two different ways in which you can update the angular gauge. One way directly polls data from the server, while the other retrieves data using JavaScript API methods.

## Stream data

When you use the real time data format, you need to create a data provider (primarily a server side script) at your server. Next, need to specify the URL of this data provider and the time interval (in seconds), after which the gauge will look for new data. The data provider must then output the new data in the real time data format.

## Real time data format

The real time data format for the angular gauge depends on:

-  Whether you've multiple dials on the chart or a single dial.

-  Whether you want to provide data by pointer numerical index or by their defined IDs, if you have multiple pointers.

-  Commands for the chart - like stop update.

### Update a single pointer

In the simplest form, if you're looking to update the value of a gauge, you need to output the data in following format:

```json
&value=34
```

Here, the output is a single value, 34. So, when the gauge will read this value, it will update itself by setting its value to 34 (if a data range is provided by the gauge, it will first check the value to verify whether it falls within the defined range).

### Update multiple pointers

If you have multiple dials defined, you can update them all at one go, as shown in the following output, from the real time data provider page:

```json
&value=34|25|54
```

Here, you can see 3 values specified in the real time update. So, assuming that you have 3 dials or pointers defined in the chart, each one of them will take the values in sequence and update itself. Therefore, the first dial will now show 34, second one will show 25, and the third one will show 54. The sequence of dials is determined by the order in which they are defined in the JSON/XML data.

### Update using named id of the dial/pointer

Another way to update dials is to define a unique ID for each dial and then pass the updated value to the ID. To define an ID for each dial, you can use the code snippet shown below:

```json
{
    "dial": [{
        ...
        "id": "CPU1Temp"
        ...
    }, {
        ...
        "id": "CPU2Temp"
        ...
    }]
}
```

You can now update each of these named dials as shown in the following output in your real time data stream:

```json
&CPU1Temp=23 &CPU2Temp=34
```

This will change the value of dial 1 (with id as `CPU1Temp`) to 23 and dial 2 (with id as `CPU2Temp`) to 34.

### Stop real time updates from the server

If you wish to stop the gauge from polling the server for any more real time updates, you can send the following command from server to do so:

```json
&stopUpdate=1
```

After stopping the update, you can restart it by using client-side JavaScript.

## Build a real time gauge that streams data from a URL

Use the following parameters to build a real time gauge that can stream data from a URL you provide:

-  Use the `dataStreamURL` parameter to set the path of the page, which is supposed to relay real time data to the chart. If you have special characters as a part of your data stream URL, like `?` or `&`, then you need to encode the entire URL in `dataStreamURL`. This page needs to be on the same sub-domain on which you host the chart and invoke it from. Otherwise, security will restrict it from accessing the data and hence the real time feature won't work. Example: `dataStreamURL`=`'liveQuote.aspx?name=xyz'`

-  Use the `refreshInterval` parameter to specify the number of seconds after which The gauge will look for new data.

-  Use the `dataStamp` parameter to add a constantly changing data stamp to the real time data URL, so as to maintain a state. A data stamp is basically a token of information that passes with each update to the chart and back to the server, helping in easily identifying the last data sent to the gauge.

Refer to the code below:

```json
{
   "chart": {
      "dataStreamUrl": "https://static.fusioncharts.com/sampledata/php/serverLoad.php",
      "refreshInterval": "10"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-40.js %}

Click [here](http://jsfiddle.net/fusioncharts/quqyc6va/) to edit the above chart.

In the above code, note that the value of the `dataStreamURL` attribute is set to `[https://static.fusioncharts.com/sampledata/php/serverLoad.php](https://static.fusioncharts.com/sampledata/php/serverLoad.php)` and the `refreshInterval` attribute to `10`. This means after every 10 seconds the chart will fetch data from the URL and update the dials.

For example, the `serverLoad.php` data provider will return two random values within 100% in the format shown below:

```json
&value=84|14
```

Since both dials have unique IDs defined for them, the gauge can also return data in the format shown below:

```json
&fd_dial=84&clth_dial=14
```

> The data provider page needs to be on the same sub-domain on which the chart is hosted and invoked from. Otherwise, the cross-domain security might restrict data access, which means the real time feature won't work.

## Use the JavaScript API to update the gauge

You can use the powerful API collection provided into the FusionCharts JavaScript Class to implement and manage charts. Use the functions, properties, and events, as well as the highly enhance JavaScript architecture, to customize charts to your requirements.

Use the following JavaScript API methods used to configure the real time angular gauge to receive real time updates:

-  Use the `feedData(strData)` method to feed real time data to the gauge using JavaScript. The data has to be in the same format as that provided by the real time data provider page.

-  Use the `getData(dialIndex)` method to get the data for a given dial index on the gauge. The first dial is represented by index 1, the second by 2, and so on.

-  Use the `getDataForId(dialId)` method to get the data for a given dial using its defined ID.

-  Use the `setData(dialIndex, value)` method to set data for a given dial index on the chart. The first dial is represented by index 1, the second by 2, and so on.

-  Use the `setDataForId(dialId, value)` attribute to set data for a given dial using its defined ID.

-  Use the `stopUpdate()` method to stop the gauge from self-updating.

-  Use the `restartUpdate()` method to resume self-update of the gauge, if you need to stop it.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "annotations": {
        "groups": [{
            ...
            "items": [{
                ...
            }]
        }]
    }
},
"events": {
    "initialized": function(evtObj, argObj) {
        var scoreArray = [],
            score,
            speedScore,
            flag,
            diff;
            evtObj.sender.resetInterval = setInterval(function() {
                var i,
                    percent,
                    num = 30;
                score = 40 +
                    parseInt(Math.floor(Math.random() * 170));
                if (!speedScore) {
                    speedScore = score;
                }
                diff = (score - speedScore);

                for (i = 0; i < 5; i++) {
                    percent = num - (i * 5);
                    scoreArray[i] = diff * (percent / 100);
                }
                flag = 0;

            }, 1000);
            evtObj.sender.changeInterval = setInterval(function() {
                if (speedScore && diff) {
                    speedScore += scoreArray[flag];
                    flag += 1;
                    evtObj.sender.feedData && evtObj.sender.feedData("value=" + speedScore);

                }
            }, 2000);
    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.resetInterval);
        clearInterval(evtObj.sender.changeInterval);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-41.js %}

Click [here](http://jsfiddle.net/fusioncharts/vqef0be2/) to edit the above chart.

## Configure events associated with real time updates

You can use the following events to track real time updates on gauges:

### The `realTimeUpdateComplete` and `realTimeUpdateError` event

The `realTimeUpdateComplete` event is raised every time the real time gauge updates itself with new data. This event is raised in any of the following cases:

-  real time update using `datastreamURL`.

-  real time update using JavaScript API (using `setData`, `feedData`, `setDataForIdfunctions`).

-  real time update of the gauge through user interaction (through edit mode).

The event arguments provided in the advanced model that you can use are:

-  `eventObject`: This object contains the eventId, eventType, and sender properties.

-  `argumentsObject`: This object contains the values of the updated data and the previous data.

The `realTimeUpdateError` event is raised when an error occurs while performing real time update using datastreamURL.

The event arguments provided in the advanced model that you can use are:

-  `eventObject`: This object contains `eventId`, `eventType` and `sender` properties.

-  `argumentsObject`: This object contains the `httpStatus` property, which contains the HTTP Error status value as number.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dials": {
        "dial": [{
            ...
        }]
    },
    "annotations": {
        "groups": [{
            ...
            "items": [{
                ...
            }]
        }]
    }
},
events: {
    'beforeRender': function(evt, args) {
        var score = document.createElement('div');
        score.setAttribute('id', 'score-detail');
        score.innerHTML = 'Current server CPU Utilization is: <b>78</b>';
        score.style.cssText = "font-family:'Helvetica Neue', Arial; font-size: 14px; padding:10px 0 10px 20px;";
        args.container.parentNode.insertBefore(score, args.container.nextSibling);
    },
    "rendered": function(evtObj, argObj) {
        evtObj.sender.intervalVar = setInterval(function() {
            var chartIns = evtObj.sender,
                prcnt = 65 + parseInt(Math.floor(Math.random() * 10), 10);

            chartIns.feedData("value=" + prcnt);

        }, 5000);
    },
    "realtimeUpdateComplete": function(evtObj, argObj) {
        var updtObj = argObj && argObj.updateObject,
            values = updtObj && updtObj.values,
            updtValStr = values && values[0],
            updtVal = updtValStr &&
            parseFloat(updtValStr).toFixed(0),
            divToUpdate = document.getElementById("score-detail");

        divToUpdate.innerHTML = "Current server CPU Utilization is : <b>" + updtVal + "</b>";


    },
    "disposed": function(evtObj, argObj) {
        clearInterval(evtObj.sender.intervalVar);
    }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-42.js %}

Click [here](http://jsfiddle.net/fusioncharts/bmpxxz4v/) to edit the above chart.

## Troubleshoot problems with real time updates

If the chart renders initially, but does not update in real time, do the following:

-  Check whether you have specified a correct and valid path for the `dataStreamURL` attribute in the JSON/ XML data.

-  Check whether you have specified a valid value for the `refreshInterval` attribute in the data.

-  Check whether the `dataStreamURL` attribute is returning the correct data. To test this, just open your browser and run this page. It should return the data in text format.

-  Check whether the output data contains any carriage returns (new-line characters) or HTML elements. In many scripting languages, these are automatically added. If they are, you need to remove them.

-  Check whether the page that provides the incremental data update to the charts is hosted on the same sub-domain in which the charts are hosted. Otherwise, due to security restrictions, the charts won't be able to receive the updates. Due to security restrictions, charts are allowed to retrieve data only from the same subdomain in which the charts are residing. Data can only be loaded from a domain that is an exact match to the location of the charts, including sub-domains. For this reason, a chart residing at `server1.mydomain.com` will not be able to access data from `mydomain.com`.

> If you want to load data from a different domain, you can set up a proxy page at the same subdomain that will actually request data from the distant domain and then relay it to the charts. You must be able to upload and run a server-side script on a server in the same domain as the charts. In this method, a chart accesses the script, which loads the information, retrieves it and returns the information back to the chart. This method is best feasible if the server hosting the data is not under your control (for example, a public source or a web service).

While accessing any of the JavaScript API methods listed above, if you get an error like "... is not a function of ...",

-  Check whether you are calling the JavaScript API method before the chart has loaded and rendered. You need to use an event listener for the `rendered` event of the gauge to track the loading of the gauge.

-  Check whether you have provided all the required `.js` files of the FusionCharts library and no other JavaScript error is encountered.

## Log real time messages

FusionCharts Suite XT introduces a new concept of streaming and showing real time messages in the gauge using Message Logger. You can use the message logger to show necessary real time information or live error logs. Essentially, the message logger is a text based scrollable window that can listen to messages streamed from the server and then either display the messages in the message logger window or pass them to custom JavaScript functions (that you define) for further actions.

> To use message logger, make sure that you're using a real time chart from FusionWidgets XT pack - i.e., charts that update themselves in real time. Examples are real time line chart, column chart, angular gauge, linear gauges, etc.

## Set up the message logger

Use the following attributes to set up the message logger for a real time angular gauge:

-  Set the value of the `useMessageLog` attribute to `1`, to enable message logger for the gauge.

-  Use the `showRTMenuItem` attribute to specify whether the real time update-related menu items (like Start/Stop Update) will be shown in the message logger menu.

-  Use the `showRTMenuItem` attribute to specify the width of the message logger window with respect to the entire gauge width.

-  Use the `messageLogWPercent` attribute to specify the width of the message logger window with respect to the entire gauge width.

-  Use the `messageLogHPercent` attribute to specify the height of the message logger window with respect to the entire gauge height.

-  Use the `messageLogShowTitle` attribute to specify whether a title will be shown for the message logger window.

-  Use the `messageLogTitle` attribute to specify the title for the message logger, if you choose to show it. Note that the title is rendered at the top-left corner of the gauge.

-  Use the `messageLogColor` attribute to specify the hex code of the color to be applied to the entire message log window.

-  Use the `messageGoesToLog` attribute to specify whether the messages streamed to the gauge should be logged in the in-built message log window. With FusionCharts Suite XT, you can display messages streamed to the gauge in the message log window, or pass them to a JavaScript function.

-  Use the `messageGoesToJS` attribute to specify whether messages streamed from the server should be passed to a local JavaScript function.

-  Use the `messageJSHandler` attribute to specify the name of the JavaScript function that will handle the messages streamed from the server, if you choose to do so. This will help you create your custom functions to react to messages streamed from the server.

-  Use the `messagePassAllToJS` attribute to specify whether all parameters of a message envelope will be passed to the the custom JavaScript function. Note that a message envelope contains the following four parameters: `Message ID`, `Message Title`, `Message Text`, and `Message Type`. Use the `messageGoesToJS` attribute to pass only the `Message Text` parameter to the JavaScript function. Use the `messagePassAllToJS` attribute to pass all the four parameters to the JavaScript function instead.

Refer to the code below:

```json
{
   "chart": {
      "useMessageLog": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-43.js %}

Click [here](http://jsfiddle.net/fusioncharts/zqz1apsr/) to edit the above chart.

> Note: In the above gauge, you will see a small icon menu appear at the bottom-left of the gauge. The message logger, which does not appear by default, appears when you click this icon and select the `Show Log` option from the menu rendered. To close the message logger window, click the close button in the top-right corner of the window or click anywhere outside the window.

## Stream messages using the message logger

Each real time update you make to the chart can result in addition of message(s) to the logger. Use the following attributes in the real time data stream to stream messages:

-  Use the `msgId` attribute to specify a unique ID for each message. This is useful when you need to track your messages in your custom JavaScript function and need to refer to this ID to take actions. This ID is not displayed in the logger window; it is directly passed to the JavaScript function.

-  Use the `msgTitle` attribute to specify the title for the message that will be displayed in the message logger window. The title can also be passed to other JavaScript functions.

-  Use the `msgText` attribute to contain the actual text of the message that will be displayed on the message logger window. The text of the message can also be passed to other JavaScript functions.

-  Use the `msgType` attribute to specify the type for each message streamed. This is required because each message type is rendered using a different text style in the message logger to aid instant interpretation. The message types that can be streamed are `INFO`, `ERROR`, `LITERAL`, and `LINK`. `INFO` is rendered using normal font properties, `ERROR` is highlighted in a shade of red, `LITERALS` are rendered in code-like blocks, and `LINK` renders as a clickable link.

-  Use the `msgGoesToLog` attribute to specify whether the messages streamed from the server will be made visible in the message logger of the gauge. By default, this attribute takes its value from the messageGoesToLog attribute defined for the `chart` object.

-  Use the `msgGoesToJS` attribute to specify whether the messages streamed from the server should be passed to the JavaScript handler. By default, this attribute takes its value from the messageGoesToJS attribute defined for the `chart` object.

-  Use the `clearLog` attribute to specify whether you want to clear the message history currently showing in the gauge. To clear the message history, set the value of this attribute to `1` and return it as a part of the data stream.

Refer to the code below:

```json
{
   "chart": {
      "dataStreamUrl": "https://static.fusioncharts.com/sampledata/php/streamErrorMessages.php",
      "useMessageLog": "1"
   }
}
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-44.js %}

Click [here](http://jsfiddle.net/fusioncharts/6cr4u10t/) to edit the above chart.

> The messages to be logged should be provided in the real time data stream and not in the JSON data. real time data stream refers to the data provided by the URL specified in the `dataStreamURL` attribute.

### Example of a real time update

You can see an example of real time update string passed by the server to the message logger, given below:

```json
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84

```

Here, you initially have the `&value` parameter, which is absorbed by the gauge for data update. Next, you have the `msgTitle` and the `msgText` parameters which get absorbed by the message logger. You can also see that the date and the time are set as the title and the text "Server Utilization: ", along with the value `84`, are set as the message.

> If you are passing any special characters as a part of your message text or title (like &, % etc.), you will need to URL Encode the text/title.

### Change message type

You can see an example of message type `ERROR`, given below:

```json
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84&msgType=ERROR
```

The gauge will look like as shown below:

{% embed_chart gauges-and-widgets-angular-example-45.js %}

Click [here](http://jsfiddle.net/fusioncharts/uvp6nLwb/) to edit the above chart.

### Create messages with an external link

To create and render a message as a link, you need to set the URL Encoded link as the value for the `msgText` attribute and set the `msgType` to `LINK`, as shown below:

```json
&value=84&msgTitle=24-07-2014 02:22:51&msgText=http%3A%2F%2Fwww%2Efusioncharts%2Ecom%3Fid%3D34&msgType=LINK
```

In the above example, you can see that the message is linked to `[http://www.fusioncharts.com?id=34](http://www.fusioncharts.com/?id=34)`. The link is URL Encoded, as it contains special characters.

> When you specify a link as message type, the link itself is shown as the message text. You cannot change the message text.

### Link custom text

To render custom text as a link, set the `msgType` attribute to `INFO` and provide the entire link in HTML code to the `msgText` attribute, as shown below:

```json
&value=84&msgTitle=24-07-2014 02:22:51&msgText=<A HREF='http://www.fusioncharts.com?id=34'><U>Server CPU Utilization : 84</U></A>&msgType=INFO
```

After URL Encoding, the above example will look like the following:

```json
&value=84&msgTitle=24-07-2014%2002:22:51&msgText=%3CA%20HREF='http://www.fusioncharts.com?id=34'%3E%3CU%3EServer%20CPU%20Utilization%20:%2084%3C/U%3E%3C/A%3E&msgType=INFO
```

To specify a link, you need to output the HTML code for the link as `msgText`. Add the `<u>` tag in the HTML code if you want to underline the link. Finally, URL Encode the entire `msgText` parameter and then stream to the chart.

### Clear message logger from the server

You can instruct the gauge to clear the contents of the visible message logger, by sending the command shown below:

```json
&clearLog=1
```

You can also send it as a part of a message stream, as shown below:

```json
&value=84&msgTitle=24-07-2014 02:22:51&msgText=Server CPU Utilization : 84&msgType=ERROR&clearLog=1
```

This will clear all the contents of the existing message logger and start afresh.

> If you send `&clearLog=1` with each real time update, the chart will not show any messages in the logger, as the log is being cleared with each update. As such, take caution to send this command only when the log needs to be cleared.

## Handle messages in JavaScript

You have seen how to log messages streamed from the server in the in-built visual logger of the gauge. With FusionCharts Suite XT, you also have the option to pass the entire (or partial) message envelope to your custom JavaScript functions present in the page containing the gauge.

A real time angular gauge configured to handle messages using custom JavaScript functions looks like the following:

{% embed_chart gauges-and-widgets-angular-example-46.js %}

Click [here](http://jsfiddle.net/fusioncharts/8oz1e2tq/) to edit the above chart.

A simple implementation of the `myFunction` is as follows:

```json
var myFunction = function(strMsgId, strMsgTitle, strMsgText, strMsgType){
    *//This method is invoked when the chart streams real time message to JS.*
    *//Order of parameters - strMsgId, strMsgTitle, strMsgText, strMsgType*
    *//- strMsgId - The ID allotted to each message by your server-side code.*
    *//- strMsgTitle - Title given to each message by your server-side code.*
    *//- strMsgText - Text of each message.*
    *//- strMsgType - Type of each message - INFO, ERROR, LITERAL or LINK*
   alert("A message was streamed from server. \nMessage Id: " + strMsgId + "\nMessage Title: " + strMsgTitle + "\nMessage Text: " + strMsgText + "\nMessage Type: " + strMsgType);
}
```

> In place of a custom function, you can also use a native JavaScript function (for example, `alert`) to show messages streamed from the server to the client. But in that case you will only be able to show the value of the `msgText` parameter passed from the server.

## Configure message logger using JavaScript API

Using FusionCharts Suite XT, you can configure the message logger, in order to:

-  Show/hide the logger

-  Clear the logger

A real time angular gauge with its message logger configured using JavaScript API looks like the following:

{% embed_chart gauges-and-widgets-angular-example-47.js %}

Click [here](http://jsfiddle.net/fusioncharts/ng37L2qx/) to edit the above chart.

In order to manipulate the message logger using JavaScript API you need to get a reference of the gauge. Once you get the reference, you can use any of API methods on the logger of the gauge (provided you set it to `on`).

Use the following JavaScript API methods to configure the message logger:

-  Use the `showLog()` method to show the log, if it has been hidden.

-  Use the `hideLog()` method to hide the log, if it has been shown.

-  Use the `clearLog()` method to clear the contents of the log.

> Here we have used the `feedData()` method of the FusionCharts API to provide real time update. You can pass these updates from the server through data-provider pages using the `dataStreamURL` attribute. You can call the JavaScript APIs of a chart only after it has rendered. You can use the `Rendered` event listener to check if a chart has rendered.
