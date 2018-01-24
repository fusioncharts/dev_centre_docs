---
permalink: advanced-chart-configurations/theme-manager/basics-of-theme-definition.html
title: Basics of Theme Definition | FusionCharts
description: Theme definitions are written using a tier-based structure, where each tier is used to define properties for all/specific chart, gauge, and map types.
heading: Basics of Theme Definition
chartPresent: false
---

## Prerequisites

* [Introduction to Themes](/advanced-charting/theme-manager/introduction-to-themes)
* [Applying Themes](/advanced-charting/theme-manager/applying-themes)

FusionCharts Suite XT  is shipped with a set of predefined themes. Additionally, it also lets you  [modify existing themes](/advanced-charting/theme-manager/modifying-existing-themes). However, before you can start modifying or creating themes, you need to understand the structure of a theme.

Theme definitions are written using a tier-based structure, where each tier is used to define properties for all/specific chart, gauge, and map types.

This article will walk you through the tier-based structure of  themes, the structure of each tier,  the inheritance relationship between tiers, and how you can prevent theme definitions from being overridden.

## The Tier-based Structure of a Theme
A partial definition of the __zune__ theme, as contained in the `fusioncharts.theme.zune.js` file, is given below:
```javascript
FusionCharts.register('theme', {
    name: 'zune',
    theme: {
        base: {
            chart: {
                paletteColors: '#0075c2,#1aaf5d,#f2c500',
                labelDisplay: 'auto',
                baseFontColor: '#333333',
                baseFont: 'Helvetica Neue,Arial',
                captionFontSize: '14',
                subcaptionFontSize: '14',
                subcaptionFontBold: '0',
                showBorder: '0',
                bgColor: '#ffffff',
                showShadow: '0',
                canvasBgColor: '#ffffff',
                showCanvasBorder: '0',
                showHoverEffect: '1',
    …
    …

        },
            dataset: [{}],
            trendlines: [{}]
        },
        geo: {
            chart: {
                showLabels: '0',
                fillColor: '#0075c2',
                showBorder: '1',
                borderColor: '#eeeeee',
                …
                ...
            }
        },
        pie2d: {
            chart: {
                placeValuesInside: '0',
                use3dlighting: '0',
                valueFontColor: '#333333',
                captionPadding: '15'
            }
        },
        data: function (index, dataItem, dataLength) {
            var math = window.Math,
                alphaSlab = dataLength > 50 ? math.round(100 / math.ceil(dataLength / 10)) : 20,
                alpha = 100 - alphaSlab * math.floor(index / 10);
                return {alpha: alpha};
            }
        },
        line: {
            chart: {
                lineThickness: '2'
            }
        },
        …
        ...
    }
});
```

Themes in FusionCharts Suite XT let you set common values for attributes applicable to all charts in your web application, thus removing the overhead of configuring the attributes separately for each chart.

Additionally, themes also let you control configurations for specific chart types in your application.

For example, you may want to enable hover effects for only all pie 2D charts in the application.

To do this, the hover effects properties will have to be restricted to only the pie 2D charts. The tiered structure of themes in FusionCharts Suite XT lets you restrict this scope of theme application This is true for any other chart type that you want to configure.



A theme definition includes the following types of tiers:

| Tier Name | Description |
| --------- | :---------- |
| `base` | It is used to define settings applicable across all charts, gauges, and maps in the application. For example, all attributes set under the `base` tier for the __zune__ theme definition will be applied to all charts in the application. |
| `<chartType>` | It extends or overrides the theme settings in the `base` tier for specific chart types. The tier name will be the value used for the `type` attribute in the JSON data for the chart. For example, to configure settings for the pie 2D charts in your application, the tier name will be `pie2d`; all attributes defined under this  tier will be applicable only to the pie 2D charts (and not to the similar pie 3D, doughnut, or multi-level pie charts). |
| `geo` | It is used to specify settings applicable to all maps. It extends or overrides theme settings in the `base` tier that are applicable to all charts, gauges, and maps alike. Like the `base` tier, the `geo` tier helps to configure all maps from one tier of theme definition; it is the alias to any map in the theme. |
| `<mapName>` | It extends or overrides theme settings in the `geo` tier, as well as the settings in the `base` tier, for specific map types. The tier name will be the value used for the `type` attribute in the JSON data for the map. For example, all attributes defined under the `world` tier will be applicable only to the world map in your application. |

### Structure of a Tier

Inside each tier, the required attributes are defined within the objects they belong to.
For example, if you look at the `base` tier in the definition for the zune theme, you will see that attributes such as `paletteColors`, `captionFontSize`, `showHoverEffect`, and so on have been defined within the  `chart` object, because they belong to the  `chart` object. Now, if you  also had to configure the thickness for trend-lines for all charts, you would define the  `thickness` attribute within the `trendlines` object, as shown in the code snippet below:

```javascript
…
base: {
            chart: {
                    …

        },

            trendlines: [{
		          thickness: ‘3’
}]
        },
…
```

Each tier in the theme definition supports most JSON objects like `chart`, `dataset`, `trendlines`, and so on, and all the attributes that fall under these objects. Only, __make sure that you map the attributes and objects correctly__.

<p class='text-info'>
Refer the [FusionCharts Suite XT Chart Attributes](/chart-attributes?chart=area2d) page for an understanding of the objects and attributes used to configure the charts, gauges, and maps.
</p>

## Preventing Overriding of the Theme Definition

Like the tier descriptions above say, attributes specified in one of the global tiers can be overridden in the other chart- or map-specific tiers. Likewise, these attributes can also be overridden in the JSON data of the chart.
However, your application may have settings that have to be mandatorily applied to your charts. In this case, you need to ensure that they are not overridden in subsequent tiers of the theme or in the JSON data for the chart.
Assume that you have a new company logo, which is quite similar to the old one. To avoid confusion and continued use of the old logo, you want to make sure that the new logo is mandatorily used.
The `!important` directive lets you give an attribute precedence over any other of its instances.

The code snippet below shows how this directive is used:

```javascript
FusionCharts.register('theme', {
    name: 'zune',
    theme: {
        base: {
            chart: {
                paletteColors: '#0075c2,#1aaf5d,#f2c500',
                labelDisplay: 'auto',
    			logoURL: ‘companylogo.png !important’, //This will cause the new logo to be used, irrespective of whether and how this attribute is defined in the subsequent tiers or the JSON chart data.
   				…
   				…
			},
		…
        },
        …
        …
    }
});
```
Now that you have understood how theme definitions work, go ahead and see how you can [modify](/advanced-charting/theme-manager/modifying-existing-themes) on your own.
