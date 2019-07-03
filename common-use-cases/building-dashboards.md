---
title: Building a Dashboard | FusionCharts
description: The consolidated view of having multiple related charts in a page is called a dashboard. This section talks about building a complete dashboard.
heading: Building a Dashboard
---

Harry now needs a unified view of all the charts, gauges, and maps that his team has created. This consolidated view of having multiple related charts in a page is called a dashboard. In this section, we will help his team build a complete dashboard.

## Building blocks for an effective dashboard

Creating a dashboard involves the following steps:

- Know what metrics you want in the dashboard and draw a rough prototype of where they should be placed. A good practice is to keep **Key Performance Indicators** above the fold and related metrics close to one another.

- Know what chart will represent the data best. (E.g., Column charts are useful for facilitating comparisons while Line charts are suitable for trend analysis over a period of time).

- Have data for all such charts ready to be incorporated into the dashboard.

- Create separate container element (`<div>`) for each chart in the dashboard page.

- Add all the charts to the page, and link to their data and container element.

## What this translates to for you?

From a technical perspective, you need to ensure that:

- Each chart on the page should have a unique id.

- Each chart should have a unique JavaScript variable name. This variable name is used to refer to the chart across the page when you want to listen to chart events or invoke a method on the chart.

- Each chart should be rendered in separate HTML container, each container having the unique id.

- Data for each chart is present as a separate JSON/XML file or string.

## Adding the charts to the Dashboard

For this example, we will use screenshots and the final dashboard is available to be viewed and edited live at the bottom of the page.

When done, the dashboard would look as under:

![Dashboard](/images/dashboard.png)

The HTML code to build this dashboard is given here:

