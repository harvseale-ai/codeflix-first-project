# HTML CHEAT SHEET

CORE: STRUCTURE → SEMANTICS → CONTENT → ACCESSIBILITY → DEBUG

HTML = THE STRUCTURE OF THE WEB PAGE

THINK:
What am I building?

Page structure? → html / head / body
Main layout? → header / nav / main / section / footer
Text? → h1-h6 / p / strong / em
Links? → a href=""
Images? → img src="" alt=""
Lists? → ul / ol / li
Forms? → form / label / input / textarea / select
Tables? → table / tr / th / td
Media? → video / audio / iframe
Debug? → nesting / closing tags / paths / alt text
```

## 1) CORE THINKING PATTERN

```text
HTML CHEAT SHEET — FINAL (PATTERN)

CORE: STRUCTURE → CONTENT → MEANING → DEBUG

DOCUMENT: <!doctype html> | html | head | body
META: charset | viewport | title | description
TEXT: h1-h6 | p | strong | em | span | br
LAYOUT: header | nav | main | section | article | aside | footer
LINKS: a | href | target | rel
IMAGES: img | src | alt | width | height
LISTS: ul | ol | li
FORMS: form | label | input | textarea | select | button
TABLES: table | thead | tbody | tr | th | td
MEDIA: video | audio | source | iframe
SEMANTICS: use meaningful tags, not just divs
ACCESSIBILITY: alt text | labels | headings | landmarks
DEBUG: closed tags? correct nesting? file paths? valid attributes?
```

## 2) BASIC HTML PAGE TEMPLATE

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Codeflix</title>
  <meta name="description" content="A streaming-style coding knowledge hub.">

  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <header>
    <h1>Codeflix</h1>
  </header>

  <main>
    <section>
      <h2>Featured Topics</h2>
      <p>Learn HTML, CSS, JavaScript, and SQL.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Codeflix</p>
  </footer>

</body>
</html>
```

## 3) DOCUMENT STRUCTURE

```html
<!doctype html>
<html lang="en">
<head>
  <!-- page information -->
</head>

<body>
  <!-- visible page content -->
</body>
</html>
```

Meaning:

```text
<!doctype html> = tells browser this is HTML5
html = whole document
head = information about the page
body = visible page content
lang="en" = page language
```

🚨 Common mistake:

```text
Putting visible content inside <head> ❌
Visible content goes inside <body> ✅
```

## 4) HEAD SECTION

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Page Title</title>
  <meta name="description" content="Page description here.">

  <link rel="stylesheet" href="css/style.css">
</head>
```

Common head tags:

```text
meta charset = character encoding
meta viewport = mobile responsive scaling
title = browser tab title
meta description = search engine description
link stylesheet = connects CSS file
script = connects JavaScript file
```

CSS link:

```html
<link rel="stylesheet" href="css/style.css">
```

JavaScript link:

```html
<script src="js/script.js" defer></script>
```

## 5) BODY STRUCTURE / SEMANTIC LAYOUT

```html
<body>
  <header>
    <nav></nav>
  </header>

  <main>
    <section></section>
    <article></article>
    <aside></aside>
  </main>

  <footer></footer>
</body>
```

Meaning:

```text
header = top area / intro / logo / nav
nav = navigation links
main = main page content
section = grouped content section
article = standalone content
aside = side content
footer = bottom area
```

Good structure:

```html
<header>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
</header>

<main>
  <section>
    <h1>Welcome to Codeflix</h1>
    <p>A coding knowledge hub.</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 Codeflix</p>
</footer>
```

## 6) DIV VS SEMANTIC TAGS

```html
<div></div>
```

Use `div` when:

```text
You need a generic wrapper
There is no better semantic tag
You are grouping content for CSS layout
```

Prefer semantic tags:

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<footer></footer>
```

Rule:

```text
Use meaning first
Use div second
```

## 7) HEADINGS

