---
title: Version 3.12.1 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.12.1.
heading: Version 3.12.1
breadcrumb: [["Home", "/"], ["Change Log"]]
---

## New Features

* The FusionCharts export servers have been reconfigured to introduce the following features:

    * The `exportMode` attribute has been introduced to export charts in the auto-export mode (in addition to the server-side export and client-side export modes) that lets users make optimum use of the server-side and client-side export capabilities. Starting v3.12.1, the `exportMode` attribute replaces the 'exportAtClientSide' attribute.

    * Export statistics can now be logged to obtain details like the type of the exported chart, the format in which the chart was exported, IP address of the user exporting the chart, and so on.

    * The `exportAction` attribute has been reconfigured to take one more value, download-save (in addition to the existing values save and download), to send the exported file as a download to the client as well as save a copy on the server.

## Improvements

* Touch devices now support the swipe gesture for scrolling through the chart area.

* Improved memory consumption for charts that are continuously rendered and disposed.

* Extra white space rendered in a chart has now been controlled. The extra space was rendered in the event of the following changes in the chart's configuration:

    * In scroll-combination charts, the extra space was added around the first and last data points when a large number of data points were plotted on the chart.

    * Extra space was rendered around the first and last data labels in XY charts, when the `xAxisMinValue` and `xAxisMaxValue` attributes were defined, also causing data plot values to flow out of the canvas.

* The `drawCrossLineOnTop` attribute has been introduced to draw the cross line on top of the data plots.

* The `minLabelWidthPercent` attribute has been introduced for improved control over label management.

* Tooltips can now be viewed in the full screen mode.

* The time taken to render multiple charts, especially those plotting a large amount of data, in the IE and Firefox browsers has been improved significantly.

* v3.12.1 comes with improved readability and better management of label overlapping, in case of rotated data labels. Labels are now wrapped into multiple lines when rotated, with gaps between consecutive labels.

* The `onScroll` event and the `scrollTo()` method have been introduced to enable better control over the scrolling activity and to facilitate customization.

* The default width and height of toolbar buttons for touch devices has been set to 20 px. to enable ease of use.

* The `reverseToolbarIcons` attribute has been introduced to reverse the order in which the toolbar icons are rendered.

* In pie charts, when `manageLabelOverflow=1`, the legend no longer overlaps the pie chart data labels.

* Significant improvement in scroll chart performance in terms of initial rendering and scrolling through a chart with large number of data plots.

* Previously, all the data plots were drawn for scroll charts. Now, only the data points in the visible viewport (canvas) are drawn. Therefore, no matter how large the data is, the time taken to render the data plots increases nominally.

* In the angular gauge, the empty space that is rendered when the margins are set to 0 has been reduced.

* In the angular gauge, alignment issues with the trend line's display value have been fixed.

* Previously, the trend line's display value was misaligned if the lower limit value was less than 0.

* Slider issues in the heat map chart have been fixed and the slider is now working as expected.

* Previously, in a fast-paced interaction, the slider did not scroll to the extreme end of the gradient legend scale when the mouse pointer moved out of the scale while still dragging the slider.

