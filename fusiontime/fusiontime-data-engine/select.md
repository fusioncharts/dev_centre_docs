---
title: Select | FusionCharts
description: This article outlines the steps to add select operation.
heading: Select
---

'Select' operation should be used only when you want to see the entire data of the `DataTable` somewhere like in a grid. This is where the `select` operation becomes useful. You can use this operation to select one or more columns using different criteria as per your requirements. 

Note that when you use the Select operation on a `DataTable`, it will generate a child table with only the selected columns. You can then build a chart with the child table. 

In the following example, you can see how data is selected from the `DataTable` using the fields `Country` and `Origin`.

Refer to the code given below:

```  

import DataTable from '@fusioncharts/datatable';

import FusionCharts from 'fusioncharts';

import TimeSeries from 'fusioncharts/viz/timeseries';

import { filter, equals, between } from '@fusioncharts/datastore/operators';

import { before, duration, DatetimeUnits } from '@fusioncharts/datastore/utils/date';

FusionCharts.addDep(TimeSeries);

const view = new DataTable([], {}).getView();

var dataStore = new DataStore(data, schema);

var dataTable = dataStore.getDataTable();

select(['Country', 'Origin']);

new FusionCharts({

  type: 'timeseries',

  width: '640',

  height: '480',

  dataSource: <JSON>

}).render();

```

The chart is given below:

<<Live chart>>

