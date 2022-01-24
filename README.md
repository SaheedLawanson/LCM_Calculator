# LCM

# Built with
- JavaScript

# Overview
An LCM (Lowest Common Multiple) of a set of numbers is the lowest number that is divisible by all the numbers in that set.
For example: LCM of 2, 4, 10 is 20, numbers: 40, 80, 100 are CMs (common multiples) but not the LCM.

The function smallestCommons takes a single argument which is an array containing two integers. It calculates the LCM of 
all numbers between the item with the lower value and the item with the higher value. smallestCommons([5,1]) returns the
LCM of 1, 2, 3, 4, and 5


# Algorithm
1. We define a function (recursive) that takes in two integers (a and b) and recursively calculates the product of all numbers
   between a and b with a & b inclusive

2. the function smallest commons starts by sorting its argument (arr) to ensure the lower number is always on the left and the
   the higher number is on the right

3. next we call the "recursive" function supplying it with the left and right integers of the sorted "arr" as arguments to find
   the highest common multiple which serves as an upper boundary, the LCM can never be more than this value

4. the multiples of the higher number are calculated and stored in a list called "hcmRange"

5. We iterate through every integer value between a and b (a & b inclusive) and check if "hcmRange" is divisible by all of them

6. The first multiple in hcmRange that is divisible by all the values is the LCM and we return that multiple
