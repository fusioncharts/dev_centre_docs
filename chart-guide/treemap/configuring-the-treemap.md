---
permalink: chart-guide/treemap/configuring-the-treemap.html
title: Configuring the Treemap | FusionCharts
description: Some ways by the help of which you can customize your treemap are, setting tiling algorithm, enable/disable the use of a navigation bar, set custom colors, etc
heading: Configuring the Treemap
chartPresent: true
---

FusionCharts Suite XT lets you configure the functionality of your treemap. There are various ways in which you can customize your treemap—for example, you can set the tiling algorithm (decide how the chart will be divided into nodes), enable/disable the use of a navigation bar to traverse through the chart, set custom colors for the nodes, customize all the texts in the chart canvas, customize the data labels separately, set glowing effect and so on.

In this section, you will be shown how you can:

* <a href="/chart-guide/treemap/configuring-the-treemap#navigation-bar-with-traversal-path" class="smoth-scroll">Use the navigation bar with traversal path</a>
* <a href="/chart-guide/treemap/configuring-the-treemap#coloring-the-treemap-data-plots" class="smoth-scroll">Color The data plots</a>
* <a href="/chart-guide/treemap/configuring-the-treemap#customizing-individual-data-plots" class="smoth-scroll">Customize data plots</a>
* <a href="/chart-guide/treemap/configuring-the-treemap#customizing-all-text-within-the-chart-canvas" class="smoth-scroll">Customize All Text Within the Chart Canvas</a>
* <a href="/chart-guide/treemap/configuring-the-treemap#customizing-only-the-data-labels" class="smoth-scroll">Customize Only the Data Labels</a>
* <a href="/chart-guide/treemap/configuring-the-treemap#applying-the-glow-effect-to-data-labels" class="smoth-scroll">Apply the Glow Effect to Data Labels</a>

## Navigation Bar with Traversal Path

In a treemap, the navigation bar displays a traversal path and allows you to go back to any of the traversed parent by clicking on it.

A simple treemap with __navigation bar__ is shown below : 

<p class="text-info"> Click the rectangles in each chart to traverse through the chart and see how the chart view changes. </p>

{% embed_all chart-guide-treemap-chart-configuring-the-treemap-chart-example-9.js %}

This treemap shows the global population by continent as of 2015 with their literacy rate.

In the above chart when a child node is clicked, the clicked node and its subtree replaces the current root node. For example, when any node under Southeast Asia Region is clicked, the chart view changes to what is shown in the image below:

![Treemap with Southeast Asia as the current node](/assets/images/chart-guide-treemap-chart-configuring-the-treemap-chart-image-2.png)

Observe that all the parent nodes are visible in the navigation bar and you can switch to any of them directly by clicking them.

Given below is a brief description of the attribute used to render the treemap with a navigation bar :

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `showNavigationBar` </td>
		<td> This attribute displays the navigation bar which will either show the traversed path and will provide an ability to switch to any traversed parent in a click or a previous toolbar that only allows to go back one step or at root level. </td>
	</tr>
</table>

## Coloring the Treemap Data Plots

In a data-driven treemap, color ranges are used to define colors for data plots based on their values. For a treemap, data plot colors can be defined:

* automatically, depending on the data value, using the `colorRange` object
* manually, using the `fillColor` attribute

The data plot color in the sample treemap used so far is assigned using the `colorRange` object. The `colorRange` object is used to define the numeric ranges for the gradient legend. A color is then assigned to a data plot based on where the value of the `sValue` attribute falls within the numeric range.

## Customizing Individual Data Plots

Given below is a brief description of attributes that can be used to customize individual data plots:

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `fillColor` </td>
		<td> Sets the hex code for the color to be used for the data plot. The `fillColor` attribute belongs to the `data` object. </td>
	</tr>
	<tr>
		<td> `fontColor` </td>
		<td> Sets the hex code for the color to be used for the data plot label. The `fontColor` attribute belongs to the `data` object. </td>
	</tr>
</table>

<p class="text-info"> Only the font color can be customized for individual data plots. Other font customizations like the font family or the font size are not available at the individual data plot level. </p>


## Customizing All Text Within the Chart Canvas

The base font customization attributes affect all text on the chart, including all the captions and sub-captions.

Given below is a brief description of the base font customization attributes:

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `baseFont` </td>
		<td> Sets the font family for the text <br> <br> __Note__: The base font attributes affect all text on the chart, including all the captions and sub-captions. </td>
	</tr>
	<tr>
		<td> `baseFontSize` </td>
		<td> Sets the font size for the text <br> <br> __Note__: The base font attributes affect all text on the chart, including all the captions and sub-captions. </td>
	</tr>
	<tr>
		<td> `baseFontColor` </td>
		<td> Sets the hex code for the text color <br> <br> __Note__: The base font attributes affect all text on the chart, including all the captions and sub-captions. </td>
	</tr>
</table>


## Customizing Only the Data Labels

The label font customization attributes affect only the data labels. 

Given below is a brief description of the label font customization attributes:

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `labelFont` </td>
		<td> Sets the font family for the label text <br> <br> __Note__: The label font attributes affect only the data labels on the chart. </td>
	</tr>
	<tr>
		<td> `labelFontSize` </td>
		<td> Sets the font size for the label text <br> <br> __Note__: The label font attributes affect only the data labels on the chart. </td>
	</tr>
	<tr>
		<td> `labelFontColor` </td>
		<td> Sets the hex code for the label text color <br> <br> __Note__: The label font attributes affect only the data labels on the chart. </td>
	</tr>
	<tr>
		<td> `labelFontBold` </td>
		<td> Set this attribute to `1` to enable bold formatting for the label text, set it to `0` (default) to disable it. <br> <br> __Note__: The label font attributes affect only the data labels on the chart. </td>
	</tr>
	<tr>
		<td> `labelFontItalic` </td>
		<td> Set this attribute to `1` to render label text in italics, set it to `0` (default) to render it in normal formatting. <br> <br> __Note__: The label font attributes affect only the data labels on the chart. </td>
	</tr>
</table>


## Applying the Glow Effect to Data Labels

The glow effect in treemap labels is the application of background color to the __data labels__, in a color different from the `labelFontColor`.

The glow effect is useful when the data label font color and the rectangle fill color is the same or similar, especially when the chart is rendered with a gradient legend.

A sample treemap with the data labels customized is shown below:

{% embed_all chart-guide-treemap-chart-configuring-the-treemap-chart-example-2.js %}

Given below is a brief description of the attributes used to customize the glow effect for data labels:

<table>
	<tr>
		<th> Attribute Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> `labelGlow` </td>
		<td> Set this attribute to `1` to enable the glow effect, set it to `0` (default) to disable it. </td>
	</tr>
	<tr>
		<td> `labelGlowIntensity` </td>
		<td> Sets the intensity of the glow effect </td>
	</tr>
	<tr>
		<td> `labelGlowColor` </td>
		<td> Sets the hex code for the glow effect color </td>
	</tr>
	<tr>
		<td> `labelGlowRadius` </td>
		<td> Sets the radius for applying the glow effect around the label </td>
	</tr>
</table>

Click [here](/chart-attributes?chart=treemap) for the complete list of attributes supported by the treemap.