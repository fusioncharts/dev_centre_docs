---
title: Exception Handling in FusionCharts.NET | FusionCharts
description: FusionCharts.NET simplifies exception handling in ASP.NET by introducing the Exceptions class in Visualization Engine. Read in-depth article to know more.
heading: Exception Handling
---

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

## Examples

### Set Exception for a Column Chart

In this example the data source is not set for the chart object. The sample will throw an exception that **Data Source is not Defined**. As the Suppress Exception is set to `true`, the `Render()` will render a `<div>` with proper exception message.

Refer to the code below:

**.axpx**

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title></title>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"></script>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
  </head>
  <body>
    <form id="form1" runat="server">
      <div>
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
      </div>
    </form>
  </body>
</html>
```

**.aspx.cs** & **.aspx.vb**

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-csharp">
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FcTest 
{
    public partial class ChartTest: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e) 
        {
           // create column object
           Charts.ColumnChart column = new Charts.ColumnChart("id");
           // set suppress exception true
           column.Exceptions.Suppress = true;
           // set column chart width
           column.Width.Pixel(800);
           // render chart
           Literal1.Text = column.Render()
        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-csharp">
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FcTest
Public Partial Class ChartTest
Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim column As Charts.ColumnChart = New Charts.ColumnChart("id")
            column.Exceptions.Suppress = True
            column.Width.Pixel(800)
            Literal1.Text = column.Render()
        End Sub
    End Class

End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

### Set Exception for a Time Series Chart

In this example the data source has been set with some wrong data format for the chart object. The sample will throw an exception while reading. As the Suppress Exception is set to `true`, the `Render()` will render a `<div>` with proper exception message.

Refer to the code below:

**.aspx**

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title></title>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"></script>
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
  </head>
  <body>
    <form id="form1" runat="server">
      <div>
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
      </div>
    </form>
  </body>
</html>
```

**.aspx.cs** & **.aspx.vb**

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-csharp">
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FcTest 
{
    public partial class ChartTest: System.Web.UI.Page 
    {
      protected void Page_Load(object sender, EventArgs e) 
      {
           // create timeSeries object
           Charts.TimeSeriesChart timeSeries = new Charts.TimeSeriesChart("id");
           // set data source handler path
           timeSeries.Data.SourcePathHandler = @ "DataHandler.ashx";
           // set suppress exception true
           timeSeries.Exceptions.Suppress = true;
           // set timeSeries chart width
           timeSeries.Width.Pixel(800);
           // render chart
           Literal1.Text = timeSeries.Render()
      }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-csharp">
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FcTest
Public Partial Class ChartTest
Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim timeSeries As Charts.TimeSeriesChart = New Charts.TimeSeriesChart("id")
            timeSeries.Data.SourcePathHandler = "DataHandler.ashx"
            timeSeries.Exceptions.Suppress = True
            timeSeries.Width.Pixel(800)
            Literal1.Text = timeSeries.Render()
        End Sub
    End Class

End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

**.ashx** & **.ashx.vb**

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-csharp">
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
namespace FcTest 
{
    public class DataHandler: IHttpHandler 
    {
        public void ProcessRequest(HttpContext context) 
        {
           // extract chart id
           string chartId = context.Request["id"];
           // extract exception suppress setting
           bool suppress = string.Equals(context.Request["suppressexception"], "1") ? true : false;
           // creatae jsonFileSource object
           JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/predictive-data-in-fusiontime/data.json");
           // create model object
           DataModel model = new DataModel();
           // jsonFileSource in model DataSources
           model.DataSources.Add(jsonFileSource);
           context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(model, suppress, chartId));
        }
    
        public bool IsReusable 
        {
           get 
           {
            return false;
           }
        }
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-csharp">
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web

Namespace FcTest
Public Class DataHandler
Implements IHttpHandler

        Public Sub ProcessRequest(ByVal context As HttpContext)
            Dim chartId As String = context.Request("id")
            Dim suppress As Boolean = If(String.Equals(context.Request("suppressexception"), "1"), True, False)
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/predictive-data-in-fusiontime/data.json")
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(jsonFileSource)
            context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(model, suppress, chartId))
        End Sub

        Public ReadOnly Property IsReusable As Boolean
            Get
                Return False
            End Get
        End Property
    End Class

End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>
