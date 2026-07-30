---
title: Create a Chart in Svelte Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the svelte-fusioncharts component.
heading: Create a Chart in SvelteJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards for web applications. 

The `svelte-fusioncharts` component provides bindings for FusionCharts, allowing you to integrate FusionCharts visualizations into Svelte applications.

In this tutorial, you will learn how to create a Svelte 4 application, install FusionCharts and the Svelte FusionCharts component, prepare chart data, configure a chart, and render your first interactive chart.

## Prerequisite

Before you begin, ensure the following is installed:
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

You can check the installed version by running the following command:

```javascript
node -v
npm -v
```
This tutorial uses the following versions:

```javascript
Svelte: 4.0.0
FusionCharts: 4.2.2 
svelte-fusioncharts: 1.1.0
Vite: 4.5.14
@sveltejs/vite-plugin-svelte: 2.4.6
```

> **Note:**
> Svelte 4.0.0 is the latest version of Svelte currently supported by FusionCharts.

## Create a Svelte Project

Create a Svelte application using Vite, see the command below as an example:

```javascript
npm create vite@4 my-first-svelte-project -- --template svelte
```
Navigate to the project directory using the following command:

```javascript
cd my-first-svelte-project
```
The latest Svelte project templates may use dependencies or application code designed for newer versions of Svelte. Since this tutorial uses Svelte 4.0.0, update the project dependencies to versions compatible with it.

Open `package.json` and update the `devDependencies` section as follows:

```javascript
"devDependencies": {
  "@sveltejs/vite-plugin-svelte": "2.4.6",
  "svelte": "4.0.0",
  "vite": "4.5.14"
}
```
The complete `package.json` should look as follows:

```javascript
{
  "name": "my-first-svelte-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "2.4.6",
    "svelte": "4.0.0",
    "vite": "4.5.14"
  }
}
```
Remove the existing dependencies and lock file:

```javascript
rm -rf node_modules package-lock.json
```
Then install the dependencies as follows:

```javascript
npm install
```

## Configure the Svelte 4 Entry Point

Newer Svelte templates may use the Svelte 5 `mount()` API. Svelte 4 uses the component constructor instead.

Open the file:

```javascript
src/main.js
```

and replace its content with the one below:

```javascript
import './app.css'
import App from './App.svelte'

const target = document.getElementById('app')

if (!target) {
  throw new Error('App target element not found')
}

const app = new App({
  target,
})

export default app
```
This mounts the Svelte application to the element with the `app` ID in `index.html`.

## Remove the Default Svelte 5 Example Component

Some Vite Svelte templates may include example components that use Svelte 5 syntax. It is necessary to remove them.

Open:

```javascript
src/App.svelte
```
and remove any default imports or components such as:

```javascript
import Counter from './lib/Counter.svelte'
```
You may also remove the default `Counter.svelte` file if it exists. 

Before continuing, verify that Svelte 4 is working by temporarily using:

```javascript
<script>
  let message = 'Svelte 4 is working'
</script>

<main>
  <h1>{message}</h1>
</main>
```
Start the development server:

```javascript
npm run dev
```
Open the local URL displayed in your terminal, most likely:

```javascript
http://localhost:5173
```
And you should see the following message:

```javascript
Svelte 4 is working
```

## Install FusionCharts

After confirming that the Svelte 4 application works, install FusionCharts and the Svelte FusionCharts component:

```javascript
npm install fusioncharts svelte-fusioncharts
```
You can verify the installed versions using the following command:

```javascript
npm list svelte fusioncharts svelte-fusioncharts
```
The tested configuration should show the following:

```javascript
svelte@4.0.0
fusioncharts@4.2.2
svelte-fusioncharts@1.1.0
```

## Import FusionCharts

To import FusionCharts, first open:

```javascript
src/App.svelte
```
Using the following command import FusionCharts, the charts module, the Fusion theme, and the Svelte FusionCharts component:

```javascript
<script>
  import FusionCharts from 'fusioncharts'
  import Charts from 'fusioncharts/fusioncharts.charts'
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts'

  fcRoot(FusionCharts, Charts, FusionTheme)
</script>
```
The `fcRoot()` function registers FusionCharts, the chart module, and the Fusion theme with the Svelte component.

