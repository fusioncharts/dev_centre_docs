---
title: Install FusionGrid Server | FusionCharts
description: This article focuses on how you can install the FusionGrid server in Linux, macOS, and Windows
heading: Install FusionGrid Server
---

Before going ahead, please ensure that you have downloaded the FusionGrid server from [the download page](https://fusioncharts.com/download/fusiongrid). 
After downloading, unzip the downloaded package and follow the instructions below based on your environment.

## macOS X

Once you unzip the file, open the terminal, go to the unzipped FusionGrid directory and run the following command:

```shell
$ ./fusiongrid
```

The FusionGrid Server starts on `localhost` and listens to port `1337` by default. If there are no issues, then you will get a similar message as shown below:

[image of message here]

## Linux

In the case of Linux, you need to install a few dependencies first.
- If you use a Linux distribution that supports Debian package manager, for example, Ubuntu, Debian, then choose `DEB`. 
- If you use RPM-based distributions like Red Hat or Centos, then select `RPM`. 
Now open the terminal and run the respective commands:

[DEB Command]

[RPM Command]

Once you have installed all the dependencies, go to the unzipped FusionExport directory, run the following command:

```shell
$ ./fusiongrid
```

The FusionGrid Server starts on `localhost` and listens to port `XXX` by default. If there are no issues, then you will get a similar message as shown below:

[image of message here]

## Windows

On Windows machines, select the command-line interface of your choice, go to the unzipped directory of FusionGrid, and follow the instructions below:

[PowerShell Command]

[CommandPrompt Command]

The FusionGrid Server starts on `localhost` and listens to port `XXX` by default. If there are no issues, then you will get a similar message as shown below:

[image of message here]

## Docker

Run the following command in the terminal to start the server in docker container:

```Bash
$ docker-compose up
```

The above command will complete all the dependencies missing for FusionGrid Server. It will start the server on the `localhost` and listen to port `1337`.

After you have installed FusionCharts Server, install FusionGrid Server SDK for your preferred programming language from [here](link).

