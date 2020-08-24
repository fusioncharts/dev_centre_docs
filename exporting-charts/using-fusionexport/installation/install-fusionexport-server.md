---
title: Install FusionExport Server | FusionCharts
description: This article focuses on how you can install the FusionExport server in Linux, Mac and Windows
heading: Install FusionExport Server
---

Before going ahead, please ensure that you have downloaded the FusionExport server from [the download page](https://fusioncharts.com/download/fusionexport). After downloading, unzip the downloaded package and follow the instructions gives below based on your environment.

## macOS X

Once you have unzipped it, open the terminal, go to the unzipped FusionExport directory and run the following command:

```shell
$ ./fusionexport
```

By default, the FusionExport Server starts on `localhost`, and listens to port `1337`. If there are no issues, then you will get a similar message as shown below:

<img src="{% site.BASE_URL %}/images/fusionexport-server-welcome.png" alt="FusionExport welcome message">

## Linux

In case of Linux you need to install a few dependecies listed below. If you are using Linux distribution which support Debian package manager for example Ubuntu, Debian then choose `DEB`. If you are using RPM based distributions like Red Hat, Centos then choose `RPM`. Now open the terminal and run respective commands:

<div class="code-wrapper">
    <ul class='code-tabs extra-tabs'>
        <li class='active'><a data-toggle='deb'>DEB</a></li>
        <li><a data-toggle='rpm'>RPM</a></li>
    </ul>
    <div class='tab-content extra-tabs'>
        <div class='tab deb-tab active'>
            <pre><code class="language-bash">sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget</code></pre>
        </div>
        <div class='tab rpm-tab'>
            <pre><code class="language-bash">$ yum -y install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc</code></pre>
        </div>
    </div>
</div>

<p class="alert alert-warning mb-1 mt-1">
    <strong>Important Note:</strong> RHEL 8.x and Centos 8.x are not supported. Please use RHEL 7.x or Centos 7.x.
</p>

Once you have installed all the dependencies, go the unzipped FusionExport directory, run the following command:

```shell
$ ./fusionexport
```
<p class="alert alert-warning mb-1 mt-1">
    <strong>Important Note:</strong> Due to security reasons, running FusionExport server as a root is not allowed. Please use non-root account which has sudo privileges.
</p>

By default, the FusionExport Server starts on `localhost`, and listens to port `1337`. If there are no issues, then you will get a similar message as shown below:

<img src="{% site.BASE_URL %}/images/fusionexport-server-welcome.png" alt="FusionExport welcome message">

## Windows

Based on the command-line interface of your choice on Windows machines, go to the unzipped directory of FusionExport, follow the instructions:

<div class="code-wrapper">
    <ul class='code-tabs extra-tabs'>
        <li class='active'><a data-toggle='powershell'>PowerShell</a></li>
        <li><a data-toggle='cli'>Command Prompt</a></li>
    </ul>
    <div class='tab-content extra-tabs'>
        <div class='tab powershell-tab active'>
            <pre><code class="language-bash">$ .\fusionexport.bat</code></pre>
        </div>
        <div class='tab cli-tab'>
            <pre><code class="language-bash">$ start fusionexport.bat</code></pre>
        </div>
    </div>
</div>

By default, the FusionExport Server starts on `localhost`, and listens to port `1337`. If there are no issues, then you will get a similar message as shown below:

<img src="{% site.BASE_URL %}/images/fusionexport-server-welcome.png" alt="FusionExport welcome message">

<p class="alert alert-warning mb-1 mt-1">
    <strong>Imporant Note</strong>: When you download FusionExport for Windows, you will find executables like `fusionexport.exe` and `service.exe`. **Do not** run them by double-clicking on the file icons; instead, execute them using either the Command Prompt or the PowerShell.
</p>

## Docker

Run the following command in the terminal to start the server in docker container:

```Bash
$ docker-compose up
```

The above command will complete all the dependencies missing for FusionExport Server. It will start the server on the `localhost` and listen to port `1337`.

After you have installed FusionCharts Server, install FusionExport Server SDK for your preferred programming language from [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks).
