---
permalink: using-with-server-side-languages/ruby-on-rails/different-ways-of-loading-data.html
title: Different Ways of Loading Data in Ruby | FusionCharts
description: The FusionCharts Rails wrapper lets you load data for a chart using a static JSON string, a static XML string and a valid Ruby hash
heading: Different Ways of Loading Data in Ruby
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts Ruby on Rails Wrapper can be downloaded from <a href="http://www.fusioncharts.com/ruby-on-rails-charts/" target="_blank">here</a>.</p>

The FusionCharts Rails wrapper lets you load data for a chart using:

* <a href="{{ site.baseurl }}using-with-server-side-languages/ruby-on-rails/different-ways-of-loading-data.html#loading-data-from-a-static-json-string">a static JSON string</a>

* <a href="{{ site.baseurl }}using-with-server-side-languages/ruby-on-rails/different-ways-of-loading-data.html#loading-data-from-a-static-xml-string">a static XML string</a>

* <a href="{{ site.baseurl }}using-with-server-side-languages/ruby-on-rails/different-ways-of-loading-data.html#loading-data-from-a-valid-ruby-hash">a valid Ruby hash</a>

In this section, you will be shown how the Ruby on Rails wrapper uses each of these methods to generate charts.

<p class="text-info"> Before you proceed, make sure you have [installed and set up the plugin]{% linkTo tutorials/using-with-server-side-languages/ruby-on-rails/introduction.md %} correctly. </p>

## Loading Data from a Static JSON String

A column chart, the data for which is loaded using a static JSON string, is shown below:

{% embed_chart using-with-server-side-languages-ruby-on-rails-different-ways-of-loading-data-example-1.js %}

The data structure needed to create the above chart goes into the `app/controllers/examples_controller.rb` file. It is as given below:

```rb
# Example to create a column 2D chart with the chart data passed in JSON string format.

#The `fc_json` method is defined to load chart data from a JSON string.
def fc_json

# Create the FusionCharts object in the controller action.
	@chart = Fusioncharts::Chart.new({
   	:height => 400,
   	:width => 600,
   	:id => 'chart',
   	:type => 'column2d',
   	:renderAt => 'chart-container',

	#Because the chart data is in JSON, the value of the `dataFormat` attribute is set to

# `json`.
:dataFormat => ‘json’,

# The chart data is passed as a string to the `dataSource` parameter.
   	:dataSource => '{
       	"chart": {
           	"caption": "Monthly revenue for last year",
           	"subCaption": "Harry\'s SuperMart",
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

# Alternatively, you can assign this string to a string variable in a separate JSON file and

# pass the URL of that file to the `dataSource` parameter.

# Example: `:dataSource => ‘/data/chart.json’ `.

   	}'

	})
end
```

To know more about the attributes that you can configure for the column 2D chart, visit [this page]{% linkTo attrs.md chart=column2d %}.

## Loading Data from a Static XML String

Next, we will look at how you can render the column chart shown above using XML data.

The data structure needed to create the above chart goes into the `app/controllers/examples_controller.rb` file. It is as given below:

```rb
# The `fc_xml` method is defined to load chart data from an XML string.
def fc_xml

# Create the FusionCharts object in the controller action
	@chart = Fusioncharts::Chart.new({
    	:type => 'column2d',
    	:renderAt => 'chart-container',

# Because the chart data is in XML, the value of the `dataFormat` attribute is set to `xml`.
    	:dataFormat => 'xml',

# The chart data is passed as a string to the `dataSource` parameter.
  	:dataSource => <chart caption="Harrys SuperMart" subcaption="Monthly revenue for last year" xaxisname="Month" yaxisname="Amount" numberprefix="$" palettecolors="#008ee4" bgalpha="0" borderalpha="20" canvasborderalpha="0" theme="fint" useplotgradientcolor="0" plotborderalpha="10" placevaluesinside="1" rotatevalues="1" valuefontcolor="#ffffff" captionpadding="20" showaxislines="1" axislinealpha="25" divlinealpha="10"> <set label="Jan" value="420000" /> <set label="Feb" value="810000" /> <set label="Mar" value="720000" /> <set label="Apr" value="550000" /> <set label="May" value="910000" /> <set label="Jun" value="510000" /> <set label="Jul" value="680000" /> <set label="Aug" value="620000" /> <set label="Sep" value="610000" /> <set label="Oct" value="490000" /> <set label="Nov" value="900000" /> <set label="Dec" value="730000" /> </chart>

# Alternatively, you can assign this string to a string variable in a separate XML file and

# pass the URL of that file to the `dataSource` parameter.

# Example → `:dataSource => ‘/data/chart.xml’ `.

	})

	@chart.width = 600
	@chart.height = 400

end
```

