---
title: Themes | FusionCharts
description: A theme file lets you centralize the visual appearance, behavior and intelligence aspects for a time-series chart.
heading: Themes
---

FusionTime allows you to set the visual appearance, behavior and intelligence aspects of the time-series chart using **themes**.

In this article, we will discuss how to apply themes to a time-series chart.

## In a theme file, you can centralize the following aspects of a chart:

- Visual appearance (data plot color, font color, font size, etc.)
- Behavior (hover effects for data plots)
- Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionTime ships with the following predefined themes:

- `fusion`
- `gammel`
- `candy`
- `umber`

A time series chart showcasing the 3 themes mentioned above is given below:

{% embed_ftChart themes-in-fusiontime %}

Click [here](https://jsfiddle.net/fusioncharts/sL9kceau/) to edit the above chart.

The full code of the above sample is given below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Create your First Chart</title>
    <style type="text/css">
      #container {
        width: 700px;
      }
    </style>
  </head>

  <body>
    <div id="container"></div>
    <script src="path/to/local/fusioncharts.js"></script>
    <script src="path/to/local/data.js"></script>
    <script src="path/to/local/schema.js"></script>
    <script src="path/to/local/js/themes/fusioncharts.themes.fusion.js"></script>
    <script>
      let fusionDataStore = new FusionCharts.DataStore();
      let fusionTable = fusionDataStore.createDataTable(data, schema);

      new FusionCharts({
        type: "timeseries",
        renderAt: "container",
        width: "90%",
        height: 650,
        dataSource: {
          data: fusionTable,
          chart: {
            theme: "fusion" //Apply theme
          },
          yAxis: [
            {
              plot: {
                title: "Sales ($)"
              }
            }
          ],
          caption: {
            text: "Online Sales of a SuperStore in the US"
          }
        }
      }).render();
    </script>
  </body>
</html>
```

In the above code:

In the above code:

- Include `fusioncharts.js` file.

- Include `data.json` and `schema.json` files.

- Include `fusincharts.theme.fusion` file.

- Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.

- Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the the `DataTable`.

- Define the chart configuration in the FusionCharts constructor:

  - Set the type as `timeseries`.

  - Set the chart container as `container` using the `renderAt` property.

  - Set the width and height (in pixels).

  - Set the name of the `DataTable` as the value of the `data` property of `dataSource`.

  - Set the data to create the chart.

  - Specify the theme you want to apply to the chart using `theme` attribute in `chart` object.

  - Specify the caption of the chart using `text` attribute in `caption` object.

the value of the `theme` attribute has been set to `fusion`. To apply `gammel` or `candy` to your chart, set the value of `theme` attribute under `chart` object.
