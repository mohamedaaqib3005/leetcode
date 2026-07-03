// Union of two sorted arrays - Striver

// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays.The elements in the union must be in ascending order.



// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.


//   Example 1

// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

// Output: [1, 2, 3, 4, 5, 7]

// Explanation:

// The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// Example 2

// Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

// Output: [1, 3, 4, 5, 6, 7, 8, 9]

// Explanation:

// The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2

const nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]
const getunionTwoSortedArray = () => {
  //  Spread both sorted arrays in a new array
  const unionSortedArray = [...nums1, ...nums2];
  // sort the new array
  unionSortedArray.sort((a, b) => a - b);
  // iterate through the new union sorted array
  for (let i = 0; i < unionSortedArray.length; i++) {
    // nested loop inside it to check if they are duplicates
    for (let j = i + 1; j < unionSortedArray.length; j++) {
      if (unionSortedArray[i] === unionSortedArray[j]) {
        unionSortedArray.splice(j, 1)
        j--;
      }
    }
  }
  // return the final array without duplicates
  return unionSortedArray;

}

// Time: O((n + m)²)
// Space: O(n + m)

// can we do better

// using hashmap
const unionArray = () => {
  // merge both the arrays
  const unArray = [...nums1, ...nums2];
  // create a hashmap to remove duplicates
  const frequencies = {}
  for (let num of unArray) {
    if (!(num in frequencies)) {
      frequencies[num] = 1;
    }
  }
  console.log("frequencies", frequencies);
  // convert the frequencies hashmap into array
  const unionSorted = Object.keys(frequencies).map(key => Number(key));
  // sort the array
  return unionSorted.sort((a, b) => a - b);
}


// Complexity
// spreading - O(n + m) = O(k)
// creating hashmap - O(k)
// converting into array of keys -O(k)
// converting all the elements into Number - O(
// sorting - nlog(k)

// Time complexity - hashmap approach: nlog(k)

can we do better
// Two Pointer Approach
const unionSortedArray = () => {
  create a new array
  create two pointers left and right
  compare both pointers value
  if left is lesser than right move left forward
  else move right
if the left or right is smaller then push in array
if right and left are equal then push but if there are duplicates dont again push
return the new array
}

// Two Pointer Approach

Create an empty result array.
merge both input arrays nums1 and nums2
Create two pointers:
left = 0
right = nums1.length - 1


    Compare left and right

    If left < right
        Add left to the result(only if it isn't already the last element)
        Move left pointer forward

    Else if right < left:
        Add right to the result(only if it isn't already the last element)
        Move right pointer forward

Else:
        // Both values are equal
        Add the value once(only if it isn't already the last element)
        Move both pointers forward

After one array finishes:

    Add all remaining elements from nums1
  (again, avoid duplicates)

    Add all remaining elements from nums2
  (again, avoid duplicates)

Return the result.


// Learnings
// sort function's comparator function is only responsible to tell which is greater out of a and b
// we cannot modify within the comparator function
// The order and number of comparisons are implementation details. If you change the array while the sort algorithm is working, the behavior becomes unreliable.
// splice (index,noofelement,replacementelement) it takes index not value
// if u dont do -- in a loop there are chances of skipping an element
// if (!num in frequencies) it evalutes to not value which is false
// Object.keys(frequencies).number is wrong number is not a method Object.keys(frequencies).number