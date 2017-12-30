---
permalink: map-guide/customizing-your-map.html
title: Customizing Your Map | FusionCharts
description: This section talks about customization of different map attributes, like showing full names, values or customizing labels, fonts, etc
heading: Customizing Your Map
chartPresent: true
---

Now that we know how to create a simple map (hyperlinks to the Simple Data Driven Map section) we will now look at customization of different map attributes. Below is a list of basic customizations possible for maps:

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#showing-full-names-in-map-labels">Showing full names in map labels</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#showing-values-in-labels">Showing values in labels</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#showing-labels-only-for-specific-entities">Showing labels only for specific entities</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#customizing-label-display-text">Customizing label display text</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#customising-fonts">Customizing fonts</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#using-short-names-in-tooltips">Using short names in tooltips</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#turning-off-entity-tooltips">Turning off entity tool-tips</a>

* <a href="{{ site.baseurl }}map-guide/customizing-your-map.html#turning-off-entity-tooltips">Handling null entities</a>

## Showing full names in map labels

FusionCharts Suite XT shows only the short names of the entities on the map by default. You can set the map to display the full name of the entity.

A map with its full entity names displayed looks like the chart below. Here each of the continents are entities and their full names are part of the label.

{% embed_chart map-guide-world-population.js %}

The attributes used to customize this behavior are

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showLabels`</td>
    <td>Set this to `1` (default) to show labels on the map or `0` to remove labels.</td>
  </tr>
  <tr>
    <td>`useSNameInLabels`</td>
    <td>Setting this to`1` (default) displays the short name of the entity. Set it to `0` to display full name.</td>
  </tr>
</table>


Given below is the data used to build the map

{% embed_data map-guide-world-population.js %}

## Showing values in labels

You can set the entity label to show data values. In the chart below, we have configured the labels to show the population value along with the continent short name.

{% embed_chart map-guide-world-population-legend-with-icons.js %}

The attributes used to enable showing data values in labels are as follows:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`includeValueInLabels`</td>
    <td>Set this attribute to `1` to display data values as part of the entity labels. The default value is `0`.</td>
  </tr>
  <tr>
    <td>`labelSepChar`</td>
    <td>Specifies the character that works as a separator for the data value from the label name. This character is prefixed to the data value in the label.</td>
  </tr>
</table>


Given below is the data used to build the map

{% embed_data map-guide-world-population-legend-with-icons.js %}

## Showing labels only for specific entities

Labels are shown for all entities by default. It is possible to display labels only for specific entities of interest. In the example below we display labels for two most populous continents.

{% embed_chart map-guide-world-population-legend-with-icons-asia-africa.js %}

Here only Asia and Africa have their labels displayed while the other continents have no display text set for labels.

The attribute to configure display of labels is as follows:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showLabel`</td>
    <td>Set this attribute to `1` to show a specific entity label, or to `0` otherwise. To control display for specific entities, this should be defined at an entity level.</td>
  </tr>
</table>


Given below is the data used to build the map

{% embed_data map-guide-world-population-legend-with-icons-asia-africa.js %}

## Customizing label display text

It is also possible to use a completely customizable text to display for each specific entity. In the chart below we configure the data label of each continent as sparse, moderate or dense based on the population density.

{% embed_chart map-guide-world-population-legend-with-icons-density.js %}

The attribute used to define the display text for labels is as follows:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`displayValue`</td>
    <td>Specifies the text to display as the entity label. </td>
  </tr>
</table>


The data used to build this map is given below

{% embed_data map-guide-world-population-legend-with-icons-density.js %}

## Customising fonts

You can customize font-related properties for each entity. In this example the font is set to __Helvetica__ and the size of the label name is proportional to the value of each entity.

{% embed_chart map-guide-world-population-legend-with-icons-custom-fonts.js %}

The attributes used for customizing label fonts are as follows:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`font`</td>
    <td>Specifies the font to be used in the entity</td>
  </tr>
  <tr>
    <td>`fontSize`</td>
    <td>Specifies the size of the font to be used with the entity</td>
  </tr>
  <tr>
    <td>`fontColor`</td>
    <td>Specifies the color of the font to be used with the entity</td>
  </tr>
  <tr>
    <td>`fontBold`</td>
    <td>Specifies if the label font will be bold formatted</td>
  </tr>
</table>


Given below is the data used to build the map

{% embed_data map-guide-world-population-legend-with-icons-custom-fonts.js %}

## Using short names in tooltips

Tooltips in maps show the full name of the entity along with the value by default. The tooltip can be configured to show only the short name. In the chart below, we have set the labels to show the entity full names and the tooltip shows the short name.

{% embed_chart map-guide-world-population-legend-with-icons-sname.js %}

The attribute used to customize tooltips is explained here

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`useSNameInToolTip`</td>
    <td>Set this to `1` to display the entity short name in tooltip. Set this to `0` (default) to show entity full name instead.</td>
  </tr>
</table>


Given below is the data used to build the map

{% embed_data map-guide-world-population-legend-with-icons-sname.js %}

## Turning off entity tooltips

In FusionCharts Suite XT, tooltips are on by default but can be turned off for entities. Tooltips have been removed for the chart below.

{% embed_chart map-guide-world-population-legend-with-icons-entitytooltip.js %}

The attribute to configure tooltip display behaviour is as follows:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`showEntityToolTip`</td>
    <td>Set this to `1` (default) to display tooltip on entity hover, set it to `0` otherwise. </td>
  </tr>
</table>


The data that is used to build this map is shown here

{% embed_data map-guide-world-population-legend-with-icons-entitytooltip.js %}

## Handling null entities

It is likely that all entities within a map don't have an associated value (or have a null value). Such entities can be customized by modifying the transparency, color and hover effects. The chart below shows a sales tracker across continents with some entities having a null value.

{% embed_chart map-guide-world-population-legend-with-icons-nullentity.js %}

The attributes used to configure null entities are mentioned below:

<table>
  <tr>
    <td>Attribute Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>`nullEntityColor`</td>
    <td>Specifies the color for null value entities. </td>
  </tr>
  <tr>
    <td>`nullEntityAlpha`</td>
    <td>Specifies the transparency of the entity. Value can be set between 0 (completely transparent) to 100 (opaque).</td>
  </tr>
  <tr>
    <td>`hoverOnNull`</td>
    <td>Set this to `1` to enable hover effects for null entities, or to `0` (default?) otherwise.</td>
  </tr>
</table>


The data for this chart is shown below

{% embed_data map-guide-world-population-legend-with-icons-nullentity.js %}

