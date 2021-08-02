function checkDivision(a = 1,b = 60) {
  for (let i = a; i <= b; i++ ) {
      let str =`${i}`
      if (i % 2 == 0) { 
        if( i % 3 == 0) { 
          if ( i % 10 == 0) {console.log(`${i} is divisible 2, is divisible of 3, is divisible 10`); continue;}
        console.log(`${i} is divisible 2 , is divisible 3`); continue;}
        if( i % 10 == 0) {
          console.log(`${i} is divisible 2, is divisible 10`); continue;
        }
      console.log(`${i} is divisible 2`);
      }	
      else if (i % 3  == 0) {
      console.log(`${i} is divisible of 3`);
      }
      else {console.log(str+ ' -')}
    }

}
module.exports.checkDivision = checkDivision;