---
title: Methods | FusionGrid
description: This article talks about using fusiongrid methods
heading: FusionGrid Methods
---

# FusionGrid Methods

FusionGrid offers a wide variety of methods for controlling and styling your grids. Find the comprehensive list of methods below.

## Layout and Viewport

### grid.getLayout(property)
Returns the layout that is currently applied. If a parameter is not provided, the entire layout object, with layout type, density, and template, is returned. In addition, if any specific property is mentioned in the parameters, that specific property value is returned.

```json
grid.getLayout('type')
> 'row'
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>property</td>
    <td>No</td>
	<td>String</td>
	<td>Name of the property from layout configurations.</td>
</tr>
</table>
    
### grid.setLayout(config)
Users can set one or more properties of the current layout.

```json
grid.setLayout({
    type: 'row',
    density: 'compact'
});
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>config</td>
    <td>Yes</td>
	<td>Object</td>
	<td>An object containing properties from layout configurations.</td>
</tr>
</table>

### grid.getAllViewports()
Returns all viewports, both the pre-set ones and any custom viewport.

### grid.getCurrentViewport()
Returns the currently applied viewport.

### grid.addViewport(viewportName, config)
Adds a new viewport. If the name matches an existing viewport, then the viewport is updated with the new configuration.

```json
grid.addViewport('mobile-landscape', {
    minWidth: 400,
    maxWidth: 600,
    config: {
        layout: {
            type: 'row',
            density: 'compact'
        }
    }   
});
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
   <tr>
	<td>viewPortName</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the new viewport.</td>
</tr>
<tr>
	<td>config</td>
    <td>Yes</td>
	<td>Object</td>
	<td>An object of all the grid configurations to apply on the grid.</td>
</tr>
</table>

### grid.enableAutoViewportSwitch()
Enables automatic switching of viewport.

### grid.disableAutoViewportSwitch()
Disables automatic switching of viewport.

### grid.sizeColumnsToFit()
Call this method to resize the grid columns to fit the container automatically. 

### grid.sizeColumnsToContent([[columns]])
Call this method to automatically resize the grid columns according to the cell content. 
Calling this method without any parameter results in resizing of all columns. If a user wants to resize one or more particular columns specifically, column indices must be passed as an array.

## Rows and Columns

### grid.getColumns(index)
Get column configuration based on column index. If column index is not provided, then all the columns configurations will be returned.
```json
grid.getColumns(1); // returns column object with index 1
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>index</td>
    <td>No</td>
	<td>Number</td>
	<td>Index of the column.</td>
</tr>
</table>

### grid.setColumns([array of columns])
Set the columns in a grid.  All the columns provided as an argument will get overridden.
```json
var newColumns = [
 { field: 'Rank', width: '70px', },
 { field: "Make", headerText: "Make" }
];
grid.setColumns(newColumns);
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>columns</td>
    <td>Yes</td>
	<td>Array</td>
	<td>Array of columns configurations.</td>
</tr>
</table>

### grid.getRowOptions(property)
Get row options. If the parameters are left blank, then all row options are returned. Otherwise, individual property values are returned. 
```json
grid.getRowOptions('rowHeight')
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>property</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the row property from row configurations.</td>
</tr>
</table>

### grid.setRowOptions(key, value)/grid.setRowOptions(object)
Set any row options. There are 2 ways to use this API.

```json
grid.setRowOptions('height', '75px');
```

```json
grid.setRowOptions({
    height: '75px'
});
```
We recommend the second method to update multiple properties at once.

<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>key</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the row property from row configurations.</td>
</tr>
   <tr>
	<td>value</td>
    <td>Yes</td>
	<td>Any</td>
	<td>Respective supported property for the row options.</td>
</tr>
<tr>
	<td>object</td>
    <td>Yes</td>
	<td>Object</td>
	<td>Object configurations row configurations.</td>
</tr>
</table>

## Data

### grid.getDataTable()
Gets the DataTable currently used in the grid.

### setDataTable(dataTable)
Sets the data source of the grid. This data source is essentially a DataTable.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>dataTable</td>
    <td>Yes</td>
	<td>Object</td>
	<td>Instance of DataTable which you want to use in the grid.</td>
</tr>
</table>    

## Pagination
### grid.getPagination(property)
Gets pagination. If users call this method without any set parameters, then the entire pagination object is returned. Otherwise, individual property can be retrieved.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>property</td>
    <td>No</td>
	<td>String</td>
	<td>Name of the property which you want to fetch from the pagination configuration.</td>
</tr>
</table>

### grid.setPagination(object or key,value)
Set pagination property using this method. You can use either the string-based key-value approach or simply pass the pagination object.
```json
grid.setPagination('showTotal', true);
grid.setPagination({ showTotal: true });
```
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>key</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the pagination property from pagination configuration.</td>
</tr>
<tr>
	<td>value</td>
    <td>Yes</td>
	<td>Any</td>
	<td>Respective value for the supported property.</td>
</tr>
 <tr>
	<td>object</td>
    <td>Yes</td>
	<td>Object</td>
	<td>Object configurations from pagination configuration.</td>
</tr>
</table>
### grid.getPageSize()
It shows how many rows are shown per page.

### grid.setPageSize(pageSize)
Sets the size of a page.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>pageSize</td>
    <td>Yes</td>
	<td>Number</td>
	<td>Number of rows to render per page.</td>
</tr>
</table>

### grid.getCurrentPage()
Gets the index of the current page.

### grid.getTotalPages()
Returns the total number of pages in the grid.

### grid.getRowCount()
Returns the total number of rows in grid.

### grid.jumpToPage(pageNumber)
Jumps to a specific page. Suppose the page number is higher than the total number of pages the last page loads.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>pageNumber</td>
    <td>Yes</td>
	<td>Number</td>
	<td>Index of the page number where you want to jump.</td>
</tr>
</table>

### grid.jumpToNextPage()
Jumps to next page.

### grid.jumpToPreviousPage()
Jumps to the previous page.

### grid.jumpToFirstPage()
Goes directly to the first page.

### grid.jumpToLastPage()
Goes to the last page.

## More Methods

### grid.selectAllRows()
Selects all rows, even rows that are not visible due to pagination. Rows that are filtered out are not selected.

### grid.deselectAllRows()
Deselects all rows.

### grid.selectRows([array of rowIndex])
Selects specific rows by row index.

### grid.deselectRows([array of rowIndex])
Deselects specific rows by row index.

### grid.getSelectedRows()
Gets all selected rows. 

### grid.filter(any fusiondatastore filter operators)
Filters the grid.

### grid.sort(fusiondatastore sort operator)
Sorts the grid.

### grid.on(eventName, listener)
Adds an event listener.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>eventName</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the supported event.</td>
</tr>
    <tr>
	<td>listener</td>
    <td>Yes</td>
	<td>Function</td>
	<td>Event listener function for the respective event. You can also access event objects via function parameters.</td>
</tr>
</table>

## grid.off(eventName, listener)
Removes an event listener.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>eventName</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the supported event.</td>
</tr>
    <tr>
	<td>listener</td>
    <td>Yes</td>
	<td>Function</td>
	<td>Event listener function for the respective event. You can also access event objects via function parameters.</td>
</tr>
</table>

### grid.trigger(eventName)
Triggers and event through the grid.
<table>
<tr>
		<th>Argument</th>
		<th>Required</th>
        <th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>eventName</td>
    <td>Yes</td>
	<td>String</td>
	<td>Name of the supported event.</td>
</tr>
</table>

### grid.dispose()
Disposes of the grid by releasing all resources and disposing of all DOM.
