---
permalink: exporting-charts/using-fusionexport/fusionexport-release-notes.html
title: FusionExport Release Notes | FusionCharts
description: List of changes made in recent release.
heading: FusionExport Release Notes
chartPresent: False
---

## v1.0.1

### Improvements

* **Better feedback messages for API endpoints:** No need to get confused by the stack trace of errors when you visit any of the endpoints on FusionExport server. Get 'human-friendly' messages to figure out the next steps

* **The all-new FusionCharts library by default:** FusionExport now runs on the latest version of FusionCharts `v.3.13.3`.

* **Watermark for Trial Versions:** Initially we used to give FusionExport without any restrictions. But not now!

### Fixes

* **No more infinite restarts:** FusionExport used to create infinite instance of itself every-time there was an error. This release makes sure that FusionExport does not go infinity and beyond.

* **Dealing with Incomplete FusionCharts XT Suite:** Although we know FusionCharts XT Suite is incredible. But sometimes people only use few modules of FusionCharts XT Suite. FusionExport used to break in such scenarios. We have fixed it so that you can embrace the minimalistic lifestyle.

* **Be Transparent:** No, we are not talking about culture but transparent PNGs. FusionExport used to crash while exporting with a transparent background. Worry no more!

## v1.0.0

### New Features

* Export image quality control.

* Support MySQL logging.

* WS communication.

* Progress bar support.

### Improvements

* SDKs and CLI can communicate with the same server.

* Template bundling during dashboard export is more smart and simple.

* Easier control over FusionExport Server configuration.

* Better export image quality.

* S3 and FTP configs can now be provided as a file.

* Simple host and port are used instead of a URL.

* Improved output filename manipulation and customization.

* FusionCharts library path can now be changed from FusionExport Server.

* FusionExport Server can now do the job of both FusionExport Desktop and FusionExport Web Service with a simple CLI interface.

### Removals

* FusionExport Desktop.

* FusionExport Web Service.