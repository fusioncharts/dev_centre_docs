---
title: Box and Whisker Chart | FusionCharts
description: In this section, you will be introduced to the basics of a box and whisker chart, features of a box and whisker chart and five-number summary principle for plotting data on the box and whisker chart.
heading: Box and Whisker Chart
---

> This chart type belongs to **PowerCharts XT**.

A box and whisker chart is a statistical chart that is used to examine and summarize a range of data values. It shows a frequency distribution of the data that helps in interpreting the distribution of data. It draws a statistical conclusion for the given data using the five number summary principle. The box and whisker chart is very useful to observe the mean, median, upper and lower quartiles, deviations, etc. for a huge set of data. It is used mostly used in chemical industries and weapon industries.

## Features

The distinct features of a box and whisker chart include:

- It calculates the **mean**, **median**, **upper** and **lower quartiles**, and the **minimum** and **maximum** numbers for a given set of data.

- It calculates and displays the **mean deviation**, **standard deviation**, and the **quartile deviation** for a given set of data.

- It uses an interactive legend to distinguish between two data-sets by highlighting each data-set with different color strips.

- It connects the mean and deviations of multiple sets of data by drawing a line.

- It shows **outliers** - any value which is not residing within the set of values provided.

## Five-Number Summary Principle

The `five-number summary` principle is used to plot data on the box and whisker charts. This principle helps to provide a statistical summary for a given set of numbers. It gives information about the range (minimum and maximum numbers), the center (median), and the spread (upper and lower quartiles) for the set of values provided. A simple illustration of a box and whisker plot is given below:

![box and whisker](/images/standard-charts-box-and-whisker-image-1.jpg)

> There is another principle, named as the 'Seven-number Summary' which is not used in the current implementation.

On a box and whisker chart, three out of the five summary numbers are displayed by default (median, minimum number, and maximum number). You can also opt to display the other two summary numbers (upper and lower quartiles).

Apart from the five summary numbers the box and whisker chart allows you to display the following statistical figures on the chart:

- Mean

- Mean Deviation

- Standard Deviation

- Quartile Deviation

- Outliers

To execute the five-number summary principle, we use the quartiles method. Using this method, a set of numbers is divided into four equal parts by three quartiles - Q1 (lower quartile), Q2 (median), and Q3 (upper quartile).

> There are two other methods, Deciles, and Percentiles, that are used to execute the five-number summary, which has not been used in this implementation.

We will now look at some of the formula that are used to plot data on a box and whisker chart.

> All the formula are calculated after sorting the provided set of data in ascending order.

### Mean

Mean is the usual average. The formula to calculate the mean is `ΣXi /N`, where `N` is the total number of elements in a set of data, `X` is the data points or values present in the set of data, and `i` is the position of the values.

### Median (Q2)

To find the median, you will first need to arrange the given set of data in ascending order (from the smallest to the greatest number). The element that resides in the center-most position is said to be the median. This is easy to derive when the set of data contains an odd number of elements. You can also use the formula `(N+1)/2` to find the position, where `N` is the number of elements in the given set of data. But if the set of data consists of even number of elements, you get two middle positions. The average of the two numbers residing in the middle gives the median.

### Lower Quartile (Q1)

The median divides the data into a lower half and an upper half. The lower quartile is the middle value of the lower half, i.e., the element between the minimum number and the median. The formula to find the position of the lower quartile when there is odd number of elements is `(N+1)/4`, and for even number of elements it is `N/4`.

### Upper Quartile (Q3)

The upper quartile is the middle value that resides between the maximum number and the median. The formula to find the position of the upper quartile when there is odd number of elements is `(3N+3)/4`, and for even number of elements it is `3N/4`.

### Mean Deviation

Mean deviation is the average of the absolute differences between each value and the mean. It gives us an idea of how spread out the set of values is from the center. The formula to calculate the mean deviation is `Σ|Xi - mean|/N`, where `N` is the total number of elements in a set of data, `X` is the data points or values present in the set of data, and `i` is the position of the values in the set of data. For grouped data, the formula is `Σf |Xi - mean|/N`, where `f` is the frequency of occurrence.

The process to calculate mean deviation is:

- Calculate the mean, i.e., the simple average of the given set of data

- Subtract the mean from each number

- Work out the mean (average) of those differences

### Standard Deviation

Standard deviation is the measure of the dispersion of the values in a set of data from the mean. It gives an idea of how spread out the set of values is from the mean. The more spread apart the data, the higher is the deviation. The formula to calculate the standard deviation is `√ (Σ(Xi - mean) ²/N)`, where `N` is the total number of elements in a set of data, `X` is the data points or values present in the set of data, and `i` is the position of the values in the set of data.

The process to calculate standard deviation is given below:

- Calculate the mean, i.e., the simple average of the given set of data

- Subtract the mean from each number and square the result