## Preparing the Data

In this example, you will create a Column 2D chart showing revenue by product category. The data used in the chart is shown below:

| Product Category | Revenue |
| ---------------- | ------- |
| Electronics      | 85      |
| Apparel          | 72      |
| Home Appliances  | 64      |
| Books            | 48      |
| Sports           | 55      |
| Beauty           | 42      |

FusionCharts accepts chart data in JSON format.

Next, add the following data inside the `<script>` block:

```javascript
// Preparing the chart data
const chartData = [
  { label: 'Electronics', value: '85' },
  { label: 'Apparel', value: '72' },
  { label: 'Home Appliances', value: '64' },
  { label: 'Books', value: '48' },
  { label: 'Sports', value: '55' },
  { label: 'Beauty', value: '42' }
];
```
Each data object contains:
* `label`: The category displayed on the X-axis.
* `value`: The corresponding value displayed on the Y-axis.

## Configure the Chart

Next, create the chart configuration object as follows:

```javascript
//Create your configuration object
const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Revenue by Product Category',
      subCaption: 'Current Sales Performance',
      xAxisName: 'Product Category',
      yAxisName: 'Revenue (USD)',
      numberPrefix: '$',
      numberSuffix: 'K',
      theme: 'fusion'
    },
    data: chartData
  }
};
```
The configuration contains the following properties:
* `type`: Specifies the chart type. This example uses `column2d`.
* `width`: Sets the chart width to 100% of its container.
* `height`: Sets the chart height.
* `dataFormat`: Defines the data format as JSON.
* `dataSource`: Contains the chart configuration and chart data.
* `caption`: Defines the chart title.
* `subCaption`: Defines the chart subtitle.
* `xAxisName`: Defines the X-axis title.
* `yAxisName`: Defines the Y-axis title.
* `theme`: Applies the Fusion theme.

## Render the Chart

Finally, the complete `src/App.svelte` file should look as follows: 

```javascript
<script>
  import FusionCharts from 'fusioncharts'
  import Charts from 'fusioncharts/fusioncharts.charts'
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts'

  fcRoot(FusionCharts, Charts, FusionTheme)

  const chartData = [
    { label: 'Electronics', value: '85' },
    { label: 'Apparel', value: '72' },
    { label: 'Home Appliances', value: '64' },
    { label: 'Books', value: '48' },
    { label: 'Sports', value: '55' },
    { label: 'Beauty', value: '42' }
  ]

  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Revenue by Product Category',
        subCaption: 'Current Sales Performance',
        xAxisName: 'Product Category',
        yAxisName: 'Revenue (USD)',
        numberPrefix: '$',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: chartData
    }
  }
</script>

<main>
  <div class="chart-container">
    <SvelteFC {...chartConfigs} />
  </div>
</main>

<style>
  main {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .chart-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
```

The `SvelteFC`component receives the chart properties using the following command: 

```javascript
<SvelteFC {...chartConfigs} />
```

and renders the FusionCharts visualization.

## Run the Application

Start the development server, as follows:

```javascript
npm run dev
```
Open the local URL shown in the terminal, most likely:

```javascript
http://localhost:5173
```
An interactive Column 2D chart should be visible and display the revenue by product category.

## See Your Chart

Your Svelte application is now successfully rendering a FusionCharts visualization.

{% embed_chart getting-started-your-first-chart-svelte.js %}

The chart displays revenue for six product categories using a responsive Column 2D chart.

Customize the chart by changing any of the following:
* Chart type
* Chart dimensions
* Data
* Captions
* Axis titles
* Theme
* Styling
* Events and interactions

## Troubleshooting

This section mentions several common issues and how to troubleshoot them. 

### Unrecognized Option `hmr`

It is possible to encounter an error such as:

```javascript
[plugin:vite-plugin-svelte] Unrecognized option 'hmr'
```

This usually occurs when Svelte 4.0.0 is used with a newer incompatible version of `@sveltejs/vite-plugin-svelte`.

