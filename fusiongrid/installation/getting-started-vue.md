---
title: Install FusionGrid Vue | FusionGrid
description: With FusionCharts, you can easily integrate FusionGrid with Vue.js using our step-by-step guide. Build powerful data grids for Vue apps effortlessly now!
heading: Install FusionGrid with Vue
---

# Create a Grid in Vue

We have built a lightweight and straightforward VueJS component for the FusionGrid JavaScript grid Library. The 'vue-fusiongrid' component allows you easily include FusionGrid in your VueJS projects.

We’ll show you how to install and render a grid using the 'vue-fusiongrid' component on this page.

## Prerequisite

* Install the Node.js, NPM/Yarn globally in your machine.
* Install the FusionGrid and Vue components in your project.

## Installation 

You can install 'fusiongrid' and the 'vue-fusiongrid' components via npm or Yarn. First, download directly all binaries files located on our [github repository](https://github.com/fusioncharts/vue-fusiongrid) and follow the respective steps below. 

### Install from NPM

Open the terminal and enter:
```bash
npm install fusiongrid
npm install vue-fusiongrid
```

### Install from Yarn

Open the terminal and enter:
```bash
yarn add vue-fusiongrid
```

## Usage

You can add the vue-fusiongrid component to your project by registering globally as a plugin or by registering locally in your component. Below you can find examples for adding the 'vue-fusiongrid' component to your project. 

#### Registering globally as a plugin 

Import the 'createApp', 'vue-fusiongrid', and 'FusionGrid' components in the main app file, as follows:
```json
import { createApp } from 'vue'
import App from './App.vue'

// import Fusiongrid modules and resolve dependency

import FusionGrid from "fusiongrid";
import "fusiongrid/dist/fusiongrid.css";
import VueFusiongrid from "vue-fusiongrid";
Next, register it as plugin in Vue object

const app = createApp(App);
app.use(VueFusiongrid, FusionGrid);
```
This allows the 'vue-fusiongrid' component to become available everywhere in your application.

#### Registering locally in your component 

Import the chart component from the ‘vue-fusiongrid’ package in your component file and register it locally.
```json
// import FusionGrid modules and resolve dependency
import FusionGrid from 'fusiongrid';
import "fusiongrid/dist/fusiongrid.css";

import {fusionGridComponent} from "vue-fusiongrid";
const VueFusiongrid = fusionGridComponent(FusionGrid);
export default {
  name: 'App',
  components: {
    VueFusiongrid
  }
}
```
This allows the 'vue-fusiongrid' component to be present only on specific components of your application.
 
### Working with APIs

To call APIs we need the fusiongrid object. To get the fusiongrid object from the component we can use the props 'getFGInstance', as shown below:
```json
<vue-fusiongrid
  :width="width"
  :height="height"
  :dataSource="dataSource"
  :config="config"
  :getFGinstanace="getFGinstanace"
/>
```
Now, we can access the fusiongrid object from 'fusiongridObj' and invoke API from the object.
```json
export default {
  name: 'App',
  components: {
    VueFusiongrid
  },

  setup() {
    const getFGInstance  = (fusionGridObj)  => {
      console.log(fusionGridObj);
    }
    return {
      getFGInstance
    }
  }
}
```

### Working with Events

To attach event listeners to FusionGrid, you can use the 'v-on' or '@' operator in the vue-fusiongrid component.
```json
<vue-fusiongrid
  :width="width"
  :height="height"
  :dataSource="dataSource"
  :config="config"
  @rowClicked="rowClickedHandler"
/>
```
In this case, the 'rowClickedHandler' component will be invoked when the user clicks on any row from the fusion grid.

## Configure the Grid

Here is a basic sample that shows how to create a grid using 'vue-fusiongrid':
```json
import { createApp } from 'vue'
import App from './App.vue'

import FusionGrid from "fusiongrid";
import "fusiongrid/dist/fusiongrid.css";
import VueFusiongrid from "vue-fusiongrid";
const app = createApp(App);

// register VueFusionGrid component
app.use(VueFusiongrid, FusionGrid);
app.mount('#app')

// File where the grid is being integrated
import FusionGrid from "fusiongrid";
export default {
  name: 'App',
  setup() {
    const schema = [
      {
        name: "Rank",
        type: "number",
      },
      {
        name: "Model",
      },
      {
        name: "Make",
      },
      {
        name: "Units Sold",
        type: "number",
      },
      {
        name: "Assembly Location",
      },
    ];

    const data = [
      [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
      [2, "Pickup", "Ram", 633694, "Warren, Mich."],
      [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
      [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
      [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
      [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
      [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
      [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
      [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
      [16, "Sierra", "GMC", 232325, "Flint, Mich."],
      [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
      [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
      [19, "Cherokee", "Jeep", 191397, "Belvidere, Ill."],
      [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
    ];

    const dataStore = new FusionGrid.DataStore();
    const dataSource = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });
  
    return {
      dataSource: {data: dataSource}
    }
  }
}
```
Here's HTML template for the above example:
```json
<div id="app">
  <vue-fusiongrid
    :dataSource="dataSource"
    :width="900"
    :height="600"
  />
  FusionGrid will render here...
</div>
```

## See your grid
![Automobile Ranking](/images/automobile_ranking_sample.png)