```html
<html>
  <head>
    <title>My first dashboard using FusionCharts Suite XT</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: #00406a;
        font-family: Tahoma, Helvetica, Arial, sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        padding: 0;
        font-weight: bold;
      }

      .chartCont {
        padding: 0px 12px;
      }

      .border-bottom {
        border-bottom: 1px dashed rgba(0, 117, 194, 0.2);
      }

      .border-right {
        border-right: 1px dashed rgba(0, 117, 194, 0.2);
      }

      #container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
      }

      #container > div {
        width: 100%;
        background-color: #ffffff;
      }

      #logoContainer {
        float: left;
      }

      #logoContainer img {
        padding: 0 10px;
      }

      #logoContainer div {
        position: absolute;
        top: 8px;
        left: 95px;
      }

      #logoContainer div h2 {
        color: #0075c2;
      }

      #logoContainer div h4 {
        color: #0e948c;
      }

      #logoContainer div p {
        color: #719146;
        font-size: 12px;
        padding: 5px 0;
      }

      #userDetail {
        float: right;
      }

      #userDetail img {
        position: absolute;
        top: 16px;
        right: 130px;
      }

      #userDetail div {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 14px;
        font-weight: bold;
        color: #0075c2;
      }

      #userDetail div p {
        margin: 0;
      }

      #userDetail div p:nth-child(2) {
        color: #0e948c;
      }

      #header div:nth-child(3) {
        clear: both;
        border-bottom: 1px solid #0075c2;
      }

      #content div {
        display: inline-block;
      }

      #content > div {
        margin: 0px 20px;
      }

      #content > div:nth-child(1) > div {
        margin: 20px 0 0;
      }

      #content > div:nth-child(2) > div {
        margin: 0 0 20px;
      }

      #footer p {
        margin: 0;
        font-size: 9pt;
        color: black;
        padding: 5px 0;
        text-align: center;
      }
    </style>
    <script
      type="text/javascript"
      src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"
    ></script>
    <script type="text/javascript">
      FusionCharts.ready(function() {
        var salesRevChart = new FusionCharts({
          type: "column2d",
          renderAt: "sales-chart-container",
          width: "500",
          height: "300",
          dataFormat: "json",
          dataSource: {
            chart: {
              caption: "Daily Revenue",
              subcaption: "Last 3 weeks",
              xaxisname: "Date",
              yaxisname: "Revenue (In USD)",
              numberprefix: "$",
              showvalues: "0",
              theme: "fusion"
            },
            data: [
              {
                label: "14 May",
                value: "267111"
              },
              {
                label: "15 May",
                value: "217207"
              },
              {
                label: "16 May",
                value: "185836"
              },
              {
                label: "17 May",
                value: "251074"
              },
              {
                label: "18 May",
                value: "273374"
              },
              {
                label: "19 May",
                value: "215724"
              },
              {
                label: "20 May",
                value: "227219"
              },
              {
                label: "21 May",
                value: "268160"
              },
              {
                label: "22 May",
                value: "239446"
              },
              {
                label: "23 May",
                value: "297084"
              },
              {
                label: "24 May",
                value: "204399"
              },
              {
                label: "25 May",
                value: "236195"
              },
              {
                label: "26 May",
                value: "302120"
              },
              {
                label: "27 May",
                value: "282909"
              },
              {
                label: "28 May",
                value: "272096"
              },
              {
                label: "29 May",
                value: "241639"
              },
              {
                label: "30 May",
                value: "189526"
              },
              {
                label: "31 May",
                value: "248034"
              },
              {
                label: "1 Jun",
                value: "266247"
              },
              {
                label: "2 Jun",
                value: "212719"
              },
              {
                label: "Yesterday",
                value: "264416"
              }
            ]
          }
        }).render();

        var dailyTransChart = new FusionCharts({
          type: "area2d",
          renderAt: "trans-chart-container",
          width: "550",
          height: "300",
          dataFormat: "json",
          dataSource: {
            chart: {
              caption: "Daily Transactions",
              subcaption: "Last 3 weeks",
              xaxisname: "Date",
              yaxisname: "No. of Transactions",
              showvalues: "0",
              theme: "fusion"
            },
            data: [
              {
                label: "14 May",
                value: "1464"
              },
              {
                label: "15 May",
                value: "1062"
              },
              {
                label: "16 May",
                value: "1014"
              },
              {
                label: "17 May",
                value: "1294"
              },
              {
                label: "18 May",
                value: "1382"
              },
              {
                label: "19 May",
                value: "1085"
              },
              {
                label: "20 May",
                value: "1150"
              },
              {
                label: "21 May",
                value: "1420"
              },
              {
                label: "22 May",
                value: "1228"
              },
              {
                label: "23 May",
                value: "1435"
              },
              {
                label: "24 May",
                value: "1051"
              },
              {
                label: "25 May",
                value: "1231"
              },
              {
                label: "26 May",
                value: "1509"
              },
              {
                label: "27 May",
                value: "1480"
              },
              {
                label: "28 May",
                value: "1461"
              },
              {
                label: "29 May",
                value: "1258"
              },
              {
                label: "30 May",
                value: "991"
              },
              {
                label: "31 May",
                value: "1275"
              },
              {
                label: "1 Jun",
                value: "1336"
              },
              {
                label: "2 Jun",
                value: "1097"
              },
              {
                label: "Yesterday",
                value: "1411"
              }
            ]
          }
        }).render();

        var dailyFootfallChart = new FusionCharts({
          type: "area2d",
          renderAt: "footfall-chart-container",
          width: "550",
          height: "300",
          dataFormat: "json",
          dataSource: {
            chart: {
              caption: "Daily Footfalls",
              subcaption: "Last 3 weeks",
              xaxisname: "Date",
              yaxisname: "No. of Footfalls",
              showvalues: "0",
              theme: "fusion"
            },

            data: [
              {
                label: "14 May",
                value: "2154"
              },
              {
                label: "15 May",
                value: "1742"
              },
              {
                label: "16 May",
                value: "1845"
              },
              {
                label: "17 May",
                value: "2490"
              },
              {
                label: "18 May",
                value: "1975"
              },
              {
                label: "19 May",
                value: "1840"
              },
              {
                label: "20 May",
                value: "2054"
              },
              {
                label: "21 May",
                value: "2153"
              },
              {
                label: "22 May",
                value: "1755"
              },
              {
                label: "23 May",
                value: "2080"
              },
              {
                label: "24 May",
                value: "1617"
              },
              {
                label: "25 May",
                value: "2053"
              },
              {
                label: "26 May",
                value: "2435"
              },
              {
                label: "27 May",
                value: "2177"
              },
              {
                label: "28 May",
                value: "2214"
              },
              {
                label: "29 May",
                value: "1998"
              },
              {
                label: "30 May",
                value: "1871"
              },
              {
                label: "31 May",
                value: "1822"
              },
              {
                label: "1 Jun",
                value: "1909"
              },
              {
                label: "2 Jun",
                value: "1689"
              },
              {
                label: "Yesterday",
                value: "2076"
              }
            ]
          }
        }).render();

        var dailyCSatChart = new FusionCharts({
          type: "line",
          renderAt: "cs-chart-container",
          width: "550",
          height: "300",
          dataFormat: "json",
          dataSource: {
            chart: {
              caption: "Daily Customer Satisfaction Trend for Last 3 weeks",
              subcaption: "On a scale of 0 to 5",
              xaxisname: "Date",
              yaxisname: "Customer Satisfaction Index",
              yaxismaxvalue: "5",
              showvalues: "0",
              theme: "fusion"
            },
            data: [
              {
                label: "14 May",
                value: "4.90"
              },
              {
                label: "15 May",
                value: "4.05"
              },
              {
                label: "16 May",
                value: "4.72"
              },
              {
                label: "17 May",
                value: "4.56"
              },
              {
                label: "18 May",
                value: "3.65"
              },
              {
                label: "19 May",
                value: "3.77"
              },
              {
                label: "20 May",
                value: "4.52"
              },
              {
                label: "21 May",
                value: "4.13"
              },
              {
                label: "22 May",
                value: "3.25"
              },
              {
                label: "23 May",
                value: "3.38"
              },
              {
                label: "24 May",
                value: "4.53"
              },
              {
                label: "25 May",
                value: "4.24"
              },
              {
                label: "26 May",
                value: "3.31"
              },
              {
                label: "27 May",
                value: "3.25"
              },
              {
                label: "28 May",
                value: "4.14"
              },
              {
                label: "29 May",
                value: "4.82"
              },
              {
                label: "30 May",
                value: "4.19"
              },
              {
                label: "31 May",
                value: "4.94"
              },
              {
                label: "1 Jun",
                value: "4.02"
              },
              {
                label: "2 Jun",
                value: "4.80"
              },
              {
                label: "Yesterday",
                value: "3.70"
              }
            ]
          }
        }).render();
      });
    </script>
  </head>

  <body>
    <div id="container">
      <div id="header">
        <div id="logoContainer">
          <img
            src="https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png"
            alt="Logo"
          />
          <div>
            <h2>Harry's Supermart</h2>

            <h4>Los Angeles Topanga</h4>
            <p>Today: 4th June, 2014</p>
          </div>
        </div>
        <div id="userDetail">
          <img
            src="https://static.fusioncharts.com/sampledata/images/user_image.jpg"
            alt="Logo"
          />
          <div>
            <p>Welcome John</p>
            <p>Store Manager</p>
          </div>
        </div>
        <div></div>
      </div>
      <div class="border-bottom" id="content">
        <div class="border-bottom">
          <div class="chartCont border-right" id="sales-chart-container">
            FusionCharts will load here.
          </div>
          <div class="chartCont" id="trans-chart-container">
            FusionCharts will load here.
          </div>
        </div>
        <div>
          <div class="chartCont border-right" id="footfall-chart-container">
            FusionCharts will load here.
          </div>
          <div class="chartCont" id="cs-chart-container">
            FusionCharts will load here.
          </div>
        </div>
      </div>
      <div id="footer">
        <p>
          This application was built using
          <a
            href="http://www.fusioncharts.com"
            target="_blank"
            title="FusionCharts - Data to delight... in minutes"
            ><b>FusionCharts Suite XT</b></a
          >
        </p>
      </div>
    </div>
  </body>
</html>
```

You can see the dashboard, and edit it live on this [link](https://jsfiddle.net/fusioncharts/TumnU/).

This is the most basic form of a dashboard. Many enhancements can be made to this dashboard, including:

- Adding relevant KPIs for each metric that Harry wants to monitor. These KPIs could be purely in text, or use gauges to represent one key value per gauge.

- Add drill down s to chart, to allow Harry to navigate from top-level data to line-item data.

- Enable export functionality for charts, in case Harry wants to get a snapshot or PDF, for emailing it to someone.

- Add tables or grids for further detailing of data.