* The core maps package has been updated to:

    * Add specification sheets for 81 provinces under Turkey.

    * Update the Taiwan core specification sheet to:

        * Merge Taichung (City) and Taichung into 1 zone: Taichung City.

        * Merge Kaohsiung (City) and Kaohsiung into 1 zone: Kaohsiung City.

        * Merge Tainan(City) and Tainan into 1 zone: Tainan City.

        * Rename Changhua to Changhua County.

        * Rename Chiayi to Chiayi County.

        * Rename Chiayi (City) to Chiayi City.

        * Rename Hsinchu to Hsinchu County.

        * Rename Hsinchu (City) to Hsinchu City.

        * Rename Hualien to Hualien County.

        * Rename Keelung (City) to Keelung City.

        * Rename Kinmen to Kinmen County.

        * Rename Lienchiang to Lienchiang County.

        * Rename Miaoli to Miaoli County.

        * Rename Nantou to Nantou County.

        * Rename Penghu to Penghu County.

        * Rename Taipei to New Taipei City.

        * Rename Taipei (City) to Taipei City.

        * Rename Pingtung to Pingtung County.

        * Rename Taitung to Taitung County.

        * Rename Taoyuan to Taoyuan County.

        * Rename Yilan to YilanCounty.

        * Rename Yunlin to Yunlin County.

    * Add specification sheets for 22 cities and counties under Taiwan.

    * Update the Spain (autonomous) specification sheet to:

        * Rename Alava to Alava.

        * Rename Avila to Avila.

        * Rename Baleares to Balearic Islands.

        * Rename Bizkaia to Biscay.

        * Rename Navarra to Navarre.

        * Rename Sevilla to Seville.

    * Add specification sheets for 19 autonomous maps under Spain.

    * Update the Spain (provinces) specification sheet to:

        * Rename Andalucia to Andalusia.

        * Rename Baleares to Balearic Islands.

        * Rename Canarias to Canary Islands.

        * Rename Castilla y Leon' to Castile and Leon.

        * Rename Communidad Valencian to Valencian Community.

        * Rename Madrid to Community of Madrid.

        * Rename Murcia to Region of Murcia.

        * Rename Navarra to Navarre.

        * Rename Pais Vasco to Basque Country.

    * Add specification sheets for 22 provinces under Mongolia.

    * Update the specification sheet for India to change the label for Telangana

    * Updated the Puducherry specification sheet for the areas.

    * Update the specification sheet for Arunachal Pradesh to add Namsai and Longding to the list of entities

    * Update the specification sheet for Assam to rename Salmara-Mankachar to South Salamara-Mankachar

    * Update the specification sheet for Bihar to:

        * Rename Kaimur to Kaimur (Bhabua)

        * Rename Munger to Munger (Monghyr)

        * Rename Purnia to Purnia (Purnea)

    * Update the specification sheet for Chhattisgarh to:

        * Rename Dantewada to Dantewada (South Bastar)

        * Rename Gariaband to Gariyaband

        * Rename Kanker to Kanker (North Bastar)

    * Update the specification sheet for Gujarat to:

        * Rename Banaskantha to Banaskantha (Palanpur)

        * Rename Kheda to Kheda (Nadiad)

        * Rename Narmada to Narmada (Rajpipla)

        * Rename Panchmahal to Panchmahal (Godhra)

        * Rename Sabarkantha to Sabarkantha (Himmatnagar)

        * Rename Tapi to Tapi (Vyara)

    * Update the specification sheet for Himachal Pradesh to rename Sirmaur to Sirmaur (Sirmour)

    * Update the specification sheet for Jharkhand to:

        * Rename Hazaribagh to Hazaribag

        * Rename Sahebganj to Sahibganj

        * Rename Seraikela Kharsawan to Seraikela-Kharsawan

    * Update the specification sheet for Karnataka to rename Kannada to Uttara Kannada (Karwar)

    * Update the specification sheet for Maharashtra to rename Buldana to Buldhana

    * Update the specification sheet for Manipur to add Jiribam, Kakching, Kamjong, Kangpokpi, Noney, Pherzawl and Tengnoupal to the list of entities

    * Update the specification sheet for Odisha to:

        * Rename Debagarh to Deogarh

        * Rename Jagatsinghpur to Jagatsinghapur

        * Rename Kendujhar to Kendujhar (Keonjhar)

        * Rename Subarnapur to Sonepur

        * Rename Sundergarh to Sundargarh

    * Update the specification sheet for Punjab to:

        * Rename Firozpur to Ferozepur.

        * Rename Sri Muktsar Sahib to Muktsar.

        * Rename Shahid Bhagat Singh Nagar to Nawanshahr (Shahid Bhagat Singh Nagar).

        * Rename Sahibzada Ajit Singh Nagar to Sahibzada Ajit Singh Nagar (Mohali).

    * Update the specification sheet for Rajasthan to rename Chittaurgarh to Chittorgarh

    * Update the specification sheet for Tripura to rename Sipahijala to Sepahijala

    * Update the specification sheet for Uttar Pradesh to:

        * Add Amethi (Chatrapati Sahuji Mahraj Nagar), Hapur (Panchsheel Nagar), Sambhal (Bhim Nagar), Shamali (Prabuddh Nagar) and Kanshiram Nagar (Kasganj) to the list of entities.

        * Rename Allahadabad to Allahabad.

        * Rename Kushinagar to Kushinagar (Padrauna).

        * Rename Jyotiba Phule Nagar to Amroha (J.P. Nagar), Kanshiram Nagar (Kasganj).

        * Rename Siddharthnagar to Siddharth Nagar.

        * Rename Shrawasti to Shravasti.

    * Update the specification sheet for Telangana to add the following 20 new entities:

        * Bhadradri Kothagudem

        * Jagtial

        * Jangaon

        * Jayashankar Bhoopalpally

        * Jogulamba Gadwal

        * Kamareddy

        * Komaram Bheem Asifabad

        * Mahabubabad

        * Mancherial

        * Medchal

        * Nagarkurnool

        * Nirmal

        * Peddapalli

        * Rajanna Sircilla

        * Sangareddy

        * Siddipet

        * Suryapet

        * Vikarabad

        * Wanaparthy

        * Warangal (Rural)

        * Warangal (Urban)

        * Yadadri Bhuvanagiri

    * Update the specification sheet for Telangana to change the id prefix from IN.AP to IN.TG

    * Update the specification sheet for Haryana to:

        * Add Charkhi Dadri to the list of entities.

        * Rename Mewat to Nuh.

    * Update the specification sheet for West Bengal to add Kalimpong & Alipurduar to the list of entities

    * Add a specification sheet for the islands and banks in Lakshdweep (existing specification sheet for Lakshadweep has been split into two).

    * Update the specification sheet for Bolivia to rename El Beni to Beni

    * Add 8 specification sheets for departments in Bolivia.

    * Add 81 specification sheets for provinces in Philippines.

    * Add 19 specification sheets for administrative regions in Philippines.

