---
title: Export chart as image | FusionGrid
description: This article talks about FusionGrid features
heading: Grid Attributes 
---

# Grid Configuration
Grid configurations are passed as the third argument to the FusionGrid constructor while instantiating it. It contains an object with several properties to configure, like columns, rows, inline charts, etc. Here is the syntax:

```json
var grid = new FusionGrid(container, dataTable, gridConfig);
```
Let’s explore all possible configurable properties available in the grid configuration.
 
## Columns and Headers
Using this property you can configure columns in the grid. It accepts an array of objects. Here is the syntax:

```json
var gridConfig = {
 columns: [
   {
     key_1: 'value_1,
     key2_2: 'value_2',
   },
 ]}
```

### Selecting columns
By default, all data table columns are rendered in the grid. The user can customize this behavior as follows:

```json
config = {
	columns: [{
		field: 'country_name'
      }, {
	      field: 'continent'
      }]
};
```
Here the field is the column name mentioned in the data table schema. 

### Changing Column Header name
The header text is the same as the corresponding schema field name for a column bound with a schema field. The user can provide the header name explicitly as follows:

```json
config = {
	columns: [{
		field: 'country_name',
            headerText: 'Country'
      }, {
	      field: 'continent',
            headerText: 'Continent',
      }]
};
```
A blank or empty string is also a valid header text if the user wants to render a column without any header name.

### Changing Column Appearances
The user can change the appearance of all the cells of a column, including the header cells, as follows: 

```json
config = {
	columns: [{
		field: 'country_name',
            class: 'country-class'
      }, {
	      field: 'continent',
            style: { background-color: '#cccccc', font-weight: 'bold' }
      }]
};
```
Or change the appearance of just header cell like this:
```json
config = {
	columns: [{
		field: 'country_name',
            headerClass: 'country-header-class'
      }, {
	      field: 'continent',
            headerStyle: { background-color: '#cccccc', font-weight: 'bold' }
      }]
};
```
Or change the appearance of value cells like this:

```json
config = {
	columns: [{
		field: 'country_name',
            cellClass: 'country-header-class'
      }, {
	      field: 'continent',
            cellStyle: { background-color: '#cccccc', font-weight: 'bold' }
      }]
};
```
We recommend using class only to style the grid. All class-related attributes are an array type, i.e., more than one class can be provided, and classes are applied in the order mentioned in the array.

### Column Grouping
To create a multi-column group, the user needs to define group names and then columns as children of the group. Any column which has children is considered as a group. The Group header must not be linked to any field in the schema, if it’s specified, the field attribute will be ignored, and a warning is displayed.

```json
config = {
	columns: [{
            headerName: 'Employee Details',
            children: [{
	        field: 'Name'
            },{
	        field: 'Country'
            }]
       }]
};
```
### Setting Column Width
By default, width is assigned to all columns, but users can change this to their preferences as follows:

```json
config = {
    columns: [{
        field: 'Age',
        width: '50px'
    }, {
        field: 'Address',
        width: '300px'
    }]
}
```
The minimum width and maximum width can also be mentioned for each column like this:

```json
config = {
    columns: [{
        field: 'Age',
        width: '50px',
        minWidth: '25px'
    }, {
        field: 'Address',
        width: '300px',
        minWidth: '50px',
        maxWidth: '500px'
    }]
}
```
Use the minimum and maximum width to enforce abound, otherwise APIs like sizeColumnsToFit() or sizeColumnsToContent() will resize the column at their will.
But APIs like sizeColumnsToFit() will override the width value provided by the user.

### Text Wrapping
Users can enable text wrapping as follows:
```json
config: {
    columns: [{
        field: 'Address',
        width: '300px',
        wrapText: true
    }]
}
```

### Configuring Column Hover
By default, column hover is not enabled, but the user can enable the setting and also define hover style as follows:
```json
config: {
    columns: [{
        field: 'Address',
        width: '300px',
        hover: {
            enable: true,
            style: style object/func,
            class: css class name/func
        }
    }]
}
```

## Column Type and Format
Before going into the details of column type, there’s an important attribute called `formatter.` `Formatter` is a callback function that executes before rendering each cell, as follows:

```json
formatter: function(params) {}
```
Here `params` contain three major properties -
`cellValue` - contains the current cell value
`values` - values of all cells of the current record
`cellIndex` - index of the cell 

There are a total of 5 column types available in the grid; `string`, `number`, `datetime`, `html`, and `chart.`

### String Column Type
The most common type, and you can use it as follows:

