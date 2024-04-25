---
title: Exporting Charts | FusionCharts
description: Read article to discover the power of exporting charts in JPG, PNG, SVG, & PDF formats, along with exporting chart data, using FusionCharts Suite XT and React.
heading: Exporting Charts
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. This article focuses on how you can export charts using the React `props` object and `react-fusioncharts` component.

In this section we will discuss how to:

- [Export Charts as Image and PDF](/getting-started/react/export-charts-using-react#export-charts-as-image-and-pdf)
- [Export Multiple Charts](/getting-started/react/export-charts-using-react#export-multiple-charts)
- [Modes of Export](/getting-started/react/export-charts-using-react#modes-of-export)
- [Export Chart Data in XLSX Format](/getting-started/react/export-charts-using-react#export-chart-data-in-xlsx-format)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_chartData exporting-as-image-and-pdf-introduction-example-1.js %}

The full code of the above sample is given below:

```javascript
//Include react
import React, { Component } from "react";

//Include the react-fusioncharts component
import ReactDOM from "react-dom";

//Include the fusioncharts library
import FusionCharts from "fusioncharts/core";

//Include the chart type
import Column2D from "fusioncharts/viz/column2d";

//Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      exportEnabled: "1",
      theme: "fusion"
    },
    // Chart Data
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ]
  }
};

//Your react component
class Chart extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

ReactDOM.render(<Chart />, document.getElementById("root"));
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.
   - Set the value of `exportEnabled` attribute to `1`, which enables the export feature of the chart.

3. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.

## Export Multiple Charts

FusionCharts lets you export multiple charts in a single image at once, in different formats. In the sample given below, we have two charts-Column2D and Stacked Column2D chart.

<div  style="background-color: #ffffff;">
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-3.js %}</p>
<p>{% embed_chart exporting-as-image-and-pdf-introduction-example-4.js %}</p>
</div>

The full code of the above sample is given below:

```javascript
//Including react
import React, { Component } from "react";

//Including the react-fusioncharts component
import ReactDOM from "react-dom";

//Including the fusioncharts library
import FusionCharts from "fusioncharts/core";

//Including the chart type
import Column2D from "fusioncharts/viz/column2d";

//Including the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ]
  }
};
const chart2Configs = {
  type: "stackedcolumn2d",
  width: 700,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Yearly Energy Production Rate",
      subCaption: " Top 5 Developed Countries",
      numbersuffix: " TWh",
      showSum: "1",
      plotToolText:
        "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Canada"
          },
          {
            label: "China"
          },
          {
            label: "Russia"
          },
          {
            label: "Australia"
          },
          {
            label: "United States"
          },
          {
            label: "France"
          }
        ]
      }
    ],
    dataSet: [
      {
        seriesName: "Coal",
        data: [
          {
            value: "400"
          },
          {
            value: "830"
          },
          {
            value: "500"
          },
          {
            value: "420"
          },
          {
            value: "790"
          },
          {
            value: "380"
          }
        ]
      },
      {
        seriesName: "Hydro",
        data: [
          {
            value: "350"
          },
          {
            value: "620"
          },
          {
            value: "410"
          },
          {
            value: "370"
          },
          {
            value: "720"
          },
          {
            value: "310"
          }
        ]
      },
      {
        seriesName: "Nuclear",
        data: [
          {
            value: "210"
          },
          {
            value: "400"
          },
          {
            value: "450"
          },
          {
            value: "180"
          },
          {
            value: "570"
          },
          {
            value: "270"
          }
        ]
      },
      {
        seriesName: "Gas",
        data: [
          {
            value: "180"
          },
          {
            value: "330"
          },
          {
            value: "230"
          },
          {
            value: "160"
          },
          {
            value: "440"
          },
          {
            value: "350"
          }
        ]
      },
      {
        seriesName: "Oil",
        data: [
          {
            value: "60"
          },
          {
            value: "200"
          },
          {
            value: "200"
          },
          {
            value: "50"
          },
          {
            value: "230"
          },
          {
            value: "150"
          }
        ]
      }
    ]
  }
};

class Chart extends Component {
  constructor() {
    super();
    this.exportChart = this.exportChart.bind(this);
  }

  // Handler for export button.
  // Fires an export operation which exports all charts on the page as a PDF.
  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: "pdf",
      charts: [
        {
          id: "chart1"
        },
        {
          id: "chart2"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chart1Configs} />
        <ReactFC {...chart2Configs} />
        <center>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={this.exportChart}
          >
            Export both charts as a single PDF
          </button>
        </center>
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById("root"));
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.
   - Set the value of `exportEnabled` attribute to `1`, which enables the export feature of the chart.

3. To export multiple charts on the page add an **event handler** to fire the export operation when the button is clicked.

4. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.

## Modes of Export

FusionCharts Suite XT supports the following three modes of export:

- Server-side export
- Client-side export
- Auto-export

By default, charts are exported using the auto-export feature.

The `exportMode` attribute is used to switch between the different modes of export.

> Starting from version v3.12.1, the `exportMode` attribute **replaces** the `exportAtClientSide` attribute.

To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.

## Export Chart Data in XLSX Format

FusionCharts lets you export the rendered charts in JPG, PNG, SVG, and PDF formats. Starting v3.13.5, FusionCharts Suite XT introduces exporting chart data in the XLSX format (as an Excel spreadsheet).

To enable chart exporting, set the chart level attribute `exportEnabled` to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over the button to see a dropdown menu with the export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data, select the **Export as XLSX** option. The XLSX file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the **Export as XLSX** option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-2.js %}

> To export a chart in the XLSX format using server-side exporting, it is mandatory that the exporting server has the latest code, available in the FusionCharts package. Alternatively, you can also use the FusionCharts export link, `export.api3.fusioncharts.com`. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9). You can still export your charts, without including the configurable data.

> To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.
