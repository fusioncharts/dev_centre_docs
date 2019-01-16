---
title: Style Definition | FusionCharts
description: This article elaborates on the style definition of FusionTime.
heading: Style Definition
---

Unlike FusionCharts in which cosmetics of the elements in a chart are controlled by defined attributes, FusionTime comes with a different approach. In FusionTime, the styling of the elements is handled by defined CSS. CSS is used to define styles for the chart components in FusionTime.

In this article, we will discuss the CSS styling to set the cosmetic properties of a chart. You can, however, set the styling of the individual components of the chart which we will discuss later.

To set the styling, instead of creating a separate CSS file, you can define the styling using `StyleDefinition` object.

Style definitions are specified at the root of the dataSource in FusionTime.

**Syntax:**

```json
{
	"styleDefinition": colorStyle
}
```

Now, let's define the `styleDefinition` object and set the **font color** in an object. The code is given below:

```json
styleDefinition: {
    "colorstyle": {
        "fill": "#ff0000"
    }
},
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `colorstyle` attribute.

The syntax to set the `StyleDefintion` to the caption is given below:

```json
{
    caption: {
        text: "Online Sales of a SuperStore",
        style: {
            text: "colorstyle"
        }
    }
}
```

In the above code, `colorStyle` object is called to set the color of the caption.

The chart after applying the above attributes will look like as shown below:

{% embed_ftChart online-sales-single-series-style-definition %}

In the above sample, the **font color** has been specified. You can use the above object to style any chart component like legends, y-axis, etc. 

You can also define more than one style within the `StyleDefinition` object as shown below:

```json
styleDefinition: {
  	"bold-text": Style,
  	"large-text": Style,
  	"small-text": Style
}
```

> You can provide the style attributes only to the formats supported by CSS. For example, to provide font family to a text, provide the `font-family` as the attribute name.