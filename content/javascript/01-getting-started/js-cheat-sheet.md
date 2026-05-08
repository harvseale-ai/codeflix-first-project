# JAVASCRIPT CHEAT SHEET — FINAL (TOUGH VERSION)

CORE: SELECT → STORE → LISTEN → CHANGE → DEBUG

JAVASCRIPT = BEHAVIOUR + INTERACTION

THINK:
What do I want the policy intelligence knowledge graph to do?

Find something? → querySelector()
Store data? → let / const / arrays / objects
React to click/input? → addEventListener()
Change page? → textContent / classList / innerHTML
Repeat work? → forEach() / loops
Save data? → localStorage
Fetch content? → fetch()
Debug? → console.log() / DevTools
```

## 1) CORE THINKING PATTERN

```text
JAVASCRIPT CHEAT SHEET — FINAL (PATTERN)

CORE: SELECT → STORE → LISTEN → CHANGE → DEBUG

SELECT: document.querySelector() | querySelectorAll()
VARIABLES: const | let
DATA: string | number | boolean | array | object
FUNCTIONS: function | arrow function
EVENTS: click | input | submit | change | keydown
DOM: textContent | innerHTML | classList | style | attributes
CONDITIONS: if | else if | else | switch
LOOPS: for | forEach | map | filter | find
FORMS: value | preventDefault() | validation
STORAGE: localStorage.setItem() | getItem() | JSON.stringify()
FETCH: fetch() | async | await | try/catch
DEBUG: console.log() | errors | DevTools
```

## 2) LINK JAVASCRIPT TO HTML

Best pattern:

```html
<script src="js/script.js" defer></script>
```

Meaning:

```text
src = JavaScript file path
defer = waits until HTML is loaded before running JS
```

Project structure:

```text
policy-graph/
  index.html
  css/
    style.css
  js/
    script.js
  data/
    policies.json
```

Correct HTML:

```html
<script src="js/script.js" defer></script>
```

## 3) VARIABLES

```js
const appName = "Policy Intelligence Graph";
let currentPolicyArea = "Housing";
```

Use:

```text
const = value should not be reassigned
let = value can change
var = old style, avoid for now
```

Examples:

```js
const analystName = "Harvey";
let selectedNodeCount = 0;

selectedNodeCount = selectedNodeCount + 1;
```

🚨 Rule:

```text
Use const first
Use let only when the value changes
Avoid var
```

## 4) DATA TYPES

```js
const title = "Policy Intelligence Graph";       // string
const policyCount = 42;                          // number
const isHighRisk = false;                        // boolean
const policyAreas = ["Housing", "Health"];       // array
const policyNode = { title: "Rent Reform" };     // object
const selectedNode = null;                       // intentional empty value
let activeFilter;                                // undefined
```

Check type:

```js
console.log(typeof title);
console.log(typeof policyCount);
```

## 5) STRINGS

```js
const policyArea = "Housing";
const message = "Welcome to the Policy Intelligence Graph";
```

String methods:

```js
message.length;
message.toUpperCase();
message.toLowerCase();
message.includes("Policy");
message.replace("Graph", "Map");
message.trim();
```

Template literals:

```js
const policyArea = "Climate";
const text = `Current policy area: ${policyArea}`;
```

Policy graph example:

```js
const policyTitle = "Net Zero Strategy";
const cardText = `Open intelligence brief for ${policyTitle}.`;
```

## 6) NUMBERS

```js
let evidenceCount = 100;
evidenceCount = evidenceCount + 1;
evidenceCount += 1;
evidenceCount++;
```

Common:

```js
const total = 10 + 5;
const difference = 10 - 5;
const product = 10 * 5;
const division = 10 / 5;
const remainder = 10 % 3;
```

Convert strings to numbers:

```js
const inputValue = "25";
const numberValue = Number(inputValue);
```

Policy graph example:

```js
const riskScoreInput = "82";
const riskScore = Number(riskScoreInput);
```

## 7) BOOLEANS

```js
const isLoggedIn = true;
const isReviewed = false;
```

Common comparisons:

```js
10 > 5;       // true
10 < 5;       // false
10 >= 10;     // true
10 <= 8;      // false
10 === 10;    // true
10 !== 5;     // true
```

🚨 Use:

```js
=== ✅
== ❌ avoid for now
```

Policy graph example:

```js
const riskScore = 82;
const isHighPriority = riskScore >= 75;
```

## 8) ARRAYS

```js
const policyAreas = ["Housing", "Health", "Climate", "Education"];
```

Access items:

```js
policyAreas[0]; // Housing
policyAreas[1]; // Health
```

Array methods:

```js
policyAreas.length;
policyAreas.push("Transport");
policyAreas.includes("Climate");
policyAreas.indexOf("Education");
policyAreas.join(", ");
```

Loop through array:

```js
policyAreas.forEach(function(area) {
  console.log(area);
});
```

Arrow version:

```js
policyAreas.forEach((area) => {
  console.log(area);
});
```

Policy graph example:

```js
const graphAreas = ["Housing", "Health", "Climate", "Transport"];

