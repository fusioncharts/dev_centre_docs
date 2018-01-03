---
permalink: using-with-server-side-languages/ruby-on-rails/introduction.html
title: Introduction to the FusionCharts Ruby on Rails Wrapper | FusionCharts
description: In this section, you will be shown how you can create a simple chart using the FusionCharts server-side Rails wrapper.
heading: Introduction to the FusionCharts Ruby on Rails Wrapper
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts Ruby on Rails Wrapper can be downloaded from <a href="http://www.fusioncharts.com/ruby-on-rails-charts/" target="_blank">here</a>.</p>

FusionCharts Suite XT includes the FusionCharts Ruby on Rails wrapper that lets you create interactive, data-driven charts.

In this section, you will be shown how you can create a simple chart using the FusionCharts server-side Rails wrapper.

Before you start creating charts, you will need to install the wrapper and get the latest version of the FusionCharts library.

## Installing the FusionCharts Rails Wrapper

To install the Rails wrapper:

1. Add this line to your application’s `Gemfile`:

```rb
gem ‘fusioncharts-rails’
```

RubyGems contain package information along with the files to install. To read more on gems, click [here](http://rubygems.org/gems/fusioncharts-rails).

2. On the command line prompt, execute the following command:

```bash
$bundle
```
This command will automatically install the `fusioncharts-rails` gem.

You can also install the gem directly from the command line prompt, without making any edits to the Gemfile.

To do this, use the code line given below:

```bash
$gem install fusioncharts-rails
```

## Downloading  the Latest FusionCharts Library

You will have to download the latest version of the library at [http://www.fusioncharts.com/download/](http://www.fusioncharts.com/download/).

Once you have downloaded and extracted files from the package:

1. Copy the JavaScript files in to the `vendor/assets/javascripts/fusioncharts/` folder.

2. Add the following code lines in the `app/assets/javascripts/application.js` file:

```javascript
//= require fusioncharts/fusioncharts
//= require fusioncharts/fusioncharts.charts
//= require fusioncharts/themes/fusioncharts.theme.fint
```

<p class="text-info"> Ensure that the __config.assets.debug__ flag in the __development.rb__ file (config/environments/development.rb) is enabled (set to __true__) </p>

## Creating and Rendering a Simple Chart using the FusionCharts Rails Wrapper

As an example, we will create a simple column 2D chart that plots the monthly revenue for the last year at Harry’s SuperMart. The data for the chart is shown in the table below:

<table>
  <tr>
    <th>Month</th>
    <th>Revenue (In USD)</th>
  </tr>
  <tr>
    <td>Jan</td>
    <td>420000</td>
  </tr>
  <tr>
    <td>Feb</td>
    <td>810000</td>
  </tr>
  <tr>
    <td>Mar</td>
    <td>720000</td>
  </tr>
  <tr>
    <td>Apr</td>
    <td>550000</td>
  </tr>
  <tr>
    <td>May</td>
    <td>910000</td>
  </tr>
  <tr>
    <td>Jun</td>
    <td>510000</td>
  </tr>
  <tr>
    <td>Jul</td>
    <td>680000</td>
  </tr>
  <tr>
    <td>Aug</td>
    <td>620000</td>
  </tr>
  <tr>
    <td>Sep</td>
    <td>610000</td>
  </tr>
  <tr>
    <td>Oct</td>
    <td>490000</td>
  </tr>
  <tr>
    <td>Nov</td>
    <td>900000</td>
  </tr>
  <tr>
    <td>Dec</td>
    <td>730000</td>
  </tr>
</table>


The column 2D chart generated from above data will look like this:

{% embed_chart using-with-server-side-languages-ruby-on-rails-introduction-example-1.js %}

**Creating the Chart**

The data structure, with steps explained as inline comments,  needed to create the above chart is given below:

```rb
# Example to create a column 2D chart with the chart data passed in JSON string format
# Filename: `app/controllers/examples_controller.rb`

# The `fc_json` action is defined to create the column 2D chart.
def fc_json

# **Step 1:** Create the FusionCharts object in the controller action
	@chart = Fusioncharts::Chart.new({
    	:height => 400,
    	:width => 600,
    	:id => 'chart',
    	:type => 'column2d',
    	:renderAt => 'chart-container',
    	:dataSource => '{
        	"chart": {
            	"caption": "Monthly revenue for last year",
              "subCaption": "Harry's SuperMart",
              "xAxisName": "Month",
              "yAxisName": "Revenues (In USD)",
              "numberPrefix": "$",
              "theme": "zune"
        	},
        	"data": [{
            	"label": "Jan",
            	"value": "420000"
        	}, {
            	"label": "Feb",
            	"value": "810000"
        	}, {
            	"label": "Mar",
            	"value": "720000"
        	}, {
            	"label": "Apr",
            	"value": "550000"
        	}, {
            	"label": "May",
            	"value": "910000"
        	}, {
            	"label": "Jun",
            	"value": "510000"
        	}, {
            	"label": "Jul",
            	"value": "680000"
        	}, {
            	"label": "Aug",
            	"value": "620000"
        	}, {
            	"label": "Sep",
            	"value": "610000"
        	}, {
            	"label": "Oct",
            	"value": "490000"
        	}, {
            	"label": "Nov",
            	"value": "900000"
        	}, {
            	"label": "Dec",
            	"value": "730000"
        	}]
    	}'
	})
```

Data for the chart can be in any one of the following formats:

- Valid Ruby Hash
- JSON String
- XML String

### Rendering the Chart

The `render()` method is used to render the above chart. The code for this method is written in the view file - `.erb` file, which is automatically generated once you have created the `.rb` file containing the action.

 The HTML code to render the chart is given below:

```html
<!-- Filename: `app/views/examples/fc_json.html.erb` -->
<!-- **Step 2:** Render the chart**  **-->
<div id="chart-container"></div>
<%= @chart.render() %>
```