---
title: Install FusionExport for Windows Service | FusionCharts
description: This article focuses on how you can install the FusionExport for windows service.
heading: Install FusionExport for Windows Service
---

In this article, we elaborate how to install FusionExport binary on your Windows Machine.

There are two different packages for Windows.

1. **Normal FusionExport Service** - This is like any other FE distribution for different OS, where you just need to execute `fusionexport.sh` or `fusionexport.bat`.
2. **FusionExport Windows Service** - This is what we will be doing in this installation guide

Follow the steps below for the installation process:

- Download the FusionExport Service 64 bit for Windows.

<img src="{% site.BASE_URL %}/images/download-fusionexport-server-for-windows-service.png" alt="Download FusionExport Server" width="700" height="420">

- The setup file will be downloaded to the local. Now, run the exe file. The setup wizard will now appear on the screen. Click Next.

![Click Next for Windows Service](/images/click-next-windows-service.png)

- Now, select the setup type to **Custom** and click Next. 

> In this case, we allow the option to set up IP and Port Name. If you want to keep the default IP and Port which is **127.0.0.1:1337**, then you should choose Typical.

![Cusom Click Next for Windows Service 1](/images/custom-click-next-for-windows-service-1.png)

![Cusom Click Next for Windows Service 2](/images/custom-click-next-for-windows-service-2.png)

- Once the wizard is running, FusionExport and all the dependencies gets installed.

![Install dependencies for Windows Service](/images/install-dependencies-for-windows-service.png)

- Configure the IP address and Port number before setting up FusionExport server.

![Configure IP address for Windows Service](/images/configure-ip-address-for-windows-service.png)

- Once the installation is complete, click on Finish. FusionExport will run successfully on the [localhost server](http://127.0.0.1:1337/).

![Install Windows Service](/images/installation-for-fe-windows-service.png)

- Please download our SDKs to export your charts and dashboards from [here](http://fusioncharts.com/download/fusionexport).
