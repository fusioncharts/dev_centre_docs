---
title: FusionGrid list of events | FusionGrid list of events
description: This article lists the evnts of FusionGrid
heading: List of Events 
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for your grid. 
The FusionGrid API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of your grid or when you interact with a grid.

All the concerned events are listed down below categorized with respect to their action type, component and lifecycle state.


## LifeCycle Events
<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
  <tr>
		<td>`beforeRender`</td>
		<td>Grid is configured properly and starting to render.</br>
		Data parameter: type: ‘beforeRender’</td>
	</tr>
  <tr>
		<td>`dispose`</td>
		<td>Grid is disposed.</br>
		Data parameter: </br>
		type: ‘disposed’</td>
	</tr>
  <tr>
		<td>`initialized`</td>
		<td>Grid initialized by calling the grid constructor but the grid is not yet rendered.</br>
		Data parameter: </br>
		type: ‘initialized’</td>
	</tr>
  <tr>
		<td>`rendered`</td>
		<td>Grid rendered. </br>
		Data parameter: </br>
		type: ‘rendered’</td>
	</tr>
  <tr>
		<td>`resized`</td>
		<td>Grid is resized as it’s parent container is resized. </br>
		Data parameter: </br>
		type: ‘resized’ </br>
		width: width of the grid </br>
		height: height of the grid
	</td>
	</tr>
  <tr>
		<td>`updated`</td>
		<td>Grid configuration or data is updated. </br>
		Data parameter: </br>
		type: ‘update’ </br>
		config: Updated grid configuration.</td>
	</tr>
  </table>
  
  ## Action Events
  Some action events happen upon interacting with data in the form of clicking, selecting or hovering, let's see the events for each action.
  
  ### Clicking Events
  This are the clicking events:
  
  <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
  <tr>
		<td>`rowClicked`</td>
		<td>A row is clicked.</td>
	</tr>
   <tr>
		<td>`rowDoubleClicked`</td>
		<td>Double clicked performed on a row.</td>
	</tr>
   <tr>
		<td>`headerClicked`</td>
		<td>Triggers when a header is clicked.</td>
	</tr>
  </table>
  
  ### Hovering Events
  This are the hovering events:
  
  <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
  <tr>
		<td>`rowHovered`</td>
		<td>A row is hovered.</td>
	</tr>
     <tr>
		<td>`columnHovered`</td>
		<td>A column is hovered.</td>
	</tr>
</table>
    
### Selection Events
This are the selection events:
    
  <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
  <tr>
		<td>`rowSelected`</td>
		<td>A row is selected.</td>
	</tr>
    <tr>
		<td>`rowDeselected`</td>
		<td>A row is deselected.</td>
	</tr>
    <tr>
		<td>`allRowsSelected`</td>
		<td>All rows are selected.</td>
	</tr>
    <tr>
		<td>`allRowsDeselected`</td>
		<td>All rows are deselected.</td>
	</tr>
    </table>
    
## Component Events
Here we list the different types of component events.
   
### Card Layout Events

  <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
      <tr>
		<td>`cardClicked`</td>
		<td>When a card is clicked.</td>
	</tr>
      <tr>
		<td>`cardDoubleClicked`</td>
		<td>Triggers when a double click occurs on a card.</td>
	</tr>
      <tr>
		<td>`cardLongPressed`</td>
		<td>Triggers when a card is long pressed.</td>
	</tr>
   </table>

### Column Menu Events

   <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
      <tr>
		<td>`columnMenuClicked`</td>
		<td>Column menu is clicked.</td>
	</tr>
      <tr>
		<td>`columnMenuOpen`</td>
		<td>Column menu open is triggered by clicking on the menu.</td>
	</tr>
      <tr>
		<td>`columnMenuClosed`</td>
		<td>Column menu is closed either by clicking on the menu icon or using any button inside the menu.</td>
	</tr>
      </table>
    
### Filter Events

   <table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
      <tr>
		<td>`filterApplied`</td>
		<td>A filter is applied.</td>
	</tr>
       <tr>
		<td>`filterModified`</td>
		<td>Some filter is changed but apply button is not yet clicked.</td>
	</tr>
      </table>
      
### Layout Events

<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>	
	<tr>
		<td>`layoutChanged`</td>
		<td>Triggers when any change occurs in layout - from row to card or vice versa, layout density change, layout fit logic change.</td>
	</tr>
	<tr>
		<td>`layoutTypeChanged`</td>
		<td>Triggers when layout type is changed from row to card or vice versa.</td>
	</tr>
</table>
<table>
	<tr>
		<th>Event Argument</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`layout`</td>
		<td>Applied layout object.</td>
	</tr>
	<tr>
		<td>`layoutType `</td>
		<td>Current layout type.</td>
	</tr>
	<tr>
		<td>`prevLayoutType `</td>
		<td>Previous layout type.</td>
	</tr>
	<tr>
		<td>`viewport `</td>
		<td>Applied viewport object.</td>
	</tr>
</table>
      
### Pagination Events

<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`pageChanged`</td>
		<td>Triggers when user navigate to a new page using pagination panel or API.</td>
	</tr>
	<tr>
		<td>`pageSizeChanged`</td>
		<td>Page size is changed through pagination panel or API.</td>
	</tr>
	
</table>
     
### Scroll Events

<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`scroll`</td>
		<td>Triggers when scrolling occurs in grid either horizontally or vertically.</td>
	</tr>
</table>
<table>
	<tr>
		<th>Event Argument</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`direction`</td>
		<td>‘horizontal’/’vertical’.</td>
	</tr>
	<tr>
		<td>`left`</td>
		<td>left px of the scroll.</td>
	</tr>
	<tr>
		<td>`top`</td>
		<td>top px of the scroll.</td>
	</tr>
	
</table>
    
### Sort Events

<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
      <tr>
		<td>`sortChanged`</td>
		<td>A sort has applied or existing sort changed.</td>
	</tr>
</table>
      
### United Common Events for Row and Card

<table>
	<tr>
		<th>Event Name</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`recordClicked`</td>
		<td>When a card or row is clicked.</td>
	</tr>
	<tr>
		<td>`recordDoubleClicked`</td>
		<td>Triggers when a double click occurs on card or record.</td>
	</tr>
</table>
    
