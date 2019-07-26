---
title: Predictive data representation | FusionCharts
description: This article defines how to set predictive data.
heading: Predictive data representation
---

Forecasting has always been an important aspect of time-series data representation and with FT 1.2 we want to ensure that our library has the capability to represent predictive data values.

The product does not forecast values right now; it just represents the data which are predicted (once specified) differently. 

To represent your predicted data in different styles, FusionTime allows you to specify the date (from the data you will use) beyond which the rendered data will have styling different from the default rendered data plots.

> If date/timestamp beyond which data is predictive is not specified, Fusiontime considers the current date (or today()) for predictive representation.

A time-series chart with predictable date looks like as shown below:

{% embed_ftChart predictive-data-in-fusiontime %}

The code to render the above chart is shown below:

```json
dataSource: {
    "extensions": {
        "prediction": {
            //"date": "08/01/18",
            "style": {
                "plot": "line"
            }
        }
    }
}
```

> Representation of the predictive data feature is only applicable if the `prediction` object is called under `extensions` object.

In the above code:

- Create an object as `prediction` object under the `extensions` object to add the date from where you want the predicted styling to start.

- `date` attribute is used to specify the date from where the data needs to be represented differently (in a predictive style).

- In the style object, the `line` object is created to specify the styling to be added to the predicted data.