// Valid Palindrome




Edgecases:
s = "" -- > true
s = "race a car" -- > false
s = ""
s = ""

Brute Force:
// Filter out all the nonaphanumeric characters
// Make all the characters lowercase
// Create a new copy of the array
// Reverse the copied array
// Compare each char of original array with the copied array
// If all the chars match then it is a palindrome

Optimal Approach
// Create new pointers left and right
// move left pointers right and right pointer left
// if it is a nonalphanumeric char move the pointer
// if it is a number check if the numbers match
// if its a alphabet then the difference between should be 0 or differnce of lowercase and uppercase difference
