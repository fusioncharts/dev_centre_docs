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
To create a multi-column group, the user needs to define group names and then columns as children of the group. Any column which has children is considered as a group. The Group header must not be linked to any field in the schema, if it’s specified, the field attribute will be ignored, and a warning should be thrown.
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
The widths’ acceptable units are: `px`, `em`, `rem`, `pt`, and `%`.

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
By default, text wrapping is not enabled, but users can enable text wrapping as follows:
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
formatter: function(params) {}

Here params contain three major properties -
cellValue - contains the current cell value
values - values of all cells of the current record
cellIndex - index of the cell 

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