- Work out the mean (average) of those squared differences

- Take the square root of the whole result

### Quartile Deviation

The distance between the upper quartile and the lower quartile is called the interquartile range. Quartile deviation is half the distance between the two quartiles, i.e., half the interquartile range. It is also called as the semi-interquartile range. The formula to calculate quartile deviation is `(Q3-Q1)/2`.

## Create a chart

As an example, let's create a box and whisker chart that shows the gender-wise distribution of annual salaries. In the chart, note that the minimum and maximum values and the median will be displayed by default, whereas the upper and lower quartile values will be hidden.

To create a box and whisker chart, keep a note of the steps given below:

- Specify the chart type using the `type` attribute. To render a box and whisker chart, set `boxandwhisker2d`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

- Depending on the value passed to the `dataFormat` attribute, set the `dataSource` attribute (JSON/XML) from where the data will be fetched.

**In the JSON data**

- Set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the value for a data item using the `value` attribute within the `data` object.

- Specify the series name for the dataset using `seriesName` attribute.

- Set the `lowerBoxColor` attribute to specify the hex color code to be used to render the lower quartile box. This attribute belongs to the dataset object.

- Set the `upperBoxColor` attribute to specify the hex color code to be used to render the upper quartile box. This attribute belongs to the dataset object.

- Set the `value` attribute to specify a comma-separated list of values for each item in the dataset. This attribute belongs to the `data` object under `dataset` object.

> **Note:** Comma (`,`) is the default data-separator. Specify the data-separator explicitly using the `dataSeparator` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=boxandwhisker2d) page of box and whisker chart.

Refer to the code given below:

```javascript
{
    "chart": { },
    "categories": [{ }],
    "dataset": [{
            "seriesname": "Male",
            "lowerBoxColor": "#0075c2",
            "upperBoxColor": "#1aaf5d",
            "data": [{
                    "value": "2400,2000,2500,2800,3500,4000"
                },
            ]
        }
    ]
}

```

The box and whisker chart looks like:

{% embed_all standard-charts-box-and-whisker-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/qLvZF/) to edit the box and whisker chart.

## Add Legends to the chart

FusionCharts Suite XT supports `legend` for the box and whisker chart. Legend allows you to display single color icons for numeric numbers.

To display the legend in a box and whisker chart, the following attributes are used:

- To display the legend on your chart, set the `showLegend` attribute to `1`.

- Specify the position of legend on the chart using `legendPosition` attribute. Set the value of this attribute to `bottom` to display the legend below the chart, whereas setting the value to `right` to display the legend at the right side of the chart.

For the detailed list of attributes to configure legend, refer to the API reference page of the box and whisker chart.

Refer to the code given below:

```javascript
{
    "chart": {
    	"showLegend": "1",
    	"legendPosition": "right"
    }

}
```

A simple box and whisker chart rendered with a legend looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/qLvZF/) to edit the above chart.

## Configure the Five Summary Numbers

Let's customize the five summary numbers and their deviations plotted on a box and a whisker chart.

### Show/Hide the numbers

A box and whisker chart with three of the five summary numbers - the minimum and maximum numbers and the median - shown. To set the display of the summary numbers, follow the points given below:

- Set the `showValues` attribute to display the five number summary on the chart. The default value of this attribute is `1` which shows the values in the chart, whereas setting it to `0` will hide the values.

- To hide the minimum value (or the lower limit) of each data plot, set the `showMinValues` attribute to `0`. The default value for this attribute is `1`.

- To hide the maximum value (or the upper limit) of each data plot, set the `showMaxValues` attribute to `0`. The default value for this attribute is `1`.

- To hide the median values in the chart, set the `showMedianValues` attribute to `0`. The default value for this attribute is `1`.

- To hide the lower quartile value of each data plot, set the `showQ1Values` attribute to `0`. The default value for this attribute is `1`.

- To hide the upper quartile value of each data plot, set the `showQ3Values` attribute to `0`. The default value for this attribute is `1`.

> All the attributes listed above works when `showValues` attribute is set to `1`.

Refer to the code below:

```json
{
  "chart": {
    "showvalues": "1",
    "showMinValues": "1",
    "showMaxValues": "1",
    "showMedianValues": "1",
    "showQ1Values": "0",
    "showQ3Values": "0"
  }
}
```

A box and whisker chart with five summary numbers- the minimum and maximum numbers and the median shown looks like:

{% embed_chart standard-charts-box-and-whisker-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/q89k0bef/) to edit the above chart.

To selectively show summary numbers on the chart, firstly set the `showValues` attribute to `1`. Now set the attributes to show the respective values for summary numbers as shown below:

- Set the value of `showQ1Values` to `1` to show the value of Q1.

- Set the value of `showQ3Values` to `1` to show the value of Q3.

- Set the value of `showMedianValues` to `1` to show the value of the median.

