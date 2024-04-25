---
title: Install FusionExport Server SDKs | FusionCharts
description: Simplify the installation of FusionExport Server SDKs for C#, Java, PHP, Node.js, & Python with our step-by-step instructions in our comprehensive article.
heading: Install FusionExport Server SDKs
---

In this article, we illustrate how to install FusionExport Server SDK for your preferred programming language. We provide SDKs for the following languages:

- C#

- Java

- PHP

- Node.js

- Python

To export charts and dashboards using FusionExport, you can develop the application in any one of the supported languages. Internally, the SDKs communicate with the server by using the FusionExport API. So, for interacting with the FusionExport Server from your project, we recommend using the SDKs and not FusionExport CLI.

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="java">Java</a></li>
    <li><a data-toggle="php">PHP</a></li>
    <li><a data-toggle="nodejs">Node.js</a></li>
    <li><a data-toggle="python">Python</a></li>
</ul>

<div class="tab-content extra-tabs">

<div class="tab csharp-tab active">
<strong>Install the C# SDK client for FusionExport using the [NuGet](https://www.nuget.org/) package manager (`.NET >= 4.0`). Open the *NuGet package manager console* and execute the following command:</strong>
<pre><code class="language-cs">$ Install-Package FusionExport</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab java-tab">
<strong>Install Java SDK for FusionCharts using any of the following mechanisms:</strong>
<h4><strong>Gradle</strong></h4>
<strong>To use the SDK as part of the [Gradle](https://gradle.org/) build system, add the following in the `build.gradle` file of your project (`Java >= 8, JDK >= 1.8, gradle >= 4.x`):</strong>
<p>1. Maven central repository to the repositories list:</p>
<pre><code class="language-java">
repositories {
	mavenCentral()
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<p>2. FusionExport Java SDK to the dependency list:</p>
<pre><code class="language-java">
dependencies {
    compile "com.fusioncharts.fusionexport:fusionexport:1.0.0"
    compile group: 'javax.websocket', name: 'javax.websocket-api', version: '1.1'
    compile group: 'org.glassfish.tyrus.bundles', name: 'tyrus-standalone-client', version: '1.13.1'
    compile 'com.google.code.gson:gson:2.8.2'
    compile group: 'org.jsoup', name: 'jsoup', version: '1.7.2'
    compile group: 'org.apache.ant', name: 'ant', version: '1.8.2'
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<h4><strong>Maven</strong></h4>
<strong>To use the SDK with your [maven](https://maven.apache.org/) project (`Java >= 8, JDK >= 1.8, maven >= 3.x`), add these dependencies to the `pom.xml` file:</strong>
<pre><code class="language-java">
&lt;dependency&gt;
    &lt;groupId&gt;com.fusioncharts.fusionexport&lt;/groupId&gt;
    &lt;artifactId&gt;fusionexport&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;javax.websocket&lt;/groupId&gt;
&lt;artifactId&gt;javax.websocket-api&lt;/artifactId&gt;
&lt;version&gt;1.1&lt;/version&gt;
&lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;org.glassfish.tyrus.bundles&lt;/groupId&gt;
&lt;artifactId&gt;tyrus-standalone-client&lt;/artifactId&gt;
&lt;version&gt;1.13.1&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
&lt;artifactId&gt;gson&lt;/artifactId&gt;
&lt;version&gt;2.8.2&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;org.jsoup&lt;/groupId&gt;
&lt;artifactId&gt;jsoup&lt;/artifactId&gt;
&lt;version&gt;1.7.2&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;org.apache.ant&lt;/groupId&gt;
&lt;artifactId&gt;ant&lt;/artifactId&gt;
&lt;version&gt;1.8.2&lt;/version&gt;
&lt;/dependency&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre></div>

<div class="tab php-tab">
<strong>Install the PHP SDK client for FusionExport using [composer](https://getcomposer.org/) (`PHP >= 7.x, composer >= 1.7.x`):</strong>
<pre><code class="language-php">$ composer require fusioncharts/fusionexport</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab nodejs-tab">
<strong>Install the Node.js SDK client for FusionExport using [npm](https://www.npmjs.com/) (`Node.js >= 8.0.0, npm >= 5.0.0`):</strong>
<pre><code class="language-Bash"> $ npm install fusionexport-node-client --save</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class="tab python-tab">
<strong>Install the Python SDK client for FusionExport using [pip](https://pypi.org/project/pip/) (`Python >= 3.x`):</strong>
<pre><code class="language-python"> $ pip install fusionexport</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<p><strong>Note: </strong>To avoid global installation, we recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing the package. If you want `pip` to install the package in a specific directory *without* using virtual environment, you may also experiment with the suggestions in [this StackOverflow thread](https://stackoverflow.com/questions/2915471/install-a-python-package-into-a-different-directory-using-pip), or [this Github issue](https://github.com/pypa/pip/issues/446).</p>
</div>
</div>
</div>

## Next Steps

After you have installed FusionCharts Server SDK for the language of your choice, refer to the following tutorials to get started with exporting charts:

- [Export chart as image](/exporting-charts/using-fusionexport/tutorials/export-chart-as-image)

- [Change the export type](/exporting-charts/using-fusionexport/tutorials/change-the-export-type)

- [Change the export quality](/exporting-charts/using-fusionexport/tutorials/change-the-export-quality)
