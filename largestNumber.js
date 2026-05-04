// Largest Number

// Example 1:

// Input: nums = [10,2]
// Output: "210"

// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"


const nums = [3, 30, 34, 5, 9]

// const largestNumber = () => {
//   // const str = nums.join()
//   // console.log(str)

//   const sore = nums.sort((a, b) => a - b);
//   console.log("sore", sore);
//   const stri = nums.toString();// convert to string
//   console.log("stri", stri);
//   const split = stri.split("");//convert to array
//   console.log(split)

//   const sorted = split.sort((a, b) => a - b) // sort the array
//   console.log("sorted", sorted)

//   const numArr = sorted.filter((num) => !isNaN(num) && num !== "")//remove ,or any char except numbers

//   console.log("numArr", numArr);

//   const reversedArray = numArr.reverse()
//   console.log("reversedArray", reversedArray);//reverse the array

//   const result = reversedArray.join("") // convert into single string
//   console.log("result", result);
//   return result
// }

// largestNumber()


const largestNumber = () => {

  const stringNum = nums.map(num => String(num))
  console.log(stringNum)
  const sortedNums = stringNum.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    return ba.localeCompare(ab);
  }
  )
  console.log("sortedNums", sortedNums)

  const result = sortedNums.join("")

  return result[0] === '0' ? '0' : result;

}

largestNumber()