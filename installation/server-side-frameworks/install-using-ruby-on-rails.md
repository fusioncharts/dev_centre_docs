---
title: Install using Ruby on rails | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side RoR wrapper that lets you create interactive, data-driven charts.
heading: Ruby on Rails
breadcrumb: [["Home", "/"], ["Ruby on Rails"]]
---

FusionCharts Suite XT includes the Ruby on Rails wrapper that lets you create interactive, data-driven charts.

## Download

Download FusionCharts Ruby on Rails Wrapper from [here](https://www.fusioncharts.com/ruby-on-rails-charts/).

## Install

To install the Rails wrapper:

* Add this line to your application's `Gemfile`:

```
gem 'fusioncharts-rails'
```

RubyGems contain package information along with the files to install. To read more on gems, click [here](https://rubygems.org/gems/fusioncharts-rails).

* On the command line prompt, execute the following command:

```
$bundle
```
This command will automatically install the `fusioncharts-rails` gem.

You can also install the gem directly from the command line prompt, without making any edits to the Gemfile.

To do this, use the code line given below:

```
$gem install fusioncharts-rails
```

> Ensure that the **config.assets.debug** flag in the **development.rb** file (config/environments/development.rb) is enabled (set to **true**)

Now, you are ready to prepare the chart using our  Ruby on Rails wrapper.