---
permalink: exporting-charts/using-fusionexport/installation/install-fusionexport-web-service.html
title: Install FusionExport Web Service| FusionCharts
description: This article focuses on how you can install the FusionExport web service with and without using Docker.
heading: Install FusionExport Web Service
chartPresent: False
---

FusionExport web service exposes export service over HTTP invocations. In case of remote export requirements, both the FusionExport CLI module and the FusionCharts client library take help of this module to get the export done.

Web Service internally uses the FusionExport core module to generate the required images and data.

## Downloading the FusionExport Web Service

<p>You can download the archive of this application from <a class="downloadLinks" target="_blank" href="https://fusionexport.fusioncharts.com/download/fusionexport/fusionexport-webservice-latest.tar.gz" download="">here</a>.</p>

## Installing the FusionExport WebService Using Docker

### Prerequisites

Before you start, ensure that you have __Docker__ installed on your server. The application will be deployed inside a Docker container.

You can install Docker from [here](https://www.docker.com/).

### Installation

* From the command prompt/terminal, navigate to the location where you have downloaded the archive of the application and want to save the FusionExport web service.
* Run the commands given below:

```javascript
$ tar -xvzf fusionexport-webservice-latest.tar.gz && cd fusionexport-webservice-latest
$ docker-compose up -d
```

This will start the server on port `8080`.

## Installing the FusionExport Web Service without Using Docker

### Prerequisites

When installing without using Docker, ensure that the following elements are installed on your server, to enable the FusionExport web service:

* __Node.js__: Ensure that Node.js is installed on your system because the FusionExport web service is based on Node.js. Click [here](https://www.nodejs.org/) for more information on installing node.js.
* __MySQL__: If you want to enable logging, you will need MySQL to store the logs. Click [here](https://www.mysql.com/) for more information on installing MySQL.
* __RabbitMQ__: If you want to enable logging, you will need RabbitMQ to queue and process the logs. Click [here](https://www.rabbitmq.com/) for more information on installing RabbitMQ.

### Installation

* From the command prompt/terminal, navigate to the location where you have downloaded the archive of the application and want to save the FusionExport web service.
* Run the commands given below:

```javascript
$ tar -xvzf fusionexport-webservice-latest.tar.gz && cd fusionexport-webservice-latest && npm install
$ npm start
```

This will start the server on port 3000.

* To change the port, just pass the new port number in the PORT env variable, as shown below:
```javascript
$ PORT=8080 npm start
```

* To start the log listener, run the following command:
```javascript
$ npm run log:listen
```

Click <a href="/exporting-charts/using-fusionexport/fusionexport-web-service-api-reference.html">here</a> for more information on the configuration and API for the FusionExport web service.

Once you are done with the installation, to use FusionExport Web Service you also need to install the <a href="/exporting-charts/using-fusionexport/installation/install-fusionexport-cli.html">CLI</a>.
