---
title: Developer Tutorial | Building a Sales Dashboard using React Framework
description: In this tutorial, we’ll be creating a Sales dashboard by fetching data using Google Sheets API.
heading: Developer Tutorial | Building a Sales Dashboard using React Framework
author: sowmya
date: 2019/03/27
featured: true
---

In this tutorial, we’ll be creating a Sales dashboard by fetching data using Google Sheets API. 
In any organisation, revenue is key for growth, and the sales team manages this. For the sales team it is important to understand how many leads from marketing efforts and organic sources converted to opportunities, and how many of these opportunities were sent pricing quotes. This leads to a pipeline of these deals and their respective revenue - which is the indicative revenue that sales can expect in that timespan (for a month or a quarter). Further, some of these deals in pipeline become lost opportunities due to multiple reasons (competitors, pricing too high, or certain features not available in the product). Finally a subset of these deals in pipeline convert to actual customers. 

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1553682434784_blog_sales_dashboard.png" alt="Sales Dashboard" height="550" width="800">


For sales managers and revenue stakeholders in a company, it’s very important to understand different patterns of opportunities, pipeline and closed deals to ascertain predictability in revenue. This Sales Dashboard allows the sales team to understand trends, figure out unprofitable months/quarters and discover which parts of the sales cycle need more bandwidth, process optimisation or rethinking the strategy of selling itself.

To create this dashboard we will be using React, a JavaScript library for building user interfaces; FusionCharts, a JavaScript based charting library and Google Sheets API. Using FusionCharts’ React component you can create charts which are responsive, interactive,  APIs, animation, drill-downs, real-time updates, and even full exporting of charts & dashboards without any hassle.

Before we get started, lets take a look at the Sales dashboard you’ll be able to create at the end of this tutorial.


<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1552893230125_Screenshot+2019-03-18+at+12.41.58+PM+2.png" alt="Final Dashboard" height="550" width="800">


