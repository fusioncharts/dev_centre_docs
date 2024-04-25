---
title: Filter Data | FusionCharts
description: Explore the power of the Filter operation in generating a new DataModel with filtered data from a large dataset. Dive into the article for more details.
heading: Filter Data
---

**Filter** is an operation used to filter data values from a large dataset, based on one or more conditions. If you apply one of these operations on the DataModel, it generates a new DataModel with the filtered data.

## Types of filters

The predefined filters are:

* Null
* Not Null
* Equal
* Not Equal
* Greater
* Greater or Equal
* Less
* Less or Equal
* Between
* Begins with
* Contains
* Ends with

In this article, we will apply all the above filter operators and check the result based on the DataTable shown below:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## Null

**Null** is a filter operator which can be used to find any **Null** data.

In the above tabular data, the **Country** column consists of three countries. The code to filter **Null** data is given below:

```
DataModel nullOperation = model.Where("Country is null");
```

In the above code:

* **DataModel** is a class.
* `nullOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

<table>
	<tr>
		<th>Order Date</th>
		<th>Country</th>
		<th>Sales</th>
		<th>Quantity</th>
		<th>Shipping Cost</th>
	</tr>
	<tr>
		<td>		</td>
		<td>		</td>
		<td>		</td>
		<td>		</td>
		<td>		</td>
	</tr>
</table>

The above table is empty because there is no Null value in the above data of the DataModel.

## Not Null

**Null** is a filter operator which can be used to find all the data except the **Null** data.

In the above tabular data, the **Country** column consists of three countries. The code to filter **not** **Null** data is given below:

```
DataModel notNullOperation = model.Where("Country is not null");
```

In the above code:

* **DataModel** is a class.
* `notNullOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

The above output consists of all the rows of the tabular data which means there is no Null value in the above data of the DataModel.

## Equal

**Equals** is a filter operator which can be used when you want to filter specific data value.

In the above tabular data, the **Country** column has three countries. The code to filter the data for **United States,** is given below:

```
DataModel equalOperation = model.Where("Country = United States");
```

In the above code:

* **DataModel** is a class.
* `equalOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | United States | 5.94 | 3 | 0.95

## Not Equal

**Not Equals** is a filter operator operation which can be used when you want to omit some  specific data value.

In the above tabular data, the **Country** column has three countries. The code to omit the data for **United States** is given below:

```
DataModel notEqualOperation = model.Where("Country != United States");
```

In the above code:

* **DataModel** is a class.
* `notEqualOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## Greater

**Greater** is a filter operator which can be used when you want to filter the data values greater than a specific numeric value.

In the above tabular data, the **Sales** column consists of numeric value. Let's apply the `greater` operator to filter the values greater than **100**.

```
DataModel greaterOperation = model.Where("Sales > 100");
```

In the above code:

* **DataModel** is a class.
* `greaterOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/26/2011 | India | 342.51 | 7 | 13.22 

## Greater or Equal

This filter operator is similar to **greater** filter which can be used when you want to filter the data values greater than a specific numeric value. Greater or Equal operation is used when you want to filter the data values greater and equal to the specific value.

In the above tabular data, the **Quantity** column consists of numeric value. Let's apply the Greater or Equal operator to filter the values greater and equal to **3**.

```
DataModel greaterEqualOperation = model.Where("Quantity >= 3");
```

In the above code:

* **DataModel** is a class.
* `greaterEqualOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## Less

**Less** is a filter operator which can be used when you want to filter the data values less than a specific numeric value.

In the above tabular data, the **Sales** column consists of numeric value. Let's apply the **Less** operator to filter the values less than **100**.

```
DataModel lessOperation = model.Where("Sales < 100");
```

In the above code:

* **DataModel** is a class.
* `lessOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

## Less or Equal

This filter operator is similar to **less** filter which can be used when you want to filter the data values less than a specific numeric value. **Less or equal** operation is used when you want to filter the data values less and equal to the specific value.

In the above tabular data, the **Quantity** column consists of numeric value. Let's apply the **less or equal** operator to filter the values less than and equal to **3**.

```
DataModel lessEqualOperation = model.Where("Quantity <= 3");
```

In the above code:

* **DataModel** is a class.
* `lessEqualOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 

