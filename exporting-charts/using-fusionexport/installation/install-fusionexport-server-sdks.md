---
permalink: exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks.html
title: Install FusionExport Server SDKs | FusionCharts
description: This section is a language SDK installation guide
heading: Install FusionExport Server SDKs
chartPresent: False
---

The FusionExport Server SDKs are tools for interacting with FusionExport Server from various supported languages for direct export integration in your application. Internally, it communicates with FusionExport Server using APIs.

## Installation and basic usage guide for all the language SDKs

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
    <li><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="golang">Golang</a></li>
    <li><a data-toggle="php">PHP</a></li>
</ul>

<div class="tab-content extra-tabs">
<div class="tab nodejs-tab active">
<strong>To install the Node.js module, simply use the npm command:</strong>
<pre><code class="language-javscript">	$ npm install fusionexport-node-client --save</code></pre>
<strong>To require the SDK into your project:</strong>
<pre><code class="language-javscript">	const FusionExport = require('fusionexport-node-client');</code></pre>
</div>

<div class="tab python-tab">
<strong>To install the Python package, simply use the pip command:</strong>
<pre><code class="language-python">	$ pip install fusionexport</code></pre>
<strong>To import the SDK into your project:</strong>
<pre><code class="language-python">	from fusionexport import ExportManager, ExportConfig</code></pre>
</div>

<div class="tab csharp-tab">
<strong>You can install the SDK using the NuGet package manager. To install, open the NuGet package manager console and run the following command:</strong>
<pre><code class="language-cs">	$ Install-Package FusionExport -Version 1.0.0-rc0</code></pre>
<strong>To use the SDK into your project:</strong>
<pre><code class="language-cs">	using FusionCharts.FusionExport.Client; </code></pre>
</div>

<div class="tab java-tab">
<p><strong>Using Gradle</strong></p>
<strong>To use as part of a Gradle project, first add the maven central repository to your repositories list:</strong>
<pre><code class="language-java">
	repositories {
		mavenCentral()
	}
</code></pre>
<strong>Then, add this SDK as a dependency to your build.gradle file:</strong>
<pre><code class="language-java">
	dependencies {
		Compile "com.fusioncharts.fusionexport:fusionexport:1.0.0-rc"
	}
</code></pre>
<p><strong>Using Maven</strong></p>
<strong>To use the SDK with your maven project, add this dependency to your pom.xml file:</strong>
<pre><code class="language-java">
	&lt;dependency&gt;
		&lt;groupId&gt;com.fusioncharts.fusionexport&lt;/groupId&gt;
		&lt;artifactId&gt;fusionexport&lt;/artifactId&gt;
		&lt;version&gt;1.0.0-rc&lt;/version&gt;
	&lt;/dependency&gt;
</code></pre>
<strong>To import the SDK into your project:</strong>
<pre><code class="language-java"> import com.fusioncharts.fusionexport.client.*; </code></pre> </div>
<div class="tab golang-tab">
<strong>To install the go package, simply use go get:</strong>
<pre><code class="language-go">	go get github.com/fusioncharts/fusionexport-go-client </code></pre>
<strong>To require this into your project:</strong>
<pre><code class="language-go">	import "github.com/fusioncharts/fusionexport-go-client"</code></pre>
</div>

<div class="tab php-tab">
<strong>To install this package, simply use composer:</strong>
<pre><code class="language-php"> composer require fusioncharts/fusionexport-php-client:1.0.0-rc </code></pre>
<strong>To use the SDK in your project:</strong>
<pre><code class="language-php">
	use FusionExport\ExportManager;
	use FusionExport\ExportConfig;
</code></pre>
</div>
</div>
</div>

## What’s next?

* [Export Charts]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-chart-as-image '@@open-newtab')

* [Export Dashboards]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-a-dashboard '@@open-newtab')

* [Configure Charts]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart '@@open-newtab')

* [Export Charts in Bulk]({% site.baseurl %}/exporting-charts/using-fusionexport/tutorials/export-charts-in-bulk '@@open-newtab')