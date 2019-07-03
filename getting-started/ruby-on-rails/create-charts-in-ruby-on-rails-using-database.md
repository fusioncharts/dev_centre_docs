---
title: Create Charts in Ruby using Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts Ruby on Rails wrapper.
heading: Create Charts in Ruby using Database
---

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts Ruby on Rails wrapper.

As an example, in this section, you will be shown how you can create a drill down  chart by fetching the required data from a database.

>  Before you proceed, make sure you have [installed and set up the plugin](/getting-started/ruby-on-rails/install-using-ruby-on-rails) correctly.

## Creating a Drill-down Chart

Assume that you have a **fusioncharts_sample** database that stores the population of all countries in the world, in the **Country** table, and the population of all cities in each country, in the **City** table.

Using this data, you want to plot a column 2D chart showing the top 10 most populous countries in the world. Furthermore, you want to render this column 2D chart as a drill down  chart, where clicking each data plot shows another chart plotting the top 10 populous cities of that country.

>  You can [download](http://dev.mysql.com/doc/index-other.html) this database from the MYSQL website or refer to the sample database available [here](https://dev.mysql.com/doc/world-setup/en/). </p>

The column 2D chart, with the drill down  functionality, that we need to render here looks like this:

{% embed_chart using-with-server-side-languages-ruby-on-rails-creating-charts-with-data-from-a-database-example-1.js %}

The data structure needed to create the above chart goes into the `app/controllers/examples_controller.rb` file. It is as given below:

```ruby
# Example to demonstrate the creation of a drill - down chart by fetching data from a database.
# The `country`
action is defined to load the base column 2D chart— the one that shows the top# 10 populous countries and has clickable data plots.
# It fetches the country list from the * * Country * * table and then prepares the data in
# a format compatible with FusionCharts.
def country
# The `select`
query is used to retrieve the name, population, and country code of the 10
# countries having the highest population, in descending order.
countries = Country.select(: name, : population, : code).order(population: : desc).limit(10)
top_ten_populous_countries = []
# Iterate through the list of countries in the database and create an array of hashes that
# stores the label
for each country data plot and its population value.
#The hash also stores the drill - down link
for the city chart corresponding to each country
# data plot.
countries.each do |
country |
top_ten_populous_countries.push({
    : label => country.name,
    : value => country.population,
    : link => "#{example_drilldown_path}/#{country.code}"
})
end
# Create a new FusionCharts instance that initializes the chart height, width, type, container div
# id, data source, and the data format
@ chart = Fusioncharts::Chart.new({
    : height => 400,
    : width => 600,
    : type => 'column2d',
    : renderAt => 'chart-container',
    # Chart data is passed to the `dataSource`
    parameter,
    as hashes,
    in the form of
    # key - value pairs.
    : dataSource => {
        : chart => {
            : caption => 'Top 10 Most Populous Countries',
            : xAxisname => 'Quarter',
            : yAxisName => 'Amount ($)',
            : numberPrefix => '$',
            : theme => 'fusion',
        },
        # The data in the array of hashes is now stored in the `top_ten_populous_countries`
        # variable in the FusionCharts consumable format.
        : data => top_ten_populous_countries
    }
})
end
# The `drilldown` action is defined to load the chart with the drill - down functionality.
# It fetches the list of cities from the * * City * * table, based on the country selected in the
# base chart.
# It then prepares the data in a format compatible with FusionCharts.
def drilldown
# The `select` query is used to retrieve the name and population of the top ten cities
# based on the country code for the selected country, in descending order.
cities = City.select(: name, : population).where(: countrycode, params[: id]).order(population: : desc).limit(10)
top_ten_populous_cities = []
# Iterate through the list of cities in the database and create an array of hashes that
# stores the label
for each city data plot and the its population value.
cities.each do |
city |
top_ten_populous_cities.push({
    : label => city.name,
    : value => city.population
})
end
# Create the FusionCharts object in the controller action.
@chart = Fusioncharts::Chart.new({
    : height => 400,
    : width => 600,
    : type => 'column2d',
    : renderAt => 'chart-container',
    : dataSource => {
        : chart => {
            : caption => 'Top 10 Most Populous City in selected Country',
            : xAxisname => 'Quarter',
            : yAxisName => 'Amount ($)',
            : numberPrefix => '$',
            : theme => 'fusion',
        },
        : data => top_ten_populous_cities
    }
})
end

```
