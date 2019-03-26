/**
 * @param  {Number} n Number of *'s in the middle row
 * @return {String}   The string of the diamond
 */

function diamond(n){
  if(n % 2 !== 1 || n <= 0) {
    return null;
  }
  let i, diam = "";
  let stars = "*";
  let start = "";
  let end = "";
  let space = " ";
  let newLine = "\n";
  let half = Math.floor(n/2);
  let spaceCount = half;
  let starCount = 1;
  for(i = 0; i < half; i+=1){
    let row = '';
    row += `${space}`.repeat(spaceCount) + `${stars}`.repeat(starCount) + newLine; 
    spaceCount-=1;
    starCount+=2;
    start = start + row;
    end = row + end;
  }

  diam = start + stars.repeat(n) + newLine + end;
  
  return diam;
}

//console.log(` *\n***\n *\n`);
//console.log(diamond(5));
console.log(diamond(3));
console.log(diamond(2));
console.log(diamond(3));

