---
permalink: exporting-charts/using-fusionexport/tutorials/manipulate-the-output-filename.html
title: Manipulate the output filename | FusionCharts
description: This article talks about the SDKs used for manipulating the output filename.
heading: Manipulate the output filename
chartPresent: False
---

Output filenames can be dynamically generated using the  `--output-file-definition`  option. This option takes a JavaScript file as an input, which can contain multiple function definitions, as shown below:

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        module.exports = {
  captionIndexStr: (chartConfig, index, chartConfigList) => {
    const caption = chartConfig.dataSource.chart.caption;
    return `${caption}__${index}`;
  }
};
        ```
    </div>
</div>

The `captionIndexStr` function  receives three parameters from the FusionExport CLI system that can be used to generate filenames dynamically. The return value of the function will be used as the name of the output file.
`--output-file-definition` option also accepts array inputs that will be iterated to create the filenames dynamically.

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        module.exports = {
  dates: [
    '17-11-2017_fc_1',
    '17-11-2017_fc_2',
    '17-11-2017_fc_3',
    '17-11-2017_fc_4'
  ]
};
        ```
    </div>
</div>


FusionExport CLI provides two system-defined functions that can be used to generate the filenames dynamically. 

* `number(start, end, step)`: Increments a number from start to end with the `step (interval)` as mentioned. Note that `end` and `step` are optional parameters.
* `timestamp()`: Provides the current time in milliseconds

To create the final output filename, the `--output-file` option should be used. This option accepts the filename template string as shown below:

<p class="text-info">The output filename template string uses the EJS templating engine.</p>

<ul class="code-tabs">
    <li class="active"><a data-toggle="cli">CLI</a></li>
</ul>

<div class="tab-content">
    <div class="tab cli-tab active">
```javascript
        path/to/export--<%= number(1, 100) %>
output filename: path/to/export--1.png

path/to/export--<%= captionIndexStr() %>-<%= timestamp() %>
output filename: path/to/export--Some Caption__1-23423438788.png

path/to/export--<%= dates %>
output filename: path/to/export--17-11-2017_fc_1.png
        ```
    </div>
</div>