// 7. reverseString
// Reverse a string without .reverse().   reverseString("abc") → "cba"
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function reverseString(str) {
  let result = "";
  for(let i = str.length-1; i>=0; i--){
    result += str[i]
    }
return result;
}


console.log(reverseString("Omkar Swami"));
