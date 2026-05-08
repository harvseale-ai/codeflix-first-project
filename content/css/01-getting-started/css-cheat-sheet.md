# CSS CHEAT SHEET

CORE: TARGET → STYLE → LAYOUT → RESPONSIVE → DEBUG

CSS = SELECT AN ELEMENT + APPLY PROPERTY: VALUE;

THINK:

```text
What do I want?
Target? → selector
Colour/text? → typography
Space? → margin / padding / gap
Layout? → display / flex / grid
Position? → relative / absolute / fixed / sticky
Responsive? → media queries / clamp()
Debug? → selector / specificity / path / DevTools
```

## 1) CORE THINKING PATTERN

```text
CSS CHEAT SHEET — FINAL (PATTERN)

CORE: TARGET → STYLE → DEBUG

SELECTORS: element | .class | #id | parent child | parent > child | :hover
RESET: * | html | body | box-sizing
ROOT: :root { --variable-name: value; }
TEXT: color | font-size | font-family | font-weight | line-height | text-align
SPACING: margin = outside | padding = inside | gap = space between flex/grid items
BOX: width | height | border | border-radius | box-shadow
BACKGROUND: background-color | background-image | background-size | background-position
DISPLAY: block | inline | inline-block | flex | grid | none
FLEX: justify-content | align-items | flex-direction | flex-wrap | gap
GRID: grid-template-columns | grid-template-rows | gap | grid-column
POSITION: static | relative | absolute | fixed | sticky | z-index
UNITS: px | rem | em | % | vh | vw | fr | clamp()
RESPONSIVE: @media | min-width | max-width
SPECIFICITY: inline > id > class/pseudo-class > element
DEBUG: linked? selector? property? override? path? DevTools?
```

## 2) UNIVERSAL CSS PATTERN

```css
selector {
  property: value;
}
```

Example:

```css
.card {
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 12px;
}
```

Memory:

```text
selector = target
property = what you change
value = how you change it
```

## 3) CSS FILE LINK

```html
<link rel="stylesheet" href="css/style.css">
```

Rules:

```text
HTML links CSS
CSS links images
Path depends on where the file is written from
```

Example:

```css
.hero {
  background-image: url("../images/hero.jpg");
}
```

## 4) RESET / STARTER CSS

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}
```

Meaning:

```text
* = all elements
box-sizing: border-box = padding/border included in width
margin: 0 = removes default browser spacing
padding: 0 = removes default internal spacing
```

## 5) ROOT VARIABLES

```css
:root {
  --bg-color: #0f0f0f;
  --text-color: #ffffff;
  --accent-color: #e50914;
  --card-radius: 16px;
  --section-padding: 4rem;
}
```

Use variables:

```css
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

button {
  background-color: var(--accent-color);
  border-radius: var(--card-radius);
}
```

Common variable pattern:

```css
:root {
  --color-primary: #0d6efd;
  --color-secondary: #6c757d;
  --color-dark: #111111;
  --color-light: #f8f9fa;
  --font-main: Arial, sans-serif;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}
```

## 6) SELECTORS

```css
p {
  color: black;
}

.card {
  padding: 1rem;
}

#main-title {
  font-size: 3rem;
}
```

Selector types:

```text
p                 = all p elements
.class            = reusable class
#id               = one unique element
section p         = any p inside section
section > p       = direct child p only
h1, h2, h3        = multiple selectors
.card.active      = element with both classes
.card .title      = .title inside .card
```

State selectors:

```css
a:hover {
  color: red;
}

button:focus {
  outline: 2px solid blue;
}

input:disabled {
  opacity: 0.5;
}

li:first-child {
  font-weight: bold;
}

li:last-child {
  margin-bottom: 0;
}

li:nth-child(odd) {
  background-color: #f2f2f2;
}
```

Pseudo-elements:

```css
p::first-letter {
  font-size: 2rem;
}

.card::before {
  content: "";
  display: block;
}

