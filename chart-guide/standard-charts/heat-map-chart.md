---
title: Heat Map Chart | FusionCharts
description: A heat map chart is a specialized chart that uses colors to represent data values in a table. It is mostly used to plot large and complex data.
heading: Heat Map Chart
---

> This chart type belongs to **PowerCharts XT**.

A heat map chart is a specialized chart that uses colors to represent data values in a table. You will find it most useful when you need to plot large and complex data.

## Basics of a heat map chart

You can use the heat map chart to plot data like employee attendance records, a periodic table, tracking investments in the stock market, comparing the performance of different companies, etc. You can set different colors for different levels of data. For example, if you use the heat map chart to plot employee attendance records, you can use colors like red, yellow, blue and green to indicate a bad, average, good, and excellent grade, respectively, based on percentage values. Once the chart is rendered, you will be able to easily distinguish the four grades.

{% embed_chartAnatomy heat-map-chart.json %}

## Features of a heat map chart

Using a heat map chart, you can:

- Arrange data in a tabular format with a finite number of rows and columns.

- Plot either numeric, or non-numeric data, or both.

- Use a solid color or gradient to indicate different ranges within data values.

- Use an interactive legend to show or hide data plots.

- Hide any data which falls outside the limits of the defined color range.

- Use two different types of legends - the icon legend and the gradient legend.

## Types of heat map charts

Using FusionCharts Suite XT, you can build two types of heat map charts. Use the numeric heat map chart to plot numeric data, and the category based heat map chart to plot non-numeric data. These charts look as shown below:

### Numeric heat map chart

{% embed_all standard-charts-heat-map-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/LsSU9/) to edit the above chart.

### Category based heat map chart

{% embed_all standard-charts-heat-map-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/4qg2v27x/) to edit the above chart.

## Legends in heat map charts

As stated earlier, you can use two different types of legends with heat map charts:

### Gradient legend

![Gradient-Legend](/images/heat-map-introduction-1.jpg)

### Icon legend

![Icon-Legend](/images/heat-map-introduction-2.jpg)

## Create numeric heat map charts

Use the following attributes to create a simple numeric heat map chart:

- Specify the unique ID of the row in which the data has to be entered using the `rowID` attribute.

- Specify the unique ID of the column in which the data has to be entered using the `columnID` attribute.

- Specify the data value to be entered in a cell, using the `value` attribute.

- Specify the labels to be displayed at the top-left, top-right, bottom-left, and bottom-right corners of the data plot, using the `tlLabel`, `trLabel`, `blLabel`, and `brLabel` attributes, respectively.

- Specify the hex code for the color that represents a particular range, using the `code` attribute.

- Specify the minimum value that can be plotted on the chart, using the `minValue` attribute.

- Specify the maximum value that can be plotted on the chart, using the `maxValue` attribute.

Use the following data to build the chart:

| Smartphone Ratings | Processor         | Screen Size | Price | Battery Backup | Camera |
| ------------------ | ----------------- | ----------- | ----- | -------------- | ------ |
| Samsung Galaxy S5  | Quad Core 2.5 GHz | 5.1 inch    | \$600 | 29 Hrs         | 16 MP  |
| HTC One (M8)       | Quad Core 2.3 GHz | 5 inch      | \$600 | 20 Hrs         | 5 MP   |
| Apple iPhone 5S    | Dual Core         | 4 inch      | \$649 | 10 Hrs         | 8 MP   |
| Nokia Lumia 1520   | Quad Core 2.2 GHz | 6 inch      | \$470 | 27 Hrs         | 20MP   |

Use the following data to categorize bad, average, or good ratings:

| Numeric Range | Label   | Color     |
| ------------- | ------- | --------- |
| 1-5           | Bad     | "#e24b1a" |
| 5-8.5         | Average | "#f6bc33" |
| 8.5-10        | Good    | "#6da81e" |

The chart will look as shown below:

{% embed_all standard-charts-heat-map-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/9mngxv1s/) to edit the above chart.

## Define the order of rows and columns

In the chart given above, you can see that the chart automatically decides the order of rows and columns according to the sequence in which you define them for the data object. So, the chart displays `Samsung Galaxy S5` in the first row, `HTC One (M8)` in the second, and so on.

However, there is one more method to plot numeric based heat map charts, where you can predefine the order of rows and columns. Once you do that, you can provide data in any order through the data object. The chart will display them in the order you define beforehand.

