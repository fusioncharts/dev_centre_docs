---
permalink: exporting-charts/using-excelexport/excel-export-setup.html
title: Server Side Set-up | FusionCharts
description: This page talks about setting up the excel export feature.
heading: Server Side Set-up
chartPresent: False
---

## Prerequisites

* .Net 4+
* IIS 7+

## Integrate into an MVC Application

__Steps :__

* Create an MVC (min version 2.0) project in Visual Studio.

* Install **FusionCharts.ExcelExport.MVC** using one of the two methods given below:

    * __Method 1__: Through Nuget Package Manager:

        * Search for the package in the Nuget repository.

        ![Excel Export]({% site.baseurl %}/images/server-side-set-up-image-1.png)

        * Click __Install__.

    * __Method 2__: Through the Nuget command line, execute the command given below:

```
$ Install-Package FusionCharts.ExcelExport.MVC -Version 1.0.0-beta
```

* Add the code given below to the **Global.asax** class:

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
// Step 1: Import dependencies
using FusionCharts.ExportServerMVC.Register;

namespace FusionExcelExportServer
{
    public class FusionExcelExport : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // Step 2: Register export route
            (new ExportMVCRegistrar()).RegisterRoutes(RouteTable.Routes);        
        }

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            // Step 3: Handle pre-flight request
            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                HttpContext.Current.Response.AddHeader("Cache-Control", "no-cache");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", HttpContext.Current.Request.Headers["Access-Control-Request-Headers"]);
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
                HttpContext.Current.Response.End();
            }
        }
    }
}
```

The above code:

* Imports module dependency.
* Registers the export route handler in the **Application_Start** method of the **Global.asax** class.
* Handles the pre-flight **OPTIONS** response headers.

* The method signature for ExportMVCRegistrar.RegisterRoutes is:

```
ExportMVCRegistrar RegisterRoutes(RouteCollection routes, [string routeURL = "api/v1.0/export"])`
```

The routeURL is optional and the default URL is `api/v1.0/export`. This is the URL of the export endpoint and should be set as `exportExcelHandler` field in chart config (client-side setup). For e.g., default endpoint URL will be __http&#58;//yourURL.com/api/v1.0/export__.


* To disable incoming request validation, add the code given below to the **web.config** file:

```html
<configuration>
    <system.web>
    <!-- 
    Add these configurations to your existing system.web.
    If the mentioned tags are already present in your web.config, only add the missing attribute values for that tag.
    -->
    <httpRuntime requestValidationMode="2.0"/>
    <pages>
        <namespaces>
            <add namespace="System.Web.Mvc"/>
            <add namespace="System.Web.Mvc.Ajax"/>
            <add namespace="System.Web.Mvc.Html"/>
            <add namespace="System.Web.Routing"/>
        </namespaces>
    </pages>
    </system.web>
</configuration>
```

* Build and run the application.

## Integrate into a simple ASP.Net application

__Steps:__

* Create a simple web application from an empty template or use your existing project in Visual Studio.
* Install __FusionCharts.ExcelExport.SimpleASPX__ using one of the two methods given below:

* __Method 1__: Through Nuget Package Manager 

    * Search for the package in the Nuget repository.

    ![Excel Export]({% site.baseurl %}/images/server-side-set-up-image-5.png)

    * Click **Install**.

* __Method 2__: Through the Nuget command line, execute the command given below:
**$ Install-Package FusionCharts.ExcelExport.SimpleASPX -Version 1.0.0-beta**

* In the **web.config** file, add `<httpRuntime requestValidationMode="2.0" />` under the `<system.web>` configuration, as shown below: 

```html
<configuration>
    <system.web>
    <!-- 
    Add these configurations to your existing system.web.
    If the mentioned tags are already present in your web.config, only add the missing attribute values for that tag.
    -->
    <httpRuntime requestValidationMode="2.0"/>
    <pages>
        <namespaces>
            <add namespace="System.Web.Mvc"/>
            <add namespace="System.Web.Mvc.Ajax"/>
            <add namespace="System.Web.Mvc.Html"/>
            <add namespace="System.Web.Routing"/>
        </namespaces>
    </pages>
    </system.web>
</configuration>
```

* By default **FCExcelExport.aspx** will be located in the root directory, so your default post request will be handled by __https://yourURL.com//FCExcelExport.aspx__.
* For a custom path of Excel export, save the file  **FCExcelExport.aspx** in your desired location and post all your requests to that path. E.g. __https://yourURL.com/&lt; file location &gt;/FCExcelExport.aspx__.
* Build and run the application.

## Integrate into a WebAPI 2 application

__Steps:__

* Create a WebAPI 2 project or use an existing one.

* Install the **FusionCharts.ExcelExport.WebAPI,** using one of the two methods given below:

    * __Method 1:__ Through Nuget Package manager:
        * Search for the package in the Nuget repository.

        ![Excel Export]({% site.baseurl %}/images/server-side-set-up-image-6.png)

        * Click __Install__.

    * __Method 2:__ Through the Nuget command line, execute the command given below:

```
$ Install-Package FusionCharts.ExcelExport.WebAPI -Version 1.0.0-beta
```

* In the **WebApiConfig.cs** file, insert the code given below to register the routeURL of Excel export:

```
FCExcelExport_WebApi.WebApiConfig.Register(config,"<routeURL>");
```

* By default `routeURL` is set to FCExcelExport.
* Build the application.
* Run the application.
* Post all your requests at **https://yourURL.com//routeURL**.