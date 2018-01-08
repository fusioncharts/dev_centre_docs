---
permalink: advanced-chart-configurations/theme-manager/creating-new-themes.html
title: Creating New Themes | FusionCharts
description: FusionCharts Suite XT is shipped with the following three predefined themes zune, ocean and carbon.
heading: Creating New Themes
chartPresent: false
---

## Prerequisites

* [Introduction to Themes]{% linkTo tutorials/advanced-charting/theme-manager/introduction-to-themes.md %}
* [Applying Themes]{% linkTo tutorials/advanced-charting/theme-manager/applying-themes.md %}
* [Basics of Theme Definition]{% linkTo tutorials/advanced-charting/theme-manager/basics-of-theme-definition.md %}

FusionCharts Suite XT is shipped with the following three predefined themes:

* zune
* ocean
* carbon

You can choose a theme depending on your aesthetic requirements for the [charts, gauges, and maps](http://www.fusioncharts.com/charts/) in your application. Additionally, FusionCharts Suite XT gives you the option of [modifying existing themes]{% linkTo tutorials/advanced-charting/theme-manager/modifying-existing-themes.md %} or creating entirely new ones, if your requirements differ from what is already there.

This article describes how you can create and register new themes using the FusionCharts API.

## Creating and Registering a New Theme
Assume that you have to create a theme (call this theme __mySampleTheme__) that should include the properties listed in the table below:

| Properties | For Chart Type |
|------------|:-----------|
| Palette colors should be set to: __#0075c2__, __#1aaf5d__, __#f2c500__. <br> Set the sub-caption to __Harry’s SuperMart__ throughout the application; ensure that it cannot be changed. <br> Define uniform cosmetics for the caption and sub-caption. <br> Enable hover effects for data plots. <br> Set uniform cosmetics for all trend-lines. Render trend-lines as dashed trend-lines. | All charts, gauges, and maps |
| Data plots for positive data values should be rendered using the color code __#3333FF__. <br> Data plots for negative data values should be rendered using the color code __#CC0000__. | Column 2D charts |
| Show quadrant lines for all bubble charts with uniform cosmetics. <br> Set uniform cosmetics for regression lines. | Bubble charts |
| Show percentage values in tooltips. <br> Enable smart labels. | Pie 2D charts |
| Set a minimum distance between anchor points. | Zoom line chart |
| Set the cosmetics for the processes’ header text. | Gantt chart |
| For maps, show short names as labels and not in the tooltip text. <br> Set the fill hover color and transparency for the entities and markers. <br> Set uniform cosmetics for all marker connectors. | All maps |


Given below is a __step-wise procedure__ for creating this theme:

### Step 1:
In a text editor, create a new text file. Name this file __mySampleTheme.js__. 
Save it in the __js/themes__ folder.

### Step 2:
Determine the structure of the theme by mapping properties to tiers.
A theme is structured using tiers that are used to specify the scope of application of the properties.
The table below maps the properties in the theme definition to the corresponding tier in the theme structure:

| Properties | Tier |
|------------|:-----|
| global to all charts, gauges, and maps in the application | `base` |
| specific to column 2D charts | `column2d` |
| specific to bubble charts | `bubble` |
| specific to zoom line charts | `zoomline` |
| specific to the Gantt chart | `gantt` |
| global to all the maps in the application | `geo` |

### Step 3:
Determine the structure for each tier by mapping the attributes to be defined with the objects they belong to.
Based on the properties mentioned in the first table (the one that outlines the requirements for the theme sample), the table below lists the attributes that will be used to fulfil each requirement and the objects that the attributes belong to.

<p class="text-info">
Refer the [FusionCharts Suite XT Chart Attributes]{% linkTo attrs.md chart=area2d %} page for a complete understanding of the objects and attributes used to configure the charts, gauges, and maps.
</p>


| Tier | Attributes to be defined within the tier | Object(s) to which the attributes belong |
|------|:-----------------------------------------|:-----------------------------------------|
| `base` | To configure the palette colors for the data plots: `paletteColors` | `chart` |
| `base` | To set the sub-caption to __Harry’s SuperMart__: `subCaption` | `chart` |
| `base` | To define uniform cosmetics for the caption and sub-caption: `captionFontSize`, `subCaptionFontSize`, `captionFontBold`, `subCaptionFontBold` | `chart` |
| `base` | To enable hover effects for all data plots: `showHoverEffect` | `chart` |
| `base` | To set uniform cosmetics for all trend-lines: `color`, `thickness`, `dashed`, `dashLen`, `dashGap` | `trendlines` |
| `column2d` | To set different color codes for data plots representing positive and negative data values: `color` | `data` object, child of the `dataset` object |
| `bubble` | To show quadrant lines: `drawQuadrant` | `chart` |
| `bubble` | To set uniform cosmetics for all quadrant lines: `quadrantLineColor`, `quadrantLineThickness`, `quadrantLineAlpha` | `chart` |
| `bubble ` | To set uniform cosmetics for all regression lines: `regressionLineColor`, `regressionLineThickness`, `regressionLineAlpha` | `dataset` |
| `pie2d` | To show percentage values in tooltip: `showPercentInToolTip` | `chart` |
| `pie2d` | To enable smart labels: `enableSmartLabels` | `chart` |
| `zoomline` | To set a minimum distance between anchor points: `anchorMinRenderDistance` | `chart` |
| `gantt` | To set the cosmetics for the processes’ header text: `headerFont`, `headerFontSize`, `headerFontColor`, `headerIsBold`, `headerIsUnderline`, `headerAlign`, `headerVAlign` | `processes` | 
| `geo` | To show short names as labels and not in the tooltip text: `showLabels`, `useSNameInLabels`, `useSNameInToolTip` | `chart` |
| `geo` | To set the fill hover color and transparency for the entities: `entityFillHoverColor`, `entityFillHoverAlpha` | `chart` |
| `geo` | To set the fill hover color and transparency for the markers: `markerFillHoverColor`, `markerFillHoverAlpha` | `chart` |
| `geo` | To set uniform cosmetics for all marker connectors: `color`, `thickness`, `alpha`, `dashed`, `dashLen`, `dashGap` | `connector` object, child of the `marker` object |



### Step 3:
Add the JavaScript code for the theme in the theme file.
Based on the property-tier-attribute-object mapping shown above, write the JavaScript code for your theme in the __mySampleTheme.js__ file created in Step 1. 

Given below is the JS code for the sample theme:

```javascript
//The `FusionCharts.register()` API is used to register the new theme in the FusionCharts core.
FusionCharts.register(‘theme’, {
	name: ‘mySampleTheme’,
	theme: {
		base: {
			chart: {
				paletteColors: '#0075c2,#1aaf5d,#f2c500',
				subCaption: ‘Harry’s SuperMart !important’, //The !important directive is used to ensure that the sub-caption cannot be overriden in the theme definition or in the chart data.
				captionFontSize: ‘14’
				subCaptionFontSize: ‘12’
				captionFontBold: ‘1’,
				subCaptionFontBold: ‘0’,
				showHoverEffect: ‘1’,
				placeValuesInside: ‘0’
				},
			trendlines: [{
				color: ‘#FF000’,
				thickness: ‘3’,
				dashed: ‘1’,
				dashLen: ‘4’,
				dashGap: ‘2’
				}]
			},
		column2d: {
			dataset: {
						data: function(dataObj) {
                        	color: (Number(dataObj.value) < 0 ? "#3333FF" : "#CC0000"),
                    }
                }
			}
		bubble: {
			chart: {
				drawQuadrant: ‘1’,
				quadrantLineColor: ‘3’,
				quadrantLineThickness: ‘1’,
				quadrantLineAlpha: ‘4’,
				},
			dataset: [{
				regressionLineColor: ‘#123456’,
				regressionLineThickness: ‘3’,
				regressionLineAlpha: ‘70’  
			}]
		}
		pie2d: {
			chart: {
				showPercentInToolTip: ‘1’,
				enableSmartLabels: ‘1’
				}
			},
		zoomline: {
			chart: {
			anchorMinRenderDistance : ‘20’				
				}
			},		
		gantt: {
			processes: [{
				headerFont: ‘Arial’,
				headerFontSize: ‘16’,
				headerFontColor: ‘#321ABC’,
				headerIsBold: ‘1’,
				headerIsUnderline: ‘1’,
				headerAlign: ‘left’,
				headerVAlign: ‘bottom’
				}]
			},      
		geo: {
			chart: {
				showLabels: ‘1’,
				useSNameInLabels: ‘1’,
				useSNameInToolTip: ‘0’,
				entityFillHoverColor: ‘#9A9A9A’,
				entityFillHoverAlpha: ‘60’,
				markerFillHoverColor: ‘#8AE65C’,
				markerFillHoverAlpha: ‘60’,
				}
			marker: {
				connector: {
					thickness: ‘4’,
					color: ‘#336699’,
					alpha: ‘60’,
					dashed: ‘1’,
					dashLen: ‘4’,
					dashGap: ‘2’
				}
			}
		}
	}
});
```

### Step 4:

Use your theme!
You can now [apply]{% linkTo tutorials/advanced-charting/theme-manager/applying-themes.md %} your new theme to the charts, gauges, and maps in your application using either the `theme` attribute of the `chart` object or the `setChartAttribute()` method of the FusionCharts API.

## Creating and Registering Multiple Themes
If you need to create multiple new themes for your application, the advisable approach is to specify all theme definitions in the same file. That way, you will have to include only one __.js__ file in your application, instead of multiple files. The theme name, as the value of the `theme` attribute or as the parameter of the `setChartAttribute()` method, can then change depending on your requirement. 

A sample of the code that goes into the JavaScript file for creating multiple themes together is shown below:
```javascript
var myTheme1 = {
         	name: ‘my-theme-1’,
			theme: {...} // Theme JSON
      	},
    myTheme2 = {
          	name: ‘my-theme-1’,
			theme: {...} // Theme JSON
      	},
    myTheme3 = {
          	name: ‘my-theme-1’,
			theme: {...} // Theme JSON
      };
```

To register all the themes in one go, use the `FusionCharts.register()` API as shown below:

```javascript
FusionCharts.register('theme', [myTheme1, myTheme2, myTheme3]);
```

An alternate way of creating and registering multiple themes is shown below:
```javascript
FusionCharts.register('theme', [
	{name: ‘my-theme-1’, theme: {...}}, 
	{name: ‘my-theme-2’, theme: {...}}, 
	{name: ‘my-theme-3’, theme: {...}}
]);
```

## Including Escape Characters in Theme Definition

When modifying theme definitions, it is important for you to understand the concept of escape characters. Read the example below to understand what escape characters are and why they are needed.

Assume that the sub-caption of your chart is __Harry’s SuperMart__ .

How do you write this in the theme definition?
```javascript
subCaption: ‘Harry’s SuperMart’
```

is the code line that you would include in your theme definition.

However, a glitch that may go unnoticed here is the use of three single quotes, which the browser may not exactly interpret the way you want it to.

In this example, the single quote after ‘y’ may be interpreted as the closing quote, ignoring the rest of the string and the sub-caption will not be rendered the way you want it to.

Escape characters are used to solve this problem.

For the quotation mark after ‘y’ to be interpreted as an apostrophe, this is how you write the code line in your theme definition:
```javascript
subCaption: ‘Harry\’s SuperMart’
```

__\’__ is an escape character that is used to tell the browser that the quotation mark is to be used as an apostrophe; this is called character quoting—using escape characters to represent characters that would otherwise have an incorrect interpretation.

The table below shows the other escape characters that can be used:

| Escape Sequence | Character Escaped |
|-----------------|:------------------|
| \' | Apostrophe or single quote |
| \" | Double quotes |
| \\ | Backslash character |
| \n | New line |
| \r | Carriage return |
| \t | Tab |
| \b | Backspace (ascii code 08) |
| \f | Form feed (ascii code 0C) |
| \v | Vertical tab |

