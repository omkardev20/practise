// ================= exercises =================
// tests: [ [arguments], expectedResult ]
const EXERCISES = [
  {
    id: "playground",
    title: "Playground",
    desc: "Free practice. Test any DSA pattern and use console.log to inspect.",
    fn: null,
    hint: "",
    starter: "// Write any DSA code here and press Run\nconsole.log('Ready for DSA practice!');\n",
    tests: [],
  },
  {
    id: "twoSum",
    title: "1. twoSum",
    desc: "Return the indices [i, j] of two numbers that add up to target.   twoSum([2, 7, 11, 15], 9) → [0, 1]",
    fn: "twoSum",
    hint: "Use an object or Map called seen. Loop i from 0 to arr.length: let diff = target - arr[i]. If diff in seen, return [seen[diff], i]. Otherwise store seen[arr[i]] = i.",
    tests: [
      [[[2, 7, 11, 15], 9], [0, 1]],
      [[[3, 2, 4], 6], [1, 2]],
      [[[3, 3], 6], [0, 1]],
    ],
  },
  {
    id: "moveZeroes",
    title: "2. moveZeroes",
    desc: "Move all 0's to the end of arr while preserving the order of other numbers. Return the array.   moveZeroes([0, 1, 0, 3, 12]) → [1, 3, 12, 0, 0]",
    fn: "moveZeroes",
    hint: "Keep an insertPos = 0. Loop through arr: if num !== 0, arr[insertPos] = num, insertPos++. After the loop, fill from insertPos to end with 0. Return arr.",
    tests: [
      [[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]],
      [[[0, 0, 1]], [1, 0, 0]],
      [[[1, 2, 3]], [1, 2, 3]],
    ],
  },
  {
    id: "isPalindrome",
    title: "3. isPalindrome",
    desc: 'Return true if str reads same backwards (ignoring spaces and case).   isPalindrome("race car") → true',
    fn: "isPalindrome",
    hint: 'Clean the string: const clean = str.toLowerCase().replace(/[^a-z0-9]/g, ""). Compare two pointers: left = 0, right = clean.length - 1. While left < right, if clean[left] !== clean[right] return false. If loop ends, return true.',
    tests: [
      [[["race car"]], true],
      [[["hello"]], false],
      [[["A man a plan a canal Panama"]], true],
    ],
  },
  {
    id: "validParentheses",
    title: "4. validParentheses",
    desc: 'Return true if brackets () [] {} are closed in the right order.   validParentheses("()[]{}") → true, validParentheses("(]") → false',
    fn: "validParentheses",
    hint: "Use a stack = []. Loop char of str: if '(', '[', '{' push to stack. If ')', ']', '}', pop from stack and check if matching pair. At end, return stack.length === 0.",
    tests: [
      [[["()[]{}"]], true],
      [[["(]"]], false],
      [[["([{}])"]], true],
      [[["("]], false],
      [[["]]"]], false],
    ],
  },
  {
    id: "binarySearch",
    title: "5. binarySearch",
    desc: "Find the index of target in sorted arr in O(log n) time. Return -1 if not found.   binarySearch([1, 3, 5, 7, 9], 7) → 3",
    fn: "binarySearch",
    hint: "let low = 0, high = arr.length - 1. While low <= high: mid = Math.floor((low + high) / 2). If arr[mid] === target return mid. If arr[mid] < target low = mid + 1, else high = mid - 1. Return -1.",
    tests: [
      [[[1, 3, 5, 7, 9], 7], 3],
      [[[1, 3, 5, 7, 9], 2], -1],
      [[[10, 20, 30], 10], 0],
    ],
  },
  {
    id: "maxSubArray",
    title: "6. maxSubArray",
    desc: "Find the largest sum of a contiguous subarray (Kadane's algorithm).   maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) → 6",
    fn: "maxSubArray",
    hint: "let currentSum = arr[0], maxSum = arr[0]. Loop i from 1 to arr.length - 1: currentSum = Math.max(arr[i], currentSum + arr[i]). maxSum = Math.max(maxSum, currentSum). Return maxSum.",
    tests: [
      [[[-2, 1, -3, 4, -1, 2, 1, -5, 4]], 6],
      [[[1]], 1],
      [[[5, 4, -1, 7, 8]], 23],
      [[[-3, -2, -5]], -2],
    ],
  },
  {
    id: "firstUniqueChar",
    title: "7. firstUniqueChar",
    desc: 'Return the index of the first non-repeating character, or -1 if none exists.   firstUniqueChar("leetcode") → 0',
    fn: "firstUniqueChar",
    hint: "1st pass: build frequency map count[char] = (count[char] || 0) + 1. 2nd pass: loop i from 0 to str.length - 1. If count[str[i]] === 1, return i. Return -1.",
    tests: [
      [[["leetcode"]], 0],
      [[["loveleetcode"]], 2],
      [[["aabb"]], -1],
    ],
  },
  {
    id: "mergeSorted",
    title: "8. mergeSorted",
    desc: "Merge two sorted arrays into one sorted array.   mergeSorted([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]",
    fn: "mergeSorted",
    hint: "Two pointers i = 0, j = 0, result = []. While i < arr1.length && j < arr2.length: push smaller item and advance that pointer. Then push remaining items from both arrays. Return result.",
    tests: [
      [[[1, 3, 5], [2, 4, 6]], [1, 2, 3, 4, 5, 6]],
      [[[1, 2], [3, 4, 5]], [1, 2, 3, 4, 5]],
      [[[], [1, 2]], [1, 2]],
    ],
  },
  {
    id: "containsDuplicate",
    title: "9. containsDuplicate",
    desc: "Return true if any value appears at least twice in arr.   containsDuplicate([1, 2, 3, 1]) → true",
    fn: "containsDuplicate",
    hint: "const seen = new Set(). Loop num of arr: if (seen.has(num)) return true; seen.add(num). Return false.",
    tests: [
      [[[1, 2, 3, 1]], true],
      [[[1, 2, 3, 4]], false],
      [[[1, 1, 1, 3, 3]], true],
      [[[]], false],
    ],
  },
  {
    id: "intersection",
    title: "10. intersection",
    desc: "Return an array of unique elements present in both arrays.   intersection([1, 2, 2, 1], [2, 2]) → [2]",
    fn: "intersection",
    hint: "const set1 = new Set(arr1); const result = new Set(); loop num of arr2: if (set1.has(num)) result.add(num). Return Array.from(result).",
    tests: [
      [[[1, 2, 2, 1], [2, 2]], [2]],
      [[[4, 9, 5], [9, 4, 9, 8, 4]], [4, 9]],
      [[[1, 2], [3, 4]], []],
    ],
  },
  {
    id: "longestSubstr",
    title: "11. longestSubstr",
    desc: 'Return the length of the longest substring without repeating characters.   longestSubstr("abcabcbb") → 3',
    fn: "longestSubstr",
    hint: "Sliding window: let left = 0, maxLen = 0, seen = new Set(). For right = 0 to str.length - 1: while (seen.has(str[right])) { seen.delete(str[left]); left++; } seen.add(str[right]); maxLen = Math.max(maxLen, right - left + 1). Return maxLen.",
    tests: [
      [[["abcabcbb"]], 3],
      [[["bbbbb"]], 1],
      [[["pwwkew"]], 3],
      [[[""]], 0],
    ],
  },
  {
    id: "flattenDeep",
    title: "12. flattenDeep",
    desc: "Recursively flatten an arbitrarily nested array into a 1D array.   flattenDeep([1, [2, [3, [4]]]]) → [1, 2, 3, 4]",
    fn: "flattenDeep",
    hint: "let result = []. Loop item of arr: if Array.isArray(item) push ...flattenDeep(item) into result, else push item. Return result.",
    tests: [
      [[[1, [2, [3, [4]]]]], [1, 2, 3, 4]],
      [[[[[1, 2], [3]], 4]], [1, 2, 3, 4]],
      [[[]], []],
    ],
  },
];

