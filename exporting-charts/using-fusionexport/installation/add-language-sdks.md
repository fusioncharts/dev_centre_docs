---
permalink: exporting-charts/using-fusionexport/installation/add-language-sdks.html
title: Add Language SDKs | FusionCharts
description: This section is a language SDK installation guide
heading: Add Language SDKs
chartPresent: False
---

The FusionExport Language SDKs are tools for creating and managing the FusionExport system from various supported languages for direct export integration in your application. It works with the FusionExport Desktop application (local export) based on simple APIs.

## Installation and basic usage guide for all the language SDKs

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
    	<div><strong>To install the Node.js module, simply use the npm command:</strong></div>
```javascript
        $ npm install fusionexport-node-client --save
        ```
        <div><strong>To require the SDK into your project:</strong></div>
```javascript
        const FusionExport = require('fusionexport-node-client');
        ```
    </div>
    <div class="tab python-tab">
        <div><strong>To install the Python package, simply use the pip command:</strong></div>
```javascript
        $ pip install fusionexport
        ```
        <div><strong>To import the SDK into your project:</strong></div>
```javascript
        from fusionexport import ExportManager, ExportConfig
        ```
    </div>
    <div class="tab csharp-tab">
    	<div><strong>You can install the SDK using the NuGet package manager. To install, open the NuGet package manager console and run the following command:</strong></div>
```javascript
        $ Install-Package FusionExport -Version 1.0.0-beta
        ```
        <div><strong>To use the SDK into your project:</strong></div>
```javascript
        using FusionCharts.FusionExport.Client; 
        ```
    </div>
    <div class="tab java-tab">
    	<p><strong>Using Gradle</strong></p>
    	<div><strong>To use as part of a Gradle project, first add the maven central repository to your repositories list:</strong></div>
```javascript
		repositories {
    mavenCentral()
}
        ```
        <div><strong>Then, add this SDK as a dependency to your build.gradle file:</strong></div>
```javascript
		dependencies {
    Compile "com.fusioncharts.fusionexport:fusionexport:1.0.0-beta"
}
        ```
        <p><strong>Using Maven</strong></p>
        <div><strong>To use the SDK with your maven project, add this dependency to your pom.xml file:
</strong></div>
```javascript
        <dependency>
  <groupId>com.fusioncharts.fusionexport</groupId>
  <artifactId>fusionexport</artifactId>
  <version>1.0.0-beta</version>
</dependency>
        ```
        <div><strong>To import the SDK into your project:</strong></div>
```javascript
        import com.fusioncharts.fusionexport.client.*;
        ```
    </div>
    <div class="tab golang-tab">
    	<div><strong>To install the go package, simply use go get:</strong></div>
```javascript
        go get github.com/fusioncharts/fusionexport-go-client
        ```
        <div><strong>To require this into your project:</strong></div>
```javascript
        import "github.com/fusioncharts/fusionexport-go-client"
        ```
    </div>
    <div class="tab php-tab">
        <div><strong>To install this package, simply use composer:</strong></div>
```javascript
        composer require fusioncharts/fusionexport:1.0.0-beta
        ```
        <div><strong>To use the SDK in your project:</strong></div>
```javascript
        use FusionExport\ExportManager;
use FusionExport\ExportConfig;
        ```
    </div>
</div>