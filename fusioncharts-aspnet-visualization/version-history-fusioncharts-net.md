---
title: Version History | FusionCharts.NET
description: This section talks about the new features, improvements and fixes for v1.0.7.
heading: Version History
---

<h2 class="sub-heading">Version 1.0.7</h2>

<p class="release-date">20th September, 2019</p>

<h4 class="sub-heading">New Features</h4>

- Starting v1.0.7, FusionCharts.NET introduces the following features and components for the time-series charts:

  - Style Cross Line
  - Reference Zone
  - Set Output Time format
  - Set Initial Interval
  - Set Predictive Date and add Style

- Exception Handling has been introduced to Visualization Engine of FusionCharts.NET library.

- Custure has been introduced to DataEngine.

<h4>Improvement</h4>

- If the total number of records is less than the number of records to be extracted from the top, instead of throwing an exception, all records will be extracted from the top.

- `TimeSeriesData.RenderCompatibleDataInJson(model);` has been replaced by `TimeSeriesData.RenderCompatibleDataInJson(model,suppress,”chartId”);`.

<h4>Deprecated</h4>

- TimeSeriesData.RenderCompatibleDataInJson(model);

<h2 class="sub-heading">Version 1.0.6</h2>

<p class="release-date">26th August, 2019</p>

<h4 class="sub-heading">New Features</h4>

- Starting v1.0.6, FusionCharts.NET now supports Palette Colors for all chart types.

- You can now define the data binning as per custom requirements.

<h4>Improvement</h4>

- Starting v1.0.6, `JsonFileSource` of the DataEngine now supports more **json** format.

<h2 class="sub-heading">Version 1.0.4</h2>

<p class="release-date">23rd July, 2019</p>

<h4 class="sub-heading">Improvement</h4>

- Starting v1.0.4, FusionCharts.NET has been released for **.NET Standard** which enables the support for following .NET development platforms:
  - .NET Framework
  - .NET Core
  - .NET Standard
  - Mono/Xamarin

> You can download the .NET Standard version directly from **NuGet**.

> **FusionCharts.NET Standard** does not support **ASP.NET Export Handler**.

<h2 class="sub-heading">Version 1.0.2</h2>

<p class="release-date">12th July, 2019</p>

<h4 class="sub-heading">Improvement</h4>

- Code optimization.

<h4>Fixes</h4>

- The issues of DataEngine Pivot Operation Aggregation function has now been fixed.

<h2 class="sub-heading">Version 1.0.1</h2>

<p class="release-date">8th April, 2019</p>

<h4 class="sub-heading">Improvement</h4>

- Performance optimization for `CsvFileSource`.

<h4>Fixes</h4>

- The issue of **DataType** for `JsonFileSource` has now been fixed.
