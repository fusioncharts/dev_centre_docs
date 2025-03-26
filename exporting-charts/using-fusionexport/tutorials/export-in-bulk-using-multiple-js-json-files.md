---
title: Export charts in bulk using multiple JS or JSON files | FusionCharts
description: This article talks about the SDKs used for exporting charts in bulk.
heading: Export charts in bulk using multiple JS or JSON files
---

Multiple JS or JSON files can be supplied to the --chart-config option, for a bulk export. You can give multiple files or directories or a combination of both in a space separated format or even a glob pattern.

The CLI will find the common path for all the files, use that as a reference, and create a similar folder structure that is easily recognizable.

In case of files containing more than one chart config, it will create a folder named after that filename and put all the exported images in it.

To do a bulk export, run the command given below:

```
$ fe -c 'uat/resources/charts/file_1.json uat/resources/charts/file_2.json uat/resources/charts/sub_1/* uat/resources/charts/sub_2/*'
}
```

The above command, when executed, will create a folder structure as follows:

```
fusioncharts_export
	sub_1
    mul_1
		export--4.png
		export--5.png
		export--3.png
	sub_2
	mul_1
		export--6.png
		export--7.png
	export--1.png
	export--2.png
```

## Related Resources

* [Export Charts in Bulk](/exporting-charts/using-fusionexport/tutorials/export-charts-in-bulk)

* [Export the Output Files as a Zip](/exporting-charts/using-fusionexport/tutorials/export-the-output-files-as-zip)

* [Export a Dashboard](/exporting-charts/using-fusionexport/tutorials/export-a-dashboard)

* [Manipulate the Output Filename](/exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename)
