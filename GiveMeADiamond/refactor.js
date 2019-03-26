/**
 * @param  {Number} n Number of *'s in the middle row
 * @return {String}   The string of the diamond
 */

function diamond(n){
  if(n % 2 !== 1 || n <= 0) {
    return null;
  }
  let half = Math.floor(n/2);
  let i, stars = "*", start = "", end = "", space = " ", spaceCount = half, starCount = 1;
  let middle = `${stars.repeat(n)}\n`;

  for(i = 0; i < half; i+=1){
    let row = "";
    row += `${space.repeat(spaceCount)}${stars.repeat(starCount)}\n`; 
    spaceCount-=1;
    starCount+=2;
    start = start + row;
    end = row + end;
  }

  return start + middle + end;
}

//console.log(` *\n***\n *\n`);
//console.log(diamond(5));
console.log(diamond(3));
// console.log(diamond(2));
