---
title: Configure Color Range | FusionCharts
description: This section talks about the color range used by the charts to represent a range of data values.
heading: Configure Color Range
---

FusionCharts comes along with some specialized chart types, gauges and all maps, which uses color to represent a range of data values. For example, in a heat map chart measuring the level of weekly attendance of a company, you can define colors red, yellow, blue and green to determine bad, average, good and excellent percentage of employee attendance respectively. When the chart is rendered the four levels can be easily distinguished by their respective colors. 

Similarly, in the case of maps, while showing the average population growth across the continents of the world, you can distinguish the continents using different color codes based on the range of values for each continent.

Color Range is applicable for:

* Gauges like:

    * Angular

    * Bulb

    * Linear

    * Bullet

    * LED

* Heat Map chart

* All maps

Let's understand the usage of color range for each of the above. 

To understand the color range let's take simple examples of an Angular Gauge, a Heat Map and a World Map showcasing the following:

* __Angular Gauge__ -  Number of customer complaints. 

* __Heat Map__ - Average Temperature in Fahrenheit for 4 cities of the US.

* __World Map__ - Average Population Growth across continents

The color range set for the three is shown in the table below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 50 - Green</td>
		<td>0 - 50 - Green</td>
		<td>0.5M - 1M - Green</td>
	</tr>
	<tr>
		<td>50 - 75 - Yellow</td>
		<td>50 - 70 - Yellow</td>
		<td>1M - 2M - Yellow</td>
	</tr>
	<tr>
		<td>75 - 100 - Red</td>
		<td>70 - 85 - Red</td>
		<td>2M - 3M - Red</td>
	</tr>
</table>

{% embed_chart chart-configurations-color-range-example-1.js %}

In this scenario, the values will appear in the following color:

* __Angular Gauge__ -  Any value below 50 will appear in Green. Similarly, any value below 75 but greater than equal to 50 will appear as yellow and the value 75 will appear in Red.

* __Heat Map__ - The value 50 will appear in the color yellow and not in Green since the upper limit is exclusive for any range and the lower limit is inclusive for any range. Any value below 50 will appear in Green. Similarly, any value below 70 will appear as yellow and the value 70 will appear in Red.

* __World Map__ - The value 1 Million will appear in the color Yellow and not in Green since the upper limit is exclusive for any range and the lower limit is inclusive for any range. Any value below 1 Million will appear in Green. Similarly, any value below 2 Million will appear as yellow and the values 2 Million and above will appear in Red.

Please note, there are values which are equal to upper limit of one color and the lower limit of the other. The value 50 will appear in the color yellow and not in red since the upper limit is exclusive for any range and the lower limit is inclusive for any range.

Similarly, there can be different situations where the range of values is set in a manner that they partially or completely overlap in two ranges or the value does not belong to any range. Let's discuss some of these special cases and see how the gauges will behave for such examples.

## Two range partially overlap

Let's take the same examples and see what happens when two range partially overlaps. For instance, the color range is defined as shown below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 50 - Green</td>
		<td>0 - 50 - Green</td>
		<td>0.5M - 1M - Green</td>
	</tr>
	<tr>
		<td>43 - 75 - Yellow</td>
		<td>43 - 70 - Yellow</td>
		<td>0.7M - 2M - Yellow</td>
	</tr>
	<tr>
		<td>75 - 100 - Red</td>
		<td>70 - 85 - Red</td>
		<td>2M - 3M - Red</td>
	</tr>
</table>

The charts will look like as shown below:

{% embed_chart chart-configurations-color-range-example-2.js %}

In this scenario, the values will appear in the following color:

* __Angular Gauge__ - The values 43 to 49 are overlapping the color Green and Yellow. In this scenario, values from 0-49 will appear as Green. Values from 50-74 will appear in Yellow and values from 75-100 will appear as Red.

* __Heat Map__ - The values 43 to 49 are overlapping the color Green and Yellow. In this scenario, values from 0-49 will appear as Green. Values from 50-69 will appear in Yellow and values from 70-85 will appear as Red.

* __World Map__ - The values from 0.7M to 0.9M are overlapping the color Green and Yellow. In this scenario, values from 0.5M - 0.9M will appear as Green. Values from 1M - 1.9M will appear in Yellow and values from 2M - 3M will appear as Red.

## Two range completely Overlap

