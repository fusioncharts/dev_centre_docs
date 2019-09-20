---
title: Create a Funnel Chart using FusionCharts and ASP.NET Web Form
description: In this tutorial, we’ll be creating a Funnel Chart using Fusioncharts and ASP.NET
heading: Create a Funnel Chart Using FusionCharts and ASP.NET Web Form in .NET Framework
date: 2019/06/23
featured: true
author: rahul
---

## Overview

FusionCharts.NET is a charting library for ASP.NET WebForms and MVC. It works with all .NET Framework editions, such as .NET Core and .NET Standard.

FusionCharts.NET uses FusionCharts (HTML5) JavaScript library to render interactive charts. The simple methods and properties provided in the suite help you render charts in C#.NET or VB.NET, without writing messy JavaScript or JSON code.

## Architecture Overview

FusionCharts.NET provides you with two modules:

* **Data Engine**: The data engine of FusionCharts.NET lets you store data and perform operations on it. This way, you can transform and optimize the data before sending it to the chart renderer. The data engine consists of the following:

    * **Data Sources**: It receives the raw data and creates an object to provide the data to the DataModel.

    * **Data Operations**: These can be applied on existing DataModels. A new DataModel is created automatically, whenever you apply an operation on an existing DataModel. 

    * **Data Model**: The DataModel receives and stores the optimized data. You have to provide a DataModel to the Visualization Engine of FusionCharts.NET, to render charts. Keep in mind that in FusionCharts.NET, the visualization engine can only accept data in the form of a DataModel.

* **Visualization Engine**: The visualization engine of FusionCharts.NET lets you render a chart with functional and cosmetic configurations, after receiving the data from the data engine.

The diagram given below may help you understand the architecture of FusionCharts.NET:

![](Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_0.png)

## Prerequisites

Before you start building charts with FusionCharts.NET, you need to install the following programs on your computer:

* Visual Studio IDE and .NET Framework v3.5 (or later)

* FusionCharts Suite XT, which you can download from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt?version=2&utm_expid=.oTKMCb4yRvC-v0Bh2zt4KA.1&utm_referrer=https%3A%2F%2Fwww.fusioncharts.com%2Fdownload%2Ffusioncharts-suite-xt%3Fversion%3D2).

* FusionCharts.NET assembly, which you can get [here](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net).

FusionCharts.NET supports different types of charts. You can find them all listed [here](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/chart-types/list-of-charts-in-fusioncharts-net). In this blog, you will see how to render a funnel chart in ASP.NET. 

**Step 1**

Create a web application in visual studio. To do so, open Visual Studio and follow the steps mentioned below:

* Click on **Create a new Project** → **ASP.NET Web Application (.NET Framework)**

* Type the name of your project 

* Click on **Create**

* Click on **Empty** (as shown in the screenshot below).

* Finally, click on **Create**.

![](Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_1.png)

**Step 2**

Now, add Fusioncharts JS files to this project. To do so:

* Create a folder named **Script** and copy the FusionCharts JavaScript source file in it.

* Right-click on the name of the solution.

* Click on **Add** → **New Folder**

* Name the new folder **Script**.

* Right-click on the **Script** folder

* Click **Add Existing Item**.

Now, browse to the location where you have downloaded the FusionCharts JavaScript files, to add them to the **Script** folder. After you add the files, the solution explorer will look as in the screenshot you can see below:

![](Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_2.png)

**Step 3**

Now, add a web form, inside which FusionCharts.NET will render the chart. To add the form:

* Right-click on the solution

* Click **Add** → **Web Form**

* Name the web form **FunnelChart**

* Click **Ok**.

<img src ="Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_3.png">

**Step 4**

Add a reference to FusionCharts JS and theme files file in the .aspx page of your solution. Navigate to the **FunnelChart.aspx** page. Within the code, add the following lines inside <script> tags.

```html
<script type="text/javascript" src="Scripts/fusioncharts.js"></script>

<script type="text/javascript" src="Scripts/fusioncharts.theme.fusion.js"></script>

<script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.widgets.js"></script>
``` 

**Step 5**

Now, add a Literal control in **FunnelChart.aspx** page. Copy and paste the code given below:

```html
<form id="form1" runat="server">
  <div>
    <asp:Literal ID="Literal1" runat="server"></asp:Literal>
   </div>
</form>
```

**Step 6**

Add a reference to FusionCharts.NET in this application. To do so:

* Right click on **References**

* Click on **Add Reference**

* From the Reference Manager window, browse to the **FusionCharts.Visualization.dll** and **FusionCharts.DataEngine.dll** files. Add both to the application.

* Click **Ok**.

<img src="Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_4.png">


**Step 7**

Use references to both **FusionCharts.DataEngine** and **FusionCharts.Visualization**. Navigate to the **FunnelChart.aspx.cs** page and add the following lines at the top of the code:

```
using FusionCharts.DataEngine;*

using FusionCharts.Visualization;*
```

**Step 8**

Insert the code given below within the **PageLoad()** event of the **FunnelChart.aspx.cs** page, to render the Funnel chart. In this example, you will fetch data from DataTable. However, you can also fetch data from SQL Server, a JSON file, or a CSV file. 


```js
// Create Data table

DataTable ChartData = new DataTable();

// Add columns to data table

ChartData.Columns.Add("Label", typeof(System.String));

ChartData.Columns.Add("Value", typeof(System.Double));

// Add rows to data table

ChartData.Rows.Add("Unique Website Visits", 1460000);

ChartData.Rows.Add("Programme Details Section Visits", 930000);

ChartData.Rows.Add("Attempts to Register", 540000);

ChartData.Rows.Add("Successful Registrations", 210000);

ChartData.Rows.Add("Logged In", 190000);

ChartData.Rows.Add("Purchased on Introductory Offers", 120000);

// Create Static Source with the data table

StaticSource source = new StaticSource(ChartData);

// Create an instance of DataModel

DataModel model = new DataModel();

// Add data sources to DataModel

model.DataSources.Add(source);

// Instantiate the Funnel Chart, which is under the Widget class

Widget.FunnelChart funnel = new Widget.FunnelChart("first_Funnel_chart");

// Set model object as the data source of funnel

funnel.Data.Source = model;

// Set caption

funnel.Caption.Text = "Visit to purchase analysis";

// Set subcaption

funnel.SubCaption.Text = "Visit to purchase- Conversion Analysis for last year";

// Set width and height of the chart

funnel.Width.Pixel(600);

funnel.Height.Pixel(400);

// Set chart theme

funnel.ThemeName = FusionChartsTheme.ThemeName.FUSION;

// Render chart in Literal

Literal1.Text = funnel.Render();
```


### Rendered Widget

The output chart will look as shown below:

<img src ="Create a Funnel Chart Using FusionCharts and ASP.NET_images/image_5.png">

Click [here](https://dotnetfiddle.net/FWAZel) to edit a funnel chart.

