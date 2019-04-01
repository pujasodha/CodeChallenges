function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

//========================================

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

//========================================

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

//========================================

function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length : 0;
}

//========================================

const getCount = str => str.replace(/[^aeiou]/g, '').length;

//========================================

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


//========================================


function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
  }

//========================================