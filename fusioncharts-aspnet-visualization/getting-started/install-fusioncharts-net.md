---
title: Download FusionCharts.NET | FusionCharts
description: This article outlines the steps of how to install FusionCharts.NET
heading: Download
isFormPresent: true
formHeading: In this section, we will show you how to download and install **FusionCharts.NET** and all the other dependencies on your system. You can install directly from NuGet or by downloading and using local files. To download locally fill up the form and click the download button.
---

## Install using local files

To install, download `FusionCharts.NET` and follow the steps given below:

- Include the FusionCharts JavaScript files.

- Add the following script tag to your `aspx` or `cshtml` file:

**For .aspx**

```html
<script
  type="text/javascript"
  src="/Scripts/fusioncharts/fusioncharts.js"
></script>
```

**For .cshtml**

```html
<script src="@Url.Content("//Scripts/fusioncharts/fusioncharts.js")></script>
```

- Add a reference to the `FusionCharts.DataEngine.dll` and `FusionCharts.Visualization.dll` files into your `ASP.NET` project.

## NuGet download

To use NuGet package, please run the following command in the NuGet Package Manage Console:

```csharp
Install-Package FusionCharts.Visualization -Version 1.0.6
```

Once installed from NuGet, it'll add some assemblies to your web project, and those assemblies will be automatically referenced to your project. It'll also add FusionCharts JavaScript libraries to your project under `Scripts/FusionCharts/` folder.

> You can download the samples for **FusionCharts.NET** from [here](https://github.com/fusioncharts/fusioncharts.net-core-sample).

## Configuring Export Handler

FusionCharts export handler gets automatically installed, once you install `FusionCharts.Visualization` NuGet package. However, in order to use it, you need to configure the following:

> Starting v1.0.4, **FusionCharts.NET Standard** does not support **Export Handler**.

- Make sure the `PresentationCore` and `WindowsBase` assemblies are referenced in your web project. These assemblies are automatically referenced when you install the NuGet package, but in case if they are not, you have to manually add them.

- Add these dependencies into `web.config`:

```xml
<compilation targetFramework="4.5" >
    <assemblies>
        <add assembly="WindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
        <add assembly="PresentationCore, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
    </assemblies>
</compilation>
```

- Add the following line under <`system.web`> in `web.config`:

```xml
<httpRuntime targetFramework="4.5" requestValidationMode="2.0" />
```

- Add references to all files present inside "Helper Assemblies" folder to your project, including the following:
  - `FusionCharts.SharpVectors.Converters.dll`
  - `FusionCharts.SharpVectors.Core.dll`
  - `FusionCharts.SharpVectors.Css.dll`
  - `FusionCharts.SharpVectors.Dom.dll`
  - `FusionCharts.SharpVectors.Model.dll`
  - `FusionCharts.SharpVectors.Rendering.Wpf.dll`
  - `FusionCharts.SharpVectors.Runtime.dll`
