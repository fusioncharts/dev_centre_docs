---
title: Configuring your Chart using Angular | FusionCharts
description: This article focuses on different type of configurations possible using Angular.
heading: Configuring your Chart using Angular
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `angular-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/angular/angular/configure-your-chart-using-angular#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/angular/angular/configure-your-chart-using-angular#update-chart-attributes-5)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to see changes):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2d** chart. The code is given below:

```
// Setup needed in app.module.ts
import {
    NgModule,
    enableProdMode
} from '@angular/core'
import {
    AppComponent
} from './app.component';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FusionChartsModule
} from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion)

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FusionChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

> The `<fusioncharts></fusioncharts>` component is available for use in any component throughout your app. We will render our first chart in the main `app.component`.


### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// in app.component.ts
import {
    Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    type = "Column2D";
    width = "600";
    height = "300";
    dataFormat = "json";
    dataSource: any = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
            "updateAnimDuration": "0.4"
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    };

    getRandomNumber = function() {
        var max = 290,
            min = 30;
        return Math.round(((max - min) * Math.random()) + min);
    }
    updateMyChartData() {
        this.dataSource.data[2].value = this.getRandomNumber();
        this.dataSource.data[3].value = this.getRandomNumber();
    }

    constructor() {

    }
}
```

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    width={{width}}
    height={{height}}
    type={{type}}
    dataFormat={{dataFormat}}
    [dataSource]=dataSource >
</fusioncharts>
```

## Update Chart Attributes

A chart, configured to update the **chart caption** and **sub-caption** alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

### Setup the Main Module

In this step, we will setup the main module to create the **Column 2d** chart. The code is given below:

```
// Setup needed in app.module.ts
import {
    NgModule,
    enableProdMode
} from '@angular/core'
import {
    AppComponent
} from './app.component';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FusionChartsModule
} from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion)

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FusionChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

> The `<fusioncharts></fusioncharts>` component is available for use in any component throughout your app. We will render our first chart in the main `app.component`.

### Add data to `app.component.ts`

Add the following code to `app.component.ts`:

```
// in app.component.ts
import {
    Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',

})

export class AppComponent {

    dataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    };

    changeBackgroundColor = function() {
        this.dataSource.chart.bgColor = "#efefef";
    };

    changeCaptionTextAlignment = function() {
        this.dataSource.chart.captionAlignment = "left";
    };

    constructor() {
    }
}
```

### Add data to `app.component.html`

Add the following code to `app.component.html`:

```
<!-- in app.component.html -->
<fusioncharts
    width="700" 
    height="400"
    type="column2d"
    [dataSource]="dataSource" >
</fusioncharts>

<p><a class="btn btn-default" (click)="changeBackgroundColor()">Change chart background color</a>
    <a class="btn btn-default" (click)="changeCaptionTextAlignment()">Make Caption text left-aligned</a>
</p>
```