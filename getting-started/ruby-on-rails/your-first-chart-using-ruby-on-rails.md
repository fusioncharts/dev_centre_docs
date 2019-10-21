---
title: Create a Chart Using Ruby on Rails | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the ruby-on-rails.
heading: Create a Chart Using Ruby on Rails
---

## Overview

FusionCharts Suite XT includes the **FusionCharts server-side RoR** wrapper that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page to generate charts.

In this article, we will show you how to install and render a chart using the **FusionCharts Rails gem** wrapper.

## Installation

In this article, we will show you how to download and install the **FusionCharts Rails gem** wrapper and all the other dependencies on your system.

* Copy the `fusionCharts-rails.rb` from `integrations > rubyonrails > fusioncharts-wrapper` in your project folder.

* Include the **FusionCharts** JavaScript files, which can be downloaded from here.

* Include the FusionCharts theme file to apply the style to the charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

* Add the FusionCharts Rail wrapper:
  * Using RubyGems
  * Manually
* Include the FusionCharts Rails wrapper.

To add the FusionCharts Rails wrapper, use any of the following processes:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='rubygems'>RubyGems</a></li>
  <li><a data-toggle='manual'>Manual</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab rubygems-tab active'>
<div><strong>Add this line to your application’s `Gemfile`:</strong></div>
<pre><code class="language-ruby">
	gem ‘fusioncharts-rails’
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>RubyGems contain package information along with the files to install. On the command line prompt, execute the following command:</strong></div>
<pre><code class="language-ruby">
    $bundle
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>This command will automatically install the `fusioncharts-rails` gem. You can also install the gem directly from the command line prompt, without making any edits to the `Gemfile`. To do this, use the code line given below:</strong></div>
<pre><code class="language-ruby">
    $gem install fusioncharts-rails
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab manual-tab'>
<div><strong>Step 1: </strong>Copy all files from `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder.</div>
<div><strong>Step 2: </strong>Paste the copied files to the `lib` folder of your application</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts Suite and the Rails wrapper.

## Create Your First Chart

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart data

The data to render the above chart is shown in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data:

- Create the `chart` object to define the elements of the chart.

- Set the `caption` and `subcaption` of the chart.

- Set the value of `xAxisName` attribute to **Country**(first column of the table).

- Set the value of `yAxisName` attribute to **Reserves**(second column of the table).

- In the `data` array, create objects for each row and specify the `label` attribute to represent the Country. For example, **Venezuela**.
  
- Similarly, specify the `value` attribute to set the value of Oil Reserves in respective countries. For example, **290K** for **Venezuela**.

- Set the `numberSuffix` attribute to set the unit of the values.

- Set the `theme` attribute to apply the predefines themes to the chart.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

1. Include the **FusionCharts Rails wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Set the chart appearance configuration to display the data in the chart.

5. Create an array named `chartDataObj` of hash objects which stores data.

6. Create a chart data template to store data in `label` and `value`.

7. Set te chart data as JSON string.

8. Create the chart instance and set the following:

   * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

   * Set the `width` and `height` (in pixels).

   * Set the container for the chart.

   * Set the `dataFormat` as JSON.

   * Embed the `json` data as the value of the `dataSource`.

9. Create a container using `<div>` to render the chart.

The full code for the above sample is:

```ruby
require 'json'
require 'fusioncharts-rails'

class FirstChart
    def self.getChart

        # Chart appearance configuration
        chartAppearancesConfigObj = Hash.new
        chartAppearancesConfigObj = { 
                        "caption" => "Countries With Most Oil Reserves [2017-18]",
                        "subCaption" => "In MMbbl = One Million barrels", 
                        "xAxisName" => "Country",
                        "yAxisName" => "Reserves (MMbbl)", 
                        "numberSuffix" => "K", 
                        "theme" => "fusion"
                    }

        # An array of hash objects which stores data
        chartDataObj = [
                    {"Venezuela" => "290"},
                    {"Saudi" => "260"},
                    {"Canada" => "180"},
                    {"Iran" => "140"},
                    {"Russia" => "115"},
                    {"UAE" => "100"},
                    {"US" => "30"},
                    {"China" => "30"}
                ]

        # Chart data template to store data in "Label" & "Value" format
        labelValueTemplate = "{ \"label\": \"%s\", \"value\": \"%s\" },"

        # Chart data as JSON string
        labelValueJSONStr = ""

        chartDataObj.each {|item| 
            data = labelValueTemplate % [item.keys[0], item[item.keys[0]]]
            labelValueJSONStr.concat(data)
        }

        # Removing trailing comma character
        labelValueJSONStr = labelValueJSONStr.chop

        # Chart JSON data template
        chartJSONDataTemplate = "{ \"chart\": %s, \"data\": [%s] }"

        # Final Chart JSON data from template
        chartJSONDataStr = chartJSONDataTemplate % [chartAppearancesConfigObj.to_json, labelValueJSONStr]

        # Chart rendering 
        chart = Fusioncharts::Chart.new({
                width: "700",
                height: "400",
                type: "column2d",
                renderAt: "chartContainer",
                dataSource: chartJSONDataStr
            })

    end
end
```

The HTML template of the above sample is shown below:

```HTML
<!-- Filename: app/views/examples/firstchart.html.erb -->
<h3>My Chart</h3>
<div id="chart-container"></div>
<%=@myChart.render() %>
```

That's it! Your first chart using **FusionCharts Rails** wrapper is ready. When you run this HTML page now, you should see a chart representing your data.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.