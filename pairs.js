/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  // Your code goes here
  if (!names) return []
  let x = names.slice(0)
  
  let result = []
  var i;
  let extra = []

  while (x.length > 0) {
    // let random1 = Math.floor(Math.random()*x.length)
    
    // let var1 = x[random1]
    // x.splice(random1, 1)
    let var1 = x.getRandom()
    if (x.length == 0) {
     
    result.push([var1])
      break

    }
    let random2 = Math.floor(Math.random()*x.length)
    let var2 = x.getRandom()
    let temp = [var1, var2]
    result.push(temp)
    // x.splice(random2, 1)
    console.log(temp)
  }
  return result
}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa',  'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));
