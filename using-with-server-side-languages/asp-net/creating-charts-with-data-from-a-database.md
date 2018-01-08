---
permalink: using-with-server-side-languages/asp-net/creating-charts-with-data-from-a-database.html
title: Creating Charts in ASP.Net using a Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts ASP.NET wrapper to create a multi-series line chart by fetching data from a database.
heading: Creating Charts in ASP.Net using a Database
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts ASP.NET Wrapper can be downloaded from <a href="http://www.fusioncharts.com/asp-net-charts/" target="_blank">here</a>.</p>

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts ASP.NET wrapper to create a multi-series line chart by fetching data from a database.

<p class="text-info"> Although you can create all FusionCharts chart types using this method, in this section we will focus on only this one example these two examples. </p>

<p class="text-info"> Before you begin, make sure that you have copied the <a href="https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile" target="_blank">__FusionCharts.dll__</a> file in the **Bin** folder of your web application. </p>

## Creating a Multi-series Line Chart

A multi-series line chart that shows the factory output by quantity for three factories is shown below:

{% embed_chart using-with-server-side-languages-asp-net-creating-charts-with-data-from-a-database-example-1.js %}

Assume that you have a **factoryDB** database with the **factory_output** table that shows the number of units produced by three factories daily, from January 1, 2003 to January 20, 2003. In this example, you will be shown how you can use the FusionCharts ASP.NET wrapper and fetch data from this database to create the above multi-series line chart.

The data structure that goes into the **../DBExample/MSCharts.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
  <%@ Page Language="C#" AutoEventWireup="true" CodeFile="MSCharts.aspx.cs" Inherits="DBExample_MSCharts" %>

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

    <%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="Samples_DBExample_index" %>

      <!DOCTYPE html>

      <html xmlns="http://www.w3.org/1999/xhtml">
      <head runat="server">
          <title>FusionCharts with Database</title>
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


