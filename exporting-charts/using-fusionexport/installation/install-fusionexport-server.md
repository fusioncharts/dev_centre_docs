---
permalink: exporting-charts/using-fusionexport/installation/install-fusionexport-server.html
title: Install FusionExport Server | FusionCharts
description: This article focuses on how you can install the FusionExport server.
heading: Install FusionExport Server
chartPresent: False
---

FusionExport server accepts export requests from FusionExport CLI, SDK clients, and browsers.

Download FusionExport from [here]("").

## Usage

### Mac OS X and Linux

Unzip the package and run **fusionexport** file. In MacOS or Linux based distribution, open the terminal and run the following commands: 

```
$ chmod +x ./fusionexport
$ ./fusionexport -H 0.0.0.0 -P 8080
```


> FusionExport will run mostly on all the Linux distributions. In case you are unable to run it, use our docker image or reach out to our [support team](mailto:support@fusioncharts.com).

### Windows

If you have a Windows machine then follow the given instructions for Powershell and Command Prompt respectively:

#### PowerShell

```
$ .\fusionexport.bat -H 0.0.0.0 -P 8080
```

#### Command Prompt

```
$ start fusionexport.bat -H 0.0.0.0 -P 8080
```

The above command starts the FusionExport server on port number 8080. For more help just pass -h option:

```
$ ./fusionexport -h
```

## Docker

Run the following command in your favorite terminal to start the server in docker container:

```
$ docker-compose up
```

The above command will complete all the dependencies missing for FusionExport Server. It will also include MySQL and RabbitMQ.

> In order to use FusionExport Server, you have to either use Fusion Export Server SDKs in your application or use FusionExport CLI. 

## What's next?

* [Install FusionExport CLI]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-cli '@@open-newtab')

* [Install FusionExport Server SDKs]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks '@@open-newtab')