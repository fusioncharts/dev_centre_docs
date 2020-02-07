---
title: Create a Chart in SvelteJS Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the svelte-fusioncharts component.
heading: Create a Chart in SvelteJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards using JavaScript. We have built a simple and lightweight SvelteJS directive, which provides bindings for FusionCharts.`svelte-fusioncharts` and lets you add JavaScript charts in your Svelte application or project without any hassle.

In this page, you will see how to install FusionCharts and render a chart using the `svelte-fusioncharts` directive.

## Prerequisite

Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`. SvelteJS requires Node.js version **10.9.0** or later. To download and install Node.js, please visit [nodejs.org](https://nodejs.org/).

You need to have a Svelte project set up before proceeding any further. If not, you can follow the steps mentioned below, to initiate the project.

Open a new terminal and execute the following command:

```shellscript
npx degit sveltejs/template my-first-svelte-project
```

The above command creates a new project folder named `my-first-svelte-project`, and downloads the svelte default project template into that folder. Before running the project, we need to make sure that all needed development dependencies are being installed.

```shellscript
cd my-first-svelte-project
npm install
```

Open the terminal and enter `npm run dev` to serve your app on `[localhost:5000](http://localhost:5000/)`.
