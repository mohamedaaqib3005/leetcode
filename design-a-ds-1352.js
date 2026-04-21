// Input
// ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
// [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

// Output
// [null,null,null,null,null,null,20,40,0,null,32]

// Edgecases:
// if 0 is also added in between the numbers


// since they asked constant time u need to have a cumulative or else u ll have go through everything and create product again
// // Brute Force:
// if we had to find the product last k numbers we ll have to find the product of the last k numbers so time complexity will be 0(k)
// we want to do better we want to get constant
// take the arguments  from the args array and from the insert array take all the elements and  create a cumulative product array and


const funcArray = ["ProductOfNumbers", "add", "add", "add", "add", "add", "getProduct", "getProduct", "getProduct", "add", "getProduct"]

const argsArray = [[], [3], [0], [2], [5], [4], [2], [3], [4], [8], [2]]

const returnValueArray = [null, null, null, null, null, null, 20, 40, 0, null, 32]

// const funcPairs = funcArray.entries()
// console.log(funcPairs)
let insertArray = [];
let cumulativeProductArray = [1]; //prefix
// returns an array for addIndex,productArray,getPRoductArray

// adds element to insertArray and cumulativeProductArray
const add = (num) => {
  insertArray.push(num)
  if (num === 0) {
    cumulativeProductArray = [1];
  } else {
    const lastProduct = cumulativeProductArray[cumulativeProductArray.length - 1];
    cumulativeProductArray.push(lastProduct * num);
  }
};
//add(3),add(0),add(2),add(5),add(4),add(8)
// insertarray = [3,0,2,5,4,8]

// adds cumulative product of insertArray
// productOfNumber(insertArray)
//cumulativeProductArray = [3, 0, 0, 0, 0, 0]

// returns an array of last k elements from cumulativeProductArray;
const getProduct = (k) => {
  if (k >= cumulativeProductArray.length) return 0;
  const totalProduct = cumulativeProductArray[cumulativeProductArray.length - 1];
  const producto
  return cumulativeProductArray[cumulativeProductArray.length - 1] / //product(last k) = total product / product before last k
    cumulativeProductArray[cumulativeProductArray.length - 1 - k];
};

//for eg: getProduct(3)
// product = [0] product of last k elements
function loopThroughInput(funcArray) {
  const result = [];
  for (let i = 0; i < funcArray.length; i++) {
    const func = funcArray[i];
    const args = argsArray[i];

    if (func === "ProductOfNumbers") {
      result.push(null);
    } else if (func === "add") {
      add(args[0]);
      result.push(null);
    } else if (func === "getProduct") {
      result.push(getProduct(args[0]));
    }
  }
  return result;
}

loopThroughInput(funcArray);

// if there are 2 ifs both run
// indexOf() wrong arr.indexof() returns first index
// arr.entries returns [[index,value]]