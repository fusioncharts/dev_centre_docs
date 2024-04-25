---
title: Data Aggregation | FusionCharts
description: Discover data aggregation and its functions for comprehensive data analysis and insights. Unlock the power of aggregation for your data processing needs.
heading: Data Aggregation
---

**Aggregation** functions are used to aggregate your data. For instance, consider a scenario, where you have a huge Sales data in tabular format. Now, if you want the total sales or an average sale from a tabular sales data you need to apply aggregation function to get the desired data. 

When you apply `Aggragation` to a DataModel, it transforms it and creates a new DataModel.

Aggregation functions can be applied to **n** number of fields of the DataModel which generates a new DataModel with the resultant data.

The supported aggregation functions are listed below:

* SUM
* COUNT
* AVERAGE
* MAX
* MIN

In this article, we will apply all the above operations and check the result based on the tabular data shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | South Africa | 110.808 | 3 | 9.92 
1/24/2011 | China | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 4 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | Japan | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## SUM

**SUM** is a function which can be used when you have a list of numeric data and you want to calculate the sum of it. In the above tabular data, to calculate the sum of the values in **Sales** column, set the **SUM** function as shown in the code below:

```
Aggregation aggregateSum = new Aggregation {
	"Sales", Aggregation.Function.SUM
};
DataModel totalSum = model.Aggregate(aggregateSum);
```

In the above code:

* **Aggregation** is a class.
* **aggregateSum** is an object which holds information of the data to be aggregated.
* **Sales** is the column name on which the aggregation function will be applied.
* In `Aggregation.Function.SUM`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.
* **DataModel** is a class.
* **totalSum** is the object which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Sales</th>
	</tr>
	<tr>
		<td>829.258</td>
	</tr>
</table>

## COUNT

**COUNT** is a function which can be used when you want to count the number of rows of a column in the DataModel.

The code to apply the **COUNT** function is shown below:

```
Aggregation aggregateCount = new Aggregation {
	"Country", Aggregation.Function.COUNT
};
DataModel noOfCountry = model.Aggregate(aggregateCount);
```

In the above code:

* **Aggregation** is a class.
* **aggregateCount** is an object which holds information of the data to be aggregated.
* **Country** is the column name on which the aggregation function will be applied.
* In `Aggregation.Function.COUNT`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.
* **DataModel** is a class.
* **noOfCountry** is the object which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Country</th>
	</tr>
	<tr>
		<td>9</td>
	</tr>
</table>

## Average

**AVERAGE** is a function which can be used when you have a list of numeric data and you want to calculate the average of it. In the above tabular data, to calculate the average of the values in **Quantity** column, set the **AVERAGE** function as shown in the code below:

```
Aggregation aggregateAverage = new Aggregation {
	"Quantity", Aggregation.Function.AVERAGE
};
DataModel finalAverage = model.Aggregate(aggregateAverage);
```

In the above code:

* **Aggregation** is a class.
* **aggregateAverage** is an object which holds information of the data to be aggregated.
* **Quantity** is the column name on which the aggregation function will be applied.
* In `Aggregation.Function.AVERAGE`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.
* **DataModel** is a class.
* **finalAverage** is the object which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Sales</th>
	</tr>
	<tr>
		<td>4</td>
	</tr>
</table>

## MAX

**MAX** is a function which can be used when you have a list of numeric data and you want the largest value of the list. In the above tabular data, if you want the largest **Sales** value, set the **MAX** function as shown in the code below:

```
Aggregation aggregateMax = new Aggregation {
	"Sales", Aggregation.Function.MAX
};
DataModel maxValue = model.Aggregate(aggregateMax);
```

In the above code:

* **Aggregation** is a class.
* **aggregateMax** is an object which holds information of the data to be aggregated.
* **Sales** is the column name on which the aggregation function will be applied.
* In `Aggregation.Function.MAX`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.
* **DataModel** is a class.
* **maxValue** is the object which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Sales</th>
	</tr>
	<tr>
		<td>342.51</td>
	</tr>
</table>

## Min

**MIN** is a function which can be used when you have a list of numeric data and you want the lowest value of the list. In the above tabular data, if you want the lowest **Sales** value, set the **MIN** function as shown in the code below:

```
Aggregation aggregateMin = new Aggregation {
	"Sales", Aggregation.Function.MIN
};
DataModel minValue = model.Aggregate(aggregateMin);
```

In the above code:

* **Aggregation** is a class.
* **aggregateMin** is an object which holds information of the data to be aggregated.
* **Sales** is the column name on which the aggregation function will be applied.
* In `Aggregation.Function.MIN`, **Function** is an enum of **Aggregation** class which specifies the function to be applied on the data.
* **DataModel** is a class.
* **minValue** is the object which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Sales</th>
	</tr>
	<tr>
		<td>5.94</td>
	</tr>
</table>
