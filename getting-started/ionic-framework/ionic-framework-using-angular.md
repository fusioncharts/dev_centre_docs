---
title: Ionic Angular | FusionCharts
description: This article outlines the steps to create your chart in ionic framework with Angular.
heading: Ionic Angular
---

Ionic Angular makes it possible to build cross-platform applications using Ionic's UI components and Angular. By integrating FusionCharts with an Ionic Angular application, you can add interactive and responsive data visualizations to applications that target the web and mobile platforms.

FusionCharts provides a comprehensive collection of charts, gauges, and maps for visualizing data. You can integrate FusionCharts into an Ionic Angular application using the `angular-fusioncharts` wrapper.

In this tutorial, you will create a new Ionic Angular application, install FusionCharts, prepare chart data, configure a chart, and render your first interactive chart.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js**
- **npm**, which is included with Node.js
- A modern web browser such as Google Chrome

You can verify your Node.js and npm installations by running:

```javascript
node --version
npm --version
```

You will also need the Ionic CLI. Install it globally using:

```javascript
npm install -g @ionic/cli
```

Verify the installation:

```javascript
ionic --version
```

> **Note:**
>  FusionCharts uses the `angular-fusioncharts` wrapper to integrate FusionCharts with Ionic Angular applications.

## Create an Ionic Angular Application

Open a terminal and create a new Ionic Angular application:

```javascript
ionic start fusioncharts-ionic-example blank --type=angular
```

When prompted to select the Angular application type, choose the appropriate **Standalone** option.

Navigate to the project directory:

```javascript
cd fusioncharts-ionic-example
```

The `blank` starter creates a minimal Ionic Angular application that you can use to integrate FusionCharts.

## Install FusionCharts

Install the FusionCharts JavaScript library and its Angular wrapper:

```javascript
npm install fusioncharts angular-fusioncharts
```

The packages provide:

- `fusioncharts` – the core FusionCharts JavaScript library.
- `angular-fusioncharts` – the Angular wrapper that lets you use FusionCharts in Angular and Ionic Angular components.

After the installation is complete, you can start configuring FusionCharts in your Ionic application.

## Register FusionCharts

Open the component file for the application's home page:

```javascript
src/app/home/home.page.ts
```

Import the required FusionCharts libraries and the Angular FusionCharts component.

```javascript
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FusionChartsModule],
})
export class HomePage {
}
```

The `fcRoot()` method registers the FusionCharts core library, chart modules, and Fusion theme with the Angular FusionCharts wrapper.

> **Note:**
> The exact generated files can vary depending on the Ionic Angular project configuration. This tutorial uses the standalone Angular application structure.

## Preparing the Chart Data

For this example, you will create a column chart that displays monthly sales.

Use the following data:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| January   | 42,000              |
| February  | 55,000              |
| March     | 48,000              |
| April     | 67,000              |
| May       | 72,000              |
| June      | 81,000              |


In |home.page.ts|, add the chart data inside the |HomePage| class:

```javascript
export class HomePage {

  chartData = [
    {
      label: 'January',
      value: '42000'
    },
    {
      label: 'February',
      value: '55000'
    },
    {
      label: 'March',
      value: '48000'
    },
    {
      label: 'April',
      value: '67000'
    },
    {
      label: 'May',
      value: '72000'
    },
    {
      label: 'June',
      value: '81000'
    }
  ];

}
```

Each object represents one data point in the chart. The `label` property specifies the category displayed on the x-axis, while `value` determines the corresponding column value.

## Configure Your Chart

Next, configure the appearance and behavior of your FusionCharts visualization.

Add the following `dataSource` object to the `HomePage` class:


```javascript
dataSource = {
  chart: {
    caption: 'Monthly Sales',
    subCaption: 'January to June',
    xAxisName: 'Month',
    yAxisName: 'Sales',
    numberPrefix: '$',
    theme: 'fusion'
  },
  data: this.chartData
};
```

The `chart` object defines the chart's configuration, including its caption, axis names, number formatting, and theme.

Your complete `HomePage` class should now contain both the chart data and the chart configuration.

## Render the Chart

Now, get ready to render your first chart by following the steps below.

Open:

```javascript
src/app/home/home.page.html
```

Replace the existing page content with:

```javascript
<ion-header>
  <ion-toolbar>
    <ion-title>
      FusionCharts Ionic Angular Example
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <fusioncharts
    type="column2d"
    width="100%"
    height="400"
    dataFormat="json"
    [dataSource]="dataSource">
  </fusioncharts>

</ion-content>
```

Here:

