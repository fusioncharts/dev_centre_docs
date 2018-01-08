---
permalink: chart-guide/drag-node-chart/adding-and-editing-nodes.html
title: Adding and Editing Nodes | FusionCharts
description: To avail the feature of editing and deleting nodes, you need to render the chart in edit mode.
heading: Adding and Editing Nodes
chartPresent: true
---

FusionCharts Suite XT allows you to customize a drag-node chart in run-time - you can add, edit, or delete nodes in a drag-node chart. To avail this feature you need to render the chart in edit mode (edit mode can be enabled by setting `"viewMode": "0"` in the `chart` object).

In this section, you will be shown how you can:

* <a href="/chart-guide/drag-node-chart/adding-and-editing-nodes#adding-a-node-at-run-time" class="smoth-scroll">Add a node at run-time</a>
* <a href="/chart-guide/drag-node-chart/adding-and-editing-nodes#editing-a-node-at-run-time" class="smoth-scroll">Edit a node at run-time</a>
* <a href="/chart-guide/drag-node-chart/adding-and-editing-nodes#deleting-a-node-at-run-time" class="smoth-scroll">Delete a node at run-time</a>

To understand this, the sample chart that we will use looks like this:

{% embed_all chart-guide-drag-node-chart-adding-and-editing-nodes-example-1.js %}

The above chart shows the US Subway Map and uses drag-able nodes to mark locations on the map.

## Adding a Node at Run-time

To the above subway map chart, we will now add a new node.

To add a node to:

__Step 1__: From the bottom-left corner of the chart, click the ![image add-node-image-1](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-1.jpg) button. A menu is rendered.

__Step 2__: From the menu, select __Add a node__.

![image add-node-image-2](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-2.jpg)

The node properties dialog box, as seen in the image below,  is shown:

![image add-node-image-3](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-3.jpg)

__Step 3__: In this dialog box, enter the node information.

__Step 4__: Click __Submit__.

Given below is a brief description of the fields in this dialog box:

<table>
  <tr>
    <th>Field</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Id</td>
    <td>It is used to specify an unique identifier for the node.</td>
  </tr>
  <tr>
    <td>Dataset</td>
    <td>It is used to specify the data set to which the node will belong. The node inherits all visual properties defined for the data set.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>It is used to specify the label for the node. The label will be displayed on the chart.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>It is used to specify the x- and y-coordinates for the node position.</td>
  </tr>
  <tr>
    <td>Tooltip</td>
    <td>It is used to specify the tool-tip text for the node.</td>
  </tr>
  <tr>
    <td>Color</td>
    <td>It is used to specify the hex code of the color that will be applied to the node.</td>
  </tr>
  <tr>
    <td>Alpha</td>
    <td>It is used to specify the transparency for the node. This field takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>Align</td>
    <td>It is used to specify the vertical alignment of the label with respect to the node. This field takes the following values: `top`, `middle`, and `bottom`.</td>
  </tr>
  <tr>
    <td>Allow Drag</td>
    <td>It is used to specify whether the node will be drag-able. Selecting this check-box will make the node drag-able (default), clearing it will not. </td>
  </tr>
  <tr>
    <td>Shape</td>
    <td>It is used to specify the shape of the node. This field takes the following values: `rectangle` (default), `circle`, and `polygon`.</td>
  </tr>
  <tr>
    <td>Height</td>
    <td>It is used to specify the height of the shape.

This field is visible only when you have selected `Rectangle` from the `Shape` drop-down.</td>
  </tr>
  <tr>
    <td>Width</td>
    <td>It is used to specify the width of the shape.

This field is visible only when you have selected `Rectangle` from the `Shape` drop-down.</td>
  </tr>
  <tr>
    <td>Radius</td>
    <td>It is used to specify the radius of the shape.

This field is visible only when you have selected `Circle` or `Polygon` from the `Shape` drop-down.</td>
  </tr>
  <tr>
    <td>Sides</td>
    <td>It is used to specify the number of sides for the shape.

This field is visible only when you have selected `Polygon` from the `Shape` drop-down. </td>
  </tr>
  <tr>
    <td>Link</td>
    <td>It is used to specify the URL to which the user will be redirected to if the node is clicked.</td>
  </tr>
  <tr>
    <td>Image</td>
    <td>It is used to specify whether an image will be rendered with the node. Selecting this check box will make visible the fields that allow you to enter image information, clearing it will not render an image.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>It is used to specify the URL to which the user will be redirected to, if the image is clicked.

 This field will be visible only if the __Image__ check box is selected. </td>
  </tr>
  <tr>
    <td>Width</td>
    <td>It is used to specify the width of the image.

This field will be visible only if the __Image__ check box is selected. </td>
  </tr>
  <tr>
    <td>Height</td>
    <td>It is used to specify the height of the image.

This field will be visible only if the __Image__ check box is selected. </td>
  </tr>
  <tr>
    <td>Align</td>
    <td>It is used to specify the alignment of the image with respect to the node. This attribute takes the following values: `top`, `middle`, and `bottom`.

This field will be visible only if the __Image__ check box is selected. </td>
  </tr>
</table>


The image below shows the fields of the dialog box populated for a new node:

![image add-node-image-4](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-4.jpg)

Now, when the __Submit__ button is clicked, the new node created looks like this:

![image add-node-image-5](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-5.jpg)

<p class="text-info">You can define nodes in the chart data using the `data` object of the `dataset` object. </p>

### Event Raised

When a new node is created, a JavaScript event, named `nodeAdded`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('nodeadded', function(e, a){
    //Your code here
});
```

## Editing a Node at Run-time

For a node, you can edit all its properties except for the ID and the dataset to which it belongs.

To edit a node:

__Step 1__: Press and hold the left mouse button on that node. The node properties dialog box is rendered with the __Id__ and __Dataset__ fields disabled.

__Step 2__: In this dialog box, re-populate the fields you want to edit.

__Step 3__: Click __Submit__.

The image below shows the fields of the dialog box re-populated for the node we created above:

![image add-node-image-6](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-6.jpg)

Now, when the __Submit__ button is clicked, the edited node looks like this:

![image add-node-image-7](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-7.jpg)

### Event Raised

When a node is edited, a JavaScript event, named `nodeUpdated`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('nodeupdated', function(e, a){
    //Your code here
});
```

## Deleting a Node at Run-Time

To delete a node:

__Step 1__: Press and hold the left mouse button on the node that you want to delete. The node properties dialog box appears.

__Step 2__: From the dialog box, click  __Delete__. The node is deleted.

![image add-node-image-8](/assets/images/chart-guide-drag-node-chart-adding-and-editing-nodes-8.jpg)

### Event Raised

When a node is deleted, a JavaScript event, named `nodeDeleted`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('nodedeleted', function(e, a){
    //Your code here
});
```

<p class="text-info">You can get the latest updated node positions using JavaScript or by [submitting the updated positions](/chart-guide/drag-node-chart/updating-chart-data-on-server) to a server-side script.</p>