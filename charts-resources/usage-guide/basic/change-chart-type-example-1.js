{
    type: 'column2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
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
        }],
    },
    "events": {
        "beforeRender": function(e, d) {
            var container = e.data.container;
            // Change the sizes according to your need
            var options = {
                'column2d': 'column2d',
                'bar2d': 'bar2d',
                'pie2d': 'pie2d'
            };
            var chartSelected = 'column2d';

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
                    e.sender.chartType(option)
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