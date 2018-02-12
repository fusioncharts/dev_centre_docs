---
title: Configure Font Properties for a Chart | FusionCharts
description: Font properties for a chart include the font family, font size, and font color for the text rendered inside and outside the chart canvas.
heading: Fonts
breadcrumb: [["Home", "/"], ["Fonts"]]
---

Font properties include the font family, size, and color for the text rendered inside and outside the chart canvas. 

## Customize base font group

The base font group is used to customize the font properties for the text rendered on the chart itself. To customize the base fonts follow the steps given below:

* Specify the font property of the text displayed on the chart using the `baseFont` attribute.

* Set the size of the base font using the `baseFontSize` attribute.

* Specify the hex code for the color of the base font using the `baseFontColor`	attribute.

Refer to the code below:

```
{
    "chart": {
       ...
        "baseFont": "Verdana",
        "baseFontSize": "11",
        "baseFontColor": "#0066cc",
        "theme": "fint"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-fonts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/fyczLffy/) to edit the above chart.

## Outside canvas base font group

This is used to customize font properties for the text placed outside the chart canvas. To do so, follow the steps given below:

* Specify the font property of the text displayed on the chart outside the canvas using the `outCnvBaseFont` attribute.

* Set the size of the font outside the chart canvas using the `outCnvBaseFontSize` attribute.

* Specify the hex code for the color of the font outside  the chart canvas using the `outCanvBaseFontColor` attribute.

Refer to the code below:

```
{
    "chart": {
        ...
        "outCnvBaseFont": "Arial",
        "outCnvBaseFontSize": "11",
        "outCnvBaseFontColor": "#2f69a0",
        "theme": "fint"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-fonts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/61h06pfo/) to edit the above chart.

> Note that `outCanvasBaseFont` group overrides the setting of the `baseFont` group.