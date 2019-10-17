---
title: Learn to create Pie & Doughnut Charts
description: Pie and Donut Charts are great tools for visualizing Part-to-whole relationships in a dataset. This handy guide teaches all about making pie and doughnut charts with custom attributes like labels, lines, radius, angles and much more.
heading: Pie and Doughnut Charts
---

> These chart types belong to **FusionCharts XT**.

A pie chart is a circular chart divided into sectors where the arc length of each sector, its central angle, and its area is proportional to the quantity it represents. Doughnut charts are meant to express a "part-to-whole" relationship, where all pieces together represent 100%. It is similar to a pie chart and facilities similar kinds of data analysis. FusionCharts Suite XT includes the pie and doughnut charts to plot data that needs to be shown as a percent of the whole.

## Pie 2D Chart

A pie chart displays data, information, and statistics in a 'pie-slice' format with varying slice sizes telling you how much of one data element exists. The bigger the slice, the more of that particular data was gathered.

Let's create our first pie 2D chart showcasing the split in revenue by product categories for one year.

The pie 2D chart is shown below:

{% embed_all standard-charts-pie-and-doughnut-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/hLhjhft8/) to edit the pie 2D chart.

To create a pie 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the type of chart using the `type` attribute and to render the pie 2D chart, set it as `pie2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimensions of the chart using `width` and `height` attribute.

* Set the type of data (JSON) you want to pass to the chart object using `dataFormat` attribute.

## Doughnut 2D Chart

A doughnut chart is similar to a pie chart with an area of the centre cut out, making it look like a donut, hence the name. It is used to express a part-whole relationship. It displays data in rings, where each ring represents a data series.

The doughnut 2D chart is shown below:

{% embed_all standard-charts-pie-and-doughnut-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/2Lyd4bpv/) to edit the doughnut 2D chart.

<<<<<<< HEAD
Let's create our first doughnut 2D chart showcasing the same use case for the pie chart created above.
=======
## Doughnut 3D Chart

To render a doughnut chart in 3D, change the value of the `type` attribute from `doughnut2D` to `doughnut3D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=doughnut3d) page of the doughnut 3D chart.

A doughnut chart in 3D looks like :

{% embed_all standard-charts-pie-and-doughnut-charts-example-4.js %}

Click [here](https://jsfiddle.net/fusioncharts/wYj95/) to edit the doughnut 3D chart.

Now, let's customize the appearance and properties of pie and doughnut charts.

## Configure the Animation Direction

By default, when a pie/doughnut chart is loaded for the first time or refreshed, the rendering animation is in the anti-clockwise direction.
However, FusionCharts includes the `animateClockwise` attribute that lets you animate the chart in the clockwise direction. Set the `animateClockwise` attribute to `1` to animate the chart in the clockwise direction.

Refer to the code given below:

```json
{
  "chart": {
    "animateClockwise": "1"
  }
}
```

A pie chart configured to animate in the clockwise direction is shown below.

![Pie chart](/gif/standard-charts-pie-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/g4bdb3f2/) to edit the above chart.

## Show Percent Values and Actual Values

By default, for a pie chart, the actual data values are shown on the chart as well as in the tool-tips. However, you can choose to show percent values on the chart while retaining the actual values in tool-tips.

To show percent values and actual values in your chart, follow the steps given below:

- Set the `showPercentValues` attribute to `1` to show percent values as data labels.

- Set the `showPercentInTooltip` attribute to `1` to render the text of tooltip in percentage values.

> The **showPercentValues** and the **showPercentInTooltip** attributes are applicable if you want to show percent values on the chart and actual values in tool-tips for a doughnut chart.

Refer to the code given below:

```json
{
  "chart": {
    "showPercentValues": "1",
    "showPercentInTooltip": "0"
  }
}
```

A pie2D chart configured to show percent values on the chart looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/hLhjhft8/) to edit the pie 2D chart.

## Place values inside the Pie/Doughnut chart

Starting v3.14.0, FusionCharts Suite XT allows you to place the values inside the pie/doughnut slices of a pie and doughnut chart respectively. This helps to improve the overall look as it saves the canvas area outside the chart.