- Set the value of `showMinValues` to `1` to show the min value.

- Set the value of `showMaxValues` to `1` to show the max value.

Refer to the code given below:

```json
{
  "chart": {
    "showQ1Values": "0",
    "showQ3Values": "0",
    "showMedianValues": "0",
    "showMinValues": "1",
    "showMaxValues": "1"
  }
}
```

You can also configure the box and whisker chart to show all five summary numbers at once.

Refer to the code given below:

```json
{
  "chart": {
    "showQ1values": "1",
    "showQ3values": "1",
    "showMedianValues": "1",
    "showMinValues": "1",
    "showMaxValues": "1"
  }
}
```

### Customize the Median (Q2)

The median for a set of numbers is represented by a line at the center of the box plot. The median acts as the separator between the upper and lower quartile boxes.

To customize the median, follow the steps given below:

- Set the `medianColor` attribute to specify the hex color code for the median line.

- Set the `medianThickness` attribute to specify the thickness of the median line.

- Set the `medianAplha` attribute to specify the transparency of the median line. This attribute takes values between `0` (transparent) and `100` (opaque).

> All these attributes can be used with the **chart**, **dataset**, and the **data** objects depending on the requirement.

Refer to the code below:

```json
{
  "chart": {
    "medianColor": "ff0000",
    "medianThickness": "5",
    "medianAplha": "70"
  }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/y3932d4e/) to edit the above chart.

### Customize the Upper and Lower Quartiles (Q1 and Q3)

The quartiles of a set of data are spread as two boxes, separated by the median. The roof of the upper quartile box represents the exact value of the upper quartile (Q3). The base of the lower quartile box represents the exact value of the lower quartile (Q1).

To customize the upper and the lower quartile points and the boxes, follow the points given below:

- Set the `upperQuartileColor` attribute to specify the hex color code for the exact value of upper quartile. the line is the roof of the upper quartile box.

- Set the `upperQuartileThickness` attribute to specify the thickness of the upper quartile line.

- Set the `upperQuartileAlpha` attribute to specify the transparency of the upper quartile line. This attribute takes values between `0` (transparent) and `100` (opaque).

```json
{
  "chart": {
    //The color of the upper quartile set to Red
    "upperQuartileColor": "ff0000",

    //The thickness of the upper quartile set to 5
    "upperQuartileThickness": "5",

    //The transparency of the upper quartile set to 70
    "upperQuartileAlpha": "70"
  }
}
```

- Set the `upperBoxColor` attribute to specify the hex color code of the upper quartile box.

- Set the `upperBoxAlpha` attribute to specify the transparency of the upper quartile box. This attribute takes values between `0` (transparent) and `100` (opaque).

```json
{
  "chart": {
    "upperBoxColor": "ff0000",
    "upperBoxAlpha": "70"
  }
}
```

- Set the `upperBoxBorderColor` attribute to specify the hex color code for the two sides of upper quartile box.

- Set the `upperBoxBorderAlpha` attribute to specify the transparency for the two sides of upper quartile box. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the `upperBoxBorderThickness` attribute to specify the thickness for the two sides of upper quartile box.

```json
{
  "chart": {
    "upperBoxBorderColor": "ff0000",
    "upperBoxBorderAlpha": "70",
    "upperBoxBorderThickness": "5"
  }
}
```

- Set the `lowerQuartileColor` attribute to specify the hex color code for the exact value of lower quartile. The line is the roof of the lower quartile box.

- Set the `lowerQuartileThickness` attribute to specify the thickness of the lower quartile line.

- Set the `lowerQuartileAlpha` attribute to specify the transparency of the lower quartile line. This attribute takes values between `0` (transparent) and `100` (opaque).

```json
{
  "chart": {
    "lowerQuartileColor": "ff0000",
    "lowerQuartileThickness": "5",
    "lowerQuartileAlpha": "70"
  }
}
```

- Set the `lowerBoxColor` attribute to specify the hex color code of the lower quartile box.

- Set the `lowerBoxAlpha` attribute to specify the transparency of the lower quartile box. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the `lowerBoxBorderColor` attribute to specify the hex color code for the two sides of lower quartile box.

- Set the `lowerBoxBorderAlpha` attribute to specify the transparency for the two sides of lower quartile box. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the `lowerBoxBorderThickness` attribute to specify the thickness for the two sides of lower quartile box.

Refer to the code below:

```json
{
  "chart": {
    "lowerBoxColor": "ff0000",
    "lowerBoxAlpha": "70",
    "lowerBoxBorderColor": "ff0000",
    "lowerBoxBorderAlpha": "70",
    "lowerBoxBorderThickness": "5"
  }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/qofgk3ts/) to edit the above chart.

### Customize the Lower and Upper Whiskers

The box and whisker chart displays the biggest number of a set of values as the upper whisker and the smallest number of the set as the lower whisker.

