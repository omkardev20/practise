// ================= exercises =================
// tests: [ [arguments], expectedResult ]
const EXERCISES = [
  {
    id: "playground",
    title: "Playground",
    desc: "Free practice. Write any array code and use console.log to see the output.",
    fn: null,
    hint: "",
    starter: "// Write any code here and press Run\nconst numbers = [10, 20, 30];\nconsole.log(numbers.map(n => n * 2));\n",
    tests: [],
  },
  {
    id: "doubleAll",
    title: "1. doubleAll",
    desc: "Return a new array where every number is multiplied by 2.   doubleAll([1, 2, 3]) → [2, 4, 6]",
    fn: "doubleAll",
    hint: "Create an empty array result = [] → loop through arr with for...of → push num * 2 into result → return result.",
    tests: [
      [[[1, 2, 3]], [2, 4, 6]],
      [[[0, -5, 10]], [0, -10, 20]],
      [[[]], []],
    ],
  },
  {
    id: "evensOnly",
    title: "2. evensOnly",
    desc: "Return a new array containing only the even numbers.   evensOnly([1, 2, 3, 4]) → [2, 4]",
    fn: "evensOnly",
    hint: "Create result = [] → loop num of arr → if num % 2 === 0 then push num into result → return result.",
    tests: [
      [[[1, 2, 3, 4, 5]], [2, 4]],
      [[[1, 3, 5]], []],
      [[[]], []],
    ],
  },
  {
    id: "findFirst",
    title: "3. findFirst",
    desc: "Return the first number in arr strictly greater than threshold, or null if none found.   findFirst([3, 7, 2, 9], 5) → 7",
    fn: "findFirst",
    hint: "Loop through arr. As soon as you find num > threshold, return num right away! If the loop finishes, return null.",
    tests: [
      [[[3, 7, 2, 9], 5], 7],
      [[[1, 2, 3], 10], null],
      [[[], 1], null],
    ],
  },
  {
    id: "allPositive",
    title: "4. allPositive",
    desc: "Return true if every number in arr is > 0, otherwise false. (Empty array returns true).   allPositive([1, 4, 9]) → true",
    fn: "allPositive",
    hint: "Loop through arr. If you see any num <= 0, return false immediately! If the loop finishes without finding any <= 0, return true.",
    tests: [
      [[[1, 4, 9]], true],
      [[[1, -2, 3]], false],
      [[[0, 5]], false],
      [[[]], true],
    ],
  },
  {
    id: "hasNegative",
    title: "5. hasNegative",
    desc: "Return true if at least one number in arr is < 0, otherwise false.   hasNegative([1, -2, 3]) → true",
    fn: "hasNegative",
    hint: "Loop through arr. If any num < 0, return true immediately! If the loop finishes, return false.",
    tests: [
      [[[1, -2, 3]], true],
      [[[1, 2, 3]], false],
      [[[]], false],
    ],
  },
  {
    id: "productArray",
    title: "6. productArray",
    desc: "Return the product (multiplication) of all numbers in arr. For an empty array return 1.   productArray([2, 3, 4]) → 24",
    fn: "productArray",
    hint: "Start with let product = 1. Loop through arr: product = product * num. Return product at the end.",
    tests: [
      [[[2, 3, 4]], 24],
      [[[5, 0]], 0],
      [[[]], 1],
      [[[-2, 3]], -6],
    ],
  },
  {
    id: "countOccurrences",
    title: "7. countOccurrences",
    desc: "Count how many times each item appears and return an object.   countOccurrences(['a', 'b', 'a']) → { a: 2, b: 1 }",
    fn: "countOccurrences",
    hint: "Start with let counts = {}. Loop item of arr: counts[item] = (counts[item] || 0) + 1. Return counts.",
    tests: [
      [[["a", "b", "a"]], { a: 2, b: 1 }],
      [[["cat", "dog", "cat", "bird", "cat"]], { cat: 3, dog: 1, bird: 1 }],
      [[[]], {}],
    ],
  },
  {
    id: "flattenOnce",
    title: "8. flattenOnce",
    desc: "Flatten a 2D array by one level without using .flat().   flattenOnce([[1, 2], [3, 4]]) → [1, 2, 3, 4]",
    fn: "flattenOnce",
    hint: "Start with let result = []. Loop outer sub of arr: loop inner item of sub: push item into result. Return result.",
    tests: [
      [[[[1, 2], [3, 4]]], [1, 2, 3, 4]],
      [[[[1], [2], [3]]], [1, 2, 3]],
      [[[]], []],
    ],
  },
  {
    id: "removeDuplicates",
    title: "9. removeDuplicates",
    desc: "Return a new array with duplicates removed, preserving the original order.   removeDuplicates([1, 2, 2, 3, 1]) → [1, 2, 3]",
    fn: "removeDuplicates",
    hint: "Start with let result = []. Loop item of arr: if (!result.includes(item)) result.push(item). Return result.",
    tests: [
      [[[1, 2, 2, 3, 1, 4]], [1, 2, 3, 4]],
      [[["a", "b", "a"]], ["a", "b"]],
      [[[]], []],
    ],
  },
  {
    id: "secondLargest",
    title: "10. secondLargest",
    desc: "Return the second largest distinct number in arr (no .sort()). If fewer than 2 distinct numbers, return null.   secondLargest([10, 5, 20, 8]) → 10",
    fn: "secondLargest",
    hint: "Track let first = -Infinity, second = -Infinity. If num > first, second = first, first = num. Else if num < first and num > second, second = num. If second is still -Infinity return null, else return second.",
    tests: [
      [[[10, 5, 20, 8]], 10],
      [[[5, 5, 5]], null],
      [[[3]], null],
      [[[12, 35, 1, 10, 34, 1]], 34],
    ],
  },
  {
    id: "chunk",
    title: "11. chunk",
    desc: "Split an array into sub-arrays of maximum size length.   chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]",
    fn: "chunk",
    hint: "Loop i from 0 to arr.length, stepping by size (i += size). Push arr.slice(i, i + size) into result. Return result.",
    tests: [
      [[[1, 2, 3, 4, 5], 2], [[1, 2], [3, 4], [5]]],
      [[[1, 2, 3, 4], 2], [[1, 2], [3, 4]]],
      [[[], 3], []],
    ],
  },
  {
    id: "reverseArray",
    title: "12. reverseArray",
    desc: "Return a reversed copy of the array without using .reverse().   reverseArray([1, 2, 3]) → [3, 2, 1]",
    fn: "reverseArray",
    hint: "Start with let result = []. Loop i from arr.length - 1 down to 0 (i--): push arr[i] into result. Return result.",
    tests: [
      [[[1, 2, 3, 4]], [4, 3, 2, 1]],
      [[["a", "b"]], ["b", "a"]],
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
    findFirst: "arr, threshold",
    chunk: "arr, size",
  };
  if (names[ex.fn]) return names[ex.fn];
  return "arr";
}

// ================= saved progress (browser storage) =================
const STORE_KEY = "arrays-practice-v1";
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && s.code && s.done) return s;
  } catch {}
  return { code: {}, done: {}, current: "doubleAll" };
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}
const state = loadState();

// ================= saving to files (needs `node server.js` running) =================
const LESSON = "02-arrays";
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
