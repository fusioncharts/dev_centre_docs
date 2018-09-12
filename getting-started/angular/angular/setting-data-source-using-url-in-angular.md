---
title: Setting Data Source Using URL | FusionCharts
description: FusionCharts lets you pass the complete JSON/XML chart data using a JSON file or a URL without losing any functionality
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using `angular-fusioncharts` component.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example]({% site.baseurl %}/getting-started/angular/angular/your-first-chart-using-angular) using JSON, and use a .json file as the data source.

{% embed_chart plain-js-setting-data-using-url-example-1.js %}

The data for this chart is represented in the table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

The JSON representation for the above table looks as shown below:

```javascript
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
}
```

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your modules.

> If you are using multi-lingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

### Setup the Main Module

In this step, we will setup the main module to create the **Column2D chart**. The code is given below:

```
// Setup needed in app.module.ts

import { NgModule, enableProdMode } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import FusionCharts from 'fusioncharts/core';
// Load Charts Module
import Column2d from 'fusioncharts/viz/column2d';
// Load Fusion Theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Column2d, FusionTheme)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

In the above code:

1. Necessary libraries and components have been included using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Loaded FusionCharts, chart module and fusion theme.

3. Added dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render the above chart in the main app.component.

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
}
```

1. The JSON data has been within the `AppComponent` class.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    
3. To set the datasource using URL:
    * The value of the `dataFormat` has been set to **jsonurl**.
    * A static URL has been set to `dataSource` to render the above chart.

4. Created a `fusioncharts` directive in a template.

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

In the above code a fusioncharts diective is created in a template.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```
Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

### Setup the Main Module

In this step, we will setup the main module to create the **Column2D chart**. The code is given below:

```
// Setup needed in app.module.ts

import { NgModule, enableProdMode } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import FusionCharts from 'fusioncharts/core';
// Load Charts Module
import Column2d from 'fusioncharts/viz/column2d';
// Load Fusion Theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Column2d, FusionTheme)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

In the above code:

1. Necessary libraries and components have been included using import. For example, `angular-fusioncharts`, `fusioncharts`, etc.

2. Loaded FusionCharts, chart module and fusion theme.

3. Added dependencies to `FusionChartsModule`.

> The `<fusioncharts></fusioncharts>` component is available to be used by any component your app. We will render the above chart in the main app.component.

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
}
```

1. The XML data has been within the `AppComponent` class.

2. Stored the chart configuration in a XML object. In the XML object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as XML.
    
3. To set the datasource using URL:
    * The value of the `dataFormat` has been set to **xmlurl**.
    * A static URL has been set to `dataSource` to render the above chart.

4. Created a `fusioncharts` directive in a template.


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

In the above code a fusioncharts diective is created in a template.