```json
config = {
	columns: [{
		field: 'country_name',
            type: 'string'
      }]
};
```

### Number Column Type
Add numbers like this:

```json
config = {
	columns: [{
		field: 'Revenue',
            type: 'number'
      }]
};
```

And add numbers using formatters, like this:

```json
config = {
	columns: [{
		field: 'Revenue',
		formatter: function(params) {
			return '$' + parseFloat(params.cellValue).toFixed(2);
            }
      }]
}
```
In this example, the decimal number is fixed to 2 values, `always` and `also`, to denote the currency `$` is added before the value.

### Datetime Column Type
Here is how to use the `Datetime` style for your columns:

```json
config = {
	columns: [{
		field: 'registration_date',
            headerText: 'Registration Date & Time',
            type: 'datetime'
      }]
};
```
You can also use formatters to be more specific with your data, as follows:

```json
config = {
	columns: [{
		field: 'registration_date',
            headerText: 'Registration Date & Time',
            type: 'datetime',
            formatter: function(params) {
                return FusionDataStore.formatDate(params.cellValue, '%d/%m/%Y %H:%M');
            }
      }]
};
```
In the above example, the date is formatted displays like this: 27/10/2019 10:29

### HTML Column Type
When custom HTML cells are needed.
```json
config = {
	columns: [{		
            headerText: 'Player Name',
            type: 'html',
            template: function(params) {
                return (

                    '<span class='player-name'><img src=' + params.values['playerPicURL'] + '/>' + params.values['playerName'] + '</span>'
                );
            }
      }]
};
```
Here is a list of properties supported in columns:
<table>
<tr>
		<th>Property Name</th>
		<th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>`field`</td>
	<td>String</td>
	<td>Name of the schema field. It should be mapped to a valid property name in FusionDataStore schema. For example: 

{ field: 'Assembly Location' } </td>
</tr>
<tr>
	<td>`type`</td>
	<td>String</td>
	<td>Data type of the column. It accepts following values in string format: `string`, `number`, `datetime`, `html`, and `chart`. If this value is not provided, then by default it will take it from the FusionDataStore schema.</td>
</tr>
<tr>
	<td>`headerText`</td>
	<td>String</td>
	<td>Name of the column which will appear in the grid. By default it will be the same as field.  For example:

{ headerText: 'Assembly Location in US' }.</td>
</tr>
<tr>
	<td>`class`</td>
	<td>Array, Function</td>
	<td>An array of class names in string format which is assigned to the entire column including cells and headers. It is useful to customize the appearance of the column. For example:

{ class: ['class-1', 'class-2'] }

Or you could assign a function which should return an array of class names. This function provides a parameter which provides following properties:
1. cellValue: Value of the cell
2. cellIndex: Index of the cell
3. rowIndex: Index of the row
4. values: An object of values for the given rows

Here is an example of setting up the function:

{ class: function(params) { } }</td>
</tr>
	<tr>
	<td>`style`</td>
	<td>Object, Function</td>
	<td>Helps customize the appearance of the entire column by passing CSS properties in the form of JSON object like:

style : {
   'background-color': 'offwhite'}</td>
</tr>
<tr>
	<td>`headerClass`</td>
	<td>Object, Function</td>
	<td>Works exactly like class but the class name will get applied to the column header only.</td>
</tr>
<tr>
	<td>`headerStyle`</td>
	<td>Object, Function</td>
	<td>Works exactly like style but the class name will get applied to the column header only.</td>
</tr>
<tr>
	<td>`cellClass`</td>
	<td>Object, Function</td>
	<td>Works exactly like class but the class name will get applied to the cells only.</td>
</tr>
<tr>
	<td>`cellStyle`</td>
	<td>Object, Function</td>
	<td>Works exactly like style but the class name will get applied to the cells only.</td>
</tr>
<tr>
	<td>`width`</td>
	<td>String, Number</td>
	<td>Width of the column. For example: 
{ width: '100px' }</td>
</tr>
<tr>
	<td>`minWidth`</td>
	<td>String, Number</td>
	<td>Minimum width of the column.</td>
</tr>	
<tr>
	<td>`maxWidth`</td>
	<td>String, Number</td>
	<td>Maximum width of the column.</td>
</tr>
<tr>
	<td>`enableHover`</td>
	<td>boolean</td>
	<td>Enables hover state for the column.</td>
</tr>
<tr>
	<td>`hoverStyle`</td>
	<td>Object, Function</td>
	<td>Works exactly like style but the class name will get applied when you hover the cell only.</td>
