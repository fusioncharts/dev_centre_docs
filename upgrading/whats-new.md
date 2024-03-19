---
title: What's New | FusionCharts
description: This section discusses the new features introduced in the latest version.
heading: What's New
---

This section is for users using the previous version of FusionCharts in their application. Here, we'll talk about the new features introduced in v3.23.x.

## Draggable task bars in Gantt Chart

FusionCharts release 3.23 implemented the new function to enhance interactivity and streamline project scheduling with draggable taskbars in the FusionCharts `Gantt` chart.

The newly implemented feature includes `dragMove` and `dragStar`t methods, allowing users to drag individual tasks and their parent tasks which adjusts the children's task accordingly across the x-axis ticks. 

The `onUpdate` event in the Gantt chart triggers whenever a drag operation occurs, providing the updated state.

The `draggable` attribute should be used to enable this feature.
 
 
 
