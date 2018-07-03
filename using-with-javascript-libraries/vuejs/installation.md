---
permalink: using-with-javascript-libraries/vuejs/installation.html
title: Introduction to the FusionCharts VueJS Component | FusionCharts
description: The Vue-FusionCharts component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.
heading: Installation
chartPresent: false
---

Vue-FusionCharts is an interface between vue.js and FusionCharts. Technically, it contains a component through which you can use FusionCharts in a Vue application.

## List of Dependencies

Install the following dependencies:

* `vue.js` — Your favorite framework! We recommend using Vue 2.x.

* `fusioncharts.js` — The library for data visualization.

* `vue-fusioncharts` — The interface between Vue and FusionCharts.

## Modes of Installation

You can install the dependencies in your project using any one of the following:

* CDN

* Compiled JavaScript and CSS

* Package Managers

    * NPM

    * Bower

### CDN

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- VUE -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- FUSIONCHARTS -->
    <script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
    <!-- VUE-FUSIONCHARTS -->
    <script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
</head>
```

### Compiled JavaScript and CSS

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- VUE -->
    <script type="text/javascript" src="path/to/local/vue.js"></script>
    <!-- FUSIONCHARTS -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- VUE-FUSIONCHARTS -->
    <script type="text/javascript" src="path/to/local/vue-fusioncharts.min.js"></script>
</head>
```

### Package Managers

If you are using package management systems like npm or bower, execute the following steps:

* **Install** the packages/dependencies.
    * **npm** — npm install vue fusioncharts vue-fusioncharts 
    * **bower** — bower install vue fusioncharts vue-fusioncharts

For more information on getting FusionCharts and associated packages using npm or bower, refer to the [NPM page for FusionCharts](https://www.npmjs.com/package/fusioncharts).

* In your JavaScript file: 
    * **Import** the installed dependencies.
    * **Resolve** the dependency for *charts*.
    * **Instruct** Vue to use VueFusionCharts.

The import statement for vue-fusioncharts varies depending on whether you want to use the vue-fusioncharts plugin in your Vue application **globally**, or a specific component of it **locally**.

### Global registration

```
// Global registration
import Vue from 'vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import VueFusionCharts from 'vue-fusioncharts'; // For global usage
// Resolve the dependency for charts
Charts(FusionCharts);
// Instruct Vue to use VueFusionCharts globally
Vue.use(VueFusionCharts); // Use the Vue.use() global method
```

### Local registration

```
// Import the installed dependencies
import Vue from 'vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import { FCComponent } from 'vue-fusioncharts'; // For local registration
// Resolve the dependency for charts
Charts(FusionCharts);
// Instruct Vue to use VueFusionCharts locally
Vue.component('fusioncharts', FCComponent); // Use the Vue.component() local method
```

For more information on:

* Using global methods, refer to [Plugins](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin).

* Registering components locally, refer to [Component Registration](https://vuejs.org/v2/guide/components-registration.html).

Now that you have installed and resolved the dependencies, [create your first chart].