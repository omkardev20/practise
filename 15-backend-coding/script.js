// ================= exercises =================
// tests: [ [arguments], expectedResult ]
const EXERCISES = [
  {
    id: "playground",
    title: "Playground",
    desc: "Free practice. Test any backend utility function and check console.log.",
    fn: null,
    hint: "",
    starter: "// Test any backend logic here and press Run\nconsole.log('Ready for Backend Coding practice!');\n",
    tests: [],
  },
  {
    id: "parseQuery",
    title: "1. parseQuery",
    desc: "Parse a URL query string into an object.   parseQuery('page=2&sort=desc') → { page: '2', sort: 'desc' }",
    fn: "parseQuery",
    hint: "If str starts with '?', remove it with str.replace(/^\\?/, ''). Split by '&'. For each 'k=v' pair, split by '=' and set result[key] = value. If str is empty, return {}.",
    tests: [
      [[["page=2&sort=desc"]], { page: "2", sort: "desc" }],
      [[["?name=alex&active=true"]], { name: "alex", active: "true" }],
      [[[""]], {}],
    ],
  },
  {
    id: "extractBearerToken",
    title: "2. extractBearerToken",
    desc: "Extract the token from an Authorization header. Return token or null if invalid.   extractBearerToken('Bearer eyJhbGci...') → 'eyJhbGci...'",
    fn: "extractBearerToken",
    hint: "If header is not a string or doesn't start with 'Bearer ', return null. Extract the token after 'Bearer ' and trim. If empty token, return null.",
    tests: [
      [[["Bearer eyJhbGciOiJIUzI1NiJ9"]], "eyJhbGciOiJIUzI1NiJ9"],
      [[["Basic dXNlcjpwYXNz"]], null],
      [[["Bearer "]], null],
      [[[null]], null],
    ],
  },
  {
    id: "matchRoute",
    title: "3. matchRoute",
    desc: "Extract path parameters from a route pattern. Return object of params or null if mismatch.   matchRoute('/users/:id', '/users/42') → { id: '42' }",
    fn: "matchRoute",
    hint: "Split both pattern and path by '/'. If their segment counts differ, return null. Loop segments: if pattern seg starts with ':', store params[seg.slice(1)] = pathSeg. Else if pattern seg !== pathSeg, return null. Return params.",
    tests: [
      [[["/users/:id", "/users/42"]], { id: "42" }],
      [[["/users/:id/posts/:postId", "/users/7/posts/99"]], { id: "7", postId: "99" }],
      [[["/users/:id", "/products/42"]], null],
      [[["/users/:id", "/users/42/extra"]], null],
    ],
  },
  {
    id: "paginate",
    title: "4. paginate",
    desc: "Paginate an array given page and limit. Return { data, page, limit, total, totalPages }.   paginate([1,2,3,4,5], 1, 2) → { data: [1,2], page: 1, limit: 2, total: 5, totalPages: 3 }",
    fn: "paginate",
    hint: "let start = (page - 1) * limit. let data = arr.slice(start, start + limit). let totalPages = arr.length === 0 ? 0 : Math.ceil(arr.length / limit). Return { data, page, limit, total: arr.length, totalPages }.",
    tests: [
      [[[1, 2, 3, 4, 5], 1, 2], { data: [1, 2], page: 1, limit: 2, total: 5, totalPages: 3 }],
      [[[1, 2, 3, 4, 5], 3, 2], { data: [5], page: 3, limit: 2, total: 5, totalPages: 3 }],
      [[[], 1, 10], { data: [], page: 1, limit: 10, total: 0, totalPages: 0 }],
    ],
  },
  {
    id: "buildInsertQuery",
    title: "5. buildInsertQuery",
    desc: "Generate a SQL INSERT statement from table name and data object.   buildInsertQuery('users', { name: 'Alice', role: 'admin' }) → \"INSERT INTO users (name, role) VALUES ('Alice', 'admin');\"",
    fn: "buildInsertQuery",
    hint: "const cols = Object.keys(data).join(', '); const vals = Object.values(data).map(v => typeof v === 'string' ? `'${v}'` : v).join(', '); return `INSERT INTO ${table} (${cols}) VALUES (${vals});`;",
    tests: [
      [[["users", { name: "Alice", role: "admin" }]], "INSERT INTO users (name, role) VALUES ('Alice', 'admin');"],
      [[["products", { title: "Book", price: 15 }]], "INSERT INTO products (title, price) VALUES ('Book', 15);"],
    ],
  },
  {
    id: "buildSelectQuery",
    title: "6. buildSelectQuery",
    desc: "Generate a SQL SELECT statement with WHERE conditions. If where is empty, omit WHERE clause.   buildSelectQuery('users', { status: 'active', age: 25 }) → \"SELECT * FROM users WHERE status = 'active' AND age = 25;\"",
    fn: "buildSelectQuery",
    hint: "const entries = Object.entries(where); if (entries.length === 0) return `SELECT * FROM ${table};`; const conds = entries.map(([k, v]) => `${k} = ${typeof v === 'string' ? `'${v}'` : v}`).join(' AND '); return `SELECT * FROM ${table} WHERE ${conds};`;",
    tests: [
      [[["users", { status: "active", age: 25 }]], "SELECT * FROM users WHERE status = 'active' AND age = 25;"],
      [[["posts", {}]], "SELECT * FROM posts;"],
    ],
  },
  {
    id: "sanitizeInput",
    title: "7. sanitizeInput",
    desc: "Escape <, >, &, \", ' to prevent XSS.   sanitizeInput('<script>alert(\"xss\")</script>')",
    fn: "sanitizeInput",
    hint: "Use replace: & with &amp;, then < with &lt;, > with &gt;, \" with &quot;, ' with &#39; (remember to escape & first!).",
    tests: [
      [[["<script>alert(\"xss\")</script>"]], "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"],
      [[["Hello & Goodbye"]], "Hello &amp; Goodbye"],
      [[["'clean'"]], "&#39;clean&#39;"],
    ],
  },
  {
    id: "statusCategory",
    title: "8. statusCategory",
    desc: "Return the category string for an HTTP status code: 2xx → 'Success', 3xx → 'Redirection', 4xx → 'Client Error', 5xx → 'Server Error', else 'Invalid'.   statusCategory(404) → 'Client Error'",
    fn: "statusCategory",
    hint: "If code >= 200 && code < 300 return 'Success'. If >= 300 && < 400 return 'Redirection'. If >= 400 && < 500 return 'Client Error'. If >= 500 && < 600 return 'Server Error'. Else 'Invalid'.",
    tests: [
      [[[201]], "Success"],
      [[[404]], "Client Error"],
      [[[500]], "Server Error"],
      [[[301]], "Redirection"],
      [[[999]], "Invalid"],
    ],
  },
  {
    id: "rateLimitCheck",
    title: "9. rateLimitCheck",
    desc: "Return true if current request is allowed, false if rate limit exceeded.   rateLimitCheck([1000, 2000, 3000], 4000, 3, 5000) → false",
    fn: "rateLimitCheck",
    hint: "Filter pastTimestamps to keep only those > (now - windowMs). If recent count >= maxLimit, return false. Otherwise return true.",
    tests: [
      [[[[1000, 2000, 3000], 4000, 3, 5000]], false],
      [[[[1000, 2000], 4000, 3, 5000]], true],
      [[[[1000, 2000, 3000], 7000, 3, 5000]], true],
    ],
  },
  {
    id: "groupByKey",
    title: "10. groupByKey",
    desc: "Group an array of records by a specific column/key.   groupByKey([{ id: 1, dept: 'eng' }, { id: 2, dept: 'eng' }], 'dept')",
    fn: "groupByKey",
    hint: "let result = {}. Loop item of arr: let k = item[prop]; if (!result[k]) result[k] = []; result[k].push(item). Return result.",
    tests: [
      [[[{ id: 1, dept: "eng" }, { id: 2, dept: "eng" }, { id: 3, dept: "hr" }], "dept"], { eng: [{ id: 1, dept: "eng" }, { id: 2, dept: "eng" }], hr: [{ id: 3, dept: "hr" }] }],
      [[[], "role"], {}],
    ],
  },
  {
    id: "cleanEmptyFields",
    title: "11. cleanEmptyFields",
    desc: "Remove null, undefined, or empty string '' values from an object. Keep 0 and false.   cleanEmptyFields({ name: 'Alex', age: null, bio: '' }) → { name: 'Alex' }",
    fn: "cleanEmptyFields",
    hint: "let result = {}. Loop [k, v] of Object.entries(obj): if (v !== null && v !== undefined && v !== '') result[k] = v. Return result.",
    tests: [
      [[[{ name: "Alex", age: null, bio: "", active: false, count: 0 }]], { name: "Alex", active: false, count: 0 }],
      [[[{ a: undefined, b: null }]], {}],
    ],
  },
  {
    id: "createSlug",
    title: "12. createSlug",
    desc: "Convert a string to a URL-friendly slug. Lowercase, hyphens instead of spaces/symbols, trimmed hyphens.   createSlug('Hello World! Node.js') → 'hello-world-node-js'",
    fn: "createSlug",
    hint: "return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');",
    tests: [
      [[["Hello World! Node.js & Express"]], "hello-world-node-js-express"],
      [[["  My First API Route!  "]], "my-first-api-route"],
      [[["Simple"]], "simple"],
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
    parseQuery: "str",
    extractBearerToken: "header",
    matchRoute: "pattern, path",
    paginate: "arr, page, limit",
    buildInsertQuery: "table, data",
    buildSelectQuery: "table, where",
    sanitizeInput: "str",
    statusCategory: "code",
    rateLimitCheck: "timestamps, now, maxLimit, windowMs",
    groupByKey: "arr, prop",
    cleanEmptyFields: "obj",
    createSlug: "str",
  };
  if (names[ex.fn]) return names[ex.fn];
  return "arg";
}

// ================= saved progress (browser storage) =================
const STORE_KEY = "backend-coding-practice-v1";
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && s.code && s.done) return s;
  } catch {}
  return { code: {}, done: {}, current: "parseQuery" };
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}
const state = loadState();

// ================= saving to files (needs `node server.js` running) =================
const LESSON = "15-backend-coding";
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
