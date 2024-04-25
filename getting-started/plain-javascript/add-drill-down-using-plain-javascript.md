---
title: Adding Drill Down | FusionCharts
description: Discover the effortless way to implement multi-level drill-downs with FusionCharts & navigate through your data from parent to child and grandchild charts.
heading: Adding Drill Down
---

With FusionCharts, you can create unlimited levels of drill down with a single data source. The parent chart contains all the data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill up, or it can open in a new window or frame.

Create linked charts by following the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement these steps, the FusionCharts JavaScript class takes care of the rest.

### Features of the FusionCharts JavaScript Class

- Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

- Clones all chart configuration settings from the parent chart to create the descendant charts

- Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function
- Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

- Supports drill down to an unlimited number of levels

As an example, we will consider a simple scenario of a parent chart with a single level of drill down.

The parent chart here is a **Column 2D** chart showing yearly sales for the top three juice flavors over the last one year. When you click on the data plot for a particular flavor, it drills down to show a descendant **Column 2D** chart with quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chartData chart-configurations-drill-down-example-7.js json %}

Click [here](http://jsfiddle.net/fusioncharts/wvpzfz5g/) to edit the above chart.

The code to render the above chart is given below:

```javascript
// Include the core fusioncharts file from core
import FusionCharts from "fusioncharts/core";

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from "fusioncharts/viz/column2d";

// Include the fusion theme
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";

// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
  type: "column2d",
  renderAt: "chart-container",
  width: "400",
  height: "300",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Top 3 Juice Flavors",
      subcaption: "Last year",
      xaxisName: "Flavor",
      yaxisName: "Amount (In USD)",
      numberPrefix: "$",
      theme: "fusion",
      rotateValues: "0"
    },
    data: [
      {
        label: "Apple",
        value: "810000",
        link: "newchart-xml-apple"
      },
      {
        label: "Cranberry",
        value: "620000",
        link: "newchart-xml-cranberry"
      },
      {
        label: "Grapes",
        value: "350000",
        link: "newchart-xml-grapes"
      }
    ],
    linkeddata: [
      {
        id: "apple",
        linkedchart: {
          chart: {
            caption: "Apple Juice - Quarterly Sales",
            subcaption: "Last year",
            xaxisname: "Quarter",
            yaxisname: "Amount (In USD)",
            numberprefix: "$",
            theme: "fusion",
            rotateValues: "0"
          },
          data: [
            {
              label: "Q1",
              value: "157000"
            },
            {
              label: "Q2",
              value: "172000"
            },
            {
              label: "Q3",
              value: "206000"
            },
            {
              label: "Q4",
              value: "275000",
              rotateValues: "0"
            }
          ]
        }
      },
      {
        id: "cranberry",
        linkedchart: {
          chart: {
            caption: "Cranberry Juice - Quarterly Sales",
            subcaption: "Last year",
            xaxisname: "Quarter",
            yaxisname: "Amount (In USD)",
            numberprefix: "$",
            theme: "fusion",
            rotateValues: "0"
          },
          data: [
            {
              label: "Q1",
              value: "102000"
            },
            {
              label: "Q2",
              value: "142000"
            },
            {
              label: "Q3",
              value: "187000"
            },
            {
              label: "Q4",
              value: "189000"
            }
          ]
        }
      },
      {
        id: "grapes",
        linkedchart: {
          chart: {
            caption: "Grape Juice - Quarterly Sales",
            subcaption: "Last year",
            xaxisname: "Quarter",
            yaxisname: "Amount (In USD)",
            numberprefix: "$",
            theme: "fusion",
            rotateValues: "0"
          },
          data: [
            {
              label: "Q1",
              value: "45000"
            },
            {
              label: "Q2",
              value: "72000"
            },
            {
              label: "Q3",
              value: "95000"
            },
            {
              label: "Q4",
              value: "108000"
            }
          ]
        }
      }
    ]
  }
}); // Render
chartInstance.render();
```

1. Include the necessary libraries (such as the `fusioncharts` library) and components using `import`.

2. Store the chart configurations in a JSON object. In this JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height (in pixels).
   - Set the `dataFormat` as JSON.
   - Embed the JSON data as the value of the `dataSource`.
   - Create the JSON/XML data for the parent chart. This is called the parent data source.
   - Append the data string or the data URL for the descendant charts within the parent data source. If you append a data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

3. Add a container (instance) for the chart.

### Create Linked Charts Using Data URL Method﻿

Specify the `link` attribute (which belongs to the data object) for each data plot to link charts using the data URL method. Every time you click on a data plot, the corresponding linked chart will be rendered.

The syntax for the link attribute is:

```json
{
  "chart": {
    "link": "newchart-dataformat-datasource"
  }
}
```

The above chart, when rendered, looks like the following:

{% embed_chartData chart-configurations-drill-down-example-11.js json %}

Click [here](http://jsfiddle.net/fusioncharts/v76phqq5/) to edit the above chart.

Here, `newchart` is constant.For the data URL method, assign `jsonurl` (if the data for the descendant chart is in a .json file) or `xmlurl` (if the data for the descendant chart is in a .xml file) as the value of `dataformat`. Specify the URL of the `.json` or `.xml` file as the value of the `datasource` attribute.

The data structure needed to render the parent chart given above using the data URL method is given below:

```json
{
  "chart": {
    "caption": "Top 3 Juice Flavors",
    "subcaption": "Last year",
    "xaxisname": "Flavor",
    "yaxisname": "Amount (In USD)",
    "numberprefix": "$",
    "theme": "fusion",
    "plottooltext": "$label, $dataValue,  $percentValue"
  },
  "data": [
    {
      "label": "Apple",
      "value": "810000",
      "link": "newchart-jsonurl-apple.json"
    },
    {
      "label": "Cranberry",
      "value": "620000",
      "link": "newchart-jsonurl-cranberry.json"
    },
    {
      "label": "Grapes",
      "value": "350000",
      "link": "newchart-jsonurl-grapes.json"
    }
  ]
}
```

From the data shown above, it's clear that when the user clicks on the first data plot, the chart automatically sources the data to render the subsequent linked chart from the **apple.json** file. Similarly, when you click on the other two data plots, the chart renders the respective linked charts from the data are given in the `cranberry.json` and `grapes.json` files.

The `apple.json` file contains the data to plot a column 2D chart showing the quarterly sales figures of apple juice for the last one year. The data structure for the `apple.json` file is given below:

```json
{
  "chart": {
    "caption": "Apple Juice - Quarterly Sales",
    "subcaption": "Last year",
    "numberprefix": "$",
    "theme": "fusion",
    "plottooltext": "$label, $dataValue,  $percentValue"
  },
  "data": [
    {
      "label": "Q1",
      "value": "157000"
    },
    {
      "label": "Q2",
      "value": "172000"
    },
    {
      "label": "Q3",
      "value": "206000"
    },
    {
      "label": "Q4",
      "value": "275000"
    }
  ]
}
```

The `cranberry.json` and the `grapes.json` files contain the data to plot column 2D charts showing the quarterly sales figures for cranberry and grape juice, respectively.

If you are using XML data for the chart, refer to the data structure for the parent chart given below:

```html
<chart
  caption="Top 3 Juice Flavors"
  subcaption="Last year"
  xaxisname="Flavor"
  yaxisname="Amount (In USD)"
  numberprefix="$"
  theme="fusion"
  plottooltext="$label, $dataValue,  $percentValue"
  animation="0"
>
  <set label="Apple" value="810000" link="newchart-xmlurl-apple.xml" />
  <set label="Cranberry" value="620000" link="newchart-xmlurl-cranberry.xml" />
  <set label="Grapes" value="350000" link="newchart-xmlurl-grapes.xml" />
</chart>
```

The data structure for the **apple.xml** file is given below:

```html
<chart
  caption="Apple Juice - Quarterly Sales"
  subcaption="Last year"
  numberprefix="$"
  theme="fusion"
  plottooltext="$label, $dataValue,  $percentValue"
>
  <set label="Q1" value="157000" />
  <set label="Q2" value="172000" />
  <set label="Q3" value="206000" />
  <set label="Q4" value="275000" />
</chart>
```

Likewise, you can create the **cranberry.xml** and the **grapes.xml** files to create linked charts.

### Create Linked Charts Using Data String Method

For the data string method, `dataformat` accepts either `json` (if the JSON data for the descendant chart is embedded inside the parent chart data) or `xml` (if the XML data for the descendant chart is embedded inside parent chart data) as values. `datasource` takes the value of the unique identifier that refers to the data embedded inside the `linkeddata` array (which in turn contains the JSON data for descendant charts) or the `<linkeddata>` node (which contains the XML data for the descendant charts) in the parent data source.

Refer to the code below:

```javascript
// Include the core fusioncharts file from core  -
import FusionCharts from "fusioncharts/core";

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from "fusioncharts/viz/column2d";

// Include the fusion theme
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";

// Add the chart and theme as dependencies
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
  chart: {
    caption: "Top 3 Juice Flavors",
    subcaption: "Last year",
    xaxisName: "Flavor",
    yaxisName: "Amount (In USD)",
    numberPrefix: "$",
    theme: "fusion",
    rotateValues: "0"
  },
  data: [
    {
      label: "Apple",
      value: "810000",
      link: "newchart-xml-apple"
    },
    {
      label: "Cranberry",
      value: "620000",
      link: "newchart-xml-cranberry"
    },
    {
      label: "Grapes",
      value: "350000",
      link: "newchart-xml-grapes"
    }
  ],
  linkeddata: [
    {
      id: "apple",
      linkedchart: {
        chart: {
          caption: "Apple Juice - Quarterly Sales",
          subcaption: "Last year",
          xaxisname: "Quarter",
          yaxisname: "Amount (In USD)",
          numberprefix: "$",
          theme: "fusion",
          rotateValues: "0"
        },
        data: [
          {
            label: "Q1",
            value: "157000"
          },
          {
            label: "Q2",
            value: "172000"
          },
          {
            label: "Q3",
            value: "206000"
          },
          {
            label: "Q4",
            value: "275000",
            rotateValues: "0"
          }
        ]
      }
    },
    {
      id: "cranberry",
      linkedchart: {
        chart: {
          caption: "Cranberry Juice - Quarterly Sales",
          subcaption: "Last year",
          xaxisname: "Quarter",
          yaxisname: "Amount (In USD)",
          numberprefix: "$",
          theme: "fusion",
          rotateValues: "0"
        },
        data: [
          {
            label: "Q1",
            value: "102000"
          },
          {
            label: "Q2",
            value: "142000"
          },
          {
            label: "Q3",
            value: "187000"
          },
          {
            label: "Q4",
            value: "189000"
          }
        ]
      }
    },
    {
      id: "grapes",
      linkedchart: {
        chart: {
          caption: "Grape Juice - Quarterly Sales",
          subcaption: "Last year",
          xaxisname: "Quarter",
          yaxisname: "Amount (In USD)",
          numberprefix: "$",
          theme: "fusion",
          rotateValues: "0"
        },
        data: [
          {
            label: "Q1",
            value: "45000"
          },
          {
            label: "Q2",
            value: "72000"
          },
          {
            label: "Q3",
            value: "95000"
          },
          {
            label: "Q4",
            value: "108000"
          }
        ]
      }
    }
  ]
}); //Render
chartInstance.render();
```

### Configure Events for Linked Charts

The FusionCharts JavaScript class includes events raised when you open or close linked items, as explained below:

- `beforeLinkedItemOpen` is fired every time a linked item is about to open, right after you click the link in the parent chart.

- `linkedItemOpened` is fired every time a linked (descendant) chart is rendered.

- `beforeLinkedItemClosed` is fired every time the linked chart is closed, and the parent chart is rendered. This happens whenever you navigate back to the parent chart by clicking on the **Back** button at the top right corner of the linked chart.

- `linkedItemClosed` is fired every time a linked chart is closed, and before the parent chart is reopened.

A chart utilizing these events is given below:

{% embed_chart chart-configurations-drill-down-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/sknyboh5/) to edit the above chart.

Configure the `addEventListener()` method for the parent chart to listen to these events. The data structure that shows how to implement these events is given below:

```javascript
// Include the core fusioncharts file from core  -
import FusionCharts from 'fusioncharts/core';

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from 'fusioncharts/viz/column2d';

// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// Add the chart and theme as dependencies
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [
        {
            "label": "Apple",
            "value": "810000",
            "link": "newchart-xml-apple"
        },
        {
            "label": "Cranberry",
            "value": "620000",
            "link": "newchart-xml-cranberry"
        },
        {
            "label": "Grapes",
            "value": "350000",
            "link": "newchart-xml-grapes"
        }
    ],
    "linkeddata": [
        {
            "id": "apple",
            "linkedchart": {
                "chart": {
                    "caption": "Apple Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "157000"
                    },
                    {
                        "label": "Q2",
                        "value": "172000"
                    },
                    {
                        "label": "Q3",
                        "value": "206000"
                    },
                    {
                        "label": "Q4",
                        "value": "275000"
                    }
                ]
            }
        },
        {
            "id": "cranberry",
            "linkedchart": {
                "chart": {
                    "caption": "Cranberry Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "102000"
                    },
                    {
                        "label": "Q2",
                        "value": "142000"
                    },
                    {
                        "label": "Q3",
                        "value": "187000"
                    },
                    {
                        "label": "Q4",
                        "value": "189000"
                    }
                ]
            }
        },
        {
            "id": "grapes",
            "linkedchart": {
                "chart": {
                    "caption": "Grapes Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "45000"
                    },
                    {
                        "label": "Q2",
                        "value": "72000"
                    },
                    {
                        "label": "Q3",
                        "value": "95000"
                    },
                    {
                        "label": "Q4"
                        "value": "108000"
                    }
                ]
            }
        }
    ]
}); //Render
chartInstance.render();
```

Use the `events` object (under the `dataSource` object) to configure the events raised for a chart.

> The `FusionCharts.addEventListener()` static function can be used to trap events globally — i.e., for all charts. For detailed descriptions of the `LinkedChart` events, refer to the [FusionCharts API Reference](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events.html).