// Exercises with a function get an empty function as starter code
for (const ex of EXERCISES) {
  if (!ex.starter) {
    const sample = JSON.stringify(ex.tests[0][0]).slice(1, -1);
    ex.starter = `function ${ex.fn}(${paramNames(ex)}) {\n  \n}\n\nconsole.log(${ex.fn}(${sample}));\n`;
  }
}
function paramNames(ex) {
  const names = {
    twoSum: "arr, target",
    binarySearch: "arr, target",
    mergeSorted: "arr1, arr2",
    intersection: "arr1, arr2",
    isPalindrome: "str",
    validParentheses: "str",
    firstUniqueChar: "str",
    longestSubstr: "str",
  };
  if (names[ex.fn]) return names[ex.fn];
  return "arr";
}

// ================= saved progress (browser storage) =================
const STORE_KEY = "classic-dsa-practice-v1";
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && s.code && s.done) return s;
  } catch {}
  return { code: {}, done: {}, current: "twoSum" };
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}
const state = loadState();

// ================= saving to files (needs `node server.js` running) =================
const LESSON = "05-classic-dsa";
const API = "http://localhost:5174/api";
let serverOnline = false;

function setSyncStatus(online) {
  serverOnline = online;
  const el = document.getElementById("syncStatus");
  el.className = "sync " + (online ? "on" : "off");
  el.textContent = online
    ? "💾 Saving passed exercises to files"
    : "⚠ Not saving to files. In the practise folder run: node server.js";
}

