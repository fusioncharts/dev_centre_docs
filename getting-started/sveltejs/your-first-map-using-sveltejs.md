---
title: Create a Map in SvelteJS Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first map using the svelte-fusioncharts component.
heading: Create a Map in SvelteJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards using JavaScript. We have built a simple and lightweight SvelteJS directive, which provides bindings for `svelte-fusioncharts` lets you add JavaScript charts in your Svelte application or project without any hassle.

Maps are used to plot geographical data like revenue by regions, population by state, survey and election results, etc. You can also drop markers on the map to pinpoint places like office locations and flight routes. In this page, you will see how to install FusionCharts and render a map using the `svelte-fusioncharts` directive.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`. SvelteJS requires Node.js version **10.9.0** or later. To download and install Node.js, please visit [nodejs.org](https://nodejs.org/).

You need to have a Svelte project setup before proceeding any further. If not, you can follow the below steps to initiate the project.

Open a new terminal and execute the following command:

```
npx degit sveltejs/template my-first-svelte-project
```

This command creates a new project folder `my-first-svelte-project` and downloads the svelte default project template into that folder. Before running the project we need to make sure that all needed development dependencies are being installed.

```
cd my-first-svelte-project
npm install
```

Open the terminal and enter `npm run dev` to serve your app on `[localhost:5000](http://localhost:5000/)`.

## Installation and Including Dependencies

To install `fusioncharts` and the `svelte-fusioncharts` directive via npm follow the steps mentioned below.

Install `svelte-fusioncharts` and `fusioncharts` libraries

```
npm install svelte-fusioncharts fusioncharts --save
```

After installing the FusionCharts components, you can replace the code in `App.svelte` file with the code shown in the steps below to create your first map. Import all the required dependencies to get started.

```html
<script>
  import FusionCharts from "fusioncharts"; //Import the Fusioncharts library
  import Maps from "fusioncharts/fusioncharts.maps"; //Import the FusionMaps
  import World from "fusioncharts/maps/fusioncharts.world"; //Import World Map
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  //Import the Svelte component
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Maps, World, FusionTheme);
</script>
```

That completes the installation of FusionCharts and the `svelte-fusioncharts` directive.

## Preparing the Data

Let us create a visualization using the World Map showing the average annual population growth.

![World](/images/WorldwithCountriesMap.png)

The data for the above map is represented in the table below:

| State         | Entity Name | Value |
| ------------- | ----------- | ----- |
| North America | NA          | 82    |
| South America | SA          | 2.04  |
| Asia          | AS          | 1.78  |
| Europe        | EU          | 40    |
| Africa        | AF          | 2.58  |
| Australia     | AU          | 1.30  |

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column. FusionCharts accepts data in JSON format in which the above entities are denoted by the `id` and `value` keys in the `data` array. For example, the first object under the data array contains the `id` and `value` of **North America** as **NA** and **82** respectively.

For any map visualization, it is important to provide the correct value for the id keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets](https://www.fusioncharts.com/dev/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct id of the maps you want to create.

So the above data in the JSON format will look as follows:

```javascript
//STEP 2 : Preparing the Map Data
const mapData = [
  {
    id: "NA",
    value: ".82",
    showLabel: "1"
  },
  {
    id: "SA",
    value: "2.04",
    showLabel: "1"
  },
  {
    id: "AS",
    value: "1.78",
    showLabel: "1"
  },
  {
    id: "EU",
    value: ".40",
    showLabel: "1"
  },
  {
    id: "AF",
    value: "2.58",
    showLabel: "1"
  },
  {
    id: "AU",
    value: "1.30",
    showLabel: "1"
  }
];
```

## Configure Your Chart

Now that the data is ready, let's work on the styling, positioning and giving your map a context.

Store the map configurations in a JSON object. In this JSON object:

- Set the chart type as `maps/world`. Each chart type is represented with a unique chart alias. For the world map, the alias is `maps/world`. Find the complete list of map types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

- Embed the json data as the value of the `dataSource`.

- Create the `colorRange` array to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

```javascipt
//Create your chart configuration
const colorRange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
      "minvalue": "0.5",
      "maxvalue": "1.0",
      "color": "#FFD74D"
      }, {
      "minvalue": "1.0",
      "maxvalue": "2.0",
      "color": "#FB8C00"
      }, {
      "minvalue": "2.0",
      "maxvalue": "3.0",
      "color": "#E65100"
    }]
};
const mapConfigs = {
    type: 'world', // Map type
    width: '800', // Width of the chart
    height: '550', // Height of the chart
    dataFormat: 'json', // Data Type
    renderAt:'chart-container',  //container where the chart will render
    dataSource: {
    // Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": colorRange,
    // Source data as JSON --> id represents continents of the world.
    "data": mapData
    }
};
```

## Render the Map

Finally, get ready to render your first map. Follow the steps mentioned below:

**Step 1**: In `App.svelte` include the necessary files and import the `fusioncharts` dependency.

Store the map configurations in a JSON object.

The consolidated code is shown below:

```html
<script>
  import FusionCharts from "fusioncharts";
  import Maps from "fusioncharts/fusioncharts.maps";
  import World from "fusioncharts/maps/fusioncharts.world";
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";
  fcRoot(FusionCharts, Maps, World, FusionTheme);
  //STEP 2 : Preparing the map Data
  const mapData = [
    {
      id: "NA",
      value: ".82",
      showLabel: "1"
    },
    {
      id: "SA",
      value: "2.04",
      showLabel: "1"
    },
    {
      id: "AS",
      value: "1.78",
      showLabel: "1"
    },
    {
      id: "EU",
      value: ".40",
      showLabel: "1"
    },
    {
      id: "AF",
      value: "2.58",
      showLabel: "1"
    },
    {
      id: "AU",
      value: "1.30",
      showLabel: "1"
    }
  ];

  //STEP 3: Create your chart configuration
  const colorRange = {
    minvalue: "0",
    code: "#FFE0B2",
    gradient: "1",
    color: [
      {
        minvalue: "0.5",
        maxvalue: "1.0",
        color: "#FFD74D"
      },
      {
        minvalue: "1.0",
        maxvalue: "2.0",
        color: "#FB8C00"
      },
      {
        minvalue: "2.0",
        maxvalue: "3.0",
        color: "#E65100"
      }
    ]
  };

  const mapConfigs = {
    type: "world", // Map type
    width: "800", // Width of the chart
    height: "550", // Height of the chart
    dataFormat: "json", // Data Type
    renderAt: "chart-container", //container where the chart will render
    dataSource: {
      // Map Configuration
      chart: {
        caption: "Average Annual Population Growth",
        subcaption: " 1955-2015",
        numbersuffix: "%",
        includevalueinlabels: "1",
        labelsepchar: ": ",
        entityFillHoverColor: "#FFF9C4",
        theme: "fusion"
      },
      // Aesthetics; ranges synced with the slider
      colorrange: colorRange,
      // Source data as JSON --> id represents continents of the world.
      data: mapData
    }
  };
</script>

<SvelteFC {...mapConfigs} />
```

**Step 2**: Export the **app** from `main.js`.

```javascript
import App from "./App.svelte";
var app = new App({
  target: document.body
});
export default app;
```

**Step 3**: Run `npm run dev` command in the terminal. Once the build is successful, open the `localhost` file to see your map.

## See Your Map

You should be able to see the map as shown below.

{% embed_chart getting-started-your-first-map.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first map using `svelte-fusioncharts` is ready.