</tr>
<tr>
	<td>`hoverClass`</td>
	<td>Object, Function</td>
	<td>Works exactly like class but the class name will get applied when you hover the cell only.</td>
</tr>
<tr>
	<td>`wrapText`</td>
	<td>boolean</td>
	<td>When set to true, wraps text in the cell.</td>
</tr>
<tr>
	<td>`template`</td>
	<td>Fuction</td>
	<td>If type is set to html, then you have to return an HTML string that gets applied to the entire cell. Function provides a parameter which will allow you to read corresponding cell and row values. For example:
{ template: function (params) {} }.</td>
</tr>
<tr>
	<td>`formatter`</td>
	<td>Object, Function</td>
	<td>If you want to add some inline styles, conditional or number formatting on the data, then this function is handy.

{ formatter: function (params) {} }.</td>
</tr>
<tr>
	<td>`tooltip`</td>
	<td>Object</td>
	<td>Allows you to configure tooltips appearing on the cell or column.</td>
</tr>
<tr>
	<td>`chartConfig`</td>
	<td>Object</td>
	<td>Allows you to configure charts. It is only applicable when the type is set to chart.</td>
</tr>
</table>

### Chart Column Type

## Layout Configurations
Allows you to define layout-related properties for the grid. It accepts only objects.
Choose between these four layout configurations for your grid; type, density, template, and autoHeight.

```json
var gridConfig = {
 layout : { key_1: 'value_1' }
}
```
### Layout Type
Choose your layout type by selecting between `row` or `card`.

```json
config = {
    layout: {
        type: 'row'/'card'
    }
}
```
### Layout Density
There are three options available to control the density of rows in a grid; default, compact, and comfortable. 

```json
config = {
    layout: {
        type: 'row',
        density: 'default'/'compact'/'comfortable'
    }
}
```
### Layout Template
This attribute only applies to card layout. Using this attribute, users can define the styling and layout. 

```json
config = {
    layout: {
        type: 'card',
        cardTemplate: function(params) {
            return '<div class="container"><span class="player-name">' + params.value['player_name'] +'</span>.......more html content.......</div>'
        }
    }
}
```
## Automatic Height
Users can choose to enable the `autoHeight` attribute. If the volume of data is high, then vertical scrollbars appear and if the volume of data is low, then the rest of the space is left blank. To override this behavior, i.e. expand or shrink grid size based on its content, users can choose to enable the flag autoHeight. For example:
```json
config = {
    layout: {
        autoHeight: true
    }
}
```

## Number of cards in a row
Use this attribute to configure the number of cards you wish to place in a row. Every card will have the same width and if any text cannot be accommodated in the assigned width, then ellipsis will appear unless wrapText is configured for the column. For example:  

```json
config = {
    layout: {
        numCards: 4
    }
}
```
Every card will have same width and if any text can not be accommodated in the assigned width then ellipsis will appear unless `wrapText` is configured for the column.

Here is a list of configurations available under layout:
<table>
<tr>
		<th>Property Name</th>
		<th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>`type`</td>
	<td>String</td>
	<td>A layout can be one of two types - `row` or `card` layout. By default the value is always `row`.</td>
</tr>
<tr>
	<td>`density`</td>
	<td>String</td>
	<td>Controls the density of rows in a grid, there are two options available: compact, comfortable. This is applicable for row layouts only.</td>
</tr>
<tr>
	<td>`cardTemplate`</td>
	<td>String</td>
	<td>By default, FusionGrid arranges card layout according to the default design.</td>
</tr>
<tr>
	<td>`autoHeight`</td>
	<td>Boolean</td>
	<td>By default, the grid is configured to render in the space it’s designated for.</td> 
</tr>
<tr>
	<td>`numCards`</td>
	<td>Number</td>
	<td>Users can configure the number of cards to place in a row.</td>
</tr>
</table>

