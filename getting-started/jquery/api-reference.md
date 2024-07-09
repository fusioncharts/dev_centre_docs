---
permalink: using-with-javascript-libraries/jquery/api-reference.html
title: API Reference | FusionCharts
description: This section talks about list of API references in FusionCharts Suite XT.
heading: API Reference
chartPresent: false
---

## jQuery Functions

<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>__jQuery Functions__</td>
        <td></td>
    </tr>
    <tr>
        <td>`insertFusionCharts(chartConfigurations: Object)`</td>
        <td>Renders charts inside HTML elements. The HTML elements have to be selected using jQuery selector. In case, multiple HTML elements are selected using the jQuery selector, a chart will be rendered inside each selected HTML element. All existing elements inside the selected elements will be replaced by the rendered charts. This method returns the jQuery selected element to allow chaining with other jQuery methods.<br/>
        An object of chart configurations (set of key-value pairs) can be passed as the parameter. Click [here](/api/fusioncharts) to view complete list of chart configurations.</td>
    </tr>
    <tr>
        <td>`appendFusionCharts(chartConfigurations: Object)`</td>
        <td>Renders charts at the end of selected HTML elements. The HTML elements need to be selected using jQuery selector. In case multiple HTML elements are selected, a chart will be rendered inside each selected HTML element. All existing elements inside the selected elements will be preserved. The method returns the original jQuery selection to allow chaining of other jQuery methods.<br/>
        An object of chart configurations (set of key-value pairs) can be passed as the parameter. Click [here](/api/fusioncharts) to view complete list of chart configurations.</td>
    </tr>
    <tr>
        <td>`prependFusionCharts(chartConfigurations: Object)`</td>
        <td>Renders and inserts charts at the beginning of selected HTML elements. The HTML elements need to be selected using jQuery selector. In case multiple HTML elements are selected, a chart will be rendered inside each selected HTML element. All existing elements inside the selected elements will be preserved. The method returns the original jQuery selection to allow chaining of other jQuery methods.<br/>
        An object of chart configurations (set of key, value pairs) can be passed as the parameter. Click [here](/api/fusioncharts) to view complete list of chart configurations.</td>
    </tr>
    <tr>
        <td>`cloneFusionCharts(callback: function, [cloneConfigurations: Object])`</td>
        <td>This method makes a copy of existing charts in the selection and passes the list of cloned chart objects to a function for further processing.<br/>
        The method looks for all the charts in jQuery selected elements and clones them. An array of cloned chart objects (in `this` Array) is passed to a `callback` function whose name or reference needs to be passed as a mandatory parameter to `cloneFusionCharts` method. You can also use an anonymous function as the callback function.<br/>
        Before cloning of existing charts, you can optionally overwrite some of the configurations of the existing charts. This can be achieved by passing an object (set of key or value pairs) containing chart configurations as `cloneConfigurations` parameter. Click [here](/api/fusioncharts) to view complete list of chart configurations.</td>
    </tr>
    <tr>
        <td>`updateFusionCharts(updateConfigurations: Object)`</td>
        <td>This method helps in updating chart configurations of an existing chart at run-time. Except for the chart `id`, you can re-configure attributes like the `type`, `dataSource`, `dataFormat`, `width`, `height`, and so on of existing charts. The possible `updateConfigurations` can be found [here](/api/fusioncharts). __Note__ that the `id` cannot be passed to the `updateConfigurations` parameter. <br/>
        This method is applied to the HTML elements selected using the jQuery selector. It finds all the charts rendered in the selected elements and updates all these charts with the values passed through the `updateConfigurations` parameter.<br/>
        __Note__ that the charts thus updated are internally re-drawn with the new configurations.</td>
    </tr>
    <tr>
        <td>`attrFusionCharts(chartAttribute: string)` or
        `attrFusionCharts(chartAttribute:string, newValue:string)` or
        `attrFusionCharts(chartAttributes: Object)`</td>
        <td>Using this method you can dynamically retrieve or update chart's root properties (also known as "chart attributes" that are passed through the `chart` object in the constructor JSON data). This feature is useful if you want to change the chart titles, theme colors, number formatting or scaling setup, divisional line and grid configurations and other functional and cosmetic features of existing charts.<br/>
        This method is applied on all charts in the selected HTML elements. It finds all the charts rendered in the selected elements and retrieves the value of a chart parameter from the existing charts or updates the charts with new parameter values.<br/>
        This method returns the value of a chart attribute (of an existing chart) if the name of the chart attribute is passed to the method as a single string parameter. If a second parameter (`newValue`) is passed to the method along with the name of the chart attribute, the chart gets updated with the new parameter value. The `attrFusionCharts` method also accepts a set of key/value pairs (JavaScript Object) that applies the values to multiple chart attributes in existing charts. __Note__ that when the charts are updated with selective configurations and properties, internally, the charts are being re-drawn.</td>
    </tr>
    <tr>
        <td>`convertToFusionCharts(chartOptions: Object, [conversionConfigurations: Object])`</td>
        <td>This method is an added feature of the jQuery helper and can convert a table containing numeric data to a multi-series chart. In effect, the html table acts as the `dataSource` for the chart that is rendered. The return value is a jQuery object containing all the newly created instances of FusionCharts.<br/>
        The first parameter passed to this method is the chart configuration object. The jQuery selector here corresponds to the table element and, therefore, it is important to provide a valid `renderAt` in the chart configuration. If `renderAt` is not provided then the chart will be drawn next to the table. The `dataFormat` to be provided in the chart configuration is `htmltable`.<br/>
        The optional second parameter passed to this method is the `conversion options` object.<br/>
        `chartAttributes`: An object that contains the attribute name and value pairs meant for the resulting chart, like `caption`, `xAxisName` etc.<br/>
        `major`: A string whose value can be 'row' or 'column'. Most tables, when converted to charts, would yield multi-series charts (unless there is only one row/column) where each row or each column is a separate dataset. This property specifies whether datasets pertain to individual rows or columns. Default value is __row__.<br/>
        `useLabels`: A boolean value which, when set to true, means that one of the rows or columns (depending on the value of `major`) contains the labels for the chart `categories`. Default value is __true__.<br/><br/>
        `useLegend`: A boolean value that is similar to `useLabels`. If true, it means that the table has a row or column containing text that will be used for naming each dataset. Default value is __true__.<br/><br/>
        `labelSource`: A number that maps to a particular row or column in the table. <br>The value is a numeric index starting from __1__, indicating the row or column that has to be parsed to fetch the labels. Therefore, the value __1__ implies the first row, __2__ implies the second row and so on.This option also takes negative values, wherein __-1__ implies the last row, __-2__ implies the second from last row, and so on. <br>The default value is __0__ and in this case the converter module checks if `useLabels` is set to __true__. If yes, the converter module traverses through the table and automatically picks up the row or column to be used. If no row or column is found, the `labels` property is used to provide the labels.<br/><br/> 
        `legendSource`: A number that maps to a particular row or column in the table to mark it as the source of names of the datasets. The usage is similar to `labelSource`.<br/><br/>
        `ignoreRows`: An array of indices of all the rows that should be ignored while doing the table-to-chart conversion.<br/><br/>
        `ignoreCols`: An array of indices of all the columns that should be ignored while doing the table-to-chart conversion.<br/><br/>
        `showLabels`: A boolean value indicating whether the labels will be shown in the final chart output or not.<br/><br/>
        `showLegend`: A boolean value indicating whether the legend will be shown in the final chart output or not.<br/><br/>
        `seriesColors`: An array of hexadecimal color values (e.g. FF0000 or AABB55) that should be assigned to the datasets using one-to-one mapping.<br/><br/>
        `convertBlankTo`: A number that should be used to convert all blank data cells in the table to valid data. Default value is __0__.<br/><br/>
        `hideTable`: A boolean value indicating whether to hide the table, once the chart is ready, or keep it as is. Default is `false`.<br/><br/>
        `labels`: An array of strings that corresponds to the labels to be used while rendering the chart. Among all the ways of specifying labels for the chart, this user-generated array gets the highest preference.<br/><br/>
        `legend`: An array of strings that correspond to the dataset names to be used while rendering the chart. Similar to `labels`.
        </td>
    </tr>
    <tr>
        <td>`disposeFusionCharts()`</td>
        <td>You can remove a chart instance from page and memory using `disposeFusionCharts()` function. Additionally, the function will raise `beforeDispose` event prior to removing a chart and `disposed` event after the chart has been removed.</td>
    </tr>
    <tr>
        <td>__Selector__</td>
        <td></td>
    </tr>
    <tr>
        <td>`:FusionCharts`
        </td>
        <td>A custom jQuery selector, `:FusionCharts` helps in selecting all the charts rendered using the FusionCharts jQuery helper or the FusionCharts JavaScript Class. The custom selector can also be used as a conventional jQuery selector.</td>
    </tr>
    <tr>
        <td>__Event handling__</td>
        <td></td>
    </tr>
    <tr>
        <td>`bind(eventType: String, eventHandler: function)` or<br/>`on(eventType: String, eventHandler: function)`</td>
        <td>Binds an event handler to the specified FusionChart event. The event handler needs to be attached to the the container HTML elements containing the FusionCharts objects.<br/>
        The first parameter, `eventType`, is the name of the event. The list of events exposed by FusionCharts can be found [here](/api/fusioncharts/fusioncharts-events). These events can be used with the FusionCharts jQuery helper by prefixing them with the text "fusioncharts" and using the lowercase representation of the event name. For example, the `beforeRender` event will be named as `fusionchartsbeforerender`. This is done to avoid conflict with the existing jQuery events that might have the same names. The parameters passed to the event handler function, however, are the same.</td>
    </tr>
</table>