graphAreas.forEach((area) => {
  console.log(`Policy area available: ${area}`);
});
```

## 9) OBJECTS

```js
const policyNode = {
  title: "Affordable Housing Reform",
  category: "Housing",
  riskLevel: "Medium",
  reviewed: false
};
```

Access values:

```js
policyNode.title;
policyNode["category"];
```

Update values:

```js
policyNode.reviewed = true;
```

Array of objects:

```js
const policyNodes = [
  {
    title: "Affordable Housing Reform",
    category: "Housing",
    riskLevel: "Medium"
  },
  {
    title: "Clean Air Regulation",
    category: "Climate",
    riskLevel: "High"
  }
];
```

## 10) FUNCTIONS

Basic function:

```js
function greetAnalyst() {
  console.log("Welcome to the Policy Intelligence Graph");
}

greetAnalyst();
```

Function with parameter:

```js
function showPolicyArea(area) {
  console.log(`Current policy area: ${area}`);
}

showPolicyArea("Housing");
```

Function with return:

```js
function createPolicyTitle(area) {
  return `${area} Policy Brief`;
}

const title = createPolicyTitle("Climate");
```

Arrow function:

```js
const showPolicyArea = (area) => {
  console.log(`Current policy area: ${area}`);
};
```

## 11) CONDITIONS

```js
const riskScore = 85;

if (riskScore >= 80) {
  console.log("High policy risk");
} else if (riskScore >= 50) {
  console.log("Medium policy risk");
} else {
  console.log("Low policy risk");
}
```

Policy graph example:

```js
const isReviewed = true;

if (isReviewed) {
  console.log("Policy node reviewed");
} else {
  console.log("Policy node needs review");
}
```

Logical operators:

```js
&& = and
|| = or
!  = not
```

Example:

```js
const isAnalystLoggedIn = true;
const hasSavedGraph = true;

if (isAnalystLoggedIn && hasSavedGraph) {
  console.log("Show saved policy graph");
}
```

## 12) SELECT HTML ELEMENTS

HTML:

```html
<h1 id="hero-title">Policy Intelligence Graph</h1>
<p class="policy-summary">Explore connected policy evidence.</p>
<button id="start-btn">Start Analysis</button>
```

JavaScript:

```js
const heroTitle = document.querySelector("#hero-title");
const policySummary = document.querySelector(".policy-summary");
const startBtn = document.querySelector("#start-btn");
```

Select many:

```js
const cards = document.querySelectorAll(".policy-card");
```

Rules:

```text
# = id
. = class
element = tag name
```

🚨 Common mistake:

```js
document.querySelector("hero-title");  // wrong
document.querySelector("#hero-title"); // correct
```

## 13) CHANGE HTML CONTENT

```js
const title = document.querySelector("#hero-title");

title.textContent = "Welcome to the Policy Intelligence Graph";
```

Options:

```js
element.textContent = "Safe plain text";
element.innerHTML = "<strong>HTML allowed</strong>";
```

🚨 Rule:

```text
Use textContent for normal text
Use innerHTML only when you need HTML
Avoid putting user input into innerHTML
```

Policy graph example:

```js
const activePolicy = document.querySelector("#active-policy");

activePolicy.textContent = "Active policy: Clean Air Regulation";
```

## 14) CHANGE CLASSES

HTML:

```html
<article class="policy-card">Affordable Housing Reform</article>
```

JavaScript:

```js
const card = document.querySelector(".policy-card");

