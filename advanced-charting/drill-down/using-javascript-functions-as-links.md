---
permalink: advanced-chart-configurations/drill-down/using-javascript-functions-as-links.html
title: Using JavaScript Functions as Links | FusionCharts
description: An alternative to using simple links in drill-down charts is using JavaScript functions, present in the same page, that can be invoked when a data plot on the chart is clicked.
heading: Using JavaScript Functions as Links
chartPresent: true
---

An alternative to using [simple links]{% linkTo tutorials/advanced-charting/drill-down/simple-drill-down.md %}{:target='_blank'} in drill-down charts is using JavaScript functions, present in the same page, that can be invoked when a data plot on the chart is clicked.

FusionCharts provides the following two ways for setting JavaScript functions as links:
<table>
	<tr>
		<th>Method</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Using the `j-` prefix</td>
		<td>The JavaScript function name is placed after the `j-` notation. The function is evaluated as a standard JavaScript function. A single parameter of type __string__ is can be passed to the function by placing a __‒__ (dash) after the function name and then the parameter value. This method lets you pass only __one__ JavaScript function as a link.</td>
	</tr>
	<tr>
		<td>Using the `JavaScript:` prefix</td>
		<td>This method lets you pass JavaScript functions as links. Similar to the `j-` prefix method, the function name and the parameter is placed after the `JavaScript:` notation. To call a function in JavaScript: notation, make the function available in the global scope and the function name should be the same as that of the string provided after the JavaScript: prefix.
		Due to some security policies, usage of `eval` has been removed and some of the features of Javascript: prefix has been deprecated:

* Special characters like `(`, `)`, `-`, `%` and `,` cannot be passed as a parameter while function call.
* Multiple functions cannot be passed after `Javascript:` prefix.
* A function cannot be defined after `Javascript:` prefix.</td>
	</tr>
</table>

Both these prefixes are explained in detail with examples below.

## The `j-` Prefix
An example of a drill-down chart and its corresponding code, that implements linking using the `j-` prefix, is shown below.

For this example, a JavaScript function, `showAlert`, is defined to show the label and value of the data plot clicked. For example, when the data plot labeled __Apple__ is clicked, the `showAlert` function is invoked and an alert box is displayed with the data value and the label.

{% embed_all advanced-charting-drill-down-using-javascript-functions-as-links-example-1.js %}

The code for the above example is given below:

### HTML code:

```javascript

<div id="chart-container">FusionCharts will render here</div>
<!-- Drill-down: Simple Link Open in Same Page. Attribute: # link -->
<script language="JavaScript" src="fusioncharts/js/fusioncharts.js"></script>
<script language="JavaScript">
    <!--
    function showAlert(myVar) {
        window.alert(myVar);
    }
    -->
</script>

```

### JSON data:

 

In the above code snippet, `showAlert` is a custom function that is present in the HTML page that embeds the chart. __Apple, $810K__ is the parameter value passed to the function. As mentioned before, the `j-` prefix allows to pass only one string parameter to the JavaScript function.

Now, when the data plot labeled __Apple__ is clicked, the string __Apple, $810K__ is passed as a parameter to the `showAlert` function.

For this example, the parameter string contains the data label and data value only for demonstration purposes. For actual implementations, identifier numbers or strings of data can be passed. When a user clicks the link, the identifiers are sent back to the JavaScript function for further actions (for example, loading detailed data for that identifier using AJAX, or any such tasks—the possibilities are endless).

## The `JavaScript:` Prefix
An example of a drill-down chart and its corresponding code, that implements linking using the `JavaScript: ` prefix, is shown below:

{% embed_all advanced-charting-drill-down-using-javascript-functions-as-links-example-2.js %}

Similar to the above example, the `showAlert` function is defined to ahow an alert message that contains the clicked data plot's label and value.

The code for the above example is given below:

### HTML code:

```javascript

<div id="chart-container">FusionCharts will render here</div>
<!-- Drill-down: Simple Link Open in Same Page. Attribute: # link -->
<script language="JavaScript" src="fusioncharts/js/fusioncharts.js"></script>
<script language="JavaScript">
    <!--
    function showAlert(myVar) {
        window.alert(myVar);
    }
    -->
</script>

```

### JSON data:



__Apple__ and __$810K__ are passed as two parameters to the `showAlert` function—__Apple__ is passed as a string parameter and __$810K__ is passed as a numeric parameter.

Now, when the data plot labeled __Apple__ is clicked, the `showAlert` function is invoked and the two parameters are passed to it. 