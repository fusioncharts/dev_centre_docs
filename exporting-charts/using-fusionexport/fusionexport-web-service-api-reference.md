---
permalink: exporting-charts/using-fusionexport/fusionexport-web-service-api-reference.html
title: Web Service API Reference | FusionCharts
description: List of FusionExport web service API references
heading: Web Service API Reference
chartPresent: False
---

FusionExport Web Service fires an HTTP server to export images and data. The web service then listens to the HTTP requests sent with the required data and returns the exported chart image, data or dashboard image. FusionExport Web Service can handle requests from FusionExport CLI as well as browsers (FusionCharts library). It also allows you to save the logging statistics for each export.

## Installation

Please follow the installation guide <a href="/exporting-charts/using-fusionexport/installation/install-fusionexport-web-service.html">here</a>.

## API Endpoint Reference

Name | Description
--- | ---
Endpoint | <a href="http://export.api3.fusioncharts.com/api/v1.0/export">/api/v1.0/export</a>
Http Method | POST
Description | Does the export processing and returns the required files back to the client

### Request Params

<table>
  <tr>
    <th>Param Name</th>
    <th>Defaults</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`stream_type`</td>
    <td></td>
    <td>In this case the charts will be rendered and exported.
    CHART-DATA / SVG / IMAGE-DATA</td>
  </tr>
  <tr>
  	<td>`stream`</td>
  	<td>{}</td>
  	<td>In case of __SVG__, it will contain the SVG string.
  	In case of __image data__, it will contain the base64 string.
  	In case of __chart data__, it may contain a JS or JSON stream containing an array of objects.</td>
  </tr>
  <tr>
  	<td>`files`</td>
  	<td>files.zip</td>
  	<td>Template, callback, and resource files sent as zip.
  	__Example:__
  	resources/
├── images/
│ ├── owl.jpg
│ ├── meow.png
├── stylesheets/
│ ├── bootstrap.css
│ └── bootstrap.min.css
├── javascripts/
│ ├── bootstrap.js
│ └── bootstrap.min.js
├── fonts/
│ ├── glyphicons-halflings-regular.eot
│ └── glyphicons-halflings-regular.woff
├── template.html
└── callbacks.js
</td>
  </tr>
  <tr>
  	<td>`parameters`</td>
  	<td>exportfilename=FusionCharts
  	exportformat=png
  	exportactionnew=save</td>
  	<td>This will contain the output filename, format, and the action to be performed.</td>
  </tr>
  <tr>
  	<td>`meta_bgColor`</td>
  	<td>#FFFFFF</td>
  	<td>Background color to be used</td>
  </tr>
  <tr>
  	<td>`meta_bgAlpha`</td>
  	<td></td>
  	<td>Alpha value for the background</td>
  </tr>
  <tr>
  	<td>`meta_DOMId`</td>
  	<td></td>
  	<td>DOM Id</td>
  </tr>
  <tr>
  	<td>`meta_width`</td>
  	<td></td>
  	<td>Width of the chart</td>
  </tr>
  <tr>
  	<td>`meta_height`</td>
  	<td></td>
  	<td>Height of the chart</td>
  </tr>
  <tr>
  	<td>`chart_caption`</td>
  	<td></td>
  	<td>Caption or title</td>
  </tr>
  <tr>
  	<td>`chart_sub_caption`</td>
  	<td></td>
  	<td>Sub caption or subtitle</td>
  </tr>
  <tr>
  	<td>`async_capture`</td>
  	<td>false</td>
  	<td>Enables async capture</td>
  </tr>
  <tr>
  	<td>`dashboard_heading`</td>
  	<td></td>
  	<td>Dashboard heading</td>
  </tr>
  <tr>
  	<td>`dashboard_subheading`</td>
  	<td></td>
  	<td>Dashboard subheading</td>
  </tr>
  <tr>
  	<td>`is_single_export`</td>
  	<td></td>
  	<td>Whether it is bulk, or a single export</td>
  </tr>
  <tr>
  	<td>`is_full_version`</td>
  	<td></td>
  	<td>Whether it is a trial, or a paid version</td>
  </tr>
  <tr>
  	<td>`user_time_zone`</td>
  	<td></td>
  	<td>User timezone</td>
  </tr>
  <tr>
  	<td>`log_enabled`</td>
  	<td>true</td>
  	<td>Whether logging is enabled</td>
  </tr>
  <tr>
  	<td>`version`</td>
  	<td></td>
  	<td>Version</td>
  </tr>