card.classList.add("active");
card.classList.remove("active");
card.classList.toggle("active");
card.classList.contains("active");
```

Policy graph example:

```js
const nodeCard = document.querySelector(".policy-node-card");

nodeCard.classList.add("is-selected");
```

## 15) CHANGE STYLES

```js
const graphPanel = document.querySelector(".graph-panel");

graphPanel.style.backgroundColor = "black";
graphPanel.style.color = "white";
graphPanel.style.padding = "2rem";
```

🚨 Better pattern:

```text
Use CSS classes instead of lots of inline JS styles
```

Better:

```js
graphPanel.classList.add("dark-mode");
```

CSS:

```css
.dark-mode {
  background-color: black;
  color: white;
}
```

## 16) EVENTS

Click event:

```js
const button = document.querySelector("#start-btn");

button.addEventListener("click", () => {
  console.log("Analysis started");
});
```

Input event:

```js
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
});
```

Common events:

```text
click
input
change
submit
keydown
keyup
mouseover
mouseout
DOMContentLoaded
```

## 17) BUTTON CLICK EXAMPLE

HTML:

```html
<button id="analyse-btn">Analyse Policy</button>
<p id="status">No policy selected</p>
```

JS:

```js
const analyseBtn = document.querySelector("#analyse-btn");
const statusText = document.querySelector("#status");

analyseBtn.addEventListener("click", () => {
  statusText.textContent = "Analysing policy: Affordable Housing Reform";
});
```

## 18) FORMS

HTML:

```html
<form id="policy-form">
  <label for="policy-title">Policy Title</label>
  <input id="policy-title" name="policyTitle" type="text">

  <label for="policy-notes">Evidence Notes</label>
  <textarea id="policy-notes" name="policyNotes"></textarea>

  <button type="submit">Add Policy Node</button>
</form>
```

JS:

```js
const policyForm = document.querySelector("#policy-form");
const policyTitle = document.querySelector("#policy-title");
const policyNotes = document.querySelector("#policy-notes");

policyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(policyTitle.value);
  console.log(policyNotes.value);
});
```

Important:

```text
event.preventDefault() stops page refresh
.value reads input value
```

## 19) FORM VALIDATION

```js
policyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (policyTitle.value.trim() === "") {
    console.log("Policy title is required");
    return;
  }

  console.log("Policy node submitted");
});
```

Policy graph example:

```js
const message = document.querySelector("#form-message");

policyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (policyTitle.value.trim() === "") {
    message.textContent = "Please enter a policy title.";
    return;
  }

  message.textContent = "Policy node added successfully.";
});
```

## 20) CREATE HTML WITH JAVASCRIPT

```js
const card = document.createElement("article");

card.classList.add("policy-card");
card.textContent = "Affordable Housing Reform";

document.body.appendChild(card);
```

Policy graph card example:

```js
const nodeList = document.querySelector("#node-list");

const card = document.createElement("article");
card.classList.add("card");

card.innerHTML = `
  <h3>Clean Air Regulation</h3>
  <p>Category: Climate</p>
  <button>Open Node</button>
`;

nodeList.appendChild(card);
```

## 21) RENDER ARRAY TO PAGE

HTML:

```html
<section id="node-list"></section>
```

JS:

```js
const nodeList = document.querySelector("#node-list");

const policyNodes = [
  { title: "Affordable Housing Reform", category: "Housing" },
  { title: "Clean Air Regulation", category: "Climate" },
  { title: "Digital ID Framework", category: "Technology" }
];