The data structure that goes into the code behind **../DBExample/MSCharts.aspx.cs** file is given below:

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

  // Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
  using FusionCharts.Charts;

  using System.Text;
  using System.Data.Odbc;
  using DataConnection;
  using System.Data.OleDb;

  public partial class DBExample_MSCharts: System.Web.UI.Page {
      protected void Page_Load(object sender, EventArgs e)

      {
          // Create the `xmlData` StringBuilder object to store the data fetched
          //from the database as a string.
          StringBuilder xmlData = new StringBuilder();

          // Initialize the chart-level attributes and append them to the
          //`xmlData` StringBuilder object.

          xmlData.Append("<chart caption='Factory Output report' subCaption='By Quantity' showBorder='1' formatNumberScale='0' rotatelabels='1' showvalues='0'>");

          // Initialize the `<categories>` element.
          xmlData.AppendFormat("<categories>");

          // Every date between January 01, 2003 and January 20, 2003 is entered thrice
          // in the **datepro** field in the **FactoryDB **database.

          // The dates will be shown as category labels on the x-axis of the chart.

          // Because we need to show each date only once, use the `select` query
          // with the `distinct` keyword to fetch only one instance of each date from the database.

          // Store the output of the `select` query in the `factoryQuery` string variable.

          string factoryQuery = "select distinct format(datepro,'dd/mm/yyyy') as dd from factory_output";

          // Establish the database connection.
          DbConn oRs = new DbConn(factoryQuery);

          // Iterate through the data in the `factoryQuery` variable and add the dates as

          // labels to the `<category>` element.

          // Append this data to the `xmlData` object.
          while (oRs.ReadData.Read()) {
              xmlData.AppendFormat("<category label='{0}'/>", oRs.ReadData["dd"].ToString());
          }

          //Close the database connection.
          oRs.ReadData.Close();

          //Close the `<catgories>` element.
          xmlData.AppendFormat("</categories>");

          //Fetch all details for the three factories from the **Factory_Master** table
          // and store the result in the `factoryquery2` variable.

          string factoryquery2 = "select * from factory_master";

          //Establish the database connection..
          DbConn oRs1 = new DbConn(factoryquery2);

          // Iterate through the results in the `factoryquery2` variable to fetch the
          // factory name and factory id.

          while (oRs1.ReadData.Read()) {
              // Append the factory name as the value for the `seriesName` attribute.
              xmlData.AppendFormat("<dataset seriesName='{0}'>", oRs1.ReadData["factoryname"].ToString());

              // Based on the factory id, fetch the quantity produced by each factory on each day
              // from the factory_output table.

              // Store the results in the `factoryquery3` string object.

              string factoryquery3 = "select quantity from factory_output where factoryid=" + oRs1.ReadData["factoryid"].ToString();

              //Establish the database connection.
              DbConn oRs2 = new DbConn(factoryquery3);

              // Iterate through the results in the `factoryquery3` object and fetch the quantity details
              // for each factory.

              // Append the quantity details as the the value for the `<set>` element.

              while (oRs2.ReadData.Read()) {
                  xmlData.AppendFormat("<set value='{0}'/>", oRs2.ReadData[0].ToString());
              }

              // Close the database connection.
              oRs2.ReadData.Close();

              // Close the `<dataset>` element.
              xmlData.AppendFormat("</dataset>");
          }

          // Close the database connection.
          oRs1.ReadData.Close();

          // Close the `<chart>` element.
          xmlData.AppendFormat("</chart>");

          // Initialize the chart.
          Chart factoryOutput = new Chart("msline", "myChart", "600", "350", "xml", xmlData.ToString());

          // Render the chart.
          Literal1.Text = factoryOutput.Render();
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

    Imports System.Text
    Imports System.Data.Odbc
    Imports DataConnection
    Imports System.Data.OleDb

    Public Partial Class DBExample_MSCharts
      Inherits System.Web.UI.Page
      Private Sub Page_Load(sender As Object, e As EventArgs)  Handles MyBase.Load

        ' Create the `xmlData` StringBuilder object to store the data fetched
        'from the database as a string.
        Dim xmlData As New StringBuilder()

        ' Initialize the chart-level attributes and append them to the
        '`xmlData` StringBuilder object.

        xmlData.Append("<chart caption='Factory Output report' subCaption='By Quantity' showBorder='1' formatNumberScale='0' rotatelabels='1' showvalues='0'>")

        ' Initialize the `<categories>` element.
        xmlData.AppendFormat("<categories>")

        ' Every date between January 01, 2003 and January 20, 2003 is entered thrice
        ' in the **datepro** field in the **FactoryDB **database.

        ' The dates will be shown as category labels on the x-axis of the chart.

        ' Because we need to show each date only once, use the `select` query
        ' with the `distinct` keyword to fetch only one instance of each date from the database.

        ' Store the output of the `select` query in the `factoryQuery` string variable.

        Dim factoryQuery As String = "select distinct format(datepro,'dd/mm/yyyy') as dd from factory_output"

        ' Establish the database connection.
        Dim oRs As New DbConn(factoryQuery)

        ' Iterate through the data in the `factoryQuery` variable and add the dates as

        ' labels to the `<category>` element.

        ' Append this data to the `xmlData` object.
        While oRs.ReadData.Read()
          xmlData.AppendFormat("<category label='{0}'/>", oRs.ReadData("dd").ToString())
        End While

        'Close the database connection.
        oRs.ReadData.Close()

        'Close the `<catgories>` element.
        xmlData.AppendFormat("</categories>")

        'Fetch all details for the three factories from the **Factory_Master** table
        ' and store the result in the `factoryquery2` variable.

        Dim factoryquery2 As String = "select * from factory_master"

        'Establish the database connection..
        Dim oRs1 As New DbConn(factoryquery2)

        ' Iterate through the results in the `factoryquery2` variable to fetch the
        ' factory name and factory id.

        While oRs1.ReadData.Read()
          ' Append the factory name as the value for the `seriesName` attribute.
          xmlData.AppendFormat("<dataset seriesName='{0}'>", oRs1.ReadData("factoryname").ToString())

          ' Based on the factory id, fetch the quantity produced by each factory on each day
          ' from the factory_output table.

          ' Store the results in the `factoryquery3` string object.

          Dim factoryquery3 As String = "select quantity from factory_output where factoryid=" + oRs1.ReadData("factoryid").ToString()

          'Establish the database connection.
          Dim oRs2 As New DbConn(factoryquery3)

          ' Iterate through the results in the `factoryquery3` object and fetch the quantity details
          ' for each factory.

          ' Append the quantity details as the the value for the `<set>` element.

          While oRs2.ReadData.Read()
            xmlData.AppendFormat("<set value='{0}'/>", oRs2.ReadData(0).ToString())
          End While

          ' Close the database connection.
          oRs2.ReadData.Close()

          ' Close the `<dataset>` element.
          xmlData.AppendFormat("</dataset>")
        End While

        ' Close the database connection.
        oRs1.ReadData.Close()

        ' Close the `<chart>` element.
        xmlData.AppendFormat("</chart>")

        ' Initialize the chart.
        Dim factoryOutput As New Chart("msline", "myChart", "600", "350", "xml", xmlData.ToString())

        ' Render the chart.
        Literal1.Text = factoryOutput.Render()
      End Sub
    End Class

  ```
  </div>

</div>