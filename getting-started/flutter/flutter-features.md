---
title: Flutter Features | FusionCharts
description: This article outlines how to work with events, APIs, and modules.
heading: Flutter Features
---

Achieve more with your charts, and explore more Flutter features. Learn how to work using events, APIs, modules, or how to configure your license. 

## Working with Events

You can add different events to your flutter chart. Likewise, you can add or remove events, but first, you need to instantiate the `FusionChartController` to support these features.

```javascript
/// Widget which uses flutter_fusioncharts to render column chart
class ColumnChart extends StatefulWidget {
  const ColumnChart({super.key});

  @override
  State<ColumnChart> createState() => _ColumnChartState();
}

class _ColumnChartState extends State<ColumnChart> {
  late FusionCharts _fusionChart2D;
  FusionChartsController fusionChartsController = FusionChartsController();

  @override
  void initState() {
    super.initState();
    /// Prameters to define the chart configurations, i.e., captions, 
    /// x and y axis labels, style, etc. There are hoards of options that 
    /// can be used to customize the chart. Details here: 
    /// https://www.fusioncharts.com/dev/fusioncharts
    Map<String, dynamic> chart = {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "logoURL":
      "https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
      "logoAlpha": "100",
      "logoScale": "110",
      "logoPosition": "TL",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "carbon",
      "baseFontSize": "35px",
      "captionFontSize": "35px",
      "subCaptionFontSize": "30px"
    };
    /// Provide the underlying data for the chart.
    List<dynamic> chartData = [
      {"label": "Venezuela", "value": "290"},
      {"label": "Saudi", "value": "260"},
      {"label": "Canada", "value": "180"},
      {"label": "Iran", "value": "140"},
      {"label": "Russia", "value": "115"},
      {"label": "UAE", "value": "100"},
      {"label": "US", "value": "30"},
      {"label": "China", "value": "30"}
    ];

    /// Final datasource to be fed to the FusionCharts 
    Map<String, dynamic> dataSource = {"chart": chart, "data": chartData};

    // Instantiate FusionCharts widget with the following properties
    _fusionChart2D = FusionCharts(
        dataSource: dataSource, // Map constructed above
        type: "column2d", // Type of chart
        width: "100%", // Width of the chart (for best results, use 100% only)
        height: "100%", // Height of the chart (manage the chart size on a page using Container/SizedBox)
        events: const ['chartClick'], // Specify the list of chart events you want to listen to. For example, `chartClick` is being setup
        fusionChartEvent: callBackFromPlugin, //Callback on the trigger of the event. You can use chart id and event type to build responsive charts
        fusionChartsController: fusionChartsController, // Optional controller using which you can subscribe to events, unsubscribe and execute JavaScript-based APIs
        licenseKey: licenseKey); // Optional, provide a valid license key to remove the Trial Version watermark
  }

  /// Event triggered from the Fusion Charts library, which triggers this callback method
  void callBackFromPlugin(senderId, eventType) {
    if (kDebugMode) {
      print('Event Back to consumer: $senderId , $eventType');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () => Navigator.of(context).pop()),
        title: const Text('Fusion Charts - Column'),
      ),
      body: SizedBox(
          height: MediaQuery.of(context).size.height / 2,
          child: _fusionChart2D),
    );
  }
}
```
Continuing with the above example, please note the instance of ‘FusionChartController’ passes to the constructor of the FusionChart widget.
To register for new events, use the following method:
```javascript
fusionChartsController.addEvents('chartClick,dataLabelRollClick');
```

To unregister from existing events, use the following method
```javascript
 fusionChartsController.removeEvents('chartClick,dataLabelRollClick');
```

## Working with APIs

You can also enhance your charts by adding some APIs. For example, you can use chartType API, which acts as a getter by calling chartType() and a setter if you provide a chart type as a parameter to chartType method like `chartType('column3d')`, which will convert existing chart to column3d (as long as the datasource provided can build the column3d chart. Continuing with above example, please note the instance of 'FusionChartController' is being passed to the constructor of FusionChart widget.

```javascript
/// To register for new events, simply call method like so
  fusionChartsController.addEvents('chartClick,dataLabelRollClick');
/// To unregister existing events, simply call method like so
  fusionChartsController.removeEvents('chartClick,dataLabelRollClick');
/// To execute API calls, simply call method like so
String js =
  String js= 'globalFusionCharts.chartType() == "doughnut3d" ? globalFusionCharts.chartType("doughnut2d") : globalFusionCharts.chartType("doughnut3d")';
	fusionChartsController.executeScript(js);

/// Note the js is executed as is; so when you need to pass any String data
/// then you need to keep such values within "<var>" for example '"doughnut3d"' 
/// and not "doughnut3d"
```

> Note: Use the `globalFusionChart` JavaScript variable when making API calls in order to target the chart object. 

