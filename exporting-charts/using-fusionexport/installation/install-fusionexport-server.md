---
title: Install FusionExport Server | FusionCharts
description: This article focuses on how you can install the FusionExport server.
heading: Install FusionExport Server
---

FusionExport server accepts export requests from [FusionExport CLI](/exporting-charts/using-fusionexport/installation/install-fusionexport-cli), [SDK clients](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks), and browsers. For most practical use cases, we strongly recommend using the SDK clients for your preferred programming language.

## Download

Download FusionExport from [here](https://fusioncharts.com/download/fusionexport). After downloading:

- Unzip the downloaded package.

- Open the command-line interface and navigate to the directory containing the unzipped files.

## Usage

### Mac OS X and Linux

In **MacOS** or **Linus** based distribution, open the terminal and run the following commands:

```Bash
$ chmod +x ./fusionexport
$ ./fusionexport
```

By default, the FusionExport Server starts on **localhost**, and listens to port **1337**.

> FusionExport will run mostly on all the Linux distributions. In case you are unable to run it, use our docker image or reach out to our [engineering team](mailto:fusionexport@fusioncharts.com) or [support team](mailto:support@fusioncharts.com) and we will help you with the integration.

### Windows

Based on the command-line interface of your choice on Windows machines, follow the instructions either for Powershell or Command Prompt.

#### PowerShell

Execute the batch file `fusionexport.bat`:

```Bash
$ .\fusionexport.bat
```

#### Command Prompt

Execute the batch file `fusionexport.bat`:

```Bash
$ start fusionexport.bat
```

By default, the FusionExport Server starts on **localhost**, and listens to port **1337**.

> When you download FusionExport for Windows, you will find executables like `fusionexport.exe` and `service.exe`. **Do not** run them by double-clicking on the file icons; instead, execute them using either the Command Prompt or the PowerShell.

## Docker

Run the following command in the terminal to start the server in docker container:

```Bash
$ docker-compose up
```

The above command will complete all the dependencies missing for FusionExport Server. It will start the server and listen to port **1337**.

## Next Step

After you have installed FusionCharts Server, install FusionExport Server SDK for your preferred programming language from [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks).