You can place the value inside the slices by setting the value of the newly added attribute `valuePosition` to **inside**. The default value of `valuePosition` attribute is **outside**.

> `valuePosition` attribute can only be applied to 2D charts, i.e., pie2d and doughnut2d charts.

Refer to the code below:

```json
{
  "chart": {
    "valuePosition": "inside"
  }
}
```

`valuePosition` attribute can be applied both at `chart` and `data` level, i.e., you can set the position of the individual values of the slices.

Refer to the code below, showing the `valuePosition` attribute for a particular value:

```json
{
    "chart": {
        ...
    },
    "data": [{
            "label": "Food",
            "value": "285040"
        },
        {
            "label": "Apparels",
            "value": "146330",
            "valuePosition": "inside"
        },
        {
            "label": "Electronics",
            "value": "105070"
        },
        {
            "label": "Household",
            "value": "49100"
        }
    ]
}
```

A pie2d with `valuePosition` attribute set to **inside** (at chart level) is shown below:

{% embed_chart value-position-inside-pie-chart-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/3dts9evm/) to edit the above chart.

In a pie/doughnut charts, changing the position of the value can sometimes overlap each other due to the unavailability of space. For this scenario, a new attribute `minAngleForValue` has been introduced which sets the minimum angle of the pie below which the values will not be visible.

Refer to the code below:

```json
{
  "chart": {
    "valuePosition": "inside",
    "minAngleForValue": "75"
  }
}
```

> This attribute will only work if the `valuePosition` attribute is set to `inside`.

A doughnut chart after applying `valuePosition` and `minAngleForValue` attribute look like:

{% embed_chart value-position-inside-doughnut-chart-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/2m8fskpa/) to edit the above chart.

## Place label inside the Pie/Doughnut Chart

Now that you have already customized the position of the values of a pie/doughnut charts, let's see how to place the labels inside the pie/doughnut slices of a pie and doughnut chart respectively.

You can place the label inside the slices by setting the value of the `labelPosition` attribute to `inside**`\*\*. The default value of `labelPosition` attribute is `outside`.

> `labelPosition` attribute can only be applied to 2D charts, i.e., pie2d and doughnut2d charts.

Refer to the code below:

```json
{
  "chart": {
    "labelPosition": "inside"
  }
}
```

`labelPosition` attribute can be applied both at `chart` and `data` level, i.e., you can set the position of the individual labels of the slices.

Refer to the code below, showing the `labelPosition` attribute for a particular value:

```json
{
    "chart": {
        ...
    },
    "data": [{
            "label": "Food",
            "value": "285040"
        },
        {
            "label": "Apparels",
            "value": "146330",
            "labelPosition": "inside"
        },
        {
            "label": "Electronics",
            "value": "105070"
        },
        {
            "label": "Household",
            "value": "49100"
        }
    ]
}
```

A pie2d with `labelPosition` attribute set to `inside` (at chart level) is shown below:

{% embed_chart label-position-inside-pie-chart-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/t8r1js2y/) to edit the above chart.

In a pie/doughnut charts, changing the position of the label can sometimes overlap each other due to the unavailability of space. For this scenario, a new attribute `minAngleForLabel` has been introduced which sets the minimum scale angle to render the label of the pie/doughnut charts.

Refer to the code below:

```json
{
  "chart": {
    "labelPosition": "inside",
    "minAngleForLabel": "75"
  }
}
```

> This attribute will only work if the `valuePosition` attribute is set to `inside`.

A doughnut chart after applying `labelPosition` and `minAngleForLabel` attribute look like:

{% embed_chart label-position-inside-pie-chart-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/w834e0pb/) to edit the above chart.

## Customize the Center Label for a Doughnut Chart

For a doughnut chart, you can configure the default text that will be rendered on the center label. You can also configure the text that will be rendered on the center label when the mouse pointer is hovered over one of the doughnut slices.

To customize the center label of your chart, follow the steps given below:

- Specify the text of the center label using the `defaultCenterLabel` attribute.

