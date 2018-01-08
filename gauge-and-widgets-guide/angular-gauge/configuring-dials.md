---
permalink: gauge-and-widgets-guide/angular-gauge/configuring-dials.html
title: Configuring Dials | FusionCharts
description: With respect to dials, this section talks about configuring the border, background, radius, extension, base width, top width, hover effect, dial values.
heading: Configuring Dials
chartPresent: true
---

FusionCharts Suite XT allows you to configure dials in angular gauges for several cosmetic and functional properties.

In this section, with respect to dials, we will see how to:

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#configuring-the-border-and-background-of-the-dial" class="smoth-scroll">Configure the border and background</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#configuring-the-radius-and-rear-extension" class="smoth-scroll">Configure the radius and rear extension</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#configuring-the-base-width-and-the-top-width" class="smoth-scroll">Configure the base width and top width</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#configuring-hover-effects" class="smoth-scroll">Configure the hover effect</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#adding-custom-tool-text-for-the-dial" class="smoth-scroll">Add custom tool text</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#adding-multiple-dials-on-the-gauge" class="smoth-scroll">Add multiple dials on the chart</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#customizing-dial-values" class="smoth-scroll">Customize dial values</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/configuring-dials#updating-dials-using-id" class="smoth-scroll">Update dials using their ID</a>

## Configuring the Border and Background of the Dial

### Configuring Border

An angular chart with the border of the dial configured looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-1.js %}

