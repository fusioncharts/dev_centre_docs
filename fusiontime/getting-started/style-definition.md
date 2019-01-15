---
title: Style Definition | FusionCharts
description: This article elaborates on the style definition of FusionTime.
heading: Style Definition
---

Unlike FusionCharts in which cosmetics of the elements in a chart are controlled by defined attributes, FusionTime comes with a different approach. In FusionTime, the styling of the elements is handled by defined CSS. CSS is used to define styles for the chart components in FusionTime.

In this article, we will discuss the CSS styling to set the cosmetic properties of different components in FusionTime.

To set the styling, instead of creatng a separate CSS file, you can define the styling using `StyleDefinition` object.

The syntax to define `StyleDefinition` is given below:

```
StyleDefinition: {
	"font-size": 8,
	"font-family": "mono"
}
```

In the above code, the font size and the font family has been specified. You can use the above object to style any chart component like legends, captions, etc. 

