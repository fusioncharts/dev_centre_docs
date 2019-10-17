---
title: Attribute Reference | FusionCharts
heading: Attribute Reference
description: This sections talks about the attributes used to render different types of maps in FusionCharts Suite XT.
layout: page
---

Example of USA Chart:

{% embed_chart getting-started-your-first-charts-building-your-map-example-1.js %}

JavaScript embedding code:

```html
<script type="text/javascript">
    FusionCharts.ready(function(){
        var myChart = new FusionCharts({
            "type": "usa",
            "dataFormat": "jsonurl",
            "dataSource": "chartdata.json"
        });
    });
</script>
```

Data for this chart:

{% embed_data getting-started-your-first-charts-building-your-map-example-1.js %}