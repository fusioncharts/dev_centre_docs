---
title: Export chart as image | FusionGrid
description: This article talks about using row animations
heading: Column Filter
---

For a better data analysis you can apply filters on specific columns to show most relevant data first. There are four types of filters you can apply to your grid.

### Prerequisites

Before starting with the code, ensure that you have:

- Downloaded and installed FusionGrid Server(link), and the server is running

## Conditional Filter
Use conditions and logical operations such as, or and and, to filter your data. 

Below is the list of all applicable conditions based on column data type. 
<table>
<tr>
		<th>Numeric</th>
		<th>String</th>
		<th>Date</th>
</tr>
   <tr>
	<td>= (equals/is)</td>
	<td>is</td>
	<td>is</td>
</tr>
<tr>
	<td>≠ (not equal to/is not)</td>
	<td>is not</td>
	<td>is not</td>
</tr>
  <tr>
	<td>< (less than)</td>
	<td>contains</td>
	<td>is before</td>
</tr>
  <tr>
	<td>> (greater than)</td>
	<td>does not contain</td>
	<td>is after</td>
</tr>
  <tr>
	<td>≤ (less than or equal to)</td>
	<td>starts with</td>
	<td>is on and before</td>
</tr>
 <tr>
	<td>≥ (greater than or equal to)</td>
	<td>ends with</td>
	<td>is on and after</td>
</tr>
   <tr>
	<td>↔ (between/in range)</td>
	<td>is empty</td>
	<td>is within</td>
</tr>
   <tr>
	<td>is empty</td>
	<td>is not empty</td>
	<td></td>
</tr>
  <tr>
	<td>is not empty</td>
	<td></td>
	<td></td>
</tr>
</table>

## Value Filter 
This filter will allow users to select one or multiple values from the column to filter rows in the grid.
Users can use clear option to clear the selection. Alternatively, they can use Select All option as well.

## Code

```json
config = {
    defaultColumnOptions: {
        filter: {
          enable: true,
          type: 'conditional' // other value is 'value'
        }
    }
};
```

