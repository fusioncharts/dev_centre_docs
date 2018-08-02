---
title: Version 3.12.0 | FusionCharts
description: This section talks about the new features, improvements and fixes for v3.12.0.
heading: Version 3.12.0
breadcrumb: [["Home", "/"], ["Change Log"]]
---

#### 10th March, 2017

## New Features:

* FusionCharts Suite XT introduces data skipping starting version 3.12.0. In case of huge data, data skipping draws only those plots in the canvas that actually create a data trend.

* The `reverseAxis` attribute has been introduced to reverse the x-axis and set the labels in descending order from left to right in scatter and bubble charts. This attribute works only when the x-axis is represented using `numeric` values. By default, the labels are set in the ascending order.

* An element-called the cross line-has been introduced for all column, bar, area and line 2D charts. It is a vertical line/area used as quick reference for the data plots. 

* The following new attributes have been introduced for configuring the cross line:

    * `drawCrossLine`

    * `Crosslinecolor`

    * `Crosslinealpha`

    * `Crosslineanimation`

    * `Crosslineanimationduration`

    * `Tooltipgrayoutcolor`

    * `Plotcolorintooltip`

* Starting v3.12.0, all actions for the chart configurations & space management is executed in a separate thread before rendering the graphics of the chart (that is carried out when the `render()` function is called). Previously, all these actions were executed in the same thread. 

* The `asyncRender` property has been introduced to enable/disable this feature.

## Improvements:

* Tooltip interaction in error charts has been improved to show cumulative plot values when the cursor is hovered upon the upper and lower limits of the error bars. The `cumulativeValueOnErrorBar` attribute has been introduced to enable (or disable) this feature.

* Due to some security policies, usage of eval has been removed for FusionCharts Suite XT. This change affects some of the features of the `link` and `param` attributes. 

* The affected features that have now been disabled are:

    * Special characters like `(`, `)`, `-` and `,` cannot be passed as a parameter while function call.

    * Multiple functions cannot be passed after the *Javascript:* prefix and for the `param` attribute.

    * A function cannot be defined after `Javascript:` prefix and for `param` attribute.

* **In order to avoid the use of 'eval', FusionCharts has also discontinued support for the JSON object for IE <= 7 browser versions. Users who wish to continue with the use of the JSON object can request a custom FusionCharts build from us.**

