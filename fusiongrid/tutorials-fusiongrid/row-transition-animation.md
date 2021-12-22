---
title: Export chart as image | FusionGrid
description: This article talks about using row animations
heading: Row Transition Animation 
---

Enhance your data by adding transition animations to your rows. In this article, you will learn to add animation to your rows.
In the 'rowOptions' object include the properties 'animateRows' and 'animateRowsDuration'. 
Set your 'animateRows' to 'true' and choose a value for the duration of the animation, see the syntax below for reference:

### Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

### Chart Configuration

The chart configuration files are simple .json files. If you are executing the template code without any changes, the chart configuration file should be in the following path:

config = {
    rowOptions: {
        animateRows: true/false,
        animateRowsDuration: 1 // time in seconds
    }
};
