---
permalink: advanced-chart-configurations/theme-manager/applying-themes.html
title: Applying Themes | FusionCharts
description: FusionCharts Suite XT lets you create theme files to centrally define the cosmetic and functional properties that you want to apply consistently to all charts across your web application.
heading: Applying Themes
chartPresent: true
---

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.carbon.js'}}"></script>
<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.ocean.js'}}"></script>
<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/themes/fusioncharts.theme.zune.js'}}"></script>


FusionCharts Suite XT lets you create theme files to centrally define the cosmetic and functional properties that you want to apply consistently to all charts across your web application. 

The product comes with the following three predefined themes:

* zune
* ocean
* carbon

Each theme file is shipped as a separate JavaScript file, located in the __js/themes__ folder.

A column 2D chart showcasing each theme is shown below:

{% embed_chart advanced-charting-theme-manager-introduction-to-themes-example-1.js %}

Click any radio button, followed by the __Apply Theme__ button, to see how the look and feel of the chart changes with each theme.

This article describes how you can include and apply themes for your charts.

To apply a theme to your chart, you need to include its corresponding JavaScript file in your web page.

The code snippet below shows how you can do this:
```javascript
<script type="text/javascript" src="js/fusioncharts.js"></script>
<script type="text/javascript" src="js/themes/fusioncharts.theme.carbon.js"></script>
```

<p class="text-info">
The installation routine of a theme relies on the code in the `fusioncharts.js` file. Therefore, make sure that this file is always included before the JavaScript file for the theme.
</p>

Once you have included the theme file, the theme can be applied using the:

* `theme` attribute of the `chart` object  (in the JSON chart data)
                                    OR
* `setChartAttribute()` method of the FusionCharts API (in the JSON chart data)

## Using the `theme` Attribute
The following code snippet demonstrates the use of the `theme` attribute for applying a theme:
```javascript
{
    chart: {
        "theme": "carbon", //Set the value of the `theme` attribute to the name of the required theme
        ...
    },
    ...
    ...
}
```

A column 2D chart configured using the __carbon__ theme is shown below:

{% embed_chart advanced-charting-theme-manager-applying-themes-example-1.js %}

The complete data structure needed to render this chart is given below:

{% embed_data advanced-charting-theme-manager-applying-themes-example-1.js %}

<p class="text-info">
If you are using the XML data format for the chart, you can use the `theme` attribute within the `<chart>` element. For example, `<chart theme=”carbon”>`
</p>

## Using the `setChartAttribute()` API Method

The following code snippet demonstrates the use of the `setChartAttribute()` API method for applying a theme:
```javascript
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
    revenueChart.setChartAttribute(“theme”, “carbon”); //The attribute name and its value are passed as parameters to this method.
});
```

## Applying Multiple Themes for a Chart
To apply multiple themes for a chart, specify the theme names as a comma-separated list. For example, if you are using the `theme` attribute, this is how you specify all the themes that you want to apply:
```javascript
"theme": "zune,zune-v1"
```

<p class="text-info">
__zune-v1__ is a user-defined theme. To know how user-defined themes can be created, refer the [Creating New Themes](/advanced-charting/theme-manager/creating-new-themes) article. 
</p>

Values of all attributes set across these themes will be applied to the chart. In case of overlapping attributes, the values specified for the rightmost theme will take precedence. For example if the `captionFontSize` attribute is specified for both themes, its value for the __zune-v1__ theme will be applied to the caption.