```html
<h1>Main page heading</h1>
<h2>Major section</h2>
<h3>Subsection</h3>
<h4>Smaller subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>
```

Rules:

```text
One main h1 per page is best
Do not skip heading levels
Use headings for structure, not just size
```

Good:

```html
<h1>Codeflix</h1>
<h2>HTML Lessons</h2>
<h3>Forms</h3>
```

Bad:

```html
<h1>Codeflix</h1>
<h5>Forms</h5>
```

## 8) TEXT TAGS

```html
<p>This is a paragraph.</p>

<strong>Important text</strong>

<em>Emphasised text</em>

<span>Small inline text wrapper</span>

<br>
```

Meaning:

```text
p = paragraph
strong = important
em = emphasis
span = inline generic wrapper
br = line break
```

Examples:

```html
<p>
  Learn <strong>HTML</strong> before moving to <em>CSS layout</em>.
</p>
```

🚨 Avoid:

```html
<p>This is line one<br><br><br>This is line two</p>
```

Use CSS margin/padding for spacing instead.

## 9) LINKS

```html
<a href="about.html">About</a>
```

External link:

```html
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
  MDN Web Docs
</a>
```

Email link:

```html
<a href="mailto:example@email.com">Email me</a>
```

Phone link:

```html
<a href="tel:+441234567890">Call me</a>
```

Page section link:

```html
<a href="#contact">Go to contact</a>

<section id="contact">
  <h2>Contact</h2>
</section>
```

Attributes:

```text
href = destination
target="_blank" = open in new tab
rel="noopener noreferrer" = security for new tab links
id = link target inside page
```

## 10) FILE PATHS

Same folder:

```html
<a href="about.html">About</a>
```

Inside folder:

```html
<img src="images/photo.jpg" alt="Photo">
```

Go up one folder:

```html
<a href="../index.html">Home</a>
```

Path rules:

```text
./ = current folder
../ = go up one folder
folder/file.html = go into folder
```

Example structure:

```text
project/
  index.html
  about.html
  images/
    hero.jpg
  pages/
    contact.html
```

From `index.html` to image:

```html
<img src="images/hero.jpg" alt="Hero image">
```

From `pages/contact.html` to home:

```html
<a href="../index.html">Home</a>
```

## 11) IMAGES

```html
<img src="images/codeflix.jpg" alt="Codeflix homepage preview">
```

Attributes:

```text
src = image path
alt = description for screen readers and broken image fallback
width = image width
height = image height
loading="lazy" = loads image later for performance
```

Better example:

```html
<img 
  src="images/html-card.jpg" 
  alt="HTML lesson card preview" 
  width="600" 
  height="400"
  loading="lazy"
>
```

🚨 Alt text rule:

```text
Describe the image purpose, not just “image”
```

Bad:

```html
<img src="photo.jpg" alt="image">
```

Good:

```html
<img src="photo.jpg" alt="Student coding on a laptop">
```

Decorative image:

```html
<img src="divider.png" alt="">
```

## 12) LISTS

Unordered list:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Ordered list:

```html
<ol>
  <li>Create HTML file</li>
  <li>Add CSS file</li>
  <li>Test in browser</li>
</ol>
```

Description list:

```html
<dl>
  <dt>HTML</dt>
  <dd>Structure of a web page.</dd>

  <dt>CSS</dt>
  <dd>Style and layout of a web page.</dd>
</dl>
```

Meaning:

```text
ul = bullet list
ol = numbered list
li = list item
dl = description list
dt = term
dd = description
```

## 13) BUTTONS

```html
<button type="button">Click Me</button>
```

Submit button:

```html
<button type="submit">Submit</button>
```

Reset button:

```html
<button type="reset">Reset</button>
```

Button types:

```text
type="button" = normal button
type="submit" = submits a form
type="reset" = clears form inputs
```

🚨 Rule:

```text
Use <a> for navigation
Use <button> for actions
```

Good:

```html
<a href="about.html">Go to About</a>
<button type="button">Open Menu</button>
```

