---
title: Export chart as image | FusionGrid
description: This article talks about using row sorting
heading: Row Sorting
---

# Row Sorting

For a faster way of analyzing and grouping relevant data, Fusiongrid allows users to sort columns in ascending and descending order. 
To enable this feature on your grid include the property 'sortable' and set it to 'true', see the below syntax for reference:

## Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
```json
config = {
	columns: [{
		field: 'country_name',
            sortable: {
                enable: true/false
            }
      }]
};
```
