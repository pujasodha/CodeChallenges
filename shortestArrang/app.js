function testSample(){
    Test.assertSimilar(shortestArrang(10),[4, 3, 2, 1]);
    Test.assertSimilar(shortestArrang(14),[5, 4, 3, 2]);
    Test.assertSimilar(shortestArrang(16),[-1]);
    Test.assertSimilar(shortestArrang(22),[7, 6, 5, 4]);
    Test.assertSimilar(shortestArrang(65),[33, 32]);
}

function longestArray(n) {
    //sum each number starting from the index 0
    //add until sum = 65
    //if sum > 65
    //then remove the lowest index
    //until sum = 65 no longer sum > 65
    //if sum < 65
    //then continue to add next highest index
    //loop back

    // [1,2,3,4,5,6,7,8,9,10]
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    
    let sum = 0, i;
    let array = [];
    for(i = 1; i < n; i+=1){
        sum+=i;
        array.push(i);
        if(sum === n){
            return array;
        } 
        else if(sum > n) {
            while(sum > n){
                let subtract = array.shift();
                sum-=subtract;
            }
            if(sum === n){
                return array;
            }
        }
    }
    
    return [-1];
}

function shortestArrang(n) {

    //first attempt was done incorrectly, was backwards
    let sum = 0, i, array = [];
    for(i = (n-1); i > 0; i-=1){
        sum+=i;
        array.push(i);
        
        if(sum === n) {
            return array;
        }
        else if(sum > n) {
            while(sum > n) {
                let subtract = array.shift();
                sum-=subtract;
            }

            if(sum === n){
                return array;
            }
        }
    }

    return [-1];
}

// console.log(shortestArrang(14));

// ================================================ ONLINE ANSWERS ========================================= //

function shortestArrang(n) {  
    let sum = 0,
        arr = [],
        start = Math.ceil(n / 2),
        foundAnswer = false;
    
    while (!foundAnswer) {
      for (let i = start; i > 0; i--) {
        arr.push(i);
        sum += i;
        
        if (sum > n) {
          arr = [];
          sum = 0;
          i = start;
          start--;
        } else if (sum === n) {
          foundAnswer = true;
          return arr;
        }
      }
      return arr = [-1]
    }
  }

  // ==== //
  
  function shortestArrang(n){
      for(let l=2; l*l<2*n; l++) if(2*(n/l%1)===(l+1)%2) return [...Array(l)].map((_,i)=>(n/l)+(l-1)/2-i)
      return [-1];
    }
  
    // ==== //

// most solutions are O(n^2)... this is O(n)

