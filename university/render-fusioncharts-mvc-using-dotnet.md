---
title: Render FusionCharts in MVC using .NET
description: In this tutorial, we’ll be rendering fusioncharts in MVC using .NET
heading: Render FusionCharts in MVC Using .NET Framework
date: 2019/06/23
featured: true
author: rahul
---

## Overview

FusionCharts.NET is an extensive charting library for ASP.NET WebForms and MVC, in .NET Framework, .NET Core and .NET Standard. It takes advantage of the FusionCharts JavaScript (HTML5) library to render interactive charts. This means you do not need to write complex JavaScript and JSON code anymore. Simply use the methods and properties provided by FusionCharts .NET to render charts in C# or VB.NET.

## Architecture Overview

You can see the basic architecture of FusionCharts.NET in the diagram given below:

![](Render FusionCharts in MVC Using .NET Framework_images/image_0.png)

FusionCharts.NET is structured into two major modules - the Data Engine and the Visualization Engine. The former processes the data, while the latter renders the chart on the browser.

### Data Engine

The Data Engine of FusionCharts.NET helps you store data and run different data operations on it. You can optimize and transform the data the way you need before you send it to the Visualization Engine for rendering. The Data Engine consists of the following:

    * **Data Source**, which receives the raw data and creates an object to provide the data to the DataModel.

    * **Data Operations**, which you can apply to a DataModel, to create another optimized DataModel. You can send any of these DataModels to the Visualization Engine.

    * **DataModel**, which receives and stores optimized data. The Visualization Engine of FusionCharts.NET can only accept data in the form of a DataModel to render a chart.

### Prerequisites

Before you can build charts with FusionCharts.NET, you need to configure your system to have these loaded:

-  Visual Studio IDE and .NET Framework v3.5 (or later)

-  FusionCharts Suite XT, which you can download from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt?version=2&utm_expid=.oTKMCb4yRvC-v0Bh2zt4KA.1&utm_referrer=https%3A%2F%2Fwww.fusioncharts.com%2Fdownload%2Ffusioncharts-suite-xt%3Fversion%3D2).

-  FusionCharts.NET assembly, which you can get [here](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net).

FusionCharts.NET supports many different types of charts. You can find them all listed [here](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/chart-types/list-of-charts-in-fusioncharts-net). In this blog, you will see how to create a column chart with FusionCharts .NET and ASP.NET.

### Step 1

Create a web application in visual studio. Open Visual Studio and follow the steps mentioned below:

-  Click on **Create a New Project** → **ASP.NET Web Application (.NET Framework)**

-  Type the project name.

-  Click on **Create**.

-  Click on **MVC** (as shown in the screenshot below).

-  Click on **Create**.

![](Render FusionCharts in MVC Using .NET Framework_images/image_1.png)

### Step 2

Now, add Fusioncharts JavaScript files to this project. Right-click on **Scripts** folder and do the following:

-  Click on **Add Existing Item**.

-  Browse to FusionCharts JavaScript files and add them one by one.

When you are done, the solution explorer will look like the following:

![](Render FusionCharts in MVC Using .NET Framework_images/image_2.png)

### Step 3

Now, add a new **View** in this project. The chart will be rendered inside this view. To do so, right-click on the **Views** folder and follow the steps mentioned below:

-  Click on **Add**

-  Click on **View…**

-  Click on **MVC 5 View**

-  Click on **Add**

-  Type the name of the View as **ColumnChart** (as shown in the screenshot below)

-  Click on **Add**.

![](Render FusionCharts in MVC Using .NET Framework_images/image_3.png)

### Step 4

Now, add reference of FusionCharts JavaScript files and necessary tags in this view. Navigate to the **ColumnChart.cshtml** page and add the following lines:

_@{ Layout = null; }_

_<html>_

_<head>_

-  <script src="@Url.Content("/Scripts/FusionCharts/FusionCharts.js")"></script>*

-  <script src="@Url.Content("/Scripts/FusionCharts/themes/fusioncharts.theme.fusion.js")"></script>*

_</head>_

_<body>_

-  <div>*

-         <div id="chartContainer">@Html.Raw(ViewData["Chart"])</div>*

-  </div>*

_</body>_

_</html>_

### Step 5

It's time to add reference to FusionCharts.NET in this application. To do so, right-click on **References** and follow the steps mentioned below:

-  Click on **Add Reference**

