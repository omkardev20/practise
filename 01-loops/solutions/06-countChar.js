// 6. countChar
// Count how many times ch appears in str.   countChar("banana", "a") → 3
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function countChar(str, ch) {
  
  let count = 0;
  
  for(const char of str){
    if(char === ch){
      count++;
      } 
      
      }
      return count;
    }
  
  


console.log(countChar("banana","a"));
