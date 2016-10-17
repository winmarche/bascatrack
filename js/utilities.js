/* 	@licstart
	The MIT License (MIT)

	Copyright (c) 2016 Winston Mark Cheng

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be included
	in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	@licend*/

/*utilities.js
	This JavaScript file provides the website features such as,
	calculating the stats, changing the values, displaying the
	current year, without having to manually change it each year
	and without the need of PHP.*/

/*showDuration() function:
	Function for showing the maximum duration. This function
	does not currently work*/
function showDuration()
{
	var maxDuration = document.getElementById("maxDuration");
	var duration = document.getElementByClassName("duration");
	duration.innerHTML = "asd";
}

/*add() function:
	Function for incrementing the value for the number of calls
	under or over the maximum duration and calls the calculate()
	function*/
function add(source)
{
	var val = document.getElementById(source);
	
	val.value++;

	calculate();
}

/*minus() function:
	Function for decrementing the value for the number of calls
	under or over the maximum duration and calls the calculate()
	function*/
function minus(source)
{
	var val = document.getElementById(source);
	
	if(val.value != 0)
	{
		val.value--;
	}

	calculate();
}

/*reset() function:
	Function for clearing all input made by the agent and hiding
	the results*/
function reset()
{
	var percentReq = document.getElementById("percentReq");
	var maxDuration = document.getElementById("maxDuration");
	var underVal = document.getElementById("underVal");
	var overVal = document.getElementById("overVal");
	var percentage = document.getElementById("percentage");

	percentReq.value = "";
	maxDuration.value = "";
	underVal.value = "0";
	overVal.value = "0";
	percentage.value = "-";

	$("#pass").hide();
	$("#fail").hide();
}

/*calculate() function:
	Function for calculating the number of calls the agent has under
	or over the maximum duration they should have on their calls and
	show the percentage result of their progress and calls the result()
	function to display if the agent has met their performance target*/
function calculate()
{
	var underVal = document.getElementById("underVal");
	var overVal = document.getElementById("overVal");
	var percentage = document.getElementById("percentage");

	percentage.value = parseFloat(parseInt(underVal.value) / (parseInt(underVal.value) + parseInt(overVal.value)) * 100).toFixed(2) + "%";

	//Hides results and shows '-' if there is no percentage value
	if(percentage.value == "NaN%")
	{
		percentage.value = "-";
		$("#pass").hide();
		$("#fail").hide();
	}

	result();
}

/*result() function:
	Function for displaying whether the agent have met the performance
	target based on the target they've entered in percentage. This
	will then compare the current agent's performance and compare it
	with the target performance and determine if the agent has met it
	or not. The text for passing and failing will either be shown or
	hidden, based on their result.*/
function result()
{
	var percentage = document.getElementById("percentage");
	var percentReq = document.getElementById("percentReq");

	if(percentReq && parseInt(percentage.value) >= parseInt(percentReq.value))
	{
		$("#fail").hide();
		$("#pass").show();
	}
	else if(percentReq && parseInt(percentage.value) < parseInt(percentReq.value))
	{
		$("#pass").hide();
		$("#fail").show();		
	}
	else
	{
		$("#pass").hide();
		$("#fail").hide();		
	}
}

/*showYear() function:
	Function for displaying current year*/
function showYear()
{
	document.write(new Date().getFullYear());
}