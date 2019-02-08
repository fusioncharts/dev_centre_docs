---
title: Time Navigator | FusionCharts
description: This article defines the time navigator.
heading: Time Navigator
---

The time navigator plots the complete data in a rectangular box located right below the time axis. It helps you focus on details in a specific time period while staying in context of the whole timeline.

A time navigator looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-time-navigator.png">

### Show/Hide Time Navigator

To show the time navigator, set to `true` the value of the `Enable` property of the `TimeNavigator` object of the `timeSeries` class. Refer to the code given below:

```csharp
/*  time navigator */
timeSeries.TimeNavigator.Enable = true;
```

The Time Navigator will look as shown below:

<<Live Chart>>