To customize the whiskers, follow the points given below:

- Set the `upperWhiskerColor` attribute to specify the hex color code for the upper whisker of the data plot.

- Set the `upperWhiskerThickness` attribute to specify the thickness of the upper whisker.

- Set the `upperWhiskerAlpha` attribute to specify the transparency of the upper whisker. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the `lowerWhiskerColor` attribute to specify the hex color code for the lower whisker of the data plot.

- Set the `lowerWhiskerThickness` attribute to specify the thickness of the lower whisker.

- Set the `lowerWhiskerAlpha` attribute to specify the transparency of the lower whisker. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the `whiskersLimitsWidthRatio` attribute to specify the width of the whiskers (in percentage) with respect to the width of the box plot.

Refer to the code below:

```json
{
  "chart": {
    "upperWhiskerColor": "ff0000",
    "upperWhiskerThickness": "5",
    "upperWhiskerAlpha": "70",
    "lowerWhiskerColor": "0fff00",
    "lowerWhiskerThickness": "5",
    "lowerWhiskerAlpha": "70",
    "whiskersLimitsWidthRatio": "3"
  }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/nj1u9far/) to edit the above chart.

## Configure Mean

Mean is the mathematical average for a set of numbers.

In a box and whisker chart, along with the dataset series name, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to differentiate between them and their icons easily. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

Let's customize the mean in box and whisker chart.

### Show/Hide the Mean Icon

To show the mean icon in the legend set the `showMean` attribute to `1`. This attribute will specify whether the icon representing the mean of the dataset will be shown in the legend. The default value of this attribute is `0` which hides the icon.

> The above attribute can be used with the chart, dataset and data objects.

Refer to the code given below:

```json
{
  "chart": {
    "showMean": "1"
  }
}
```

A box and whisker chart with the mean icon shown in the legend looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/o879q8hd/) to edit the above chart.

### Customize the Mean Icon

To customize the mean icon in the box and whisker chart, follow the points given below:

- Set the `meanIconRadius` attribute to specify the radius of the mean icon.

- Set the `meanIconSides` attribute to specify the sides of the mean icon.

- Set the `meanIconShape` attribute to specify the shape of the mean icon. This attribute takes one of the following two values: `polygon` or `spoke`. The default shape for the mean icon is the triangle (i.e., a polygon with three sides).

- Set the `meanIconColor` attribute to specify the hex color code of the mean icon. This attribute works only when the value of `meanIconShape` attribute is set to `polygon`.

- Set the `meanIconAlpha` attribute to set the transparency of the mean icon. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the value of the `meanIconBorderColor` attribute to the hexadecimal color code of the mean icon border color you want to display.

Refer to the code below:

```json
{
  "chart": {
    "meanIconRadius": "5",
    "meanIconSides": "3",
    "meanIconShape": "polygon",
    "meanIconColor": "#ffffff",
    "meanIconAlpha": "70",
    "meanIconBorderColor": "#ff0000"
  }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/mf3g5cgo/) to edit the above chart.

### Show Mean Icon Value

To enable the mean icon value of the box and whisker chart, set the value of `showMeanValues` attribute to **1**.

Refer to the code given below:

```javascript
{
    "chart": {
        "showMeanValues": "1"
    }
}
```

> When the above attribute is enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/mf3g5cgo/) to edit the above chart.

### Position Mean Icon Value

In a box and whisker chart, you can position the mean icon value using the `meanValuePosition` attribute. When you set the value of this attribute to `below`, the mean value is displayed below the mean icon instead of the default above.

Refer to the code given below:

