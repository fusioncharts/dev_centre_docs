---
title: Exception Handling in FusionCharts.NET | FusionCharts
description: This article tells about the exception handling in FusionCharts.NET.
heading: Exception Handling
---

Exception Handling

FusionCharts.NET helps you avoid writing messy JavaScript and JSON code within your ASP.NET code, by providing an object-oriented paradigm in which you can render charts using C# or VB. Starting v1.0.7, FusionCharts.NET has introduced a new class called `Exceptions` in Visualization Engine. Using this class, you can choose whether to suppress the exception or not.

## How Exception Works

Let's assume a scenario where you want to render a chart in ASP.NET using FusionCharts.NET library. An exception can occur in two conditions:

### Suppress Exception set to `true`

When the suppress exception is set to `true` and an exception occurs, the Visualization Engine stops rendering the chart and will return a `<div>` element with a proper exception message.

### Suppress Exception set to `false`

When the suppress exception is set to `false` and an exception occurs, the Visualization Engine will generate a custom exception and throw it.

The three properties of the Exception handling is listed below:

| Properties   | Type              | Snippet                                           |
| ------------ | ----------------- | ------------------------------------------------- |
| `Suppress`   | bool {set;}       | vizObj.Exceptions.Suppress = true;                |
| `IsOccurred` | bool {get;}       | bool hasException = vizObj.Exceptions.IsOccurred; |
| `Details`    | Exception {get; } | Exception e = vizObj.Exceptions.Details;          |
