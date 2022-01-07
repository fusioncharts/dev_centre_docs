---
title: Methods | FusionGrid
description: This article talks about using fusiongrid methods
heading: FusionGrid Methods
---

# FusionGrid Methods

FusionGrid offers a wide variety of methods for controlling and styling your grids. Find the comprehensive list of methods below.

## getLayout(property)
Returns the layout which is currently applied. If a parameter is not provided, the entire layout object, with layout type, density, and template, is returned. In addition, if any specific property is mentioned in the parameters, that specific property value is returned.

```json
grid.getLayout('type')
> 'row'
```

## setLayout(object)
Users can set one or more properties of the current layout.

```json
grid.setLayout({
    type: 'row',
    density: 'compact'
});
```

## getAllViewports()
Returns all viewports, both the pre-set ones and any custom viewport.

## getCurrentViewport()
Returns the currently applied viewport.

## addViewport(viewportName, config)
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

## enableAutoViewportSwitch()
Enables automatic switching of viewport.

## disableAutoViewportSwitch()
Disables automatic switching of viewport.

## sizeColumnsToFit()
Call this method to resize the grid columns to fit the container automatically. 

## sizeColumnsToContent([[columns]])
Call this method to automatically resize the grid columns according to the cell content. 
Calling this method without any parameter results in resizing of all columns. If a user wants to resize one or more particular columns specifically, column indices must be passed as an array.

## getColumns(columnIndex)
Get column configuration based on column index. 
## setColumns([array of columns])
Set the columns in a grid.
## getRowOptions([property])
Get row options. If the parameters are left blank, then all row options are returned. Otherwise, individual property values are returned. 
## setRowOptions(key, value)/setRowOptions(object)
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
## getDataTable()
Gets the DataTable currently used in the grid.
## setDataTable(dataTable)
Sets the data source of the grid. This data source is essentially a DataTable.
## selectAllRows()
Selects all rows, even rows that are not visible due to pagination. Rows that are filtered out are not selected.
## deselectAllRows()
Deselects all rows.
## selectRows([array of rowIndex])
Selects specific rows by row index.
## deselectRows([array of rowIndex])
Deselects specific rows by row index.
## getSelectedRows()
Gets all selected rows. 
## getPagination([name])
Gets pagination. If users call this method without any set parameters, then the entire pagination object is returned. Otherwise, individual property can be retrieved. 
## setPagination(object or name-value pair)
Sets pagination property
## getPageSize()
It shows how many rows are shown per page
## setPageSize(pageSize)
Sets the size of a page. 
## getCurrentPage()
Gets the index of the current page.
## getTotalPages()
Returns the total number of pages in the grid.
## getRowCount()
Returns the total number of rows in grid.
## jumpToPage(pageNumber)
Jumps to a specific page. Suppose the page number is higher than the total number of pages the last page loads.
## jumpToNextPage()
Jumps to next page.
## jumpToPreviousPage()
Jumps to the previous page.
## jumpToFirstPage()
Goes directly to the first page.
## jumpToLastPage()
Goes to the last page.
## filter(any fusiondatastore filter operators)
Filters the grid.
## sort(fusiondatastore sort operator)
Sorts the grid.
## on(eventName, listener)
Adds an event listener.
## off(eventName, listener)
Removes an event listener.
## trigger(eventName)
Triggers and event through the grid.
## dispose()
Disposes of the grid by releasing all resources and disposing of all DOM.
