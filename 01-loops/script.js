// ================= exercises =================
// tests: [ [arguments], expectedResult ]
const EXERCISES = [
  {
    id: "playground",
    title: "Playground",
    desc: "Free practice. Write any code and use console.log to see the output.",
    fn: null,
    hint: "",
    starter: "// Write any code here and press Run\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n",
    tests: [],
  },
  {
    id: "countUp",
    title: "1. countUp",
    desc: "Return an array of numbers from 1 to n.   countUp(4) → [1, 2, 3, 4]",
    fn: "countUp",
    hint: "Make an empty array → loop i from 1 to n → push i into the array → return the array.",
    tests: [[[4], [1, 2, 3, 4]], [[1], [1]]],
  },
  {
    id: "sumTo",
    title: "2. sumTo",
    desc: "Return the sum of all numbers from 1 to n.   sumTo(5) → 15",
    fn: "sumTo",
    hint: "let total = 0 → loop i from 1 to n → total = total + i → return total.",
    tests: [[[5], 15], [[1], 1], [[10], 55]],
  },
  {
    id: "sumArray",
    title: "3. sumArray",
    desc: "Return the sum of an array.   sumArray([1, 2, 3]) → 6",
    fn: "sumArray",
    hint: "Same as sumTo, but use for...of to go over the array and add each item to total.",
    tests: [[[[1, 2, 3, 10]], 16], [[[]], 0]],
  },
  {
    id: "findMax",
    title: "4. findMax",
    desc: "Return the largest number in the array (no Math.max).   findMax([3, 9, 2]) → 9",
    fn: "findMax",
    hint: "Start with let max = arr[0] (not 0, otherwise all-negative arrays break). If an item is bigger than max, set max to that item.",
    tests: [[[[3, 9, 2]], 9], [[[-5, -2, -9]], -2]],
  },
  {
    id: "evens",
    title: "5. evens",
    desc: "Return only the even numbers.   evens([1, 2, 3, 4]) → [2, 4]",
    fn: "evens",
    hint: "num % 2 === 0 means the number is even. Push only those into a new array.",
    tests: [[[[1, 2, 3, 4, 6]], [2, 4, 6]], [[[1, 3]], []]],
  },
  {
    id: "countChar",
    title: "6. countChar",
    desc: 'Count how many times ch appears in str.   countChar("banana", "a") → 3',
    fn: "countChar",
    hint: "for...of over a string gives you each character. If the character === ch, do count++.",
    tests: [[["banana", "a"], 3], [["hello", "z"], 0]],
  },
  {
    id: "reverseString",
    title: "7. reverseString",
    desc: 'Reverse a string without .reverse().   reverseString("abc") → "cba"',
    fn: "reverseString",
    hint: "Start with an empty string \"\". Loop i from str.length - 1 DOWN to 0 (use i--). Add str[i] each time.",
    tests: [[["hello"], "olleh"], [[""], ""]],
  },
  {
    id: "fizzBuzz",
    title: "8. fizzBuzz",
    desc: 'Return an array from 1 to n. Multiples of 3 → "Fizz", of 5 → "Buzz", of both → "FizzBuzz", otherwise the number.',
    fn: "fizzBuzz",
    hint: "Check i % 15 === 0 FIRST (both), then i % 3, then i % 5, else push the number itself.",
    tests: [
      [[5], [1, 2, "Fizz", 4, "Buzz"]],
      [[15], [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]],
    ],
  },
  {
    id: "findIndex",
    title: "9. findIndex",
    desc: "Return the index of target, or -1 if it's not there (no indexOf).   findIndex([5, 8, 1], 8) → 1",
    fn: "findIndex",
    hint: "Loop with an index i. If arr[i] === target, return i right away. If the loop finishes without finding it, return -1.",
    tests: [[[[5, 8, 1], 8], 1], [[[5, 8, 1], 99], -1]],
  },
  {
    id: "factorial",
    title: "10. factorial",
    desc: "Factorial using a WHILE loop.   factorial(5) → 120  (5 × 4 × 3 × 2 × 1)",
    fn: "factorial",
    hint: "Start result at 1. While n is bigger than 1: multiply result by n, then make n smaller by 1.",
    tests: [[[5], 120], [[0], 1], [[1], 1]],
  },
  {
    id: "isPrime",
    title: "11. isPrime",
    desc: "Return true if n is prime.   isPrime(7) → true, isPrime(8) → false, isPrime(1) → false",
    fn: "isPrime",
    hint: "If n < 2 return false. Loop i from 2 to n - 1: if n % i === 0, return false. If the loop finishes, return true.",
    tests: [[[7], true], [[8], false], [[1], false], [[2], true]],
  },
  {
    id: "table",
    title: "12. table (nested)",
    desc: "Return a multiplication table as rows.   table(3) → [[1,2,3],[2,4,6],[3,6,9]]",
    fn: "table",
    hint: "Outer loop r from 1 to n: make an empty row. Inner loop c from 1 to n: push r * c into row. After the inner loop, push row into the result.",
    tests: [[[3], [[1, 2, 3], [2, 4, 6], [3, 6, 9]]], [[1], [[1]]]],
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
  const names = { countChar: "str, ch", findIndex: "arr, target" };
  if (names[ex.fn]) return names[ex.fn];
  return Array.isArray(ex.tests[0][0][0]) ? "arr" : typeof ex.tests[0][0][0] === "string" ? "str" : "n";
}

// ================= saved progress (browser storage) =================
const STORE_KEY = "loops-practice-v1";
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && s.code && s.done) return s;
  } catch {}
  return { code: {}, done: {}, current: "countUp" };
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}
const state = loadState();

// ================= saving to files (needs `node server.js` running) =================
const LESSON = "01-loops";
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
  // execCommand keeps Ctrl+Z working; fall back if the browser doesn't support it
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
    // keep the same indentation as the line above (+2 spaces after a "{")
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
// The code runs in a Web Worker so an infinite loop can be stopped instead of freezing the page.
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
    addLine("⏱ Stopped after 2 seconds. You probably have an infinite loop: check your loop condition, and make sure i (or n) changes every round.", "warn");
  }, 2000);

  worker.postMessage({ code, fn: ex.fn, tests: ex.tests });
}

// ================= start =================
select(current.id);
syncWithServer();