## 14) FORMS

Basic form:

```html
<form action="#" method="post">
  <div>
    <label for="name">Name</label>
    <input id="name" name="name" type="text">
  </div>

  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>
  </div>

  <button type="submit">Submit</button>
</form>
```

Form attributes:

```text
action = where form data goes
method="get" = sends data in URL
method="post" = sends data in request body
```

Input attributes:

```text
id = connects to label
name = key used when submitting data
type = kind of input
placeholder = hint text
required = must be filled in
value = default value
```

## 15) LABELS

Correct label:

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

Rule:

```text
label for="" must match input id=""
```

Good:

```html
<label for="project-title">Project Title</label>
<input id="project-title" name="project-title" type="text">
```

Bad:

```html
<label>Name</label>
<input type="text">
```

## 16) INPUT TYPES

```html
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="tel">
<input type="url">
<input type="date">
<input type="time">
<input type="color">
<input type="file">
<input type="checkbox">
<input type="radio">
<input type="range">
<input type="search">
<input type="hidden">
```

Useful examples:

```html
<input type="email" required>

<input type="number" min="1" max="10">

<input type="text" minlength="3" maxlength="50">

<input type="file" accept="image/*">
```

## 17) TEXTAREA

```html
<label for="notes">Notes</label>
<textarea id="notes" name="notes" rows="5"></textarea>
```

Attributes:

```text
rows = visible height
cols = visible width
maxlength = max characters
placeholder = hint text
required = required field
```

Example:

```html
<textarea 
  id="project-description" 
  name="project-description" 
  rows="6" 
  placeholder="Describe your project..."
  required
></textarea>
```

## 18) SELECT / DROPDOWN

```html
<label for="topic">Choose a topic</label>

<select id="topic" name="topic">
  <option value="">Select one</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
</select>
```

Grouped options:

```html
<select id="course" name="course">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </optgroup>

  <optgroup label="Programming">
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
  </optgroup>
</select>
```

## 19) CHECKBOXES

```html
<div>
  <input id="html-topic" name="topics" type="checkbox" value="html">
  <label for="html-topic">HTML</label>
</div>
```

Multiple checkboxes can share the same name:

```html
<input id="html" name="topics" type="checkbox" value="html">
<label for="html">HTML</label>

<input id="css" name="topics" type="checkbox" value="css">
<label for="css">CSS</label>
```

Meaning:

```text
Checkbox = choose zero, one, or many
```

## 20) RADIO BUTTONS

```html
<input id="beginner" name="level" type="radio" value="beginner">
<label for="beginner">Beginner</label>

<input id="intermediate" name="level" type="radio" value="intermediate">
<label for="intermediate">Intermediate</label>
```

Rule:

```text
Radio buttons with the same name belong to the same group
Only one can be selected
```

## 21) FIELDSET / LEGEND

```html
<fieldset>
  <legend>Choose your level</legend>

  <input id="beginner" name="level" type="radio" value="beginner">
  <label for="beginner">Beginner</label>

  <input id="advanced" name="level" type="radio" value="advanced">
  <label for="advanced">Advanced</label>
</fieldset>
```

Meaning:

```text
fieldset = groups form controls
legend = title for the group
```

Use for:

```text
radio groups
checkbox groups
related form questions
```

## 22) FORM VALIDATION ATTRIBUTES

```html
<input type="text" required>

<input type="email" required>

<input type="text" minlength="3" maxlength="50">

<input type="number" min="1" max="10">

<input type="text" pattern="[A-Za-z]+">
```

Common attributes:

```text
required = must be filled in
minlength = minimum text length
maxlength = maximum text length
min = minimum number/date
max = maximum number/date
pattern = regex rule
disabled = cannot use field
readonly = can read but not edit
```

Examples:

```html
<input type="text" name="username" required minlength="3">

<input type="number" name="age" min="16" max="99">

<input type="email" name="email" required>
```

## 23) TABLES

Basic table:

```html
<table>
  <thead>
    <tr>
      <th>Topic</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>Complete</td>
    </tr>

    <tr>
      <td>CSS</td>
      <td>In progress</td>
    </tr>
  </tbody>
</table>
```

Table tags:

```text
table = table wrapper
thead = table head
tbody = table body
tfoot = table footer
tr = table row
th = table heading cell
td = table data cell
caption = table title
```

With caption:

```html
<table>
  <caption>Project Progress</caption>

  <thead>
    <tr>
      <th scope="col">Page</th>
      <th scope="col">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Home</td>
      <td>Complete</td>
    </tr>
  </tbody>
</table>
```

## 24) MEDIA: VIDEO

```html
<video controls width="600">
  <source src="videos/lesson.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Attributes:

```text
controls = show controls
autoplay = starts automatically
muted = sound off
loop = repeats
poster = preview image
width / height = size
```

Example:

```html
<video controls muted poster="images/preview.jpg">
  <source src="videos/html-intro.mp4" type="video/mp4">
</video>
```

🚨 Autoplay rule:

```text
Most browsers only allow autoplay if video is muted
```

## 25) MEDIA: AUDIO

```html
<audio controls>
  <source src="audio/lesson.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

Attributes:

```text
controls
autoplay
muted
loop
preload
```

## 26) IFRAME / EMBEDS

```html
<iframe 
  src="https://www.youtube.com/embed/video-id"
  title="HTML lesson video"
  width="560"
  height="315"
  allowfullscreen>
</iframe>
```

Use for:

```text
YouTube videos
maps
external embeds
```

Important:

```text
Always include title for accessibility
```

## 27) DETAILS / SUMMARY

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML is used to structure web pages.</p>
</details>
```

Use for:

```text
FAQ sections
expandable notes
extra details
```

## 28) PROGRESS / METER

Progress:

```html
<label for="html-progress">HTML Progress</label>
<progress id="html-progress" value="70" max="100">70%</progress>
```

Meter:

```html
<label for="score">Score</label>
<meter id="score" value="8" min="0" max="10">8 out of 10</meter>
```

Difference:

```text
progress = task completion
meter = measurement / score / rating
```

## 29) CODE TAGS

Inline code:

```html
<p>Use the <code>&lt;section&gt;</code> tag for grouped content.</p>
```

Code block:

```html
<pre><code>
&lt;h1&gt;Hello HTML&lt;/h1&gt;
</code></pre>
```

Tags:

```text
code = inline code
pre = keeps spacing and line breaks
kbd = keyboard input
samp = sample output
```

Keyboard example:

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

## 30) SPECIAL CHARACTERS / ENTITIES

```html
&amp;  = &
&lt;   = <
&gt;   = >
&quot; = "
&apos; = '
&nbsp; = non-breaking space
&copy; = ©
```

Examples:

```html
<p>&copy; 2026 Codeflix</p>

<p>Use &lt;h1&gt; for the main heading.</p>
```

## 31) COMMENTS

```html
<!-- This is a comment -->
```

Use for:

```text
Leaving notes
Separating sections
Explaining structure
```

Example:

```html
<!-- Main content starts here -->
<main>
  ...
</main>
```

🚨 Do not put private information in comments.

## 32) GLOBAL ATTRIBUTES

These work on most HTML elements:

```html
<div id="main-card" class="card" title="Featured card" hidden>
  Content
</div>
```

Common global attributes:

```text
id = unique identifier
class = reusable group name
title = extra hover information
style = inline CSS
hidden = hides element
data-* = custom data
tabindex = keyboard focus order
aria-* = accessibility info
```

Examples:

```html
<section id="about"></section>

<article class="card featured"></article>

<button data-topic="html">Open HTML</button>

