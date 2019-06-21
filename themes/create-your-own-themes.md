---
title: Create Your Own Themes | FusionCharts
description: FusionCharts Suite XT is shipped with the following three predefined themes zune, ocean and carbon.
heading: Create Your Own Themes
---

Assume that you have to create a theme named **mySampleTheme**, which needs to include the properties listed below:

* For all charts, gauges, and maps:

    * Set palette colors to: **#0075c2**, **#1aaf5d**, **#f2c500**.

    * Set the subcaption to **Harry's SuperMart** throughout the application and ensure that it cannot be changed.

    * Define uniform cosmetics for the caption and subcaption.

    * Enable hover effects for data plots.

    * Set uniform cosmetics for all trendlines and render them as **dashed**.

* For all column 2D charts:

    * Ensure data plots for positive data values are rendered using the color code: **#3333FF**.

    * Ensure data plots for negative data values are rendered using the color code: **#CC0000**.

* For all bubble charts:

    * Show quadrant lines with uniform cosmetics.

    * Set uniform cosmetics for regression lines.

* For all pie 2D charts:

    * Show percentage values in tooltips.

    * Enable smart labels.

* For all zoom line charts:

    * Set a minimum distance between anchor points.

* For all Gantt charts:

    * Set the cosmetics for header texts of processes.

* For all maps:

    * Show short names as labels and not in the tooltip text.

    * Set the fill hover color and transparency for entities and markers.

    * Set uniform cosmetics for all marker connectors.

Given below is a stepwise procedure for creating this theme:

**Step 1**: In a text editor, create a new text file. Name this file **mySampleTheme.js**. Save it in the **js/themes** folder.

**Step 2**: Map properties to tiers, as listed below:

* Map global properties for all charts, gauges, and maps in the application, to the `base` tier.

* Map properties specific to column 2D charts to the `column2d` tier.

* Map properties specific to bubble charts to the `bubble` tier.

* Map properties specific to pie2d charts to the `pie2d` tier.

* Map properties specific to zoom line charts to the `zoomline` tier.

* Map properties specific to Gantt charts to the `gantt` tier.

* Map global properties for all maps in the application, to the `geo` tier.

**Step 3**: Determine the structure of each tier by mapping the attributes to be defined with the objects they belong to, as listed below:

* Within the `base` tier:

    * Use the `paletteColors` attribute (under the `chart` object) to configure palette colors for the data plots.

    * Use the `subCaption` attribute (under the `chart` object) to set the subcaption to **Harry's SuperMart**.

    * Use the `captionFontSize`, `subCaptionFontSize`, `captionFontBold`, and `subCaptionFontBold` attributes (under the `chart` object) to define uniform cosmetics for the caption and subcaption.

    * Use the `showHoverEffect` attribute (under the `chart` object) to enable hover effects for all data plots.

    * Use the `color`, `thickness`, `dashed`, `dashLen`, and `dashGap` attributes (under the `trendlines` object) to set uniform cosmetics for all trendlines.

* Within the `column2d` tier:

    * Use the `color` attribute (under the `data` object, which belongs to the `dataset` object) to set different color codes for data plots representing positive and negative data values.

* Within the `bubble` tier:

    * Use the `drawQuadrant` attribute (under the `chart` object) to show quadrant lines.

    * Use the `quadrantLineColor`, `quadrantLineThickness`, and `quadrantLineAlpha` objects (under the `chart` object) to set uniform cosmetics for all quadrant lines.

    * Use the `regressionLineColor`, `regressionLineThickness`, and `regressionLineAlpha` objects (under the `chart` object) to set uniform cosmetics for all regression lines.

* Within the `pie2d` tier:

    * Use the `showPercentInToolTip` attribute (under the `chart` object) to show percentage values in tooltip.

    * Use the `enableSmartLabels` attribute (under the `chart` object) to enable smart labels.

* Within the `zoomline` tier:

    * Use the `anchorMinRenderDistance` attribute (under the `chart` object) to set a minimum distance between anchor points.

* Within the `gantt` tier:

    * Use the `headerFont`, `headerFontSize`, `headerFontColor`, `headerIsBold`, `headerIsUnderline`, `headerAlign`, and `headerVAlign` attributes (under the `processes` object) to set the cosmetics for the header texts of processes.

