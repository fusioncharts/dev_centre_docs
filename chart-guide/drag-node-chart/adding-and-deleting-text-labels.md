---
permalink: chart-guide/drag-node-chart/adding-and-deleting-text-labels.html
title: Adding and Deleting Text Labels | FusionCharts
description: FusionCharts Suite XT allows you to create individual floating text labels on the chart. This helps in defining a strict text content that can be shown and dragged anywhere on the chart.
heading: Adding and Deleting Text Labels
chartPresent: true
---

FusionCharts Suite XT allows you to create individual floating text labels on the chart. This helps in defining a strict text content that can be shown and dragged anywhere on the chart. As of now, you can only add or delete a label, but you cannot edit a label.

In this section, you will be shown how you can:

* <a href="/chart-guide/drag-node-chart/adding-and-deleting-text-labels#adding-a-text-label-at-run-time" class="smoth-scroll">Add a text label at run-time</a>
* <a href="/chart-guide/drag-node-chart/adding-and-deleting-text-labels#deleting-a-text-label-at-run-time" class="smoth-scroll">Delete a text label at run-time</a>

To understand this, the sample chart that we will use looks like this:

{% embed_all chart-guide-drag-node-chart-adding-and-deleting-text-labels-example-1.js %}

The above chart shows the US Subway Map and uses drag-able nodes to mark locations on the map.


## Adding a Text Label at Run-time

To add a new text label:

__Step 1__: From the bottom-left corner of the chart, click the ![Menu](/assets/images/chart-guide-drag-node-chart-adding-and-deleting-text-labels-image-1.jpg) button. A menu is rendered.

__Step 2__: From the menu, select __Add a Label__.
The label properties dialog box, as seen in the image below, is shown:

![Label Properties Dialog Box](/assets/images/chart-guide-drag-node-chart-adding-and-deleting-text-labels-image-3.jpg)

__Step 3__: In the label properties dialog, enter the label information.

__Step 4__: Click __Submit__.

Given below is a brief description of the fields in this dialog box:

<table>
  <tr>
    <th>Field</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Label</td>
    <td>It is used to specify the text for the label.</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>It is used to specify the size of the label.</td>
  </tr>
  <tr>
    <td>Allow Drag</td>
    <td>It is used to specify whether the label will be drag-able. Selecting this check-box will make the text label drag-able (default), clearing it will not. </td>
  </tr>
  <tr>
    <td>Padding</td>
    <td>It is used to specify the space around the label.</td>
  </tr>
  <tr>
    <td>Position</td>
    <td>It is used to specify the x- and y-coordinates for the label position.</td>
  </tr>
  <tr>
    <td>Color</td>
    <td>It is used to specify the hex code for the font color of the label text.</td>
  </tr>
  <tr>
    <td>Alpha</td>
    <td>It is used to specify the label transparency. This field takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>Border Color</td>
    <td>It is used to specify the hex code for the label border color.</td>
  </tr>
  <tr>
    <td>Background Color</td>
    <td>It is used to specify the hex code for the label background color.</td>
  </tr>
</table>


The image below shows the fields of the dialog box populated for a new label:

![New Label Properties Dialog Box](/assets/images/chart-guide-drag-node-chart-adding-and-deleting-text-labels-image-4.jpg)

Now, when the __Submit__ button is clicked, the new label created looks like this:

![New Label](/assets/images/chart-guide-drag-node-chart-adding-and-deleting-text-labels-image-5.jpg)

You can drag the label to any position on the chart.

<p class="text-info">You can define labels in chart data too. Each label is defined in the data of the chart through the object as the `labels` array element. </p>

### Event Raised

When a new label is created, a JavaScript event, named `labelAdded`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener(labeladded, function(e, a) {
    //Your code here
});

```

## Deleting a Text Label at Run-time

To delete a text label:

__Step 1__: Press and hold the left mouse button on the label that you want to delete. A dialog box appears asking you to confirm the deletion.

![Confirm Deletion](/assets/images/chart-guide-drag-node-chart-adding-and-deleting-text-labels-image-6.jpg)

__Step 2__: From the dialog box, click __Delete__. The label is deleted.

### Event Raised

When a label is deleted, a JavaScript event, named `labelDeleted`, is raised. You can trap and use this event to customize the output according to your requirements.

The code snippet required to trap this event is given below:

```javascript
chartInstance.addEventListener('labeldeleted', function(e, a) {
    //Your code here
});

```

<p class="text-info">You can get the latest updated node and connector positions using JavaScript or by [submitting the updated positions](/chart-guide/drag-node-chart/updating-chart-data-on-server) to a server-side script.</p>
