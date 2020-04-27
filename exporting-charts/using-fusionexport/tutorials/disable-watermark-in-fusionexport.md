---
title: Remove watermark from exported files | FusionCharts
description: This article tells how to disable watermarks while exporting the chart in fusionexport.
heading: Remove FusionCharts and FusionExport watermark from your exported files
---

The exported chart using FusionExport consists of two types of watermark:

1. FusionCharts Trial Mark
2. FusionExport Trial Mark

![Water Mark](/images/export-chart-with-watermark.png)

> **Note**: The exported chart consists of watermarks only if you are not using the licensed version of FusionExport and FusionCharts.

The most important step to remove both the watermark is to purchase the licensed versions of both FusionExport and FusionCharts. You can contact our [sales team](mailto:sales@fusioncharts.com) or go to our [pricing page](https://www.fusioncharts.com/buy) to download the licensed packages of FusionExport and FusionCharts.

Before you start with the code implementations to remove the trial marks, check out the following video which contains the step by step process to remove the trails marks in FusionExport.

<div style="position: relative; padding-bottom: 62.5%; height: 0;">
    <iframe src="https://www.loom.com/embed/527a63befb2f46dd9b296ae6d6dc6b1b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


Now, let’s check out the basic steps to remove the watermarks from your exported chart.

## Remove FusionExport watermark

It is the most straightforward step to remove the watermark. Once you have purchased the license of FusionExport, run the licensed package and export; FusionExport watermark will go away.

The exported chart without the FusionExport trail mark looks like, as shown below:

![FusionExport Water Mark removed](/images/export-chart-without-export-watermark.png)

## Remove FusionCharts trial mark

To remove the FusionCharts trial mark, you have to purchase the license of FusionCharts and tell FusionExport that you have the license. To do that, you have to override the default package version of **FusionCharts** in **FusionExport** with your licensed version by passing `-L` option of FusionExport. Here are the steps:

1. Copy all the files in the `js` folder of your licensed distribution.
2. Place all the files present inside the `js` folder in a folder named `fusioncharts` beside your `fusionexport` file.

To run licensed FusionExport with licensed FusionCharts run:

```bash
./fusionexport -L fusioncharts/
```

After removing the watermarks, the chart looks like:

![No Water Mark](/images/export-chart-without-watermark.png)

## Remove trial mark in Docker

To remove the FusionExport watermark, all you have to do is run the licensed Docker package of FusionExport, which you have purchased. However, to remove FusionCharts watermark, get the location path where you have the licensed FusionCharts folder. Go to `fusionexport-docker` package that you downloaded from our website. Open `fusionexport-docker/docker-composer.yml` and add an entry in the `volume` section:

```
fusionexport:
    build:
      context: ./service
    volumes:
      - ${DATA_SAVE_PATH}/exported_images:/app/exported_images
      - /Downloads/fusioncharts-suite/js:/app/fusioncharts
    ports:
      - "${SERVICE_PORT}:1337"

```

As you can see above, in our local system, licensed FusionCharts library is present in `/Downloads/fusioncharts-suite/js.` In your case, use the respective location. The same folder is mounted in `/app/fusioncharts` inside the Docker container. You can choose any location you want.

Now open the `config.json` file inside the `fusionexport-docker/service/config.json` and change the `libraryDirectoryPath`  value to `/app/fusioncharts`.

```json
{
  "server": {
    "host": "0.0.0.0",
    "port": 1337,
    "logEnabled": true,
    "allowSave": true,
    "savePath": "exported_images",
    "workerCount": 2,
    "libraryDirectoryPath": "/app/fusioncharts"
  }
}
```

That is it. Now restart Docker by running the following command, and you are done.

```bash
docker-compose build && docker-compose up
```

## Remove trial mark in Windows Service

To remove the FusionExport watermark, all you have to do is run the licensed Windows Service of FusionExport, which you have purchased and run it. To remove FusionCharts watermark, follow these steps:

1. Stop FusionExport Windows Service and open windows registry.
2. Go to the location `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\FusionCharts Technologies LLP\FusionExport Windows Service.`
3. Set the licensed version of FusionCharts JS files in the `FCLibraryPath` key.
4. Close the registry editor and start FusionExport Service

![FusionExport watermark removal](/images/fusionexport-windows-service-no-watermark.png)

I hope this tutorial was helpful for you to remove the trial mark. If you need any help, feel free to reach out to our [support team](mailto:support@fusioncharts.com) or share your feedback below.
