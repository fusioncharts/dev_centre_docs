---
permalink: advanced-chart-configurations/annotations/creating-annotations/introduction.html
title: Introduction to creating annotations | FusionCharts
description: Annotations, a compelling feature of FusionCharts Suite XT, lets you make your charts self-descriptive and visually engaging. This article, tells you about the different types of annotation items available and describes the objects used to create annotations.
heading: Introduction to creating annotations
chartPresent: false
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Introduction to annotations](/advanced-charting/annotations/introduction)

FusionCharts Suite XT includes a wide range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) that you can use to plot static as well as real-time data. Annotations, a compelling feature of the product, lets you make your charts self-descriptive and visually engaging.

This article:

* <a href="/advanced-chart-configurations/annotations/creating-annotations/introduction#annotation-items" class="smoth-scroll">Tells you about the different types of annotation items available</a>

* <a href="/advanced-chart-configurations/annotations/creating-annotations/introduction#objects-used-to-create-annotations" class="smoth-scroll">Describes the objects used to create annotations</a>

## Annotation Items

Annotations are graphical elements-text, images, shapes-that you can use to customize your chart.

You can add the following types of annotations to your chart:

* Text (custom notes, labels, or paragraphs of text)

* Image (external images)

* Shapes (rectangle, polygon, circle, arc, and line)

* Path connectors (free-form arrows, connectors, callouts, and so on)

The image of a chart rendered with different types of annotations items is shown below:

![image alt text](/assets/images/advanced-charting-annotations-creating-annotations-image-1.jpg)

The basic JSON structure to create annotations is shown below:

```javascript
{
    "chart": {
        ...
    },
    "annotations": {
        "groups": [{
        		//Annotation group 1
            	//Define a unique identification string for the group.
                "items": [
                	//Define individual annotation items.
                    {//Annotation Item 1},
                    {//Annotation Item 2},
                    ...
                    {//Annotation Item *n*}
                ]
            }, {
            	//Annotation group 2
            	//Define a unique identification string for the group.
                "items": [
                	//Define individual annotation items.
                	{//Annotation Item 1},
                	{//Annotation Item 2},
                	...
                    {//Annotation Item *n*}
                ]
            },
            ...
             {
            	//Annotation group *n*
            	//Define a unique identification string for the group.
                "items": [
                	//Define individual annotation items.
                    {//Annotation Item 1},
                    {//Annotation Item 2},
                    ...
                    {//Annotation Item *n*}
                ]
            },
        ]
    }
}
```

## Objects Used to Create Annotations

The `annotations`, `groups`, and `items` objects are used to create annotations.

A brief description of these objects is given in the table below:

<table>
  <tr>
    <th>Object</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`annotations`</td>
    <td>An object that encompasses all the code for generating annotations.</td>
  </tr>
  <tr>
    <td>`groups`</td>
    <td>An object array that consolidates multiple annotations into one group. You can create multiple annotation groups for one chart. Grouping annotations is useful when a complex graphic is created using individual annotation items.

This is covered in detail in the subsequent articles.</td>
  </tr>
  <tr>
    <td>`items`</td>
    <td>An object array that defines individual annotation items that will be contained in one annotation group.</td>
  </tr>
</table>


To know how to create the different types of annotations, refer the following articles:

* [Creating Text Annotations](/advanced-charting/annotations/creating-annotations/creating-text-annotations)

* [Creating Image Annotations](/advanced-charting/annotations/creating-annotations/creating-image-annotations)

* [Creating Shape Annotations](/advanced-charting/annotations/creating-annotations/creating-shape-annotations)

* [Creating Path Annotations](/advanced-charting/annotations/creating-annotations/creating-path-annotations)
