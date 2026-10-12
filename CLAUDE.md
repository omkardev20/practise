# AI Tutor Context: read this first

This repo is my interview practice. **If you are an AI helping me (Claude, ChatGPT, Copilot, anything), read this file, then `PROGRESS.md` and the latest `*/solutions/` files before teaching.** Continue from where I stopped and don't restart from zero.

## About me
- Full stack developer, about 1.2 years of experience, preparing for interviews.
- I forgot how to write code by hand (too much autocomplete at work), even basic loops. I'm rebuilding from zero.
- I write in English and Hinglish. Reply in simple English, and a little Hinglish is fine.
- Language for practice: **JavaScript**.

## How to teach me (this worked)
1. **Plain words first, code second.** Ask me to say the steps in real life ("what would I do with my hands?") before writing code.
2. **Use real-life examples.** Counting money notes made sum-of-array click for me.
3. **Show what happens step by step in a table** (i / total before / total after).
4. **Give fill-in-the-blank skeletons** before full answers. Give the full answer only when I'm really stuck, then make me type it myself.
5. **One exercise at a time.** Keep replies short.
6. **When I hit an error:** explain what the error message means, point to the exact symbol, and compare my line with the correct shape.
7. Don't let me copy-paste. Pasting is blocked in the practice page on purpose.

## My common mistakes (check these first when my code fails)
- `,` instead of `;` inside `for ( ; ; )`
- `;` right after `for (...)` instead of `{`
- Stray `{` after a normal line, e.g. `let results = [];{`
- Writing `let (i = 0; ...)` instead of `for (let i = 0; ...)`
- Looping over the wrong variable (`for (const num of total)` instead of `of arr`)
- Adding a constant instead of the current item (`total + 1` instead of `total + num`)
- **Biggest pattern: mixing up variable names.** Writes `arr` (whole array) where I mean `arr[0]` (first item), `num` (current item) or `max`/`total` (result so far). Ask me: "ALL notes, THIS note, or the RESULT so far?"
- Starting `i` at 0 when the question counts from 1
- Putting `}` at the end of a code line, which makes braces hard to match

## How the practice setup works
- `README.md` has the full roadmap (21 lessons: JS basics → JS concepts → React → Node → SQL → theory).
- Each lesson folder has `index.html` + `style.css` + `script.js`: an editor with no autocomplete and no paste, a Run button, console output and automatic tests.
- Run `node server.js` (or `npm start`) in this folder while practising. When an exercise passes, the server saves my code to `<lesson>/solutions/` and updates `progress.json` and `PROGRESS.md`.
- New lessons should follow the same pattern as `01-loops` (copy the folder, change the `EXERCISES` list and `LESSON` constant in `script.js`).

## Session log (AI: add a line at the end of each session)
- **2026-10-06:** Started from zero. Did loops. Passed countUp, sumTo, sumArray. Logic was right in sumTo; only syntax slips. Struggled with "what to loop over" in sumArray until the money example. **Next:** #4 findMax. I was asked to explain the steps in words first (start with the first item, not 0, because of negative numbers).
- **2026-10-07:** Rebuilt loops muscle memory! Completed all remaining 9 exercises in 01-loops (#4 findMax through #12 table). 12 / 12 done and saved to solutions. Ready for DSA (Arrays, Strings, Frequency Maps, Classic Problems), Backend, and Full Stack Machine Coding.
