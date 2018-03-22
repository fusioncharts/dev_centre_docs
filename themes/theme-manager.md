---
title: Theme Manager | FusionCharts
description: You can choose a theme depending on your aesthetic requirements for the charts, gauges, and maps in your application.
heading: Theme Manager
---

## Apply a theme to your chart

To apply a theme to your chart, include its corresponding JavaScript file in your web page.

Refer to the code snippet given below:

```html
<script type="text/javascript" src="js/fusioncharts.js"></script>
<script type="text/javascript" src="js/themes/fusioncharts.theme.carbon.js"></script>
```

> The installation routine of a theme relies on the code in the fusioncharts.js file. Therefore, make sure that this file is always included before the JavaScript file for the theme.

Once you include the theme file, you can apply the theme using the:

* `theme` attribute of the `chart` object (in the JSON chart data)

* `setChartAttribute()` method of the FusionCharts API (in the JSON chart data)

## Use the `theme` attribute

In the following code snippet, you can see how to use the `theme` attribute to apply a theme:

```json
{
    chart: {
        "theme": "carbon", //Set the value of the `theme` attribute to the name of the required theme
        ...
    }
}
```

You can see a column 2D chart configured using the carbon theme, given below:

**<chart>**

> If you are using the XML data format for the chart, you can use the theme attribute within the <chart> element. For example, <chart theme="carbon">

### Use the setChartAttribute() method

In the following code snippet, you can see how to use the setChartAttribute() API method to apply a theme:

```json
FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        ...
        dataSource: {
            "chart": {
                ...
            },
            "data": [
               ...
            ]
        }
    });
    revenueChart.render();
    revenueChart.setChartAttribute("theme", "carbon"); //The attribute name and its value are passed as parameters to this method.
});
```

### Apply multiple themes to a chart

To apply multiple themes for a chart, specify the theme names as a comma-separated list. For example, if you are using the theme attribute, this is how you specify all the themes that you want to apply:

```json
"theme": "zune,zune-v1"
```

> `zune-v1` is a user-defined theme. To find out how to create user-defined themes, refer to the Create New Themes section.

Values of all attributes that you set across these themes will be applied to the chart. In case of overlapping attributes, the values you specify for the rightmost theme will take precedence. For example, if you specify the `captionFontSize` attribute for both themes, its value for the `zune-v1` theme will be applied to the caption.

### Understand the theme structure

You need to write theme definitions using a tier-based structure. You can use each tier to define properties for all/specific chart, gauge, and map types, as detailed below:

* Use the `base` tier to define settings applicable across all charts, gauges, and maps in your application. For example, the attributes you set under the `base` tier for the `zune` theme definition will be applied to all charts in the application.

* Use the `<chartType>` tier to extend or override the theme settings in the `base` tier for specific chart types. The tier name will be the value used for the `type` attribute in the JSON data for the chart. For example, to configure settings for only the pie 2D charts in your application, set the tier name to `pie2d`.

* Use the `geo` tier to specify settings applicable to all maps. It extends or overrides theme settings in the base tier that are applicable to all charts, gauges, and maps alike. Like the `base` tier, you can use the `geo` tier to configure all maps from one tier of theme definition; it is the alias to any map in the theme.

* Use the `<mapName>` tier to extend or override theme settings in the `geo` tier, as well as the settings in the `base` tier, for specific map types. The tier name will be the value used for the `type` attribute in the JSON data for the map. For example, all attributes you define under the `world` tier will be applicable only to the world map in your application.

Partial definition of the `zune` theme, as contained in the `fusioncharts.theme.zune.js` file, is given below:

```json
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
            },
            dataset: [{
                ...
            }],
            trendlines: [{
                ...
            }]
        },
        geo: {
            chart: {
                showLabels: '0',
                fillColor: '#0075c2',
                showBorder: '1',
                borderColor: '#eeeeee',
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
    }
});
```

In FusionCharts Suite XT, you can set common values for attributes applicable to all charts in your web application. You can also use themes to control configurations for specific chart types in your application. For example, you can restrict hover effect properties to only pie 2D charts if you need to. 

Inside each tier, you need to define attributes within the objects they belong to. For example, if you look at the base tier in the definition for the zune theme (given above), you can see that attributes such as `paletteColors`, `captionFontSize`, `showHoverEffect`, and so on, are defined within the chart object, because they belong to that object. 

Now, if you also have to configure the thickness for trendlines for all charts, define the `thickness` attribute within the `trendlines` object, as shown in the code snippet below:

```json
{
    base: {
        chart: {
            ...
        },
        trendlines: [{
            ...
            thickness: '3'
        }]
    },
}
```

> Each tier in the theme definition supports most JSON objects, like chart, dataset, trendlines, and so on, and all the attributes that fall under these objects. Just map the attributes and objects correctly.