```javascript
{
    "chart": {
        "meanValuePosition": "below"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-28.js %}

Click [here](http://jsfiddle.net/fusioncharts/bes674uc/) to edit the above chart.

### Set Hover Effect of Mean Icon

You can specify the shape (`polygon` or `spoke`) that should be visible when the mean icon is hovered over. Use the `meanIconShape` attribute to do so. Set the number of sides or spokes using the attribute `meanIconSides`.

Refer to the code given below:

```javascript
{
    "chart": {
        "meanIconSides": "5",
        "meanIconShape": "spoke"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-33.js %}

Click [here](http://jsfiddle.net/fusioncharts/cw8jvsr9/) to edit the above chart.

### Draw Mean Connectors

For multiple data plots, you can draw a line to connect the mean values of each data plot. To draw the mean connectors, set the value of `drawMeanConnector` attribute as `1`. It specifies whether a connector should be drawn to connect the mean for multiple sets of data. The default value of this attribute is `0`.

> The color that is used to render the mean deviation icon is also used to render the connecting line.

Refer to the code given below:

```json
{
  "chart": {
    "drawMeanConnector": "1"
  }
}
```

A box and whisker chart rendered with mean connectors looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/tr248p89/) to edit the above chart.

### Connect Null Data

If you use the `showMean` attribute with the `data` object and set it to `0`, the chart will not display the mean icon for that particular set of data. In this case, the missing mean deviation is considered as null data. Consequently, the mean connectors will skip this null data and draw a continuous connector.

In the chart shown below, a connector is drawn connecting the mean deviation icons of the first and the third data plots, skipping the second data plot. Set the value of `connectNullData` attribute as `1` to connect the null data using mean connectors. This will ignore the null values and draw a continuous connector line. This attribute is applicable for the mean icon and all the other deviation icons.

Refer to the code given below:

```json
{
  "chart": {
    "connectNullData": "1"
  }
}
```

A box and whisker chart with null data connected using mean connectors is given below:

{% embed_chart standard-charts-box-and-whisker-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/rzj8s0xL/) to edit the above chart.

Click here to edit the above chart.

## Configure Mean Deviation

Mean deviation is the average of distances between each of the values and the mean. It gives us an idea of how spread out is the set of values from the center.

In a box and whisker chart, along with the dataset series name, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to differentiate between them and their icons easily. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

Let's move ahead and customize the mean deviation of box and whisker chart.

### Show/Hide the Mean Deviation Icon

A box and whisker chart with the mean deviation icon can be shown in the legend box using `showMD` attribute. This attribute when set to `1`, will show the icon representing the mean deviation value of the dataset in the legend.

Refer to the code given below:

```json
{
  "chart": {
    "showMD": "1"
  }
}
```

The box and whisker chart with mean deviation icon shown in the legend box looks like:

{% embed_chart standard-charts-box-and-whisker-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/cyzLx5v3/) to edit the above chart.

### Customize the Mean Deviation Icon

To customize the mean deviation icon, follow the points given below:

- Set the `mdIconRadius` attribute to specify the radius of the mean deviation icon.

- Set the `mdIconSides` attribute to specify the sides of the mean deviation icon.

- Set the `mdIconShape` attribute to specify the shape of the mean deviation icon. This attribute takes one of the following two values: `polygon` or `spoke`. The default shape for the mean deviation icon is the triangle (i.e., a polygon with three sides).

- Set the `mdIconColor` attribute to specify the hex color code of the mean deviation icon.

- Set the `mdIconAlpha` attribute to set the transparency of the mean deviation icon. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the value of the `mdIconBorderColor` attribute to the hexadecimal code of the mean deviation icon border color you want to display.

Refer to the code below:

```javascript
{
    "chart": {
        "mdIconRadius": "5",
        "mdIconSides": "5",
        //"mdIconShape": "triangle"
        "mdIconColor": "#fff00f",
        "mdIconAlpha": "70",
        "mdIconBorderColor": "#ff0000"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/t24afhfs/) to edit the above chart.

### Show Mean Deviation Icon Value

To enable the mean deviation icon value of the box and whisker chart, set the value of `showMDValues` attribute to **1**.

Refer to the code given below:

```javascript
{
    "chart": {
        "showMDValues": "1"
    }
}
```

> When the above attribute is enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-24.js %}

Click [here](http://jsfiddle.net/fusioncharts/xy8tdk0j/) to edit the above chart.

### Position Mean Deviation Icon Value

In a box and whisker chart, you can position the mean deviation icon value using the `MDValuePosition` attribute. When you set the value of this attribute to `below`, the mean deviation value is displayed below the mean deviation icon instead of the default above.

Refer to the code given below:

```javascript
{
    "chart": {
        "MDValuePosition": "below"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-29.js %}

Click [here](http://jsfiddle.net/fusioncharts/znmLdera/) to edit the above chart.

### Draw Mean Deviation Connectors

For multiple data plots, you can draw a line to connect the mean deviation icons of each data plot. To draw the mean connectors, set the value of `drawMDConnector` attribute as `1`. It specifies whether a connector should be drawn to connect the mean deviation for multiple sets of data. The default value of this attribute is `0`.

> The color that is used to render the mean deviation icon is also used to render the connecting line.

Refer to the code given below:

```json
{
  "chart": {
    "drawMDConnector": "1"
  }
}
```

A box and whisker chart rendered with a mean deviation connector looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/7j79Lpna/) to edit the above chart.

### Connect Null Data

If you use the `showMD` attribute with the `data` object and set it to `0`, the chart will not display the mean deviation icon for that particular set of data. In this case, the missing mean deviation is considered as null data. Consequently, the mean deviation connectors will skip this null data and draw a continuous connector.

In the chart shown below, a connector is drawn connecting the mean deviation icons of the first and the third data plots, skipping the second data plot. Set the value of `connectNullData` attribute as `1` to connect the null data using mean connectors. This will ignore the null values and draw a continuous connector line. This attribute is applicable for the mean icon and all the other deviation icons.

Refer to the code given below:

```json
{
  "chart": {
    "connectNullData": "1"
  }
}
```

## Configure Standard Deviation

Standard deviation is the measure of the variation or the dispersion of a set of data from the mean. It gives an idea of how spread out is the set of data from the mean.

In a box and whisker chart, along with the dataset series name, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to differentiate between them and their icons easily. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

Let's move ahead and customize the standard deviation of box and whisker chart.

### Show/Hide the Standard Deviation Icon

A box and whisker chart with the standard deviation icon can be shown in the legend box using `showSD` attribute. This attribute when set to `1`, will show the icon representing the standard deviation value of the dataset in the legend.

Refer to the code given below:

```json
{
  "chart": {
    "showSD": "1"
  }
}
```

A box and whisker chart with the standard deviation icon shown in the legend box looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/vLp55w9L/) to edit the above chart.

> To show/hide individual standard deviation values, use the `showSD` attribute with the `data` object, whhich belongs to the `dataset` object.

### Customize the Standard Deviation Icon

To customize the standard deviation icon, follow the points given below:

- Set the `sdIconRadius` attribute to specify the radius of the standard deviation icon.

- Set the `sdIconSides` attribute to specify the sides of the standard deviation icon.

- Set the `sdIconShape` attribute to specify the shape of the standard deviation icon. This attribute takes one of the following two values: `polygon` or `spoke`. The default shape for the standard deviation icon is the triangle (i.e., a polygon with three sides).

- Set the `sdIconColor` attribute to specify the hex color code of the standard deviation icon.

- Set the `sdIconAlpha` attribute to set the transparency of the standard deviation icon. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the value of the `sdIconBorderColor` attribute to the hexadecimal code of the standard deviation icon border color you want to display.

Refer to the code given below:

```javascript
{
    "chart": {
        "sdIconRadius": "5",
        "sdIconSides": "5",
        "sdIconShape": "triangle",
        "sdIconColor": "#ff000f",
        "sdIconAlpha": "70",
        "sdIconBorderColor": "#ff0000"
    }
}
```

A box and whisker chart with the standard deviation icon shown in the legend box looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/u47qrcte/) to edit the above chart.

