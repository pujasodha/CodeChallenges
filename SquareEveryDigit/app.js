/*
 * Square each digit 
 *
 * @param  {Number} num 
 * @return {Number} 
 */

const squareDigits = function(num){
  let string = num.toString();
  let i, rtnString = "";
  
  for(i = 0; i < string.length; i+=1) {
    rtnString += (parseInt(string[i]) * parseInt(string[i])).toString();
  }

  return parseInt(rtnString);
  
}

// console.log(squareDigits(9119));
module.exports = squareDigits;