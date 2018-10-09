{
    type: 'angulargauge',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    "events": {
        "beforeRender": function(e, d) {

            var dataobj = {
                heatmap: {
                    "chart": {
                        "caption": "Top Smartphone Ratings",
                        "subcaption": "By Features",
                        "xAxisName": "Features",
                        "yAxisName": "Model",
                        "showplotborder": "1",
                        "showValues": "1",
                        "xAxisLabelsOnTop": "1",
                        "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
                        "baseFontColor": "#333333",
                        "baseFont": "Helvetica Neue,Arial",
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
                                "rowid": "Samsung Galaxy S5",
                                "columnid": "Price",
                                "value": "9.3",
                                "tllabel": "$600"
                            },
                            {
                                "rowid": "Samsung Galaxy S5",
                                "columnid": "Battery Backup",
                                "value": "9.7",
                                "tllabel": "29 Hrs",
                                "trlabel": "Battery : 2800 MAH"
                            },
                            {
                                "rowid": "Samsung Galaxy S5",
                                "columnid": "Camera",
                                "value": "8",
                                "tllabel": "16 MP",
                                "trlabel": "Front Camera : 2.1 MP"
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
                                "rowid": "HTC One (M8)",
                                "columnid": "Price",
                                "value": "7.3",
                                "tllabel": "$600"
                            },
                            {
                                "rowid": "HTC One (M8)",
                                "columnid": "Battery Backup",
                                "value": "8.8",
                                "tllabel": "20 Hrs",
                                "trlabel": "Battery : 2600 MAH"
                            },
                            {
                                "rowid": "HTC One (M8)",
                                "columnid": "Camera",
                                "value": "8.7",
                                "tllabel": "4 MP",
                                "trlabel": "Front Camera : 5 MP"
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
                                "rowid": "Apple iPhone 5S",
                                "columnid": "Price",
                                "value": "7.2",
                                "tllabel": "$649"
                            },
                            {
                                "rowid": "Apple iPhone 5S",
                                "columnid": "Battery Backup",
                                "value": "8.4",
                                "tllabel": "10 Hrs",
                                "trlabel": "Battery : 1560 MAH"
                            },
                            {
                                "rowid": "Apple iPhone 5S",
                                "columnid": "Camera",
                                "value": "9.5",
                                "tllabel": "8 MP",
                                "trlabel": "Front Camera : 1.2 MP"
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
                            {
                                "rowid": "Nokia Lumia 1520",
                                "columnid": "Price",
                                "value": "9.7",
                                "tllabel": "$470"
                            },
                            {
                                "rowid": "Nokia Lumia 1520",
                                "columnid": "Battery Backup",
                                "value": "9.2",
                                "tllabel": "27 Hrs",
                                "trlabel": "Battery : 3400 MAH"
                            },
                            {
                                "rowid": "Nokia Lumia 1520",
                                "columnid": "Camera",
                                "value": "8.1",
                                "tllabel": "20MP",
                                "trlabel": "Front Camera : 1.2 MP"
                            }
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
                                "label": "Average"
                            },
                            {
                                "code": "6DA81E",
                                "minvalue": "8.5",
                                "maxvalue": "10",
                                "label": "Good"
                            }
                        ]
                    }
                },
                world: {
                    // Map Configuration
                    "chart": {
                        "caption": "Average Annual Population Growth",
                        "subcaption": " 1955-2015",
                        "numbersuffix": "%",
                        "includevalueinlabels": "1",
                        "labelsepchar": ": ",
                        "entityFillHoverColor": "#FFF9C4",
                        "theme": "fusion"
                    },
                    // Aesthetics; ranges synced with the slider
                    "colorrange": {
                        "minvalue": "0",
                        "code": "#FFE0B2",
                        "gradient": "1",
                        "color": [{
                            "minvalue": "0.5",
                            "maxvalue": "1.0",
                            "color": "#FFD74D"
                        }, {
                            "minvalue": "1.0",
                            "maxvalue": "2.0",
                            "color": "#FB8C00"
                        }, {
                            "minvalue": "2.0",
                            "maxvalue": "3.0",
                            "color": "#E65100"
                        }]
                    },
                    // Source data as JSON --> id represents countries of world.
                    "data": [{
                        "id": "NA",
                        "value": ".82",
                        "showLabel": "1"
                    }, {
                        "id": "SA",
                        "value": "2.04",
                        "showLabel": "1"
                    }, {
                        "id": "AS",
                        "value": "1.78",
                        "showLabel": "1"
                    }, {
                        "id": "EU",
                        "value": ".40",
                        "showLabel": "1"
                    }, {
                        "id": "AF",
                        "value": "2.58",
                        "showLabel": "1"
                    }, {
                        "id": "AU",
                        "value": "1.30",
                        "showLabel": "1"
                    }]
                },
                angulargauge: {
                    // Chart Configuration
                    "chart": {
                        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
                        "lowerLimit": "0",
                        "upperLimit": "100",
                        "showValue": "1",
                        "numberSuffix": "%",
                        "theme": "fusion",
                        "showToolTip": "0"
                    },
                    // Chart Data
                    "colorRange": {
                        "color": [{
                            "minValue": "0",
                            "maxValue": "50",
                            "code": "#F2726F"
                        }, {
                            "minValue": "50",
                            "maxValue": "75",
                            "code": "#FFC533"
                        }, {
                            "minValue": "75",
                            "maxValue": "100",
                            "code": "#62B58F"
                        }]
                    },
                    "dials": {
                        "dial": [{
                            "value": "81"
                        }]
                    }
                },
            };

            e.sender.setJSONData(dataobj.angulargauge);


            var container = e.data.container;
            // Change the sizes according to your need
            var options = {
                'angulargauge': 'angular gauge',
                'heatmap': 'heatmap',
                'maps/world': 'world map'
            };
            var chartSelected = 'angulargauge';

            function instantiate() {
                // Create option containers
                var parent = container.parentNode;

                var optionsContainer = document.createElement('div');
                optionsContainer.id = 'config-container';

                var spanLabel = document.createElement('span');
                spanLabel.id = 'select-text';
                spanLabel.innerText = "Choose a chart type: ";

                var radioContainer = document.createElement('div');
                addClass(radioContainer, 'change-type');
                window.__onChange = function(option) {
                    e.sender.chartType(option);
                    e.sender.setJSONData(dataobj[option]);
                }
                // Util to add class
                function addClass(element, className) {
                    var element, name = className,
                        arr;
                    arr = element.className.split(" ");
                    if (arr.indexOf(name) == -1) {
                        element.className += " " + name;
                    }
                }

                function radioWrapper(wrapperId, inputId, label, selected, optionLabel) {
                    var item = "<div id='" + wrapperId + "' >";
                    item += "<input name='dimesion-selector' id='" + inputId + "' type='radio' " + (selected ? "checked='checked'" : '') + " onchange='__onChange(\"" + optionLabel + "\")'/>";
                    item += "<label for='" + inputId + "' >" + label + "</label>"
                    item += "</div>";
                    return item;
                }
                var changeTypeChilds = '';

                Object.keys(options).forEach(function(option, index) {
                    var label = options[option];
                    var selected = chartSelected === option;
                    var radioOption = radioWrapper('radio' + (index + 1), 'radioButton' + (index + 1), label.toUpperCase(), selected, option);
                    changeTypeChilds += radioOption;
                });

                radioContainer.innerHTML = changeTypeChilds;

                optionsContainer.appendChild(spanLabel);
                optionsContainer.appendChild(radioContainer);

                parent.appendChild(optionsContainer);

                var css = '.change-type{display:inline-block;margin:0 10px;font-family:basefontRegular,Helvetica Neue,Arial,sans-serif}.change-type>div{display:inline-flex;position:relative;margin:0 10px}.change-type label{position:relative;padding:5px 4px 5px 30px;border-radius:4px}.change-type input{opacity:0;cursor:pointer;z-index:1;width:100%;height:100%;left:0;position:absolute}.change-type label:after,.change-type label:before{content:"";position:absolute}.change-type label:before{display:block;background:#fff;border:2px solid #949697;box-shadow:none;border-radius:50%;top: 15px;left: 9px;width:1rem;height:1rem}.change-type label:after{    width: .55rem;height: .55rem;top: 18px;left: 11px;border-radius: 100%;}.change-type input:checked~label{color:#48b884;font-weight:600;box-shadow:0 4px 9px 0 rgba(104,105,128,.22)}.change-type input:checked~label:before{color:#fff;box-shadow:none;border:2px solid #48b884}.change-type input:checked~label:after{background:#55bd8d}';

                var styleNode = document.createElement('style');
                styleNode.innerHTML = css;
                document.body.appendChild(styleNode);
            }
            if (!window.__sample_change_chart_type_instansiated) {
                instantiate();
            }
            window.__sample_change_chart_type_instansiated = true;
        }
    }
}