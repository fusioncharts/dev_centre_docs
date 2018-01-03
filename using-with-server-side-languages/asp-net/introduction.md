---
permalink: using-with-server-side-languages/asp-net/introduction.html
title: Introduction to the FusionCharts ASP.NET Wrapper | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side ASP.NET wrapper that lets you create interactive, data-driven charts.
heading: Introduction to the FusionCharts ASP.NET Wrapper
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts ASP.NET Wrapper can be downloaded from <a href="http://www.fusioncharts.com/asp-net-charts/" target="_blank">here</a>.</p>

FusionCharts Suite XT includes the FusionCharts server-side ASP.NET wrapper that lets you create interactive, data-driven charts. FusionCharts uses JavaScript and HTML code to generate charts in the browser. Using the ASP.NET wrapper you can create charts in your ASP.NET website without having to write any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page for generating charts.

In this section, you will be shown how you can create a simple chart using the FusionCharts ASP.NET wrapper.

<p class="text-info"> The FusionCharts ASP.NET server-side wrapper requires a .NET Framework 3.5 or higher. </p>

<p class="text-info"> Before you begin, make sure that you have copied the <a href="https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile" target="_blank">__FusionCharts.dll__</a> file in the **Bin** folder of your application. </p>

## Creating a Simple Chart using the FusionCharts ASP.NET Wrapper

A column 3D chart that shows the monthly revenue for the last year at Harry’s SuperMart is shown below:

{% embed_chart using-with-server-side-languages-asp-net-introduction-example-1.js %}

As an example, we will try to create this chart using the ASP.NET wrapper.

Create two files named **JSONURL.aspx** and **JSONURL.aspx.cs**.

The data structure that goes into the **JSONURL.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript

        <%@ Page Language="C#" AutoEventWireup="true" CodeFile="JSONUrl.aspx.cs" Inherits="BasicExample_BasicChart" %>
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>FusionCharts - Simple</title>
                <!-- FusionCharts script tag -->
                <script type="text/javascript" src="../fusioncharts/fusioncharts.js"></script>
                <!-- End -->
            </head>
            <body>
                <div style="text-align:center">
                    <asp:Literal ID="Literal1" runat="server"></asp:Literal>
                </div>
            </body>
        </html>

    ```
  </div>

  <div class='tab xml-tab'>
```javascript

      <%@ Page Language="VB" AutoEventWireup="false" CodeFile="JSON_URL.aspx.vb" Inherits="Samples_BasicExamples_JSON_URL" %>

      <!DOCTYPE html>

      <html xmlns="http://www.w3.org/1999/xhtml">
      <head runat="server">
          <title>Basic FusionCharts population using JSON URL</title>
          <!-- FusionCharts script tag -->
          <script type="text/javascript" src="../../fusioncharts/fusioncharts.js"></script>
          <!-- End --> 
      </head>
      <body>
          Fusioncharts will render below
          <div style="text-align:center">
              <asp:Literal ID="Literal1" runat="server"></asp:Literal>           
          </div>
      </body>
      </html>


    ```
  </div>

</div>


The data structure that goes into the **JSONURL.aspx.cs** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript

      using System;
      using System.Collections;
      using System.Configuration;
      using System.Data;
      using System.Web;
      using System.Web.Security;
      using System.Web.UI;
      using System.Web.UI.HtmlControls;
      using System.Web.UI.WebControls;
      using System.Web.UI.WebControls.WebParts;
      // Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to create charts.
      using FusionCharts.Charts;
      public partial class BasicExample_BasicChart: System.Web.UI.Page
      {
          protected void Page_Load(object sender, EventArgs e)
          {
              // This page demonstrates the ease of generating charts using FusionCharts.
              // For this chart, we've used a pre-defined Data.json (contained in /Data/ folder)
              // Ideally, you would NOT use a physical data file. Instead you'll have
              // your own ASP.NET scripts virtually relay the JSON / XML data document.
              // For a head-start, we've kept this example very simple.
              //Initialize the chart.
              Chart sales = new Chart("column3d", "myChart", "600", "350", "jsonurl", "../Data/Data.json");
              // Render the chart
              Literal1.Text = sales.Render();
          }
      }


    ```
  </div>

  <div class='tab xml-tab'>
```javascript

      Imports System.Collections
      Imports System.Configuration
      Imports System.Data
      Imports System.Web
      Imports System.Web.Security
      Imports System.Web.UI
      Imports System.Web.UI.HtmlControls
      Imports System.Web.UI.WebControls
      Imports System.Web.UI.WebControls.WebParts
      ' Use FusionCharts.Charts name space
      Imports FusionCharts.Charts
      Partial Class Samples_BasicExamples_JSON_URL
          Inherits System.Web.UI.Page
          Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
              ' This page demonstrates the ease of generating charts using FusionCharts.
              ' For this chart, we've used a pre-defined Data.json (contained in /Data/ folder)
              ' Ideally, you would NOT use a physical data file. Instead you'll have 
              ' your own ASP.NET scripts virtually relay the JSON / XML data document.
              ' For a head-start, we've kept this example very simple.

              ' Initialize chart - Column 3D Chart with data from Data/Data.json
              Dim sales As New Chart("column3d", "myChart", "600", "350", "jsonurl", "../../Data/Data.json")
              ' Render the chart
              Literal1.Text = sales.Render()
          End Sub

      End Class

    ```
  </div>

</div>


The FusionCharts `Chart` class is used to initialize an object to create the chart. The `Render()` method is used to generate the HTML code required to render the chart. The parameters of the `Chart` class and the `Render()` method are explained in detail below.

## The FusionCharts Chart Class

### Constructor Parameters

The syntax of the `Chart` class constructor used to initialize the chart object is:

```vb.net
Chart <object name> = new Chart (chartType, chartId, chartWidth, chartHeight, dataFormat, dataSource, bgColor, bgOpacity)

```

Given below is a brief description of the constructor parameters:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


<p class="text-info"> It is not necessary that you assign values for all parameters during initialization. The order of parameters, however, needs to be preserved. Also, you need to make sure that all of these parameters have been assigned values using the constructor, the `Chart` class methods, or the `Render()` method before you run the application. If not, either the chart will not render at all or it will not render the way you want it to. </p>

### Methods under the Chart Class

Given below is a brief description of the methods in the `Chart` class:

<table>
  <tr>
    <th>Method Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`SetChartParameter`</td>
    <td>It is used to set or modify the values for chart parameters like `chartType`, `chartWidth`, `chartHeight`, etc. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter that you want to set/modify. For example, `Chart.ChartParameter.chartType`

`value`:
Type: String
Description: It is used to specify the value for the chart parameter. For example, `column2d`.</td>
  </tr>
  <tr>
    <td>`GetChartParameter`</td>
    <td>It is used to get the value of any chart parameter. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter whose value you want to get. For example, `Chart.ChartParameter.chartType`</td>
  </tr>
  <tr>
    <td>`SetData`</td>
    <td>It is used to set the data source for the chart. This method takes the following parameters:

`dataSource`:
Type: String
Description: It is used to specify the data for the chart. For example, `data/data.xml`.

`format`:
Type: enum
Description: It is used to specify the format of the data source. This is an optional parameter.</td>
  </tr>
</table>


## The Render() Method

Given below is a brief description of the parameters that can be passed using this method:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, and `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


For a working sample, you can use the **asp-net-wrapper.zip** included in the download package.