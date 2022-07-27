---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.19.x.

## Updated Map of India

FusionCharts 3.19.0 updated the map of India to showcase Ladakh as a separate entity. The Entity of Ladakh is now shown separated from Jammu and Kashmir, for more details see [Ladakh map]( https://www.fusioncharts.com/fusionmaps).

[BeforeImage]

[AfterImage]

## Fixed tendency to render all data plots properly

FusionCharts 3.19.0 updated the value for 'mintendency' in order to fix the tendency issue causing the chart to not plot all datasets properly when some datasets contained zero as values. Now, charts display all dataset plots despite the amount and values of the datasets.

[BeforeFix]

[AftterFix]

## Improved charts readability

Overlapping and Legend container

## Treemap chart renders properly

When using 'Treemap' charts, at any point where node's value was zero, the recursion was breaking and nodes were not displaying. FusionCharts version 3.19.0 fixed the issue by allowing all numbers in node's value, including zeros.

[BeforeFix]

[AfterFix]

## Improved PDF encoding

[description]
