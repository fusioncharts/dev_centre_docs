---
title: What's New | FusionCharts
description: This section talks about the new features introduced in latest version.
heading: What's New
---

This section is for users who are using the previous version of FusionCharts in their application. Here we'll talk about the new features introduced in v3.15.2.

## Events support to nodes and links in Chord Diagrams

Expanded support for click and hover events node, ribbon, and labels; as well as link attributes for node, ribbon, and labels. Refer to [Chord Diagram documentation](/chart-guide/standard-charts/chord-diagram) to know more.

Here is an exmaple, (hover over any chord node or links to see the events in action):

<iframe width="100%" height="530" src="//jsfiddle.net/fusioncharts/xa5thLwo/embedded/result,js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

You can now use the following events in nodes, ribbons and labels:

|Type | Event Name| Description | Parameters |
|---|---|---|---|---|
|Node | `dataPlotClick` | Clicking on a node | Label, value, links (with value), color, alpha|
|Node | `dataPlotRollOver` | Rolling into a node | Label, value, links (with value), color, alpha|
|Node | `dataPlotRollout` | Rolling out of a node | Label, value, links (with value), color, alpha|
|Link | `linkClick` | Clicking on a link | dominationFlowValue, subservientFlowValue, linked nodes, color, alpha|
|Link | `linkRollOver` | Rolling into a link | dominationFlowValue, subservientFlowValue, linked nodes, color, alpha|
|Link | `linkRollOut` | Rolling out of a link | dominationFlowValue, subservientFlowValue, linked nodes, color, alpha|
