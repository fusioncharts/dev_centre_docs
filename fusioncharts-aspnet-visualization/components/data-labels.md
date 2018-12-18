---
title: Data Labels | FusionCharts
description: This article outlines the steps of how to configure the data labels
heading: Data Labels
---

Data labels are the names you assign to data points on the X-axis. In FusionCharts.NET, apart from setting values for the data labels, you can also apply several types of formatting to them.

Refer to the image below:

<<Image>>

## Customize Data Labels

In FusionCharts.NET, you can customize data labels in the following ways with the help of different instance methods of the `LabelFormatting` object (which accepts a string argument) under the `Data` object, which is in turn under the `visualisationObj` object:

### Show/Hide Data Labels

To hide the data labels, set the value of the `ShowLabel` properties to `false`. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").ShowLabel(False);|

```

### Set Data Label Text

Set the tooltip text for the data label as string to the `ToolText` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").ToolText("Country:India");

```

### Customize Font Properties

Customize the font properties of the data label using the following:

* Set the font size as an integer using the `FontSize` properties.

* Set the font type as string using the `FontName` properties.

* Set the font color as hex code using the `FontColor` properties.

* Display the title as bold by setting the `Bold` properties to `True`.

* Display the title as bold by setting the `Italic` properties to `True`.

Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").FontSize = 10;
visualisationObj.Data.LabelFormatting("India").FontName = "Arial";
visualisationObj.Data.LabelFormatting("India").FontColor = "f0f00f";
visualisationObj.Data.LabelFormatting("India").Bold = true;
visualisationObj.Data.LabelFormatting("India").Italic = true;

```

### Link Labels to External Resources

To link a data label to an external resource, set the value of the `LabelLink` properties to the link of the resource. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").LabelLink("localhost:CountryDetails");

```

### Set Border Color of Label

Set the border color of the label as hex code using the `BorderColor` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").BorderColor("000000");

```

### Set Background Color of Label

Set the background color of the label as hex code using the `BGColor` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").BGColor("000000");

```

### Set Transparency of Label

Set the transparency of the label between `0` (transparent) and `100` (opaque) using the `Alpha` properties. Refer to the code given below:

```
visualisationObj.Data.LabelFormatting("India").Alpha(100);

```

Refer to the chart given below:

<<Live Chart>>

