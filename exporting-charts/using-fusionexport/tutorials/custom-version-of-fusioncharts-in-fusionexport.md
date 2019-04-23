---
title: Custom Version of FusionCharts in FusionExport | FusionCharts
description: This article talks about how to update the custom version of FusionCharts in FusionExport.
heading: Custom Version of FusionCharts in FusionExport
---

You can override FusionCharts latest version with your current version by passing your custom FusionCharts directory to the `-L` options of FusionExport.

```bash
./fusionexport -L path/to/fusioncharts/
```

To override the FusionCharts version, your version should have:

- `fusioncharts.js` and all the other files like `fusioncharts.widgets.js`, `fusioncharts.timeseries.js`, fusioncharts.charts.js, etc.
- `Map` files
- And `themes` in their respective directory.