policyNodes.forEach((node) => {
  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
    <h3>${node.title}</h3>
    <p>${node.category}</p>
  `;

  nodeList.appendChild(card);
});
```

## 22) ARRAY METHODS

```js
const policyNodes = [
  { title: "Affordable Housing Reform", category: "Housing", reviewed: true },
  { title: "Clean Air Regulation", category: "Climate", reviewed: false },
  { title: "Digital ID Framework", category: "Technology", reviewed: false }
];
```

forEach:

```js
policyNodes.forEach((node) => {
  console.log(node.title);
});
```

map:

```js
const titles = policyNodes.map((node) => {
  return node.title;
});
```

filter:

```js
const unreviewedNodes = policyNodes.filter((node) => {
  return node.reviewed === false;
});
```

find:

```js
const housingNode = policyNodes.find((node) => {
  return node.category === "Housing";
});
```

some:

```js
const hasClimatePolicy = policyNodes.some((node) => {
  return node.category === "Climate";
});
```

## 23) SEARCH / FILTER EXAMPLE

HTML:

```html
<input id="search-input" type="search" placeholder="Search policy nodes">
<section id="node-list"></section>
```

JS:

```js
const searchInput = document.querySelector("#search-input");
const nodeList = document.querySelector("#node-list");

const policyNodes = [
  { title: "Affordable Housing Reform", category: "Housing" },
  { title: "Clean Air Regulation", category: "Climate" },
  { title: "Digital ID Framework", category: "Technology" }
];

function renderNodes(items) {
  nodeList.innerHTML = "";

  items.forEach((node) => {
    nodeList.innerHTML += `
      <article class="card">
        <h3>${node.title}</h3>
        <p>${node.category}</p>
      </article>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredNodes = policyNodes.filter((node) => {
    return node.title.toLowerCase().includes(searchTerm);
  });

  renderNodes(filteredNodes);
});

renderNodes(policyNodes);
```

## 24) LOCAL STORAGE

Save:

```js
localStorage.setItem("analystName", "Harvey");
```

Read:

```js
const analystName = localStorage.getItem("analystName");
```

Remove:

```js
localStorage.removeItem("analystName");
```

Clear all:

```js
localStorage.clear();
```

Save object/array:

```js
const policyNode = {
  title: "Clean Air Regulation",
  notes: "Linked to air quality, public health, and transport emissions."
};

localStorage.setItem("policyNode", JSON.stringify(policyNode));
```

Read object/array:

```js
const savedPolicyNode = JSON.parse(localStorage.getItem("policyNode"));
```

## 25) POLICY NODE SUBMISSION STORAGE EXAMPLE

HTML:

```html
<form id="policy-form">
  <input id="analyst-name" type="text" placeholder="Analyst name">
  <input id="policy-title" type="text" placeholder="Policy title">
  <textarea id="policy-notes" placeholder="Evidence notes"></textarea>
  <button type="submit">Add Policy Node</button>
</form>

<section id="submissions-list"></section>
```

JS:

```js
const form = document.querySelector("#policy-form");
const analystName = document.querySelector("#analyst-name");
const policyTitle = document.querySelector("#policy-title");
const policyNotes = document.querySelector("#policy-notes");
const submissionsList = document.querySelector("#submissions-list");

let submissions = JSON.parse(localStorage.getItem("policySubmissions")) || [];

function saveSubmissions() {
  localStorage.setItem("policySubmissions", JSON.stringify(submissions));
}

