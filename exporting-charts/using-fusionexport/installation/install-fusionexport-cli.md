---
title: Install FusionExport CLI | FusionCharts
description: Unlock the power of FusionExport CLI, a command line interface for seamless communication with the FusionExport Server across different operating systems.
heading: Install FusionExport CLI
---

The FusionExport Command Line Interface (CLI) is a tool for directly communicating with the [FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server) from the command line/shell of various operating systems. While this tool enhances **interactivity**, it is primarily suitable for **ad-hoc** work. We suggest using the [FusionExport Server SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks) for automating chart exports.

## Prerequisites

To enable the FusionExport CLI, please ensure that the following components are installed:

* `Node.js` (version >= 8.0.0)

* `NPM` (version >= 5.0.0) 

Download the components from [here](https://nodejs.org/en/download/).

## Install FusionExport CLI

1. Depending on the operating system, open either terminal (for Mac/Linux) or command prompt (Windows).

2. Run the following command to install the FusionExport CLI:

```Bash
$ npm i -g fusionexport-cli
```

We recommend global installation to facilitate using the tool from any directory on your system.

3. Verify whether FusionExport CLI has been properly installed or not:

```Bash
$ fusionexport --help
```

> Before using FusionExport CLI, ensure that [FusionExport Server](/dev/exporting-charts/using-fusionexport/installation/install-fusionexport-server) is running.

## Next Steps

You can start exploring the tutorials on how to export charts:

* [Export Chart as Image](/exporting-charts/using-fusionexport/tutorials/export-chart-as-image)

* [Change the Export Type](/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

* [Change the Export Quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)
