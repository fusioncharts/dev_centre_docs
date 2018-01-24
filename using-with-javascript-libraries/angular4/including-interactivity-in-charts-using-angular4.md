---
permalink: using-with-javascript-libraries/anguar4/including-interactivity-in-charts-using-anguar4.html
title: Including Interactivity in Charts Using Angular4 | FusionCharts
description: This section talks about including interactivity in charts using Angular4
heading: Including Interactivity in Charts Using Angular4
chartPresent: true
---
Angular is a front-end Javascript based framework. FusionCharts Suite XT comes with an Angular binding, using the angular4-fusioncharts component, that allows rendering interactive charts in Angular4 applications. 

So far, we’ve seen how you can <a href="/using-with-javascript-libraries/angular4/creating-charts-using-the-fusioncharts-angular4-component.html">create a simple chart</a> using the angular4-fusioncharts component as well as how you can <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4.html">add advanced configurations</a> to your charts. In this article, we'll learn how to use the angular4-fusioncharts component to include interactivity in your charts.

Let’s say Harry has a dashboard with a pie2d and a column2d chart to plot sales data. The pie 2D chart plots collective sales for the retail and wholesale stores; the column 2D chart plots sales for individual stores. Harry wants his charts to be interactive in a way that when the pie slice representing retail stores is clicked, the column 2D chart shows data only for all retail stores, and likewise for the wholesale stores.

The dashboard looks like as shown below:

{% embed_chart using-with-javascript-libraries-angular4-including-interactivity-in-charts-using-angular4-example-1.js %}

<p class="text-info">
The complete code for this dashboard is given at the end of this article, after all steps have been explained.
</p>

The following  steps describe in detail, along with code samples, how you can establish data interactivity between the charts:

### Step 1: Preparing the Data

The data you want to showcase in the dashboard can be in any format. FusionCharts supports only JSON and XML data formats; for our sample, we’ll use data in the JSON format, as given below:

```javascript
var completeData = [
    {
        label: "Bakersfield Central",
        category: "Retail",
        value: "880000",
        city: "NYC"
    },
    {
        label: "Garden Groove harbour",
        category: "General",
        value: "730000",
        city: "London"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Daly City Serramonte",
        value: "330000",
        category: "General",
        city: "Mumbai"
    }
];

/** Column Chart's 'dataSource' **/
var revenueChartDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        theme:"fint"
    },
    data: completeData
};

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        caption: "Categories of Harry's SuperMart",
        theme:"fint",
        enablemultislicing: "0"
    },
    data: [
        {
            label: "General",
            value: 0
        },
        {
            label: "Retail",
            value: 0
        }
    ]
};

/** Building data for Pie Chart based on the category of the mart stores **/
for (var i = 0, len = completeData.length; i < len; i++) {
    if (completeData[i].category === "General") {
        categoryChartDataSource.data[0].value += 1;
    }
    else {
        categoryChartDataSource.data[1].value += 1;
    }
}
```

### Step 2: Defining an Event’s Behavior for a Filter

Next, we’ll configure the `slicingStart` event to be triggered when a pie slice is clicked and the slice starts slicing out. In response to the event being triggered, the column chart will be re-rendered to show data only for the store type corresponding to the pie slice clicked.

The code to do this is given below:

```javascript
var revenueChartConfig = {
     /** FusionCharts Configs **/
};

function handleUserInput(filterValue) {
    if (filterValue.length !== 0) {
        const rows = [];
        completeData.forEach(function(mart) {
            if (mart.category === filterValue) {
                rows.push(mart);
            }
        });
        return rows;
    }
    else {
        return completeData;
    }
}

var categoryChartConfig = {

    /** FusionCharts Configs **/

    events: {

        /***
        ** Slicing event of Pie Chart
        ***/
        slicingStart: function (evtObj, argObj) {
            if (!argObj.slicedState) {
                revenueChartConfig.dataSource.data = handleUserInput(argObj.data.categoryLabel);
            } else {
                revenueChartConfig.dataSource.data = handleUserInput('');
            }
        }
    }
};
```

### Step 3: Rendering the Chart

The Angular code for this chart is given below:

```javascript
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    revenueChartConfig:any = revenueChartConfig;
    categoryChartConfig:any = categoryChartConfig;
}
```

The HTML template to create this chart is given below:
```html
<fusioncharts
    [chartConfig]="categoryChartConfig"
></fusioncharts>
<br/>
<br/>
<fusioncharts
    [chartConfig]="revenueChartConfig"
></fusioncharts>
```

The complete code for the above sample is given below:

<b> The HTML template </b>
```html
<fusioncharts
    [chartConfig]="categoryChartConfig"
></fusioncharts>
<br/>
<br/>
<fusioncharts
    [chartConfig]="revenueChartConfig"
></fusioncharts>
```

<b> The Angular code </b>
```javascript
import { Component } from '@angular/core';

/** Raw data **/
var completeData = [
    {
        label: "Bakersfield Central",
        category: "Retail",
        value: "880000",
        city: "NYC"
    },
    {
        label: "Garden Groove harbour",
        category: "General",
        value: "730000",
        city: "London"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Daly City Serramonte",
        value: "330000",
        category: "General",
        city: "Mumbai"
    }
];

/** Column Chart's 'dataSource' **/
var revenueChartDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        theme:"fint"
    },
    data: completeData
};

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        caption: "Categories of Harry's SuperMart",
        theme:"fint",
        enablemultislicing: "0"
    },
    data: [
        {
            label: "General",
            value: 0
        },
        {
            label: "Retail",
            value: 0
        }
    ]
};

/** Building data for Pie Chart based on the category of the mart stores **/
for (var i = 0, len = completeData.length; i < len; i++) {
    if (completeData[i].category === "General") {
        categoryChartDataSource.data[0].value += 1;
    }
    else {
        categoryChartDataSource.data[1].value += 1;
    }
}

var revenueChartConfig = {
    width: 500,
    height: 300,
    type: "column2d",
    dataFormat: "json",
    dataSource: revenueChartDataSource
};

function handleUserInput(filterValue) {
    if (filterValue.length !== 0) {
        const rows = [];
        completeData.forEach(function(mart) {
            if (mart.category === filterValue) {
                rows.push(mart);
            }
        });
        return rows;
    }
    else {
        return completeData;
    }
}

var categoryChartConfig = {
    width: 500,
    height: 300,
    type: "pie2d",
    dataFormat: "json",
    dataSource: categoryChartDataSource,
    
    events: {
        /** Slicing event of Pie Chart **/
        slicingStart: function (evtObj, argObj) {
            if (!argObj.slicedState) {
                revenueChartConfig.dataSource.data = handleUserInput(argObj.data.categoryLabel);
            }
            else {
                revenueChartConfig.dataSource.data =  handleUserInput('');
            }
        }
    }
};


@Component({
    selector: 'app-root',
   templateUrl: './app.component.html',
})
export class AppComponent {
    revenueChartConfig:any = revenueChartConfig;
    categoryChartConfig:any = categoryChartConfig;
}
```

## Was there a problem rendering the chart?

In case something went wrong and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded. Check if the path to fusioncharts.js file is correct, and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](https://www.fusioncharts.com/dev/troubleshooting/debugger.html)