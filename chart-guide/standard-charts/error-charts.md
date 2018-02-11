---
title: Error Charts | FusionCharts
description: An error chart is used to show the extent of uncertainty in information relative to an average value.
heading: Error Charts
breadcrumb: [["Home", "/"], ["Error Charts"]]
---

An error chart is used to show the extent of uncertainty in information relative to an average value. Error charts can be used to show the range of values that can be taken up by a data point, instead of being restricted to a point value. Errors are indicated by distinct I-shaped bars that are both positive and negative. Typically the I-bars represent the standard deviation in a measurement indicating the degree of variance observed in a data point. Error charts give a general idea of the accuracy of information or, conversely, the amount of variation in data from it's expected value.

## Use of error charts

Following are a few areas where error charts are commonly used:

* Appliance testing

* Scientific research

* Monitoring systems

* Weather analysis

* Human resource management

## Types of error charts

At present, there are three types of multi-series error charts available in the FusionCharts XT Suite:

* Error bar chart

* Error line chart

* Error scatter chart (XY plot)

## Features of error charts

The distinct features of error charts include:

* Supports both half and full error bars for positive and negative errors respectively.

* Provides options to configure error bars by changing their color, thickness, and transparency.

* Automatically customizes the width of the error bars depending on the importance of the deviation from actual data.

Now, let's move ahead and create our first error chart.

## Error Bar chart

An **error bar** chart is a type of an error chart used to show variations in data from its original value. As an example, we will create an error bar chart that compares the lifespan of systems at the Daly City Serramonte, Bakersfield Central, Garden Groove Harbour stores. 

To create an error bar chart:

* Set the `type` attribute to `errorBar2d`.

* Set the `errorValue` attribute to specify error value that will be plotted as the error bar on the chart. This attribute belongs to the `data` object, which belongs to the `dataset` object.

An error bar chart thus created looks like this:

{% embed_all standard-charts-error-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/7Z4Ha/) to edit the above error bar chart.

## Error Line chart

Now, let's create an **error line** chart that compares the estimated procurement from two suppliers. To render an error line chart, change the value of the `type` attribute from `errorbar2d` to `errorline`. The rest of the data structure remains the same.

An error line chart thus created looks like:

{% embed_all standard-charts-error-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/qutLzs7m/) to edit the above error line chart.

## Error Scatter chart

An **error scatter** chart is an XY plot chart with vertical and horizontal error bars to show a range of error values for a specific data value. As an example, we will create a simple error scatter chart that shows the revenue forecast for the next year.

To render an error scatter chart, follow the steps given below:

* Change the value of the `type` attribute from `errorline` to `errorscatter`.

* Set the `label` attribute to specify the label for the data item. The label is rendered on the x-axis. This attribute belongs to the `category`, which belongs to the `categories` object.

* The position of a datapoint is defined in the form of two numeric parameters, one from the y-axis and the other from the x-axis. When used with the `category` object, `x` attribute is used to specify the value given to each label rendered on the x-axis. When used with the `data` object, this attribute is used to specify the numeric `x` value needed to plot a data item.

* Set the `y` attribute to specify the numeric y value needed to plot a data item. This attribute belongs to the `data` object, which belongs to the `dataset` object.

* Set the `verticalErrorValue` to specify the range of possible vertical deviation values that will be plotted as the error bar on the chart. This attribute also belongs to the `data` object, which belongs to the `dataset` object.

The error scatter chart will look like:

{% embed_all standard-charts-error-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/uV3cB/) to edit the above error scatter chart.

Now, let's customize the appearance and properties of the charts.

## Customize Error charts 

You can customize the cosmetic properties of error bars to change their appearance. To customize the properties, follow the steps given below:

* Set the `halfErrorBar` attribute to specify the rendering of full or half error bars. Set this attribute to `1` to show half error bars, whereas set it to `0` (default) to render the full error bars.

* Specify the hex color code to `errorBarColor` attribute, to set the color in which you want to render the error bars.

* Set the transparency of the error bars using `errorBarAlpha` attribute. This attribute takes values between `0` (transparency) and `100` (opaque).

* Set the thickness (in pixels) of the error bars using `errorBarThickness` attribute.

* Set the width of the error bars using `errorBarWidthPercent` attribute. The width of the error bars will be dependent on the percentage of a column width.

Refer to the code given below:

```
{

	"chart": {

		"halferrorbar": "0",

		"errorBarColor": "#990000",

		"errorBarAlpha": "50",

		"errorBarThickness": "2",

		"errorBarWidthPercent": "30"

	},

}

...

```

An error bar chart, after customizing the error bars, looks like this:

{% embed_all standard-charts-error-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/fumzvpw3/) to edit the above chart.

> The configurations for the error line chart is same as that of the error bars chart.

### Cosmetics of Error Scatter chart

You can also customize the cosmetic properties of error scatter chart to change the  appearance of error bars in it. Most of the attributes are similar to the above rendered charts. To customize some more cosmetic properties of error bars in error scatter chart, follow the steps given below:

* Set the `useVerticalErrorBar` attribute to show the error bars (half/full) for the error scatter chart. Setting this attribute to `1` (default) will show them, whereas setting it to `0` will hide them.

* Set the `halfVerticalErrorBar` attribute to specify the rendering of full or half vertical error bars. Set this attribute to `1` to show half error bars, whereas set it to `0` (default) to render the full error bars.

* Specify the hex color code to `verticalErrorBarColor` attribute, to set the color in which you want to render the vertical error bars.

* Set the transparency of the vertical error bars using `verticalErrorBarAlpha` attribute. This attribute takes values between `0` (transparency) and `100` (opaque).

* Set the thickness (in pixels) of the vertical error bars using `verticalErrorBarThickness` attribute.

* Set the width (in pixels) of the vertical error bars using `verticalErrorBarWidth` attribute. 

Refer to the code below:

Refer to the code given below:

```
{

  "chart": {
      "halfverticalerrorbar": "0",
      "verticalErrorBarColor": "#990000",
      "verticalErrorBarThickness": "2",
      "verticalErrorBarAlpha": "50",
      "verticalErrorBarWidth": "8"
  }

}

...

```

An error scatter chart, after customizing the error bars, looks like:

{% embed_all standard-charts-error-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/e4rvjc37/) to edit the above error scatter chart.