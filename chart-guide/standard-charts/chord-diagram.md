---
title: Chord Diagram | FusionCharts
description: A chord diagram is a graphical way to represent flow relationship between specific entities in transitioning data.
heading: Chord Diagram
---

Chord Diagram

[This chart type belongs to PowerCharts XT]

A chord diagram is a graphical way to represent flow relationship between specific entities in transitioning data. The entities (called **nodes**) are drawn along the circumference of a circular layout. The flow relationships (called **links**) are represented by arcs that connect the nodes. The links are colored according to the rule of dominance of transitioning data. It is a visually pleasing way and hence a popular choice among data visualization enthusiasts.

> Chord Diagrams are also referred to as Radial Network Diagram, Chord Layout, or Dependency Wheel.

A simple Chord Diagram looks as shown below:

{% embed_chart standard-charts-chord-diagram-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/uovzr4ea/) to edit the chart.

In the above diagram, there are `n` nodes. A link connects a pair of nodes where a relationship exists. Hovering on a node shows all the links (or relationships) associated with it. Likewise, hovering on a link shows the related nodes. Self linking nodes can also exist.

## Salient Features of a Chord Diagram

### Pre transition and Post transition

A chord diagram represents transition data. There are two stable states for transitional data - **pre** transition and **post** transition.

Let us consider a scenario where customers of two leading telecom operators are switching from one to another and vice versa. The number of customers the telecom operators have before the customers start switching is the pre transition state. The number of customers the telecom operators have after the customers have switched is the post transition state. The lengths of the node arcs represent the total value (customers who switch) associated with the node and hence are affected by the state or 'mode'.

By default, FusionCharts builds chord diagrams in the post state. However, you can build a pre state chord diagram, as well.

### Link Colors Based on Dominance

Links take a derived color from the nodes they connect. By default, the node with lesser outflow value gives color to the link. In case of equal values on both nodes, the link gets a gradient color of both the nodes.

The Chord Diagram in FusionCharts follows the rule of dominance in data. It works as follows:

- In pre state chord diagrams, the node with the minimum outflow is the dominant end of a link. In the use case regarding the telecom operators, this applies to the one losing the least number of customers.

- In post state chord diagrams, the node with the maximum inflow is the dominant end of a link. In the use case regarding the telecom operators, this applies to the operator that gains more customers.

In case both the operator lose the same number of customers (to each other), the link will get a `blend` shade.

> In a Chord Diagram, `links` or connections are often referred to as `ribbons`.

## Customizations of a Chord Diagram

### Toggle Node Link Visibility

When you click on a node in a Chord Diagram, it is disabled and links associated with it are hidden. This can help you focus on nodes and links that are important in specific contexts. The behavior is controlled by the chart-level `enableToggle` attribute, which is set to `1` by default. You can disable the behavior if you want. To do so, set the value of `enableToggle` to `0`.

> The `minNodeSize` attribute controls the minimum space that the disabled nodes can take.

Use the code given below:

```

{

	"chart": {

		"enableToggle": "0"

	}

}

```

The chart will look as shown below:

<<Chart>>

### Set Node Spacing

You can introduce white space between two adjacent nodes to reduce clutter in the chart. To do so, assign the value of the desired white space to the attribute `nodeSpacing`.

Use the code given below:

```

{

	"chart": {

		"nodeSpacing": "5"

	}

}

```

The chart will look as shown below:

<chart>

### Set Node Thickness

You can specify the thickness of a single node, or globally, of all nodes in the chart. To do so, set the desired value to the attribute `nodeThickness`.

Use the code given below:

```

{

	"chart": {

		"nodeThickness": "15"

	}

}

```

The chart will look as shown below:

<chart>

### Set Chart Radius

You can specify the radius of the chart in percentage value. To do so, set the desired value to the attribute `chordRadius`.

Use the code given below:

```

{

	"chart": {

		"chordRadius": "100"

	}

}

```

The chart will look as shown below:

<chart>

### Position Node Labels

You can place node labels inside the corresponding nodes. To do this, set the value of the `nodeLabelPosition` attribute to `inside`.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Hide Node Labels

You can choose not to display node labels, to make the chart look less cluttered. To do so, set the value of the attribute `showNodeLabels` to `0`.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Set Starting Chart Angle

You can set the starting angle, to specify from where in the circular layout the chord arcs should begin. To do so, set the value of the `startingAngle` attribute to the desired angle.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Set Total Chart Angle

You can set the total angle that the chord diagram will cover when initially rendered. To do so, set the value of the `totalAngle` attribute between `0` and `360`.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Add Padding between Node and Link

You can introduce white space between a node and its link to make the chart look cleaner. To do so, set the value of the `nodeLinkPadding` attribute to the desired amount.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Show Link Value When Hovered

You can choose to display both the names and values of the nodes of either end of a link in the tooltip, when you hover the pointer over the link. To do so, set the value of the `showLinkValueOnHover` attribute to `1`. If you set this value to `0` instead, only the names of the nodes associated with the link will be displayed in the tooltip.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Make a Pre Transition Chart

You can make a pre transition chord diagram instead of the default post transition one. To do so, set the value of the `mode` attribute to `pre`.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>

### Modify Link Color

By default, links in a Chord Diagram inherit the color of the dominant node connected to them. However, if you set the value of the `linkColorByDominance` attribute to `0`, then the links will inherit the color of the non-dominant node instead.

Use the code given below:

```

<code>

```

The chart will look as shown below:

<chart>