* Within the `geo` tier:

    * Use the `showLabels`, `useSNameInLabels`, and `useSNameInToolTip` attributes (under the `chart` object) to show short names as labels, instead of tooltip text.

    * Use the `entityFillHoverColor` and `entityFillHoverAlpha` attributes (under the `chart` object) to set fill hover color and transparency for the entities.

    * Use the `markerFillHoverColor` and `markerFillHoverAlpha` attributes (under the `chart` object) to set fill hover color and transparency for the markers.

    * Use the `color`, `thickness`, `alpha`, `dashed`, `dashLen`, and `dashGap` attributes (under the `connector` object, which belongs to the `marker` object) to set uniform cosmetics for all marker connectors.

**Step 4**: Add the JavaScript code for the theme in the theme file. Based on the mapping shown above, write the JavaScript code for your theme in the **mySampleTheme.js** file that you created in Step 1.

Refer to the code for the new theme, given below:

```javascript
//The `FusionCharts.register()` API is used to register the new theme in the FusionCharts core.
FusionCharts.register('theme', {
    name: 'mySampleTheme',
    theme: {
        base: {
            chart: {
                paletteColors: '#0075c2,#1aaf5d,#f2c500',
                subCaption: 'Harry\'s SuperMart !important', //The !important directive is used to ensure that the subcaption cannot be overriden in the theme definition or in the chart data.
                captionFontSize: '14',
                subCaptionFontSize: '12',
                captionFontBold: '1',
                subCaptionFontBold: '0',
                showHoverEffect: '1',
                placeValuesInside: '0'
            },
            trendlines: [{
                color: '#FF000',
                thickness: '3',
                dashed: '1',
                dashLen: '4',
                dashGap: '2'
            }]
        },
        column2d: {
            dataset: {
                data: function(dataObj) {
                    return {
                        color: (Number(dataObj.value) < 0 ? "#3333FF" : "#CC0000")
                    }
                }
            }
        },
        bubble: {
            chart: {
                drawQuadrant: '1',
                quadrantLineColor: '3',
                quadrantLineThickness: '1',
                quadrantLineAlpha: '4',
            },
            dataset: [{
                regressionLineColor: '#123456',
                regressionLineThickness: '3',
                regressionLineAlpha: '70'  
            }]
        },
        pie2d: {
            chart: {
                showPercentInToolTip: '1',
                enableSmartLabels: '1'
            }
        },
        zoomline: {
            chart: {
                anchorMinRenderDistance : '20'
            }
        },
        gantt: {
            processes: [{
                headerFont: 'Arial',
                headerFontSize: '16',
                headerFontColor: '#321ABC',
                headerIsBold: '1',
                headerIsUnderline: '1',
                headerAlign: 'left',
                headerVAlign: 'bottom'
            }]
        },
        geo: {
            chart: {
                showLabels: '1',
                useSNameInLabels: '1',
                useSNameInToolTip: '0',
                entityFillHoverColor: '#9A9A9A',
                entityFillHoverAlpha: '60',
                markerFillHoverColor: '#8AE65C',
                markerFillHoverAlpha: '60',
            },
            marker: {
                connector: {
                    thickness: '4',
                    color: '#336699',
                    alpha: '60',
                    dashed: '1',
                    dashLen: '4',
                    dashGap: '2'
                }
            }
        }
    }
});
```

**Step 5**: Apply your new theme to the charts, gauges, and maps in your application, using either the `theme` attribute of the `chart` object or the `setChartAttribute()` method of the FusionCharts API.

## Create and register multiple themes

If you need to create multiple new themes for your application, then ideally you should include all theme definitions in the same file. That way, you will have to include only one **.js** file in your application, instead of multiple files. You can then change the theme name, as the value of the `theme` attribute, or as the parameter of the `setChartAttribute()` method.

Refer to the code below for a sample:

```json
{
    var myTheme1 = {
        name: 'my-theme-1',
        theme: {...} // Theme JSON
    },
    myTheme2 = {
        name: 'my-theme-1',
        theme: {...} // Theme JSON
    },
    myTheme3 = {
        name: 'my-theme-1',
        theme: {...} // Theme JSON
    };
}
```

To register all the themes in one go, use the `FusionCharts.register()` API as shown below:

```json
FusionCharts.register('theme', [myTheme1, myTheme2, myTheme3]);
```

You can also create and register multiple themes as shown below:

```json
FusionCharts.register('theme', [
    {name: 'my-theme-1', theme: {...}}, 
    {name: 'my-theme-2', theme: {...}}, 
    {name: 'my-theme-3', theme: {...}}
]);
```

## Include escape characters in theme definition

You can include escape characters in definitions for new themes using the same process as the one you follow to include them when modifying existing themes. The process is detailed [here](/themes/theme-manager#include-escape-characters-in-theme-definition).