---
title: Export Grid | FusionGrid
description: This article talks about using column filters
heading: Data Export
---
# Column Group
To create a multi-column group, the user need to define the group name and then columns as children of the group.

## Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
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
