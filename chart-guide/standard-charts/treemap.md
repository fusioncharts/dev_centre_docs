---
title: Treemap | FusionCharts
description: Master the art of data exploration with our Treemap chart guide! Learn the details of this tool offered by FusionCharts. Enhance your dashboards today!
heading: Treemap
---

> This chart type belongs to **PowerCharts XT**.

Treemapping is a visual representation of an information tree created using the tree data structure. It is displayed as 2D nested rectangles, representing the nodes and leaves of the tree data and their relations with each other.

{% embed_chartAnatomy treemap-chart.json %}

A simple treemap will look like as shown below:

{% embed_all standard-charts-treemap-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/dhauz809/) to edit the above chart.

Click the rectangles in the treemap shown above and see how you can traverse through the leaf nodes.

## Applications of a treemap

Use a treemap to display hierarchical information presented using a tree structure. You can, for instance, use a treemap to show the folder structure of a system. You can also use it to study patterns and occurrences in a large dataset since the color, and the size dimensions are correlated.

## Visualization of a treemap

In the image given below, you can see how an information tree is translated to the treemap:

![TreeMap](/images/standard-charts-treemap-image-1.jpg)

## How to build a good treemap

* Structure the data so that it has only one root element.

* Represent a dimension, a trend, or a deviation from a key value with the color of a rectangle.

* Represent the innermost rectangle as the leaf node. The area of this rectangle is always proportional to the data value assigned to that leaf.

* Avoid nesting nodes that are not leaves. The areas of these rectangles are less significant.

* To build an ideal treemap, maintain the aspect ratio as 1.

> The treemap should utilize maximum space on the screen. If you manage the available space efficiently, you can plot thousands of items in a treemap.

## Important concepts related to the treemap

### Tiling

Tiling is the process, by which a treemap divides large rectangles into smaller sub-rectangles. Ideally, a treemap tiling algorithm creates rectangles with an aspect ratio that is close to one, with ordering based on the underlying data tree. 

These properties have an inverse relationship, though. You need to choose between optimizing the order of placement and the aspect ratio. When you optimize the aspect ratio, the order of placement becomes less predictable. On the other hand, if you stabilize the order of placement, the aspect ratio degrades. Therefore, you can categorize tiling algorithms like the ones that:

* Support low aspect ratio

* Support high stability

* Try to strike a balance between the two

### Aspect Ratio

Aspect ratio, especially for the innermost rectangle, is one of the most significant constraints in a treemap chart. If the aspect ratio is high, the treemap has thin rectangles, which are extremely difficult to compare. In the ideal case, where the treemap aspect ratio is expected to be 1, the nested rectangles are squares that are much easier to compare, at a glance. 

> The aspect ratio is never exactly 1 in real-life use-cases, but there are algorithms that try to keep it to 1, by trading off the order.

In the table below, you can see the commonly used algorithms, as well as the trade-offs that you must make when using them:

Algorithm|Order|Aspect Ratio|
-|-|-
Slice and dice|Ordered|Very high|
Squarified|Unordered|Lowest|

Other algorithms that you can use include:

* Binary tree

* Mixed treemaps

Presently, the FusionCharts Treemap supports only the ***slice and dice*** and the ***squarified*** algorithms. Support for more algorithms is subject to consideration in the future releases.

## Interact with a Treemap

### Interaction Model (as-is)

The basic interaction model for the treemap includes the following:

* Left-click: When you left-click a rectangle on the treemap, the tree traverses down. The root node changes to the clicked node, plotting only the subtree of the clicked node. If the tree cannot be traversed, the model fails silently.

* Right-click: When you right-click a rectangle on the treemap, the tree traverses up. The root node is replaced with the node that is its immediate ancestor. If the tree cannot be traversed, the model fails silently.

* Hover: When you hover the mouse pointer over a rectangle on the treemap, the complete subtree that belongs to that node is highlighted.

