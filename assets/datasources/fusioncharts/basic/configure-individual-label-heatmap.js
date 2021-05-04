{
  type: 'heatmap',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '100%',
        height: '500',
        dataFormat: 'json',
        dataSource: {
         "chart": {
           "caption": "Top Smartphone Ratings",
           "subcaption": "By Features",
           "xAxisName": "Features",
           "yAxisName": "Model",
           "showplotborder": "1",
           "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",

           //Cosmetics
           "showValues": "1",
           "showBorder": "0",
           "bgColor": "#ffffff",
           "showShadow": "0",
           "usePlotGradientColor": "0",
           "toolTipColor": "#ffffff",
           "toolTipBorderThickness": "0",
           "toolTipBgColor": "#000000",
           "toolTipBgAlpha": "80",
           "toolTipBorderRadius": "2",
           "toolTipPadding": "5",
           "theme": "fusion"
         },
         "dataset": [{
           "data": [{
               "rowid": "Samsung Galaxy S5",
               "columnid": "Processor",
               "value": "8.7",
               "tllabel": "Quad Core 2.5 GHz",
               "trlabel": "OS : Android 4.4 Kitkat"
             },
             {
               "rowid": "Samsung Galaxy S5",
               "columnid": "Screen Size",
               "value": "8.5",
               "tllabel": "5.1 inch",
               "trlabel": "AMOLED screen"
             },

             {
               "rowid": "HTC One (M8)",
               "columnid": "Processor",
               "value": "9.2",
               "tllabel": "Quad Core 2.3 GHz",
               "trlabel": "OS : Android 4.4 Kitkat"
             },
             {
               "rowid": "HTC One (M8)",
               "columnid": "Screen Size",
               "value": "8.3",
               "tllabel": "5 inch",
               "trlabel": "LCD screen"
             },

             {
               "rowid": "Apple iPhone 5S",
               "columnid": "Processor",
               "value": "9.1",
               "tllabel": "Dual Core",
               "trlabel": "OS : iOS 7"
             },
             {
               "rowid": "Apple iPhone 5S",
               "columnid": "Screen Size",
               "value": "8.6",
               "tllabel": "4 inch",
               "trlabel": "Retina LCD screen"
             },

             {
               "rowid": "Nokia Lumia 1520",
               "columnid": "Processor",
               "value": "8.8",
               "tllabel": "Quad Core 2.2 GHz",
               "trlabel": "OS: Windows Phone 8"
             },
             {
               "rowid": "Nokia Lumia 1520",
               "columnid": "Screen Size",
               "value": "9.1",
               "tllabel": "6 inch",
               "trlabel": "LCD screen"
             },

           ]
         }],
         "colorrange": {
           "gradient": "0",
           "minvalue": "0",
           "code": "E24B1A",
           "startlabel": "Poor",
           "endlabel": "Good",
           "color": [{
               "code": "E24B1A",
               "minvalue": "1",
               "maxvalue": "5",
               "label": "Bad"

             },
             {
               "code": "F6BC33",
               "minvalue": "5",
               "maxvalue": "8.5",
               "label": "Average",
               tlLabelFontSize: "20",
               tlLabelFontColor: "#ff0000"
             },
             {
               "code": "6DA81E",
               "minvalue": "8.5",
               "maxvalue": "10",
               "label": "Good",
               tlLabelFontSize: "15",
               trLabelFontColor: "#87EDED"
             }
           ]
         }
       }
      }