Check out the [Live Dashboard here](https://sowmyaraj92.github.io/sales-dashboard-gsheetsapi-react/)! 

----------
## Including Dependencies

**Step 1: Including React**

Using `Create React-App` is one of the best way to set up the development environment. This provides the latest JavaScript features, enhances the developer experience and optimises the app for production.

Open the terminal, go ahead and enter:

```bash
    npx create-react-app my-sales
    cd my-sales
```

`my-sales` is the working directory where React Boilerplate will be installed along with all the utilities and dependencies.


> Note: The working directory should contain a [package.json](https://docs.npmjs.com/files/package.json). If the package is not present, then you can create it with the command : `npm init -y`


**Step 2: Including Bootstrap** 

We will be using Bootstrap to create the layout and user-interface for our app. So, in the terminal go ahead and enter:

```bash
   $ npm install bootstrap --save
```

**Step 3: Including FusionCharts Core Package and its React Component** 

We will be using **FusionCharts** to render the charts in our dashboard. To install FusionCharts, open the terminal and enter:

```bash
    $ npm install fusioncharts --save
```

The React-component provided by FusionCharts can be used to add JS charts in our app without any difficulty. To check them out, click [here](https://github.com/fusioncharts/react-fusioncharts-component).

```bash
   $ npm install react-fusioncharts --save
```

**Step 4: Including FusionMaps Package** 

To render maps, install `fusionmaps` package which contains all the map definition files as shown below:

```bash
    $ npm install fusionmaps --save
```

## Importing the Charts Using React Component
The dashboard comprises of 3 charts: Multi-series Column 2D, Maps and Multi-series Line charts. The detailing of each of them are given below:

**Multi-Series Column 2D**
The multi-series column 2D chart is used to plot data for multiple datasets. This chart is also used to analyse and compare data points grouped in sub-categories. It has vertically aligned rectangular bars on one axis with discrete values shown on the other. There is a legend for each of the bars plotted. Hovering over the rectangular bar displays the coordinate value of the attribute. Furthermore,  the length of a column is proportional to the values it represents. This chart can be used to visualize data such as the revenue for an year/quarter, sales transactions involving opportunities, pipelines etc. Click [here](https://www.fusioncharts.com/charts/column-bar-charts/grouped-column-chart-with-multiple-series) to read more about Multi-Series Column 2D.

**Multi-Series Line Charts**
The multi-series line chart is used to visualize trends and relationships in multiple datasets. It consists of various data points connected using line segments, where each point represents a single value. It is widely used to show continuous data like opportunities in pipeline, closed opportunities etc. Take a detailed look at Multi-Series Line Charts [here](https://www.fusioncharts.com/charts/line-area-charts/line-chart-with-multiple-series). 

**Maps**
FusionCharts offers more than 1400+ maps to plot geographical data like revenue by regions, population by state and survey effectively. To render the maps, you need to download the map definition files from [here](https://www.fusioncharts.com/download/map-definition-files) and copy-paste the maps folder within your FusionCharts directory. 


There are multiple ways to install them, for more details you can check out this [developer documentation page](https://www.fusioncharts.com/dev/map-guide/setup).

For any map visualization, it is important to provide the correct value for the `id` keys. The table below displays the region with their corresponding entity name.

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1551855177764_Screenshot+2019-03-06+12.22.33.png" alt="Tabular column with region and entity name" height="200" width="300">

Take for example, to plot a world map, the `type` attribute is set to **world**.

For detailed explanation on maps, visit this [link](https://www.fusioncharts.com/dev/getting-started/react/your-first-map-using-react).
To import the charts and react-component, follow the code below:

```js
    import React from 'react';
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import Maps from 'fusioncharts/fusioncharts.maps';
    import World from 'fusionmaps/maps/es/fusioncharts.world';
    import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
    import ReactFC from 'react-fusioncharts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    
    ReactFC.fcRoot(FusionCharts, Charts, PowerCharts, Maps, World, FusionTheme); 
```

Now, we have added all the dependencies for our dashboard app, so let’s go and set-up Google Sheets API.

## Google Sheets API Setup

We will be creating a new project for the dashboard app on [Google Developer API Console](https://console.developers.google.com/apis) to procure the data from Google Sheets. Let’s call it `gsheets-salesdashboard`. You can create a new project using the link → [Create New Project](https://console.developers.google.com/projectcreate?project=gsheets-sales&folder=&organizationId=248680219523).

Once the project is created, you’ll be re-directed to Google Developer API dashboard. Now, we will enable Google Sheets API for our app. For this in the APIs box, click “**Go to APIs overview**”. Once you click “**Enable APIs and Services**” you’ll be presented with the API Library and we’ll go ahead and search for “**Google Sheets API**”. 



<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_3E77B58C1BDB4283EA0AA5749F06200EAFD47D75D433E88A9C19E349F3F702AF_1548746437962_Screenshot+2019-01-29+12.50.09.png" alt="Google Developer API Dashboard" height="550" width="800">


Once you find it, click “**Enable**” . The API is now enabled and you will be able to read and write into Google Sheets.

From the sidebar, navigate to “**Credentials**” and click on “**Create credentials**” button and select “**API Key**”. Also, click on the “**Restrict Key**” and set a name for the same. (I’ve set it to `SalesDashboardAPIKey`).



<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_3E77B58C1BDB4283EA0AA5749F06200EAFD47D75D433E88A9C19E349F3F702AF_1548746564747_Screenshot+2019-01-29+12.52.15.png" alt="Google Developer Dashboard" height="550" width="800">


Note : Save the key generated (mine is `AIzaSyCn_qxApnW1By0E3DZmIOJeXkT_RtYuYHo`), since we will need this key to pull the data from our Google Sheets later.

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_3E77B58C1BDB4283EA0AA5749F06200EAFD47D75D433E88A9C19E349F3F702AF_1548746333873_Screenshot+2019-01-29+12.47.15.png" alt="Google Sheets API" height="550" width="800">


From the “**API Restrictions**”, select the “**Google Sheets API**” and save it. Now, let’s connect Google Sheets API and fetch the data.


## Connecting Google Sheets API and fetching data

We will now take a look at the Google Sheets that we will be using for our dashboard. Here’s a snapshot of how it looks, basis some of the key performance indicators of sales - like opportunities created, deals in pipeline and value of closed deals. The data also focuses on revenue, leads, sales cycle and other growth indicators.

The Google sheet for KPI data :

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1551856811740_Screenshot+2019-03-06+12.48.28.png" alt="Google Sheet Data" height="550" width="800">


The Google sheet for the Map Data(year 2016):

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1551856811645_Screenshot+2019-03-06+12.49.10.png" alt="Google Sheet Map Data" height="300" width="600">



The **componentDidMount()**is invoked immediately after a component is mounted. This is exactly where AJAX requests and DOM or state updates should occur.
Below is the code to fetch the response from the JSON data:

```js
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=SalesDataFinal&majorDimension=ROWS&key=${config.apiKey}`;
                                                                                          componentDidMount() {
    fetch(url).then(response => response.json()).then(data => {
          let batchRowValues = data.valueRanges[0].values;
          const rows = [];
          for (let i = 1; i < batchRowValues.length; i++) {
            let rowObject = {};
            for (let j = 0; j < batchRowValues[i].length; j++) {
              rowObject\[batchRowValues[0\][j]] = batchRowValues\[i\][j];
            }
            rows.push(rowObject);
          }
          this.setState({ items: rows}, () => this.getData('All','2016'));   
    });
    }
```

## Building the Sales dashboard

We’ll be using Bootstrap 4 to build the dashboard structure. With new components, responsive structures and styles, it is a consistent framework that supports all browsers.

Now let’s divide our dashboard into 3 parts:

1. Navigation Section
2. KPI Section
3. Charts Section

**Creating the Navigation Section:** 

To create the navigation bar,  we will be using the `navbar` component of Bootstrap. Just below the navigation bar holds a component with a drop-down for `Year` and  `Quarter`. Below is the HTML snippet for the same:

```html
     { /* Navigation Bar */}   
          <nav className ="navbar navbar-expand-sm text-sm-center text-md-left fixed-top">
                <div className="navbar-brand">   
                <span className="logo">S</span>
                Sales Dashboard</div>  
                    <ul className="navbar-nav flex-row ml-sm-auto">
                      <li className="nav-item">
                        <div className="profile">
                          <img alt="" className="mr-3 rounded-circle border" width="42"
                          src="./Image-Tim.png" />
                          <span className="name d-none d-sm-inline-flex">Hey, Tim </span>  
                        </div>
                      </li>
                    </ul>
            </nav> 
    
            {/* For building Year and Quarter */}
            
             <div className="container">
                <div className="row mb-5">
                  <div className="col-2">
                  </div>
                  <div className="col text-right time-selector">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <div className="dropdown active-item">
                            <button className="btn btn-secondary dropdown-toggle" 
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.value}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <div className="dropdown-item" value ="2018" id="btn-2018" onClick ={this.updateDashboard} >2018</div>
                              <div className="dropdown-item" value ="2017" id="btn-2017" onClick ={this.updateDashboard} >2017</div>
                              <div className="dropdown-item" value ="2016" id="btn-2016"onClick ={this.updateDashboard} >2016</div>
                            </div>
                          </div>
                        </li>
                
                      <li className="list-inline-item">
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" 
                        type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {this.state.quarterValue}
                        </button>
                      <div className="dropdown-menu" for="navbarDropdown" aria-labelledby="navbarDropdown">
                      <div className="dropdown-item" disabled>--Select Quarter--</div>
                        <div id ="btn-q1" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 1</div>
                          <div id ="btn-q2" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 2</div>
                          <div id ="btn-q3" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 3</div>
                          <div id ="btn-q4" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 4</div>
                          <div id ="btn-q5" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 1</div>
                          <div id ="btn-q6" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 2</div>
                          <div id ="btn-q7" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 3</div>
                          <div id ="btn-q8" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 4</div>
                          <div id ="btn-q9" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 1</div>
                          <div id ="btn-q10" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 2</div>
                          <div id ="btn-q11" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 3</div>
                          <div id ="btn-q12" className="dropdown-item" onClick ={this.updateDashboardQuarter}>Quarter 4</div>    
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
            
```

We will now create a `container` to house both the KPI and Chart sections of the dashboard. Take a look at the HTML snippet below:

```html
    <div className ="app">
    //KPI section
    
    //Charts Section
    </div>
```

**Creating the KPI Section:**

To create this, we will use the `Card` component of Bootstrap to create the layout for our KPI section. Below is the HTML snippet for the same:

```html
              <div className="card c-portlet c-portlet--height-fluid-half d-flex align-items-start flex-column">
                        <div className="d-flex"> 
                          <span className="oval d-flex justify-content-center ">
                          <img src={'./revenuetarget.svg'} alt="fireSpot" className= "img-responsive rounded-circle" width="20"/>
                          </span>
                            <p className="c-portlet-title">Revenue Target</p>  
                        </div>
                          
                              <div className="kpi-block mt-3">
                                  <div className="c-portlet-value">
                                  <span className="h1">$</span> {this.state.targetRevenue}
                              </div>
                              <div id="added-meta-target" className="targetRevenue">
                    
                              <span className="h5 poa meta-value-text1">Target in <span className="defaultQtr_value">{this.state.quarterValue}</span>, {this.state.value}</span>    
                              </div>
                              </div> 
                              <div className="d-flex align-items-center  kpi-block mt-4 mb-2">
                            <span className="rectangle d-flex justify-content-center ">
                            </span>
                              <div id ="kpi-target" data-up="&nbsp;more" data-down="&nbsp;less"></div>
                                <span className ="h5 mb-0">&nbsp; of target achieved</span>
                          </div> 
                      </div>
```

Now that our layout is ready, we will define functionality for elements and feed data to them from Google Sheets. For this, we will define a function called `getData` in our component which will take the year and quarter as arguments to de-structure google sheets data present in the app’s state.

```js
    getData = (arg,arg2) => {
        // google sheet data
    const arr = this.state.items;
        const arrLen = arr.length;
        let chartDataArr = [];
        let targetRevenueVal =0;
        let targetRevenueFlag =false;
      
        //KPI 1 - Target achieved
        
        const targetElem = document.getElementById('kpi-target');
        targetElem.classList.remove('has-up-val');
        targetElem.classList.remove('has-down-val');
    
        //Annual Data
        for (let i = 0; i < arrLen; i++) {
          let monthStr = (arr[i])['year']; 
              if (monthStr.includes(arg2)) {    
                chartDataArr.push(arr[i]);
                  if(targetRevenueFlag===false) {
                      targetRevenueVal=parseInt(arr[i].revenueTarget_Annual); 
                    targetRevenueFlag = true;
                  }
                  
              }
        }
        //Quarterly Data 
        if(arg !== "All") { 
        chartDataArr = [];
        targetRevenueFlag =false;
    
        for (let i = 0; i < arrLen; i++) {
          let quarterStr = (arr[i])['quarter']; 
      
              if (quarterStr.includes(arg)) {
                  if(targetRevenueFlag===false) {
                      targetRevenueVal=parseInt(arr[i].revenueTarget);
                      targetRevenueFlag = true;
                  }
                  chartDataArr.push(arr[i]);
              }
        }
      }
    
     //Percent of targets achieved
        let target = (oppClosedVal/targetRevenueVal)*100;
        const targetPercent =(target).toFixed(2);
        if(target < 100 ) {
          target = 100-target;
          targetElem.innerHTML = Math.abs(target) + '%';
          targetElem.classList.add('has-down-val');
        } 
        else if(target >= 100 ) {
        target = target -100;
        targetElem.innerHTML = Math.abs(target) +'%';
        targetElem.classList.add('has-up-val');
    
        }
        
        document.getElementById("kpi-target").innerHTML = (target.toFixed(2))+'%';
    }
```

The above code snippet will create one KPI for `Revenue Target`. Likewise, we will create cards for all the 4 KPIs for the Sales Dashboard.

**Creating the Charts Section:** 

We will use `col` and `card` components of Bootstrap to create the Chart Layout. `containerBackgroundOpacity` is an attribute which is used to manipulate  the background opacity of the charts.

```html

                    {/*Multi-series chart*/}
                  <div className="col-md-6 col-xl-9 order-2 order-md-1 order-xl-1 ">
                    <div className="card c-portlet c-portlet--height-fluid pipeline-card full-height"> 
                    </div>
                  </div>
            {/*stack Chart*/ }
              <div className="col-md-6 col-xl-8 order-2 order-md-1 order-xl-1 ">
                <div className="card c-portlet c-portlet--height-fluid full-height pipelineClosing-card">
                </div>
              </div>
                        {/*Map Chart*/ }
              <div className="col-md-12 col-xl-6 order-2 order-md-1 order-xl-1 ">
                  <div className="card c-portlet c-portlet--height-fluid full-height map-card">
                  </div>
              </div>
```

The above code snippet will create one chart card each for Multi-series Charts, StackedLine and Map. Follow the steps to build the chart cards and you will have the chart layout. And to make sure you are getting it right, take a look at the code files in my Github repository.

Now, we will form JSON data array for each chart and consume the cosmetic options defined and add it to apps’ state.

```js

    //Multi-series column 2D chart
    const chartConfigs1 = {
          type: 'mscolumn2d',
          width: '100%',
          height: '100%',
          dataFormat: 'json',
          dataSource: {datasource }
    }
        this.setState({stackData: chartConfigs1});
    
    //World Map
    const chartConfigs2 = { 
          type : "world",
         width : '100%',
         height : '95%',
         dataFormat : "JSON",
         dataSource :{datasource}
    }
      this.setState({mapData: chartConfigs2});
    
    //Multi-series line chart
    const chartConfigs3 = {
          type: 'msline',
          width: '100%',
          height: '150%',
          dataFormat: 'json',
          dataSource: {datasource}   
        }
        this.setState({mslineData: chartConfigs3});
 ```       
    

We will now pass the JSON data to the  FusionCharts’ React component under `<div>` element which we have created for each chart.

```html
       <div className="card c-portlet c-portlet--height-fluid pipeline-card full-height"> 
            <ReactFC {...this.state.mslineData} containerBackgroundOpacity ="0" />
        </div>
    <div className="card c-portlet c-portlet--height-fluid pipeline-card full-height"> 
        <ReactFC {...this.state.stackData} containerBackgroundOpacity ="0"/>           </div>
      <div className="card c-portlet c-portlet--height-fluid full-height map-card">
        <ReactFC {...this.state.mapData} containerBackgroundOpacity ="0"/>             
      </div>
                 
 ```              

If you’ve followed the above steps till now you should have a functional dashboard as in the image below:


<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_7427EBC7185B7DD83869C61DCCB51C03D7340BBCACABE89DCD4C59B34871A8BB_1552893276283_Screenshot+2019-03-18+at+12.41.58+PM+2.png" alt="Sales Dashboard" height="550" width="800">


Hope the tutorial helped you create this Sales Dashboard using Google Sheets. Now, you can go ahead and add UI elements, styles, more charts and a lot more features.


> **You can download Fusion Charts Package for React stack from here** - [**Sign up for Fusion Charts**](https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=react)**.**

A sales dashboard plays a crucial role in giving the peeps at sales an up-to-date view of their organisation’s sales health so that they can make desired revenue predictions, visualize successfully closed deals and also identify key areas for optimisation.

You can take a look at the other dashboards on React built by our developers such as  [Retail Dashboard](https://www.fusioncharts.com/dashboards/online-retail-dashboard) and [SaaS Dashboard](https://www.fusioncharts.com/dashboards/saas-dashboard).

For any references, you can check out the source code from [this Github Repository](https://github.com/sowmyaraj92/sales-dashboard-gsheetsapi-react).


