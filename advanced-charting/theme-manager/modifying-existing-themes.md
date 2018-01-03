---
permalink: advanced-chart-configurations/theme-manager/modifying-existing-themes.html
title: Modifying Existing Themes | FusionCharts
description: You can choose a theme depending on your aesthetic requirements for the charts, gauges, and maps in your application.
heading: Modifying Existing Themes
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

You can choose a theme depending on your aesthetic requirements for the [charts, gauges, and maps](http://www.fusioncharts.com/charts/) in your application. Additionally, FusionCharts Suite XT gives you the option of modifying existing themes or [creating entirely new ones]{% linkTo tutorials/advanced-charting/theme-manager/creating-new-themes.md %}, if your requirements differ from what is already there.

This article describes how you can modify existing themes.

## Modifying an Existing Theme
To modify an existing a theme, all you need to do is add/update the required attribute-value pair(s) in the theme’s JavaScript file. You can do this for any number of attributes.

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
        …
        ...
    }
});
```

Assume that, for all charts in the application, you want to modify this theme definition to:

* Increase the caption font size
* Set a transparency for the data plots 
* Set a standard thickness for trend-lines
* Change the border color for all maps

Given below is a step-by-step procedure for modifying the theme definition:

#### Step 1:
From the __js/themes__ folder, open the __.js__ file for the theme using any text editor of your choice.

### Step 2:
Map the modifications required with the tier within which they should be added, as well as the objects and attributes required to implement the modifications.

The table below shows this mapping:

| Modification |  Tier | Attribute | Object |
|--------------|:------|:----------|:-------|
| Increase the caption font size | `base`-because, as per the requirement list above, these settings have to be applied for all charts in the application| `captionFontSize` | `chart` |
| Set a uniform transparency for the data plots. | `base`-because, as per the requirement list above, these settings have to be applied for all charts in the application | `alpha` | `dataset` |
| Set a uniform thickness for trend-lines | `base`-because, as per the requirement list above, these settings have to be applied for all charts in the application | `thickness` | `trendlines` |
| Change the border color for maps | `geo`-because, as per the requirement list above, these settings have to be applied only for all the maps in the application | `borderColor` | `chart` | 

<p class="text-info">
Refer the [FusionCharts Suite XT Chart Attributes]{% linkTo attrs.md chart=area2d %} page for a complete understanding of the objects and attributes used to configure the charts, gauges, and maps.
</p>

### Step 3:
Revise the existing theme definition for these modifications, as shown below:

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
                captionFontSize: '16', //Caption font size increased—existing attribute updated
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
            dataset: [{
	           alpha: ‘90’ //Transparency for dataplots set—new attribute added. 
            }],
            trendlines: [{
               thickness: ‘3’ //Thickness set for trend-lines—new attribute added. 
            }]
        },
        geo: {
            chart: {
                showLabels: '0',
                fillColor: '#0075c2',
                showBorder: '1',
                borderColor: '#dddddd', //Border color for all maps changed—existing attribute updated
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
        …
        ...
    }
});
```

### Step 4: 
Save the file.

You can now [apply]{% linkTo tutorials/advanced-charting/theme-manager/applying-themes.md %} your modified theme to the charts, gauges, and maps in your application using either the `theme` attribute of the `chart` object or the `setChartAttribute()` method of the FusionCharts API.

## Including Escape Characters in Theme Definition

When modifying theme definitions, it is important for you to understand the concept of escape  characters. Read the example below to understand what escape characters are and why they are needed.

Assume that the sub-caption of your chart is __Harry’s SuperMart__ .

How do you write this in the theme definition?
```javascript
subCaption: ‘Harry’s SuperMart’
```

is the code line that you would include in your theme definition.

However, a glitch that may go unnoticed here is the use of three single quotes, which the browser may not exactly interpret the way you want it to.

In this example, the single quote after ‘y’ may be interpreted as the closing quote, ignoring the rest of the string—and the sub-caption will not be rendered the way you want it to.

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