## Between

**Between** is a filter operator which can be used when you want to filter the data between specific date/time or value.

In the above tabular data, the **Order Date** column consists of date/time values. Let's apply the **between** operator to filter the values from **1/22/2011** to **1/24/2011**.

```
DataModel betweenOperation = model.Where("Order Date is between 1/22/2011 to 1/24/2011");
```

In the above code:

* **DataModel** is a class.
* `betweenOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95

## Begins with

**Begins with** is a filter operator which can be used when you want to filter a string data which begins with a specific string value.

In the above tabular data, the Country column consists of string values. Let's apply the **begins with** operator to filter the Countries whose name begins with **A**.

```
DataModel beginsWithOperation = model.Where("Country begins with A");
```

In the above code:

* **DataModel** is a class.
* `beginsWithOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92

## Contains

**Contains** is a filter operator which can be used when you want search specific data using a particular string value. 

Contains operator can search:

* A word or phrase.
* The prefix of a word or phrase.
* A word near another word.

In the above tabular data, the Country column consists of string values. Let's apply the **contains** operator to filter Countries which contains "**d**".** **

```
DataModel containsOperation = model.Where("Country contains d");
```

In the above code:

* **DataModel** is a class.
* `containsOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/24/2011 | United States | 5.94 | 3 | 0.95 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## Ends with

**Ends with** is a filter operator which can be used when you want to filter a string data which ends with a specific string value.

In the above tabular data, the Country column consists of string values. Let's apply the **ends with** operator to filter the Countries whose name ends with **a**.

```
DataModel endsWithOperation = model.Where("Country ends with a");
```

In the above code:

* **DataModel** is a class.
* `endsWithOperation` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22

## Logical Operator

FusionCharts DataEngine supports logical operators which filters the data based on some condition. In this section we will discuss about:

* `AND` &
* `OR` operators

### `AND` Operator

`AND` operator is used when you want to combine multiple conditions like Between, Equals or Greater.

In the above tabular data, the **Order Date** column consists of date/time values and the **Country** column has three countries. The code to filter the data for **United States** from **1/22/2011** to **1/24/2011** is given below:

```
DataModel andOperator = model.Where("Order Date is between 1/22/2011 to 1/24/2011 and Country = United States");
```

In the above code:

* **DataModel** is a class.
* `andOperator` is an instance of the DataModel which holds the resultant data.
* Between filter operation filters the **Order Date** column to the specified date/time.
* Equals filter operation filters the **Country** column to United States.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | United States | 125.248 | 3 | 3.64 
1/24/2011 | United States | 40.08 | 6 | 4.31 
1/24/2011 | United States | 5.94 | 3 | 0.95

### `OR` Operator

`OR` operator is used when you want to combine multiple conditions like Between, Equals or Greater. The output filtered will be based on one of the conditions.

In the above tabular data, the Country column has three countries. To combine more than one conditions, use more than one OR as part of the WHERE clause. The code to filter the data for Countries starting from **I** and **A** is given below:

```
// Name starts with M or Name starts with L
DataModel orOperator = model.Where("Name starts with I or Name starts with A");
```

In the above code:

* **DataModel** is a class.
* `orOperator` is an instance of the DataModel which holds the resultant data.

The output after running the above code looks like:

Order Date | Country | Sales | Quantity | Shipping Cost
---|---|---|---|--- 
1/22/2011 | Australia | 59.724 | 6 | 27.43
1/22/2011 | Australia | 6.318 | 1 | 1.77
1/24/2011 | Australia | 110.808 | 3 | 9.92 
1/24/2011 | India | 59.25 | 5 | 4.27 
1/26/2011 | India | 79.38 | 3 | 13.82 
1/26/2011 | India | 342.51 | 7 | 13.22