Now, let's take the same examples and see what happens when two range completely overlaps. For instance, the color range is defined as shown below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 75 - Green</td>
		<td>0 - 70 - Green</td>
		<td>0.5M - 2M - Green</td>
	</tr>
	<tr>
		<td>43 - 74 - Yellow</td>
		<td>43 - 69 - Yellow</td>
		<td>0.8M - 1.9M - Yellow</td>
	</tr>
	<tr>
		<td>75 - 100 - Red</td>
		<td>70 - 85 - Red</td>
		<td>2M - 3M - Red</td>
	</tr>
</table>

{% embed_chart chart-configurations-color-range-example-3.js %}

In this scenario, the values will appear in the following color:

* __Angular Gauge__ - The values 0-75 completely overlap the two range for the color Green and Yellow. In this scenario, any values from 0-74 will appear in Green and any values from 75-100 will appear as Red.

* __Heat Map__ - The values 0-70 are overlapping the color Green and Yellow. In this scenario, values from 0-69 will appear as Green and any values from values from 70-85 will appear as Red.

* __World Map__ - The values from 0.7M to 0.9M are overlapping the color Green and Yellow. In this scenario, values from 0.5M - 1.9M will appear as Green and values from 2M - 3M will appear as Red.

## Same max value of two range 

Now let's check what happens if two range has the same max value. For instance, the color range is defined as shown below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 75 - Green</td>
		<td>0 - 70 - Green</td>
		<td>0.5M - 2M - Green</td>
	</tr>
	<tr>
		<td>50 - 75 - Yellow</td>
		<td>50 - 70 - Yellow</td>
		<td>1M - 2M - Yellow</td>
	</tr>
	<tr>
		<td>76 - 100 - Red</td>
		<td>71 - 85 - Red</td>
		<td>2.1M - 3M - Red</td>
	</tr>
</table>

{% embed_chart chart-configurations-color-range-example-4.js %}

In this scenario, the values will appear in the following color:

* __Angular Gauge__ - The value 75 is the same for both Green and Yellow. Here, the value 75 will appear in Yellow.

* __Heat Map__ - The value 70 is the same for both Green and Yellow. Here, the value 70 will appear in Yellow.

* __World Map__ - The value 2M is the same for both Green and Yellow. Here, the value 2M will appear in Yellow.

## Same min value of two range

Now let's check what happens if two range has the same minimum value. For instance, the color range is defined as shown below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 50 - Green</td>
		<td>0 - 50 - Green</td>
		<td>0.5M - 1M - Green</td>
	</tr>
	<tr>
		<td>0 - 75 - Yellow</td>
		<td>0 - 70 - Yellow</td>
		<td>0.5M - 2M - Yellow</td>
	</tr>
	<tr>
		<td>75 - 100 - Red</td>
		<td>70 - 85 - Red</td>
		<td>2M - 3M - Red</td>
	</tr>
</table>

{% embed_chart chart-configurations-color-range-example-5.js %}

In this scenario, the values will appear in the following color:

* __Angular Gauge__ - The value 0 is the same for both Green and Yellow. Here, the value 0 will appear in red.

* __Heat Map__ - The value 0 is the same for both Green and Yellow. Here, the value 0 will appear in green.

* __World Map__ - The value 0.5M is the same for both Green and Yellow. Here, the value 0.5M will appear in green.

## Values not belonging to any range

Now let's check what happens if there is a value which does not belong to any of the range. For instance, the color range is defined as shown below:

<table>
	<tr>
		<th>Angular Gauge</th>
		<th>Heat Map</th>
		<th>World Map</th>
	</tr>
	<tr>
		<td>0 - 50 - Green</td>
		<td>0 - 50 - Green</td>
		<td>0.5M - 1M - Green</td>
	</tr>
	<tr>
		<td>53 - 75 - Yellow</td>
		<td>53 - 70 - Yellow</td>
		<td>1.2M - 2M - Yellow</td>
	</tr>
	<tr>
		<td>75 - 100 - Red</td>
		<td>70 - 85 - Red</td>
		<td>2M - 3M - Red</td>
	</tr>
</table>

{% embed_chart chart-configurations-color-range-example-6.js %}

In this scenario, the values will appear in the following color:

* Angular Gauge - There are two values 51 and 52 which are not mapped to any color. In this scenario, these values will appear as per the color of the previous range, which in this case is Green. In case the value is less than the minimum value (suppose minus 10), then it will take the color of the first range which is Red.

* __Heat Map__ - There are values from 51 and 52 which are not mapped to any color. In this scenario, these values will not be mapped with any color code. This is because in a heat map you cannot assume any color for the values which are not residing in the range of values.

* __World Map__ - There are values from 1.1M - 1.2M which are not mapped to any color. In this scenario, these values will not be mapped with any color code. This is because in maps you cannot assume any color for the values which are not residing in the range of values.