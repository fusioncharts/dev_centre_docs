---
permalink: chart-guide/drag-node-chart/updating-chart-data-on-server.html
title: Updating Chart Data on Server | FusionCharts
description: The drag-node chart offers you methods to update chart data on the server submit the updated data from the chart to your server-side script in XML format
heading: Updating Chart Data on Server
chartPresent: false
---

The drag-node chart allows you to update data in real-time and submit the modified data to your scripts for further processing.

The drag-node chart offers you two methods to update chart data on the server:

* Submit the updated data from the chart to your server-side script (as form elements) in XML format.

* Submit the updated data as XML/array to client-side JavaScript functions. These functions can now handle the data in the way they want to.

In this section, you will be shown how you can update chart data using server-side scripts.

## Setting the Form

To enable submission of data to server-side script, you first need to make sure that the __Submit__ button is not hidden on your form.

To show the __Submit__ button, you can use the following code snippet:

```javascript
{
    "chart": {
        "showFormBtn": "1"
    }
}
```

This adds a submit button to your chart as shown below:

![image alt text]({{ site.baseurl }}assets/images/drag-node-updating-chart-1.jpg)

Given below is a brief description of the attributes used to show/hide and define the form properties for the __Submit__ button:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showFormBtn`</td>
    <td>It is used to specify whether the __Submit__ button will be rendered on the chart. Setting this attribute to `1` will show the button, setting it to `0` will hide it.  If you are using JavaScript methods to get data from the chart, you can hide this button.</td>
  </tr>
  <tr>
    <td>`formAction`</td>
    <td>It is used to specify the URL of the server-side script to which you want to submit the updated data. You can specify the relative or the absolute path. The `strXML` form variable is to be requested in this page.</td>
  </tr>
  <tr>
    <td>`formMethod`</td>
    <td>It is used to specify the method - `GET` or `POST` - for submission of form data. It is recommended that you use the `POST` method if you will be submitting the data as XML.</td>
  </tr>
  <tr>
    <td>`formTarget`</td>
    <td>It is used to specify the target page where the response received after submitting form data will be rendered. This attribute takes the following two values: `_blank` or `_self`.</td>
  </tr>
  <tr>
    <td>`formBtnTitle`</td>
    <td>It is used to specify the text label for the __Submit__ button. By default, the label is __Submit__.</td>
  </tr>
  <tr>
    <td>`btnTextColor`</td>
    <td>It is used to specify the hex code of the color for the __Submit__ button.</td>
  </tr>
  <tr>
    <td>`formBtnWidth`</td>
    <td>It is used to specify the width, in pixels, of the __Submit__ button.</td>
  </tr>
  <tr>
    <td>`formBtnBorderColor`</td>
    <td>It is used to specify the hex code of the border color for the __Submit__ button.</td>
  </tr>
  <tr>
    <td>`formBtnBngColor`</td>
    <td>It is used to specify the hex code of the background color for the __Submit__ button.</td>
  </tr>
</table>


The code snippet below shows how the server-side PHP script is used to submit data:

```html
<?php
//File to write
$filename = 'xml/dragNodeData.xml';
//Requested data
$content = $_REQUEST['strXML'];
// Let's make sure the file exists and is writable first.
if (is_writable($filename)) {
    // In our example we're opening $filename in write mode.
    // The file pointer is at the bottom of the file hence
    // that's where $content will go when we fwrite() it.
    if (!$handle = fopen($filename, 'w')) {
        echo "Cannot open file ($filename)";
        exit;
    }
    // Write $content to our opened file.
    if (fwrite($handle, $content) === FALSE) {
        echo "Cannot write to file ($filename)";
        exit;
    }
    echo "Success, wrote ($content) to file ($filename)";
    //Close the file
    fclose($handle);
} else {
    echo "The file $filename is not writable";
}
?>
```