async function saveToServer(ex, code) {
  try {
    const res = await fetch(`${API}/save`, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        lesson: LESSON,
        id: ex.id,
        num: EXERCISES.indexOf(ex),
        title: ex.title,
        desc: ex.desc,
        code,
        total: EXERCISES.filter((e) => e.fn).length,
      }),
    });
    setSyncStatus(res.ok);
    return res.ok;
  } catch {
    setSyncStatus(false);
    return false;
  }
}

// On load: bring back solutions saved in files, and push up any passed ones that aren't saved yet
async function syncWithServer() {
  let saved;
  try {
    const res = await fetch(`${API}/progress?lesson=${LESSON}`);
    saved = await res.json();
    setSyncStatus(true);
  } catch {
    setSyncStatus(false);
    return;
  }
  for (const ex of EXERCISES) {
    if (saved.done[ex.id]) state.done[ex.id] = true;
    if (saved.code[ex.id] && state.code[ex.id] == null) {
      state.code[ex.id] = saved.code[ex.id];
      if (ex.id === current.id) editor.value = saved.code[ex.id];
    }
    if (state.done[ex.id] && !saved.done[ex.id] && state.code[ex.id]) {
      await saveToServer(ex, state.code[ex.id]);
    }
  }
  saveState();
  renderList();
}

// ================= page elements =================
const listEl = document.getElementById("exerciseList");
const progressEl = document.getElementById("progress");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const hintBox = document.getElementById("hintBox");
const hintEl = document.getElementById("hint");
const editor = document.getElementById("editor");
const output = document.getElementById("output");
let current = EXERCISES.find((e) => e.id === state.current) || EXERCISES[1];

function renderList() {
  listEl.innerHTML = "";
  for (const ex of EXERCISES) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = (state.done[ex.id] ? "✅ " : "") + ex.title;
    if (ex.id === current.id) btn.className = "active";
    btn.onclick = () => select(ex.id);
    li.append(btn);
    listEl.append(li);
  }
  const total = EXERCISES.filter((e) => e.fn).length;
  const done = EXERCISES.filter((e) => e.fn && state.done[e.id]).length;
  progressEl.textContent = `${done} / ${total} exercises done`;
}

function select(id) {
  current = EXERCISES.find((e) => e.id === id);
  state.current = id;
  saveState();
  titleEl.textContent = current.title;
  descEl.textContent = current.desc;
  hintEl.textContent = current.hint;
  hintBox.open = false;
  hintBox.hidden = !current.hint;
  editor.value = state.code[id] ?? current.starter;
  output.innerHTML = "";
  addLine("Press Run (or Ctrl + Enter) to see the output here.", "muted");
  renderList();
  editor.focus();
}

function addLine(text, cls) {
  const div = document.createElement("div");
  div.className = "line " + cls;
  div.textContent = text;
  output.append(div);
}

// ================= editor keys =================
editor.addEventListener("input", () => {
  state.code[current.id] = editor.value;
  saveState();
});

// No pasting: every character must be typed by hand
function blockPaste(e) {
  e.preventDefault();
  output.innerHTML = "";
  addLine("🚫 Pasting is turned off. Type the code yourself, because that's how your hands remember it.", "warn");
}
editor.addEventListener("paste", blockPaste);
editor.addEventListener("drop", blockPaste);
editor.addEventListener("beforeinput", (e) => {
  if (e.inputType === "insertFromPaste" || e.inputType === "insertFromDrop") blockPaste(e);
});

function insertText(text) {
  if (!document.execCommand("insertText", false, text)) {
    editor.setRangeText(text, editor.selectionStart, editor.selectionEnd, "end");
    editor.dispatchEvent(new Event("input"));
  }
}

editor.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    run();
  } else if (e.key === "Tab") {
    e.preventDefault();
    insertText("  ");
  } else if (e.key === "Enter") {
    e.preventDefault();
    const pos = editor.selectionStart;
    const lineStart = editor.value.lastIndexOf("\n", pos - 1) + 1;
    let indent = editor.value.slice(lineStart, pos).match(/^ */)[0];
    if (editor.value[pos - 1] === "{") indent += "  ";
    insertText("\n" + indent);
  }
});