Use the following attributes to predefine the order of rows and columns:

- Define the unique ID for a data item using the `id` attribute.

- Define the label for a data item using the `label` attribute.

Note: Use the attributes mentioned above with the `row` object when defining a row entry, and with the `column` object when defining a column entry.

Refer to the code below:

```json
{
	"chart": {
		...
	},
	"rows": {
		"row": [{
			"id": "IPHONES5",
			"label": "Apple iPhone 5S"
		},
		{
			"id": "SGS5",
			"label": "Samsung Galaxy S5"
		},
		{
			"id": "HTC1M8",
			"label": "HTC One (M8)"
		},
		{
			"id": "LUMIA",
			"label": "Nokia Lumia 1520"
        }]
	},
	"columns": {
        "column": [{
        	"id": "price",
        	"label": "Price"
        },
        {
        	"id": "processor",
        	"label": "Processor"
        },
        {
        	"id": "screen",
        	"label": "Screen Size"
        },
        {
        	"id": "backup",
        	"label": "Battery Backup"
        },
        {
        	"id": "cam",
        	"label": "Camera"
        }]
	},
	"dataset": [{
		"data": [{
			...
		}]
	}]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/ty6y2sya/) to edit the above chart.

## Configure colors for individual cells

Specify the hex code for the color that will be applied to a cell using the `color` attribute with the `data` object.

Refer to the code below:

```json
{
	"chart": {
		...
	},
	"rows": {
		"row": [{
			...
        }]
	},
	"columns": {
        "column": [{
        	...
        }]
	},
	"dataset": [{
		"data": [{
			"rowid": "IPHONES5",
            "columnid": "processor",
            "value": "9.1",
            "tlLabel": "Dual Core",
            "trLabel": "OS : iOS 7",
            "color": "#d45faa"
		},
		{
			"rowid": "SGS5",
            "columnid": "processor",
            "value": "8.7",
            "tlLabel": "Quad Core 2.5 GHz",
            "trLabel": "OS : Android 4.4 Kitkat",
            "color": "#ff9f55"
		}]
	}]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/n3o2ycc0/) to edit the above chart.

> In the above data, the `color` attribute is present in two data elements and applies different colors for the first two cells of the chart. These two colors are different from the colors defined in the `colorRange` element. You can also control the transparency of the cell using the `alpha` attribute with the `data` object.

## Create category based heat map charts

You can do category based mapping by defining several color categories or ranges, and set a specific color category to a cell. You don't need to map numeric values to value ranges. Instead, use a color range to map a cell with a color category.

Use the following attributes to create a category based heat map chart:

- Set the value of the `mapByCateory` attribute to `1`, to create a category based heat map chart.

- Specify the unique ID of the row (or column) in which the data has to be entered using the `id` attribute with the `row` (or `column`) object.

- Specify the labels to be rendered for the rows, columns, and the legend, using the `label` attribute with the `row`, `column`, and `color` objects, respectively. Note that if you don't specify the labels for numeric ranges, the chart will display the range instead of labels.

- Specify the unique ID of the row in which the data has to be entered using the `rowID` attribute.

- Specify the unique ID of the column in which the data has to be entered using the `columnID` attribute.

- Specify the data value to be entered in a cell, using the `value` attribute.

- Specify the labels to be displayed at the top-left, top-right, bottom-left, and bottom-right corners of the data plot, using the `tlLabel`, `trLabel`, `blLabel`, and `brLabel` attributes, respectively.

- Specify the hex code for the color that represents a particular range, using the `code` attribute.

- Specify the minimum value that can be plotted on the chart, using the `minValue` attribute.

- Specify the maximum value that can be plotted on the chart, using the `maxValue` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "rows": {
        "row": [{
            "id": "NY",
            "label": "New York"
        },
        {
            "id": "LA",
            "label": "Los Angeles"
        },
        {
            ...
        }]
    },
    "columns": {
        "column": [{
            "id": "wI",
            "label": "Winter"
        },
        {
            "id": "SU",
            "label": "Summer"
        },
        {
            ...
        }]
    },
    "dataset": [{
        "data": [{
            "rowid": "LA",
            "columnid": "WI",
            "value": "60.10",
            "colorRangeLabel": "Warm"
        },
        {
            "rowid": "LA",
            "columnid": "SP",
            "displayValue": "64.5",
            "colorRangeLabel": "Warm"
        },
        {
            ...
        }]
    }],
    "colorRange": {
        "gradient": "0",
        "color": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/m0bkumqw/) to edit the above chart.