Refer to the [FusionCharts Suite XT Chart Attributes](https://www.fusioncharts.com/chart-attributes?chart=area2d) page to better understand the objects and attributes used to configure the charts, gauges, and maps.

### Prevent theme definition override

As you have seen in the tier descriptions given above, you can override attributes specified in one of the global tiers in the other tiers for specific charts/maps. Likewise, you can also override these attributes in the JSON data of the chart. However, in case your application has settings that you need to mandatorily apply to your charts, you need to prevent this overriding.

For instance, assume that you have a new company logo, which is quite similar to the old one. To avoid confusion, you need to make sure that the new logo is mandatorily used everywhere. To do this, you need to use the `!important` directive, to give an attribute precedence over any other of its instances. You can see how to use this directive in the code snippet given below:

```json
FusionCharts.register('theme', {
    name: 'zune',
    theme: {
        base: {
            chart: {
                paletteColors: '#0075c2,#1aaf5d,#f2c500',
                labelDisplay: 'auto',
                logoURL: 'companylogo.png !important', //This will cause the new logo to be used, irrespective of whether and how this attribute is defined in the subsequent tiers or the JSON chart data.
            },
        },
    }
});
```

## Modify existing themes

To modify an existing theme, all you need to do is add/update the required attribute-value pair(s) in the JavaScript file of the theme. You can do this for any number of attributes. 

### Apply specific modifications to a theme

Refer to the partial definition of the `zune` theme, as contained in the `fusioncharts.theme.zune.js` file, given below:

```json
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
            },
            dataset: [{
                ...
            }],
            trendlines: [{
                ...
            }]
        },
        geo: {
            chart: {
                showLabels: '0',
                fillColor: '#0075c2',
                showBorder: '1',
                borderColor: '#eeeeee',
            }
        },
        pie2d: {
            chart: {
                placeValuesInside: '0',
                use3dlighting: '0',
                valueFontColor: '#333333',
                captionPadding: '15'
            },
            data: function (index, dataItem, dataLength) {
                var math = window.Math,
                    alphaSlab = dataLength > 50 ?
                        math.round(100 / math.ceil(dataLength / 10)) : 20,
                    alpha = 100 - alphaSlab * math.floor(index / 10);
                return {alpha: alpha};
            }
        },
        line: {
            chart: {
                lineThickness: '2'
            }
        },
    }
});
```

Assume that, for all charts in the application, you want to modify this theme definition to:

* Increase the font size for all captions

* Set transparency for all data plots

* Set a standard thickness for all trendlines

* Change the border color for all maps

Follow the step-by-step procedure given below, to modify the theme definition:

**Step 1**: From the **js/themes** folder, open the **.js** file for the theme using any text editor of your choice.

**Step 2**: Map the modifications required with the tier within which they should be added, as well as the objects and attributes required to implement the modifications. Here's how to do it:

* To increase the caption font size, modify the `captionFontSize` attribute (which belongs to the `chart` object) within the `base` tier.

* To set transparency for all data plots, modify the `alpha` attribute (which belongs to the `dataset` object) within the `base` tier.

* To set a standard thickness for all trendlines, modify the `thickness` attribute (which belongs to the `trendlines` object) within the `base` tier.

* To change the border color for all maps, modify the `borderColor` attribute (which belongs to the `chart` object) within the `geo` tier.

> Refer to the FusionCharts Suite XT Chart Attributes page to better understand the objects and attributes used to configure the charts, gauges, and maps.

**Step 3**: Revise the existing theme definitions for these modifications, as shown in the code snippet below:

```json
FusionCharts.register('theme', {
    name: 'zune',
    theme: {
        base: {
            chart: {
                paletteColors: '#0075c2,#1aaf5d,#f2c500',
                labelDisplay: 'auto',
                baseFontColor: '#333333',
                baseFont: 'Helvetica Neue,Arial',
                captionFontSize: '16', //Caption font size increased—existing attribute updated
                subcaptionFontSize: '14',
                subcaptionFontBold: '0',
                showBorder: '0',
                bgColor: '#ffffff',
                showShadow: '0',
                canvasBgColor: '#ffffff',
                showCanvasBorder: '0',
                showHoverEffect: '1',
            },
            dataset: [{
               alpha: '90' //Transparency for dataplots set—new attribute added. 
            }],
            trendlines: [{
               thickness: '3' //Thickness set for trend-lines—new attribute added. 
            }]
        },
        geo: {
            chart: {
                showLabels: '0',
                fillColor: '#0075c2',
                showBorder: '1',
                borderColor: '#dddddd', //Border color for all maps changed—existing attribute updated
            }
        },
        pie2d: {
            chart: {
                placeValuesInside: '0',
                use3dlighting: '0',
                valueFontColor: '#333333',
                captionPadding: '15'
            },
            data: function (index, dataItem, dataLength) {
                var math = window.Math,
                    alphaSlab = dataLength > 50 ?
                        math.round(100 / math.ceil(dataLength / 10)) : 20,
                    alpha = 100 - alphaSlab * math.floor(index / 10);
                return {alpha: alpha};
            }
        },
        line: {
            chart: {
                lineThickness: '2'
            }
        },
    }
});
```

**Step 4**: Save the file.

You can now apply your modified theme to the charts, gauges, and maps in your application using either the `theme` attribute of the `chart` object or the `setChartAttribute()` method of the FusionCharts API.

### Include escape characters in theme definition

When modifying theme definitions, you may need to use escape characters in certain situations. 

Assume that the subcaption of your chart is **Harry's SuperMart**. Your first instinct may be to write it in the following format:

```json
subCaption: 'Harry's SuperMart'
```

However, major browsers may interpret the single quote after 'y' as the closing quote, ignoring the rest of the string. If that happens, the subcaption will not be rendered the way you want it to. To avoid this problem, you need to use escape characters. Refer to the format given below:

```json
subCaption: 'Harry\'s SuperMart'
```
In the above format, `\` is an escape character. You can use it to tell the browser that the quotation mark after `y` is an apostrophe, and not a part of the code. This way of using escape characters to represent characters that browsers would otherwise interpret incorrectly is called character quoting. You can use the following escape characters (in the given sequences) in your code:

* Use **\'** to indicate an apostrophe, or a single quote.

* Use **\"** to indicate double quotes.

* Use **\\** to indicate a backslash.

* Use **\n** to indicate a new line.

* Use **\r** to indicate a carriage return.

* Use **\t** to indicate a tab space.

* Use **\b** to indicate a backspace (ASCII code 08).

* Use **\f** to indicate a form feed (ASCII code 0C).

* Use **\v** to indicate a vertical tab.