</table>

Name | Description
--- | ---
Endpoint | <a href="http://export.api3.fusioncharts.com/api/v1.0/logs">/api/v1.0/logs</a>
Http Method | POST
Description | Saves the logs data into the MySQL database

### Request Params

<table>
  <tr>
    <th>Param Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`</td>
    <td></td>
    <td>The type of chart rendered</td>
  </tr>
  <tr>
    <td>`chartCaption`</td>
    <td></td>
    <td>Primary caption of the chart</td>
  </tr>
  <tr>
    <td>`chartSubCaption`</td>
    <td></td>
    <td>Sub caption of the chart</td>
  </tr>
  <tr>
    <td>`isSingleExport`</td>
    <td></td>
    <td>Boolean `true` will be passed for single chart export and `false` for batch export</td>
  </tr>
  <tr>
    <td>`exportFileName`</td>
    <td>FusionCharts</td>
    <td>The name of the physical file</td>
  </tr>
  <tr>
    <td>`exportFormat`</td>
    <td>png</td>
    <td>The export format of the file</td>
  </tr>
  <tr>
    <td>`isFullVersion`</td>
    <td></td>
    <td>This attribute will hold the value `true` if the product is licensed, otherwise `false`</td>
  </tr>
  <tr>
    <td>`userTimeZone`</td>
    <td></td>
    <td>Time Zone of the user will be passed through this attribute.
    It is in minutes, i.e. 330 for INDIA.</td>
  </tr>
  <tr>
    <td>`userIPAddress`</td>
    <td></td>
    <td>IP address of the user</td>
  </tr>
  <tr>
    <td>`exportAction`</td>
    <td></td>
    <td>It is used to depict download and save behavior for the export functionality</td>
  </tr>
  <tr>
    <td>`version`</td>
    <td></td>
    <td>Version</td>
  </tr>
</table>


<table>
  <tr>
    <th>Endpoint</th>
    <th>Http Method</th>
    <th>Query String</th>
  </tr>
  <tr>
    <td><a href="http://export.api3.fusioncharts.com/api/v1.0/logs">/api/v1.0/logs</a></td>
    <td>GET</td>
    <td><ul>
	<li><strong>Key Name:</strong> sorting
	<br><strong>Value:</strong> &lt;column_name&gt;:{desc/asc},&lt;column_name&gt;:{desc/asc}
	<br><strong>Example:</strong> ?sorting=chartType:desc,userIpAdress:asc</li>
	<li><strong>Key Name:</strong> limit
	<br><strong>Value:</strong> &lt;value&gt;
	<br><strong>Example:</strong> ?limit=40</li>
	<li><strong>Key Name:</strong> offset
	<br><strong>Value:</strong> &lt;value&gt;
	<br><strong>Example:</strong> ?offset=43</li>
	<li><strong>Key Name:</strong> search
	<br><strong>Value:</strong> &lt;column_name&gt;:&lt;value1&gt;,&lt;value2&gt;
	<br><strong>Example:</strong> ?userIpAdress=894.320.233.231,421.232.545.134</li>
</ul></td>
  </tr>
</table>

### Response

<table>
  <tr>
    <th>Param Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`</td>
    <td></td>
    <td>The type of chart rendered</td>
  </tr>
  <tr>
    <td>`chartCaption`</td>
    <td></td>
    <td>Primary caption of the chart</td>
  </tr>
  <tr>
    <td>`chartSubCaption`</td>
    <td></td>
    <td>Sub caption of the chart</td>
  </tr>
  <tr>
    <td>`isSingleExport`</td>
    <td></td>
    <td>Boolean `true` will be passed for single chart export and `false` for batch export.</td>
  </tr>
  <tr>
    <td>`exportFileName`</td>
    <td>FusionCharts</td>
    <td>The name of the physical file</td>
  </tr>
  <tr>
    <td>`exportFormat`</td>
    <td>png</td>
    <td>The export format of the file</td>
  </tr>
  <tr>
    <td>`chartOriginUrl`</td>
    <td></td>
    <td>This will contain the URL of the origin host where the chart is embedded.
    If from CLI, then origin URL would be `CLI`</td>
  </tr>
  <tr>
    <td>`userAgent`</td>
    <td></td>
    <td>Contains standard browser user agent information for browser identification</td>
  </tr>
  <tr>
    <td>`isFullVersion`</td>
    <td></td>
    <td>This attribute will hold the value `true` if the product is licensed otherwise `false`</td>
  </tr>
  <tr>
    <td>`userTimeZone`</td>
    <td></td>
    <td>Time Zone of the user will be passed through this attribute.
    It is in minutes, i.e. 330 for INDIA.</td>
  </tr>
  <tr>
    <td>`userIPAddress`</td>
    <td></td>
    <td>IP address of the user</td>
  </tr>
  <tr>
    <td>`userCountry`</td>
    <td></td>
    <td>Country of the user</td>
  </tr>
  <tr>
    <td>`serverDateTime`</td>
    <td></td>
    <td>Server date time</td>
  </tr>
  <tr>
    <td>`exportAction`</td>
    <td></td>
    <td>It is used to depict Download and Save behavior for the export functionality</td>
  </tr>
  <tr>
    <td>`version`</td>
    <td></td>
    <td>Version</td>
  </tr>