In the category based heat map chart given above, you can see the average temperature, across various seasons, for the top four cities in the U.S. Note that you can only define a single color for a particular category. Any data set to that category will appear in the color specified for that particular group. You cannot use gradient colors in a category based heat map chart.

## Legend options

You can create two types of legends in heat map charts built with FusionCharts Suite XT - the icon legend and the gradient legend.

### Create an icon legend

Using an icon legend, you can display single color icons for numeric ranges. By default, a heat map chart is rendered with an icon legend.

Use the following attributes to specify the color for each icon in the legend:

- Specify the hex code of the color that will represent a particular color range in legends, using the `code` attribute. Note that you can use this attribute with `colorRange` or `color` object. In `colorRange`, when you set `gradient` attribute to `1` (gradient legend), you need to use the `code` attribute under `colorRange` to specify the color of the `minValue` and `color` objects simultaneously. On the other hand, when you set the value of `gradient` attribute to `0` (icon legend), you need to use the `color` object to render the chart.

- Specify the lower limits of each numeric range using the `minValue` attribute. You must mention this attribute under each `color` object, whenever you use icon legend.

- Specify the upper limits of each numeric range using the `maxValue` attribute. You must mention this attribute under each `color` object, whenever you use gradient or icon legend.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "colorrange": {
        ...
        "color": [{
            "code": "E24B1A",
            "minvalue": "1",
            "maxvalue": "5",
            "label": "Bad"
        }, {
            "code": "F6BC33",
            "minvalue": "5",
            "maxvalue": "8.5",
            "label": "Average"
        }, {
            "code": "6DA81E",
            "minvalue": "8.5",
            "maxvalue": "10",
            "label": "Good"
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/ou00rdwd/) to edit the above chart.

### Use interactivity of icon legends

Icon legends are interactive. You can click a legend item to show or hide all the cells mapped with the color range represented by the legend item. A heat map chart rendered with all "average" ratings hidden looks as shown in the image below:

![icon-legend](/images/standard-charts-heat-map-chart-image-1.jpg)

## Create a gradient legend

A gradient legend is a pane of blended colors derived from the `colorRange` definitions and features a linear scale is drawn with two draggable pointers. Each color you define for a numeric range blends with the next color, forming a gradient strip. Each point on the gradient scale represents a unique color and value. So, all the different values in the chart appear in unique colors as per the position on the gradient scale.

Use the following attributes to configure a gradient legend:

- Specify whether a gradient legend will be rendered for the chart by setting the value of the `gradient` attribute to `1`.

- Specify the label for the lower limit on the gradient legend using the `startLabel` attribute.

- Specify the label for the upper limit on the gradient legend using the `endLabel` attribute.

- Specify the hex code of the color that will represent a particular color range in legends, using the `code` attribute. Note that you can use this attribute with `colorRange` or `color` object. In `colorRange`, when you set `gradient` attribute to `1` (gradient legend), you need to use the `code` attribute under `colorRange` to specify the color of the `minValue` and `color` objects simultaneously.

Refer to the code below:

```json
{
    "chart": {
        ...
    },

    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "colorRange": {
        "gradient": "1",
        "minValue": "0",
        "code": "#e24b1a",
        "startLabel": "Poor",
        "endLabel": "Good",
        "color": [{
            "code": "#e24b1a",
            "minValue": "1",
            "maxValue": "5",
            "label": "Bad"
        }, {
            "code": "#f6bc33",
            "minValue": "5",
            "maxValue": "7",
            "label": "Average"
        }, {
            "code": "#6da81e",
            "minValue": "7",
            "maxValue": "10",
            "label": "Good"
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/9jfkcnmc/) to edit the above chart.

### Configure a single-color gradient legend

By default, a gradient legend is rendered using several different colors. However, you can also render a gradient legend using shades of the same color. To do this, set the hex code of the single color using the `code` attribute under the `colorRange` object.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "rows": {
        "row": [{
            ...
        }]
    },
    "columns": {
        "column": [{
            ...
        }]
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "colorRange": {
        "gradient": "1",
        "minValue": "0",
        "code": "#2a7faa",
        "startLabel": "Not satisfied",
        "endLabel": "Love it!"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/48sa9jfw/) to edit the above chart.

### Use interactivity of a gradient legend

**Show/hide data values**

Using a gradient legend, you can filter cells within a specific range of values. To specify the range that should be shown on the chart, click and hold the cursor on any one or both of the scale pointers and drag them to set the required lower and upper limit. The chart will display only those data plots that lie within that range while hiding the rest of the numbers.

The chart will look as shown below:

![Heat-Map-Chart-GIF-1](/gif/standard-charts-heat-map-chart-gif-1.gif)

## Configure labels and tooltips

Using FusionCharts XT, you can configure the functional properties of labels and tooltips.

### Configure labels

In a heat map chart, you can show multiple labels in different positions for the same data plot. For example, you can display labels at the center and the four corners of a dataplot. Use the following attributes to configure labels:

- Display a numeric value at the center of a data plot using the `value` attribute. All number formatting features will apply if you use this attribute.

- Display any numeric or string value at the center of the data plot, using the `displayValue` attribute. This attribute will override the `value` attribute if you use both in the code. Note that number formatting features are not applicable to the value of this attribute.

- Display a label in the top-left corner of a data plot, using the `tlLabel` attribute.

- Display a label in the top-right corner of a data plot, using the `trLabel` attribute.

- Display a label in the bottom-left corner of a data plot, using the `blLabel` attribute.

- Display a label in the bottom-right corner of a data plot, using the `brLabel` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "rows": {
        "row": [{
            ...
        }]
    },
    "columns": {
        "column": [{
            ...
        }]
    },
    "dataset": [{
        "data": [{
            "rowid": "SGS5",
            "columnid": "processor",
            "value": "8.7",
            "tlLabel": "Quad Core 2.5 GHz"
        },
        {
            ...
        }]
    }],
    "colorrange": {
        ...
        "color": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/jjpkt7zt/) to edit the above chart.

### Configure tooltips

By default, a heat map chart configures the tool-tip by including the values assigned to the value, `displayValue`, `trLabel`, `tlLabel`, `brLabel`, `blLabel`, `tlType`, `trType`, `blType`, and `brType` attributes. However, in FusionCharts Suite XT, you can use the `plotToolText` attribute to specify the custom text that will be displayed in the tooltip.

Refer to the code below:

```json
{
    "chart": {
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",
    },
    "rows": {
        "row": [{
            ...
        }]
    },
    "columns": {
        "column": [{
            ...
        }]
    },
    "dataset": [{
        "data": [{
            "rowid": "SGS5",
            "columnid": "processor",
            "value": "8.7",
            "tllabel": "Quad Core 2.5 GHz",
            "trlabel": "OS : Android 4.4 Kitkat"
        }, {
            ...
        }]
    }],
    "colorrange": {
        ...
        "color": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/3wsay8rt/) to edit the above chart.

## Handle out-of-range data

If data values are beyond the numeric ranges you define in the `colorRange` object; the chart shows blank data plots. A chart with a blank data plot rendered for out-of-range data looks like the following:

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "rows": {
        "row": [{
            ...
        }]
    },
    "columns": {
        "column": [{
            ...
        }]
    },
    "dataset": [{
        "data": [{
            ...
        }]
    }],
    "colorRange": {
        "gradient": "1",
        "minValue": "0",
        "code": "#2a7faa",
        "startLabel": "Not satisfied",
        "endLabel": "Love it!"
    }
}
```

{% embed_chart standard-charts-heat-map-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/py94vcko/) to edit the above chart.

To avoid such blank data plots, you can enable percentage mapping for heat map charts.

## Map data by percentage

Using percentage mapping, you can display data values in percentage. Set the value of the `mapByPercent` attribute to `1`, to enable percentage mapping for heat map charts.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "rows": {
        "row": [{
            ...
        }]
    },
    "columns": {
        "column": [{
            ...
        }]
    },
    "dataset": [{
        "data": [{
            "rowid": "JA",
            "columnid": "EN",
            "value": "3.7"
        }, {
            ...
        }]
    }],
    "colorRange": {
        ...
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-heat-map-chart-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/a0bz875q/) to edit the above chart.

> When you use percentage mapping, the lowest data value from the JSON data is considered to be the lower limit and displayed as 0%. The highest data value, on the other hand, is considered as the upper limit and is displayed as 100%. Also, you need to create color ranges with 0 as the lower limit and 100 as the upper limit. You can enable percentage mapping even if all your data values fall within the defined range.

In a category based heat map chart, if you provide a category name by the attribute `colorRangeLabel` through the `data` element, which is not defined in the `colorRange` element, the chart will show blank data plot.
