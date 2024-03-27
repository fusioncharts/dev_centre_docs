---
permalink: api/tutorials/using-special-characters-in-a-chart.html
title: Using Special Characters | FusionCharts
description: Learn how to perfectly integrate special characters into your charts using our Developer Guide! Let us help you improve your visual analytics capabilities!
heading: Using Special Characters
chartPresent: true
layout: page
---

FusionCharts Suite supports all unicode characters as part of charts. You can use Multi Lingual text, Currency symbols as well as special characters as part of your charts.

In this section, you will be shown how to: 

* Use Multi Lingual Text
* Use Currency symbols
* Use Special Characters

## Using Multi Lingual Text

FusionCharts XT allows you to use `multi-lingual (UTF-8)` characters on the charts.

To use multi-lingual characters on the chart, you necessarily need to use UTF-8 encoded XML.

The XML file or stream requires a BOM stamp to be present as the very first three bytes of the file. Hence, one must remember the two basic thumb rules:

* __Data URL method__ - the XML file or stream should have the BOM stamp

* __Data String method__ - the HTML or application file containing the XML as well as the chart object should have the BOM stamp.

* __What is BOM__ - Byte Order Mark. It is ‘EF BB EF’ - these three bytes in case of UTF-8 encoded files, the BOM being placed at the very beginning of the file. It is an indicator that the file is contains UTF-8 encoded strings.

Shown here is a chart that uses arabic text

{% embed_chart using-special-characters-in-a-chart-example-1.js %}

{% embed_data using-special-characters-in-a-chart-example-1.js %}

FusionCharts XT supports only left-to-right languages as of now. It does not have native support for right-to-left languages like Hebrew. So, if you want to use Hebrew with FusionCharts XT, you will have to programmatically reverse the sequence of words/characters and then provide the same to FusionCharts XT

Do not rely on specifying the encoding setting, that is, in the XML header region. This does not add the Byte Order Mark (BOM) to the XML file.

## Using currency symbols

Currency symbols like the, £(Pound), €(Euro), ¥(Yen) etc., may also be a part of the data which is displayed on charts. To display these characters on a chart, you can simply include it in the XML/JSON data source of the chart. This is applicable in both Data URL and Data String methods.

Shown below is a chart that uses the Yen symbol as a currency formatter.

{% embed_chart using-special-characters-in-a-chart-example-2.js %}

{% embed_data using-special-characters-in-a-chart-example-2.js %}


When using the HTML embedding method with data provided as embedded string, it is essential to encode yen character as %A5. This is true for other currency characters as well.

Some special characters like the euro fall under the extended unicode character-set category. To display a these characters in your chart, the XML file should be encoded with a UTF-8 BOM signature as explained earlier, otherwise the character will not be displayed properly.

When using the HTML embedding method with data provided as embedded string, you need to use the encoded form (%E2%82%AC) instead of the character itself (€).

## Using special characters

You can directly embed most of the special characters and punctuation marks in the XML/JSON data source of your chart. However some characters like & , < , > , ' (apostrophe) and " (quote) need to be specially encoded when providing the same as a part of the chart data. Apart from this, there is no need to encode any other special character.

Given below is a table of the character and how it must be encoded, it is applicable in both Data URL and Data String methods.

<table>
  <tr>
     <th>Character</th>
     <th>JSON/XML Encoding</th>
     <th>HTML Embed Encoding</th>
  </tr>
  <tr>
     <td>`&amp;`</td>
     <td>&amp;amp;</td>
     <td>%26</td>
  </tr>
  <tr>
     <td>`&lt;`</td>
     <td>&amp;lt;</td>
     <td>%26lt</td>
  </tr>
  <tr>
     <td>`&gt;`</td>
     <td>&amp;gt;</td>
     <td>%26gt</td>
  </tr>
  <tr>
     <td>`&apos;`</td>
     <td>&amp;apos;</td>
     <td>%26apos</td>
  </tr>
  <tr>
     <td>`&quot;`</td>
     <td>&amp;quot;</td>
     <td>%26quot</td>
  </tr>
  <tr>
     <td>`%`</td>
     <td>N/A</td>
     <td>%25</td>
  </tr>
</table>

Shown here is a chart that uses special characters

{% embed_chart using-special-characters-in-a-chart-example-3.js %}

{% embed_data using-special-characters-in-a-chart-example-3.js %}