### Show Standard Deviation Icon Value

To enable the standard deviation icon value of the box and whisker chart, set the value of `showSDValues` attribute to **1**.

Refer to the code given below:

```javascript
{
    "chart": {
        "showSDValues": "1"
    }
}
```

> When the above attribute is enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-25.js %}

Click [here](http://jsfiddle.net/fusioncharts/x5L4fdju/) to edit the above chart.

### Position Standard Deviation Icon Value

In a box and whisker chart, you can position the standard deviation icon value using the `SDValuePosition` attribute. When you set the value of this attribute to `below`, the standard deviation value is displayed below the standard deviation icon instead of the default above.

Refer to the code given below:

```javascript
{
    "chart": {
        "SDValuePosition": "below"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-30.js %}

Click [here](http://jsfiddle.net/fusioncharts/rtg8y5em/) to edit the above chart.

### Draw Standard Deviation Connectors

For multiple data plots, you can draw a line to connect the standard deviation icons of each data plot. To draw the connectors, set the value of `drawSDConnector` attribute as `1`. It specifies whether a connector should be drawn to connect the standard deviation for multiple sets of data. The default value of this attribute is `0`.

> The color that is used to render the standard deviation icon is also used to render the connecting line.

Refer to the code given below:

```json
{
  "chart": {
    "drawSDConnector": "1"
  }
}
```

A box and whisker chart rendered with a standard deviation connector looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/7zg46mwj/) to edit the above chart.

### Connect Null data

If you use the `showSD` attribute with the `data` object and set it to `0`, the chart will not display the standard deviation icon for that particular set of data. In this case, the missing standard deviation is considered as null data. Consequently, the standard deviation connectors will skip this null data and draw a continuous connector.

In the chart shown below, a connector is drawn connecting the standard deviation icons of the first and the third data plots, skipping the second data plot. Set the value of `connectNullData` attribute as `1` to connect the null data using standard deviation connectors. This will ignore the null values and draw a continuous connector line. This attribute is applicable for the standard deviation icon and all the other deviation icons.

Refer to the code given below:

```json
{
  "chart": {
    "connectNullData": "1"
  }
}
```

## Configuring Quartile Deviation

The distance between the upper quartile and the lower quartile is called the interquartile range. Quartile deviation is half the distance between the two quartiles, i.e., half the interquartile range. It is also called the semi-interquartile range.

In a box and whisker chart, along with the dataset series name, the legend also shows the icons for mean, mean deviation, standard deviation, quartile deviation, and the outliers of every data plot. This is a concept exclusively applicable to the box and whisker chart. Each dataset is highlighted by different colors to differentiate between them and their icons easily. The legend icons are interactive; you can click the icons to show/hide the associated values on the chart.

Let's move on to customize the quartile deviation of box and whisker chart.

### Show/Hide the Quartile Deviation Icon

A box and whisker chart with the quartile deviation icon can be shown in the legend box using `showQD` attribute. This attribute when set to `1`, will show the icon representing the quartile deviation value of the dataset in the legend.

Refer to the code given below:

```json
{
  "chart": {
    "showQD": "1"
  }
}
```

A box and whisker chart with the quartile deviation icon shown in the legend box looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/grwfoLto/) to edit the above chart.

> To show/hide individual quartile deviation values, use the `showSD` attribute with the `data` object, which belongs to the `dataset` object.

### Customize the Quartile Deviation Icon

To customize the quartile deviation icon, follow the points given below:

- Set the `qdIconRadius` attribute to specify the radius of the quartile deviation icon.

- Set the `qdIconSides` attribute to specify the sides of the quartile deviation icon.

- Set the `qdIconShape` attribute to specify the shape of the quartile deviation icon. This attribute takes one of the following two values: `polygon` or `spoke`. The default shape for the quartile deviation icon is the triangle (i.e., a polygon with three sides).

- Set the `qdIconColor` attribute to specify the hex color code of the quartile deviation icon.

- Set the `qdIconAlpha` attribute to set the transparency of the quartile deviation icon. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the value of the `qdIconBorderColor` attribute to the hexadecimal code of the quartile deviation icon border color you want to display.

Refer to the code below:

```javascript
{
    "chart": {
        "qdIconRadius": "5",
        "qdIconSides": "5",
        "qdIconShape": "triangle",
        "qdIconColor": "#fff00f",
        "qdIconAlpha": "70",
        "qdIconBorderColor": "#ff0000"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/abk7goL7/) to edit the above chart.

### Show Quartile Deviation Icon Value

To enable the quartile deviation icon value of the box and whisker chart, set the value of `showQDValues` attribute to **1**.

Refer to the code given below:

```javascript
{
    "chart": {
        "showQDValues": "1"
    }
}
```

> When the above attribute is enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-26.js %}

Click [here](http://jsfiddle.net/fusioncharts/e2zywcqj/) to edit the above chart.

### Position Quartile Deviation Icon Value

In a box and whisker chart, you can position the quartile deviation icon value using the `QDValuePosition` attribute. When you set the value of this attribute to `below`, the quartile deviation value is displayed below the quartile deviation icon instead of the default above.

Refer to the code given below:

```javascript
{
    "chart": {
        "QDValuePosition": "below"
    }
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-31.js %}

Click [here](http://jsfiddle.net/fusioncharts/y1rjt7z3/) to edit the above chart.

### Draw Quartile Deviation Connectors

For multiple data plots, you can draw a line to connect the quartile deviation icons of each data plot. To draw the connectors, set the value of `drawQDConnector` attribute as `1`. It specifies whether a connector should be drawn to connect the quartile deviation for multiple sets of data. The default value of this attribute is `0`.

> The color that is used to render the quartile deviation icon is also used to render the connecting line.

Refer to the code given below:

```json
{
  "chart": {
    "drawQDConnector": "1"
  }
}
```

A box and whisker chart rendered with a quartile deviation connector looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/Lxoohu0g/) to edit the above chart.

### Connect Null data

If you use the `showQD` attribute with the `data` object and set it to `0`, the chart will not display the quartile deviation icon for that particular set of data. In this case, the missing quartile deviation is considered as null data. Consequently, the quartile deviation connectors will skip this null data and draw a continuous connector.

In the chart shown below, a connector is drawn connecting the quartile deviation icons of the first and the third data plots, skipping the second data plot. Set the value of `connectNullData` attribute as `1` to connect the null data using quartile deviation connectors. This will ignore the null values and draw a continuous connector line. This attribute is applicable for the quartile deviation icon and all the other deviation icons.

Refer to the code given below:

```json
{
  "chart": {
    "connectNullData": "1"
  }
}
```

## Configuring Outliers

Outliers are values that are numerically distant from the set of numbers provided. They are indicative values which may occur by chance or by error for any set of data provided. Outliers are not included in the statistical calculation of the five summary numbers - the minimum and maximum values, the median value, and the lower and upper quartile values. Instead, they are placed as separate points on the chart.

### Customize the Outlier Icon

To show the customization of the outlier icon, let's create a chart where the outlier values will be displayed as triangle icons above each data plot.

To customize the outlier icon, follow the points given below:

- Set the `outliers` attribute to specify the outliers or the values greater than the maximum value from the data set provided.

- Set the `outlierIconRadius` attribute to specify the radius of the outlier icon.

- Set the `outlierIconSides` attribute to specify the sides of the outlier icon.

- Set the `outlierIconShape` attribute to specify the shape of the outlier icon. This attribute takes one of the following two values: `polygon` or `spoke`. The default shape for the outlier icon is the triangle (i.e., a polygon with three sides).

- Set the `outlierIconColor` attribute to specify the hex color code of the outlier icon.

- Set the `outlierIconAlpha` attribute to set the transparency of the outlier icon. This attribute takes values between `0` (transparent) and `100` (opaque).

- Set the value of the `outlierIconBorderColor` attribute to the hexadecimal code of the outlier icon border color you want to display.

> All the attributes listed above belong to the `data` object (under `dataset` object).

Refer to the code below:

```javascript
{
    "chart": {
        ...
    },
    "data": {
        "outliers": "1",
        "outlierIconRadius": "5",
        "outlierIconSides": "5",
        "outlierIconShape": "triangle",
        "outlierIconColor": "#fff00f",
        "outlierIconAlpha": "70",
        "outlierIconBorderColor": "#ff0000"
    }
}
```

A box and whisker chart with outliers looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/y9wzdwur/) to edit the above chart.

### Show Outliers Icon Value

To enable the outliers icon value of the box and whisker chart, set the value of `showOutlierValues` attribute to **1**.

Refer to the code given below:

```javascript
{
    "chart": {
        "showOutlierValues": "1"
    }
}
```

> When the above attribute is enabled, the chart will always display the corresponding value, even if the attributes `showValue` or `showValues` is disabled or enabled.

The chart will look like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-27.js %}

Click [here](http://jsfiddle.net/fusioncharts/wxLrj4yq/) to edit the above chart.

### Position Outlier Icon Value

In a box and whisker chart, you can position the outlier icon value using the `outlierValuePosition` attribute. When you set the value of this attribute to `below`, the outlier value is displayed below the outlier icon instead of the default above.

Refer to the code given below:

```javascript
{
    "chart": {
        "outlierValuePosition": "below"
    }
}
```

{% embed_chart standard-charts-box-and-whisker-chart-example-32.js %}

Click [here](http://jsfiddle.net/fusioncharts/m0oetzyg/) to edit the above chart.

### Show Outliers beyond the Range

For the chart shown above, all outliers provided as values to the `outliers` attribute are in the range of the y-axis scale. However, there can be instances where the outlier values lie outside the range of the y-axis. In this case, by default, such outlier values are not shown on the chart to maintain the visual integrity of the data plots.

To show all outliers on the box and whisker chart, set the value of `showAllOutliers` attribute to `1`. This will show the outlier values beyond the range of the y-axis. The default value of this attribute is `0`, i.e., hidden outliers.

A box and whisker chart with outliers beyond the range of the y-axis hidden looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/v22otbqg/) to edit the above chart.

In the data above, you will see that the outlier values for Grade 3 are 72000 for male and 71000 for female. Therefore, the outliers for these values are not shown on the chart.

You can opt to show these hidden outlier values.

A box and whisker chart with outlier values shown on the chart looks like this:

{% embed_chart standard-charts-box-and-whisker-chart-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/oukgfmca/) to edit the above chart.

## Specify Visibility of Categories

In a box and whisker chart, you can specify the number of categories that should be visible on the canvas. To do so, set the value of the attribute `numVisiblePlot` to the number of categories you want to display. A scrollbar will automatically appear if there are too many plots to fit within the canvas.

Refer to the code given below:

```json
{
  "chart": {
    "numVisiblePlot": "3"
  }
}
```

A box and whisker chart with a scroll bar looks like as shown below:

{% embed_chart standard-charts-box-and-whisker-chart-example-23.js %}

Click [here](http://jsfiddle.net/fusioncharts/2h8uj470/) to edit the above chart.

## Specifying Pre-processed Data

FusionCharts v3.15.0 onwards, you can also specify pre-processed data to a box and whisker chart, instead of the value array you provided earlier. Instead, you can directly provide values of specific functions like `min`, `q1`, `median`, `q3`, and `max`, to draw a box and whisker plot. Specifying the values can reduce the number of calculations happening in the chart, and speed up rendering.

> You also need to provide specific values like `mean`, `md`, `sd`, `qd`, and `outlier` to draw the respective markers.

You can specify the following attributes directly within the `data` object:

- `min`
- `q1`
- `median`
- `q3`
- `max`
- `mean`
- `md`
- `sd`
- `outlier`

If you want to explicitly provide the data through the above attributes, you need to specify all of `min`, `max`, `q1`, `q3`, and `median` values. If you avoid mentioning any of these, it will result in a null plot. You can also mention `mean`, `sd`, `qd`, `md`, or `outlier`, to display it in the plot. Unless you mention them, you will not be able to assign attributes related to them. For instance, if you do not provide `sd`, you will not be able to `showMD`, `showMDValue`, etc.

> If you explicitly mention `min`, `max`, `q1`, `q3`, and `median` along with the value array, then the value array will be ignored.
