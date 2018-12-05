---
title: FusionTime Events | FusionCharts
description: This article contains the list of fusion time events.
heading: Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server to render the chart.

In this article, we'll discuss the events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.

## DataStore Events

### `itemsAdded`

This event is triggered when new row(s) are added to a data table in the DataStore.

> The sender argument contains the newly added rows.

### `disposed`

This event is triggered when the entire DataStore is disposed.

## DataTable Events

### `updated`

This event is triggered when new column(s) are added to a data table in the DataStore.

### `disposed`

This event is triggered when the data table is disposed.