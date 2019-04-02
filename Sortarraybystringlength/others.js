
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
};


//========================================

let sortByLength = arr => arr.sort((a, b) => a.length - b.length);

//========================================

function sortByLength(array) {
    return array.sort((x, y) => x.length - y.length);
};


//========================================

function sortByLength(array) {
    let sort = array.sort(function (a, b) {
        return a.length - b.length;
    });

    return array;

};

//========================================

const sortByLength = array => array.sort((a, b) => a.length - b.length)


//========================================

function sortByLength(array) {
    let shortestWord = array.sort(function (a, z) {
        return a.length - z.length;
    });
    return shortestWord;
};


//========================================

function sortByLength(array) {
    return array.slice().sort((a, b) => a.length - b.length);
  }


//========================================

function sortByLength(a) {
    return JSON.parse(JSON.stringify(a)).sort((a, b) => a.length - b.length);
  }


//========================================

"use strict"
function compareNumeric(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
}

function sortByLength (array) {
  let arrayL = array.map((value) => {
    return value.length;
  })
  arrayL = arrayL.sort(compareNumeric);
  let resArr = arrayL.map((value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length === value) {
        return array[i];
      }
    }
  })
  return resArr;
};

//========================================

l='length',sortByLength=a=>a.sort((a,b)=>a[l]-b[l])

//========================================

function sortByLength (array) {
    return array.sort(function(a,b){
      return a.length - b.length;
    });
  };
//========================================
//========================================