* Legend: You can incorporate an optional gradient legend in a treemap to filter the nodes.

### FusionCharts treemap interaction model

FusionCharts implements the following model for interacting with a treemap:

#### The initial stage

To drill-down to a leaf node, click directly on that node. For example, click on any node in the Northern Region to change the chart view.

Then, to go back one level up, click on Northern Region in the header of the view, or the ***Back to Parent*** button on the top-right corner of the chart. You can also go directly back to the initial stage. To do so, click the ***Back to Top*** button on the top-right corner of the chart. 

![Treemap-GIF-1](/gif/standard-charts-treemap-gif-1.gif)

## Create a simple treemap

A treemap is useful when you need to analyze hierarchical information. You can compare the 2D nested rectangles of a treemap to quickly gain insights from the data. To render a treemap chart, include fusioncharts.treemap.js in the project folder with the rest of the .js files as mentioned [here](/getting-started/plain-javascript/your-first-chart-using-plain-javascript#installation-and-including-dependencies).

Use the following attributes to build a simple treemap:

* Use the `type` attribute to set the chart type as `treemap`.

* Use the `renderAt` attribute to specify the container object, within which the chart will be rendered.

* Use the `width` attribute to set the width of the chart, in pixels.

* Use the `height` attribute to set the height of the chart, in pixels.

* Use the `dataFormat` attribute to set the format, in which data will be passed to the `chart` object. Note that this attribute can accept anyone among two different sets of values - either `json` (JSON data to render the chart is passed to the `dataSource` attribute) and `jsonurl` (the relative path to a .json file is passed to the `dataSource` attribute) or `xml` and `xmlurl`.

* Use the `dataSource` attribute to specify the source from which the chart will fetch data, depending on the value passed to the `dataFormat` attribute.

* Use the `caption` attribute, to specify the chart caption.

* Use the `subCaption` attribute, to specify the chart sub-caption.

* Use the `label` attribute to specify the label for a data item. The value of this attribute is rendered within the rectangle for the particular item.

* Use the `value` attribute to set the area of the rectangle (node) for a particular data item. 

* Use the `sValue` attribute to specify the secondary value for a data item. This value is used to set the color (based on the color range defined using the `colorRange` object) of the rectangle (node).

The Treemap will look like as shown below:

{% embed_all standard-charts-treemap-example-1a.js %}

Click [here](http://jsfiddle.net/fusioncharts/dhauz809/) to edit the above chart.

> The treemap shown above compares the sales team's performance in the present year with their performance in the previous year. Click on a rectangle to replace the node with the current root node. For example, click on any rectangle (node) in the Northern Region to change the chart view as shown in the image below:

> ![Treemap-GIF-2](/gif/standard-charts-treemap-gif-2.gif)

## Render a gradient legend

You can have a treemap rendered with the gradient legend, which is a pane of blended colors derived from the `colorRange` definitions. You can have the linear scale drawn with a pair of draggable pointers. That way, each color you define for a numeric range will blend into the next color at its end point, forming a gradient strip. Each point on the gradient scale will represent a unique color and value. As such, all different values in the chart will appear in unique colors as per their positions on the gradient scale.

Use the following attributes to render a treemap with a gradient legend:

* Set the value of the `showLegend` attribute to `1`, to display the legend.

* Set the value of the `gradient` attribute to `1`, to display the gradient legend. Note that to render a gradient legend, you have to set the values of both the `showLegend` and the `gradient` attributes to `1`.

* Set the value of the `startLabel` attribute to the lower limit on the gradient legend scale.

* Set the value of the `endLabel` attribute to the upper limit on the gradient legend scale.

Apart from the attributes detailed above, you also need to set the values of 3 other attributes (detailed below) under the `color` object, which defines color ranges for the gradient legend scale.

* Set the value of the `code` attribute to the hex color code for a color range on the gradient legend scale.

* Set the value of the `maxValue` attribute to the upper limit for a color range on the gradient legend scale. Note that this limit is inclusive of the value you assign to this attribute.

* Set the value of the `label` attribute to the label contents for a color range on the gradient legend scale. Note that the value will be rendered within the tooltip text for all nodes that fall under this color range.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        ...
    }],
    "colorrange": {
        "mapbypercent": "1",
        "gradient": "1",
        "minvalue": "-25",
        "code": "e24b1a",
        "startlabel": "Decline",
        "endlabel": "Rise",
        "color": [{
            "code": "ffffff",
            "maxvalue": "0",
            "label": "Static"
        }, {
            "code": "6da81e",
            "maxvalue": "25",
            "label": "AVERAGE"
        }]
    }
}
```

> The value you assign to the `sValue` attribute in the chart data will be used to assign a color to a data plot, based on the numeric range it falls within.

The gradient legend will look like as shown in the image below:

![Gradient-Legend](/images/standard-charts-treemap-image-2.jpg)

### Show/hide data values using the gradient legend

You can use the interactive gradient legend to filter nodes within a specific range of values. Drag the scale pointers to set the required lower and upper limits.

A sample treemap with the gradient legend set to show only those nodes that have values (assigned to the `sValue` attribute) between `-10` and `10` is shown in the image below. 

> Notice that the nodes that don't fall in this bracket are all grayed out.

![Treemap-GIF-3](/gif/standard-charts-treemap-gif-3.gif)

Click [here](/chart-attributes/?chart=treemap) for the complete list of attributes supported by the treemap.

## Set tiling algorithm for the treemap

Tiling is the process of dividing large rectangles into smaller sub-rectangles. Ideally, a treemap tiling algorithm creates rectangles with an aspect ratio that is close to 1, with ordering based on the underlying data/information tree.

The tiling algorithm affects how the larger rectangles are divided into smaller sub-rectangles, thus affecting how the chart looks like. FusionCharts supports the following algorithms:

### Use the squarified algorithm

The squarified algorithm for the treemap is visually appealing, in part because the nodes are close to `square` shapes, but it comes at the cost of unordered nodes. You might, however, prefer the squarified algorithm over slice and dice algorithm because of the `low aspect ratio`, which means you can easily compare the sub-nodes.

Set the value of the `algorithm` attribute to `squarified`, to use the latter as the tiling algorithm.

Refer to the code below:

```json
{
	"chart": {
		"algorithm": "squarified"
	}
}
```

The chart will look like as shown below:

{% embed_chart standard-charts-treemap-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/myz9pjpw/) to edit the above chart.

### Use the slice and dice algorithm

In a treemap, the slice and dice tiling algorithm is one of the simplest algorithms and offers excellent stability, while preserving the ordering of data. The trade-off, however, lies in its high aspect ratio, resulting in the treemap being drawn as thin rectangles, which are difficult to compare.

Still, if you want to use this algorithm, use the following attributes to do so. Note that you can use this algorithm in 3 different modes. 

* Set the value of the `algorithm` attribute to `sliceanddice`.

* Set the value of the attribute `slicingMode` to the mode you want to use for the chart:

    * `vertical`: In this mode, all the nodes in the nth level are sliced vertically, and the ones in the n+1 th level are sliced horizontally, beginning at level 1.

    * `horizontal`: In this mode, all the nodes in the nth level are sliced horizontally and the ones in the n+1 th level are sliced vertically, beginning at level 1.

    * `alternate`: In this mode, rectangles are sliced alternatively in the same level.

Find an example of each slicing mode, given below:

**Vertical Mode**

In the chart given below, you can see the nodes of the manufacturers (say Toyota Group, BMW Group) are sliced vertically, but their child nodes are sliced horizontally.

Refer to the code below:

```json
{
	"chart": {
		"algorithm": "sliceanddice",
		"slicingmode": "vertical"
	}
}
```

The chart looks like as shown below:

{% embed_chart standard-charts-treemap-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/LL6rqgk4/) to edit the above chart.

> In the chart given above, you can compare the performances of top selling car manufacturers in Europe in the present year with that in the previous year. Click the rectangles to traverse through the chart and see how the chart view changes.

**Horizontal Mode**

To set slicing mode to `horizontal`, refer to the code below:

```json
{
	"chart": {
		"algorithm": "sliceanddice",
		"slicingmode": "horizontal"
	}
}
```

The chart looks like as shown below:

{% embed_chart standard-charts-treemap-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/2xoeqm8j/) to edit the above chart.

**Alternate Mode**

When you set slicing mode to `alternate`, refer to the code below:

```json
{
	"chart": {
		"algorithm": "sliceanddice",
		"slicingmode": "alternate"
	}
}
```

The chart looks like as shown below:

{% embed_chart standard-charts-treemap-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/buksebna/) to edit the above chart.

Click [here](/chart-attributes/?chart=treemap) for the complete list of attributes supported by the treemap.

## Configure the Treemap

Using FusionCharts Suite XT, you can configure the functionality of your treemap. There are various ways in which you can customize your treemap. For instance, you can:

* Set the tiling algorithm (decide how the chart will be divided into nodes). 

* Enable/disable the use of a navigation bar to traverse through the chart.

* Set custom colors for the nodes.

* Customize all the texts in the chart canvas.

* Customize data labels separately.

* Set glowing effects, and so on.

### Render navigation bar with traversal path

In a treemap, the navigation bar displays a traversal path, which you can use to return to any of the traversed parents, simply by clicking on it. 

Set the value of the `showNavigationBar` attribute to `1`, to show a navigation bar on a treemap. The bar can show the traversed path and provide the ability to switch to any traversed parent in a click. Otherwise, it can also provide the ability to return to a previous toolbar (which you can only use to go back one step) or to the root level.

Refer to the code below:

```json
{
	"chart": {
		"showNavigationBar": "1"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/uL36xvxx/) to edit the above chart.

The treemap above shows the global population by continent as of 2015 with their literacy rate.

When you click on a child node, the clicked node and its subtree will replace the current root node. For example, when you click on any node under Southeast Asia Region, the chart view will change to what is shown in the image below. Observe that all the parent nodes are visible in the navigation bar and you can switch to any of them directly by clicking on them. 

![Treemap-GIF-4](/gif/standard-charts-treemap-gif-4.gif)

### Color the treemap data plots

In a data-driven treemap, you can use color ranges to define colors for data plots, based on their values. For a treemap, you can define data plot colors:

* Automatically, depending on the data value, using the `colorRange` object.

* Manually, using the `fillColor` attribute.

Refer to the code below:

```json
{
	"chart": {
		...
	},
	"data": [{
        "label": "Top Selling Brands",
        "fillcolor": "595f5d",
        "value": "5800",
        "data": [{
            "label": "Samsung",
            "fillcolor": "838986",
            "value": "2217",
            "data": [{
                ...
            }]
        }]
    }],
    "colorrange": {
        ...
        "color": [{
            ...
        }]
    }
}
```

The treemap will look like as shown in the image below:

{% embed_chart standard-charts-treemap-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/x336y7ej/) to edit the above chart.

> The data plot color in the sample treemap used so far has been assigned using the `colorRange` object. Use `colorRange` object to define the numeric ranges for the gradient legend. Then you can assign a color to a data plot, based on where the value of the `sValue` attribute falls within the numeric range.

## Customize individual data plots

Use the following attributes to customize individual data plots:

* Set the hex code for the color to be used for the data plot, using the `fillColor` attribute.

* Set the hex code for the color to be used for the data plot label, using the `fontColor` attribute.

> Customize the font color for individual data plots. Other customizations like the font family or the font size are unavailable at the individual data plot level.

Refer to the code below:

```json
{
	"chart": {
		...
	},
	"data": [{
        "label": "Top Selling Brands",
        "fillcolor": "595f5d",
        "value": "5800",
        "data": [{
            "label": "Samsung",
            "fillcolor": "838986",
            "value": "2217",
            "data": [{
                "label": "Galaxy Note 4",
                "value": "519",
                "sValue": "1.09",
                "fillColor": "1b7ac7"
            }{
                ...
            }]
        }]
    }],
    "colorrange": {
        ...
        "color": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/4av9kLrc/) to edit the above chart.

## Customize chart text

Use the following attributes to customize all text within the chart canvas, including all the captions and sub-captions:

* Set the font family for the text using the `baseFont` attribute. 

* Set the font size for the text using the `baseFontSize` attribute. 

* Set the hex code of the color for the text using the `baseFontColor` attribute. 

> The base font attributes affect all text on the chart, including all the captions and sub-captions.

Refer to the code below:

```json
{
	"chart": {
		"baseFont": "Arial",
		"baseFontSize": "11",
		"baseFontColor": "59605e"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/4pnjj3c9/) to edit the above chart.

## Customize data labels

Use the following attributes to customize only the data labels in the chart:

* Set the font family for the label text using the `labelFont` attribute.

* Set the font size for the label text using the `labelFontSize` attribute.

* Set the hex code for the label text color using the `labelFontColor` attribute.

* Display the label text in bold formatting, by setting the value of the `labelFontBold` attribute to `1`.

* Display the label text in italic formatting, by setting the value of the `labelFontItalic` attribute to `1`.

> The label font attributes affect only the data labels on the chart.

Refer to the code below:

```json
{
	"chart": {
		"labelFont": "Arial",
		"labelFontSize": "12",
		"labelFontColor": "ff0000",
		"labelFontBold": "1",
		"labelFontItalic": "1"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/mbze14ch/) to edit the above chart.

## Apply a glow effect to data labels

You can apply a background color different from the label font color to data labels, generating a glow effect. This is useful when the data label font color and the rectangle fill color are either same or similar, which can happen when the chart is rendered with a gradient legend.

Use the following attributes to customize the glow effect for data labels:

* Set the value of the `labelGlow` attribute to `1`, to enable the glow effect.

* Set the intensity of the glow effect, using the `labelGlowIntensity` attribute. 

* Set the hex code for the glow effect color, using the `labelGlowColor` attribute.

* Set the radius for applying the glow effect around the label, using the `labelGlowRadius` attribute.

Refer to the code below:

```json
{
	"chart": {
		"labelGlow": "1",
		"labelGlowIntensity": "50",
		"labelGlowColor": "#cccc00",
		"labelGlowRadius": "10"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/5r3oa3r5/) to edit the above chart.

## Use events in the treemap

Using FusionCharts Suite XT, you can configure standard interactivity for items like tooltips and gradient legend, through the treemap attributes. However, if you need to further extend chart interactivity, you can raise the following JavaScript events for this chart, and then build your custom modifications over them:

* The `beforeDrillDown` event is triggered just before the chart is rendered when you drill down to a child node.

* The `drillDown` event is triggered just after the chart is rendered when you drill down to a child node.

* The `beforeDrillUp` event is triggered just before the chart is rendered, when you drill up to the immediate parent node or the root node.

* The `drillUp` event is triggered just after the chart is rendered when you drill up to the immediate parent node or the root node.

* The `drillDownCancelled` event is triggered when the `beforeDrillDown` event is interrupted.

* The `drillUpCancelled` event is triggered when the `beforeDrillUp` event is interrupted.

Refer to the code below:

```json
{
	"chart": {
		"beforeDrillDown": "",
		"drillDown": "",
		"beforeDrillUp": "",
		"drillUp": "",
		"drillDownCancelled": "",
		"drillUpCancelled": ""
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-treemap-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/d36cqn7s/) to edit the above chart.