## Loading Data from a Valid Ruby Hash

Hashes, also known as associative arrays, are an indexed collection of object references.

As an example, we will create a multi-series column 2D chart that compares the quarterly revenue for the current year and the previous year at Harry’s SuperMart.

The multi-series column 2D chart thus rendered is shown below:

{% embed_chart using-with-server-side-languages-ruby-on-rails-different-ways-of-loading-data-example-2.js %}

The data structure needed to create the above chart goes into the `app/controllers/examples_controller.rb` file. It is as given below:

```rb
# The `fc_hash` function is defined to load data from a Ruby Hash. This data will be converted to

# JSON and the chart will be rendered.
def fc_hash

# Create the FusionCharts object in the controller action

	@chart = Fusioncharts::Chart.new({
    	:height => 400,
    	:width => 600,
    	:type => 'mscolumn2d',
    	:renderAt => 'chart-container',

# Chart data is passed to the `dataSource` parameter, as hashes, in the form of

# key-value pairs.

:dataSource => {
  	:chart => {
      	:caption => 'Comparison of Quarterly Revenue',
      	:subCaption => 'Harry\'s SuperMart',
      	:xAxisname => 'Quarter',
      	:yAxisName => 'Amount ($)',
      	:numberPrefix => '$',
      	:theme => 'fint',
  	},

# The `category` hash is defined inside the `categories` array with four key-value pairs

# that represent the x-axis labels for the four quarters.

  	:categories => [{
      	:category => [
          	{ :label => 'Q1' },
          	{ :label => 'Q2' },
          	{ :label => 'Q3' },
          	{ :label => 'Q4' }
      	]
  	}],
  	:dataset =>  [{
      	:seriesname => 'Previous Year',

# The `data` hash contains four key-value pairs that are the values for the revenue

# generated in the previous year.

      	:data =>  [
          	{ :value => '10000' },
          	{ :value => '11500' },
          	{ :value => '12500' },
          	{ :value => '15000' }
      	]},{
      	:seriesname => 'Current Year',
      	:data =>  [
          	{ :value => '25400' },
          	{ :value => '29800' },
          	{ :value => '21800' },
          	{ :value => '26800' }
      	]}
  	]
  }
})
end
```
To know more about the attributes that you can configure for the multi-series column 2D chart, visit [this page]{% linkTo attrs.md chart=mscolumn2d %}.

## Important Tips for Developers

Given below are a few tips that, although applicable while using FusionCharts, need to be specifically paid attention to here:

* The structure of chart data is different based on whether you are rendering a single-series chart or a multi-series chart. The table below shows the difference:

<table>
  <tr>
     <td><strong>Single-series Chart</strong></td>
  </tr>
  <tr>
{% embed_data using-with-server-side-languages-ruby-on-rails-different-ways-of-loading-data-example-3.js %}
For an example, click [here]{% linkTo tutorials/chart-guide/standard-charts/creating-standard-charts.md %}.
    </td>
  </tr>
  <tr>
    <td><strong>Multi-series Chart</strong></td>
  </tr>
  <tr>  
{% embed_data using-with-server-side-languages-ruby-on-rails-different-ways-of-loading-data-example-4.js %}
For an example, click [here]{% linkTo tutorials/chart-guide/multi-series-charts/creating-multi-series-charts.md %}.
    </td>
  </tr>
</table>


* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.

* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.