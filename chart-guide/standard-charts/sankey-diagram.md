---
title: Sankey Diagram | FusionCharts
description: Sankey Diagram is a type of flow diagram that depicts the flow of resources from one node to another.
heading: Sankey Diagram
---

> This chart type belongs to PowerCharts XT

Sankey Diagram is a type of flow diagram that depicts the flow of resources (material, energy, cost, etc.) from one node to another. The start and endpoints of each flow are called **nodes** and the flow paths between them are called **links**. There can only be one link between a pair of nodes. The value of the flow between each pair of nodes is encoded by the width of the link. The coloration of the links help establish visual mapping with their respective nodes.

{% embed_chartAnatomy sankey-diagram.json %}

To create a sankey diagram follow the steps given below:

-  In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

-  Specify the chart type using the `type` attribute. To render a sankey diagram, set `sankey`.

-  Set the container object using `renderAt` attribute.

-  Specify the dimension of the chart using `width` and `height` attributes.

-  Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes/sankey) page of sankey diagram.

A Sankey Diagram can be drawn in either a **horizontal layout (default)** or a **vertical layout**. A Sankey Diagram with horizontal orientation looks as shown below:

{% embed_chart standard-charts-sankey-diagram-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/7vj02hxd/) to edit the chart.

There are **19** nodes in the Sankey Diagram provided above. A link connects any two nodes that are related to one another (i.e, a flow happens between them). If you hover over a node, you will see all the links (or relationships) associated with it. Hovering on a link will show both are nodes associated with it.

## Important Concepts Related to Sankey Diagram

Sankey diagrams can be used to represent flow data. The flow happens from one node to another using a connecting link. No node should be repeated in the entire diagram and there should be at most one link between a pair of connecting nodes.

Some crucial concepts are briefed below:

### Node

Nodes are crucial junctures in a flow diagram. Each node can have inflow and outflow of the flow resource. In our Sankey diagrams, they are currently represented by rectangles. A ton of customizations including size, color, label, padding, etc is possible.

> Each node should occur only once in a Sankey diagram.

> To customize the nodes, define 'nodes' object and specify the parameters for each node `label`.

### Link

Links are paths that connect the nodes. They give direction to the flow. They are fluid in nature and take shaped (or curve) based on the nodes which they connect. Each link should know it's source and sink nodes. The flow value is encoded by the width of the link. They can be customized in terms of color, curvature, and value.

> If a link does not have a 'from' and 'to' node, it will not be drawn.

> There should be the utmost one link between a pair of nodes.

### Flow values

Each link in a Sankey Diagram represents flow from a source node to a target node. The direction of flow is left to right for a horizontal Sankey Diagram and top to bottom for a vertical diagram. The thickness of each link is dictated by the amount of flow from a source node to sink node. Cumulative flow values can be displayed on nodes.

> Flow values are defined inside the `link` object by `value` parameter.

## Salient Features

### Orientation

The orientation of a Sankey Diagram can be either horizontal or vertical. To do so, set the value of the `orientation` attribute to `horizontal` or `vertical` respectively. By default, it is set to `horizontal`.

Use the code given below:

```javascript
{
  "chart": {
    "orientation": "vertical";
  }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/ejnospL1/) to edit the above diagram.

### No Node Sankey

If you set the value of the `nodeWidth` attribute to `0` under the `chart` object in a Sankey Diagram, the nodes are not rendered. The resultant chart only displays the links and is referred to as a No Node Sankey.

Use the code given below:

```javascript
{
  "chart": {
    "nodeWidth": "0";
  }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/edwup75x/) to edit the above diagram.

### Blend Mode

The Sankey Diagram supports a `blend` mode for link colors. To apply this mode, you need to set the value of the `linkColor` attribute to `blend`. When you do that, a gradient formed by the combination of the colors of the source and target nodes is applied to the link. You can mention this under the `chart` object to apply the blend mode to every link in a chart. Otherwise, you can mention it under the `links` object to apply it to a particular link.

Use the code given below:

```javascript
{
  "chart": {
    "linkColor": "blend";
  }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/7vj02hxd/) to edit the chart.

### Drag

You can drag a node in a Sankey Diagram in a vertical direction for horizontal Sankey and horizontal direction for vertical Sankey. By default, the drag feature is enabled for the Sankey diagram. To disable the drag, set the value of the `enableDrag` attribute to `0`.

Use the code given below:

```javascript
{
    "chart": {
        "enableDrag": "0"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/bLd6g9ju/) to edit the above diagram.

### Link Curvature

You can set the angle in which links in a chart are rendered. To do so, set the value of the `linkCurvature` attribute to `0`, `1`, or any decimal value between them. Note that if you set the value to `0`, the link will be rendered as a straight line, and if you set it to `1` it will be rendered with the maximum possible curvature.

You can set the curvature of all links globally in a chart. To do so, set the value of the `linkCurvature` attribute as mentioned above, and include it within the `chart` object. However, if you want to set the curvature of a single link, set the value of the `curvature` attribute as mentioned above, and include it within the `links` object for that particular link.

> If you set the curvature of a link both globally (under `chart` object) and locally (under `link` object), the local value will override the global value.

Refer to the code given below:

```javascript
{
    "chart": {
        "linkCurvature": "0"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/76aLxkct/) to edit the above diagram.

## Customizations of a Sankey Diagram

In the following sections, you will see the options for customizing nodes and links in a Sankey Diagram.

### Node Customizations

#### Set Node Width

You can set the width of nodes across the chart. To do so, set the value of the `nodeWidth` attribute to the desired value.

Use the code given below:

```javascript
{
  "chart": {
    "nodeWidth": "5";
  }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/r0bcdw8y/) to edit the above diagram.

#### Position Node Label

You can position a node label at the start, in the end, or inside a node. To do so, set the value of the `nodeLabelPosition` attribute to one of the following:

-  Set it to `start`, to position it to the left side of the node.

-  Set it to `right`, to position it to the right side of the node.

By default, the value of `nodeLabelPosition` is set to `end`.

> You can position the node labels of the Sankey diagram only when the value of `showNodeLabels` value attribute is set to `1`. The default of this attribute is `1`.

Use the code given below:

```javascript
{
    "chart": {
        "nodeLabelPosition": "right"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/1w2jc4gn/) to edit the above diagram.

#### Hide Node Labels

If the labels of the node create clutter in your Sankey diagram, FusionCharts allows you to hide all the labels in the chart. To do so, set the `showNodeLabels` attribute to 0.

Refer to the code below:

```javascript
{
    "chart": {
        "showNodeLabels": "0"
    }
}
```

The chart looks like as shown below:

{% embed_chart standard-charts-sankey-diagram-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/y1g3czs6/) to edit the above diagram.

To hide the specific label of a node, set the value of `showLabel` attribute to 0. The `showLabel` attribute should be called inside `nodes` array.

Refer to the code below:

```javascript
{
    "chart": { },
    "nodes": [{
        "label": "Netherlands",
        "showLabel": "0" //Disable Label of a particular node
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/dh8cswz9/) to edit the above diagram.

#### Show Node Values

To display the node values in the chart, set the value of the `showNodeValues` attribute to `1`. By default, its value is set to `0`.

Use the code given below:

```javascript
{
    "chart": {
        "showNodeValues": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/7kjdu2cs/) to edit the above diagram.

> To display the value for any specific node in the diagram, set the value of `showValue` attribute under `nodes` array.

#### Rotate Node Labels

You can rotate node labels to a vertical position instead of the default horizontal position. To do so, set the value of the `rotateNodeLabels` attribute to `1`. By default, its value is set to `0`.

Use the code given below:

```javascript
{
    "chart": {
        "rotateNodeLabels": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/gzy8efoc/) to edit the above diagram.

#### Set Padding between Nodes

You can add white space between consecutive nodes to make the chart look less cluttered. It will increase the vertical space between two consecutive nodes in a horizontal Sankey, and horizontal space between two nodes in a vertical Sankey.

You can add white space between consecutive nodes to make the chart look less cluttered. To do so, set the value of the `nodeSpacing` attribute to the desired value

Use the code given below:

```javascript
{
    "chart": {
        "nodeSpacing": "10"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/2rbsfac1/) to edit the above diagram.

#### Configure Node Relaxation

You can drag a node in a Sankey Diagram away from other nodes, to draw attention to it. In a horizontal Sankey Diagram, you can drag nodes in a vertical direction. In a vertical Sankey Diagram, you can drag nodes in a horizontal direction. By default, the Sankey Diagram will reposition nodes and introduce some space between them if necessary, to avoid overlapping. This behavior is controlled by the `nodeRelaxation` attribute. By default, the value of the attribute is set to `1`.

You can disable this behavior by setting the value of the `nodeRelaxation` attribute to `0`.

Use the code given below:

```javascript
{
    "chart": {
        "nodeRelaxation": "0"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/wpc43r2a/) to edit the above diagram.

### Node Cosmetics

You can apply the following customizations to the appearance of a node.

> Define the `nodes` array to specify the node cosmetics at individual node level.

#### Set Node Color

You can set the color of all nodes, across the Sankey Diagram. To do so, set the value of the `nodeColor` attribute to the hexadecimal value of the desired color, and include it within the `chart` object. However, if you want to set the color of a single node, set the value of the `color` attribute to the hex code of the desired color and include it within the `nodes` object for that particular node.

> If you set the color of a node both globally (under `chart` object) and locally (under `node` object), the local value will override the global value.

Refer to the code given below:

```javascript
{
    "chart": {
        "nodeColor": "#FFA816" //Applied to all the nodes in the diagram
    },
    "nodes": [{
        "label": "China",
        "color": "#ff0000" //Applied only to node of China
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/c854fvpj/) to edit the above diagram.

In the above chart, you can see that all nodes are of same color, except China's color which has been set locally.

#### Set Node Transparency

You can set the transparency of all nodes globally in a chart. To do so, set the value of the `nodeAlpha` attribute between `0` (transparent) and `100` (opaque), and include it within the `chart` object. On the other hand, if you want to set the transparency of a single node, set the value of the `alpha` attribute between `0` (transparent) and `100` (opaque) and include it within the `nodes` object for that particular node.

Note: If you set the transparency of a node both globally (under `chart` object) and locally (under `node` object), the local value will override the global value.

Refer to the code given below:

```javascript
{
    "chart": {
        "nodeAlpha": "50" //Applied to all the nodes in the diagram
    },
    "nodes": [{
        "label": "China",
        "alpha": "100" //Applied only to node of China
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/bovj87u9/) to edit the above diagram.

In the above chart, you can see that all nodes are opaque, except China for which the value of `alpha` is set to `100` locally.

#### Node Label Cosmetics

You can apply a series of cosmetic modifications to node labels. They are listed below:

-  Set the font of the node label text using the `nodeLabelFont` attribute.

-  Set the color of the node label text using the `nodeLabelFontColor` attribute.

-  Set the transparency (between `0` for transparent and `100` for opaque) of the node label using the `nodeLabelAlpha` attribute.

-  Set the background color of the node label using the `nodeLabelBgColor` attribute.

-  Set the border color of the node label using the `nodeLabelBorderColor` attribute.

-  Set the border thickness of the node label using the `nodeLabelBorderColor` attribute.

-  Set the font size of the node label text using the `nodeLabelFontSize` attribute.

-  Set the font style of the node label text to bold using the `nodeLabelFontBold` attribute.

-  Set the font style of the node label text to italic using the `nodeLabelFontItalic` attribute.

-  Set the border radius of the node label using the `nodeLabelBorderRadius` attribute.

-  Set the space between the node label border and the node label using the `nodeLabelBorderPadding` attribute.

-  Set the node label border style to dashed using the `nodeLabelBorderDashed` attribute.

-  Set the lengths of node label border dashes using the `nodeLabelBorderDashLen` attribute. Note that this attribute only works if you apply the `nodeLabelBorderDashed` attribute to the node.

-  Set the length of the gaps between node label border dashes using the `nodeLabelBorderDashGap` attribute. Note that this attribute only works if you apply the `nodeLabelBorderDashed` attribute to the node.

-  Set the label to inherit its color from the node using the `inheritLabelColorFromNode` attribute.

Use the code given below to apply the customizations listed above to your chart:

```javascript
{
    "chart": {
        "nodeLabelFont": "Arial",
        "nodeLabelFontColor": "#000fff",
        "nodeLabelAlpha": "50",
        "nodeLabelBgColor": "#ff0000",
        "nodeLabelBorderColor": "#000000",
        "nodeLabelFontSize": "13",
        "nodeLabelFontBold": "1",
        "nodeLabelFontItalic": "1",
        "nodeLabelBorderRadius": "5",
        "nodeLabelBorderPadding": "5",
        "nodeLabelBorderDashed": "1",
        "nodeLabelBorderDashLen": "3",
        "nodeLabelBorderDashGap": "2",
        "inheritLabelColorFromNode": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/dbxy4nrf/) to edit the above diagram.

### Link Customizations

#### Straight Link Sankey

FusionCharts allows you to add straight links to your Sankey diagram instead of the default links. To do this, set the value of `linkCurvature` attribute to `0`.

> The default value of the `linkCurvature` attribute is `1`.

Refer to the code below:

```javascript
{
    "chart": {
        "linkCurvature": "0"
    }
}
```

A Sankey diagram with straight links look like as shown below:

{% embed_chart standard-charts-sankey-diagram-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/76aLxkct/) to edit the above diagram.

#### Set Padding between Nodes and Links

You can add white space between nodes and links to make the chart look less cluttered. To do this set the value of `nodeLinkPadding` in pixels.

Refer to the code below:

```javascript
{
    "chart": {
        "nodeLinkPadding": "20"
    }
}
```

A Sankey diagram with `20` pixels of space between the node and the link looks like:

{% embed_chart standard-charts-sankey-diagram-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/4boxqLjk/) to edit the above diagram.

### Link Cosmetics

You can apply the following customizations to the appearance of a link.

#### Set Link Color

You can customize the color of a link using the `linkColor`attribute. Set its value to one of the following options:

-  Set it to `source` to make the link inherit the color of its source node or the `from` node.

-  Set it to `target` to make the link inherit its color from the target node or the `to` node.

-  Set it to `blend` to combine the colors of the source and target nodes of a link and apply that to the link as a gradient.

-  Set it to the hexadecimal value of a color to apply that color to the link.

You can set the color of all links globally. To do so, set the value of the `linkColor` attribute to one of the options mentioned above, and include it within the `chart` object. However, if you want to set the color of a single link, set the value of the `color` attribute to one of the options given above and include it within the `links` object for that particular link.

> If you set the color of a link both globally (under `chart` object) and locally (under `link` object), the local value will override the global value.

Refer to the code given below:

```javascript
{
    "chart": {
        "linkColor": "#FFA817"
    },
    "links": [
        {
          "from": "Germany",
          "to": "European Union",
          "value": 1468990,
          "color": "#ff0000"
        }
    ]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/rhgn3mo0/) to edit the above diagram.

In the above chart, you can see that all links are of same color, except the links from Germany to European Union which has been set locally.

#### Set Link Transparency

You can set the transparency of all links globally in a chart. To do so, set the value of the `linkAlpha` attribute between `0` (transparent) and `100` (opaque), and include it within the `chart` object. However, if you want to set the transparency of a single link, set the value of the `alpha` attribute between `0` (transparent) and `100` (opaque) and include it within the `link` object for that particular link.

> If you set the transparency of a link both globally (under `chart` object) and locally (under `link` object), the local value will override the global value.

Refer to the code given below:

```javascript
{
    "chart": {
        "linkAlpha": "20"
    },
    "links": [
        {
          "from": "Germany",
          "to": "European Union",
          "value": 1468990,
          "alpha": "100"
        }
    ]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-sankey-diagram-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/fv8rjxyo/) to edit the above diagram.

In the above chart, you can see the transparency of all the links are set to `20` except for the link from Germany to European Union.

### Customize Tooltips

You can customize tooltips for nodes and links to show more contextual information when users hover over nodes or links. To do this you can use the `plotToolText`, `linkToolText`, or `toolText` attributes along with a number of supported macros.

#### Using `plotToolText`

The `plotToolText` attribute works at global level, it defines a tooltip template for all the nodes in a chart. The value for the `plotToolText` attribute is a template made of macros, templates can also contain plain text and various inline HTML tags like `br`, `strong`, `em`,and `b`.

For Sankey diagram, `plotToolText` supports the following macros `$label`, `$nodeValue`, `$nodeDataValue`, `$plotFillColor`, `$plotFillAlpha`, and `$plotIdentifier`. For more information on macros refer to the [List of Macros](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros).

Refer to the code below:

```javascript
{
    "chart": {
        "plotToolText": '$plotfillcolor $label'
    }
}
```

#### Using `linkToolText`

The `linkToolText` attribute works at global level, it defines a tooltip template for all the links in a chart. The value for the `linkToolText` attribute is a template made of macros, templates can also contain plain text and various inline HTML tags like `br`, `strong`, `em`,and `b`.

For Sankey diagram, `linkToolText` supports the following macros `$from`, `$to`, `$linkValue`, `$linkDataValue`, `$fromPlotIdentifier`, `$toPlotIdentifier`, and `$flowDirection`. For more information on macros refer to the [List of Macros](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros).

Refer to the code below:

```javascript
{
    "chart": {
        "linkToolText": '$from To $to $linkValue'
    }
}
```

#### Using `toolText`

The `toolText` attribute works at local level for links and nodes, it defines a tooltip template for individual links or nodes in a chart. The value for the `toolText` attribute is a template made of macros, templates can also contain plain text and various inline HTML tags like `br`, `strong`, `em`,and `b`.

When using `toolText` in nodes, it uses the following macros: `$label`, `$nodeValue`, `$nodeDataValue`, `$plotFillColor`, `$plotFillAlpha`. For more information on macros refer to the [List of Macros](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros).

Refer to the code below:

```javascript
{
    "nodes": [{
        "plotToolText": '$label exports $nodeDataValue'
    }]
}
```


When using `toolText` in links, it uses the following macros: `$from`, `$to`, `$linkValue`, `$linkDataValue`, `$fromPlotIdentifier`, `$toPlotIdentifier`, and `$flowDirection`. For more information on macros refer to the [List of Macros](/chart-guide/chart-configurations/tool-tips#list-of-tooltip-macros).

Refer to the code below:

```javascript
{
    "links": [{
         "toolText": 'From: $from To: $to $linkValue'
    }]
}
```

A Sankey diagram using customized tooltips looks like:

{% embed_chart standard-charts-sankey-diagram-tooltips.js %}

Click [here](https://jsfiddle.net/fusioncharts/nr8ec62f/) to edit the above diagram.
