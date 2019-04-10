---
title: Create a Gauge Using Ruby on Rails | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the ruby-on-rails.
heading: Create a Gauge Using Ruby on Rails
---

## Overview

FusionCharts Suite XT includes the **FusionCharts server-side RoR** wrapper that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page to generate charts.

In this article, we will show you how to install and render a gauge using the **FusionCharts Rails gem** wrapper.

## Installation

In this article, we will show you how to download and install the **FusionCharts Rails gem** wrapper and all the other dependencies on your system.

- Copy the 'fusionCharts-rails.rb`from`integrations > rubyonrails > fusioncharts-wrapper` in your project folder.

- Include the **FusionCharts** JavaScript files, which can be downloaded from here.

- Include the FusionCharts theme file to apply the style to the gauge.

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

- Add the FusionCharts Rail wrapper:
  _ Using RubyGems
  _ Manually

- Include the FusionCharts Rails wrapper.

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

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range | Color | Hex Code |
| ----- | ----- | -------- ||
| 0-50 | Red | #F2726F |
| 50-75 | Yellow | #FFC533 |
| 75-100 | Green | #62B58F |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Gauge

To render the gauge, follow the steps below:

1. Include the **FusionCharts Rails wrapper** in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Set the gauge appearance configuration to display the data in the gauge.

5. Create an array named `chartDataObj` to save the color range data of the gauge.

6. Create the gauge dial data in the array format (Multiple values can be separated by comma).

7. Set te chart data as JSON string.

8. Create the gauge instance and set the following:

   - Set the chart type as `angulargauge`. Each gauge is represented with a unique alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauges with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).

   - Set the `width` and `height` (in pixels).

   - Set the container for the chart.

   - Set the `dataFormat` as JSON.

   - Embed the `json` data as the value of the `dataSource`.

9. Create a container using `<div>` to render the chart.

The full code for the above sample is:

```
require 'json'

class FirstWidget

    # Widget rendering
    def self.getWidget

        # Widget appearance configuration
        widgetAppearancesConfigObj = {
            "caption" => "Nordstrom's Customer Satisfaction Score for 2017",
            "lowerLimit" => "0",
            "upperLimit" => "100",
            "showValue" => "1",
            "numberSuffix" => "%",
            "theme" => "fusion",
            "showToolTip" => "0"
        }

        # Widget color range data
        colorDataObj = {"color" => [
                {"minValue" => "0", "maxValue" => "50", "code" => "#F2726F"},
                {"minValue" => "50", "maxValue" => "75", "code" => "#FFC533"},
                {"minValue" => "75", "maxValue" => "100", "code" => "#62B58F"}
            ]
        }

        # Widget dial data in array format, multiple values can be separated by comma e.g. ["81", "23", "45",...]
        widgetDialDataArray = ["81"]

        # Dial value in JSON format
        widgetDialDataStr = ""

        # Template for dial value
        widgetDialDataTemplate = "{ \"value\": \"%s\" },"

        # Iterates dial data array and converts them proper data format
        widgetDialDataArray.each {|item|
            data = widgetDialDataTemplate % [item]
            widgetDialDataStr.concat(data)
        }

        # Removing trailing comma
        widgetDialDataStr = widgetDialDataStr.chop

        # Formats dial value(s)
        widgetDialTemplate = "{ \"dial\": [%s]}"
        widgetDialStr = ""
        widgetDialStr = widgetDialTemplate % [widgetDialDataStr]

        # Final Widget JSON template
        widgetJSONTemplate = "{ \"chart\": %s, \"colorRange\": %s,  \"dials\": %s}"

        # Final Widget JSON data from template
        widgetJSONStr = widgetJSONTemplate % [widgetAppearancesConfigObj.to_json, colorDataObj.to_json, widgetDialStr]

        # Rendering the widget
        widget = Fusioncharts::Chart.new({
            width: "450",
            height: "250",
            type: "angulargauge",
            renderAt: "widgetContainer",
            dataSource: widgetJSONStr
        })
    end
end
```

The template of the above sample is shown below:

```HTML
<<!-- Filename: app/views/examples/firstwidget.html.erb -->
<h3>My Widget</h3>
<div id="widget-container"></div>
<%=@myWidget.render() %>
```

That's it! Your first gauge using **FusionCharts Rails** wrapper is ready. When you run this HTML page now, you should see a gauge representing your data.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
