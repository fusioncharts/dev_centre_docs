---
permalink: getting-started/whats-new.html
title: What's New in v3.12.1 | FusionCharts
description: This section talks about the new features introduced in v3.12.1.
heading: What's New in v3.12.1
chartPresent: false
---

* The FusionCharts export servers have been reconfigured to introduce the following features:
	* The `exportMode` attribute has been introduced to export charts in the **auto-export** mode (in addition to the **server-side export** and **client-side export** modes) that lets users make optimum use of the server-side and client-side export capabilities. Starting v3.12.1, the `exportMode` attribute replaces the `exportAtClientSide` attribute.
	
	* Export statistics can now be logged to obtain details like the type of the exported chart, the format in which the chart was exported, IP address of the user exporting the chart, and so on.
	
	* The `exportAction` attribute has been reconfigured to take one more value, **download-save** (in addition to the existing values **save** and **download**), to send the exported file as a download to the client as well as save a copy on the server.

* The `drawCrossLineOnTop` attribute has been introduced to draw the cross line on top of the data plots.

* The `minLabelWidthPercent` attribute has been introduced for improved control over label management.

* The `onScroll` event and the `scrollTo()` method have been introduced to enable better control over the scrolling activity and to facilitate customization.