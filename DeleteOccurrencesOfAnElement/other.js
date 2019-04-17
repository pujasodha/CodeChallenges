function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
//===============================

function deleteNth(arr,x){
  var count = {};
  return arr.filter(function(a){
    count[a] = ~~count[a]+1;
    return count[a]<=x;
  })
}//z.


//===============================

function deleteNth(arr, x){
  return arr.reduce(function(a, v){
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z){
  return arr.filter(function(q){ return z == q }).length;
}

//===============================

const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => (m[v] = m[v]+1||1) <= x );
}

//===============================

function deleteNth(arr,x){
  var obj = {}
  return arr.filter(function(number){
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}


//===============================

const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );


//===============================

function deleteNth(arr, x) {
  return arr.filter(
    (e, i) => arr.slice(0, i).filter(e2 => e2 == e).length < x
  );
}


//===============================

function deleteNth(arr, x){
  return arr.reduce((a, n) => {
    if (a.filter(y => y === n).length < x) a.push(n);
    return a;
  }, [])
}

//===============================

function deleteNth(arr,x){
  const obj = {};
  const res = [];
  arr.forEach(el => {
    if (!obj[el]) obj[el] = 0;
    obj[el]++;
    if (obj[el] <= x) res.push(el); 
  })
  return res;
}

//===============================