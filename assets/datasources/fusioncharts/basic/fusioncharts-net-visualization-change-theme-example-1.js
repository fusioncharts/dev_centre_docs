{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '680',
    height: '390',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Most popular programming language",
            "subCaption": "2017 - 2018",
            "xAxisName": "Programming Language",
            "yAxisName": "Users",
            "theme": "fusion"
        },
        "data": [{
            "label": "Java",
            "value": "62000"
        }, {
            "label": "Python",
            "value": "46000"
        }, {
            "label": "Javascript",
            "value": "38000"
        }, {
            "label": "C++",
            "value": "31000"
        }, {
            "label": "C#",
            "value": "27000"
        }, {
            "label": "PHP",
            "value": "14000"
        }, {
            "label": "Perl",
            "value": "14000"
        }]
    },
    "events": {
        "beforeRender": function(e, d) {
            var container = e.data.container;
            // Change the sizes according to your need
            var options = {
                'fusion': 'fusion',
                'gammel': 'gammel',
                'candy': 'candy',
                'zune': 'zune',
                'ocean': 'ocean',
                'carbon': 'carbon'
            };
            var themeSelected = 'fusion';

            function instantiate() {
                // Create option containers
                var parent = container.parentNode;

                var optionsContainer = document.createElement('div');
                optionsContainer.id = 'config-container';

                var spanLabel = document.createElement('span');
                spanLabel.id = 'select-text';
                spanLabel.innerText = "Choose a theme: ";

                var radioContainer = document.createElement('div');
                addClass(radioContainer, 'change-type');
                window.__onThemeChange = function(option) {
                    e.sender.setChartAttribute('theme', option);
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
                    item += "<input name='dimesion-selector' id='" + inputId + "' type='radio' " + (selected ? "checked='checked'" : '') + " onchange='__onThemeChange(\"" + optionLabel + "\")'/>";
                    item += "<label for='" + inputId + "' >" + label + "</label>"
                    item += "</div>";
                    return item;
                }
                var changeTypeChilds = '';

                Object.keys(options).forEach(function(option, index) {
                    var label = options[option];
                    var selected = themeSelected === option;
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
            if (!window.__sample_theme_change) {
                instantiate();
            }
            window.__sample_theme_change = true;
        }
    }
}