function renderSubmissions() {
  submissionsList.innerHTML = "";

  submissions.forEach((submission) => {
    submissionsList.innerHTML += `
      <article class="card">
        <h3>${submission.title}</h3>
        <p><strong>Analyst:</strong> ${submission.name}</p>
        <p>${submission.notes}</p>
      </article>
    `;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newSubmission = {
    name: analystName.value.trim(),
    title: policyTitle.value.trim(),
    notes: policyNotes.value.trim()
  };

  submissions.push(newSubmission);

  saveSubmissions();
  renderSubmissions();

  form.reset();
});

renderSubmissions();
```

## 26) FETCH BASICS

```js
fetch("data/policies.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Async/await version:

```js
async function loadPolicyData() {
  const response = await fetch("data/policies.json");
  const data = await response.json();

  console.log(data);
}

loadPolicyData();
```

## 27) FETCH WITH ERROR HANDLING

```js
async function loadPolicyBrief(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Policy brief not found");
    }

    const content = await response.text();

    console.log(content);
  } catch (error) {
    console.error(error);
  }
}

loadPolicyBrief("content/policies/housing-reform.md");
```

## 28) POLICY BRIEF CONTENT LOADER EXAMPLE

HTML:

```html
<nav>
  <button class="policy-btn" data-path="content/policies/housing-reform.md">Housing Reform</button>
  <button class="policy-btn" data-path="content/policies/clean-air.md">Clean Air</button>
</nav>

<main id="content-viewer">
  Select a policy brief.
</main>
```

JS:

```js
const policyButtons = document.querySelectorAll(".policy-btn");
const contentViewer = document.querySelector("#content-viewer");

async function loadPolicyBrief(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("File not found");
    }

    const brief = await response.text();

    contentViewer.textContent = brief;
  } catch (error) {
    contentViewer.textContent = "Sorry, this policy brief could not be loaded.";
    console.error(error);
  }
}

policyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const path = button.dataset.path;
    loadPolicyBrief(path);
  });
});
```

## 29) DATA ATTRIBUTES

HTML:

```html
<button data-policy="Housing Reform" data-path="content/policies/housing-reform.md">
  Housing Reform
</button>
```

JS:

```js
const button = document.querySelector("button");

console.log(button.dataset.policy);
console.log(button.dataset.path);
```

Use for:

```text
storing paths
storing node ids
filtering policy cards
loading policy briefs
connecting HTML to JS
```

## 30) DATE / TIME

```js
const now = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
```

Policy graph timestamp:

```js
const reviewedAt = new Date().toLocaleString();

const review = {
  title: "Clean Air Regulation",
  reviewedAt: reviewedAt
};
```

## 31) TRY / CATCH

```js
try {
  const data = JSON.parse("{ broken json }");
} catch (error) {
  console.error("Something went wrong:", error);
}
```

Use for:

```text
fetch errors
JSON parsing
risky code
```

## 32) MODULE THINKING

For small projects:

```text
One script.js is okay
```

For bigger projects:

```text
main.js
storage.js
render.js
forms.js
graph.js
filters.js
```

Example:

```html
<script type="module" src="js/main.js"></script>
```

Export:

```js
export function saveData() {
  console.log("Saved");
}
```

Import:

```js
import { saveData } from "./storage.js";

saveData();
```

## 33) COMMON POLICY GRAPH FUNCTIONS

```js
function renderPolicyCard(node) {
  return `
    <article class="card">
      <h3>${node.title}</h3>
      <p>${node.category}</p>
      <button data-path="${node.path}">Open Brief</button>
    </article>
  `;
}
```

```js
function clearElement(element) {
  element.innerHTML = "";
}
```

```js
function showMessage(element, message) {
  element.textContent = message;
}
```

```js
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
```

```js
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
```

## 34) COMMON DOM PROPERTY MAP

```text
Content:
textContent
innerHTML
value

Classes:
classList.add()
classList.remove()
classList.toggle()
classList.contains()

Attributes:
getAttribute()
setAttribute()
removeAttribute()

Data:
dataset.name
dataset.path
dataset.id
dataset.policy
dataset.risk

Style:
style.color
style.backgroundColor
style.display

Events:
addEventListener()
```

Examples:

```js
element.textContent = "Policy risk updated";
input.value = "";
card.classList.add("active");
image.setAttribute("alt", "Policy graph preview");
button.dataset.path;
```

## 35) EVENT OBJECT

```js
button.addEventListener("click", (event) => {
  console.log(event.target);
});
```

Useful:

```js
event.preventDefault();
event.target;
event.currentTarget;
event.key;
```

Keyboard example:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    console.log("Close policy detail panel");
  }
});
```

## 36) EVENT DELEGATION

Use when many buttons are created dynamically.

HTML:

```html
<section id="node-list"></section>
```

JS:

```js
nodeList.addEventListener("click", (event) => {
  if (event.target.matches(".open-policy-btn")) {
    const path = event.target.dataset.path;
    console.log(path);
  }
});
```

Why:

```text
Instead of adding event listeners to every button
Add one listener to the parent
```

## 37) TIMEOUTS / INTERVALS

Run once after delay:

```js
setTimeout(() => {
  console.log("Welcome to the Policy Intelligence Graph");
}, 1000);
```

Run repeatedly:

```js
setInterval(() => {
  console.log("Refreshing policy intelligence view...");
}, 5000);
```

Stop interval:

```js
const timer = setInterval(() => {
  console.log("Checking graph updates");
}, 1000);

