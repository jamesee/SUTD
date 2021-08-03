from org.transcrypt.stubs.browser import *
import random

array = []

def gen_random_int(number, seed):
	result = list(range(0, number))
	random.seed(seed)
	random.shuffle(result)
	return result

def generate():
	global array

	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the global variable array

	array = gen_random_int(number, seed)
	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.

	array_str = to_array_str(array)

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

def to_array_str(array):
	return (','.join(map(str,array)) + '.')

def bubble_sort4(array):
    is_sorted = False
    n = len(array)
    while (is_sorted == False):
        is_sorted = True
        sort_n = 0
        for i in range (1,n):
            if array[i] < array[i-1]:
                array[i], array[i-1] = array[i-1], array[i]
                is_sorted = False
                sort_n = i
        n = sort_n

def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the global variable array and 
			copy it to a new list
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	global array
	num_list = array[:]

	bubble_sort4(num_list)
	array_str = to_array_str(num_list)
	
	document.getElementById("sorted").innerHTML = array_str

def is_number(string):
	# Function to ensure that input consists of numbers
	# Allow negative and float numbers as well
	if string.replace(",","").replace(" ","").replace("-","").replace(".","").isnumeric():
		return True
	else:
		return False

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Throw alert and stop if text input is not numeric
	
	if not is_number(value):
		window.alert("Please enter numbers separated by a comma (','):")
		return

	# Your code should start from here
	# store the final string to the variable array_str
	
	num_list = [float(n) for n in value.replace(" ","").split(",")]

	bubble_sort4(num_list)
	array_str = to_array_str(num_list)

	document.getElementById("sorted").innerHTML = array_str


