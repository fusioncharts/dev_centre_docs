---
title: Data Value | FusionCharts
description: This article outlines the steps of how to configure the data values.
heading: Data Value
---

Data values are plot values, i.e. values of each data plot (line, column, bar, pie) displayed on the chart.

![Data Value]({% site.baseurl %}/images/fusioncharts-net-data-value.png)

## Customize Data Value

In FusionCharts.NET, you can customize data values in the following ways with the help of different instance methods of the `CategoryFormatting` object (which accepts a string argument) under the `Categories` object under `Data` object, which is in turn under the `visualisationObj` object:

### Show/Hide Data Value

To hide the data labels, set the value of the `ShowLabel` properties to `false`. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").ShowLabel(False);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-labels-showhide-example-1.js %}

### Set Data Label Text

Set the tooltip text for the data label as string to the `ToolText` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").ToolText("Programming Language:C#");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-text-example-2.js %}

### Customize Font Properties

Customize the font properties of the data label using the following:

* Set the font size as an integer using the `FontSize` properties.
* Set the font type as string using the `FontName` properties.
* Set the font color as hex code using the `FontColor` properties.
* Display the title as bold by setting the `Bold` properties to `True`.
* Display the title as bold by setting the `Italic` properties to `True`.

Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").FontSize(18);
visualisationObj.Data.LabelFormatting("C#").FontName("Arial");
visualisationObj.Data.LabelFormatting("C#").FontColor("#5d62b5");
visualisationObj.Data.LabelFormatting("C#").Bold(true);
visualisationObj.Data.LabelFormatting("C#").Italic(true);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-font-example-3.js %}

### Link Labels to External Resources

To link a data label to an external resource, set the value of the `LabelLink` properties to the link of the resource. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").LabelLink("https://www.fusioncharts.com/");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-link-example-4.js %}

In the above chart click on the xaxis label `C#`.  

### Set Border Color of Label

Set the border color of the label as hex code using the `BorderColor` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").BorderColor("#87919b");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-border-example-5.js %}

### Set Background Color of Label

Set the background color of the label as hex code using the `BGColor` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").BGColor("d9d9d9");
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-background-example-6.js %}

### Set Transparency of Label

Set the transparency of the label between `0` (transparent) and `100` (opaque) using the `Alpha` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("C#").Alpha(50);
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-data-label-transparency-example-7.js %}