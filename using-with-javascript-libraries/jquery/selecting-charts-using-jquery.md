---
permalink: using-with-javascript-libraries/jquery/selecting-charts-using-jquery.html
title: Selecting Charts Using jQuery | FusionCharts
description: The FusionCharts jQuery helper makes it easy to select FusionCharts Suite XT charts rendered on a page or in a specific HTML element.
heading: Selecting Charts Using jQuery
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JQuery Helper can be downloaded from <a href="http://www.fusioncharts.com/jquery-charts" target="_blank">here</a>.</p>

The FusionCharts jQuery helper makes it easy to select FusionCharts Suite XT charts rendered on a page or in a specific HTML element.

## Selecting all Charts

Using the `:FusionCharts` jQuery Selector, you can select all FusionCharts Suite XT charts rendered in a HTML page. For instance, clicking the "Apply Theme" button in the column chart shown below changes the theme for the pie chart (further down in this page) also. This is because the `:FusionCharts` selector selects all the charts in the page. This is useful for making changes across multiple charts in an entire page.

{% embed_chart using-with-javascript-libraries-jquery-selecting-charts-using-jquery-example-1.js %}

{% embed_chart using-with-javascript-libraries-jquery-selecting-charts-using-jquery-example-2.js %}

The code snippet for selecting all charts is shown below:

```javascript
$('#applyTheme').click(function() {
    // Use `FusionCharts` jQuery selector and apply theme to the charts
    $(':FusionCharts').attrFusionCharts({
        "theme": "fint"
    });
});

```

The `:FusionCharts` selector selects all the charts in the specified context, which in this case is the current page. You can use it as a conventional jQuery selector.

## Selecting  Charts in a Specific Scope

To select all charts in a limited scope, such as an HTML element, you can use the element `id` or the `class` as the selector.

Given below are a few code snippets that show how you can select charts in specific HTML elements:

For applying a common theme to all charts inside all the `<div>` elements in the page, use the code snippet given below:

```javascript
$('div').attrFusionCharts({"theme": "fint"});

```

For applying a common theme to only those charts that belong to HTML elements having the `selectorExample` class, use the code snippet given below:

```javascript
$('.selectorExample’).attrFusionCharts({"theme": "fint"});

```