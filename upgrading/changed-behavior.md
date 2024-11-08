---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

<h2>Overview</h2>

FusionCharts v4.1 introduces a range of new features and enhancements designed to improve functionality, accessibility, and security. Some of these updates may change existing behaviors within the platform. Please review the details below to understand how these adjustments might impact your workflows.

<h4>Content Security Policy (CSP) Compatibility</h4>

- **Summary:** FusionCharts now includes Content Security Policy (CSP) Compatibility to protect applications from content injection attacks.
- **Impact:** Users who previously did not implement CSP may now notice stricter enforcement of secure content handling. Certain scripts or inline styles may be blocked if they don’t meet CSP requirements.
- **What to Check:** Ensure that your application adheres to the `style-src` and `require-trusted-types-for 'script'` policies, as these are now actively enforced within FusionCharts.

- **Example:**
  - **Before:** Inline styling or scripts may have been applied directly without restriction.
  - **After:** Inline styling must comply with the new CSP requirements, and some scripts may require adjustment to avoid conflicts.
    
<h4>Licensing and Device Compatibility Enhancements</h4>

- **Summary:** Licensing concerns have been streamlined, ensuring seamless chart access across multiple devices.
- **Impact:** Users should experience uninterrupted access to FusionCharts visualizations across all devices (e.g., laptops, tablets, and smartphones), removing prior licensing interruptions.
- **What to Check:** Test charts on various devices to verify seamless display, especially in client-facing environments.

- **Example:**
  - **Before:** Potential for interruptions in licensing when switching between devices.
  - **After:** Continuous access across devices without additional licensing prompts.
    
<h4>Improved Compatibility with React Native</h4>

- **Summary:** Enhanced support for `React Native` and updates to `Embe`r dependencies make it easier to integrate FusionCharts into mobile applications built with `React Native`.
- **Impact:** Users previously encountering compatibility issues with `React Native` should experience smoother chart integrations. This may affect workflows that require custom adjustments or workarounds.
- **What to Check:** Verify that existing`React Native` integrations continue to function as expected with the updated library and Ember version.

- **Example:**
  - **Before:** Limited compatibility, requiring workarounds for certain chart functionalities.
  - **After:** Direct compatibility, reducing the need for custom code adjustments.
    
<h4>New Scrollbar Feature for Waterfall Charts</h4>

- **Summary:** FusionCharts v4.1 introduces a scrollbar feature specifically for `Waterfall` charts.
- **Impact:** Users working with extensive datasets in `Waterfall` charts can now navigate the data more easily. This may alter how charts are displayed if previously configured to show all data points by default.
- **What to Check:** Test `Waterfall` charts with large datasets to ensure that the scrollbar feature behaves as desired.

- **Example:**
  - **Before:** Full dataset displayed without a scrolling option, potentially cluttering the view.
  - **After:** A scrollbar allows for cleaner, more manageable navigation of large datasets.
    
<h4>Enhanced Accessibility for Visualizations</h4>

- **Summary:** Accessibility improvements have been made to all FusionCharts visualizations.
- **Impact:** The new accessibility features improve user interaction across different abilities, aligning with inclusive design standards. Users might observe modifications in chart elements to support screen readers or keyboard navigation.
- **What to Check:** Review accessibility settings, especially if using custom elements or modified charts.

- **Example:**
  - **Before:** Limited support for assistive technologies, potentially restricting usability for some audiences.
  - **After:** Full support for screen readers and accessible navigation, enhancing inclusivity.
 
<h4>Custom Aggregation Assistance</h4>

- **Summary:** A new feature to simplify complex data management by supporting custom aggregation.
- **Impact:** For users who previously created custom aggregation methods, this functionality offers built-in support, potentially replacing custom solutions.
- **What to Check:** Test aggregation behavior in dashboards or reports to ensure consistent output.

- **Example:**
  - **Before:** Custom aggregation logic required manual handling of data aggregation.
  - **After:** Built-in aggregation options streamline setup, allowing for standardized data handling.
    
<h4>Enhanced Tooltip Accuracy</h4>

- **Summary:** Tooltips are now more accurate, providing precise data markers and placement.
- **Impact:** Tooltip content should appear more reliably in alignment with data points, which may shift tooltip positioning or alter hover responses in existing charts.
- **What to Check:** Review tooltips in complex or densely populated charts to verify accuracy.

- **Example:**
  - **Before:** Tooltips might have had minor misalignment or less accuracy.
  - **After:** Tooltips align more precisely with data markers, ensuring an accurate representation of values.
 
<h4>Visual Consistency Enhancements</h4>

- **Summary:** Legend icons are synchronized, and customizable scrollbar features enhance the visual consistency of charts.
- **Impact:** Users may notice that legend icons and scrollbars now offer a unified appearance across different charts, improving design uniformity.
- **What to Check:** Ensure that your charts' legend and scrollbar settings align with your desired aesthetic and functional expectations.

- **Example:**
  - **Before:** Slight discrepancies in legend icon size or scrollbar appearance across charts.
  - **After:** Consistent legend icon sizing and customizable scrollbars provide a cohesive look.
    
<h4>Feedback and Support</h4>

If you encounter any unexpected behavior or have questions about these changes, please reach out to our support team or visit the FusionCharts support page.

For additional details, kindly refer to our [Changelog](https://www.fusioncharts.com/dev/upgrading/change-log/), [What’s New page](https://www.fusioncharts.com/dev/upgrading/whats-new), and our [release blog post](https://www.fusioncharts.com//blog/fusioncharts-4-0-elevate-your-data-visualization-new-capabilities).
