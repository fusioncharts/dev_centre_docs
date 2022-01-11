---
title: Export chart as image | FusionGrid
description: This article talks about using column filters
heading: Search Filter
---

# Quick Search

For a faster way of analyzing and finding the relevant data, Fusiongrid implemented a quick search functuonality. 
To include a searchbar on your grid include the property 'searchable' and set it to 'true', see the below syntax for reference:

## Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Code

config = {
    defaultColumnOptions: {
        searchable: {
             enable: true/false
			multiColSearch: true/false
        }
    }
};
