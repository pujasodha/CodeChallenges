
function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function (a, b) { return a - b; });
    return numbers[0] + numbers[1];
};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    var [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;

    var n;
    for (i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if (n < min) {
            secondMin = min;
            min = n;
        } else if (n < secondMin) {
            secondMin = n;
        }
    }

    return min + secondMin;
}
//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);


//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    var smallestNumber = 0,
        secondSmallest = 0;

    smallestNumber = Math.min(numbers[0], numbers[1]);
    secondSmallest = Math.max(numbers[0], numbers[1]);

    for (var index = 2; index < numbers.length; index++) {
        if (numbers[index] < smallestNumber) {
            secondSmallest = smallestNumber;
            smallestNumber = numbers[index];
        } else if (numbers[index] < secondSmallest) {
            secondSmallest = numbers[index];
        }
    }

    return (smallestNumber + secondSmallest);
};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    var lowest = numbers.sort(function (a, b) { return b - a }).slice(-2);
    return lowest.pop() + lowest.pop();
};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    //Code here  

    numbers.sort(compare);

    function compare(a, b) {
        return a - b;
    }

    return numbers[0] + numbers[1];


};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {

    const [a, b] = [...numbers].filter(e => e >= 0).sort((a, b) => a - b);

    return a + b;

};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    if (!(numbers instanceof Array) || numbers.length < 4) return;
    let tempArray = [].concat(numbers);
    const [a, b] = tempArray.sort((a, b) => a - b);
    return a + b;
};

//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    const x = numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((acc, cur) => acc + cur);

    return x;
};


//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a > b).slice(0, 2).reduce((acc, curr) => acc + curr);
};


//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

function sumTwoSmallestNumbers(numbers) {
    var menor = 0;
    menor = Math.min.apply(Math, numbers);
    var resultado = numbers.filter(function (item) { return item !== menor; });
    menor += Math.min.apply(Math, resultado);

    return menor;

};


//=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`

/* var swap = (a, b) => {
  var t = a;
  a = b;
  b = t;
}; */

var partition = (arr, low, high) => {
    var pivot = arr[high];
    var i = low - 1;
    let temp;
    for(var j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        temp = arr[i];
        arr[i] =  arr[j];
        arr[j] = temp;
      }
    }
    temp = arr[i + 1];
    arr[i + 1] =  arr[high];
    arr[high] = temp;
    return (i + 1);
  };
  
  function quickSort(arr, low, high) {
    if (low < high) {
      var pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  function sumTwoSmallestNumbers(numbers) {  
    //Code here
    if (numbers.length <= 0) {
      return -1;
    } else {
      quickSort(numbers, 0, numbers.length - 1);
      return (numbers[0] + numbers[1]);
    }
  };