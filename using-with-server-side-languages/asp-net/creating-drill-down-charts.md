---
permalink: using-with-server-side-languages/asp-net/creating-drill-down-charts.html
title: Creating Drill-down Charts | FusionCharts
description: This article talks about creating drill-down charts. When any of the data plot in the chart is clicked, the chart drills down
heading: Creating Drill-down Charts
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts ASP.NET Wrapper can be downloaded from <a href="http://www.fusioncharts.com/asp-net-charts/" target="_blank">here</a>.</p>

A column 2D chart, with the drill-down functionality, is shown below:

{% embed_chart using-with-server-side-languages-asp-net-creating-drill-down-charts-example-1.js %}

The above chart shows the annual sales summary for the years 2010-2013. It is configured to show three levels of drill-down. The first column 2D chart shows the yearly sales summary for all the four years.

When any one of the four data plots for a year is clicked, the chart drills down to show a second column 2D chart. This chart shows the quarterly sales summary for that year..

When any one of the four data plots for a quarter is clicked, the chart drills down to show a third column 2D chart. This chart shows the monthly sales summary for that quarter.

In this example, you will be shown how you can create this drill-down chart using the FusionCharts ASP.NET wrapper.

The data structure that goes into the **../DrillDownExample/Default.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
  <%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="DB_DrillDown_Default" %>

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
    
    <%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="Samples_DrillDownExample_Default" %>

    <!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>FusionCharts - DrillDownExample</title>
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


The data structure that goes into the code behind **../DrillDownExample/Default.aspx.cs** file is given below:

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
  // using FusionCharts.Charts;

  public partial class DB_DrillDown_Default: System.Web.UI.Page {
      protected void Page_Load(object sender, EventArgs e) {
          // The data for the sample drill-down chart is stored in the DrillDownSSData.json file.
          // To create this chart, chart data will be loaded from the `.json` file.

          // Initialize the chart.
          Chart sales = new Chart("column2d", "myChart", "600", "350", "jsonurl", "../Data/DrillDownSSData.json");

          // Render the chart.
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

    ' Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
    Imports FusionCharts.Charts
    Partial Class Samples_DrillDownExample_Default
        Inherits System.Web.UI.Page
        Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
            ' This page demonstrates the ease of generating charts using FusionCharts.
            ' For this chart, we've used a pre-defined DrillDownSSData.json (contained in /Data/ folder)
            ' Ideally, you would NOT use a physical data file. Instead you'll have 
            ' your own ASP.NET scripts virtually relay the JSON / XML data document.
            ' For a head-start, we've kept this example very simple.

            ' Initialize chart - Column 2D Chart with data from Data/DrillDownSSData.json
            Dim sales As New Chart("column2d", "myChart", "600", "350", "jsonurl", "../../Data/DrillDownSSData.json")
            ' Render the chart
            Literal1.Text = sales.Render()
        End Sub
    End Class

  ```
  </div>

</div>


<p class="text-info"> To read on how drill-down charts are created, click [here](/advanced-charting/drill-down/simple-drill-down). </p>