</table>

After installation, you can continue customizing the service as per your requirements. The detailed information regarding all supported configurations is listed below.

## Docker Configuration

Docker configuration can be changed from __.env__ file.

Attribute | Description
--- | ---
`APP_PORT` | Port number where the application should be listening
`DATA_SAVE_PATH` | Path where the MySQL data will be stored
`EXPORT_FILE_SAVE_PATH` | Path where the exported files will be stored

<p class="text-info">If you change any of the configuration for MySQL and RabbitMQ here, it should be reflected in the application configuration as well.</p>

## Application Configuration
Default filename: __configs/fusioncharts.exporter.json__

Attribute | Type | Description
--- | --- | ---
`allow_save` | bool | Whether to allow saving of the exported files in server or not
`save_path` | string | Path to save the exported files
`log_enabled` | bool | Whether to enable logging or not
`worker_count` | integer | Number of workers to spawn

## Database Configuration
Default filename: __config/dbconfig.json__

Attribute | Type | Description
--- | --- | ---
`username` | string | Username for connecting to MySQL
`password` | string | Password for connecting to MySQL
`database` | string | Database for connecting to MySQL
`host` | string | Hostname where MySQL is running
`port` | integer | Port where MySQL is running

`development` config is used by default, `production` can be used if __NODE_ENV__ is set to production.

## Log (RabbitMQ) Configuration
Default filename: __rabbit.json__

Attribute | Type | Description
--- | --- | ---
`username` | string | Username for connecting to rabbitmq
`password` | string | Password for connecting to rabbitmq
`hostname` | string | Hostname where rabbitmq is running
`port` | integer | Port where rabbitmq is running

## Worker Pool Manager
Default filename: __workerpoolmanager.json__

Attribute | Type | Description
--- | --- | ---
`workerType` | string | Whether to use phantom or chrome
`minimumWorkerCount` | integer | Number of minimum workers to spawn initially