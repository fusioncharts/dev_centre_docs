---
title: Version 3.0.2 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.0.2.
heading: Version 3.0.2
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 27th December, 2006

## FusionCharts

* **New:** Added following charts - Scroll Column 2D, Scroll Line 2D & Scroll Area 2D.

* **Improvement:** Added option to hide "About FusionCharts" context menu item. To remove it, set <chart showFCMenuItem='0' ..>

* **Improvement:** Trend-line values can now have different input decimal and thousand separators (like data values).

* **Improvement:** Added option to dynamically change the following application messages - "Invalid XML Data", "Rendering Chart" & "Error in Loading Data"

* Modification: `3DRadius` attribute in Pie and Doughnut 2D Chart changed to radius3D, conforming to XML standards.

* **Bug Fix:** In multi-series stacked column and multi-series stacked column line combination chart, the tool tip was showing category label for the wrong index.

* **Bug Fix:** In multi-series stacked column and multi-series stacked column line combination chart, negative values were rendering improperly.

* **Bug Fix:** Link and tool tip was not working in singleton case in 2D Pie and 2D Doughnut Chart.

* **Bug Fix:** In Multi-series bar chart, if the number of bars were less than number of datasets, the bars were not acquiring right position.

* **Bug Fix:** In ColdFusion code examples and blueprint application, renderChart method in FusionCharts.cfm has been updated to render 1,0 instead of true,false in output JavaScript code (to embed the chart).

#### March 31st, 2008

## FusionWidgets

* **Product name changed from FusionGadgets to FusionWidgets.**

* **New:** Ability to invoke Image saving feature from JavaScript.

* **New:** Ability to print chart using JavaScript.

* **New:** ColdFusion, JSP and Perl scripts for image saving.

* **New:** Ability to remove "Print Chart" context menu item.

* **New:** Ability to track clicks and rendering event of chart in other Flash movies.

* **Bug Fix:** Minor bug fix in PHP image saving script.

#### 9th January, 2007

## PowerCharts

* **New:** Added multi-axes line chart, drag-able area chart & Waterfall (cascade) chart

* **Improvement:** Added option to hide "About FusionCharts" context menu item. To remove it, set <chart showFCMenuItem='0' ..>

* **Bug Fix:** Drag Column 2D Chart & Select Scatter Chart were returing XML with dataset element named as dataSet (capital S). Changed it to <dataset> for unified parsing.

* **Bug Fix:** Drag Line Chart - If the number of data points in a dataset were more than number of categories, dragging the last point of that dataset created an extra line on the chart.

#### 22nd December, 2006

## FusionMaps

* **New:** Added following new flash maps, taking the total count to 151 maps.

    * **North America**: Antigua, Barbados, Belize, British Columbia, Costa Rica, Cuba, Dominican Republic, El Salvador, Greenland, Grenada, Guatemala, Haiti, Honduras, Jamaica, Nicaragua, Ontario, Puerto Rico, Quebec, St. Kitts & Nevis, St. Lucia, St. Vincent & The Grenadines

    * **Europe**: Albania, Andorra, Belarus, Bosnia - Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Estonia, Greece, Iceland, Latvia, Liechtenstein, Lithuania, Luxembourg, Moldova, Montenegro, Poland, Portugal, Romania, San Marino, Slovakia, Slovenia, Turkey, Ukraine.

    * **South America**: Argentina, Bolivia, Chile, Colombia, Ecuador, Paraguay, Peru, Suriname, Uruguay, Venezuela.

    * **Asia**: Armenia, Azerbaijan, Georgia, Indonesia, Taiwan, United Arab Emirates.

    * **Oceania**: New Zealand.

    * **Africa**: Egypt, Kenya, South Africa.

* Added option to hide "About FusionCharts" context menu item. To remove it, set <chart showFCMenuItem='0' ..>

* Bug fix in Europe Map: Added Cyprus, Andora, Malta, Monaco, Liechtenstein, San Marino, Vatican City. Fixed a few other entities.

* Bug fix in Africa Map: Mauritius & Seychelles added.

* Bug fix in Asia Map: The dot above Indonesia was removed.

* Bug fix in Mexico Map: Districto Federo added.

* Bug fix in Spain Map (Autonomous): Canary Islands shown on left.

* Bug fix in South America Map: Central America has been removed.

* Bug fix in Canada Map : Spelling of Yukon Territory corrected.

* Bug fix in World Map: Mexico and adjacent areas are now shown as a part of North America.