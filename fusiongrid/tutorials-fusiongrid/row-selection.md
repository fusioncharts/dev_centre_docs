---
title: Row Selection| FusionGrid
description: This article talks about using column filters
heading: Row Selection
---

# Row Selection
Users can enable row selection so upon a click the desired row or rows are selected to highlight the most relevant information.


## Prerequisites
Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code
There are two selection modes, single select or multiple selection.
To enable row selection use the rowSelection property and use the enableSelectionCheckbox like this:
```json
config = {
    rowOptions: {
        rowSelection: {
          enable: true,
          enableSelectionCheckbox: true/false // true is the default value
        }
    }
};
```
