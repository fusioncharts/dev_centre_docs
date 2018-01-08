---
permalink: using-with-javascript-libraries/vuejs/including-interactivity-in-charts-using-vuejs.html
title: Including Interactivity in Charts Using VueJS | FusionCharts
description: This article focuses on how you can use the Vue-FusionCharts component to add annotations, change chart type at runtime, update chart data and attributes dynamically.
heading: Including Interactivity in Charts Using VueJS
chartPresent: true
---

VueJS is a progressive JavaScript framework for building user interfaces. So far, we’ve seen how you can create a simple chart using the vue-fusioncharts component as well as how you can add advanced configurations for your charts. 

In this article, we’ll look at how you can use the VueJS and FusionCharts binding to include interactivity in the charts. 

Let's say Harry has a dashboard with a pie2d and a column2d chart to plot sales data. The pie 2D chart plots collective sales for the retail and wholesale stores; the column 2D chart plots sales for individual stores. Harry wants his charts to be interactive in a way that when the pie slice representing retail stores is clicked, the column 2D chart shows data only for all retail stores, and likewise for the wholesale stores.

The dashboard looks like as shown below:

{% embed_chart using-with-javascript-libraries-reactjs-including-interactivity-in-charts-using-vuejs-example-1.js %}

<p class="text-info"> The complete code for this dashboard is given at the end of this article, after all steps have been explained. </p>

The following three steps describe in detail, with code samples, how you can establish data interactivity between charts:

### Step 1: Creating the data

The data we want to showcase in the dashboard can be in any format. FusionCharts supports the JSON and XML data formats; for our sample, we’ll use data in the JSON format, as given below:

```javascript
var completeData = [{
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
        theme: "fint"
    },
    data: completeData
};

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        caption: "Categories of Harry's SuperMart",
        theme: "fint",
        enablemultislicing: "0"
    },
    data: [{
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
    } else {
        categoryChartDataSource.data[1].value += 1;
    }
}
```

### Step 2: Defining an Event’s Behavior for a Filter

Next, we’ll configure the `slicingStart` event to be triggered when a pie slice is clicked and the slice starts __slicing out__. In response to the event being triggered, the column chart will be re-rendered to show data only for the store type corresponding to the pie slice clicked. 

The code to do this is given below:

```javascript
var revenueChartOptions = {
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
    } else {
        return completeData;
    }
}

var categoryChartOptions = {

    /** FusionCharts Configs **/

    events: {

        /***
         ** Slicing event of Pie Chart
         ***/
        slicingStart: function(evtObj, argObj) {
            if (!argObj.slicedState) {
                revenueChartOptions.dataSource.data = handleUserInput(argObj.data.categoryLabel);
            } else {
                revenueChartOptions.dataSource.data = handleUserInput('');
            }
        }
    }
};
```

### Step 3: Render the chart

The HTML code to create the sample is given below:

```html
<div id="app">
    <fusioncharts :options="categoryChartOptions"></fusioncharts>
    <br/>
    <br/>
    <fusioncharts :options="revenueChartOptions"></fusioncharts>
</div> 
```

The VueJS code for the sample chart is given below:

```javascript
Vue.use(VueFusionCharts);

const app = new Vue({
    el: '#app',
    data: {
        revenueChartOptions: revenueChartOptions,
        categoryChartOptions: categoryChartOptions
    }
});
```

The complete source code to render the above dashboard is given below:

```javascript
var completeData = [{
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
        theme: "fint"
    },
    data: completeData
};

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        caption: "Categories of Harry's SuperMart",
        theme: "fint",
        enablemultislicing: "0"
    },
    data: [{
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
    } else {
        categoryChartDataSource.data[1].value += 1;
    }
}

var revenueChartOptions = {
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
    } else {
        return completeData;
    }
}

var categoryChartOptions = {
    width: 500,
    height: 300,
    type: "pie2d",
    dataFormat: "json",
    dataSource: categoryChartDataSource,

    events: {
        /** Slicing event of Pie Chart **/
        slicingStart: function(evtObj, argObj) {
            if (!argObj.slicedState) {
                revenueChartOptions.dataSource.data = handleUserInput(argObj.data.categoryLabel);
            } else {
                revenueChartOptions.dataSource.data = handleUserInput('');
            }
        }
    }
};

Vue.use(VueFusionCharts);

const app = new Vue({
    el: '#app',
    data: {
        revenueChartOptions: revenueChartOptions,
        categoryChartOptions: categoryChartOptions
    }
});
```

## Was there a problem rendering the chart?

In case something went wrong and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if fusioncharts.js was loaded. Check if the path to fusioncharts.js file is correct, and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](https://www.fusioncharts.com/dev/troubleshooting/debugger.html)