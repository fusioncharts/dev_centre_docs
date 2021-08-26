---
title: Changelog | FusionCharts
description: This section talks about the change in features and attributes with latest released version.
heading: Version 3.18.x
---

<h2 class="sub-heading">Version 3.18.0</h2>

<p class="release-date">September X, 2021</p>

<h4>New Features</h4>

-  FusionCharts Version 3.18.0 introduces a new Accesible theme for WCAG 2.1. 

<h4>Improvements</h4>

- Starting version 3.18.0 FusionCharts supports both '.XLS' and '.XLSX' chart export file format.  
- Starting version 3.18.0 FusionCharts improved performance and is now able to handle component update operation on charts with multiple events bound to it. Previously, component update operations on charts with multiple events resulted in a JS error ("TypeError - Cannot read property 'paper' of undefined").
- Use inline HTML to customize data labels across all Bar charts. Previously inline HTML elements were not rendering correctly for Bar charts. 
- Starting version 3.18.0 FusionCharts extends support for Angular-fusioncharts component to render charts as expected with NGCC and IVY enabled. Previously, charts did not render when NGCC and IVY are enabled.  
- Exporting chart data via Excel or CSV allows users to control the number of decimal points displayed both on the chart as well as in the exported file.    
- Using the ´labelSepChar´ attribute to customize data labels for Funnel and Pyramid charts is now working correctly. Previously, the data labels render incomplete information.  
- For the Spline chart clicking on the legend icon now allows the data series to be toggled on and off from the chart. Previously, toggeling with the icon legends resulted in a JS error. 
- For all charts, using the attribute value inherit for legend icon color and opacity is now working correclty. Previously, the attribute value 'inherit' did not work correctly for legend icons. 
- Starting version 3.18.0 FusionCharts improved the decimal rounding method for both positive and negative values to round to the correct decimal point. Previously, negative decimal values did not round to the correct decimal point.  

<h4>Fixes</h4>

- For mobile devices, the legend chart area scrolling behavior now works properly. 
- Updating the Heat Map chart using the 'setJSONData' method now updates all chart properties correctly. Previously, using the method did not update properties and components did not work correctly. 
- For Cartesian charts, the attributes 'transposeAxis' and 'transposeAnimation' are working as expected when toggeling with legend items. Previously, the attributes did not respond as expected.  
- Starting version 3.18.0 the Radar chart renders correctly when only one data point is provided, previously an this operation resulted in a JS error. 
