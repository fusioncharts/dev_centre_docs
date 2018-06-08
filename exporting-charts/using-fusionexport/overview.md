---
permalink: exporting-charts/using-fusionexport/overview.html
title: Overview | FusionCharts
description: Talks about FusionExport
heading: Overview
chartPresent: False
---

__FusionExport__, allows you to export JavaScript chart as a static image and export multiple charts as a zip file. The exported files can be used for sending emails, attachments and printable documents. You can convert charts into several image formats like PNG, JPEG, SVG, PDF, HTML and data formats CSV, XLS, XLSX. Also, convert dashboards into PNG, JPEG, PDF, HTML formats.

## Package Structure

FusionExport behaves similarly to a Database Servers like __MySQL__ and __MongoDB__. In case of MySQL, you will get a MySQL server along with SDKs for C#, Node.js, Python and so on which can be used in the application. These SDKs further let you query MySQL server, help in preventing from SQL injection and provide Object-Relational Mapping. It also comes with a __CLI__ utility where you can access the database via command line. FusionExport works in a similar way.

![Package Structure]({% site.baseurl %}/images/package-structure.png)

The three components of FusionExport are: 

1. **FusionExport Server** - Core component which performs all the actions related to export.

2. **FusionExport Server SDKs** - SDKs for 6 languages can be used in the stack to communicate with FusionExport Server with ease.

3. **FusionExport CLI** - To play around with FusionExport Server use this CLI utility to perform all the actions related to export via command line.

> If you want to use either of SDKs or CLI, make sure that FusionExport Server is running.

## Implementations

We have developed FusionExport packages in such a way that you can implement them in various use cases like Desktop Application to Cron Jobs. Now let's talk about various architectural scenarios which you can implement on top of FusionExport. 

There are three ways to implement FusionExport in your architecture - 

1. [API based Architecture]({% site.baseurl %}/exporting-charts/using-fusionexport/overview#api-based-architecture-3)

2. [Non API based Architecture]({% site.baseurl %}/exporting-charts/using-fusionexport/overview#non-api-based-architecture-5)

3. [CLI based Architecture]({% site.baseurl %}/exporting-charts/using-fusionexport/overview#cli-based-architecture-8)

### API based Architecture

![API based Architecture]({% site.baseurl %}/images/api-based-architecture.png)

This is the most common architecture which covers diverse scenarios like on-demand reports download, sending periodic emails via cron jobs, exporting dashboards and so on. 

As per the diagram, you will be using following FusionExport components in this architecture - 

1. FusionExport Server

2. FusionExport Server SDKs

While the components which you need to build are : 

1. **Client** - Client will be used by your end user. It could be - 

    1. **Web App** / **Mobile App** - End user can request to download a dashboard via browser or mobile

    2. **Command Line Utility** - You can send emails via cron jobs which contain charts or build an internal CLI utility to perform exporting tasks.

    3. **Desktop Application** - Similar to web app but instead of browser you can send request from a desktop application which you have built.

2. **Application Server** - This server could be built in either of the 6 SDKs which are supported by FusionExport. It should expose APIs which will be further be used by the client. This application server could also communicate to Database Server or Mail Server based on the use case.

> In case if the SDK is not available for your language, reach out to us on [support@fusioncharts.com](mailto:support@fusioncharts.com)

Flow for such architecture would be as follows : 

1. The client will send a request to the application server via APIs which are defined on the application server. 

2. Further, the application server could communicate to the database server to perform any other actions required followed by sending a request to FusionExport Server via FusionExport SDK

3. FusionExport Server will perform the exporting based on the given parameters and send the output back to the application server via SDKs

4. Application server could either send output to the email server or send it back to the client based on the use case

#### When to use?

* **On Demand Reports Download via Web, Mobile or Desktop Application:** If you are building an online or offline SaaS dashboard with ability to export dashboards which users can go and print or use it in their own documents, this is the right approach.

* **Sending Periodic Emails via Cron Jobs: **If you are trying to send periodic emails which are going to contain reports using third-party email services like SendGrid, this architecture will satisfy your needs.

* **Exporting Dashboards / Charts: **In case if you want to export charts and save it in either local filesystem or Amazon S3, you should consider this architecture.

### Non API based Architecture

In case if you don't want to / have an application server, you can directly communicate to FusionExport Server via SDKs. 

Similar to API based architecture you will be using following FusionExport components - 

1. FusionExport Server

2. FusionExport Server SDK

![Non API based Architecture]({% site.baseurl %}/images/non-api-based-architecture.png)

In this scenario, you don't have to worry about building any Application Server. You can simply build a client and directly communicate with FusionExport Server using SDK - 

1. **Client** - Client side application which will be used by the end user. It could be - 

    1. **Command Line Utility** - You can send emails via cron jobs which contain charts or build an internal CLI utility to perform exporting tasks.

    2. **Desktop Application** - You can send a request to export a chart or dashboard from a desktop application which you have built.

> Make sure that your client is written on top of the SDKs which are supported by FusionExport.

Flow for such architecture would be as follows -

1. You can write a client in Python, Node.js, Go, Java, C# using FusionExport Server SDKs. This utility could also communicate with your own application, database or email server to perform more actions.

2. FusionExport SDKs will communicate to FusionExport server to export items you have requested.

3. FusionExport server will export the items and send it back to the client utility via SDKs

#### When to use?

* **Sending Periodic Emails via Cron Jobs: **If you are trying to send periodic emails which are going to contain reports using third-party email services like SendGrid, this architecture will satisfy your needs.

* **Exporting Dashboards / Charts: **In case if you want to export charts and save it in either local filesystem or Amazon S3, you should consider this architecture.

#### When not to use?

* **On Demand Reports Download:** Since there is no Application Server in between it becomes difficult to provide public endpoints to send a request to export. Although, you can still create another server or client using SDKs and run it separately. We won't recommend it because it would expose FusionExport server to the public.

### CLI based Architecture

![CLI based Architecture]({% site.baseurl %}/images/cli-based-architecture.png)

In case if you don't want to write any implementation and use FusionExport internally, then you can also use the FusionCharts CLI where you don't have to write a single line of code. Use command line arguments specified in the FusionExport CLI and start using FusionExport in no time. 

In this case, you will be using following FusionExport components - 

3. FusionExport Server

4. FusionExport CLI

#### When to use?

* **Exporting Dashboards / Charts: **As mentioned above, in case if you want to export charts and save it in either local filesystem or Amazon S3, you should consider this architecture. All you have to do is - pass command line arguments.

#### When not to use?

* **Sending Periodic Emails via Cron Jobs: **Since it is a standalone command, you can not connect to an email server to send reports. 

* **On Demand Reports Download:** Similar to above scenario, since there are no endpoints available to the public, it is impossible to let other export charts using your FusionExport Server

## Ready to Get Started?

* [Install FusionExport Server]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server '@@open-newtab')

* [Install FusionExport CLI]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-cli '@@open-newtab')

* [Install FusionExport Server SDKs]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks '@@open-newtab')

* [Change the Export Type]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/change-the-export-type '@@open-newtab')