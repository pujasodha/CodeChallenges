function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}//z.

function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }

//===============================================================================

function diamond(n){
  if (n < 0 || !(n % 2)) return null; 
  const middleIndex = Math.floor(n / 2);
  
  return Array.apply(null, {length: n})
      .map((el, index) => {
        const indentation = Math.abs(index - middleIndex);
        const numberOfAsterisks = n - indentation * 2;
        return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
      })
      .join('\n') + '\n';
}


//===============================================================================

function diamond(n){
  if (n < 0 || n % 2 == 0) return null;
  for (var i = 0, diamond = ''; i < n; i++) {
    var stars = n - Math.abs(n - 2*i - 1);
    var spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += ' ';
    while (stars-- > 0) diamond += '*';
    diamond += '\n';
  }
  return diamond;
}

//===============================================================================

function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}


//===============================================================================

function diamond(n){
  if(typeof n != 'number' || n%2 == 0 || n<0){
    return null;
  }
  var c = (n+1)/2;
  var s = '';
  for(var i=1;i<=n;i++){
    var a = new Array(Math.abs(c-i)+1).join(' ');
    var b = new Array(n-2*Math.abs(c-i)+1).join('*');
    s +=(a+b+'\n');
  }
  return s;
}


//===============================================================================