## Pagination
This property allows you to configure the pagination component of the grid. Here is the syntax:
```json
var gridConfig = {
 pagination : { key_1: 'value_1' }
}
```
### Simple Pagination
Use only two arrows to navigate between pages, like this:
```json
config = {
    pagination: {
        enable: true
    }
}
```
### Show Page Numbers
To show the page number on top of the navigation arrows, follow this example:
```json
config = {
    pagination: {
        showPages: {
            enable: true
        }
    }
}
```
### Show Total number of Pages
To show the current page number, the total number of pages as well as arrows, follow the example below:
```json
config = {
    pagination: {
        showPages: {
            showTotal: true
        }
    }
}
```
### Jump to a specific page
Users can also enable jumping to a specific page, apart from linear navigation. 
```json
config = {
    pagination: {
        showPages: {
            userInput: true
        }
    }
}
```
### Show Total number of Rows
This attribute shows the total number of rows in the grid and the currently viewed rows.
```json
config = {
    pagination: {
        showRecordCount: true
    }
}
```
### Configuring Page Size
Users can configure the default page size like this:
```json
config = {
    pagination: {
        pageSize: {           
            default: 30
        }
    }
}
```
Or use the `options` attribute and select page size from the dropdown options:
```json
config = {
    pagination: {
        pageSize: {
           options: true/false/[number array],
        }
    }
}
```
If a user provides an array of numbers, those numbers are shown in the dropdown options. If a user provides any value beyond the range of the total number of elements, we will show those values, but if someone chooses those values, we will show all elements. If all provided values are beyond the range, we will fall back to default options. If the default page size is not provided but options are configured, then the first value of the options array will be considered the default page size. Suppose both options and default page size are configured, but the default page size value is not present in the options array. In that case, the first value of the options array will be considered as default page size, and additionally, an error will be logged in the background.

### First and Last pages
If this control is set to true, then two buttons will appear to navigate to the first or last page:
```json
config = {
    pagination: {
       showJumpToEndButtons: true
    }
}
```
Users can also individually disable the start or end button
```json
config = {
    pagination: {
       showJumpToFirstPageButton: false,
       showJumpToLastPageButton: true
    }
}
```
Here is a list of the available options:
<table>
<tr>
		<th>Property Name</th>
		<th>Data Type</th>
		<th>Description</th>
</tr>
<tr>
	<td>`enable`</td>
	<td>Boolean</td>
	<td>Enables pagination in the grid.</td>
</tr>
<tr>
	<td>`showPages`</td>
	<td>Object</td>
	<td>Enables you to configure page count. It has following properties available:
enable: Enables page numbers in the pagination.
showTotal: Show total number of pages available.
userInput: Allows users to input page number.</td>
</tr>
<tr>
	<td>`showRecordCount`</td>
	<td>Boolean</td>
	<td>Shows the total number of rows in the grid. For example:

{ showRecordCount : true }</td>
</tr>
<tr>
	<td>`pageSize`</td>
	<td>Object</td>
	<td>Allows you to configure page size-related controls. It offers the following properties:
1. default: Default page size. It should be numerical.
2. options: It accepts both boolean and an array of numbers to show the dropdown for users to configure page size.</td>
</tr>
<tr>
	<td>`showJumpToEndButtons`</td>
	<td>Boolean</td>
	<td>If this property is set to true, then both jump-to-first and jump-to-last buttons will appear for navigation.</td>
</tr>
<tr>
	<td>`showJumpToFirstPageButton`</td>
	<td>Boolean</td>
	<td>If this property is set to true, then only the jump-to-first button will appear for navigation.</td>
</tr>
<tr>
	<td>`showJumpToLastPageButton`</td>
	<td>Boolean</td>
	<td>If this property is set to true, then only the jump to-last button will appear for navigation.</td>
</tr>
</table>

## Tooltips
This property is part of column configuration. Tooltips for cells or columns should be configured on the individual column level. Here is the syntax:
```json
var gridConfig = {
 columns: [
   {
     field: 'value_1',
     tooltip : { }, // tooltip configs
   },
 ]}
```

### Enabling Tooltips
Enable header and column tooltips like this:

```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                enableHeaderTooltip: true/false
            }
      }]
};
```
By default, header tooltips are enabled once the tooltip object is defined. However, users can select to disable/enable header tooltip specifically.

### Configuring Header Tooltips
To provide custom text to tooltip in the header, follow the example below: 

```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                headerTooltip: 'Countries having trade connection.'
            }           
      }]
};
```
To show the tooltip on hovering a separate info/helper icon in the header, follow the example below:

```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                headerTooltip: 'Countries having trade connection',
                enableHeaderHelperIcon: true
            }           
      }]
};
```
### Enable/Disable a cell tooltip
Tooltip is automatically enabled once the tooltip object is defined. But to selectively disable or enable cell tooltip, users can follow the example below:

```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                enableCellTooltip: true
            }
      }]
};
```
If `cellTooltip` is not defined, but the tooltip is enabled, then the cell content will be shown in the tooltip.

