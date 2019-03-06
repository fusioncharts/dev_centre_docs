---
title: FusionTime JSON structure | FusionCharts
description: This article elaborates on the FusionTime JSON structure.
heading: FusionTime JSON structure
---

Unlike FusionCharts which is controlled by a single JSON data source, that is, the same source contains data to plot, functional settings and cosmetic properties, FusionTime comes with a different approach. In FusionTime, the data is handled by the data layer (`DataStore` and `DataTable`), whereas the functional and cosmetic settings are specified separately.

In this article, we will discuss the JSON structure to set the functional and cosmetic properties of different components FusionTime.

## FusionTime JSON Structure

In FusionCharts, the functional and cosmetic properties are defined using attributes under the `chart` object.

For example, you can define the `caption` under the `dataSource` object as shown in the code below:

```javascript
{
    chart : {
        "caption": "Online Sales of a SuperStore in the US" //Chart Caption
    }
}
```

In FusionTime, each and every component is a separate object which has specific properties of its own.

For example, to specify the caption you need to create a `caption` object under the `dataSource` object inn the FusionCharts constructor and set the value of the `text` property. Refer to the code below:

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    caption: {
      text: "Online Sales of a SuperStore in the US" //Chart Caption
    }
  }
});
```

Similarly, to configure the Y-axis in FusionTime you need to create a `yAxis` object and define the Y-axis related properties within the object. Refer to the code below:

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    yAxis: [
      {
        plot: {}
      }
    ]
  }
});
```

Every component in FusionTime has its own set of properties to configure. To know more click [here](/fusiontime/fusiontime-component/y-axis-in-fusiontime).

## Styling

In FusionCharts, you can define the cosmetic properties using attributes within the `chart` object.

For example, you can set the font of the caption using the `captionFont` attribute within the `dataSource` object. Refer to the code below:

```javascript
{
    chart : {
        "caption": "Online Sales of a SuperStore in the US", //Chart Caption
        "captionFont": "Arial"
    }
}
```

FusionTime allows you to define the cosmetic properties using Styles in two different ways. You can:

- Define a `StyleDefinition` object and set the style properties within the object. You can then use the style properties to style any chart component. Refer to the code below:

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    styleDefinition: {
      "small-text": {
        "font-size": "6"
      }
    }
  }
});
```

OR

- You can directly create a style object within a component to set the style properties. Refer to the code below:

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
        caption: {
            text: 'Online Sales of a SuperStore in the US'
            style: {
                text: 'small-text'
            }
        }
    }
});
```
