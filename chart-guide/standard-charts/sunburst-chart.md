---
title: Sunburst | FusionCharts
description: A Sunburst chart is used to visualize relationships within hierarchical data. It shows hierarchy through a series of concentric rings, where each ring corresponds to a level in the hierarchy.
heading: Sunburst
---

> This chart type belongs to PowerCharts XT

A Sunburst chart is used to visualize relationships within hierarchical data. It shows hierarchy through a series of concentric rings, where each ring corresponds to a level in the hierarchy. Each ring can have multiple segments; each segment showing the contribution of a particular dimension in that hierarchy. Focussing on a segment in the ring gives a sense of the part to the whole relationship of this dimension with respect to its parent ring segment.

The Sunburst chart is most effective at showing how one ring is broken into its contributing pieces (i.e, sequential segments). It is a space-filling visualization that uses a radial, rather than a rectangular layout (like a [Treemap](/chart-guide/standard-charts/treemap)).

> A Sunburst chart shares similarities with a Ring Chart, Multi-level Pie Chart, Belt Chart, and a Radial Treemap.

To create a sunburst chart follow the steps given below:

- In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

- Specify the chart type using the `type` attribute. To render a sunburst chart, set `sunburst`.

- Set the container object using `renderAt` attribute.

- Specify the dimension of the chart using `width` and `height` attributes.

- Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/sunburst) page of sunburst chart.

A Sunburst chart looks as follows:

{% embed_chart standard-charts-sunburst-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/onu3sm2t/) to edit this chart.

In the above chart, you can see how different segments of the chart representing different sections of data and colored accordingly.

## Important Concepts Related to Sunburst Chart

### Visualizing Hierarchy in Data

