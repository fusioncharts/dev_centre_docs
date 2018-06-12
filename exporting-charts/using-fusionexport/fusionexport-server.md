---
permalink: exporting-charts/using-fusionexport/fusionexport-server.html
title: FusionExport Server | FusionCharts
description: This article FusionExport Server. It accepts export requests from FusionExport CLI, SDK clients and browsers and provides exported images in return.
heading: FusionExport Server
chartPresent: False
---

FusionExport accepts export requests from FusionExport CLI, SDK clients,  browsers and provides exported images in return.

## Installation

To install the FusionExport Server click [here]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server '@@open-newtab').

## CLI Options

The available FusionExport CLI options are:

Options|Alias|Defaults|Description
-|-|-|-
`--host`|-H|127.0.0.1|Service host or IP
`--port`|-P|1337|Service Port
`--worker-count`|-W|5|Maximum number of chrome worker to be spawned in export pool
`--config-flle`|-C|null|Service config file path

## Server Config File

To get more control on FusionExport Server, pass the config file in JSON format. E.g. integrating with MySQL server for logging.

```
$ ./fusionexport -C <config file path>
```

The default config file looks like as follows :

```json
{
    "server": {
        "host": "127.0.0.1",
        "port": 1337,
        "workerCount": 5,
        "logEnabled": false,
        "allowSave": true,
        "savePath": "exported_images",
        "libraryDirectoryPath": null
    },
    "database": {
        "dialect": "mysql",
        "host": "localhost",
        "port": 3306,
        "database": "fusionexport",
        "username": "root",
        "password": "root",
        "logging": false,
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "messageQueue": {
        "protocol": "amqp",
        "hostname": "localhost",
        "port": 5672,
        "username": "guest",
        "password": "guest",
        "locale": "en_US",
        "frameMax": 0,
        "channelMax": 0,
        "heartbeat": 0,
        "vhost": "/"
    }
}
```

When `logEnabled` config is set to `true`, make sure MySQL database and `RabbitMQ` broker is running.

## Config File Reference

### Server Configs

Name|Type|Defaults|Description
-|-|-|-
`host`|string|127.0.0.1|Service host or IP
`port`|integer|1337|Service Port
`logEnabled`|boolean|false|Whether to enable logging or not
`allowSave`|boolean|true|Whether to allow saving of the exported files in server or not
`savePath`|string|exported_images|Path to save the exported files
`workerCount`|integer|5|Number of workers to spawn
`libraryDirectoryPath`|string|null|FusionCharts library path

### Database Configs

Name|Type|Defaults|Description
-|-|-|-
`dialect`|string|mysql|Database type e.g. MySQL, Postgres, SQLite and Microsoft SQL Server
`host`|string|localhost|Database host
`port`|integer|3306|Database Port
`database`|string|fusionexport|Database name where export logs would be stored
`username`|string|root|Database username
`password`|string|root|Database password
`logging`|boolean|false|Whether to enable database logging or not for debugging purpose
`pool`|object|{
    "max": 5,
    "min": 0,
    "acquire": 30000,
    "idle": 10000
  }|Database connection pool configs

### MessageQueue Configs

Name|Type|Defaults|Description
-|-|-|-
`protocol`|string|amqp|MessageQueue protocol
`hostname`|string|localhost|MessageQueue broker host or IP
`port`|integer|5672|MessageQueue broker port
`username`|string|guest|Broker username
`password`|string|guest|Broker password

## Docker

