---
title: FusionExport Server | FusionCharts
description: This article FusionExport Server. It accepts export requests from FusionExport CLI, SDK clients and browsers and provides exported images in return.
heading: FusionExport Server
---

FusionExport server is an HTTP server which accepts data in JSON format to export your charts and data to file format you wish to export. Although, you can directly communicate with the server using endpoints but it is recommended to download one of the [FusionExport SDKs](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks) which will make it easy to implement FusionExport in your infrastructure.

## CLI Options

FusionExport server accepts the following command line arguments to configure the server very easily. Syntax to get or set the options is:

```bash
$ ./fusionexport <option>
```

<p class="alert alert-warning mb-1 mt-1">
    <strong>Important Note:</strong> After v1.2.3 onwards, if you are running FusionExport in Mac you have to run the command as `$ ./fusionexport -- <option>`. Please notice the additional `--` added in the while running.
</p>

| Option                     | Alias | Default     | Description                                                                                          |
| -------------------------- | ----- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `--version`                | `-v`  |             | Returns the current version of FusionExport.                                                         |
| `--help`                   | `-h`  |             | Returns all the available CLI options.                                                               |
| `--host`                   | `-H`  | `127.0.0.1` | Sets the IP address of the server host.                                                              |
| `--port`                   | `-P`  | `1337`      | Sets the port number where you want to run the server.                                               |
| `--worker-count`           | `-W`  | `2`         | Assign maximum number of workers to spawn.                                                           |
| `--timeout`                | `-T`  |             | Assign a timeout in ms. The default value is 3000ms.                                                          |
| `--library-directory-path` | `-L`  |             | Set custom FusionCharts library directory path. Useful while using licensed version of FusionCharts. |
| `--config-file`            | `-C`  |             | Set configuration file path.                                                                         |
| `--ssh-key`                |       |             | Accepts a relative or an absolute path of the private key.              
    |
| `--ssh-certificate`        |       |             | Accepts a relative or an absolute path of the certificate 
    |

### Config File Options

To persist the config every time you start the server or for getting access to more special options or you can pass a config file through the `--config-file` or `-C` option of the CLI. It should be a JSON file having the following properties.

| Option                 | Default   | Description                                                                                      |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `host`                 | 127.0.0.1 | IP address of the server host.                                                                   |
| `port`                 | 1337      | Port number where you want to run the server.                                                    |
| `workerCount`          | 2         | Maximum number of workers to spawn.                                                              |
| `timeout`              | 3000      | Assign a timeout in ms.                                                                          |
| `libraryDirectoryPath` |           | Custom FusionCharts library directory path. Useful while using licensed version of FusionCharts. |

## Docker Config

To run FusionExport server from Docker, click [here](/exporting-charts/using-fusionexport/installation/install-fusionexport-server#docker-6) for detailed installation setup. Docker takes the following config in it's `.env` file.

| Option               | Default         | Description                                  |
| -------------------- | --------------- | -------------------------------------------- |
| `SERVICE_PORT`       | 1337            | Port number where you want to run the server |
| `DATA_SAVE_PATH (1)` | ~/.fusionexport | Storage path for saving the exported images  |
| `TIMEOUT`            | 3000 ms         |Assign a timeout in ms                        |   

## HTTP Endpoints

### /api/v2.0/export

Required for supporting the latest export features of FusionExport.

-  HTTP Method: `POST`

| Param Name              | Default                                | Description                                                                                                           |
| ----------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `chartConfig`           |                                        | Array of chart configs to export. These chart configurations are similar to FusionCharts Chart attributes.            |
| `type`                  | png                                    | Output file type. Accepts either png, jpg, pdf, svg, csv or html.                                                     |
| `quality`               | better                                 | Output file quality (good / better / best)                                                                            |
| `outputFile`            | export--<%= number(1) %>               | Output filename                                                                                                       |
| `payload`               |                                        | The zipped dependency files which could include resources like HTML templates, images, CSS etc.                       |
| `templateFilePath`      | template/template.html                 | Template file path inside the payload zip.                                                                            |
| `callbackFilePath`      | callbackFile.js                        | Callback file path inside the payload zip. This file will be executed upon successful execution of the export action. |
| `outputFileDefinition`  |                                        | Output file definition file inside the payload zip.                                                                   |
| `dashboardHeading`      | FusionCharts                           | Dashboard heading text.                                                                                               |
| `dashboardSubheading`   | The best charting library in the world | Dashboard subheading text.                                                                                            |
| `dashboardLogo`         | dashboardLogo.jpg                      | Dashboard logo file inside the payload zip.                                                                           |
| `inputSVG`              | inputSVG.svg                           | SVG file path inside the payload zip.                                                                                 |
| `asyncCapture`          | false                                  | Set the async capture flag.                                                                                           |
| `maxWaitForCaptureExit` | 6000                                   | Timeout in ms for async capture to trigger.                                                                           |


### Add HTTP for Windows Service 

If you are looking to serve fusion export in https mode from window service please follow the steps below:

* Stop fusion export window service and open windows registry

* Go to the location computer\HKEY_LOCAL_MACHINE\SOFTWARE\Fusion charts technologies LLP/FusionExport Window service

* Set the ssh key and ssh certificate value of Fusion export using which the FusionExport server will run.

* To provide HTTPS support, you need to configure a private key and certificate in case of both self-signed and certificate.


#### Windows, Linux & Mac

* We will be exposing two command-line arguments to support HTTPS:
`--ssh-key`: Will accept a relative or absolute path of the private key
`--ssh-certificate`: Will accept a relative or absolute path of the certificate

* Configurations could be provided via a JSON file as well using `-C` or `--config-file` option. We will be providing a new attribute called `ssh` which will accept `key` and `certificate` where absolute or relative file path for private key and certificate will be provided.

#### Docker

* In the case of Docker, `docker-composer.yml` file will accept a new property called `ssh` which will accept the path of the private key and certificate.
 Location: fusionexport-docker/service/config.json  

* Upon successful implementation, the user should be able to run the server on HTTPS.