A Sunburst diagram can display a near-infinite number of levels of data hierarchy. Note that if there is only one level of hierarchy in data, the chart would become a [doughnut](/chart-guide/standard-charts/pie-and-doughnut-charts#doughnut-2d-chart) chart. Levels are represented by concentric rings, with the top level of the hierarchy at the center and deeper levels radiating farther away.

The individual segment in each level of the hierarchy is referred to as a `node`. Any ring segment without a **child node** is a **leaf node**. Any node without a **parent node** is a **root node**.

### Understanding Part-to-Whole Relationship

Each child node in a Sunburst diagram represents a part of the value of its parent node. By summing the value of all the children node, you get the value of the parent node (ring segment). The sweep of each ring segment is proportional to its value.

### Sweep Angle of Segments

The sweep angle of each segment in a ring encodes the data value of each contributing member. The larger the total value of a segment, the greater the sweep angle covered by it.

### Colors of Categories

Each node (other than the root nodes) inherits the color of its parent node. This helps you identify parent-child and sibling relationships within the data.

### Drill Down

By default, the sunburst chart supports drill down, i.e, when you click on a node, it is displayed along with its child nodes to highlight the relationship between them. This happens for any node except the root nodes on the first and the leaf nodes on the last ring. If you click on the parent node again, the chart reverts to the original state.

### Assigning Values to Nodes

In a Sunburst chart, leaf nodes are displayed only when you mention their values. The value of a parent node must be equal to, or greater than the sum of values assigned to its child nodes. By default, the sum of the values of all child nodes is assigned to the parent node.

### Rotated Labels

Sunburst displays rotated labels. The angle of rotation of each label depends on the start angle and end angle of the ring that the node is associated with.

## Configurations of Sunburst Chart

### Enable/Disable Drill Down

By default, when you click on a node (except the root nodes on the first and the leaf nodes on the last ring), the chart drills down, i.e., displays a subset of data consisting of that node and its child nodes. To disable this feature, set the value of the `allowDrillToNode` attribute to `0`.

Use the code given below:

```javascript
{
	"chart": {
        "allowDrillToNode": "0"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/0ztw4qo8/) to edit this chart.

### Specify Value of Inner Radius

When a root has only one parent node, the value of `innerRadius` is set to `0` by default. However, if a root has multiple parent nodes, then a default value of 30 pixels is assigned to `innerRadius`.

Use the code given below:

```javascript
{
	"chart": {
        "innerRadius": "40"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/0urya5pw/) to edit this chart.

### Set Center Angle

Imagine a line bisecting the Sunburst Diagram. The angle that line makes with the origin (0,0) is the center angle for the Sunburst. You can specify the center angle of the Sunburst Diagram using the attribute `centerAngle`.

Use the code given below:

```javascript
{
	"chart": {
        "centerAngle": "90"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/ga7563nw/) to edit this chart.

In the above chart, you can see that the value of `centerAngle` is set to `90`.

### Set Total Angle

You can restrict the total angle covered by a Sunburst diagram using the `totalAngle` attribute. When you set its value, the available angle is distributed among the categories in the data. Each category is assigned a percentage of the total space proportional to its value.

The `totalAngle` attribute directly controls how the Sunburst diagram looks. For instance, if you set its value to `180`, you will get a half Sunburst.

Use the code given below:

```javascript
{
	"chart": {
        "totalAngle": "180"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/frb9x0pv/) to edit this chart.

In the above chart, the value of `totalAngle` is set to `180`, resulting in a half Sunburst.

### Set Fill Color

You can specify the color of the nodes. To do so, set the value of the `paletteColors` attribute to the hexadecimal code of the desired color. Note that if you do not specify any color, the nodes are colored as follows:

- Each node in the first level of the hierarchy has different colors from the default palette. If there is only one root node, coloring logic is applied from the level after the one with the root node. For more than one root node, the coloring logic is applied from the root level.

- Subsequent child nodes inherit the colors of their parent nodes.

Use the code given below:

```javascript
{
	"chart": {
       "paletteColors": "ffffff, A88CCC, 77ECC8, 97FAA4, CFF69D, EED482, FFAE91, FE93B5, D98ACF, 7BCDE8, 94A8E9",
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/ftbcj4gx/) to edit this chart.

### Configure Hover Effects

You can configure several hover effects that occur when you hover over a node. These effects are applied to the node hovered over, as well as its parent nodes.

- Set the value of the attribute `hoverFillColor` attribute to the hexadecimal value of the desired color of the nodes. By default, the value of `hoverFillColor` is set to the color of the segment the hovered node belongs to.

- Set the value of the `hoverFillAlpha` (between `0` for transparent and `100` for opaque) to set the transparency of the hovered node and its parent nodes.

- Set the value of the `unfocussedAlpha` attribute (between `0` for transparent and `100` for opaque) to set the transparency of the nodes other than the hovered node.

Use the code given below:

```javascript
{
	"chart": {
		"hoverFillColor": "#FF0000",
		"hoverFillAlpha": "50",
		"unfocussedAlpha": "50"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/0fqryv7b/) to edit this chart.

### Configure Inner Radius

You can configure the inner radius of a Sunburst chart. To do so, set the value of the `innerRadius` attribute to the desired value. If you want to assign a custom value to `innerRadius` where a root node has multiple parent nodes, ensure that it is greater than `30`. If you provide a value less than `30`, the value will be ignored and the chart will maintain a value of `30`.

Use the code given below:

```javascript
{
	"chart": {
		"innerRadius": "40"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/0urya5pw/) to edit this chart.

### Configure Highlight Effects

The Sunburst chart supports several highlight effects, which are activated when you move the mouse pointer over relevant elements in the chart.

#### Highlight Child Segments

In a sunburst chart, parent nodes (all the way to the root node) are highlighted when you hover the pointer over a child node. This is controlled by the attribute `highlightChildPieSlices`, whose value is set to `0` by default. To instead highlight all child nodes when you hover the pointer over a parent node, set the value of `highlightChildPieSlices` to `1`.

Use the code given below:

```javascript
{
	"chart": {
		"highlightChildPieSlices": "1"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/p94jehbn/) to edit this chart.

#### Set Transparency of Unrelated Nodes

When you hover the pointer over a node, all nodes (except the hovered node and its parent nodes) turn transparent. This behavior is controlled by the attribute `unfocussedAlpha`, whose value is set to `0` by default. To instead keep every node visible across the chart, set the value of `unfocussedAlpha` to `100`.

Use the code given below:

```javascript
{
	"chart": {
		"unfocussedAlpha": "20"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/zpnwo61k/) to edit this chart.

#### Set Transparency of Hovered Node

When you hover over a node, it becomes opaque. This behavior is controlled by the `hoverFillAlpha` attribute, whose value is set to `100` by default. To instead turn the node transparent, set the value of `hoverFillAlpha` to `0`.

Use the code given below:

```javascript
{
	"chart": {
		"hoverFillAlpha": "20"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/n4s8t29y/) to edit this chart.

#### Configure Fill Color of Hovered Node

By default, a hovered node retains its color when hovered. This is controlled by the `hoverFillColor` attribute, which inherits the value of the `fillColor` attribute. To change this behavior, and set a neutral color (for instance, red) for a hovered node, set the value of `hoverFillColor` to the hexadecimal code of the desired color.

Use the code given below:

```javascript
{
	"chart": {
		"hoverFillColor": "#FF0000"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sunburst-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/byrhf409/) to edit this chart.
