---
title: Install using django wrapper | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side django wrapper that lets you create interactive, data-driven charts.
heading: Django
breadcrumb: [["Home", "/"], ["Django"]]
---

The FusionCharts Django wrapper is a Python framework which is responsible for quick web development. It is a subroutine within a software library whose job is to call another subroutine with the minimum amount of coding. It lets you generate the required JavaScript and HTML code as a string on the server, which is then used to render charts on a browser page.

FusionCharts Suite XT includes the FusionCharts Django wrapper that lets you create interactive, data-driven charts. You can create a simple chart using the FusionCharts server-side Django wrapper without writing any JavaScript code.

## Download

To download the FusionCharts library using files placed in the folder of your project, you need to:

* Place the FusionCharts library inside the "static/FusionCharts" folder in your project.

* Insert the `<script>` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The `<script>` tag looks like as shown below:

```
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
```

> Set your **STATIC_ROOT** path and run the command given below to update the static files:

```
python manage.py collectstatic
```

## Install

To install the FusionCharts Django wrapper, you would require Python 2.7 (or a higher version). To download Python, click [here](https://www.python.org/downloads/).

Include the `FusionCharts.py`(present in the [django-wrapper](https://github.com/fusioncharts/django-wrapper/blob/master/fusioncharts/fusioncharts.py) repository) file into your project. Once done, you can start rendering the charts using the classes and methods under the FusionCharts namespace.