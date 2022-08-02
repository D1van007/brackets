module.exports = function check(str, bracketsConfig) {

  const twin = new Object();
   bracketsConfigX = bracketsConfig.flat(Infinity);
  
  
  for (let i=0; i<bracketsConfigX.length; i=i+2){
     twin[bracketsConfigX[i+1]] = bracketsConfigX[i]
  }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      if (stack.length !== 0 && twin[str[i]] == stack[stack.length-1]){
        stack.pop()} 
      else {stack.push(str[i])}
      }
   
return stack.length == 0 



  // your solution
}