<div aria-label="Main menu"></div>
```

🚨 Rule:

```text
id should be unique
class can be reused
```

## 33) ID VS CLASS

ID:

```html
<section id="hero"></section>
```

Class:

```html
<section class="card"></section>
<section class="card"></section>
<section class="card"></section>
```

Meaning:

```text
id = one specific element
class = reusable styling/group
```

CSS connection:

```css
#hero {
  background-color: black;
}

.card {
  border-radius: 12px;
}
```

## 34) DATA ATTRIBUTES

```html
<button data-topic="html">HTML</button>
<button data-topic="css">CSS</button>
```

Use for:

```text
Storing custom information
JavaScript interactions
Filtering cards
Topic systems
```

Example:

```html
<article class="card" data-category="html">
  <h2>HTML Basics</h2>
</article>
```

## 35) ARIA BASICS

Use native HTML first.

Good native HTML:

```html
<button>Open Menu</button>
<nav></nav>
<main></main>
```

ARIA examples:

```html
<button aria-label="Open navigation menu">
  ☰
</button>

<div role="alert">
  Form submitted successfully.
</div>
```

Common ARIA:

```text
aria-label = accessible label
aria-expanded = menu open/closed state
aria-controls = connected element id
aria-hidden = hide from screen readers
role = gives element a role
```

🚨 Rule:

```text
Do not use ARIA when normal HTML already does the job
```

## 36) ACCESSIBILITY CHECKLIST

```text
Use proper heading order
Use alt text on images
Use labels for form inputs
Use button for actions
Use a for navigation
Use semantic landmarks
Make link text descriptive
Do not rely on colour only
Include lang on html
Include title in head
Include viewport meta tag
```

Bad link:

```html
<a href="notes.html">Click here</a>
```

Good link:

```html
<a href="notes.html">Read HTML notes</a>
```

## 37) SEO BASICS

```html
<title>Codeflix | Coding Knowledge Hub</title>
<meta name="description" content="Browse coding notes, snippets, resources, and project ideas.">
```

Good page structure:

```html
<h1>Codeflix</h1>
<h2>HTML Lessons</h2>
<h2>CSS Resources</h2>
```

SEO basics:

```text
One clear title
One clear h1
Useful meta description
Descriptive links
Descriptive alt text
Semantic page structure
```

## 38) SCRIPT TAGS

At bottom of body:

```html
<script src="js/script.js"></script>
```

In head with defer:

```html
<script src="js/script.js" defer></script>
```

Meaning:

```text
defer = load script after HTML is parsed
```

Best pattern:

```html
<script src="js/script.js" defer></script>
```

## 39) STYLE TAGS / INLINE CSS

External CSS:

```html
<link rel="stylesheet" href="css/style.css">
```

Internal CSS:

```html
<style>
  body {
    background-color: black;
  }
</style>
```

Inline CSS:

```html
<h1 style="color: red;">Codeflix</h1>
```

Rule:

```text
External CSS is best for projects
Internal CSS is okay for quick testing
Inline CSS is usually bad for maintainability
```

## 40) COMMON HTML MISTAKES

```text
❌ Missing <!doctype html>
❌ Missing viewport meta tag
❌ Content placed inside head
❌ Unclosed tags
❌ Incorrect nesting
❌ Multiple elements with same id
❌ Using class when CSS expects id
❌ Using id when CSS expects class
❌ Missing alt text on images
❌ Empty href links everywhere
❌ Label not connected to input
❌ Button missing type
❌ File path incorrect
❌ Using div for everything
❌ Skipping heading levels
❌ Using <br> for layout spacing
```

## 41) DEBUG CHECKLIST

```text
1. Is the file saved as .html?
2. Is <!doctype html> included?
3. Is content inside body?
4. Are tags closed correctly?
5. Are elements nested correctly?
6. Are file paths correct?
7. Are image src paths correct?
8. Are link href paths correct?
9. Is CSS linked correctly?
10. Is JavaScript linked correctly?
11. Is the viewport meta tag included?
12. Is there one clear h1?
13. Do images have alt text?
14. Do inputs have labels?
15. Does label for="" match input id=""?
16. Are ids unique?
17. Are buttons using the correct type?
18. Check browser DevTools
19. Validate HTML if stuck
```

## 42) PROJECT STRUCTURE EXAMPLE

```text
codeflix/
  index.html
  about.html
  project-submission.html

  css/
    style.css

  js/
    script.js

  images/
    hero.jpg
    html-card.jpg
    css-card.jpg

  content/
    html/
      overview.md
      examples.md
      snippets.md
    css/
      overview.md
      examples.md
      snippets.md
