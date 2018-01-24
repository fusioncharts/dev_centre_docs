---
permalink: exporting-charts/using-fusionexport/sdk-api-reference/golang.html
title: Golang | FusionCharts
description: Export from your desktop and web server using Golang SDKs. A complete list of API reference.
heading: Type ExportManager
chartPresent: False
---

**ExportManager** acts as a client, sending the export chart configuration to the **ExportServer** and delivering the exported charts through the attached listeners.

```javascript
type ExportManager struct {
    Host string
    Port int
}
```

### Methods

**func NewExportManager () ExportManager**
It constructs an ExportManager with the default export server's IP address and port and returns it.

**func (em *ExportManager) setConnectionConfig (host string, port int)**
It sets export server's IP address and port.

**func (em *ExportManager) Export (exportConfig ExportConfig, exportDone func([]OutFileBag, error), exportStateChanged func(ExportEvent)) (Exporter, error)**

It exports charts with the specified configurations, **ExportDone** listener and **ExportStateChanged** listener, and returns an **Exporter** instance.

## type ExportEvent

ExportEvent is passed to the **ExportStateChanged** listener on each state change. Refer to the code below:

```go
type ExportEvent struct {
    Reporter string 
    Weight int 
    CustomMsg string 
    Uuid string 
}
```

## type OutFileBag

OutFileBag is passed to the **ExportDone** listener. Refer to the code below:

```go
type OutFileBag struct {
    RealName string 
    TmpPath string 
}
```

## type Exporter

Exporter is responsible for any individual export request made by the **ExportManager**. Generally, the **ExportManager** uses this class internally to make chart exporting request to export server. Refer to the code below:

```go
type Exporter struct {
    ExportDoneListener func([]OutFileBag, error)
    ExportStateChangeListener func(ExportEvent)
    ExportConfig ExportConfig
    ExportServerHost string
    ExportServerPort int
    tcpClient net.Conn
}
```

### Methods

**func (exp *Exporter) Start () error**
It starts the chart exporting process according to the export configurations.

**func (exp *Exporter) Cancel () error**
It cancels the chart exporting request.

## type ExportConfig

**ExportConfig** holds the configurations for chart exporting like chart data, template file, dashboard config, etc. These configurations are sent to the **ExportServer** by **ExportManager** to export charts.

```go
type ExportConfig struct {
    configs map[string]string
}
```

### Methods

**func NewExportConfig () ExportConfig**
It constructs a new export configuration.

**func (config *ExportConfig) Set (name, value string)**
It sets a single export configuration with the specified configuration value. It returns the object so it can be chained.

**func (config *ExportConfig) Get (name string) string.**
It returns config value for the specified configuration name.

**func (config *ExportConfig) Remove (name string)**
Removes the specified configuration and returns true if configName is found. It also returns the object so that it can be chained.

**func (config *ExportConfig) Has (name string) bool**
Checks if the specified configuration is present or not, returning true if the configName is found.

**func (config *ExportConfig) Clear (name string)**
Clears all export configurations already added.

**func (config *ExportConfig) Count () int**
Returns the total number of configurations currently stored.

**func (config *ExportConfig) ConfigNames () []string**
Returns all configuration names in an array.

**func (config *ExportConfig) ConfigValues () []string**
Returns all configuration values in an array.

**func (config *ExportConfig) Clone () ExportConfig**
Returns a new instance of ExportConfig with same content as the current one.

**func (config *ExportConfig) GetFormattedConfigs () string**
Returns all export configurations in JSON format.

The supported export configurations are as follows:

* `chartConfig` - Sets the configuration of a single chart or multiple charts in an array.

* `inputSVG` - Sets the path for the SVG file input.

* `templateFilePath` - Sets the path of the HTML template used for dashboard export.

* `callbackFilePath` - Sets the path for a Javascript file that would be injected at the bottom of the page for each export.

* `libraryDirectoryPath` - Sets the root path of fusionCharts Javascript library to use the licensed version of FusionCharts.

* `asyncCapture` - Sets if the export process will wait for `CAPTURE_EXIT` event.

* `maxWaitForCaptureExit` - Sets the maximum time FusionExport would wait for the CAPTURE_EXIT event to be triggered.

* `dashboardLogo` - Sets the path to the logo file.

* `dashboardHeading` - Sets the title of the dashboard.

* `dashboardSubheading` - Sets the sub-title of the dashboard.

* `type` - Sets the format of the output file.

* `exportFile` - Sets the output filename template, along with the path.

* `exportAsZip` - Sets if the chart(s) will be exported as a zip file or as individual file(s).