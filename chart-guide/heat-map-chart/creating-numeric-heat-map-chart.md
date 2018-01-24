---
permalink: chart-guide/heat-map-chart/creating-numeric-heat-map-chart.html
title: Creating Numeric Heat Map Charts | FusionCharts
description: Numeric heat map charts are created using numeric data for the chart for scientific calculations, temperature data, and many more.
heading: Creating Numeric Heat Map Charts
chartPresent: true
---

Numeric heat map charts are created using numeric data for the chart for scientific calculations, temperature data, and many more.

In this section, you will be shown how you can:

* <a href="/chart-guide/heat-map-chart/creating-numeric-heat-map-chart#creating-a-simple-numeric-heat-map-charts" class="smoth-scroll">Create a simple numeric heat map chart</a>

* <a href="/chart-guide/heat-map-chart/creating-numeric-heat-map-chart#defining-the-order-of-rows-and-columns" class="smoth-scroll">Define the order of rows and columns</a>

* <a href="/chart-guide/heat-map-chart/creating-numeric-heat-map-chart#configuring-colors-for-individual-cells" class="smoth-scroll">Configure colors for individual cells</a>

## Creating a Simple Numeric Heat Map Charts

As an example, we will create a simple numeric heat map chart to plot the ratings for various brands of smartphones based on their features.

The following data will be used to create the chart:

<table>
  <tr>
    <th>Smartphone Ratings</th>
    <th>Processor</th>
    <th>Screen Size</th>
    <th>Price</th>
    <th>Battery Backup</th>
    <th>Camera</th>
  </tr>
  <tr>
    <td>Samsung Galaxy S5</td>
    <td>Quad Core 2.5 GHz</td>
    <td>5.1 inch</td>
    <td>$600</td>
    <td>29 Hrs</td>
    <td>16 MP</td>
  </tr>
  <tr>
    <td>HTC One (M8)</td>
    <td>Quad Core 2.3 GHz</td>
    <td>5 inch</td>
    <td>$600</td>
    <td>20 Hrs</td>
    <td>5 MP</td>
  </tr>
  <tr>
    <td>Apple iPhone 5S</td>
    <td>Dual Core</td>
    <td>4 inch</td>
    <td>$649</td>
    <td>10 Hrs</td>
    <td>8 MP</td>
  </tr>
  <tr>
    <td>Nokia Lumia 1520</td>
    <td>Quad Core 2.2 GHz</td>
    <td>6 inch</td>
    <td>$470</td>
    <td>27 Hrs</td>
    <td>20MP</td>
  </tr>
</table>


The following data will be used to categorize the rating for a feature as bad, average, and good:

<table>
  <tr>
    <th>Numeric Range </th>
    <th>Label </th>
    <th>Color</th>
  </tr>
  <tr>
    <td>1-5</td>
    <td>Bad</td>
    <td>"#e24b1a"</td>
  </tr>
  <tr>
    <td>5-8.5</td>
    <td>Average</td>
    <td>"#f6bc33"</td>
  </tr>
  <tr>
    <td>8.5-10</td>
    <td>Good</td>
    <td>"#6da81e"</td>
  </tr>
</table>


The numeric heat map chart thus rendered looks like this:

{% embed_all chart-guide-heat-map-chart-creating-numeric-heat-map-chart-example-1.js %}

Given below is a brief description of the attributes used to create a simple numeric heat map chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`rowID`</td>
    <td>It is used to refer to the unique ID of the row in which the data has to be entered.</td>
  </tr>
  <tr>
    <td>`columnID`</td>
    <td>It is used to refer to the unique ID of the column in which the data has to be entered.</td>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to specify the data value to be entered in a cell.</td>
  </tr>
  <tr>
    <td>`tlLabel`, `trLabel`, `blLabel`, `brLabel`</td>
    <td>They are used to specify the labels to be displayed at the top-left, top-right, bottom-left, and bottom-right corners, respectively, of the data plot. </td>
  </tr>
  <tr>
    <td>`code`</td>
    <td>It is used to specify the hex code for the color that represents a particular range. For example, to show cells with good ratings in the green color, you can use the hex code #e24b1a.</td>
  </tr>
  <tr>
    <td>`minValue`</td>
    <td>It is used to specify the minimum value that can be plotted on the chart.</td>
  </tr>
  <tr>
    <td>`maxValue`</td>
    <td>It is used to specify the maximum value that can be plotted on the chart.</td>
  </tr>
</table>


## Defining the Order of Rows and Columns

In the above example, the chart automatically decides the order of rows and columns according to the sequence  in which they are defined for the `data` object. So, the chart is plotting 'Samsung Galaxy S5' in the first row, 'HTC One (M8)' in the second, and so on.

There is one more method to plot numeric based heat map charts that allows you to pre-define the order of rows and columns. This will give you the freedom of providing data in any order through the `data` object. The chart will abide by the pre-defined table structure.

The above chart with pre-defined rows and columns looks like this:

{% embed_all chart-guide-heat-map-chart-creating-numeric-heat-map-chart-example-2.js %}

Given below is a brief description of the attributes used to pre-define rows and columns:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>It is used to define the unique ID for a data item. When defining a row entry, this attribute is used with the `row` object, which belongs to the `rows` object. When defining a column entry, this attribute is used with the `column` object, which belongs to the `columns` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to define the label for a data item. When defining a row entry, this attribute is used with the `row` object, which belongs to the `rows` object. When defining a column entry, this attribute is used with the `column` object, which belongs to the `columns` object.</td>
  </tr>
</table>


## Configuring Colors for Individual Cells

Given below is a brief description of the attribute used to configure colors for individual cells:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to define the hex code for the color that will be applied to a cell. This attribute is used with the `data` object, which belongs to the `dataset` object.</td>
  </tr>
</table>


Given below is a code snippet that shows how you can configure colors for individual cells:

```javascript
{
    "chart": {
            ...
    },
    "dataset": [
        {
            "data": [
                {
                    "rowid": "SGS5",
                    "columnid": "processor",
                    "value": "8.7",
                    "tllabel": "Quad Core 2.5 GHz",
                    "trlabel": "OS : Android 4.4 Kitkat",
                    "color": "#d45faa"
                }, {
                    "rowid": "SGS5",
                    "columnid": "screen",
                    "value": "8.5",
                    "tllabel": "5.1 inch",
                    "trlabel": "AMOLED screen",
                    "color": "#ff9f55"
                },
                ...
            ]
        }
    ],
    ...
}
```

In the above data, the color attribute is used in two `data` elements to apply different colors for the first two cells of the chart. These two colors are different from the colors defined in the `colorRange` element. The transparency of the cell can also be controlled by using the `alpha` attribute with `data` object.