Given below is a brief description of the attributes used to configure the borders of a dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`borderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the dial border, e.g. #cca3def.</td>
  </tr>
  <tr>
    <td>`borderThickness`</td>
    <td>It is used to specify the thickness, in pixels, of the dial border, e.g. 10.</td>
  </tr>
  <tr>
    <td>`borderAlpha`</td>
    <td>It is used to specify the transparency of the border alpha for the dial. The possible range of values is 0 to 100. Setting it to 0 will make the border completely transparent and 100 will make it completely opaque. Additionally you can configure the dial to show/hide border through this attribute.</td>
  </tr>
</table>


### Configuring Background

An angular gauge rendered with the background of the dial filled with a single color looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-2.js %}

Given below is a brief description of the attributes used to fill the dial background with a single color:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>It is used to specify the hex code of the color that will be used to fill the background for the dial. This attribute can take as value a single color (e.g. #CCCCCC) to render a solid-fill background or a comma-separated list of colors (e.g. #666666, #FFFFFF, #000000) to render a gradient-fill background.</td>
  </tr>
</table>


An angular gauge rendered with a gradient-fill background configured for the dial looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-3.js %}


## Configuring the Radius and Rear Extension

By default, the radius of the dial is configured by the gauge automatically. However, you can opt to explicitly specify the radius for the dial as well as the rear extension (extension on the opposite side) to achieve a more realistic look for the gauge.

An angular gauge configured for the radius and rear extension of the dial looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-4.js %}

Given below is a brief description of the attributes used to configure the radius and rear extension of the dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`radius`</td>
    <td>It is used to specify the radius for the dial, in pixels.</td>
  </tr>
  <tr>
    <td>`rearExtension`</td>
    <td>It is used to specify the distance, in pixels, by which the dial will extend beyond the pivot, in the opposite direction. </td>
  </tr>
</table>


## Configuring the Base Width and the Top Width

Increasing the base and top width of a dial will increase the thickness of the base and the top, thus allowing you to have different dial shapes that suit your design requirements.

An angular gauge with the base and top width configured for the dial looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-5.js %}

Given below is a brief description of the attributes used to configure the base and top width for the dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`baseWidth`</td>
    <td>It is used to specify the width, in pixels, of the bottom of the dial (the part connected to the pivot), e.g. 10</td>
  </tr>
  <tr>
    <td>`topWidth`</td>
    <td>It is used to specify the width, in pixels, of the top of the dial, e.g. 5</td>
  </tr>
</table>


## Configuring Hover Effects

You can use hover effects to improve the visual representation of your gauge. Using hover effects, you can change the cosmetics of your dial when the mouse pointer is hovered over it.

An angular gauge with the dial configured for the hover effect looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-6.js %}

Given below is a brief description of the attributes used to configure the hover effect for the dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be configured for the gauge elements. Setting this attribute to 1 enables the hover effects, setting it to 0 (default) disables them. This attribute belongs to the `chart` object and hence is global.</td>
  </tr>
  <tr>
    <td>`bgHoverColor`</td>
    <td>It specifies the hex code for the color that will be used to render the dial when the mouse pointer is hovered over it, e.g. #444444</td>
  </tr>
  <tr>
    <td>`bgHoverAlpha`</td>
    <td>It specifies the transparency for the dial when the mouse pointer is hovered over it, e.g. 50</td>
  </tr>
  <tr>
    <td>`borderHoverColor`</td>
    <td>It specifies the hex code for the color that will be used to render the border of the dial when the mouse pointer is hovered over it, e.g. #333333.</td>
  </tr>
  <tr>
    <td>`borderHoverAlpha`</td>
    <td>It specifies the transparency for the border of the dial when the mouse pointer is hovered over it, e.g. 30</td>
  </tr>
  <tr>
    <td>`borderHoverThickness`</td>
    <td>It specifies the thickness for the border of the dial when the mouse pointer is hovered over it, e.g. 5</td>
  </tr>
</table>


## Adding Custom Tool-text for the Dial

An angular gauge rendered with the tool-tip text configured for the dial looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-7.js %}

Given below is a brief description of the attribute used to configure the tool-text for the dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`tooltext`</td>
    <td>It is used to specify the text that will be rendered as the tool-tip when the mouse pointer is hovered over the dial. </td>
  </tr>
</table>


The method for adding a tool-text used in the above gauge will work when the gauge does not receive real-time updates. In case of real-time updates, the data value will change at specific intervals of time and, therefore, the tool-tip text should be updated accordingly.

This can be achieved using macros.

An angular gauge configured to update the tool-tip text for the dial in real-time looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-8.js %}


The above sample replaces the hard-coded value with the macro `$value`. Now, whenever someone will roll-over the dial, the current value of the dial will be displayed along with the text set in the tooltext attribute of dial element.

For the complete understanding of the tooltip macros or a detail list of available macros please refer to [this](/configuring-your-chart-basic/tooltip-macros/introduction-to-tooltip-macros) document.





## Adding Multiple Dials on the Gauge

You can add any number of dials to an angular gauge, with each dial configured to have its own value and individual properties.

An angular gauge rendered with two dials looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-9.js %}

To create multiple dials, you only have to create multiple `dial` objects; as many the number of dials you want, as many the number of the `dial` objects you create. The attributes to configure the functional and cosmetic properties for each dial will be initialized separately in each object instance.



## Customizing Dial Values

Along with configuring the appearance of the dial, you can also show/hide dial values and configure their placement.

An angular gauge rendered with two dials, with dial values customized, looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-configuring-dials-example-10.js %}

Given below is a brief description of the attributes used to configure dial values:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValue`</td>
    <td>It is used to specify whether the value of the dial will be shown or hidden. Setting this attribute to 0 will hide the value, setting it to 1 (default) will show it. This attribute belongs to the `dial` object, which in turn belongs to the `dials` object.</td>
  </tr>
  <tr>
    <td>`valueX`</td>
    <td>It is used to specify the x-position of the value text-field, e.g. 260. This attribute belongs to the `dial` object, which in turn belongs to the `dials` object.</td>
  </tr>
  <tr>
    <td>`valueY`</td>
    <td>It is used to specify the y-position of the value text-field, e.g. 220. This attribute belongs to the `dial` object, which in turn belongs to the `dials` object.</td>
  </tr>
  <tr>
    <td>`valueFont`</td>
    <td>It is used to specify the font-family to be used to render the values on the gauge, e.g. Arial.</td>
  </tr>
  <tr>
    <td>`valueFontColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the value, e.g. #CCCCCC.</td>
  </tr>
  <tr>
    <td>`valueFontSize`</td>
    <td>It is used to specify the font size for the value. This attribute takes values between 0 and 72, e.g. 50.</td>
  </tr>
  <tr>
    <td>`valueFontBold`</td>
    <td>It is used to specify whether bold formatting should be applied to the value. Setting this attribute to 1 enables bold formatting, setting it to 0 (default) disables it.</td>
  </tr>
  <tr>
    <td>`valueFontItalic`</td>
    <td>It is used to specify whether the value should be italicized. Setting this attribute to 1 enables the value to be italicized, setting it to 0 (default) disables it.</td>
  </tr>
  <tr>
    <td>`valueBgColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render the background of the value., e.g. #555555</td>
  </tr>
  <tr>
    <td>`valueBorderColor`</td>
    <td>It is used to specify the hex code for the color that will be used to render a border around the value text, e.g. #444444.</td>
  </tr>
  <tr>
    <td>`valueAlpha`</td>
    <td>It is used to specify the transparency of the value.</td>
  </tr>
  <tr>
    <td>`valueFontAlpha`</td>
    <td>It is used to specify the transparency of the font used for the value.</td>
  </tr>
  <tr>
    <td>`valueBgAlpha`</td>
    <td>It is used to specify the transparency for the value background, e.g. 50</td>
  </tr>
  <tr>
    <td>`valueBorderAlpha`</td>
    <td>It is used to specify the transparency for the value border, e,g. 60.</td>
  </tr>
  <tr>
    <td>`valueBorderThickness`</td>
    <td>It is used to specify the thickness, in pixels, for the value border.</td>
  </tr>
  <tr>
    <td>`valueBorderRadius`</td>
    <td>It is used to specify the radius, in pixels, for the value border.</td>
  </tr>
  <tr>
    <td>`valueBorderDashed`</td>
    <td>It is used to specify whether the border around the value will be rendered using dashed lines. Setting this attribute to 1 will render the border using dashed lines, setting it to 0 (default) will render it in whole lines.</td>
  </tr>
  <tr>
    <td>`valueBorderDashGap`</td>
    <td>It is used to specify the length, in pixels, of each dash if the value border is rendered using dashed lines.</td>
  </tr>
  <tr>
    <td>`valueBorderDashLen`</td>
    <td>It is used to specify the gap between each dash, in pixels, if the value border is rendered using dashed lines.</td>
  </tr>
</table>


## Updating Dials using ID

When angular gauges with multiple dials are used in real-time applications, it becomes very important that the each dial is updated with the correct value. To help identify each dial correctly, a unique ID is configured for each dial on the gauge.

Given below is a brief description of the attribute used to configure an ID for teach dial:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`id`</td>
    <td>It is used to specify a unique identification for a dial on the gauge, e.g. Dial 1. This attribute belongs to the `dial` object, which in turn belongs to the `dials` object.</td>
  </tr>
</table>


<p class="text-info">To learn how to create real-time angular gauges please refer to (/gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges) section.</p>