.card::after {
  content: "New";
}
```

🚨 Common selector errors:

```text
.box = class ✅
#box = id ✅
box = element named box ❌ usually wrong
.card title = title element inside .card ❌ usually wrong
.card .title = class title inside card ✅
```

## 7) TEXT / TYPOGRAPHY

```css
p {
  color: #333333;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
}
```

Property:value options:

```css
color: black;
color: white;
color: #e50914;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

font-size: 16px;
font-size: 1rem;
font-size: 2rem;
font-size: clamp(1.5rem, 4vw, 4rem);

font-family: Arial, sans-serif;
font-family: Georgia, serif;
font-family: "Times New Roman", serif;

font-weight: 300;
font-weight: 400;
font-weight: 600;
font-weight: 700;
font-weight: bold;

line-height: 1.2;
line-height: 1.5;
line-height: 1.8;

text-align: left;
text-align: center;
text-align: right;
text-align: justify;

text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
text-transform: none;

text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

letter-spacing: 1px;
word-spacing: 4px;
```

Common pattern:

```css
h1 {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
}
```

## 8) SPACING

```text
margin = outside space
padding = inside space
gap = space between flex/grid children
```

Margin:

```css
.box {
  margin: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
}
```

Padding:

```css
.box {
  padding: 1rem;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
}
```

Shorthand:

```css
.box {
  margin: 1rem;              /* all sides */
  margin: 1rem 2rem;         /* top/bottom left/right */
  margin: 1rem 2rem 3rem;    /* top left/right bottom */
  margin: 1rem 2rem 3rem 4rem; /* top right bottom left */
}
```

Center block:

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
```

🚨 Common confusion:

```text
padding pushes content inward
margin pushes element away from other elements
```

## 9) BOX MODEL

```text
[ margin ]
  [ border ]
    [ padding ]
      [ content ]
```

Box properties:

```css
.card {
  width: 300px;
  max-width: 100%;
  min-width: 200px;

  height: 200px;
  min-height: 100vh;
  max-height: 500px;

  padding: 1rem;
  margin: 1rem;

  border: 1px solid #ccc;
  border-radius: 12px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

Property:value options:

```css
width: auto;
width: 100%;
width: 300px;
width: min(100%, 1200px);

height: auto;
height: 100vh;
height: 300px;

border: none;
border: 1px solid black;
border: 2px dashed red;
border: 3px dotted blue;

border-radius: 0;
border-radius: 8px;
border-radius: 50%;

overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;
```

## 10) BACKGROUNDS

```css
.hero {
  background-color: black;
  background-image: url("../images/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

Property:value options:

```css
background-color: white;
background-color: #111111;
background-color: transparent;

background-image: url("../images/photo.jpg");
background-image: linear-gradient(to right, black, red);
background-image: none;

background-size: cover;
background-size: contain;
background-size: 100% 100%;
background-size: auto;

background-position: center;
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;

background-repeat: no-repeat;
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;

background-attachment: scroll;
background-attachment: fixed;
```

Shorthand:

```css
.hero {
  background: url("../images/hero.jpg") center / cover no-repeat;
}
```

## 11) DISPLAY

```css
.box {
  display: block;
}
```

Property:value options:

```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```

Meaning:

```text
block = full width, starts new line
inline = same line, ignores width/height
inline-block = same line but allows width/height
flex = one-dimensional layout
grid = two-dimensional layout
none = hidden and removed from layout
```

## 12) FLEXBOX

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

Property:value options:

```css
display: flex;

flex-direction: row;
flex-direction: column;
flex-direction: row-reverse;
flex-direction: column-reverse;

justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

align-items: stretch;
align-items: flex-start;
align-items: center;
align-items: flex-end;
align-items: baseline;

flex-wrap: nowrap;
flex-wrap: wrap;

gap: 0;
gap: 1rem;
gap: 2rem;
```

Child options:

```css
.item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 300px;
  align-self: center;
  order: 2;
}
```

Common patterns:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

## 13) CSS GRID

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Property:value options:

```css
display: grid;

grid-template-columns: 1fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

grid-template-rows: auto;
grid-template-rows: 100px 1fr auto;

gap: 1rem;
column-gap: 1rem;
row-gap: 2rem;

place-items: center;
align-items: center;
justify-items: center;
```

Child options:

```css
.item {
  grid-column: span 2;
  grid-row: span 1;
}
```

Best responsive card grid:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

## 14) POSITIONING

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
```

Property:value options:

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

top: 0;
right: 0;
bottom: 0;
left: 0;

z-index: 1;
z-index: 10;
z-index: 999;
```

Meaning:

```text
static = default
relative = can move itself and becomes parent for absolute children
absolute = positioned inside nearest relative parent
fixed = sticks to viewport
sticky = sticks when scrolling after a point
z-index = layer order
```

🚨 Critical rule:

```text
absolute usually needs position: relative on the parent
z-index only works on positioned elements
```

## 15) IMAGES / MEDIA

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

Property:value options:

```css
object-fit: cover;
object-fit: contain;
object-fit: fill;

object-position: center;
object-position: top;
object-position: bottom;

aspect-ratio: 16 / 9;
aspect-ratio: 1 / 1;
```

Image card pattern:

```css
.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
}
```

## 16) LINKS / BUTTONS

```css
a {
  color: inherit;
  text-decoration: none;
}
```

Button pattern:

```css
.btn {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
}
```

Hover pattern:

```css
.btn:hover {
  background-color: darkred;
  transform: translateY(-2px);
}
```

Property:value options:

```css
cursor: pointer;
cursor: default;
cursor: not-allowed;

opacity: 1;
opacity: 0.8;
opacity: 0.5;

pointer-events: auto;
pointer-events: none;
```

## 17) TRANSITIONS / ANIMATION

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

Property:value options:

```css
transition: all 0.3s ease;
transition: transform 0.3s ease;
transition: opacity 0.2s ease-in-out;

transform: translateX(10px);
transform: translateY(-10px);
transform: scale(1.05);
transform: rotate(5deg);
```

Animation:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease forwards;
}
```

## 18) RESPONSIVE DESIGN / MEDIA QUERIES

```css
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

Common:

```css
@media (max-width: 600px) {
  .hero {
    padding: 2rem 1rem;
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

Responsive text:

```css
h1 {
  font-size: clamp(2rem, 6vw, 5rem);
}
```

Meaning:

```text
clamp(min, flexible, max)
```

## 19) UNITS

```text
px = fixed size
rem = based on root html font size
em = based on parent/current font size
% = based on parent
vh = viewport height
vw = viewport width
fr = grid fraction
ch = character width
```

Examples:

```css
.box {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  min-height: 100vh;
}

.grid {
  grid-template-columns: 1fr 1fr;
}
```

Rules:

```text
Use rem for spacing and text
Use % for flexible widths
Use vh for full-screen sections
Use fr for grid
Use px for borders and fine details
```

## 20) FORMS

```css
input,
textarea,
select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font: inherit;
}
```

Property:value options:

```css
outline: none;
resize: vertical;
resize: none;

accent-color: red;

caret-color: red;
```

Focus pattern:

```css
input:focus,
textarea:focus {
  outline: 2px solid red;
  border-color: red;
}
```

## 21) LISTS

```css
ul {
  list-style: none;
  padding-left: 0;
}
```

Property:value options:

```css
list-style: none;
list-style: disc;
list-style: decimal;
list-style-position: inside;
list-style-position: outside;
```

## 22) TABLES

```css
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  padding: 0.75rem;
  border: 1px solid #dddddd;
}
```

Property:value options:

```css
border-collapse: collapse;
border-collapse: separate;

text-align: left;
vertical-align: middle;
vertical-align: top;
```

## 23) ACCESSIBILITY / FOCUS

```css
:focus-visible {
  outline: 3px solid #ffcc00;
  outline-offset: 4px;
}
```

Useful:

```css
button:focus-visible,
a:focus-visible {
  outline: 3px solid yellow;
  outline-offset: 4px;
}
```

Hide visually but keep for screen readers:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
```

