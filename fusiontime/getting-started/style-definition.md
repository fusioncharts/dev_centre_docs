---
title: Style Definition | FusionCharts
description: This article elaborates on the style definition of FusionTime.
heading: Style Definition
---

Unlike FusionCharts in which cosmetics of the elements in a chart are controlled by defined attributes, FusionTime comes with a different approach. In FusionTime, the styling of the elements is handled by defined CSS. CSS is used to define styles for the chart components in FusionTime.

In this article, we will discuss the CSS styling to set the cosmetic properties of a chart. You can however set the styling of the individual components of the chart which we will discuss later.

To set the styling, instead of creatng a separate CSS file, you can define the styling using `StyleDefinition` object.

Style definitions are specified at the root of the dataSource in FusionTime.

Syntax:

```
{
	"styleDefinition": StyleDefinition
}
```

Now, let's set the **font size** and the **font family** of every text in the chart. The code is given below:

```
StyleDefinition: {
	"font-size": 8,
	"font-family": "mono"
}
```

In the above code, the **font size** and the **font family** has been specified. You can use the above object to style any chart component like legends, captions, etc. 

You can also define more than one style within the `StyleDefinition` object:

```
StyleDefinition: {
	"bold-text": Style,
	"large-text": Style,
	"small-text": Style
}
```

Once the `StyleDefinition` is defined, you can refer it for the various components using `style` attribute.

The syntax to set the StyleDefintion to the legend and the caption is given below:

```
{
	"caption": {
    	"text": String
    	"style": {
      		"text": "large-text bold-text"
    	}
  	},
  	"legend": {
    	"item": {
      		"style": {
        		"text": "small-text"
      		}
    	}
  	}
}
```

**Note:** You can provide the style attributes only to the formats supprted by CSS. For example, to provide font family to a text, provide the `font-family` as the attribute name.