function shortestArrang(n) {

    if (Math.log2(n) % 1 === 0)
      return [ -1 ];
      
    let term = n / 2 | 0
    ,  total = term * 2 + 1
    , result = [ term + 1, term ];
    
    while (total != n) {
      if (total > n)
        total -= result.shift();
      
      total += --term;
      result.push(term);
    }
    
    return result;
    
  }

    // ==== //

    function shortestArrang(n) {
    let bingo = []
        console.log('n', n)
        if (n % 2) {
            bingo = [((n - 1)/2) + 1, ((n - 1)/2) ]
        }
            else if (n == 40) return [10, 9, 8, 7, 6]
            else if (n == 20) return [6, 5, 4, 3, 2]
            else if (n == 28) return [7, 6, 5, 4, 3, 2, 1]
            else if (n == 56) return [11, 10, 9, 8, 7, 6, 5]
            else if (n == 52) return [10, 9, 8, 7, 6, 5, 4, 3]
            else if (n == 44) return [9,8,7,6,5,4,3,2]
            
        else if (n % 3 == 0){
            bingo = [(n/3) + 1, (n/3), (n/3) - 1]
        }
    
        else if (n % 4 == 0){
        
            bingo = [((n*2/3)/2) + 1, ((n*2/3)/2), ((n*2/3)/2) - 1 ] 
            }
            
        else{
        console.log('lalala')
            let mid = n/4
            bingo = [(mid +1.5), (mid + .5), (mid - .5), (mid - 1.5)]
        }
        return bingo[0] !== Math.floor(bingo[0]) ? [-1] : bingo
    }

    // ==== //

    function shortestArrang(n) {
        var start = 0, sum = 0
        var res = []
        for(var i = 1; i * (i + 1) < 2 * n; i++){
            var a = (1.0 * n - (i * (i + 1) / 2)) / (i + 1);
            if(a == parseInt(a)){
              start = a; break
            }
        }
        if(start == 0) return [-1]
        for(var i = start; sum < n; sum += i, i++) res.push(i)
        return res.reverse()
    }

    // ==== //

    function shortestArrang(n) {
        if (n % 2 !== 0) {
          const lastNumber = Math.round(n / 2);
          returnArr = Array.from({length: 2}, (v, k) => lastNumber - k);
          return returnArr;
        }
        const length = n / 2;
        result = Array.from({length: length}, (v, k) => k+1).reverse();
        
        let sliceNum = 3;
        let newArr = result;
        let valueReturn = '';
        
        const arrFunction = (arr, num) => {
    
            let sum = arr.reduce((a,b,i) => i < num ? a + b : a);
            
            
            if(sum == n){
              const lastRes = newArr.slice(0, sliceNum);
              valueReturn = lastRes;
              
            }else if (sum > n){
                newArr = newArr.slice(1);
                arrFunction(newArr, sliceNum);
                
            }else if (sum < n && sliceNum < newArr.length  ){
              sliceNum += 1;
              arrFunction(newArr, sliceNum);
              
            }else{
              valueReturn = [-1];
              
            }
            return valueReturn;
        }
        
        return arrFunction(result, sliceNum);
    };

    // ==== //

    function shortestArrang(n) {
        const startingGroupSize = Math.ceil(n/2);
        let groupSize = startingGroupSize;
        let check = true;
        let result = [-1];
      
        for ( let i = groupSize; check && i > 0; --i ) { 
          let arrang=[];
          // Creates array of group sizes
          for (let j = i; j > 0; --j) {
            arrang.push(j);
            //console.log(arrang)
          };
          let remaining = n;
          let possible = [];
          let endLoop = false;
          for (let k = 0; k < arrang.length; k++) {
            if (!endLoop && (remaining - arrang[k]) >= 0) {
              possible.push(arrang[k]);
              remaining = remaining - arrang[k];
            } else {
            endLoop = true;
            }
          }
          if (possible.reduce((acc, cur) => acc + cur) === n) {
            check = false;
            result = possible;
          }
        }
        return result;
      }

    // ==== //

    function shortestArrang(n){
        var twoPower = 0, i = 3, j = 0, groups = []
        while(true){
          if(n%Math.pow(2,twoPower+1) == 0){
            ++twoPower
          }else{
            if(n/Math.pow(2,twoPower)==1){
              return [-1]
            } else {
              twoPower = Math.pow(2,twoPower)*2
              break
            }
          }
        }
        while(i < twoPower){
          if(n % i == 0){
            n /= i
            twoPower = Math.floor(i/2)
            while(j < i){
              groups.push(n + twoPower)
              --twoPower
              ++j
            }
            return groups
          }
          i += 2
        }
        n /= twoPower
        i = twoPower/2 -0.5
        while(j < twoPower){
          groups.push(n + i)
          --i
          ++j
        }
        return groups
      }

    // ==== //

function shortestArrang(n) {
  if (n%2) return n>1?[(n+1)/2,(n-1)/2]:[-1]
  for(var i=2;i*(i-1)/2<=n;i++)
    if((n-i*(i-1)/2)%i==0) return Array.from({length:i},(_,j)=>(n-i*(i-1)/2)/i+i-j-1)
  return [-1]
}

    // ==== //

function shortestArrang(n) {
    for (let i = 1, j = 2, d = 0; i < n; i++, j++) {
      d += i;
      if ((n - d) % j === 0) {
        let s = (n - d) / j;
        return new Array(j).fill(0).map(e => s++).reverse();
      }
    }
    return [-1];
  }

// ==== //

function shortestArrang(n) {
    debugger;
    let arrangement = [];
    firstTimeThrough = true;
  
    // iterate backwards to get smallest group
    for(let i= n-1; i > 0; i--){
      let success = computeGroupings(i, n);
  
      if(success && (success.length < arrangement.length || firstTimeThrough )){
        // We don't have any arrangement arr at the beginning, so first time thru, if you have anything
        // Then add it, without comparing length
        firstTimeThrough = false;
        arrangement = success;
      }
    }
    return arrangement.length ? arrangement : [-1];
  }
  
  function computeGroupings(startNum, totalNum){
    // Have we gone over the num?
    notOver = true, temporary = [];
  
    // Find the groups we can have for this number 
    while(notOver){
    
    if(startNum === 0 && temporary.reduce(addition) < totalNum){
      return false;
    }
  
      temporary.push(startNum);
  
      if(temporary.reduce(addition) > totalNum){
        return false;
      } else if(temporary.reduce(addition) === totalNum) {
        return temporary;
      } else {
        startNum--;
      }
  
    }
  }
  
  function addition(curr, incoming){
    return curr + incoming;
  }