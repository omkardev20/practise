// 12. table (nested)
// Return a multiplication table as rows.   table(3) → [[1,2,3],[2,4,6],[3,6,9]]
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function table(n) {
  let returntable = [];
  
  for (let i =1; i<=n; i++){
    let currentTable = [];
    for(let j = 1; j<= n; j++){
      currentTable.push(i * j);
      }
      returntable.push(currentTable); 
      
    }
    return returntable;
  } 
  
  console.log(table(10));
