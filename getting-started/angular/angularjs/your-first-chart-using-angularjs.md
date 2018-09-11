---
title: Your First Chart in AngularJS Using FusionCharts | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts AngularJS component.
heading: Your First Chart in AngularJS using FusionCharts
---

The `angularjs-fusioncharts` module for **FusionCharts Suite XT** lets you add interactive JavaScript charts to your **AngularJS (v1.x)** web and mobile applications.

In this page, we'll see how to install FusionCharts and render a chart using the `angularjs-fusionCharts` directive.

## Installation

Install **FusionCharts** and the `angularjs-fusioncharts` directive using any of the following methods:


<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install fusioncharts and the `angularjs-fusioncharts` directice via npm follow the steps below:</strong></div>
<div>1. Install `angularjs` core library</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install angular
</code></pre>
<div>2. Install `angularjs-fusioncharts`</div>
<pre><code class="custom-hlc language-javascript">
	$ npm install angularjs-fusioncharts
</code></pre>
<div>2. Install the `fusioncharts` package</div>
<pre><code class="custom-hlc language-javascript">
    $ npm install fusioncharts
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<div><strong>To install the FusionCharts package and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
	&lt;!-- Step 1 - Including AngularJS --&gt;
	&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"&gt;&lt;/script&gt;
	&lt;!-- Step 2 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/angularjs-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>


<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** package and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include the FusionCharts theme file to apply the style to the charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
	&lt;!-- Step 1 - Including AngularJS --&gt;
	&lt;script type="text/javascript" src="path/to/local/angular.min.js"&gt;&lt;/script&gt;
	&lt;!-- Step 2 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="path/to/local/angularjs-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts and the angularjs-fusioncharts wrapper.

