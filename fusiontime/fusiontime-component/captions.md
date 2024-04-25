---
title: Caption and Sub-caption | FusionCharts
description: Discover detailed chart insights with informative captions and sub-captions! Explore further regarding the subject matter of the chart in our in-depth article.
heading: Caption and Sub-caption
---

The caption is the title (or heading) of a chart. It helps you understand the context of the chart. Whereas the sub-caption is the byline that appears right below the caption and offers additional information regarding the subject matter of the chart.

Refer to the image below:

<img src="{% site.BASE_URL %}/images/caption-subcaption-fusiontime.png" alt="Captions" width="700" height="420">

## Caption Position

FusionTime allows you to configure various aspects of the caption of a chart, including their texts and positions (with respect to the chart canvas).

Refer to the code below:

```javascript
caption: {
  text: "Online Sales of a SuperStore";
  position: "right"; // Default = left. Other values = right, center
}
```

> The default value of the `position` attribute for `caption` object is **left**.

The chart will look as shown below:

{% embed_ftChart online-sales-caption %}

### Sub-caption Position

FusionTime allows you to configure the sub-caption of a chart as well, including its text and position (with respect to the chart canvas).

Refer to the code below:

```javascript
subcaption: {
  text: "2011 - 2014";
  position: "right"; // Default = left. Other values = right, center
}
```

> The default value of the `position` attribute for `subCaption` object is **left**.

The chart will look as shown below:

{% embed_ftChart online-sales-sub-caption %}
