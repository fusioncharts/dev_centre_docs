---
title: Configure Font Properties for a Chart | FusionCharts
description: Font properties for a chart include the font family, font size, and font color for the text rendered inside and outside the chart canvas.
heading: Fonts
---

Font properties include the font family, size, and color for the text rendered inside and outside the chart canvas.

> To configure the font properties of the chart, we will only update the [FusionCharts Constructor](/getting-started/react/how-it-works-react#create-fusioncharts-constructor). Rest of the code remains same as shown in [Create Column Charts](/chart-guide/standard-charts/line-area-and-column-charts#column-chart-with-single-dataplot).

## Customize Base Font Group

The base font group is used to customize the font properties for the text rendered on the chart itself. To customize the base fonts follow the steps given below:

- Specify the font property of the text displayed on the chart using the `baseFont` attribute.

- Set the size of the base font using the `baseFontSize` attribute.

- Specify the hex code for the color of the base font using the `baseFontColor` attribute.

Refer to the code below:

```javascript
{
  "chart": {
    "baseFont": "Verdana",
    "baseFontSize": "11",
    "baseFontColor": "#0066cc"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-fonts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/fyczLffy/) to edit the above chart.

## Outside Canvas Base Font Group

This is used to customize font properties for the text placed outside the chart canvas. To do so, follow the steps given below:

- Specify the font property of the text displayed on the chart outside the canvas using the `outCnvBaseFont` attribute.

- Set the size of the font outside the chart canvas using the `outCnvBaseFontSize` attribute.

- Specify the hex code for the color of the font outside the chart canvas using the `outCnvBaseFontColor` attribute.

Refer to the code below:

```javascript
{
  "chart": {
    "outCnvBaseFont": "Arial",
    "outCnvBaseFontSize": "11",
    "outCnvBaseFontColor": "#633563"
  }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-fonts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/61h06pfo/) to edit the above chart.

> Note that `outCanvasBaseFont` group overrides the setting of the `baseFont` group.