- Specify the hover text of a doughnut slice using the `centerLabel` attribute.

Refer to the code given below:

```json
{
  "chart": {
    "defaultCenterLabel": "Total revenue: $60K",
    "centerLabel": "$value"
  }
}
```

A doughnut chart with the center label customized looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/wYj95/) to edit the doughnut 2D chart.

## Enable Single-Slice Slicing

By default, the pie and doughnut charts allow you to slice out multiple pie/doughnut slices at one time. You can, however, opt to enable slicing-out only one slice at a time.

By default, multiple slicing is enabled. To stop the multiple slicing set the `enableMultiSlicing` attribute to `0`.

Refer to the code given below:

```json
{
  "chart": {
    "enableMultiSlicing": "0"
  }
}
```

A doughnut chart with single-slicing enabled looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/jg4k7eny/) to edit the doughnut 2D chart.

## Disable Smart Labels and Lines

By default, pie and doughnut charts are rendered with smart labels and lines - smart labels are data labels connected to their corresponding pie slices using line segments called smart lines. Smart labels manage overlapping of labels even when a large number of labels are placed in the close vicinity. You can, however, choose to disable these smart labels.

To disable the smart labels, set `enableSmartLabels` attribute to `0`.

Refer to the code given below:

```json
{
  "chart": {
    "enableSmartLabels": "0"
  }
}
```

A pie chart with smart labels disabled looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/tom7289j/) to edit the pie 2D chart.

> If smart labels are disabled then, in case of a large number of labels, the labels might overlap each other.

## Customize Smart Lines

Apart from enabling and disabling the smart lines, you can also set the cosmetic properties of smart lines. To customize the smart lines, follow the steps given below:

- Specify the hex code for the smart line color using the `smartLineColor` attribute.

- Set the thickness of the smart lines using the `smartLineThickness` attribute.

- Set the transparency of the smart lines using the `smartLineAlpha` attribute. This attribute takes values between 0 (transparent) and 100 (opaque).

- Set the `isSmartLineSlanted` attribute to `0` to render the smart lines as straight lines.

Refer to the code given below:

```json
{
  "chart": {
    "smartLineColor": "#ff0000",
    "smartLineThickness": "2",
    "smartLineAlpha": "100",
    "isSmartLineSlanted": "0"
  }
}
```

A pie chart with the cosmetic properties of smart lines customized looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/5xoz8qh1/) to edit the pie 2D chart.

## Configuring the Label Distance and Clearance

Now, you already know how to customize the labels and the label lines in a chart. Here let's discuss how to configure the label distance of a chart.

To configure the label distance and clearance, follow the steps given below:

- Set the distance (in pixels) between the label/value from the pie/doughnut edge using the `labelDistance` attribute.

> This attribute is applicable only when smart labeling is disabled.

Refer to the code given below:

```json
{
  "chart": {
    "enableSmartLabels": "0",
    "labelDistance": "5"
  }
}
```

{% embed_chart standard-charts-pie-and-doughnut-charts-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/dmyqomdp/) to edit the pie 2D chart.

## Skip Overlap Labels

When there are too many labels in the pie/doughnut chart (which is difficult to adjust even if you are using smart labels), the labels may overlap. In this case, you have the option to skip the overlapping labels. The labels of the least significant pies will be removed. To skip the overlapping of labels set the `skipOverlapLabels` attribute to `1`.

Refer to the code given below:

```json
{
  "chart": {
    "skipOverlapLabels": "1"
  }
}
```

## Customize Pie Radius

By default, for pie/doughnut charts, the chart automatically calculates the best fit pie radius based on the data provided. However, you can choose to explicitly set the outer radius of the pie chart. Specify the outer radius of the pie/doughnut chart using `pieRadius` attribute.

> Starting v3.14.0, you can specify the radius of a pie/doughnut chart in both percentage and pixel values.

Refer to the code given below:

```json
{
  "chart": {
    "pieRadius": "50"
  }
}
```

A pie chart with the outer radius customized looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/rds15mvs/) to edit the pie 2D chart.

## Set the radius as a percent value

