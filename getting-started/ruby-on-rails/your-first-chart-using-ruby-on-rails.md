---
title: Create a Chart Using Ruby on Rails | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the ruby-on-rails.
heading: Create a Chart Using Ruby on Rails
---

FusionCharts Suite XT includes the **FusionCharts Server-side Ruby On Rails** wrapper that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page to generate charts.

In this article, we will show you how to install and render a chart using the **FusionCharts Rails gem** wrapper.

## Prerequisite

We assume that you have Ruby and Rails installed in the system. If not, you can visit the [Rails Installation guide](https://guides.rubyonrails.org/v5.0/getting_started.html) and follow the installation steps. Check the ruby and rails versions by running the following commands in the terminal

```bash
$ ruby -v
$ rails -v
```

Now that you're done with the Rails installation, let's create a rails project.

- Enter the following commands in the terminal to create a new rails project.

```bash
rails new demoproject
cd demoproject
```

- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) if you don't have it already otherwise rails will give an error.

- Install Webpacker, a gem which wraps webpack - the popular JavaScript tool used for managing and bundling JavaScript code - and provides helpers to use the webpack in your Rails applications. Use the following command to do so:

```bash
rails webpacker:install
```

- Now, run the rails server. If it works, everything is set and you can move onto installing FusionCharts dependencies.

```bash
rails server
```

## Installation & Including Dependencies

Download the FusionCharts library to get the `FusionCharts rails gem` wrapper.

<a href="https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=js">Download FusionCharts library</a>

FusionCharts rails gem wrapper can be added in two ways:

### Manual

Copy the entire content from `integrations > rubyonrails > fusioncharts-wrapper` to your project's `lib` folder.

### RubyGems

Enter the following command in the terminal:

```bash
gem install fusioncharts-rails
```

Once the FusionCharts rails gem wrapper is installed, we will add the JavaScript files. Follow the steps below:

- Copy the contents of `js` directory (fusioncharts-suite-xt > js) which contains all the javascript files and paste it in **app/javascript/src/fusioncharts folder**.

- Add the following line in `app\views\layouts\application.html.erb` inside HEAD tag

```html
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

- In `app\javascript\packs\application.js` add the following code:

```javascript
var FusionCharts = require("src/fusioncharts/fusioncharts");

// Require charts from fusioncharts
var Charts = require("src/fusioncharts/fusioncharts.charts");

// Require export module from fusioncharts
var ExcelExport = require("src/fusioncharts/fusioncharts.excelexport");

// Require theme from fusioncharts
var FusionTheme = require("src/fusioncharts/themes/fusioncharts.theme.fusion");

// Add charts and themes and export module as dependency
Charts(FusionCharts);
FusionTheme(FusionCharts);
ExcelExport(FusionCharts);
```

- Use the following command, to create the controller and view:

```bash
$rails generate controller HomeController chartview
```

## Prepare the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'Countries' as data labels along X-axis and 'No. of Oil Reserves' as data values along Y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format. Now we add the data in the HomeController, in `app\controllers\home_controller.rb`.

```bash
:dataSource => {
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

## Configure Your Chart

Now that the data's ready, you are ready to work on styling, positioning and giving context to your chart. Now we will add the chart attributes in HomeController (`app\controllers\home_controller.rb`).

```javascript
:dataSource => {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
}
```

## Create Your Chart

Let's create a Column 2D Chart using the `FusionCharts rails gem` wrapper showing "Countries with most Oil Reserves".

- Add the following code in the HomeController (`app\controllers\home_controller.rb`).

- The HomeController file will have the chart constructor, attributes and the datasource required to render the chart.

```javascript
require 'fusioncharts-rails'
class HomeController < ApplicationController
  # layout false
  def HomeView
    @chart = Fusioncharts::Chart.new({
        :height => 400,
        :width => 600,
        :id => 'chart',
        :type => 'MSColumn2D',
        :renderAt => 'chart-container',
        :dataSource => {
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
            },
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
    end
end
```

- Go to the view page in `app\views\home\HomeView.html.erb` . This will have HTML template required to render the chart. Copy the code given below and paste it in this file.

```html
<div id="chart-container"></div>
<%= @chart.render() %>
```

## Render the Chart

With the container for the chart created in the `HomeView.html.erb`, run the following command to rub the rails server:

```bash
$rails server
```

Open the URL ([http://localhost:3000/](http://localhost:3000/)) in the browser, and you'll be able to see the chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `FusionCharts rails gem` wrapper is ready.
