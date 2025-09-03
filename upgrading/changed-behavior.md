---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

<h2>Overview</h2>

FusionCharts v4.2.0 introduces a range of new features and enhancements designed to improve functionality, accessibility, and security. Some of these updates may change existing behaviors within the platform. Please review the details below to understand how these adjustments might impact your workflows.

<h4>The `ignoredepthforlineplots` Attribute </h4>

- **Summary:** FusionCharts implemented the `ignoredepthforlineplots` attribute to prevent inconsistencies when displaying plotted values. 
- **Impact:** This issue affected the `mscolumn3dlinedy` and `stackedcolumn3dlinedy` chart types. The problem arose when switching from a 3D to a 2D line.
- **Example:**
  - **Before:** The line plot’s data value was not correctly aligned with the y-axis for the same value.
  - **After:** For both graphs, the plot’s value matches the axis value on 3D and 2D lines. 
    
<h4>Inverse Y-axis on Scatter and Bubble Charts </h4>

- **Summary:** FusionCharts now supports inverting the Y-axis on Scatter and Bubble Charts. This facilitates users in spotting trends or patterns from a different perspective.
- **Impact:** Users can now more easily control how data is displayed, especially for datasets with descending values or negative/positive axes.
- **What to Check:** Test both axes for your graphics; this way, you can see which one is preferable for displaying the information and data corresponding to your project.
    
<h4>Enhancements and Improved Performance for Maps</h4>

- **Summary:** FusionCharts 4.2 enhanced the performance in Maps, focusing on Color Range and hover effects.
- **Impact:** Maps display more accurate color ranges and consistent hover interactions, improving both data visualization and interactivity.
- **What to Check:** Verify that maps correctly apply configured Color Ranges and that markers respond properly to hover effects, even when multiple markers are close together. 
    
<h4>Feedback and Support</h4>

If you encounter any unexpected behavior or have questions about these changes, please reach out to our support team or visit the FusionCharts [support page](https://www.fusioncharts.com/contact-support).

For additional details, kindly refer to our [Changelog](https://www.fusioncharts.com/dev/upgrading/change-log/), [What’s New page](https://www.fusioncharts.com/dev/upgrading/whats-new), and our [release blog post](https://www.fusioncharts.com/blog/announcing-fusioncharts-v4-1-elevate-your-data-visualization-experience).
