---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.16.x.

## Configuring label icons opacity.

You can now set the values of `legendIconAlpha` and `legendIconBgAlpha` to `inherit` to inherit the alpha value from the data plot attributes. The default value for `legendIconAlpha` and `legendIconBgAlpha` is now set to `inherit` and they can now work at both global and local level.

Previously, `legendIconAlpha` and `legendIconBgAlpha` had a default value of 100% and could only be used at global level.

## Setting anchor border color, background color, and alpha value

You can set the attributes `anchorBorderColor` and `anchorBgColor` to `inherit` so they use the palette color value from data plots. 

`anchorAlpha`, `anchorBgAlpha`, and `anchorImageAlpha` can use the value `inherit` to use the the alpha  value from data plots defined via `plotFillAlpha` or `alpha`.

Previously, using a theme or palette color in charts with line/area plot and anchors only affected `anchorBorderColor` anchor background was null/transparent.