clearInterval(timer);
```

## 38) DEBUGGING

```js
console.log("Hello");
console.log(variableName);
console.warn("Warning message");
console.error("Error message");
```

Useful:

```js
console.table(array);
```

Example:

```js
console.table(policyNodes);
```

DevTools:

```text
Console = see errors and logs
Elements = check HTML/classes
Sources = inspect JS files
Network = check fetch/file loading
Application = check localStorage
```

## 39) COMMON JAVASCRIPT ERRORS

```text
❌ JS file not linked
❌ Wrong file path
❌ Script runs before HTML exists
❌ Missing defer
❌ querySelector returns null
❌ .class vs #id mistake
❌ Missing semicolon or bracket
❌ Using = instead of ===
❌ Forgetting event.preventDefault()
❌ Using innerHTML with unsafe user input
❌ localStorage only stores strings
❌ Forgetting JSON.stringify()
❌ Forgetting JSON.parse()
❌ Fetch path wrong
❌ Trying to use array method on non-array
```

## 40) DEBUG CHECKLIST

```text
1. Is script.js linked?
2. Is defer added?
3. Is the file path correct?
4. Is the selector correct?
5. Does the HTML element exist?
6. Did querySelector return null?
7. Is the event listener attached?
8. Is the button type correct?
9. Did you prevent form refresh?
10. Is the variable declared?
11. Is the data an array/object/string?
12. Did you stringify before localStorage?
13. Did you parse after localStorage?
14. Is the fetch path correct?
15. Check Console errors
16. Check Network tab
17. Use console.log()
```

## 41) POLICY INTELLIGENCE GRAPH FULL STARTER EXAMPLE

HTML:

```html
<header>
  <h1>Policy Intelligence Graph</h1>

  <input id="search-input" type="search" placeholder="Search policies, risks, or evidence">
</header>

<section id="node-list"></section>

<section>
  <h2 id="active-policy">Select a policy node</h2>
  <div id="content-viewer">Policy intelligence content will appear here.</div>
</section>
```

JS:

```js
const searchInput = document.querySelector("#search-input");
const nodeList = document.querySelector("#node-list");
const activePolicy = document.querySelector("#active-policy");
const contentViewer = document.querySelector("#content-viewer");

const policyNodes = [
  {
    title: "Affordable Housing Reform",
    category: "Housing",
    riskLevel: "Medium",
    path: "content/policies/housing-reform.md"
  },
  {
    title: "Clean Air Regulation",
    category: "Climate",
    riskLevel: "High",
    path: "content/policies/clean-air.md"
  },
  {
    title: "Digital ID Framework",
    category: "Technology",
    riskLevel: "High",
    path: "content/policies/digital-id.md"
  }
];

function renderNodes(items) {
  nodeList.innerHTML = "";

  items.forEach((node) => {
    nodeList.innerHTML += `
      <article class="card">
        <h3>${node.title}</h3>
        <p>${node.category}</p>
        <p>Risk: ${node.riskLevel}</p>
        <button class="open-policy-btn" data-title="${node.title}" data-path="${node.path}">
          Open Policy Brief
        </button>
      </article>
    `;
  });
}

async function loadPolicyBrief(title, path) {
  try {
    activePolicy.textContent = `Active policy: ${title}`;

    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Policy brief not found");
    }

    const content = await response.text();

    contentViewer.textContent = content;
  } catch (error) {
    contentViewer.textContent = "Sorry, this policy brief could not be loaded.";
    console.error(error);
  }
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredNodes = policyNodes.filter((node) => {
    return (
      node.title.toLowerCase().includes(searchTerm) ||
      node.category.toLowerCase().includes(searchTerm) ||
      node.riskLevel.toLowerCase().includes(searchTerm)
    );
  });

  renderNodes(filteredNodes);
});

nodeList.addEventListener("click", (event) => {
  if (event.target.matches(".open-policy-btn")) {
    const title = event.target.dataset.title;
    const path = event.target.dataset.path;

    loadPolicyBrief(title, path);
  }
});

renderNodes(policyNodes);
```

## 42) QUICK JS MEMORY MAP

```text
Select:
querySelector
querySelectorAll

Store:
const
let
array
object

Listen:
addEventListener
click
input
submit

Change:
textContent
innerHTML
classList
style
setAttribute

Loop:
forEach
map
filter
find

Save:
localStorage
JSON.stringify
JSON.parse

Load:
fetch
async
await
try/catch

Debug:
console.log
console.table
DevTools
```

## FINAL MEMORY MODEL

```text
JAVASCRIPT = SELECT → STORE → LISTEN → CHANGE → DEBUG

Select:
Find HTML elements

Store:
Variables, arrays, objects

Listen:
Click, input, submit, keyboard

Change:
Text, classes, HTML, storage

Debug:
Console, DevTools, logs, errors
```
