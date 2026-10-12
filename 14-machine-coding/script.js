// ================= exercises =================
// tests: [ [arguments], expectedResult ]
const EXERCISES = [
  {
    id: "playground",
    title: "Playground",
    desc: "Free practice. Test any UI state logic or machine coding helper here.",
    fn: null,
    hint: "",
    starter: "// Test any machine coding logic here and press Run\nconsole.log('Ready for Machine Coding practice!');\n",
    tests: [],
  },
  {
    id: "filterTodos",
    title: "1. filterTodos",
    desc: "Filter todos by status: 'all', 'active' (completed === false), or 'completed' (completed === true).   filterTodos(todos, 'active')",
    fn: "filterTodos",
    hint: "If filter === 'all' return todos. If filter === 'active' return todos.filter(t => !t.completed). If filter === 'completed' return todos.filter(t => t.completed).",
    tests: [
      [[[
        [{ id: 1, text: "Buy milk", completed: true }, { id: 2, text: "Code DSA", completed: false }],
        "active"
      ]], [{ id: 2, text: "Code DSA", completed: false }]],
      [[[
        [{ id: 1, text: "Buy milk", completed: true }, { id: 2, text: "Code DSA", completed: false }],
        "completed"
      ]], [{ id: 1, text: "Buy milk", completed: true }]],
      [[[
        [{ id: 1, text: "Buy milk", completed: true }],
        "all"
      ]], [{ id: 1, text: "Buy milk", completed: true }]],
    ],
  },
  {
    id: "toggleTodo",
    title: "2. toggleTodo",
    desc: "Return a new array of todos with the item matching id toggled (completed becomes !completed). Do not mutate original.   toggleTodo(todos, 1)",
    fn: "toggleTodo",
    hint: "Use todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t).",
    tests: [
      [[[
        [{ id: 1, text: "Milk", completed: false }, { id: 2, text: "Eggs", completed: true }],
        1
      ]], [{ id: 1, text: "Milk", completed: true }, { id: 2, text: "Eggs", completed: true }]],
      [[[
        [{ id: 1, text: "Milk", completed: true }],
        1
      ]], [{ id: 1, text: "Milk", completed: false }]],
    ],
  },
  {
    id: "addTodo",
    title: "3. addTodo",
    desc: "Add a new todo { id, text, completed: false } to the array immutably. If text is empty or just spaces, return original array.   addTodo(todos, 3, 'Bread')",
    fn: "addTodo",
    hint: "If (!text || !text.trim()) return todos; return [...todos, { id, text: text.trim(), completed: false }];",
    tests: [
      [[[
        [{ id: 1, text: "A", completed: false }],
        2,
        "B"
      ]], [{ id: 1, text: "A", completed: false }, { id: 2, text: "B", completed: false }]],
      [[[
        [{ id: 1, text: "A", completed: false }],
        2,
        "   "
      ]], [{ id: 1, text: "A", completed: false }]],
    ],
  },
  {
    id: "deleteTodo",
    title: "4. deleteTodo",
    desc: "Return a new array with the todo matching id removed. Do not mutate original.   deleteTodo(todos, 2)",
    fn: "deleteTodo",
    hint: "return todos.filter(t => t.id !== id);",
    tests: [
      [[[
        [{ id: 1, text: "A" }, { id: 2, text: "B" }, { id: 3, text: "C" }],
        2
      ]], [{ id: 1, text: "A" }, { id: 3, text: "C" }]],
      [[[
        [{ id: 1, text: "A" }],
        99
      ]], [{ id: 1, text: "A" }]],
    ],
  },
  {
    id: "calculateCart",
    title: "5. calculateCart",
    desc: "Calculate cart totals: subtotal, discount (percent off subtotal), tax (percent of discounted subtotal), grandTotal (rounded to 2 decimals).   calculateCart(items, 10, 5)",
    fn: "calculateCart",
    hint: "subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0). discount = subtotal * (discountPct / 100). afterDiscount = subtotal - discount. tax = afterDiscount * (taxPct / 100). grandTotal = Number((afterDiscount + tax).toFixed(2)). Return { subtotal, discount, tax, grandTotal }.",
    tests: [
      [[[
        [{ price: 100, qty: 2 }, { price: 50, qty: 1 }],
        10,
        5
      ]], { subtotal: 250, discount: 25, tax: 11.25, grandTotal: 236.25 }],
      [[[
        [{ price: 20, qty: 1 }],
        0,
        0
      ]], { subtotal: 20, discount: 0, tax: 0, grandTotal: 20 }],
    ],
  },
  {
    id: "updateCartItem",
    title: "6. updateCartItem",
    desc: "Update qty of cart item with id. If new qty <= 0, remove the item completely.   updateCartItem(cart, 1, 0) → removes item",
    fn: "updateCartItem",
    hint: "If newQty <= 0 return cart.filter(item => item.id !== id). Otherwise return cart.map(item => item.id === id ? { ...item, qty: newQty } : item).",
    tests: [
      [[[
        [{ id: 1, name: "Book", qty: 2 }, { id: 2, name: "Pen", qty: 1 }],
        1,
        3
      ]], [{ id: 1, name: "Book", qty: 3 }, { id: 2, name: "Pen", qty: 1 }]],
      [[[
        [{ id: 1, name: "Book", qty: 2 }, { id: 2, name: "Pen", qty: 1 }],
        1,
        0
      ]], [{ id: 2, name: "Pen", qty: 1 }]],
    ],
  },
  {
    id: "fuzzySearch",
    title: "7. fuzzySearch",
    desc: "Search an array of objects by field: return items where item[field] contains query (case-insensitive).   fuzzySearch(users, 'name', 'al')",
    fn: "fuzzySearch",
    hint: "const q = query.toLowerCase(); return items.filter(item => String(item[field] || '').toLowerCase().includes(q));",
    tests: [
      [[[
        [{ name: "Alice" }, { name: "Bob" }, { name: "Alex" }],
        "name",
        "al"
      ]], [{ name: "Alice" }, { name: "Alex" }]],
      [[[
        [{ name: "Alice" }],
        "name",
        "xyz"
      ]], []],
    ],
  },
  {
    id: "paginateSlice",
    title: "8. paginateSlice",
    desc: "Return the items slice for a given page (1-indexed) and pageSize.   paginateSlice([1, 2, 3, 4, 5], 2, 2) → [3, 4]",
    fn: "paginateSlice",
    hint: "const start = (page - 1) * pageSize; return items.slice(start, start + pageSize);",
    tests: [
      [[[1, 2, 3, 4, 5], 2, 2], [3, 4]],
      [[[1, 2, 3, 4, 5], 1, 3], [1, 2, 3]],
      [[[1, 2, 3], 5, 2], []],
    ],
  },
  {
    id: "sortByField",
    title: "9. sortByField",
    desc: "Sort array of objects by field in 'asc' or 'desc' direction. Return a new sorted array.   sortByField(users, 'age', 'asc')",
    fn: "sortByField",
    hint: "return [...items].sort((a, b) => { if (a[field] < b[field]) return dir === 'asc' ? -1 : 1; if (a[field] > b[field]) return dir === 'asc' ? 1 : -1; return 0; });",
    tests: [
      [[[
        [{ age: 30 }, { age: 20 }, { age: 25 }],
        "age",
        "asc"
      ]], [{ age: 20 }, { age: 25 }, { age: 30 }]],
      [[[
        [{ age: 30 }, { age: 20 }, { age: 25 }],
        "age",
        "desc"
      ]], [{ age: 30 }, { age: 25 }, { age: 20 }]],
    ],
  },
  {
    id: "highlightQuery",
    title: "10. highlightQuery",
    desc: "Wrap matching query substring in <mark> tags (case-insensitive).   highlightQuery('React Developer', 'dev') → 'React <mark>Dev</mark>eloper'",
    fn: "highlightQuery",
    hint: "if (!query) return text; const re = new RegExp(`(${query})`, 'gi'); return text.replace(re, '<mark>$1</mark>');",
    tests: [
      [[["React Developer", "dev"]], "React <mark>Dev</mark>eloper"],
      [[["JavaScript", "script"]], "Java<mark>Script</mark>"],
      [[["Node.js", ""]], "Node.js"],
    ],
  },
  {
    id: "starStates",
    title: "11. starStates",
    desc: "Given rating (e.g. 3.5), return array of 5 states: 'full', 'half', or 'empty'.   starStates(3.5) → ['full', 'full', 'full', 'half', 'empty']",
    fn: "starStates",
    hint: "const result = []; for (let i = 1; i <= 5; i++) { if (rating >= i) result.push('full'); else if (rating >= i - 0.5) result.push('half'); else result.push('empty'); } return result;",
    tests: [
      [[[3.5]], ["full", "full", "full", "half", "empty"]],
      [[[5]], ["full", "full", "full", "full", "full"]],
      [[[0]], ["empty", "empty", "empty", "empty", "empty"]],
      [[[2.5]], ["full", "full", "half", "empty", "empty"]],
    ],
  },
  {
    id: "serializeStorage",
    title: "12. serializeStorage",
    desc: "Safely parse a JSON string or return fallback if invalid or null.   serializeStorage('{\"a\":1}', {}) → { a: 1 }",
    fn: "serializeStorage",
    hint: "if (typeof jsonStr !== 'string') return fallback; try { return JSON.parse(jsonStr); } catch { return fallback; }",
    tests: [
      [[['{"name":"Alex"}', {}]], { name: "Alex" }],
      [[["corrupted json{", []]], []],
      [[[null, { default: true }]], { default: true }],
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
    filterTodos: "todos, filter",
    toggleTodo: "todos, id",
    addTodo: "todos, id, text",
    deleteTodo: "todos, id",
    calculateCart: "items, discountPct, taxPct",
    updateCartItem: "cart, id, newQty",
    fuzzySearch: "items, field, query",
    paginateSlice: "items, page, pageSize",
    sortByField: "items, field, dir",
    highlightQuery: "text, query",
    starStates: "rating",
    serializeStorage: "jsonStr, fallback",
  };
  if (names[ex.fn]) return names[ex.fn];
  return "arg";
}

// ================= saved progress (browser storage) =================
const STORE_KEY = "machine-coding-practice-v1";
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && s.code && s.done) return s;
  } catch {}
  return { code: {}, done: {}, current: "filterTodos" };
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}
const state = loadState();

// ================= saving to files (needs `node server.js` running) =================
const LESSON = "14-machine-coding";
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
