---
title: Export chart as image | FusionGrid
description: This article talks about FusionGrid features
heading: Grid Attributes 
---

 # Grid Attributes

## Columns and Headers

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

<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`field`</td>
	<td>string</td>
	<td>Defines the Column name.</td>
</tr>
</table>


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

<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`field`</td>
	<td>string</td>
	<td>Defines the Column name.</td>
</tr>
<tr>
	<td>`headerText`</td>
<td>string</td>
	<td>Defines the Columns Header name</td>
</tr>
</table>

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

<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`style`</td>
	<td>array</td>
	<td>Defines the apperance for all the cells of a column.</td>
</tr>
<tr>
	<td>`headerStyle`</td>
	<td>array</td>
<td>Defines apperance for a header cell.</td>
</tr>
<tr>
	<td>`cellStyle`</td>
	<td>array</td>
	<td>Defines apperance of a value cell.</td>
</tr>
</table>

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

<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`width`</td>
	<td>number</td>
	<td>Defines the width for the columns.  Acceptable units are: `px`, `em`, `rem`, `pt`, and `%`. </td>
</tr>
<tr>
	<td>`minWidth`</td>
	<td>number</td>
<td>Defines the minimum width for the columns.</td>
</tr>
<tr>
	<td>`maxWidth`</td>
	<td>number</td>
<td>Defines the maximum width for the columns.</td>
</tr>
</table>

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`wrapText`</td>
	<td>boolean</td>
	<td>When set to true, wraps text in the cell. </td>
</tr>
</table>

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
### Chart Column Type

## Layout Configurations
Choose between these four layout configurations for your grid; type, density, template, and autoHeight.

### Layout Type
Choose your layout type by selecting between `row` or `card`.

```json
config = {
    layout: {
        type: 'row'/'card'
    }
}
```
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`row`</td>
	<td></td>
	<td>Arrenges data in a row-column tabular way.</td>
</tr>
<tr>
	<td>`card`</td>
<td></td>
	<td>Each record is described in a card.</td>
</tr>
</table>

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`default`</td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td>`compact`</td>
<td></td>
	<td></td>
</tr>
<tr>
	<td>`comfortable`</td>
<td></td>
	<td></td>
</tr>

</table>

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>``</td>
	<td></td>
	<td></td>
</tr>
</table>

## Automatic Height
Users can choose to enable the `autoHeight` attribute. 
```json
config = {
    layout: {
        autoHeight: true
    }
}
```
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`autoHeight`</td>
	<td>boolean</td>
	<td>When set to true it automatically renders grid in designated space.</td>
</tr>
</table>

## Number of cards in a row
Use this attribute to configure the number of cards you wish to place in a row.  

```json
config = {
    layout: {
        numCards: 4
    }
}
```
Every card will have same width and if any text can not be accommodated in the assigned width then ellipsis will appear unless `wrapText` is configured for the column.
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`numCards`</td>
	<td>number</td>
	<td>Indicates the number of cards to place in a row. </td>
</tr>
</table>

## Pagination
The following are some configurations regarding pagination that you can set to your preferences.

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`pagination`</td>
	<td>boolean</td>
	<td>When enabled, displays navigation arrows.</td>
</tr>
<tr>
	<td>`showPages`</td>
	<td>boolean</td>
	<td>When enabled, shows current page number.</td>
</tr>
<tr>
	<td>`showTotal`</td>
	<td>boolean</td>
	<td>When enabled, shows total number of pages.</td>
</tr>
<tr>
	<td>`userInput`</td>
	<td>boolean</td>
	<td>When set to true, allows user to enter the page number to jump to a specific page. 
</td>
<tr>
	<td>`showRecordCount`</td>
	<td>boolean</td>
	<td>When set to true, shows total number of rows.</td>
</tr>
<tr>
	<td>`pageSize`</td>
	<td>numeric</td>
	<td>Configure the page size.</td>
</tr>
<tr>
	<td>`showJumpToEndButtons`</td>
	<td>boolean</td>
	<td>Navigate to the first or last page.</td>
</tr>
<tr>
	<td>`showJumpToFirstPageButton`</td>
	<td>boolean</td>
	<td>Choose to enable or not the first page button.</td>
</tr>
<tr>
	<td>`showJumpToLastPageButton`</td>
	<td>boolean</td>
	<td>Choose to enable or not the last page button.</td>
</tr>
</table>

## Tooltips
The following are tooltip configurations you can add to your grid.

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`tooltip`</td>
	<td>boolean</td>
	<td>Choose to enable tooltips.</td>
</tr>
<tr>
	<td>`enableHeaderTooltip`</td>
	<td>boolean</td>
	<td>Choose to enable header tooltips.</td>
</tr>
<tr>
	<td>`headerTooltip`</td>
	<td>string</td>
	<td>Input text to display as header tooltip.</td>
</tr>
<tr>
	<td>`enableHeaderHelperIcon`</td>
	<td>boolean</td>
	<td>Shows tooltip as an info/help icon.</td>
</tr>
<tr>
	<td>`enableCellTooltip`</td>
	<td>boolean</td>
	<td>Enables or disables tooltip for specific cells.</td>
</tr>
<tr>
	<td>`enableCellHelperIcon`</td>
	<td>boolean</td>
	<td>Enables helper icon for specific cells.</td>
</tr>
</table>

## Row Configurations
The following samples show how row-level configurations can be done by setting the rowOptions object in grid config.

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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
	<td>`rowHeight`</td>
	<td>numeric</td>
	<td>Set the height for the row.</td>
</tr>
<tr>
	<td>`headerRowHeight`</td>
	<td>numeric</td>
	<td>Set the header row height.</td>
</tr>
<tr>
	<td>`hover`</td>
	<td>boolean, array</td>
	<td>Enables the hover option, user can style it.</td>
</tr>
<tr>
	<td>`rowSelection`</td>
	<td>boolean</td>
	<td>Enables single row selection.</td>
</tr>
<tr>
	<td>`selectedRowStyle`</td>
	<td>array</td>
	<td>Configure appearance of selected rows.</td>
</tr>
<tr>
	<td>`showSelectionCheckbox`</td>
	<td>boolean</td>
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
	<td>N/A</td>
</tr>
<tr>
	<td>tablet-portrait</td>
	<td>551px</td>
	<td>1023px</td>
	<td>card</td>
	<td>N/A</td>
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
<table>
<tr>
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>

</tr>
<tr>
	<td>minScreenWidth</td>
	<td>numeric</td>
	<td>Defines the minimum width bound.</td>
</tr>
<tr>
	<td>maxScreenWidth</td>
	<td>numeric</td>
	<td>Defines the maximum width bound.</td>
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
		<th>Attribute</th>
<th>Type</th>
<th>Description</th>

</tr>
<tr>
	<td>filter</td>
	<td>boolean</td>
	<td>Applies filter to columns when enabled.</td>
</tr>
<tr>
	<td>conditionalFilter</td>
	<td>boolean</td>
	<td>Enables conditional filtering</td>
</tr>
<tr>
	<td>enableMultiFilter</td>
	<td>boolean</td>
	<td>Enables multiple filtering per column</td>
</tr>
<tr>
	<td>valueFilter</td>
	<td>boolean</td>
	<td>Enables filtering per values</td>
</tr>
<tr>
	<td>enableMultiSelect</td>
	<td>boolean</td>
	<td>Enables multiple value selection</td>
</tr>
<tr>
	<td>enableSearch</td>
	<td>boolean</td>
	<td>Enables the search bar</td>
</tr>
<tr>
	<td>showApplyCance;</td>
	<td>boolean</td>
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