## 24) SPECIFICITY / CASCADE

Power order:

```text
inline style > #id > .class / :hover > element
```

Example:

```css
p {
  color: blue;
}

.text-red {
  color: red;
}
```

Result:

```text
class wins
```

Source order:

```css
.box {
  color: blue;
}

.box {
  color: red;
}
```

Result:

```text
red wins because it comes later
```

🚨 Avoid:

```css
!important
```

Only use rarely:

```css
.hidden {
  display: none !important;
}
```

## 25) FILE PATH PATTERN

```text
HTML → links CSS
CSS → links images
../ = go up one folder
./ = current folder
/ = root folder
```

Example structure:

```text
project/
  index.html
  css/
    style.css
  images/
    hero.jpg
```

Correct CSS path:

```css
.hero {
  background-image: url("../images/hero.jpg");
}
```

🚨 Common error:

```text
Writing the image path from the HTML file instead of from the CSS file
```

## 26) COMMON LAYOUT PATTERNS

Center text:

```css
.text-center {
  text-align: center;
}
```

Center block:

```css
.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}
```

Center everything:

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Dark section:

```css
.dark-section {
  background-color: #111111;
  color: #ffffff;
}
```

Hero section:

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url("../images/hero.jpg") center / cover no-repeat;
}
```

Card grid:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

Fixed navbar:

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
```

Sticky header:

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## 27) DEBUG CHECKLIST

```text
1. CSS file linked?
2. File path correct?
3. Selector correct?
4. .class vs #id correct?
5. HTML class name matches CSS exactly?
6. Property spelling correct?
7. Value valid?
8. Missing ; ?
9. Missing } ?
10. Overridden by another rule?
11. Specificity issue?
12. Browser default styles interfering?
13. Parent layout controlling child?
14. Image path written from CSS file location?
15. DevTools checked?
```

## 28) BIG CSS MISTAKES

```text
❌ wrong selector
❌ . vs # confusion
❌ missing semicolon
❌ missing closing brace
❌ margin vs padding confusion
❌ image path written from wrong file
❌ trying width/height on inline elements
❌ absolute without relative parent
❌ z-index without position
❌ flex properties on non-flex parent
❌ grid properties on non-grid parent
❌ styles overridden by later CSS
❌ using px for everything
❌ not testing mobile
```

## 29) MINI PROPERTY MAP

```text
Colour:
color
background-color

Text:
font-size
font-family
font-weight
line-height
text-align
text-transform
text-decoration

Spacing:
margin
padding
gap

Size:
width
height
min-width
max-width
min-height
max-height

Box:
border
border-radius
box-shadow
overflow

Layout:
display
flex-direction
justify-content
align-items
grid-template-columns

Position:
position
top
right
bottom
left
z-index

Background:
background-image
background-size
background-position
background-repeat

Effects:
transition
transform
animation
opacity

Responsive:
@media
clamp()
min()
max()
```

## 30) FULL STARTER TEMPLATE

```css
:root {
  --color-bg: #0f0f0f;
  --color-text: #ffffff;
  --color-accent: #e50914;
  --color-card: #1a1a1a;
  --font-main: Arial, sans-serif;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --radius-md: 12px;
  --radius-lg: 20px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  min-height: 100vh;
  font-family: var(--font-main);
  line-height: 1.5;
  background-color: var(--color-bg);
  color: var(--color-text);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}

.section {
  padding: 4rem 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.card {
  background-color: var(--color-card);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }
}
```

## FINAL MEMORY MODEL

```text
CSS = TARGET → STYLE → LAYOUT → RESPONSIVE → DEBUG

Target:
selector

Style:
property: value;

Layout:
box model / flex / grid / position

Responsive:
%, rem, clamp(), media queries

Debug:
link / selector / specificity / path / DevTools
```