### Conditionally define content for cell tooltip 
```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                cellTooltip: function(params) {
		        if (params['country_name']) {
				return 'Country : ' + params['country_name'] + ' in ' + params[continent]; 
                    } else {
                  	return 'Country name is missing';
                }
            }
      }]
};
```
## Cell info/helper tooltip 
Users can enable info/helper tooltip in cells using the following function:
```json
config = {
	columns: [{
		field: 'country_name',
            tooltip: {
                cellTooltip: function(params) {
		        if (params['country_name']) {
				return 'Country : ' + params['country_name'] + ' in ' + params[continent]; 
                    } else {
                  	return 'Country name is missing';
                    }
                },
                enableCellHelperIcon: true
            }           
      }]
};
```
Here is a list of properties available:
<table>
<tr>
	<th>Property Name</th>
	<th>Data Type</th>
	<th>Description</th>
</tr>
<tr>
	<td>`enable`</td>
	<td>Boolean</td>
	<td>Enables tooltips for the given column. For example:

{ tooltip : { enable: true; } }</td>
</tr>
<tr>
	<td>`enableHeaderTooltip`</td>
	<td>Boolean</td>
	<td>Enables tooltips for the column header. By default it will show the column header value in the tooltip.</td>
</tr>
<tr>
	<td>`headerTooltip`</td>
	<td>String</td>
	<td>Text to show when hovered over the header.</td>
</tr>
<tr>
	<td>`enableHeaderHelperIcon`</td>
	<td>Boolean</td>
	<td>Enables the helper icon that helps users understand that the column is hoverable.</td>
</tr>
<tr>
	<td>`enableCellTooltip`</td>
	<td>Boolean</td>
	<td>Enables tooltips for a cell. By default, tooltip text will be fetched from the cell value.</td>
</tr>
<tr>
	<td>`cellTooltip`</td>
	<td>String, Function</td>
	<td>If you pass a string value, it will be shown for all the cells. However, the passing function will give you the ability to render dynamic data as well. Function will provide you with a parameter that will give you access to cell and row data. You have to return a text value that can consist of HTML elements as well.</td>
</tr>
<tr>
	<td>`enableCellHelperIcon`</td>
	<td>Boolean</td>
	<td>Similar to head enableHeaderHelperIcon, this will enable the helper icon for all the cells.</td>
</tr>
</table>

## Row Configurations
Allows you to configure rows of the grid. It accepts an object of properties explained below. Here is the syntax:
```json
var gridConfig = {
 rowOptions: { key_1: 'value_1' }
}
```

### Setting Row Height
Row height affects all rows, but if the user specifically wants to define header row heights, then they can do so following the example below:
```json
config = {
    rowOptions: {
        rowHeight: '50px',
        headerRowHeight: '20px'
    }
}
```
### Styling Row
Users can apply row style. The attributes ‘style’ and/or ‘css’ can be used to style rows.
```json
config = {
    rowOptions: {
        style: {background: 'green'},
        class: ['row-class1','row-class2']
    }
}
```
If row style and cell style conflict, then cell style gets the precedence.

### Row Hover
Like styling row and column, hoverStyle and hoverClass accepts both style/css and a function for any rule-based hover. By default, row hover is enabled, but users can override these settings.
```json
config = {
    rowOptions: {
        hover: {
            enable: true,
            style: style object/func,
            class: css class name/func
        }
    }
}
```
### Row Selection
If selection is enabled, then on mouse click single row is selected
```json
config = {
    rowOptions: {
        rowSelection: {
            enable: true
        }
    }   
}
```
Users can also select multiple rows with checkboxes, as follows:

```json
config = {
    rowOptions: {
        rowSelection: {
            showSelectionCheckbox: true/false
        }
    }
}
```
Here is the list of properties:
<table>
<tr>
	<th>Property Name</th>
	<th>Data Type</th>
	<th>Description</th>
</tr>
<tr>
	<td>`rowHeight`</td>
	<td>String, Number</td>
	<td>Sets the height of rows in pixels.</td>
</tr>
<tr>
	<td>`headerRowHeight`</td>
	<td>String, Number</td>
	<td>Similar to rowHeight but the value gets applied to only the header row.</td>
</tr>
<tr>
	<td>`class`</td>
	<td>Array, Function</td>
	<td>Accepts an array of class names in string which will get assigned to all the rows. For example: 

{ class: ['class-1', 'class-2'] }

Or you could assign a function which should return an array of class names. This function provides a parameter that provides following properties:
rowIndex: Index of the row.
values: An object of values for the given rows.</td>
</tr>
<tr>
	<td>`style`</td>
	<td>Object, Function</td>
	<td>Helps you customize the appearance of the entire row by passing CSS properties in the form of JSON object like:

style: {
   'background-color': 'offwhite'
}

You could also pass a function which should return an object of CSS properties. Similar to the function passed to class, you get an object parameter to access the data of the corresponding cell.</td>
</tr>
<tr>
	<td>`enableHover`</td>
	<td>Boolean</td>
	<td>Enables hover state for the entire row.</td>
</tr>
<tr>
	<td>`hoverClass`</td>
	<td>Array, Function</td>
	<td>Works exactly like class but the class name will get applied when you hover the row only.</td>
</tr>
<tr>
	<td>`hoverStyle`</td>
	<td>Object, Function</td>
	<td>Works exactly like style but the class name will get applied when you hover the row only.</td>
</tr>
<tr>
	<td>`rowSelection`</td>
	<td>Boolean</td>
	<td>Enables single row selection.</td>
</tr>
<tr>
	<td>`selectedRowStyle`</td>
	<td>Array</td>
	<td>Configure appearance of selected rows.</td>
</tr>
<tr>
	<td>`showSelectionCheckbox`</td>
	<td>Boolean</td>
	<td>Enables multiple row selection with checkboxes.</td>
</tr>
</table>

## Conditional Formatting
Users can enable row and column conditional formatting to improve their grids. 

## Column Conditional Formatting
Column or cell conditional formatting can be achieved using the formatter option, style, by defaultRow or CSS. Formatter gives more flexibility, as shown in the example below:
For instance, if a user wants to color red if revenue is less than 1000, color the cell yellow if revenue is between 1000 to 5000 and above that color green.

```json
config = {
    columns: [{
        field: 'Revenue',
        formatter: function(params) {
            let value = '$' + formatNumbers(params.cellValue);
            let bgColor = '#ff0000';
            if (params.cellValue > 1000 && params.cellValue < 5000) {
                bgColor = '#ffff00'
            } else if (params.cellValue > 5000) {
                bgColor = '#00ff00'
            }
            return '<span style="background-color: "' + bgColor + '/>' + value + '</span>';
        }
    }]
}
```
Using style or CSS is more recommended when you are required to set only style conditionally, like this:
```json
config = {
    columns: [{
        field: 'Revenue',
        style: function(params) {           
            let bgColor = '#ff0000';
            if (params.cellValue > 1000 && params.cellValue < 5000) {
                bgColor = '#ffff00'
            } else if (params.cellValue > 5000) {
                bgColor = '#00ff00'
            }
            return { background-color: bgColor };
        }
    }]
}
```
## Row Conditional Formatting
Conditional style can also be applied to rows. The `RowOptions` has both ‘style’ and ‘css’ attributes that accept functions. If we want to implement the same example above, we want to apply the style to row-level instead of cell-level.

```json
config = {
    rowOptions: {
        style: function(params) {
            let revenue = params.values['Revenue'];
            if (revenue < 1000) {
                return {background-color: '#ff0000'}
            } else if (revenue > 1000 && revenue < 5000) {
                return {background-color: '#ffff00'}
            } else {
                return {background-color: '#00ff00'}
            }
        }       
    }
}
```
The params consist of the following attributes:
`values` - consists of all cell values
`rowIndex` - index of the row on the current page
`node` - DOM node of row

## Viewports
FusionGrid provides fice default viewports with default layouts and default breakpoints.
<table>
<tr>
		<th>Viewport Name</th>
<th>Min Width</th>
<th>Max Width</th>
<th>Layout Type</th>
<th>Layout Density</th>
</tr>
<tr>
	<td>mobile</td>
	<td>0</td>
	<td>550px</td>
	<td>card</td>
	<td></td>
</tr>
<tr>
	<td>tablet-portrait</td>
	<td>551px</td>
	<td>1023px</td>
	<td>card</td>
	<td></td>
</tr>
<tr>
	<td>tablet-landscape</td>
	<td>1024px</td>
	<td>1199px</td>
	<td>row</td>
	<td>compact</td>
</tr>
<tr>
	<td>desktop</td>
	<td>1200px</td>
	<td>1399px</td>
	<td>row</td>
	<td>default</td>
</tr>
<tr>
	<td>large-desktop</td>
	<td>1400px</td>
	<td></td>
	<td>row</td>
	<td>comfortable</td>
</tr>
</table>
By default, the ‘row’ layout will appear for desktop and tablet landscape mode, and the ‘card’ layout will appear for mobile and tablet portrait mode.

Here is the syntax to define viewport-specific properties:

```json
var gridConfig = {
 viewports : { "mobile": { config: {  } } }
}
```
### Viewport object structure
To configure a viewport, users need to mention `minScreenWidth` and `maxScreenWidth` attributes.

### Override default Viewport configurations
To set your customized viewport configurations, you must mention the viewport name and define your preferred settings. In the example below, for mobile devices layout type is changed from card row.
```json
gridConfig = {
	viewports: {
          'mobile': {
               config: {
                   layout: {
                       type: 'row'
                   }
               }
           }
      }
}
```
Additionally, users can also provide custom viewport and configuration.
```json
gridConfig = {
    viewports: {
        'mobile-portrait': {
            minScreenWidth: 0,
            maxScreenWidth: 400,
            config: {
                layout: {
                    type: 'card',
                    cardTemplate: function(params) { return some html template;}
                }
            }
        },
        'mobile-landscape': {
            maxScreenWidth: 600,
            config: {
                layout: {
                    type: 'row',
                    density: 'compact'
                }
            }
        }
    }
}
```
Please note - while defining custom viewport, either min or max width should be mentioned. Otherwise, the viewport will not take into effect.

Each viewport is a key value pair, where key denotes the viewport name and value is a JSON object which consists of the following properties: 
<table>
<tr>
	<th>Property Name</th>
	<th>Data Type</th>
	<th>Description</th>

</tr>
<tr>
	<td>minScreenWidth</td>
	<td>Number</td>
	<td>Assigns the minimum width of the specified view port.</td>
</tr>
<tr>
	<td>maxScreenWidth</td>
	<td>Number</td>
	<td>Assigns the maximum width of the specified view port.</td>
</tr>
<tr>
	<td>config</td>
	<td>Object</td>
	<td>Defines the configuration for the given viewport. You can set `layout`, `pagination`, `rowOptions` and `columns`.</td>
</tr>
</table>

## Sorting
The following are sorting configurations you can add to your grid. 

### Column Sorting
Users can enable sorting for each column individually.
```json
config = {
	columns: [{
		field: 'country_name',
            sortable: true
      }]
};
```
The sorting operation triggers when clicking anywhere on the header (apart from other icons like a filter or a tooltip). The first click on the header sorts the column in ascending order. The second click sorts the column in descending order, and a third click clears the sorting. 

### Enabling or disabling Sorting
Users can choose to enable column sorting by setting the `sorting` attribute to true or false. 
```json
config = {
	columns: [{
		field: 'country_name',
            sortable: true/false
      }]
};

config = {
	columns: [{
		field: 'country_name',
            sortable: {
                enable: true/false
            }
      }]
};
```
### Pre-defined Sorting
Apply sort to specific columns by mentioning the `applySort` attribute to either `asc` or `desc` order.  
```json
config = {
	columns: [{
		field: 'Revenue',
            sortable: {
                applySort: 'desc'
            }
      }]
};
```
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>

</tr>
<tr>
	<td>sortable</td>
	<td>boolean</td>
	<td>Enables Column sorting.</td>
</tr>
<tr>
	<td>applySort</td>
	<td>boolean</td>
	<td>Choose to sort in  `asc` or `desc` order .</td>
</tr>
</table>

## Events
All event listeners can be defined in JSON files. And this is the recommended way.
```json
config = {
    'events': {
        'initialized': function(eventObj) { console.log('Grid Initialized - but not yet rendered'); },
        'rendered': function(eventObj) { console.log('Grid rendered'); },
    }
}
```

## Filters
You can apply four different types of filters to your columns; column conditional filter, value filter, custom filter, and quick search filter.

### Column Conditional Filter
Apply column filters by enabling them like this:
```json
config = {
	columns: [{
		field: 'Revenue',
            filter: true
      }]
};
```
Or like this:
```json
config = {
	columns: [{
		field: 'Revenue',
            filter: {
                conditionalFilter: {
                    enable: true
                }
            }
      }]
};
```
The following are the conditions that users can apply to the filters:
<table>
<tr>
		<th>String Type Columns</th>
<th>Number Type Columns</th>
<th>Datetime Type Columns</th>

</tr>
<tr>
	<td>Equals</td>
	<td>Equals</td>
	<td>Equals</td>
</tr>
<tr>
	<td>Not equals</td>
	<td>Not equals</td>
	<td>Not equals</td>
</tr>
<tr>
	<td>Contains</td>
	<td>Less than</td>
	<td>Is before</td>
</tr>
<tr>
	<td>Does not contain</td>
	<td>Less than or equal to</td>
	<td>Is on and before</td>