-  Browse to and add both **FusionCharts.Visualization.dll** and **FusionCharts.DataEngine.dll** (as shown in the screenshot below)

-  Click **Ok**.

![](Render FusionCharts in MVC Using .NET Framework_images/image_4.png)

### Step 6

Next, you need to use references to **FusionCharts.DataEngine** and **FusionCharts.Visualization** in the controller. To do that, open the **Controller** folder and add the following lines to the **HomeController.cs** file:

_using FusionCharts.DataEngine;_

_using FusionCharts.Visualization;_

### Step 7

Open **HomeController.cs** and add a new action, **ColumnChart()**. This action will return the chart rendering string to **ColumnChart.cshtml**. Within this action, you need to write the code to build a chart object. In this example, you will fetch data from a DataTable. Apart from this, you can also fetch data from SQL Server, a JSON file, or a CSV file

.

Add the following code in the **ColumnChart** action:

_public ActionResult ColumnChart()_

_{_

**_ // Create data table to store data_**

-  DataTable ChartData = new DataTable();\*

**_ // Add columns to data table_**

-  ChartData.Columns.Add("Programming Language", typeof(System.String));\*

-  ChartData.Columns.Add("Users", typeof(System.Double));\*

**_ // Add rows to data table_**

-         ChartData.Rows.Add("Java", 62000);*

-  ChartData.Rows.Add("Python", 46000);\*

-  ChartData.Rows.Add("Javascript", 38000);\*

-  ChartData.Rows.Add("C++", 31000);\*

-  ChartData.Rows.Add("C#", 27000);\*

-  ChartData.Rows.Add("PHP", 14000);\*

-  ChartData.Rows.Add("Perl", 14000);\*

**_ // Create static source with this data table_**

-  StaticSource source = new StaticSource(ChartData);\*

**_ // Create instance of DataModel class_**

-  DataModel model = new DataModel();\*

**_ // Add DataSource to the DataModel_**

-  model.DataSources.Add(source);\*

**_ // Instantiate Column Chart_**

-  Charts.ColumnChart column = new Charts.ColumnChart("first_chart");\*

**_ // Set the width and the height of the chart_**

-  column.Width.Pixel(700);\*

-  column.Height.Pixel(400);\*

**_ // Set DataModel instance as the data source of the chart_**

-  column.Data.Source = model;\*

**_ // Set Chart Caption_**

-  column.Caption.Text = "Most popular programming language";\*

**_ // Set Chart Subcaption_**

-  column.SubCaption.Text = "2017-2018";\*

**_ // Hide Chart Legend_**

-  column.Legend.Show = false;\*

**_ // Set X-axis Text_**

-  column.XAxis.Text = "Programming Language";\*

**_ // Set Y-axis title_**

-  column.YAxis.Text = "User";\*

**_ // Set chart theme_**

-  column.ThemeName = FusionChartsTheme.ThemeName.FUSION;\*

**_ // Set chart rendering string in ViewData as a key-value pair_**

-  ViewData["Chart"] = column.Render();\*

**_ // Return the view_**

-  return View();\*

_}_

### Rendered Chart

The output chart will look like the screenshot given below:

![](Render FusionCharts in MVC Using .NET Framework_images/image_5.png)

Click [here ](https://dotnetfiddle.net/nVVeWE) to edit the column chart.

### Render Column Chart with Multiple Series

If the DataModel has more than one value column, the Visualization Engine will automatically render a Multi Series Column Chart.

Click [here](https://dotnetfiddle.net/nxmoKm) to edit a column chart with multiple value fields.

### Render 3D Column Chart

If you set the **ThreeD** property to **true** (using the code shown below), the Visualization Engine will render a 3D column chart.

_column.ThreeD = true;_

Click [here](https://dotnetfiddle.net/kSc5WZ) to edit a ThreeD column chart.

### Render Overlapped Column Chart

If the DataModel has two or more value columns and you set the **Overlapped** property to **true**, then the Visualization Engine will render an overlapped column chart.

_column.Overlapped = true;_

Click [here](https://dotnetfiddle.net/1HYSai) to edit an overlapped column chart.

### Render Scrollable Column Chart

If you set the **Scrollable** property to **true** (using the code shown below), the Visualization Engine will render a Scrollable Column chart.

_column.Scrollable = true;_

Click [here](https://dotnetfiddle.net/TeDjsE) to edit a scrollable column chart.
