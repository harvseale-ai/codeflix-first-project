# Markdown Comprehensive Guide





<iframe 
  src="https://miro.com/app/board/uXjVIYMV-c8=/"
  width="100%"
  height="500"
  style="border:none; border-radius:12px;">
</iframe>




Markdown is perfect for Codeflix because it lets you write clean learning content without building new HTML every time.
It helps separate your project into clear responsibilities:

- **HTML** = page structure
- **CSS** = visual style
- **Markdown** = lesson/snippet content
- **JavaScript** = minimal content loading only

![Descriptive alt text](https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg)

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/OXGznpKZ_sA"
  title="CSS tutorial video"
  frameborder="0"
  allowfullscreen>
```</iframe>

## Example iframe code

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/OXGznpKZ_sA"
  title="CSS tutorial video"
  frameborder="0"
  allowfullscreen>
</iframe>
```

---
## 1. Headings

Use `#` symbols for headings.
md

# Page title #

## Main section ##

### Subsection ###

#### Smaller heading ####

##### Tiny heading #####

###### Smallest heading #####

Good Codeflix example:

# HTML Introduction 

## What HTML does 

### Basic example

### Common mistakes 


```<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/OXGznpKZ_sA"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>```

[Watch the video](https://www.youtube.com/watch?v=OXGznpKZ_sA)

[![CSS tutorial video](https://img.youtube.com/vi/OXGznpKZ_sA/hqdefault.jpg)](https://www.youtube.com/watch?v=OXGznpKZ_sA)

---

## 2. Paragraphs

Just write normal text.

```

md

HTML is used to structure content on a webpage.
CSS is used to style that content.
```

Leave a blank line between paragraphs.

```

md

This is paragraph one.
This is paragraph two.
```

---

## 3. Bold, italic, and emphasis

md
**Bold text**
*Italic text*
***Bold and italic text***

Example:
md
HTML stands for **HyperText Markup Language**.
CSS is *not* a programming language.
The box model is ***very important***.

---

## 4. Inline code

Use single backticks for short code inside a sentence.
md
Use the `<h1>` element for the main page heading.

Example:
md
The `src` attribute tells the browser where an image file is located.

---

## 5. Code blocks

Use triple backticks for multi-line code.
````md
```html
<h1>Hello world</h1>
<p>This is a paragraph.</p>
```

Example with CSS:

```css
.card {
  padding: 16px;
  border-radius: 8px;
  background: #20242c;
}
```

Example with JavaScript:

```js
const userName = "Harvey";
console.log(userName);
```

Example with terminal commands:

```bash
mkdir -p content/html/01-getting-started
touch content/html/01-getting-started/introduction.md
```

⸻

6. Bullet lists

Use -, *, or +.

- HTML
- CSS
- JavaScript

Example:

HTML can create:
- Headings
- Paragraphs
- Links
- Images
- Forms

Nested list:

- HTML
  - Elements
  - Attributes
  - Forms
- CSS
  - Selectors
  - Box model
  - Flexbox

⸻

7. Numbered lists

1. Create the HTML file
2. Link the CSS file
3. Open the page in Live Server
4. Test the layout

Markdown will usually auto-number even if you write:

1. First step
1. Second step
1. Third step

⸻

8. Links

[Link text](https://example.com)

Example:

Read the [MDN HTML guide](https://developer.mozilla.org/en-US/docs/Web/HTML).

For your Codeflix project:

[Open CSS Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

⸻

9. Images

![Alt text](path/to/image.png)

Example:

![Box model diagram](assets/images/box-model.png)

For accessibility, the alt text should describe the image.

Good:

![Diagram showing content, padding, border, and margin areas](assets/images/box-model.png)

Not good:

![image](assets/images/box-model.png)

⸻

10. Blockquotes

Use > for quoted or highlighted notes.

> HTML gives meaning to content. CSS controls visual style.

Good for Codeflix notes:

> Tip: Use semantic HTML before reaching for extra `<div>` elements.

Nested blockquote:

> Main note
>
> > Extra detail inside the note

⸻

11. Horizontal lines

Use three or more dashes, stars, or underscores.

---

Example:

# HTML Introduction
HTML structures the page.
---
## Next section

⸻

12. Tables

| Element | Purpose |
|---|---|
| `<h1>` | Main heading |
| `<p>` | Paragraph |
| `<a>` | Link |
| `<img>` | Image |

Example:

| File path type | Example | Meaning |
|---|---|---|
| Relative path | `assets/css/style.css` | Starts from current file location |
| Root-relative path | `/assets/css/style.css` | Starts from website root |
| Absolute URL | `https://example.com/style.css` | Full web address |

Aligned columns:

| Name | Type | Use |
|:---|:---:|---:|
| HTML | Structure | 10 |
| CSS | Style | 9 |
| JS | Behaviour | 8 |

Alignment rules:

:---  = left align
:---: = centre align
---:  = right align

⸻

13. Task lists / checklists

- [x] Create topic.html
- [x] Add Markdown loader
- [ ] Add export notes button
- [ ] Add search

Great for project notes:

## Build checklist
- [x] Create content folder
- [x] Create introduction.md
- [x] Load Markdown with JavaScript
- [ ] Style Markdown content
- [ ] Add copy notes feature

⸻

14. Escaping Markdown characters

Sometimes you want to show a Markdown symbol as text.

Use a backslash:

\# This is not a heading
\* This is not italic
\` This is not code

Example output would show the symbols instead of formatting them.

⸻

15. HTML inside Markdown

Markdown allows normal HTML too.

<div class="note-card">
  <h3>Custom HTML block</h3>
  <p>This is inside Markdown.</p>
</div>

For your project, use this sparingly. The point of Markdown is to avoid writing loads of HTML.

Good use:

<details>
  <summary>Show answer</summary>
The answer is `<section>` because it creates a meaningful page section.
</details>

⸻

16. Collapsible sections

This is HTML inside Markdown, but it is very useful.

<details>
  <summary>Common mistake</summary>
Do not use `<div>` for everything. Use semantic elements when they match the content.
</details>

Codeflix example:

<details>
  <summary>Show example code</summary>
```html
<section>
  <h2>About this project</h2>
  <p>This section explains the project.</p>
</section>
```
</details>

⸻

17. Definition-style notes

Markdown does not have built-in definition lists everywhere, but you can format them like this:

**Element:** A piece of HTML markup.
**Attribute:** Extra information added to an element.
**Value:** The setting given to an attribute.

Example:

**Selector:** The part of CSS that chooses which HTML element to style.
**Declaration:** A CSS rule made of a property and value.
**Property:** The style being changed, such as `color`.
**Value:** The setting for the property, such as `red`.

⸻

Codeflix Content Templates

18. Basic lesson template

# Topic title
Short explanation of what this topic teaches.
## What it does
Explain the concept in simple terms.
## Basic example
```html
<!-- example code here -->
```
## When to use it
- Use case one
- Use case two
- Use case three
## Common mistake
Explain a common bug or misunderstanding.
## Quick checklist
- [ ] I understand what it does
- [ ] I can write a basic example
- [ ] I know when to use it

⸻

19. HTML lesson template

# HTML File Paths
File paths tell the browser where to find another file.
## Types of file paths
| Type | Example | Use |
|---|---|---|
| Relative | `assets/images/logo.png` | Local project files |
| Parent folder | `../images/logo.png` | Go up one folder |
| Absolute URL | `https://example.com/logo.png` | External files |
## Example
```html
<img src="assets/images/logo.png" alt="Site logo">
```
## Common mistake
A common mistake is using the wrong folder level.
```html
<!-- Wrong if the image is inside assets/images -->
<img src="logo.png" alt="Logo">
```
## Remember
> The path is always worked out from the location of the current HTML file.

⸻

20. CSS lesson template

# CSS Box Model
The box model describes how every HTML element takes up space on the page.
## The four layers
- Content
- Padding
- Border
- Margin
## Example
```css
.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 20px;
}
```
## Key idea
`padding` adds space inside the element.  
`margin` adds space outside the element.
## Common mistake
Forgetting `box-sizing: border-box;` can make elements wider than expected.
```css
* {
  box-sizing: border-box;
}
```

⸻

21. JavaScript lesson template

# JavaScript Variables
Variables store values so they can be reused.
## Main variable keywords
| Keyword | Can change? | Use |
|---|---|---|
| `let` | Yes | Values that change |
| `const` | No | Values that stay fixed |
| `var` | Yes | Older JavaScript |
## Example
```js
const userName = "Harvey";
let level = 1;
level = 2;
console.log(userName);
console.log(level);
```
## Common mistake
Do not assign a new value to a `const`.
```js
const name = "Harvey";
name = "Alex"; // Error
```

⸻

22. Git/terminal lesson template

# Git Add, Commit, and Push
These commands save your project changes and upload them to GitHub.
## Basic workflow
```bash
git status
git add .
git commit -m "add markdown topic page"
git push
```
## What each command does
| Command | Meaning |
|---|---|
| `git status` | Shows changed files |
| `git add .` | Stages all changes |
| `git commit -m "message"` | Saves a snapshot |
| `git push` | Uploads to GitHub |
## Common mistake
If Git says a file is untracked, it means Git can see it but is not tracking it yet.
```bash
git add path/to/file.md
```

⸻

23. Snippet card template

# Glass Hover Button
## Category
CSS Component
## Purpose
Creates a soft hover effect for buttons or menu items.
## Code
```css
.glass-btn {
  background: rgba(255, 255, 255, 0.1);
  transition:
    background-color 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
.glass-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.32);
}
```
## Use when
- Building dashboard buttons
- Styling menu rows
- Creating subtle interactive cards
## Avoid when
- The button needs very strong contrast
- The background is already too busy

⸻

Markdown Example for introduction.md

You could use this:

# HTML Introduction
HTML stands for **HyperText Markup Language**.
It is used to structure content on a webpage.
## What HTML does
HTML tells the browser what each piece of content means.
Examples of HTML content include:
- Headings
- Paragraphs
- Links
- Images
- Sections
- Buttons
- Forms
## Basic example
```html
<h1>Hello world</h1>
<p>This is my first HTML paragraph.</p>
```
## How the browser reads it
The browser sees the `<h1>` element as the main heading.
The browser sees the `<p>` element as paragraph text.
## HTML vs CSS vs JavaScript
| Language | Job |
|---|---|
| HTML | Structure |
| CSS | Style |
| JavaScript | Behaviour |
## Common mistake
Do not use HTML to control visual design.
```html
<!-- Avoid old visual-only HTML habits -->
<center>This is centred text</center>
```
Use CSS instead:
```css
.text-center {
  text-align: center;
}
```
## Key reminder
> HTML gives meaning to the page. CSS makes it look good. JavaScript makes it interactive.
## Quick checklist
- [x] I know what HTML stands for
- [x] I know HTML creates structure
- [ ] I can write a basic HTML example
- [ ] I understand the difference between HTML, CSS, and JavaScript

⸻

Good Codeflix Markdown Pattern

For most of your topics, use this order:

# Topic name
Short intro.
## What it is
Simple explanation.
## Why it matters
Why you use it.
## Basic example
```language
code here
```
## Common mistake
Explain the bug.
## Developer note
> Useful reminder.
## Practice task
- [ ] Try this
- [ ] Change this
- [ ] Test this

This gives every Markdown page the same structure, so your Codeflix archive feels consistent and professional.