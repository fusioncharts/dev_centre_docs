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

### MacOS

In macOS X, open a terminal and run the following commands:

```shell
$ chmod +x ./fusionexport
$ ./fusionexport
```

By default, the FusionExport Server starts on `**localhost`, and listens to port `**1337`.

### Linux

Similar to macOS in case of Linux-based distribution, open a terminal and run the following commands:

```shell
$ chmod +x ./fusionexport
$ ./fusionexport
```

By default, the FusionExport Server starts on `**localhost`, and listens to port `**1337`.

However, if you are running it on Linux servers then you may face few issues before the FusionExport server starts. In such cases run following commands in case as per your package manager (either DEB or RPM):

#### DEB

```shell
sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

#### RPM

```shell
$ yum -y install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc
```

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