</tr>
<tr>
	<td>Starts with</td>
	<td>Greater than</td>
	<td>Is after</td>
</tr>
<tr>
	<td>Ends with</td>
	<td>Greater than or equal to</td>
	<td>Is on and after</td>
</tr>
<tr>
	<td>Is empty</td>
	<td>Between</td>
	<td>Between</td>
</tr>
<tr>
	<td>Is not empty</td>
	<td>Is empty</td>
	<td>Is empty</td>
</tr>
<tr>
	<td></td>
	<td>Is not empty</td>
	<td>Is not empty</td>
</tr>
</table>

### Enable Multiple Filters
Users can enable multiple filters per column by following the example below:
```json
config = {
	columns: [{
		field: 'Revenue',
            filter: {
                conditionalFilter: {
                    enableMultiFilter: true
                }
            }
      }]
};
```
Users can combine multiple filters per column using the `and`/`or` operations.

### Show the Apply and Cancel buttons
To enable the Apply and Cancel buttons on your filters, make sure to enable `showApplyCancel` like the example below:
```json
config = {
	columns: [{
		field: 'Revenue',
            filter: {
                conditionalFilter: {
                    showApplyCancel: true
                }
            }
      }]
};
```
### Value Filters
Enable value filters to show a list of all available values for a particular column. To enable a value filter, follow the example below:

```json
config = {
	columns: [{
		field: 'Category',
            filter: {
                valueFilter: {
                    enable: true
                }
            }
      }]
};
```
### Enabling Multi-select mode
Users can enable the multiple selection operation to use checkboxes to select multiple columns or use the ‘Select All’ operation to select all columns.
```json
config = {
	columns: [{
		field: 'Category',
            filter: {
                valueFilter: {
                    enableMultiSelect: true
                }
            }
      }]
};
```
### Enabling the search box 
Users can also enable a search box to search for values like shown in the example below:
```json
config = {
	columns: [{
		field: 'Category',
            filter: {
                valueFilter: {
                    enableMultiSelect: true,
                    enableSearch: true
                }
            }
      }]
};
```
## Custom Filters
Users can customize filters by defining conditions to apply to your filter. Follow the example below: 
```json
config = {
	columns: [{
		field: 'Nationality',
            filter: {
                customFilter: {
                    options: [{
                        displayText: 'English Premier League',
                        filterFunc: function(row, column) {
                            return ['Manchester Utd', 'Liverpool', 'Arsenal'].indexOf(row[columns['Nationality']]) >= 0;
                        }
                    }, {
                        displayText: 'Bundesliga',
                        filterFunc: function(row, column) {
                            return ['Bayern Munich', 'Borussia Dortmund'].indexOf(row[columns['Nationality']]) >= 0;
                        }
                    }, ...]
                }
            }
      }]
};
```
Each option has two configurations a display text and a filter function.
<table>
<tr>
		<th>Property Name</th>
<th>Data Type</th>
<th>Description</th>

</tr>
<tr>
	<td>filter</td>
	<td>Boolean</td>
	<td>Applies filter to columns when enabled.</td>
</tr>
<tr>
	<td>conditionalFilter</td>
	<td>Boolean</td>
	<td>Enables conditional filtering</td>
</tr>
<tr>
	<td>enableMultiFilter</td>
	<td>Boolean</td>
	<td>Enables multiple filtering per column</td>
</tr>
<tr>
	<td>valueFilter</td>
	<td>Boolean</td>
	<td>Enables filtering per values</td>
</tr>
<tr>
	<td>enableMultiSelect</td>
	<td>Boolean</td>
	<td>Enables multiple value selection</td>
</tr>
<tr>
	<td>enableSearch</td>
	<td>Boolean</td>
	<td>Enables the search bar</td>
</tr>
<tr>
	<td>showApplyCance;</td>
	<td>Boolean</td>
	<td>Enables the Apply and Cancel buttonsr</td>
</tr>
</table>

## Specify Defaults
Specify your preferences by setting your default common column configurations, using the `defaultColumnOptions`, like this:
```json
config = {
    defaultColumnOptions: {
        width: 300,
        enableHover: true,
        hoverClass: 'col-hover'
    },
    columns: [{ field: 'Country' },{ 'Continent' },{ 'Revenue' }]
}
```
The difference between defaultColumnOptions and columns is: columns allow you to configure on an individual column level while defaultColumnOptions allows you to define it on the global level. All the properties available in columns are available in defaultColumnOptions as well with the only exceptions of field and type.
