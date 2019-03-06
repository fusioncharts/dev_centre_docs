---
title: Themes | FusionCharts
description: A theme file lets you centralize the visual appearance, behavior and intelligence aspects for a time-series chart.
heading: Themes
---

FusionTime allows you to set the visual appearance, behavior and intelligence aspects of the time-series chart using **themes**.

In this article we will discuss how to apply themes to a time-series chart.

In a theme file, you can centralize the following aspects of a chart:

- Visual appearance (data plot color, font color, font size, etc.)
- Behavior (hover effects for data plots)
- Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionTime ships with the following predefined themes:

- `fusion`
- `gammel`
- `candy`

A Column 2D chart showcasing the 3 themes mentioned above is given below:

{% embed_ftChart themes-in-fusiontime %}

The code to apply theme to a time-series chart is given below:

```javascript
{
    chart: {
        "theme": "fusion"
    }
}
```

In the above code the value of the `theme` attribute has been set to `fusion`. To apply `gammel` or `candy` to your chart, set the value of `theme` attribute under `chart` object.
