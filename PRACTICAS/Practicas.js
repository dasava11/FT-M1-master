function contDown(n) {
    if(n === 0) return [];
    console.log([n] + contDown(n-1));
    
    // var arr = [];
    //   while(n!==0) {
    //   arr.unshift(n);
    //   n--
    //   }
    //  console.log(arr)
 }
    
    contDown(7);

