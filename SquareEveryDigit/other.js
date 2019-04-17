function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

//==================================================


function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });

  return parseInt(array.join(""));
}


//==================================================

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};


//==================================================


function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}


//==================================================


function squareDigits(num){
  let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")

  return parseInt(result)
}


//==================================================

function squareDigits(num){
  return +String(num).split('').map(function(num){return +num * +num;}).join('');
}


//==================================================


function squareDigits(num) {
  var str = String(num)
  var res = ''

  for (var i = 0; i < str.length; i++) {
    res += Math.pow(str.charCodeAt(i) - 48, 2)
  }

  return parseInt(res)
}


//==================================================

const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));

//==================================================


function squareDigits(num) { 
  return ~~num.toString().split('').reduce(function(p, c) {
      return '' + p + (~~c*~~c);
  }, '');
}

//==================================================

function squareDigits(num){
  return parseInt(num.toString().split("").map(n => Math.pow(parseInt(n), 2)).join(""))
}


