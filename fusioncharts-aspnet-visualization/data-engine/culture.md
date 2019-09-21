---
title: Culture in FusionCharts.NET | FusionCharts
description: This article takes about the Culture in FusionCharts.NET
heading: Culture
---

DataModel has a store for the data source. A data source may have different types of date format and `CultureInfo` instead of .NET default format. While reading the data from data sources, **DataEngine** tries to parse the data in a common manner.

Starting v1.0.7, FusionCharts.NET introduces a new property named **Culture** which helps to set the following:

- Culture

- Date Format

- Any type of Culture and Calendar Settings

- Historical Data

- Future Data

## Code

- **Culture:** type CultureInfo (System.Globalization.CulturInfo)

- **Default:** InvariantCulture

### Set Culture to `en-US`

The code to set the culture in `en-US` is:

```csharp
model.Culture = new CultureInfo("en-us");
```

If data source contains year in `yy` format, and you set the value to **19**, what will the data return as year value? Will it be 1919 or 2019?

To resolve this confusion, set the maximum value of the year under which you want the data to read the date.

Refer to the code below:

```csharp
model.Culture.Calendar.TwoDigitYearMax = 2010;
```

Setting the value of the `twoDigitYearMax` to **2010** will resolve the above confusion and setting the `yy` value to **19** takes 1919 as the year.

> `twoDigitYearMax` property takes the nearest year under the mentioned limit.
