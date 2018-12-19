---
title: Installation | FusionCharts
description: This article outlines the steps of how to install FusionCharts.NET
heading: Installation
---

In this section, we will show you how to install FusionCharts.NET and all the other dependencies on your system. You can install directly from Nuget or by downloading and using local files.

## Install using local files:


To install download `FusionCharts.NET` and follow the steps given below:

* Include the FusionCharts JavaScript files,

* Add a reference to the `FusionCharts.DataEngine.dll` and `FusionCharts.Visualization.dll` files into your `ASP.NET` project.

## Nuget download:

To download and install from Nuget refer to the code below:

```
Install-Package FusionCharts.Visualization -Version 0.9.0-beta
```

Once installed from Nuget, it'll add some assemblies to your web project, and those assemblies will be automatically referenced to your project. It'll also add FusionCharts JavaScript libraries to your project under `Scripts/FusionCharts/` folder.