document.getElementById("resetBtn").onclick = () => {
  if (!confirm("Delete your code for this exercise and start again?")) return;
  delete state.code[current.id];
  delete state.done[current.id];
  saveState();
  select(current.id);
};
document.getElementById("runBtn").onclick = run;

// ================= running code =================
function workerMain() {
  const show = (v) => {
    if (v === undefined) return "undefined";
    if (typeof v === "function") return "function " + (v.name || "(anonymous)");
    if (typeof v === "number" && !Number.isFinite(v)) return String(v);
    try { return JSON.stringify(v) ?? String(v); } catch { return String(v); }
  };
  const send = (type, args) =>
    postMessage({ type, text: args.map((a) => (typeof a === "string" ? a : show(a))).join(" ") });
  console.log = console.info = (...a) => send("log", a);
  console.warn = (...a) => send("warn", a);
  console.error = (...a) => send("error", a);

  self.onmessage = (e) => {
    const { code, fn, tests } = e.data;
    let f;
    try {
      const tail = fn ? `\n;return typeof ${fn} === "function" ? ${fn} : undefined;` : "";
      f = new Function(code + tail)();
    } catch (err) {
      postMessage({ type: "error", text: `${err.name}: ${err.message}` });
      postMessage({ type: "done", crashed: true });
      return;
    }
    if (fn) {
      if (typeof f !== "function") {
        postMessage({ type: "error", text: `Couldn't find a function called ${fn}. Check the spelling.` });
        postMessage({ type: "done", crashed: true });
        return;
      }
      postMessage({ type: "testsStart" });
      for (const [args, expected] of tests) {
        const call = `${fn}(${args.map(show).join(", ")})`;
        let got;
        try {
          got = show(f(...structuredClone(args)));
        } catch (err) {
          got = `${err.name}: ${err.message}`;
        }
        postMessage({ type: "test", ok: got === show(expected), call, expected: show(expected), got });
      }
    }
    postMessage({ type: "done" });
  };
}
const workerUrl = URL.createObjectURL(
  new Blob([`(${workerMain.toString()})()`], { type: "text/javascript" })
);

let worker = null;
let timer = null;

function run() {
  if (worker) worker.terminate();
  clearTimeout(timer);
  output.innerHTML = "";

  const ex = current;
  const code = editor.value;
  let passed = 0;
  let printed = false;
  worker = new Worker(workerUrl);

  const finish = (crashed) => {
    clearTimeout(timer);
    worker.terminate();
    worker = null;
    if (!printed && !ex.fn) addLine("(no output: use console.log(...) to print something)", "muted");
    if (ex.fn && !crashed) {
      const total = ex.tests.length;
      addLine(`${passed} / ${total} tests passed`, "summary " + (passed === total ? "pass" : "fail"));
      if (passed === total) {
        addLine("🎉 Well done! Pick the next exercise on the left.", "pass");
        state.done[ex.id] = true;
        saveState();
        renderList();
        saveToServer(ex, code).then((ok) => {
          if (ok) addLine(`💾 Saved to ${LESSON}/solutions/`, "muted");
          else addLine("⚠ Not saved to a file. Start the server: node server.js", "warn");
        });
      }
    }
  };

  worker.onmessage = (e) => {
    const m = e.data;
    if (m.type === "log" || m.type === "warn" || m.type === "error") {
      printed = true;
      addLine((m.type === "error" ? "❌ " : "") + m.text, m.type);
    } else if (m.type === "testsStart") {
      addLine("──────── tests ────────", "muted");
    } else if (m.type === "test") {
      if (m.ok) {
        passed++;
        addLine(`✅ ${m.call} → ${m.got}`, "pass");
      } else {
        addLine(`❌ ${m.call} → expected ${m.expected}, got ${m.got}`, "fail");
      }
    } else if (m.type === "done") {
      finish(m.crashed);
    }
  };
  worker.onerror = (e) => {
    e.preventDefault();
    addLine("❌ " + e.message, "error");
    finish(true);
  };

  timer = setTimeout(() => {
    worker.terminate();
    worker = null;
    addLine("⏱ Stopped after 2 seconds. Check your loops and conditions.", "warn");
  }, 2000);

  worker.postMessage({ code, fn: ex.fn, tests: ex.tests });
}

// ================= start =================
select(current.id);
syncWithServer();
