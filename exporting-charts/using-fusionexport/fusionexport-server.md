---
permalink: exporting-charts/using-fusionexport/fusionexport-server.html
title: FusionExport Server | FusionCharts
description: This article FusionExport Server. It accepts export requests from FusionExport CLI, SDK clients and browsers and provides exported images in return.
heading: FusionExport Server Reference
chartPresent: False
---

FusionExport accepts export requests from FusionExport CLI, SDK clients,  browsers and provides exported images in return.

## Installation

To install the FusionExport Server click [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server).

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

```bash
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

<table>
	<tr>
        <th> Name </th>
        <th> Type </th>
        <th> Defaults </th>
        <th> Description </th>
    </tr>
    <tr>
    	<td> `dialect` </td>
    	<td> string </td>
    	<td> mysql </td>
    	<td> Database type e.g. MySQL, Postgres, SQLite and Microsoft SQL Server </td>
    </tr>
    <tr>
    	<td> `host` </td>
    	<td> string </td>
    	<td> localhost </td>
    	<td> Database host </td>
    </tr>
    <tr>
    	<td> `port` </td>
    	<td> integer </td>
    	<td> 3306 </td>
    	<td> Database Port </td>
    </tr>
    <tr>
    	<td> `database` </td>
    	<td> string </td>
    	<td> fusionexport </td>
    	<td> Database name where export logs would be stored </td>
    </tr>
    <tr>
    	<td> `username` </td>
    	<td> string </td>
    	<td> root </td>
    	<td> Database username </td>
    </tr>
    <tr>
    	<td> `password` </td>
    	<td> string </td>
    	<td> root </td>
    	<td> Database password </td>
    </tr>
    <tr>
    	<td> `logging` </td>
    	<td> boolean </td>
    	<td> false </td>
    	<td> Whether to enable database logging or not for debugging purpose </td>
    </tr>
    <tr>
    	<td> `pool` </td>
    	<td> object </td>
    	<td> {</br>	"max": `5`,</br>	"min": `0`,</br>	"acquire": `30000`,</br>	"idle": `10000`</br>	} </td>
    	<td> Database connection pool configs </td>
    </tr>
</table>

### MessageQueue Configs

Name|Type|Defaults|Description
-|-|-|-
`protocol`|string|amqp|MessageQueue protocol
`hostname`|string|localhost|MessageQueue broker host or IP
`port`|integer|5672|MessageQueue broker port
`username`|string|guest|Broker username
`password`|string|guest|Broker password

## Docker

To run **FusionExport Server** from docker, click [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server#docker-6) for detailed installation setup. Once done, follow the steps given below:

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

```bash
$ docker build -t fusionexport-standalone -f service-standalone.dockerfile
$ docker run -p 1337:8080 fusionexport-standalone|
```

Change the `config.json` file to connect fusionexport-service and custom **MySQL** and **rabbitMQ** server.

## Browser Support

FusionExport Server also supports export from the browser using **Fusioncharts** library. On the same port, it also accepts **http** requests to post logs, to query logs and export requests.

### API Endpoint Reference

<table>
	<tr>
		<th> Name </th>
		<th> Description </th>
	</tr>
	<tr>
		<td> Endpoint </td>
		<td> /api/v1.0/export </td>
	</tr>
	<tr>
		<td>Http Method</td>
		<td>POST</td>
	</tr>
	<tr>
		<td>Description</td>
		<td>Export processing and returns the required files back to the client.</td>
	</tr>
	<tr>
		<td><b>Request Params</b></td>
		<tr>
			<th>Param Name</th>
			<th>Defaults</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>`stream_type`</td>
			<td></td>
			<td>In this case where charts will be rendered and exported.</br></br>`SVG / IMAGE-DATA`</td>
		</tr>
		<tr>
			<td>`stream`</td>
			<td>{}</td>
			<td>In case of **svg**, it contains the svg string.</br></br>In case of **image data**, it contains the base64 string.</td>
		</tr>
		<tr>
			<td>`parameters`</td>
			<td>exportfilename=FusionCharts|</br>exportformat=png|</br>exportactionnew=save</td>
			<td>This contains the output filename, format, and the action to be performed.</td>
		</tr>
		<tr>
			<td>`meta_bgColor`</td>
			<td>#ffffff</td>
			<td>Sets the background color.</td>
		</tr>
		<tr>
			<td>`meta_bgAlpha`</td>
			<td></td>
			<td>Set the transparency(alpha) of the background.</td>
		</tr>
		<tr>
			<td>`meta_DOMId`</td>
			<td></td>
			<td>DOM Id.</td>
		</tr>
		<tr>
			<td>`meta_width`</td>
			<td></td>
			<td>The width of the chart.</td>
		</tr>
		<tr>
			<td>`meta_height`</td>
			<td></td>
			<td>The height of the chart.</td>
		</tr>
		<tr>
			<td>`chart_caption`</td>
			<td></td>
			<td>Caption or title.</td>
		</tr>
		<tr>
			<td>`chart_sub_caption`</td>
			<td></td>
			<td>Sub-caption or subtitle.</td>
		</tr>
		<tr>
			<td>`is_single_export`</td>
			<td></td>
			<td>Whether it is bulk, or a single export.</td>
		</tr>
		<tr>
			<td>`is_full_version`</td>
			<td></td>
			<td>Whether it is a trial, or a paid version.</td>
		</tr>
		<tr>
			<td>`user_time_zone`</td>
			<td></td>
			<td>User timezone.</td>
		</tr>
		<tr>
			<td>`log_enabled`</td>
			<td>true</td>
			<td>Whether logging is enabled.</td>
		</tr>
		<tr>
			<td>`version`</td>
			<td></td>
			<td>Version.</td>
		</tr>
	</tr>
</table>

<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>End point</td>
		<td>/api/v1.0/logs</td>
	</tr>
	<tr>
		<td>Http Method</td>
		<td>POST</td>
	</tr>
	<tr>
		<td>Description</td>
		<td>Saves the logs data into the MySQL database.</td>
	</tr>
	<tr>
		<td><b>Request Params</b></td>
		<tr>
			<th>Param Name</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>`chartType`</td>
			<td></td>
			<td>The type of chart rendered.</td>
		</tr>
		<tr>
			<td>`chartCaption`</td>
			<td></td>
			<td>The primary caption of the chart.</td>
		</tr>
		<tr>
			<td>`chartSubCaption`</td>
			<td></td>
			<td>Sub-caption of the chart.</td>
		</tr>
		<tr>
			<td>`isSingleExport`</td>
			<td></td>
			<td>Boolean `true` will be passed for single chart export and 'false' for batch export.</td>
		</tr>
		<tr>
			<td>`exportFileName`</td>
			<td>FusionCharts</td>
			<td>The name of the physical file.</td>
		</tr>
		<tr>
			<td>`exportFormat`</td>
			<td>png</td>
			<td>Sets the  export format of the file.</td>
		</tr>
		<tr>
			<td>`isFullVersion`</td>
			<td></td>
			<td>This attribute will hold the value true if the product is licensed otherwise false.</td>
		</tr>
		<tr>
			<td>`userTimeZone`</td>
			<td></td>
			<td>Time Zone of the user will be passed through this attribute.</br></br>It is in minutes. i.e (330 for INDIA)</td>
		</tr>
		<tr>
			<td>`userIPAddress`</td>
			<td></td>
			<td>IP Address of the User.</td>
		</tr>
		<tr>
			<td>`exportAction`</td>
			<td></td>
			<td>`exportaction` attribute is used to depict Download & Save behaviour for the export functionality.</td>
		</tr>
		<tr>
			<td>`version`</td>
			<td></td>
			<td>Version</td>
		</tr>
	</tr>
</table>

<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>End Point</td>
		<td>/api/v1.0/logs</td>
	</tr>
	<tr>
		<td>Http Method</td>
		<td>GET</td>
	</tr>
	<tr>
		<td>Description</td>
		<td>Query logs from MySQL database</td>
	</tr>
	<tr>
		<td><b>Query String</b></td>
		<tr>
			<th>Key Name</th>
			<th>Value</th>
			<th>Example</th>
		</tr>
		<tr>
			<td>`sorting`</td>
			<td>&lt;column_name&gt;:{desc/asc},&lt;column_name&gt;:{desc/asc}</td>
			<td>?sorting=chartType:desc,userIpAdress:asc</td>
		</tr>
		<tr>
			<td>`limit`</td>
			<td>&lt;value&gt;</td>
			<td>?limit=40</td>
		</tr>
		<tr>
			<td>`offset`</td>
			<td>&lt;value&gt;</td>
			<td>?offset=43</td>
		</tr>
		<tr>
			<td>`search`</td>
			<td>&lt;column_name&gt;:&lt;value1&gt;,&lt;value2&gt;</td>
			<td>?userIpAdress=894.320.233.231,421.232.545.134</td>
		</tr>
		<td>Response</td>
		<tr>
			<th>Param Name</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>`chartType`</td>
			<td></td>
			<td>The type of chart rendered.</td>
		</tr>
		<tr>
			<td>`chartCaption`</td>
			<td></td>
			<td>Primary caption of the chart.</td>
		</tr>
		<tr>
			<td>`chartSubCaption`</td>
			<td></td>
			<td>Sub caption of the chart.</td>
		</tr>
		<tr>
			<td>`isSingleExport`</td>
			<td></td>
			<td>Boolean `true` will be passed for single chart export and 'false' for batch export.</td>
		</tr>
		<tr>
			<td>`exportFileName`</td>
			<td>FusionCharts</td>
			<td>The name of the physical file.</td>
		</tr>
		<tr>
			<td>`exportFormat`</td>
			<td>png</td>
			<td>The export format of the file.</td>
		</tr>
		<tr>
			<td>`chartOriginUrl`</td>
			<td></td>
			<td>This will contain the url of the origin host where the chart is embedded.</br></br>If from CLI, then origin URL would be "CLI"</td>
		</tr>
		<tr>
			<td>`userAgent`</td>
			<td></td>
			<td>Contains standard browser user agent information for browser identification.</br></br>If from CLI, then userAgent URL would be "CLI".</td>
		</tr>
		<tr>
			<td>`isFullVersion`</td>
			<td></td>
			<td>This attribute will hold the value true if the product is licensed otherwise false.</td>
		</tr>
		<tr>
			<td>`userTimeZone`</td>
			<td></td>
			<td>Time Zone of the user will be passed through this attribute.
</br></br>It is in minutes. i.e (330 for INDIA)</td>
		</tr>
		<tr>
			<td>`userIPAddress`</td>
			<td></td>
			<td>IP Address of the User.</td>
		</tr>
		<tr>
			<td>`userCountry`</td>
			<td></td>
			<td>Country of the user.</td>
		</tr>
		<tr>
			<td>`serverDateTime`</td>
			<td></td>
			<td>Server date time.</td>
		</tr>
		<tr>
			<td>`exportAction`</td>
			<td></td>
			<td>'exportaction' attribute is used to depict `Download` & `Save`behavior for the export functionality.</td>
		</tr>
		<tr>
			<td>`version`</td>
			<td></td>
			<td>Version</td>
		</tr>
	</tr>
</table>
