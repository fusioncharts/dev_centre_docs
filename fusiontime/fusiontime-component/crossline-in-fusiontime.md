---
title: Crossline | FusionCharts
description: Discover the power of Crosslines - vertical & horizontal lines to gain quick context of the data. Check out the comprehensive article for more details.
heading: Crossline
---

Crosslines are vertical/horizontal lines which appear on the chart when you interact with it. They give you quick context of the data.

Vertical crossline appears on the time axis when you hover on the canvas. It gives you context about the time.

Horizontal crossline appears on the y-axis when you hover on the data plot. It gives you context about the data value.

Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-cross-line.png" alt="CrossLine" width="700" height="420">

In the case of multivariate charts, the vertical crosslines will be visible in each canvas for a particular time instance, whereas the horizontal crossline will appear only on the canvas on which the user is interacting.

![Crossline in multivariate](/gif/multivariate-crossline.gif)

## Style Definition

FusionTime allows you to configure the line, tag, and labels of both horizontal and vertical crossline. You can customize the crossline of a time-series chart using `style` object under `crossline` object.

> Fill color is not applicable for the horizontal crossline as it is derived from the color of the plot.

Refer to the code given below:

```javascript
"dataSource": {
    "crossline": {
        "style": {
            "line": { },
            "tag": { },
            "label": { },
            "vertical-line": { },
            "vertical-tag": { },
            "vertical-label": { },
            "horizontal-line": { },
            "horizontal-tag": { },
            "horizontal-label": { }
        }
    }
}
```

In the above code:

- Create a `style` object under `crossline` object to add styling to the crossline.
- In the `style` object:
  - `line` is used to style the line of the crossline.
  - `tag` is used to style the tag of the crossline.
  - `label` is used to style the label of the crossline.
  - `vertical-line` is used to specifically style the vertical line of the crossline.
  - `vertical-tag` is used to specifically style the vertical tag of the crossline.
  - `vertical-label` is used to specifically style the vertical label of the crossline.
  - `horizontal-line` is used to specifically style the horizontal line of the crossline.
  - `horizontal-tag` is used to specifically style the horizontal tag of the crossline.
  - `horizontal-label` is used to specifically style the horizontal label of the crossline.
