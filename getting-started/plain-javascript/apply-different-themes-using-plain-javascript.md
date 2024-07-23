---
title: Apply Different Themes using Plain JS | FusionCharts
description: Know how to apply Different Themes using plain JavaScript with FusionCharts. Take your data visualization capabilities a notch up seamlessly with us.
heading: Apply Different Themes using Plain JS
---

## FusionCharts Suite XT ships with the following predefined themes:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

- `fusion` (since v3.13.0)
- `gammel` (since v3.13.0)
- `candy` (since v3.13.0)
- `zune`
- `ocean`
- `carbon`

This article focuses on how you can apply different themes to the chart at runtime. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The full code of the above sample is given below:

```javascript
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Add the chart and theme as dependency
FusionCharts.addDep(Charts);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
  type: "column2d",
  height: "400",
  width: "700",
  dataFormat: "json",
  renderAt: "chart-container",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ]
  },
  events: {
    beforeRender: function(e, d) {
      var container = e.data.container;
      // Change the sizes according to your need
      var options = {
        fusion: "fusion",
        gammel: "gammel",
        candy: "candy",
        zune: "zune",
        ocean: "ocean",
        carbon: "carbon"
      };
      var themeSelected = "fusion";

      function instantiate() {
        // Create option containers
        var parent = container.parentNode;

        var optionsContainer = document.createElement("div");
        optionsContainer.id = "config-container";

        var spanLabel = document.createElement("span");
        spanLabel.id = "select-text";
        spanLabel.innerText = "Choose a theme: ";

        var radioContainer = document.createElement("div");
        addClass(radioContainer, "change-type");
        window.__onThemeChange = function(option) {
          e.sender.setChartAttribute("theme", option);
        };
        // Util to add class
        function addClass(element, className) {
          var element,
            name = className,
            arr;
          arr = element.className.split(" ");
          if (arr.indexOf(name) == -1) {
            element.className += " " + name;
          }
        }

        function radioWrapper(
          wrapperId,
          inputId,
          label,
          selected,
          optionLabel
        ) {
          var item = "<div id='" + wrapperId + "' >";
          item +=
            "<input name='dimesion-selector' id='" +
            inputId +
            "' type='radio' " +
            (selected ? "checked='checked'" : "") +
            " onchange='__onThemeChange(\"" +
            optionLabel +
            "\")'/>";
          item += "<label for='" + inputId + "' >" + label + "</label>";
          item += "</div>";
          return item;
        }
        var changeTypeChilds = "";

        Object.keys(options).forEach(function(option, index) {
          var label = options[option];
          var selected = themeSelected === option;
          var radioOption = radioWrapper(
            "radio" + (index + 1),
            "radioButton" + (index + 1),
            label.toUpperCase(),
            selected,
            option
          );
          changeTypeChilds += radioOption;
        });

        radioContainer.innerHTML = changeTypeChilds;

        optionsContainer.appendChild(spanLabel);
        optionsContainer.appendChild(radioContainer);

        parent.appendChild(optionsContainer);

        var css =
          '.change-type{display:inline-block;margin:0 10px;font-family:basefontRegular,Helvetica Neue,Arial,sans-serif}.change-type>div{display:inline-flex;position:relative;margin:0 10px}.change-type label{position:relative;padding:5px 4px 5px 30px;border-radius:4px}.change-type input{opacity:0;cursor:pointer;z-index:1;width:100%;height:100%;left:0;position:absolute}.change-type label:after,.change-type label:before{content:"";position:absolute}.change-type label:before{display:block;background:#fff;border:2px solid #949697;box-shadow:none;border-radius:50%;top: 15px;left: 9px;width:1rem;height:1rem}.change-type label:after{    width: .55rem;height: .55rem;top: 18px;left: 11px;border-radius: 100%;}.change-type input:checked~label{color:#48b884;font-weight:600;box-shadow:0 4px 9px 0 rgba(104,105,128,.22)}.change-type input:checked~label:before{color:#fff;box-shadow:none;border:2px solid #48b884}.change-type input:checked~label:after{background:#55bd8d}';

        var styleNode = document.createElement("style");
        styleNode.innerHTML = css;
        document.body.appendChild(styleNode);
      }
      if (!window.__sample_theme_change) {
        instantiate();
      }
      window.__sample_theme_change = true;
    }
  }
}); // Render
chartInstance.render();
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency.

3. Store the chart configuration in a JSON object. In the JSON object:

   - Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height of the chart in pixels.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

4. `beforeRender` event is called to update theme from `fusion` to any other theme.

5. Radio buttons are created inside the `<div>` to choose a theme from:

   - fusion
   - gammel
   - candy
   - zune
   - ocean
   - carbon

6. Functionalities are added to the radio buttons to update the theme at runtime.
