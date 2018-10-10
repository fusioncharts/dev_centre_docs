{
    type: 'angulargauge',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    "events": {
        "beforeRender": function(e, d) {
            var dataobj1 = {
                "heatmap": {
                    "chart": {
                        "theme": "fusion",
                        "caption": "Top 4 US Cities",
                        "subcaption": "Average temperature (°F) in seasons (2013-14)",
                        "xAxisName": "Seasons",
                        "yAxisName": "Cities",
                        "showPlotBorder": "1",
                        "showValues": "1",
                        "mapByCategory": "1"
                    },
                    "rows": {
                        "row": [
                            {
                                "id": "NY",
                                "label": "New York"
                            },
                            {
                                "id": "LA",
                                "label": "Los Angeles"
                            },
                            {
                                "id": "CH",
                                "label": "Chicago"
                            },
                            {
                                "id": "HO",
                                "label": "Houston"
                            }
                        ]
                    },
                    "columns": {
                        "column": [
                            {
                                "id": "wI",
                                "label": "Winter"
                            },
                            {
                                "id": "SU",
                                "label": "Summer"
                            },
                            {
                                "id": "SP",
                                "label": "Spring"
                            },
                            {
                                "id": "AU",
                                "label": "Autumn"
                            }
                        ]
                    },
                    "dataset": [
                        {
                            "data": [
                                {
                                    "rowid": "LA",
                                    "columnid": "WI",
                                    "displayValue": "60.10",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "LA",
                                    "columnid": "SP",
                                    "displayValue": "64.5",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "LA",
                                    "columnid": "SU",
                                    "displayValue": "68.2",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "LA",
                                    "columnid": "AU",
                                    "displayValue": "65.7",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "NY",
                                    "columnid": "WI",
                                    "displayValue": "33.7",
                                    "colorRangeLabel": "Freezing"
                                },
                                {
                                    "rowid": "NY",
                                    "columnid": "SP",
                                    "displayValue": "57.8",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "NY",
                                    "columnid": "SU",
                                    "displayValue": "74.49",
                                    "colorRangeLabel": "Hot"
                                },
                                {
                                    "rowid": "NY",
                                    "columnid": "AU",
                                    "displayValue": "57.6",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "CH",
                                    "columnid": "WI",
                                    "displayValue": "22.89",
                                    "colorRangeLabel": "Freezing"
                                },
                                {
                                    "rowid": "CH",
                                    "columnid": "SP",
                                    "displayValue": "55.7",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "CH",
                                    "columnid": "SU",
                                    "displayValue": "72.2",
                                    "colorRangeLabel": "Hot"
                                },
                                {
                                    "rowid": "CH",
                                    "columnid": "AU",
                                    "displayValue": "51.6",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "HO",
                                    "columnid": "WI",
                                    "displayValue": "53.0",
                                    "colorRangeLabel": "Warm"
                                },
                                {
                                    "rowid": "HO",
                                    "columnid": "SP",
                                    "displayValue": "72.7",
                                    "colorRangeLabel": "Hot"
                                },
                                {
                                    "rowid": "HO",
                                    "columnid": "SU",
                                    "displayValue": "83.3",
                                    "colorRangeLabel": "Hot"
                                },
                                {
                                    "rowid": "HO",
                                    "columnid": "AU",
                                    "displayValue": "53.0",
                                    "colorRangeLabel": "Warm"
                                }
                            ]
                        }
                    ],
                    "colorRange": {
                        "gradient": "0",
                        "color": [
                            {
                                "code": "#6da81e",
                                "minValue": "0",
                                "maxValue": "50",
                                "label": "Freezing"
                            },
                            {
                                "code": "#f6bc33",
                                "minValue": "50",
                                "maxValue": "70",
                                "label": "Warm"
                            },
                            {
                                "code": "#e24b1a",
                                "minValue": "70",
                                "maxValue": "85",
                                "label": "Hot"
                            }
                        ]
                    }
                },
                "maps/world": {
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
                            "color": "#62B58F"
                        }, {
                            "minvalue": "1.0",
                            "maxvalue": "2.0",
                            "color": "#FFC533"
                        }, {
                            "minvalue": "2.0",
                            "maxvalue": "3.0",
                            "color": "#F2726F"
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
                "angulargauge": {
                    // Chart Configuration
                    "chart": {
                        "caption": "Percentage of Customer Complains for 2017",
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

            e.sender.setJSONData(dataobj1.angulargauge);

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
                    e.sender.setJSONData(dataobj1[option]);
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