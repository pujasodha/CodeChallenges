function disemvowel(str) {
    const string = str.split("").filter(letter => {
        let lowerCaseLetter = letter.toLowerCase();
        if(lowerCaseLetter !== 'a' &&
            lowerCaseLetter !== 'e' &&
            lowerCaseLetter !== 'i' &&
            lowerCaseLetter !== 'o' &&
            lowerCaseLetter !== 'u' 
        ) {
            return letter;
        }
    }).join("");
    return string;
  }

//console.log(disemvowel('This website is for losers LOL!'));

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//"===================="

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

//"===================="

disemvowel = str => str.replace(/[aeiou]/gi,'');

//"===================="

function disemvowel(str) {
  var diemvoweledStr = str.replace(/[aeiou]/gi,"");
  return diemvoweledStr;
}

//"===================="

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

//"===================="

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