To run **FusionExport Server** from docker, click [here]({% site.baseurl %}/exporting-charts/using-fusionexport/installation/install-fusionexport-server#docker-6 '@@open-newtab') for detailed installation setup. Once done, follow the steps given below:

### Docker Container Configs

Start the Docker Compose tool. The following containers are initialized to start the tool:

* Service

* MySQL

* RabbitMQ

The above containers are managed from the configurations specified in `.env` file.

### Service Container

Name|Defaults|Descriptions
-|-|-
`SERVICE_PORT`|8080|Port number where the service should be listening on
`DATA_SAVE_PATH`|~/.fusionexport|Storage path on host machines
`STATS_LOG`|1|Whether to allow statistics info upload

### MySQL Container

Name|Defaults|Descriptions
-|-|-
`MYSQL_DATABASE`|fusionexport|Database name where export logs would be stored
`MYSQL_USER`|default|MySQL username in docker container
`MYSQL_PASSWORD`|secret|MySQL password for ${MYSQL_USER} user
`MYSQL_ROOT_PASSWORD`|root|MySQL password for root user
`MYSQL_PORT`|3306|MySQL server port

### RabbitMQ Container

Name|Defaults|Descriptions
-|-|-
`RABBITMQ_NODE_HOST_PORT`|5672|RabbitMQ port
`RABBITMQ_MANAGEMENT_HTTP_HOST_PORT`|15672|RabbitMQ Management port for http protocol
`RABBITMQ_MANAGEMENT_HTTPS_HOST_PORT`|15671|RabbitMQ Management port for https protocol
`RABBITMQ_DEFAULT_USER`|guest|RabbitMQ user in docker
`RABBITMQ_DEFAULT_PASS`|guest|RabbitMQ password for ${RABBITMQ_DEFAULT_USER} user in docker

### Standalone Container

To start the **FusionExport Server** in a standalone container, from the `service` folder run the following command:

```
$ docker build -t fusionexport-standalone -f service-standalone.dockerfile
$ docker run -p 1337:8080 fusionexport-standalone|
```

Change the `config.json` file to connect fusionexport-service and custom **MySQL** and **rabbitMQ** server.

## Browser Support

FusionExport Server also supports export from the browser using **Fusioncharts** library. On the same port, it also accepts **http** requests to post logs, to query logs and export requests.

### API Endpoint Reference

Name|Description
-|-
Endpoint|/api/v1.0/export
Http Method|POST
Description|Export processing and returns the required files back to the client.
Request Params|
Param Name
Defaults
Description
`stream_type`

In this case where charts will be rendered and exported.
CHART-DATA / SVG / IMAGE-DATA
`stream`
{}
In case of svg, it contains the svg string.
In case of image data, it contains the base64 string.
In case of chart data, it may contain a JS or JSON stream containing an array of objects.
`files`
files.zip
Template, callback, and resource files sent as zip.
Example:
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

`parameters`
exportfilename=FusionCharts|exportformat=png|exportactionnew=save
This contains the output filename, format, and the action to be performed.
`meta_bgColor`
#FFF
Sets the background color.
`meta_bgAlpha`

Set the transparency(alpha) of the background.
`meta_DOMId`

DOM Id.
`meta_width`

The width of the chart.
`meta_height`

The height of the chart.
`chart_caption`

Caption or title.
`chart_sub_caption`

Sub-caption or subtitle.
`async_capture`
false
Enables async capture.
`dashboard_heading`

Dashboard heading.
`dashboard_subheading`

Dashboard subheading.
`is_single_export`

Whether it is bulk, or a single export.
`is_full_version`

Whether it is a trial, or a paid version.
`user_time_zone`

User timezone.
`log_enabled`
true
Whether logging is enabled.
`version`

Version.
|




Name|Description|
-|-
End point|/api/v1.0/logs|
Http Method|POST|
Description|Saves the logs data into the MySQL database.|
Request Params|
Param Name
Default
Description
`chartType`

The type of chart rendered.
`chartCaption`

The primary caption of the chart.
`chartSubCaption`

Sub-caption of the chart.
`isSingleExport`

Boolean `true` will be passed for single chart export and 'false' for batch export.
`exportFileName`
FusionCharts
The name of the physical file.
`exportFormat`
png
Sets the  export format of the file.
`isFullVersion`

This attribute will hold the value true if the product is licensed otherwise false.
`userTimeZone`

Time Zone of the user will be passed through this attribute.
It is in minutes. i.e (330 for INDIA)
`userIPAddress`

IP Address of the User.
`exportAction`

`exportaction` attribute is used to depict Download & Save behaviour for the export functionality.
`version`

Version.
|




Name|Description|
-|-
End Point|/api/v1.0/logs|
Http Method|GET|
Description|Query logs from MySQL database|
Query String|
Key Name
Value
Example
`sorting`
<column_name>:{desc/asc},<column_name>:{desc/asc}
 ?sorting=chartType:desc,userIpAdress:asc
`limit`
<value>
?limit=40
`offset`
<value>
?offset=43
`search`
<column_name>:<value1>,<value2>
?userIpAdress=894.320.233.231,421.232.545.134
|
Response|
Param Name
Default
Description
`chartType`

The type of chart rendered.
`chartCaption`

Primary caption of the chart.
`chartSubCaption`

Sub caption of the chart.
`isSingleExport`

Boolean `true` will be passed for single chart export and 'false' for batch export.
`exportFileName`
FusionCharts
The name of the physical file.
`exportFormat`
png
The export format of the file.
`chartOriginUrl`

This will contain the url of the origin host where the chart is embedded.
If from CLI, then origin URL would be "CLI"
`userAgent`

Contains standard browser user agent information for browser identification.
If from CLI, then userAgent URL would be "CLI".
`isFullVersion`

This attribute will hold the value true if the product is licensed otherwise false.
`userTimeZone`

Time Zone of the user will be passed through this attribute.
It is in minutes. i.e (330 for INDIA)
`userIPAddress`

IP Address of the User.
`userCountry`

Country of the user.
`serverDateTime`

Server date time.
`exportAction`

'exportaction' attribute is used to depict `Download` & `Save`behavior for the export functionality.
`version`

Version.
|