```

HTML links:

```html
<a href="about.html">About</a>

<link rel="stylesheet" href="css/style.css">

<img src="images/hero.jpg" alt="Codeflix hero preview">

<script src="js/script.js" defer></script>
```

## 43) CODEFLIX HOME PAGE SKELETON

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Codeflix | Coding Knowledge Hub</title>
  <meta name="description" content="A streaming-style coding knowledge hub for notes, snippets, and resources.">

  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <header>
    <nav aria-label="Main navigation">
      <a href="index.html">Codeflix</a>

      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="project-submission.html">Submit Project</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Codeflix</h1>
      <p>A streaming-style workspace for coding knowledge.</p>
      <a href="#featured-topics">Browse Topics</a>
    </section>

    <section id="featured-topics" aria-labelledby="topics-title">
      <h2 id="topics-title">Featured Topics</h2>

      <article>
        <img src="images/html-card.jpg" alt="HTML lesson preview">
        <h3>HTML Basics</h3>
        <p>Learn page structure, tags, forms, and semantic HTML.</p>
        <a href="content/html/overview.md">Open HTML Overview</a>
      </article>

      <article>
        <img src="images/css-card.jpg" alt="CSS lesson preview">
        <h3>CSS Styling</h3>
        <p>Learn selectors, layout, spacing, and responsive design.</p>
        <a href="content/css/overview.md">Open CSS Overview</a>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Codeflix</p>
  </footer>

</body>
</html>
```

## 44) PROJECT SUBMISSION FORM SKELETON

```html
<form action="#" method="post">
  <fieldset>
    <legend>Project Submission</legend>

    <div>
      <label for="student-name">Student Name</label>
      <input id="student-name" name="student-name" type="text" required>
    </div>

    <div>
      <label for="project-title">Project Title</label>
      <input id="project-title" name="project-title" type="text" required>
    </div>

    <div>
      <label for="project-category">Project Category</label>
      <select id="project-category" name="project-category" required>
        <option value="">Choose one</option>
        <option value="html-css">HTML/CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="portfolio">Portfolio</option>
      </select>
    </div>

    <div>
      <label for="project-description">Project Description</label>
      <textarea id="project-description" name="project-description" rows="6" required></textarea>
    </div>

    <div>
      <input id="confirm" name="confirm" type="checkbox" required>
      <label for="confirm">I confirm this project is ready to submit.</label>
    </div>

    <button type="submit">Submit Project</button>
  </fieldset>
</form>
```

## 45) QUICK TAG MEMORY MAP

```text
Page:
html
head
body

Head:
meta
title
link
script

Layout:
header
nav
main
section
article
aside
footer
div

Text:
h1-h6
p
strong
em
span
br

Links/media:
a
img
video
audio
iframe

Lists:
ul
ol
li
dl
dt
dd

Forms:
form
label
input
textarea
select
option
button
fieldset
legend

Tables:
table
caption
thead
tbody
tfoot
tr
th
td

Interactive:
details
summary
dialog

Code:
code
pre
kbd
samp
```

## FINAL MEMORY MODEL

```text
HTML = STRUCTURE → MEANING → CONTENT → ACCESSIBILITY → DEBUG

Structure:
html → head → body

Meaning:
header / nav / main / section / article / footer

Content:
text / links / images / lists / forms / tables / media

Accessibility:
alt / labels / headings / landmarks / descriptive links

Debug:
nesting / closing tags / paths / ids / DevTools
```