## Fixes

* The `labelLink` attribute is now working as expected.

* Previously, the `labelLink` attribute did not work properly when it was defined using an external link.

* The `chartClick` event is now triggered after the element-specific click events are triggered.

* Previously, the event was triggered before the following click events:

    * *dataLabelClick* (in 3D charts, error charts & boxandwhisker2d)

    * *connectorClick* (in the Gantt chart)

    * *processClick* (in the Gantt chart)

    * *categoryClick* (in the Gantt chart)

    * *milestoneClick* (in the Gantt chart)

    * *labelClick* (in the drag node chart)

    * *linkClicked*

* The Export as XLS feature is now working as expected even when the chart has datasets with blank or null values.

* Overwriting of the values of the `dataIndex` property of the x-axis labels, on scrolling, has been fixed.

* Previously, the data index values were overwritten every time the `dataLabelRollOver` event was triggered.

* Page scrolling issues in touch devices using the IE11 browser, when the chart is swiped or scrolled, have been fixed.

* The client-side batch export feature is now working as expected.

* Previously, attempts to batch export on the client-side threw a JS error.

* Duplication of menu items in the export menu, when multiple charts are rendered on the same page, has been fixed.

* The export callback function is now working as expected.

* JS error thrown by a chart when a hidden container that holds a FusionCharts instance is deleted has been fixed.

* The `toolbarButtonScale` attribute is now working as expected.

* Previously, the size of the toolbar button decreased even when the attribute was assigned a higher value.

* Issues with rendering charts within tooltips have been fixed.

* Issues with finding the container DOM element, if a chart is rendered in a container without an ID, have been fixed.

* In the select scatter chart, data points of a hidden data set are no longer selected.

* Multi-series charts no longer throw a JS error when updated without any data in the dataset.

* Pie and doughnut charts no longer throw a JS error when drilled-down.

* In pie and doughnut charts, multiple invocation of the `dataPlotClick` event, when a pie slice was sliced and when `enableMultiSlicing=0`, has been fixed.

* When multi-slicing is disabled, when one slice is sliced out, the previously sliced out slice is sliced in. Previously, the `dataPlotClick` event was triggered for both these slices, instead of for just the one being sliced out.

