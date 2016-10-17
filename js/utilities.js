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

function showDuration()
{
	var maxDuration = document.getElementById("maxDuration");
	var duration = document.getElementByClassName("duration");
	duration.innerHTML = "asd";
}

function add(source)
{
	var val = document.getElementById(source);
	
	val.value++;
	calculate();
}

function minus(source)
{
	var val = document.getElementById(source);
	
	if(val.value != 0)
	{
		val.value--;
	}
	calculate();
}

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
}

function calculate()
{
	var underVal = document.getElementById("underVal");
	var overVal = document.getElementById("overVal");
	var percentage = document.getElementById("percentage");

	percentage.value = parseFloat(parseInt(underVal.value) / (parseInt(underVal.value) + parseInt(overVal.value)) * 100).toFixed(2) + "%";

	if(percentage.value == "NaN%")
	{
		percentage.value = "-";
	}
}

function result()
{
	var percentage = document.getElementById("percentage");
	var percentReq = document.getElementById("percentReq");

	if(percentage.value >= percentReq.value)
	{
		
	}
}

function showYear()
{
	document.write(new Date().getFullYear());
}