---
permalink: chart-guide/drag-node-chart/adding-and-editing-connectors.html
title: Adding and Editing Connectors | FusionCharts
description: FusionCharts Suite XT allows you to customize a drag-node chart at run-time - you can add, edit, or delete connectors in a drag-node chart.
heading: Adding and Editing Connectors
chartPresent: true
---

FusionCharts Suite XT allows you to customize a drag-node chart at run-time - you can add, edit, or delete connectors in a drag-node chart. Set the chart to edit mode to use this feature (edit mode can be enabled by setting "`viewMode: 0`" in the `chart` object).

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/drag-node-chart/adding-and-editing-connectors.html#adding-a-connector-at-run-time">Add a connector at run-time</a>
* <a href="{{ site.baseurl }}chart-guide/drag-node-chart/adding-and-editing-connectors.html#editing-a-connector-at-run-time">Edit a connector at run-time</a>
* <a href="{{ site.baseurl }}chart-guide/drag-node-chart/adding-and-editing-connectors.html#deleting-a-connector-at-run-time">Delete a connector at run-time</a>

To understand this, the sample chart that we will use looks like this:

{% embed_all chart-guide-drag-node-chart-adding-and-editing-connectors-example-1.js %}

The above chart shows the US Subway Map and uses drag-able nodes to mark locations on the map.


## Adding a Connector at Run-time

In the above chart, the "My Edited Location" node does not have any connectors connecting it to the other nodes on the chart. We will add a connector that will connect this node to the node representing Santa Monica.

To add a connector:

__Step 1__: From the bottom-left corner of the chart, click the ![Menu Button]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-1.jpg) button. A menu is rendered.

__Step 2__: From the menu, select __Add a Connector__.

![Menu]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-2.jpg)

The connector properties dialog box, as seen in the image below,  is shown:

![Connector Properties Dialog Box]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-3.jpg)

__Step 3__: In this dialog box, enter the connector information.

__Step 4__: Click __Submit__.

Given below is a brief description of the fields in this dialog box:

<table>
  <tr>
    <th>Field</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Connect From</td>
    <td>It is used to specify the source node for the connector.</td>
  </tr>
  <tr>
    <td>Connect To</td>
    <td>It is used to specify the destination node for the connector.</td>
  </tr>
  <tr>
    <td>Arrow At Start</td>
    <td>It is used to specify whether an arrow, pointing towards the source node, will be rendered. Selecting this check box will show the arrow, clearing it will not show it.</td>
  </tr>
  <tr>
    <td>Arrow At End</td>
    <td>It is used to specify whether an arrow, pointing towards the destination node, will be rendered. Selecting this check box will show the arrow, clearing it will not show it.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>It is used to specify the label for the connector. The label will be displayed on the chart.</td>
  </tr>
  <tr>
    <td>Node ID</td>
    <td>It is used to specify the unique ID of the node to be added.</td>
  </tr>
  <tr>
    <td>Color</td>
    <td>It is used to specify the hex code of the color that will be used to render the connector.</td>
  </tr>
  <tr>
    <td>Alpha</td>
    <td>It is used to specify the transparency for the connector. This field takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>Strength</td>
    <td>It is used to specify the strength of the connector. This field takes values between 0 and 2. The value entered here  is multiplied by the thickness specified for the connector (using the `stdThickness` attribute).</td>
  </tr>
  <tr>
    <td>Link</td>
    <td>It is used to specify the URL to which the user will be redirected if the connector is clicked.</td>
  </tr>
  <tr>
    <td>Tooltip</td>
    <td>It is used to specify the tool-tip text for the connector.</td>
  </tr>
  <tr>
    <td>Dashed</td>
    <td>It is used to specify whether the connector will be rendered as a dashed line. Selecting this check box will render the connector as a dashed line, clearing it will render it as a whole line.</td>
  </tr>
  <tr>
    <td>Dash Gap</td>
    <td>It is used to specify the gap between each dash, if the connector is rendered as a dashed line. This field is visible only when you have selected the __Dashed__ check box.
    </td>
  </tr>
  <tr>
    <td>Dash Length</td>
    <td>It is used to specify the length of each dash, if the connector is rendered as a dashed line. This field is visible only when you have selected the __Dashed__ check box.
    </td>
  </tr>
</table>


The image below shows the fields of the dialog box populated for a new connector:

![Add Connector Dialog Box]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-4.jpg)

Now, when the __Submit__ button is clicked, the new connector created looks like this:

![New Connector]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-5.jpg)

<p class="text-info">You can define connectors in chart data too. Each connector line is defined in the data of the chart as an object in the `connectors` array element. </p>

### Event Raised

When a new connector is created, a JavaScript event, named `connectorAdded`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('connectoradded', function(e, a) {
    //Your code here
});

```

## Editing a Connector at Run-time

For a connector, you can edit all its properties except for the source and destination nodes.

To edit a connector:

__Step 1__: Press and hold the left mouse button on the connector to be edited. The connector properties dialog box is rendered with the __Connect To__ and __Connect From__ fields disabled.

__Step 2__: In this dialog box, re-populate the fields you want to edit.

__Step 3__: Click __Submit__.

The image below shows the fields of the dialog box re-populated to edit the connector:

![Edit Connector Dialog Box]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-6.jpg)

The edited connector looks like this:

![Connector After Edit]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-7.jpg)

### Event Raised

When a connector is edited, a JavaScript event, named `connectorUpdated`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('connectorupdated', function(e, a) {
    //Your code here
});

```

## Deleting a Connector at Run-time

To delete a connector:

__Step 1__: Press and hold the left mouse button on the connector to delete. The connector properties dialog box appears.

__Step 2__: From the dialog box, click __Delete__. The connector is deleted.

![Delete Connector]({{ site.baseurl }}assets/images/chart-guide-drag-node-chart-adding-and-editing-connectors-image-8.jpg)

### Event Raised

When a connector is deleted, a JavaScript event, named `connectorDeleted`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('connectordeleted', function(e, a) {
    //Your code here
});

```

<p class="text-info">You can get the latest updated node and connector positions using JavaScript or by [submitting the updated positions]{% linkTo tutorials/chart-guide/drag-node-chart/updating-chart-data-on-server.md %} to a server-side script.</p>