* The pie and doughnut charts no longer throw a JS error when updated with all data values set to 0.

* In non-XY charts, category labels are now rendered even when the attribute 'x' is defined from the 'category' object.

* Additional white space rendered in XY charts, when the x-axis is reversed, has been removed.

* Previously, under this instance, the category labels were not shown.

* Data plot label cropping in the Bubble chart has been fixed.

* In the zoom line chart, rendering issues encountered when `allowPinMode=0` have been fixed.

* Previously, when `allowPinMode=0` the zoom line chart threw a JS error and the scroll bar wasn't drawn.

* In the zoom-line chart, behavioral issues encountered when the pinned area is dragged multiple times have been fixed.

* Previously, after being dragged twice, the tracker rectangle was seen to be automatically moving around on the chart.

* In the zoom-line chart, issues related to the zoom out feature, when the `displayStartIndex` and `displayEndIndex` attributes are set using the `setChartAttributes()` method, have been fixed.

* Duplication of the tracker rectangle, when the zoomline chart is resized, has been fixed.

* When the zoomline chart is viewed in the pinned mode, the tracker rectangle pins the selected data points. The tracker rectangle can then be dragged along the chart to compare the pinned data points with the rest of the data points.

* Previously, when the zoomline chart (in the pinned mode) was resized, a duplicate instance of this tracker rectangle was created, which has now been fixed.

* Discrepancies in the assignment of a specific color to a specific state of the pin mode button have been fixed.

* In zoom-line charts with a large amount of data, label overlapping seen upon zooming the chart has been fixed.

* Previously, for a large amount of data, while the initial visualization was rendering okay but labels overlapped upon zooming.

* JS error encountered on data plot hover, when the zoom-scatter chart is rendered in IE9 and above browsers, has been fixed.

* In the zoom-scatter chart, tooltips are now rendered for the trend lines and vertical trend lines, as expected.

* Tooltip positioning issues, when the zoom scatter chart is rendered in IE 9+, have been fixed.

* Previously, when the zoom scatter chart was rendered in IE 9+, the tooltip was not rendered alongside the data plot upon which the mouse pointer was hovered. Instead, it was rendered in the top-left corner of the chart.

* Category label displacement in the Marimekko chart has been fixed.

* In the scroll combination 2D dual y-axis chart, the zero plane is now rendered as expected.

* Previously, when `parentYAxis=P`, the zero plane overlapped the data plots.

* The angular gauge can now be rendered even if the initial value is not specified.

* Previously, in the absence of an initial value, the angular gauge failed to render, returning a JS error.

* The `refreshInterval` attribute in the real-time angular and horizontal linear gauges is now working as expected.

    * It has been fixed to ensure that data updates in the real-time angular and horizontal linear gauges are now triggered according to the value set for the attribute.

    * Previously, the updates were triggered immediately on render, even when `refreshInterval > 0`.

    * Previously, the attribute also did not work when the real-time data value crossed the specified upper limit of the gauge scale.

    * To fix this, the upper limit of the angular and horizontal linear gauges has been configured to update dynamically to accommodate all the real-time values.

* In the angular gauge, the values of the `upperLimitDisplay` and `lowerLimitDisplay` attributes are no longer truncated.

* Previously, in spite of sufficient space being available to display these values, the values were truncated.

* In the horizontal linear gauge, issues related to the rendering of the axis line have been fixed.

* For real-time charts, the `showRTMenuItem` attribute is now working as expected.

* In the real-time column chart, rendering issues with the category labels have been fixed.

* Previously, the category labels disappeared when `labelStep > 1`.

* In the multi-level pie chart, new chart data passed using the `setJSONData` method now successfully overwrites the previous data.

* Previously, the `setJSONData` method caused the new chart data to overlap the previous chart data, instead of replacing it entirely.

* Category label displacement in the Candlestick and drag-node charts has been fixed.

* In the Candlestick chart, rendering issues encountered when the low value of a data plot is set to 0 have been fixed.

* In maps, when the entity value is set to 0, tooltips no longer show the entity value as undefined; the entity value in the tooltip is shown as 0.

