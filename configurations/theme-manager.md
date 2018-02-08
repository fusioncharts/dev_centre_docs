---
permalink: basic-chart-configurations/theme-manager.html
title: Theme Manager | FusionCharts
description: Theme manager can centralize the aspects for a chart, gauge or map. This section talks about visual appearance, behaviour and intelligence of a chart
heading: Theme Manager
chartPresent: true
---

When working with a large number of charts, its a good practice to maintain a consistent design across charts. However, it can become cumbersome quickly if you have to do this  per chart. It requires a significant manual effort if you want to change cosmetic properties (e.g. color ) across these charts when both the chart data and configuration is specified in the same XML file or JSON object.

Theme Manager allows you to separate the data and the cosmetic properties into different files - the data file and the theme file. The theme file can be reused for multiple charts in your application. FusionCharts Suite XT allows you to define multiple theme files for each chart. This can be useful when you have a base theme for the entire application, but wish to override a few attributes for a subset of charts.

Themes let you centralize the following aspects for a chart, gauge or map:

* Visual appearance e.g., colors, fonts, plot cosmetics

* Behavior e.g., hover effects

* Intelligence e.g., conditional colors for negative and positive data points

FusionCharts Suite XT ships with 3 themes - `zune`, `ocean` and `carbon`. You can find them in your `fusioncharts/themes/` folder.

In many of the examples in this documentation, we have used the `fint` (FusionCharts internal) theme.

## Applying themes to your charts

Including a theme file for application to your chart is very similar to including the core FusionCharts Suite XT Library. You can use the `<script>` tag as shown here to include themes.

```html
<script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.ocean.js"></script>
<script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.carbon.js"></script>
<script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.zune.js"></script>
```

## Using a theme in a chart

Shown below is a simple column 2D chart that lets you switch between each of the packaged themes.

{% embed_all configuring-your-chart-theme-manager-example-1.js %}

Using a theme in a chart is simple, you only need to specify the theme you wish to use at the `chart` level as an attribute. 



## Overriding attributes specified in themes

Themes as part of FusionCharts Suite XT follow an inheritance chain, by default when you specify a theme all the properties defined in the theme for the chart are applied to the chart. If you specify the same property with a different value in the `chart` object the theme setting is overridden.

```html
<script type="text/javascript">
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "baseFont": "Helvetica",
                "baseFontSize": "11",
                "baseFontColor": "#F6F6F6",
                "theme": "zune"
            },
            "data": [
                // data goes here
            ]
        }
    });
})
</script>

```

In the above code snippet the `baseFont` , `baseFontSize` and `baseFontColor` attributes specified at the `chart` level will override font attributes from the `zune` theme.

## Multiple themes in a single chart

FusionCharts Suite XT also lets you use multiple themes for a single chart. This is very useful if you have a base theme and are overriding only a few attributes for a subset of charts.

The attributes specified in the theme on the extreme right are given precedence over the ones on the left.

```html
<script type="text/javascript">
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "theme": "zune,ocean"
            },
            "data": [
                // data goes here
            ]
        }
    });
})
</script>
```

Here any attribute specified in the `ocean` theme will override the same attribute if specified, as part of the `zune` theme.