- `type="column2d"` specifies a 2D column chart.
- `width="100%"` allows the chart to adapt to the available container width.
- `height="400"` sets the chart height.
- `dataFormat="json"` specifies that the chart uses JSON data.
- `[dataSource]"="dataSource"` binds the chart to the configuration and data defined in the component.

Using a percentage-based width makes the chart better suited to different screen sizes, which is particularly useful when developing Ionic applications.

## Run the Application

You can now run the Ionic Angular application in your browser.

From the project directory, execute:

```javascript
ionic serve
```

The Ionic development server will compile the application and open it in your default browser.

If the browser does not open automatically, use the local development URL displayed in your terminal.

## See Your Chart

Once the application loads, you should see an interactive `Monthly Sales` column chart on the home page.

{% embed_chart getting-started-your-first-chart-ionic-angular.js %}

Hover over individual columns to view the corresponding sales values in the chart tooltips.

Because the chart width is set to `100%`, it adjusts to the width of its containing element, making it suitable for responsive Ionic layouts.

That's it! You have successfully integrated FusionCharts into an Ionic Angular application.

## Troubleshooting

If the chart does not appear, check the following.

### Verify the Packages
Make sure both FusionCharts packages are installed:

```javascript
npm list fusioncharts angular-fusioncharts
```

If either package is missing, install them again:

```javascript
npm install fusioncharts angular-fusioncharts
```

### Check the Browser Console
Open your browser's developer tools and check the **Console** for errors.

Import, dependency, or Angular template errors displayed there can help identify problems with the integration.

### Verify FusionCharts Registration
Make sure that FusionCharts, the chart module, and the Fusion theme have been registered with `FusionChartsModule.fcRoot()`.

### Verify the Component Import
For a standalone Angular component, make sure `FusionChartsModule` is included in the component's `imports` array.

### Restart the Development Server
If you installed or changed dependencies while the development server was running, stop it and restart it:

```javascript
ionic serve
```

## What's Next

Now that you have created your first FusionCharts visualization in Ionic Angular, you can customize it to match your application's requirements.

For example, you can:

- Experiment with different [FusionCharts chart types](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
- Customize chart captions, axes, labels, tooltips, and themes.
- Load data dynamically from an API or backend service.
- Add multiple charts to create [interactive dashboards](https://www.fusioncharts.com/blog/interactive-dashboards-types-and-examples/).
- Configure [events](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events) to respond to user interactions.
- Explore FusionCharts maps, gauges, and other visualization types.

You can also use Ionic and Capacitor to extend your application to supported native platforms.

## Enhance Your Ionic Angular Applications With FusionCharts

FusionCharts gives you access to a comprehensive collection of interactive charts, gauges, and maps that you can use to visualize data in Ionic Angular applications.

Whether you are creating business dashboards, analytics applications, financial reports, monitoring applications, or other data-driven interfaces, FusionCharts provides configurable visualization components that can be integrated into your application.

Explore the available chart types and configuration options to build data visualization experiences that meet your application's requirements.

## Get Started With FusionCharts

FusionCharts provides extensive documentation, examples, and resources to help you build interactive data visualizations for web and cross-platform applications.

Explore the [FusionCharts documentation](https://www.fusioncharts.com/dev/) to learn about:

- Chart types
- Chart attributes
- Data formats
- Events
- Methods
- Themes
- Maps
- Gauges
- Advanced chart configurations

You can also experiment with different chart configurations and customize your visualization according to your application's requirements.

## FAQs
### Can I use FusionCharts with Ionic Angular?
Yes. FusionCharts can be integrated into an Ionic Angular application using the |angular-fusioncharts| wrapper.

### Which package is used to integrate FusionCharts with Ionic Angular?
Install the fusioncharts package together with the |angular-fusioncharts| Angular wrapper:

```javascript
npm install fusioncharts angular-fusioncharts
```

### Can I run an Ionic Angular FusionCharts application in a browser?
Yes. During development, you can run the application in a browser using:

```javascript
ionic serve
```

This allows you to develop and test the FusionCharts integration without initially configuring an Android or iOS development environment.

### Can FusionCharts charts be responsive in Ionic applications?
Yes. You can configure the chart width using a percentage value such as 100% so that the chart adapts to the width of its container.

### Can I use other FusionCharts chart types in Ionic Angular?
Yes. FusionCharts supports a wide variety of chart types. You can change the type property and provide the corresponding data and configuration required by the selected visualization.

### Can an Ionic Angular application using FusionCharts run on mobile devices?
Ionic Angular applications can target web and native platforms. Ionic uses Capacitor as its cross-platform native runtime for deploying applications to platforms such as Android and iOS. Native deployment requires the corresponding platform development environment and configuration.