Ensure that your project uses the following:

```javascript
@sveltejs/vite-plugin-svelte@2.4.6
vite@4.5.14
svelte@4.0.0
```
You can verify the versions with the following command:

```javascript
npm list svelte vite @sveltejs/vite-plugin-svelte
```

### `svelte` Does Not Provide an Export Named `mount`

It is possible to encounter an error such as:

```javascript
The requested module 'svelte' does not provide an export named 'mount'
```
This occurs when the project uses Svelte 5 mounting syntax with Svelte 4. 

To solve this, replace:

```javascript
import { mount } from 'svelte'
```
with the Svelte 4 component constructor approach:

```javascript
const app = new App({
  target,
})
```

### Undefined state

If the browser console shows the following message:

```javascript
ReferenceError: state is not defined
```
The project may still contain example components generated for a newer version of Svelte.

Remove the default `Counter.svelte` component and any related imports from `App.svelte`.

### Failed to Resolve `Counter.svelte`

If your screen displays the following message:

```javascript
Failed to resolve import "./lib/Counter.svelte"
```
Then, remove the following import from `App.svelte`:

```javascript
import Counter from './lib/Counter.svelte'
```
Finally, ensure to remove any `<Counter />` component references.

### Verify the Install Versions

To verify the installed versions, run:

```javascript
npm list svelte fusioncharts svelte-fusioncharts
```
The tested setup uses:

```javascript
svelte@4.0.0
fusioncharts@4.2.2
svelte-fusioncharts@1.1.0
```

## Restart the Development Server

After changing dependencies or source files, stop the current development server and restart it with the following command:

```javascript
npm run dev
```

## What's Next?

Now that you have successfully integrated FusionCharts with Svelte, you can explore additional FusionCharts capabilities.
You can:
* Try different [chart types](/chart-guide/list-of-charts).
* Customize chart appearance.
* Add [chart events](/advanced-chart-configurations/events/handling-events) and interactions.
* Load dynamic data.
* Create [dashboards](https://www.fusioncharts.com/dashboards/) with multiple charts.
* Explore [gauges](/chart-guide/gauges-and-widgets/angular-gauge) and [maps](/map-guide/list-of-maps).
* Configure advanced chart properties.

## Enhance your Svelte Applications with FusionCharts

FusionCharts provides a wide range of interactive charts, maps, gauges, and visualization components for creating data-driven Svelte applications.

Whether you are building a simple visualization or an enterprise dashboard, FusionCharts offers configurable options to meet diverse application requirements.

## Get Started with FusionCharts

Explore the FusionCharts [documentation](https://www.fusioncharts.com/dev/) to learn more about available chart types, configuration options, methods, events, themes, and advanced data visualization features.

You can also [download FusionCharts and start a free trial](https://resources.fusioncharts.com/download-free-trial/) to explore its complete range of capabilities.

## Frequently Asked Questions

### Can I use FusionCharts with Svelte?

Yes. FusionCharts can be integrated with Svelte applications using the `svelte-fusioncharts` component.

### Which Svelte version does FusionCharts support?

FusionCharts currently supports **Svelte 4.0.0** as the latest supported Svelte version

### Which versions were tested for this tutorial?

This tutorial was tested using:

```javascript
Svelte 4.0.0
FusionCharts 4.2.2
svelte-fusioncharts 1.1.0
Vite 4.5.14
@sveltejs/vite-plugin-svelte 2.4.6
```

### How do I install FusionCharts in a Svelte application?

Install FusionCharts and the Svelte FusionCharts component using the following command:

```javascript
npm install fusioncharts svelte-fusioncharts
```

### Can I create responsive FusionCharts visualizations in Svelte?

Yes. You can set the chart width as follows:

```javascript
width: '100%'
```
and place the chart inside a responsive container.

### Can I use other FusionCharts chart types with Svelte?

Yes. Change the `type` property in the chart configuration to another supported FusionCharts chart type

## Share with Your Colleagues

Share this tutorial with your colleagues and help them get started with interactive data visualizations using FusionCharts and Svelte.
