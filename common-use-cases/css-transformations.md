---
title: CSS Transformations | FusionCharts
description: Using CSS transformations in charts. 
heading: CSS Transformations
---

CSS Transformations help you change the visual appearance of charts so you can present them in a more interesting way. CSS transformations could be specially useful on the sports broadcasting industry, or in situations where you want to fit charts with other visuals.

Charts are compatible with the following transformations:

+ rotate (only rotateZ)
+ skew 
+ skewX
+ skewY
+ scale
+ scaleX
+ scaleY
+ translate
+ translateX
+ translateY
+ matrix

For charts to work properly with CSS Transformations you need to set the `applyCSSTransform` attribute to 1.

```
{
        "chart": 
		   {
          "applyCssTransform":"1"
            }
	}
```

You can apply the transformations on the parent object of a chart.

```
<html>
<div id="container" style="transform: scale(0.6,0.6)rotate(-76deg) translate(-52px,34px)skew(4deg,0);">
Chart will render here
</div>
</html>
```

{% embed_all  css-transform-example.js %}


[__Try it yourself__](https://jsfiddle.net/fusioncharts/hzc1rLxa/2/)