* The core maps package has been updated to:

    * Update the specification sheet for Andhra Pradesh to:

    * Rename Cuddapah to YSR District, Kadapa (Cuddapah).

    * Rename Nellore to Sri Potti Sriramulu Nellore.

    * Rename Vishakhapatnam to Visakhapatnam.

    * Update the specification sheet for Assam to:

        * Add Baksa, Biswanath, Charaideo, Chirang, Hojai, Kamrup Metropolitan, Karbi Anglong West, Karimganj, Majuli, South Salmara-Mankachar, and Udalguri to the list of entities.

        * Rename North Cacher Hills to Dima Hasao (North Cachar Hills).

        * Rename Marigaon to Morigaon.

        * Rename Sibsagar to Sivasagar.

    * Update the specification sheet for Chhattisgarh to:

        * Add Balod, Baloda Bazar, Balrampur, Bemetara, Bijapur, Gariaband, Kondagaon, Mungeli, Narayanpur, Sukma, and Surajpur to the list of entities.

        * Rename Baster to Bastar.

        * Rename Kawardha to Kabirdham (Kawardha).

        * Rename Koriya to Korea (Koriya).

    * Update the specification sheet for Delhi to:

        * Add South East Delhi and Shahdara to the list of entities.

        * Rename North West to North West Delhi.

        * Rename South West to South West Delhi.

        * Rename South to South Delhi.

        * Rename East to East Delhi.

        * Rename Central to Central Delhi.

        * Rename North to North Delhi.

        * Rename North East to North East Delhi.

    * Update the specification sheet for Odisha to:

        * Rename Anugul to Angul

        * Rename Baleshwar to Balasore

        * Rename Baudh to Boudh

        * Rename Jagatsinghapur to Jagatsinghpur

        * Rename Jajapur to Jajpur

        * Rename Nabarangapur to Nabarangpur

        * Rename Sonapur to Subarnapur

        * Rename Sundargarh to Sundergarh

    * Update the specification sheet for Gujarat to:

        * Rename Chhota Udaipur to Chhota Udepur

        * Rename Dang to Dangs (Ahwa)

        * Rename Kutch to Kachchh

    * Update the specification sheet for Haryana to rename Nuh to Mewat.

    * Update the specification sheet for HImachal Pradesh to rename Lahul & Spiti to Lahaul & Spiti.

    * Update the specification sheet for Bihar to:

        * Add Arwal to the list of entities

        * Rename Pashchim Champaran to West Champaran

        * Rename Purba Champaran to East Champaran

    * Update the specification sheet for Jharkhand to:

        * Rename East Singbhum to East Singhbhum

        * Rename Hazaribag to Hazaribagh

        * Rename Kodarma to Koderma

        * Rename Pakaur to Pakur

        * Rename Sahibganj to Sahebganj

        * Rename Saraikela to Seraikela Kharsawan

    * Update the specification sheet for Karnataka to:

        * Rename Chikmagalur to Chikkamagaluru (Chikmagalur).

        * Rename Chamrajnagar to Chamarajanagar.

        * Rename Bellary to Ballari (Bellary).

        * Rename Belgaum to Belagavi (Belgaum).

        * Rename Bangalore Rural to Bengaluru (Bangalore) Rural.

        * Rename Bangalore Urban to Bengaluru (Bangalore) Urban.

        * Rename Bijapur to Vijayapura (Bijapur).

        * Rename Gulbarga to Kalaburagi (Gulbarga).

        * Rename Mysore to Mysuru (Mysore).

        * Rename Shimoga to Shivamogga (Shimoga).

        * Rename Tumkur to Tumakuru (Tumkur).

    * Update the specification sheet for India to rename Pondicherry to Puducherry.

    * Update the specification sheet for Lakshadweep to rename Kaverati Island to Kavaratti Island.

    * Update the specification sheet for Maharashtra to:

        * Add Mumbai City and Palghar to the list of entities.

        * Rename Ahmadnagar to Ahmednagar.

        * Rename Bid to Beed.

        * Rename Gondiya to Gondia.

        * Rename Raigarh to Raigad.

    * Update the specification sheet for Manipur to:

        * Rename East Imphal to Imphal East.

        * Rename West Imphal to Imphal West.

    * Update the specification sheet for Meghalaya to:

        * Add East Jaintia Hills, North Garo Hills, West Jaintia Hills, South West Garo Hills, and South West Khasi Hills to the list of entities.

        * Remove Jaintia Hills from the list of entities.

    * Update the specification sheet for Rajasthan to:

        * Rename Dhaulpur to Dholpur.

        * Rename Jhunjhunun to Jhunjhunu.

    * Update the specification sheet for Tamil Nadu to:

        * Rename Kancheepuram to Kanchipuram.

        * Rename Kanniyakumari to Kanyakumari.

        * Rename Thiruvallur to Tiruvallur.

        * Rename Thiruvarur to Tiruvarur.

        * Rename Thoothukkudi to Thoothukudi (Tuticorin).

    * Update the specification sheet for Telangana to rename Rangareddi to Rangareddy.

    * Update the specification sheet for Tripura to add the following entities:

        * Gomati

        * Khowai

        * Sepahijala

        * Unakoti

    * Update the specification sheet for Uttar Pradesh to:

        * Remove Amethi, Amroha, Kanshiram Nagar, Panchsheel Nagar district, Sambhal, and Shami from the list of entities.

        * Add Jyotiba Phule Nagar and Lakhimpur - Kheri to the list of entities.

        * Rename Mau to Maunathbhanjan.

        * Rename Raebareli to Rae Bareli.

        * Rename Shravasti to Shrawasti.

    * Update the specification sheet for West Bengal to:

        * Rename 24 Parganas North to North 24 Parganas.

        * Rename 24 Parganas South to South 24 Parganas.

        * Rename Barddhaman to Burdwan (Bardhaman).

        * Rename Dakshin Dinajpur to Dakshin Dinajpur (South Dinajpur).

        * Rename Darjiling to Darjeeling.

        * Rename Hugli to Hooghly.

        * Rename Koch Bihar to Cooch Behar.

        * Rename Maldah to Malda.

        * Rename Puruliya to Purulia.

        * Rename Uttar Dinajpur to Uttar Dinajpur (North Dinajpur).

    * Update the specification sheet for Chile to:

        * Rename Aisen del General Carlos Ibanez to Aisen del General Carlos Ibanez del Campo

        * Rename Arica y Parinacota to Arica and Parinacota

        * Rename Magallanes y la Antartica Chilena to Magallanes y Antartica Chilena

    * Update the specification sheet for South Korea to:

        * Add Sejong to the entity list

        * Rename Chungcheongbuk-do to North Chungcheong

        * Rename Chungcheongnam-do to South Chungcheong

        * Rename Gangwon-do to Gangwon

        * Rename Gyeonggi-do to Gyeonggi

        * Rename Gyeongsangbuk-do to North Gyeongsang

        * Rename Gyeongsangnam-do to South Gyeongsang

        * Rename Jeollabuk-do to North Jeolla

        * Rename Jeollanam-do to South Jeolla

    * Update the specification sheet for Busan to remove the '-gu' suffix from all entities

        * Rename the specification sheet for Gangwon-do to Gangwon

    * Update the specification sheet for Gangwon to update the entity IDs for

        * Cheorwon County

        * Chuncheon

        * Donghae

        * Gangneung

        * Goseong County

        * Hoengseong County

        * Hongcheon County

        * Hwacheon County

        * Inje County

        * Jeongseon County

        * Pyeongchang County

        * Samcheok

        * Sokcho

        * Taebaek

        * Wonju

    * Update the specification sheet for Gyeonggi to:

        * Rename Gapyeong County to Gapyeong

        * Rename Yangpyeong County to Yangpyeong

        * Rename Yeoju County to Yeoju

        * Rename Yeoncheon County to Yeoncheon

        * Update entity IDs for

            * Ansan

            * Anseong

            * Anyang

            * Bucheon

            * Dongducheon

            * Gapyeong

            * Gimpo

            * Suwon

            * Uijeongbu

            * Uiwang

            * Yangju

            * Yangpyeong County

            * Yeoju County

            * Yeoncheon County

            * Yongin

    * Update the specification sheet for Incheon to:

        * Update the entity IDs.

        * Remove the '-gu' suffix from all entities.

    * Update the specification sheet for North Chungcheong to:

        * Remove Cheongwon County from the list of entities.

        * Update the entity IDs.

    * Update the specification sheet for North Gyeongsang to update the entity IDs .

    * Update the specification sheet for North Jeolla to update the entity IDs.

    * Add a specification sheet for Sejong.

    * Update the specification sheet for South Chungcheong to:

        * Remove Yeongi County from the list of entities.

        * Update the entity IDs.

    * Update the specification sheet for South Gyeongsang to update the entity IDs.

    * Update the specification sheet for South Jeolla to update the entity IDs.

    * Update the specification sheet for Europe with Countries to:

        * Remove Northern Ireland, Scotland, Wales, and England from the entities list.

        * Add United Kingdom to the entities list.

    * Update the specification sheet for World with Countries to add the following entities to the list:

        * Netherlands

        * American Samoa

        * Anguilla

        * Aruba

        * Bermuda

        * Christmas Island

        * Cocos (Keeling) Islands

        * Cook Islands

        * Faroe Islands

        * French Polynesia

        * Gaza Strip

        * Gibraltar

        * Guadeloupe

        * Guam

        * Guernsey

        * Jersey

        * Kingman Reef

        * Maldives

        * Isle of Man

        * Martinique

        * Mayotte

        * Montserrat

        * BES Islands

        * Curaco

        * Sint Maarten

        * Niue

        * Norfolk Island

        * Northen Mariana Islands

        * Pitcairn Islands

        * Reunion

        * Saint Helena

        * Saint Pierre and Miquelon

        * Turks and Caicos Islands

        * Virgin Islands (UK)

        * Virgin Islands (US)

        * West Bank

        * Wallis and Futuna

    * Add specification sheets for the following regions under Nepal (Regions):

        * Central Development Region

        * Eastern Development Region

        * Far Western Development Region

        * Mid Western Development Region

        * Western Development Region

    * Add specification sheets for the following regions under Nepal (Provinces):

        * Nepal Province 1 (Koshi)

        * Nepal Province 2 (Janakpur)

        * Nepal Province 3 (Bagmati)

        * Nepal Province 4 (Gandaki)

        * Nepal Province 5 (Lumbini)

        * Nepal Province 6 (Karnali)

        * Nepal Province 7 (Far West)

    * Add specification sheets for the following zones under Nepal (Zones):

        * Bagmati

        * Bheri

        * Dhaulagiri

        * Gandaki

        * Janakpur

        * Karnali

        * Koshi

        * Lumbini

        * Mahakali

        * Mechi

        * Narayani

        * Rapti

        * Sagarmatha

        * Seti

    * Update the specification sheet for Philippines to:

        * Add Batanes, Davao Occidental, and Dinagat Islands to the list of entities.

        * Remove Shariff Kabunsuan from the list of entities.

## Fixes:

* For bar charts, the `showLabels` attribute is now working as expected. Previously, when set to `0`, this attribute was not hiding the x-axis labels while updating the chart.

* For all charts, the `$label` macro is now working as expected at all levels (data, dataset and category) of the chart. Previously, it was duplicating the string used in the tooltext.

* For multi-series line, all column and bar charts, the `dashed` attribute is now working as expected. Previously, this attribute was not working when specified at the data and dataset levels.

* In zoomline chart, scroll is working as expected when overflow is set to `auto` in any of the div container. Previously, scroll was getting disabled in this condition.

