---
permalink: chart-guide/treemap/tilling-algorithm-for-the-treemap.html
title: Tiling Algorithm for the Treemap | FusionCharts
description: In tree map, tiling is a process of dividing large rectangles into smaller sub-rectangles with an aspect ratio which depends in the algorithm you choose
heading: Tiling Algorithm for the Treemap
chartPresent: true
---

Tiling is the process of dividing large rectangles into smaller sub-rectangles. Ideally, a treemap tiling algorithm creates rectangles with an aspect ratio that is close to one, with ordering based on the underlying data/information tree.

The tiling algorithm affects how the larger rectangles are divided into smaller sub-rectangles, thus affecting how the chart looks like. FusionCharts supports the following two algorithms:

* <a href="/chart-guide/treemap/tilling-algorithm-for-the-treemap#the-squarified-algorithm" class="smoth-scroll">Squarified</a>
* <a href="/chart-guide/treemap/tilling-algorithm-for-the-treemap#slice-and-dice-algorithm" class="smoth-scroll">Slice and dice</a>


## The Squarified Algorithm

The squarified algorithm for the treemap is visually appealing in part because the nodes are closer to `square` shapes, but this algorithm comes at the cost of unordered nodes. Squarified algorithm for treemap is preferred over slice and dice algorithm because of `low aspect ratio`, which helps in comparing the sub-nodes very easily.

The chart below is rendered using the __squarified__ algorithm, which is the default tiling algorithm:

<p class="text-info"> Click the rectangles in each chart to traverse through the chart and see how the chart view changes. </p>

{% embed_all chart-guide-treemap-chart-setting-tiling-algorithm-example-1.js %}

This treemap compares the top selling car manufacturers in Europe in the present year with their performance in the previous year.

Given below is a brief description of the attribute used to set the algorithm:

<table>
    <tr>
        <th> Attribute Name </th>
        <th> Description </th>
    </tr>
    <tr>
        <td> `algorithm` </td>
        <td> Takes `squarified` (default) or `sliceanddice` as values to set the tiling algorithm. </td>
    </tr>
</table>


## Slice and Dice Algorithm

In a treemap, the slice and dice tiling algorithm is one of the simplest algorithm. This algorithm has one of the most desirable properties like stability and preserved ordering. Despite all these properties this algorithm is not used over others because of its `high aspect ratio` where the treemap ends being drawn as thin rectangles, which are difficult to compare.

In FusionCharts Suite XT we support three modes of slicing:

* <a href="/chart-guide/treemap/tilling-algorithm-for-the-treemap#vertical-mode" class="smoth-scroll">Vertical</a>
* <a href="/chart-guide/treemap/tilling-algorithm-for-the-treemap#horizontal-mode" class="smoth-scroll">Horizontal</a>
* <a href="/chart-guide/treemap/tilling-algorithm-for-the-treemap#alternate-mode" class="smoth-scroll">Alternate (default)</a>


#### Vertical Mode

In the treemap you can set the mode of slicing the nodes. In the vertical mode of slicing  all nodes in the 1st level are sliced vertically, but their child nodes are sliced horizontally. The chart below is rendered using `vertical` mode of slicing where the nodes of the manufacturers (say Toyota Group, BMW Group) are sliced vertically, but their child nodes are sliced horizontally.

The chart below is rendered using `vertical` mode of slicing : 

{% embed_all chart-guide-treemap-chart-setting-tiling-algorithm-example-2.js %}


#### Horizontal Mode

Horizontal mode of slicing is the reverse of vertical mode where all nodes in the 1st level are sliced horizontally, but their child nodes are sliced vertically. When you set slicing mode to `horizontal`, the chart looks as shown in the image below : 

![Slice and dice Horizontal Mode](/assets/images/chart-guide-treemap-setting-tiling-algorithm-image-2.jpg)


#### Alternate Mode

In the alternate mode of slicing, as the name implies, the direction in which the nodes are sliced alternates between vertical and horizontal. When you set slicing mode to `alternate`, the chart looks as shown in the image below:

![Slice and dice Alternate Mode](/assets/images/chart-guide-treemap-setting-tiling-algorithm-image-1.jpg)


Given below is a brief description of the attribute used to set the algorithm:

<table>
    <tr>
        <th> Attribute Name </th>
        <th> Description </th>
    </tr>
    <tr>
        <td> algorithm </td>
        <td> Takes squarified (default) or sliceanddice as values to set the tiling algorithm </td>
    </tr>
    <tr>
        <td> slicingMode </td>
        <td> If you opt to choose `sliceanddice` algorithm, using `slicingMode` you can set different views for your chart. Given below is a brief description for the modes : <br> `vertical` : In this mode all the nodes in the nth level is sliced vertically and the n+1 th level is sliced horizontally, starts with level 1. <br> `horizontal` : In this mode all the nodes in the nth level is sliced horizontally and the n+1 th level is sliced vertically, starts with level 1 <br> `alternate` : In this mode, rectangles are sliced alternatively in the same level.</td>
    </tr>
</table>

Click [here](/chart-attributes?chart=treemap){:target=’_blank’} for the complete list of attributes supported by the treemap.