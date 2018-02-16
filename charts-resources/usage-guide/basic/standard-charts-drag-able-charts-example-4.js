{
    type: 'dragarea',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Unit Sales - Apple vs. Samsung",
            "subCaption": "Drag anchors to change estimated values",
            "subCaptionFontSize": "12",
            "xAxisName": "Quarter",
            "yAxisName": "No. of Units",
            "theme": "fint"
        },
        "categories": [{
            "category": [{
                "label": "Q1"
            }, {
                "label": "Q2"
            }, {
                "label": "Q3(E)"
            }, {
                "label": "Q4(E)"
            }]
        }],
        "dataset": [{
            "seriesname": "Apple",
            "valuePosition": "ABOVE",
            "allowDrag": "0",
            "data": [{
                "value": "1200"
            }, {
                "value": "1500",
                "dashed": "1"
            }, {
                "value": "1300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "900",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }, {
            "seriesname": "Samsung",
            "allowDrag": "0",
            "data": [{
                "value": "600"
            }, {
                "value": "850",
                "dashed": "1"
            }, {
                "value": "1000",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "1200",
                "allowDrag": "1",
                "tooltext": "Predicted sales $value units"
            }]
        }]
    },
    events: {
        'rendered': function(evtObj, argObj) {
            var chartIns = evtObj.sender,
                chartMaxLimit = chartIns.getUpperLimit(),
                chartMinLimit = chartIns.getLowerLimit();
            document.getElementById('max-limit').value = chartMaxLimit;
            document.getElementById('min-limit').value = chartMinLimit;
        },
        'beforeRender': function(evt, args) {
            if (!document.getElementById('controllers')) {
                var controllers = document.createElement('div'),
                    chartRef = evt.sender,
                    maxBtn,
                    minBtn,
                    maxTxtFld,
                    minTxtFld,
                    setMaxLimit = function() {
                        var maxLimit = maxTxtFld.value,
                            crntLimit = chartRef && chartRef.getUpperLimit(),
                            status;

                        if (maxLimit != crntLimit) {
                            status = chartRef && chartRef.setUpperLimit(maxLimit);
                            if (status) {
                                alert('Max limit updated successfully');
                            } else {
                                maxTxtFld.value = crntLimit;
                                alert('Max limit could not be updated!')
                            }
                        }

                    },
                    setMinLimit = function() {
                        var minLimit = minTxtFld.value,
                            crntLimit = chartRef && chartRef.getLowerLimit(),
                            status;

                        if (minLimit != crntLimit) {
                            status = chartRef && chartRef.setLowerLimit(minLimit);
                            if (status) {
                                alert('Min limit updated successfully');
                            } else {
                                minTxtFld.value = crntLimit;
                                alert('Min limit could not be updated!')
                            }
                        }

                    };
                controllers.setAttribute('id', 'controllers');
                // Create elements inside div
                controllers.innerHTML = '<div id="controllers" style="margin-left: 20px;font-weight:bold;"><p>Reset values to update limits.<p><div style="padding-top: 10px;"><span><input type="text" id="max-limit" style="max-width: 100px;font-weight: bold; margin-bottom:0px !important;"/><input type="button" id="max-btn" style="font-size: 16px; margin-left: 5px; margin-top: 0px; padding: 2px 5px; width:120px;" value="Set Max Value"/></span></div><div style="padding-top: 10px;"><span><input type="text" id="min-limit" style="max-width: 100px;font-weight: bold; margin-bottom:0px !important;"/><input type="button" id="min-btn" style="font-size: 16px; margin-left: 5px; margin-top: 0px; padding: 2px 5px; width:120px;" value="Set Min Value"/></span></div></div>';
                args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
                maxBtn = document.getElementById('max-btn');
                minBtn = document.getElementById('min-btn');
                maxTxtFld = document.getElementById('max-limit');
                minTxtFld = document.getElementById('min-limit');
                //Add listener to buttons
                if (maxBtn.addEventListener) {
                    maxBtn.addEventListener("click", setMaxLimit);
                    minBtn.addEventListener("click", setMinLimit);
                } else {
                    maxBtn.onclick && maxBtn.onclick(setMaxLimit);
                    minBtn.onclick && minBtn.onclick(setMinLimit);
                }

            }
        }
    }
}
