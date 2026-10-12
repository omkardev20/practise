// 9. findIndex
// Return the index of target, or -1 if it's not there (no indexOf).   findIndex([5, 8, 1], 8) → 1
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function findIndex(arr, target) {
  let results = [];
  for(i=0; i<arr.length; i++){
    if(arr[i]===target){
      return i;}
    }
    return - 1;
}

console.log(findIndex([5,8,1],8));
