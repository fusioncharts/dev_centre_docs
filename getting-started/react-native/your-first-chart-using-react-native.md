---
title: Your First Chart in React Native using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the react-native-fusioncharts component.
heading: Create a Chart in React Native using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. The react-native-fusioncharts component allows you to easily add rich and interactive charts to any React Native project. In this page, we'll see how to install FusionCharts and render a chart using the react-native-fusioncharts component.

## Prerequisite

We are assuming that you are having a react-native project up and running. If not, follow the steps [here](https://facebook.github.io/react-native/docs/getting-started) to get started with your react-native project setup.

> Install react-native-webview if not present already.

## Installation and Including Dependencies

Install the react-native-fusioncharts and fusioncharts components via npm.

```javascript
npm install react-native-fusioncharts fusioncharts --save
```

To setup the react-native-fusioncharts component, follow the steps given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='android'>Android</a></li>
    <li><a data-toggle='ios'>iOS</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab android-tab active'>
<div>
    <ul>
        <li>Create a folder named assets under <strong>android/app/src/main</strong> directory if it doesn't exist.</li>
        <li>Copy FusionCharts library files from <strong>node_modules/fusioncharts</strong> folder to the newly created <strong>assets</strong> folder.</li>
    </ul>
</div>
</div>

<div class='tab ios-tab'>
<div>    
    <ul>
        <li>Create a folder named <strong>assets</strong> in your project root if it doesn't exist.</li>
        <li>Copy FusionCharts library files from <strong>node_modules/fusioncharts</strong> folder to the newly created <strong>assets</strong> folder.</li>
    </ul>
</div>
</div>

</div>
</div>