Now, you already know how to customize the radius of the pie/doughnut chart. Here let's discuss how to configure the radius of the pie/doughnut chart using percent values.

You can set the radius of the pie chart in percent by setting the value of `pieRadius` attribute. When you set the value of `pieRadius` in percent, the radius of the pie is calculated with respect to the chart canvas space.

Refer to the image shown below:

![Percent Value on Pie Chart](/images/percent-value-in-pie-radius.png)

Click [here](http://jsfiddle.net/fusioncharts/7g15v0nq/) to edit the above chart.

In the doughnut chart, you can apply the `pieRadius` attribute to set the radius of the upper threshold of the doughnut chart.

Refer to the image below:

![Percent Value on Doughnut Chart](/images/pie-radius-in-doughnut-chart.png)

Click [here](http://jsfiddle.net/fusioncharts/eh6rsmnt/) to edit the above chart.

To customize the inner radius of the doughnut chart, set the value of `doughnutRadius` attribute in percent.

Refer to the image below:

![Doughnut Radius on Doughnut Chart](/images/percent-value-in-doughnut-radius.png)

In the above image, the `doughnutRadius` has been set to **80%** and as you can see that the percent of the radius has been calculated with respect to the upper threshold of the doughnut chart.

> Starting v3.14.0, you can specify the radius of a pie/doughnut chart in both percentage and pixel values.

Refer to the code given below:

```json
{
  "chart": {
    "pieRadius": "90",
    "doughnutRadius": "80"
  }
}
```

Click [here](http://jsfiddle.net/fusioncharts/osezmt87/) to edit the above chart.

## Set the Starting Angle

By default, pie/doughnut charts start plotting from the 0° angle. The chart allows you to explicitly set the starting angle. Specify the `startingAngle` attribute set the starting angle for the pie/doughnut chart. The first pie slice will start plotting from the angle measure specified in this attribute.

Refer to the code given below:

```json
{
  "chart": {
    "startingAngle": "45"
  }
}
```

A pie chart with the starting angle set to 45° looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/fnpr73jw/) to edit the pie 2D chart.

## Slice a Pie/Doughnut

When a pie/doughnut chart first renders, by default, all slices are sliced-in. However, to highlight a slice, you may want to render it sliced-out when the chart first loads. `isSliced` attribute can be used to specify the pie chart will be rendered with one slice sliced-out. Set this attribute to `1` for a pie slice to render a slice sliced-out. This attribute belongs to the `data` object.

Refer to the code given below:

```json
{
  "data": {
    "label": "Household",
    "value": "49100",
    "isSliced": "1"
}
```

A pie chart rendered with one slice sliced-out looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/mcozko5a/) to edit the pie 2D chart.

## Configure the Slicing Distance

When a pie/doughnut slice is sliced-out, you can configure the distance between the center and the sliced-out slices. Set the distance (in pixels) between the center of the chart and the sliced out slices using `slicingDistance` attribute.

Refer to the code given below:

```json
{
  "chart": {
    "slicingDistance": "10"
  }
}
```

A chart with the slicing distance configured looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/c5oybzc2/) to edit the pie 2D chart.

## Configure the Bevel Effect

For pie/doughnut charts, you can configure the bevel effect to render the chart with 3D effects. Set the `use3DLighting` attribute to `1` to specify whether advanced gradients and shadow effects will be used to create better looking charts.

Set the 3D radius of the chart using `radius3D` attribute. Using this attribute the radius is set in percentage when the chart is rendered in the 3D lighting mode. It basically helps to set the bevel distance for the pie/doughnut.

Refer to the code given below:

```json
{
  "chart": {
    "use3DLighting": "1",
    "radius3D": "50"
  }
}
```

A pie chart configured for the bevel effect looks like this:

{% embed_chart standard-charts-pie-and-doughnut-charts-example-16.js %}
>>>>>>> 942402ecf6f8fc6dc2da9bb9082e730b24b451ad

The steps are the same as the pie 2D chart, the only change is the chart type.

* To create a doughnut 2D chart, set the `type` attribute to `doughnut2d`.