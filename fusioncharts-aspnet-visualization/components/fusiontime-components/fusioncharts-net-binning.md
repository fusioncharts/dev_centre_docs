---
title: Data Binning | FusionCharts
description: Uncover data binning's essence, utilizing time's hierarchy to group units. Explore its application in time series charts & customize bins. Read for insights.
heading: Data Binning
---

## The available methods are listed below:

The natural hierarchy of time aids in binning smaller units of time into larger units of time. For example, two bins, each of 12hr size can fall into one bin of 1 day (or 24 hours) bin. A user can **zoom** into 12hr bin and zoom out to 1-day bin.

The time series charts exploit this behavior of time to create data bins. Though it is suggested to follow the smartly suggested bins for each data, an enthusiastic developer can always modify this.

The available methods are listed below:

- `Year(params int[] binArr)`
- `Month(params int[] binArr)`
- `Day(params int[] binArr)`
- `Hour(params int[] binArr)`
- `Minute(params int[] binArr)`
- `Second(params int[] binArr)`
- `MilliSecond(params int[] binArr)`

The syntax to specify the data binning for all the above methods are:

```csharp
timeSeries.TimeAxis.Binning.Year(1); // Binning to display yearly data
timeSeries.TimeAxis.Binning.Month(2,4); // Binning to display monthly data
timeSeries.TimeAxis.Binning.Day(2); // Binning to display daily data
timeSeries.TimeAxis.Binning.Hour(1); // Binning to display hourly data
timeSeries.TimeAxis.Binning.Minute(1,3,5,6); // Binning to display per minute data
timeSeries.TimeAxis.Binning.Second(2,4); // Binning to display per second data
timeSeries.TimeAxis.Binning.MilliSecond(5); // Binning to display per millisecond data
```

Take a look at the chart shown below:

{% embed_ftChart binning-not-applied-sample-on-column-chart %}

You can see the data bins moving from **2 days** > **1 day** > **12 hrs** > **8 hrs** > **6 hrs** > **4 hrs** > **3 hrs** > **2 hrs** > **1 hr**.

You can always modify this, by specifying the multipliers for each time unit in an array format.

Refer to the code below:

```csharp
timeSeries.TimeAxis.Binning.Hour(3, 6); //specify the valid multipliers
```

The above multipliers for `hour` will limit the binning for `hour` to only 3 hrs and 6 hrs. For the time units where nothing is specified, the smartly determined bins will apply. With the above multipliers for `hour`, the multipliers for other time units (month, day, in this case), will be smartly determined. For example, in this case, when the multipliers of ‘day’ are not specified, the default choices of day binning, like {sequence of day binning options in this example} will prevail.
