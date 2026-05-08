
# BOOTSTRAP CHEAT SHEET

CORE: STRUCTURE → CLASS → COMPONENT → RESPONSIVE → DEBUG

BOOTSTRAP = HTML + READY-MADE CSS CLASSES

THINK:
What do I want?

Page wrapper? → container
Layout? → row / col
Spacing? → m-* / p-* / gap-*
Text? → text-* / fw-* / fs-*
Button? → btn / btn-primary
Card? → card / card-body
Form? → form-control / form-label
Navbar? → navbar / nav-link
Responsive? → sm / md / lg / xl / xxl
Debug? → Bootstrap linked? class spelling? correct structure?

## 1) CORE THINKING PATTERN

```text
BOOTSTRAP CHEAT SHEET — FINAL (PATTERN)

CORE: STRUCTURE → CLASS → RESPONSIVE → DEBUG

LAYOUT: container | container-fluid | row | col
GRID: 12 columns | col-12 | col-md-6 | col-lg-4
SPACING: m = margin | p = padding | gap = space between items
SIDES: t top | b bottom | s start | e end | x left/right | y top/bottom
TEXT: text-center | text-start | text-end | fw-bold | fs-1
DISPLAY: d-none | d-block | d-flex | d-grid
FLEX: d-flex | justify-content-* | align-items-* | flex-column | gap-*
COLOURS: text-primary | bg-dark | border-danger
BUTTONS: btn | btn-primary | btn-outline-primary
CARDS: card | card-body | card-title | card-text | card-img-top
FORMS: form-label | form-control | form-select | form-check
NAVBAR: navbar | navbar-brand | navbar-nav | nav-link
TABLES: table | table-striped | table-hover | table-bordered
IMAGES: img-fluid | rounded | rounded-circle
RESPONSIVE: sm | md | lg | xl | xxl
DEBUG: linked? spelling? row inside container? col inside row? JS linked?
```

## 2) BOOTSTRAP LINK SETUP

CSS link:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

JS link:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Use JS for:

```text
navbar collapse
dropdown
modal
carousel
accordion
offcanvas
tooltips
```

🚨 Common mistake:

```text
Bootstrap CSS linked = styling works
Bootstrap JS linked = interactive components work
```

## 3) BASIC PAGE TEMPLATE

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Codeflix</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <header class="container py-4">
    <h1 class="text-center fw-bold">Codeflix</h1>
  </header>

  <main class="container">
    <section class="row g-4">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title h5">HTML</h2>
            <p class="card-text">Learn HTML structure.</p>
            <a href="#" class="btn btn-primary">Open</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## 4) LAYOUT / CONTAINERS

```html
<div class="container">Normal fixed-width container</div>

<div class="container-fluid">Full-width container</div>
```

Container options:

```text
container          = responsive max-width
container-fluid    = always 100% width
container-sm       = 100% until small breakpoint
container-md       = 100% until medium breakpoint
container-lg       = 100% until large breakpoint
container-xl       = 100% until extra-large breakpoint
container-xxl      = 100% until extra-extra-large breakpoint
```

Common pattern:

```html
<section class="container py-5">
  <h2 class="mb-4">Featured Topics</h2>
</section>
```

## 5) GRID SYSTEM

Bootstrap grid = 12 columns.

```html
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
  </div>
</div>
```

Rule:

```text
container → row → col
```

Column examples:

```html
<div class="col-12">Full width</div>
<div class="col-6">Half width</div>
<div class="col-4">One third</div>
<div class="col-3">One quarter</div>
```

Responsive columns:

```html
<div class="col-12 col-md-6 col-lg-4">
  Responsive card
</div>
```

Meaning:

```text
mobile = full width
medium = half width
large = one third width
```

Common card grid:

```html
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">Card 1</div>
    <div class="col-12 col-md-6 col-lg-4">Card 2</div>
    <div class="col-12 col-md-6 col-lg-4">Card 3</div>
  </div>
</div>
```

## 6) ROW GUTTERS / GRID SPACING

```html
<div class="row g-3">
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
```

Gutter classes:

```text
g-0  = no gap
g-1  = tiny gap
g-2  = small gap
g-3  = medium gap
g-4  = large gap
g-5  = extra large gap

gx-* = horizontal gutter
gy-* = vertical gutter
```

Examples:

```html
<div class="row g-4"></div>
<div class="row gx-5"></div>
<div class="row gy-3"></div>
```

## 7) BREAKPOINTS

```text
sm  = small
md  = medium
lg  = large
xl  = extra large
xxl = extra extra large
```

Used like this:

```text
col-md-6
d-lg-flex
text-md-start
p-lg-5
navbar-expand-lg
```

Pattern:

```text
class-breakpoint-value
```

Example:

```html
<div class="text-center text-md-start">
  Center on mobile, left on medium+
</div>
```

## 8) SPACING UTILITIES

```text
m = margin
p = padding
```

Numbers:

```text
0 = none
1 = very small
2 = small
3 = medium
4 = large
5 = extra large
auto = automatic
```

Sides:

```text
t = top
b = bottom
s = start / left
e = end / right
x = left + right
y = top + bottom
```

Examples:

```html
<div class="m-3">Margin all around</div>
<div class="p-3">Padding all around</div>
<div class="mt-4">Margin top</div>
<div class="mb-5">Margin bottom</div>
<div class="ms-2">Margin start</div>
<div class="me-2">Margin end</div>
<div class="mx-auto">Horizontal auto margin</div>
<div class="px-4">Padding left and right</div>
<div class="py-5">Padding top and bottom</div>
```

Responsive spacing:

```html
<section class="py-3 py-md-5">
  Less padding on mobile, more on medium+
</section>
```

## 9) TEXT / TYPOGRAPHY

Alignment:

```html
<p class="text-start">Left text</p>
<p class="text-center">Centered text</p>
<p class="text-end">Right text</p>
```

Responsive alignment:

```html
<p class="text-center text-lg-start">
  Center on mobile, left on large+
</p>
```

Font weight:

```html
<p class="fw-light">Light</p>
<p class="fw-normal">Normal</p>
<p class="fw-semibold">Semi-bold</p>
<p class="fw-bold">Bold</p>
```

Font size:

```html
<p class="fs-1">Largest</p>
<p class="fs-2">Large</p>
<p class="fs-3">Medium large</p>
<p class="fs-4">Medium</p>
<p class="fs-5">Small heading</p>
<p class="fs-6">Normal</p>
```

Text transform:

```html
<p class="text-uppercase">Uppercase</p>
<p class="text-lowercase">Lowercase</p>
<p class="text-capitalize">Capitalized</p>
```

Text decoration:

```html
<a class="text-decoration-none">No underline</a>
<p class="text-decoration-underline">Underline</p>
```

Text wrapping:

```html
<p class="text-nowrap">Do not wrap</p>
<p class="text-break">Break long text</p>
```

## 10) COLOURS

Text colours:

```html
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-light">Light</p>
<p class="text-dark">Dark</p>
<p class="text-muted">Muted</p>
<p class="text-white">White</p>
```

Background colours:

```html
<div class="bg-primary">Primary background</div>
<div class="bg-dark text-white">Dark background</div>
<div class="bg-light text-dark">Light background</div>
<div class="bg-danger text-white">Danger background</div>
```

Border colours:

```html
<div class="border border-primary">Primary border</div>
<div class="border border-danger">Danger border</div>
```

🚨 Rule:

```text
bg-dark usually needs text-white
bg-light usually needs text-dark
```

## 11) DISPLAY UTILITIES

```html
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline block</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>
```

Responsive display:

```html
<div class="d-none d-md-block">
  Hidden on mobile, visible on medium+
</div>

<div class="d-block d-lg-none">
  Visible on mobile/tablet, hidden on large+
</div>
```

Important pattern:

```text
d-none d-md-block
= hide by default
= show on medium and larger
```

## 12) FLEXBOX UTILITIES

Basic flex:

```html
<div class="d-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Direction:

```html
<div class="d-flex flex-row">Row</div>
<div class="d-flex flex-column">Column</div>
<div class="d-flex flex-md-row flex-column">Responsive direction</div>
```

Justify content:

```html
<div class="d-flex justify-content-start"></div>
<div class="d-flex justify-content-center"></div>
<div class="d-flex justify-content-end"></div>
<div class="d-flex justify-content-between"></div>
<div class="d-flex justify-content-around"></div>
<div class="d-flex justify-content-evenly"></div>
```

Align items:

```html
<div class="d-flex align-items-start"></div>
<div class="d-flex align-items-center"></div>
<div class="d-flex align-items-end"></div>
<div class="d-flex align-items-stretch"></div>
```

Gap:

```html
<div class="d-flex gap-2"></div>
<div class="d-flex gap-3"></div>
<div class="d-flex gap-4"></div>
```

Common navbar layout:

```html
<div class="d-flex justify-content-between align-items-center">
  <h1>Logo</h1>
  <nav>Links</nav>
</div>
```

Common center pattern:

```html
<div class="d-flex justify-content-center align-items-center min-vh-100">
  Centered content
</div>
```

## 13) SIZING UTILITIES

Width:

```html
<div class="w-25">25%</div>
<div class="w-50">50%</div>
<div class="w-75">75%</div>
<div class="w-100">100%</div>
<div class="w-auto">Auto</div>
```

Height:

```html
<div class="h-25">25%</div>
<div class="h-50">50%</div>
<div class="h-75">75%</div>
<div class="h-100">100%</div>
<div class="h-auto">Auto</div>
```

Viewport helpers:

```html
<section class="min-vh-100">Minimum full screen height</section>
<div class="vw-100">Full viewport width</div>
<div class="vh-100">Full viewport height</div>
```

## 14) BORDERS / RADIUS / SHADOW

Borders:

```html
<div class="border">Border</div>
<div class="border-top">Top border</div>
<div class="border-bottom">Bottom border</div>
<div class="border-0">No border</div>
```

Border width:

```html
<div class="border border-1"></div>
<div class="border border-2"></div>
<div class="border border-3"></div>
<div class="border border-4"></div>
<div class="border border-5"></div>
```

Rounded corners:

```html
<div class="rounded">Rounded</div>
<div class="rounded-0">No rounding</div>
<div class="rounded-1">Small rounding</div>
<div class="rounded-3">More rounding</div>
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill shape</div>
```

Shadows:

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Normal shadow</div>
<div class="shadow-lg">Large shadow</div>
```

## 15) POSITION UTILITIES

Position classes:

```html
<div class="position-static"></div>
<div class="position-relative"></div>
<div class="position-absolute"></div>
<div class="position-fixed"></div>
<div class="position-sticky"></div>
```

Placement:

```html
<div class="position-absolute top-0 start-0"></div>
<div class="position-absolute top-0 end-0"></div>
<div class="position-absolute bottom-0 start-0"></div>
<div class="position-absolute bottom-0 end-0"></div>
```

Fixed examples:

```html
<nav class="position-fixed top-0 start-0 w-100">
  Fixed navbar
</nav>
```

Bootstrap helpers:

```html
<div class="fixed-top">Fixed to top</div>
<div class="fixed-bottom">Fixed to bottom</div>
<div class="sticky-top">Sticky top</div>
```

🚨 Rule:

```text
position-absolute usually needs position-relative on parent
```

## 16) BUTTONS

Basic buttons:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
```

Outline buttons:

```html
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-danger">Outline Danger</button>
<button class="btn btn-outline-light">Outline Light</button>
```

Button sizes:

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>
```

Disabled:

```html
<button class="btn btn-primary" disabled>Disabled</button>
```

Button group:

```html
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Middle</button>
  <button class="btn btn-primary">Right</button>
</div>
```

## 17) CARDS

Basic card:

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card text goes here.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
```

Card with image:

```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Description">
  <div class="card-body">
    <h5 class="card-title">HTML Basics</h5>
    <p class="card-text">Learn structure and tags.</p>
  </div>
</div>
```

Card classes:

```text
card
card-body
card-title
card-subtitle
card-text
card-link
card-img-top
card-img-bottom
card-header
card-footer
```

Card pattern:

```html
<div class="card h-100 shadow-sm">
  <img src="image.jpg" class="card-img-top" alt="Topic image">
  <div class="card-body">
    <h3 class="card-title h5">CSS</h3>
    <p class="card-text">Styling and layout basics.</p>
    <a href="#" class="btn btn-danger">Start</a>
  </div>
</div>
```

## 18) FORMS

Basic form:

```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input id="name" type="text" class="form-control">
  </div>

  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea id="message" class="form-control"></textarea>
  </div>

  <button class="btn btn-primary">Submit</button>
</form>
```

Input classes:

```text
form-label
form-control
form-control-sm
form-control-lg
form-select
form-text
form-check
form-check-input
form-check-label
input-group
input-group-text
```

Select:

```html
<select class="form-select">
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
</select>
```

Checkbox:

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="agree">
  <label class="form-check-label" for="agree">
    I agree
  </label>
</div>
```

Radio:

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="level" id="beginner">
  <label class="form-check-label" for="beginner">
    Beginner
  </label>
</div>
```

Input group:

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>
```

Validation styles:

```html
<input type="text" class="form-control is-valid">
<input type="text" class="form-control is-invalid">
```

🚨 Important:

```text
form-control ✅
input-grouped ❌
```

## 19) NAVBAR

Simple navbar:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="index.html">Codeflix</a>

    <div class="navbar-nav">
      <a class="nav-link active" href="index.html">Home</a>
      <a class="nav-link" href="about.html">About</a>
      <a class="nav-link" href="project-submission.html">Submit</a>
    </div>
  </div>
</nav>
```

Responsive collapsing navbar:

```html
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Codeflix</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" href="index.html">Home</a>
        <a class="nav-link" href="about.html">About</a>
        <a class="nav-link" href="project-submission.html">Submit</a>
      </div>
    </div>
  </div>
</nav>
```

Navbar classes:

```text
navbar
navbar-brand
navbar-nav
nav-link
active
navbar-expand-lg
navbar-toggler
navbar-toggler-icon
collapse
navbar-collapse
navbar-dark
navbar-light
bg-dark
bg-light
```

🚨 Navbar collapse needs:

```text
Bootstrap JS
data-bs-toggle="collapse"
data-bs-target="#id"
matching id on collapse div
```

## 20) IMAGES

Responsive image:

```html
<img src="image.jpg" class="img-fluid" alt="Description">
```

Rounded image:

```html
<img src="image.jpg" class="img-fluid rounded" alt="Description">
```

Circle image:

```html
<img src="profile.jpg" class="img-fluid rounded-circle" alt="Profile">
```

Thumbnail:

```html
<img src="image.jpg" class="img-thumbnail" alt="Description">
```

Image classes:

```text
img-fluid
img-thumbnail
rounded
rounded-circle
rounded-pill
```

## 21) TABLES

Basic table:

```html
<table class="table">
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
  </tbody>
</table>
```

Table styles:

```html
<table class="table table-striped"></table>
<table class="table table-hover"></table>
<table class="table table-bordered"></table>
<table class="table table-dark"></table>
<table class="table table-sm"></table>
```

Responsive table:

```html
<div class="table-responsive">
  <table class="table table-striped">
    ...
  </table>
</div>
```

## 22) ALERTS

```html
<div class="alert alert-primary">Primary alert</div>
<div class="alert alert-success">Success alert</div>
<div class="alert alert-danger">Danger alert</div>
<div class="alert alert-warning">Warning alert</div>
<div class="alert alert-info">Info alert</div>
```

Dismissible alert:

```html
<div class="alert alert-warning alert-dismissible fade show">
  Warning message
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

Needs Bootstrap JS for dismiss.

## 23) BADGES

```html
<span class="badge bg-primary">New</span>
<span class="badge bg-success">Complete</span>
<span class="badge bg-danger">Bug</span>
```

Badge in heading:

```html
<h2>
  HTML Lessons
  <span class="badge bg-danger">10</span>
</h2>
```

Pill badge:

```html
<span class="badge rounded-pill bg-primary">HTML</span>
```

## 24) LIST GROUPS

```html
<ul class="list-group">
  <li class="list-group-item">HTML</li>
  <li class="list-group-item">CSS</li>
  <li class="list-group-item">JavaScript</li>
</ul>
```

Linked list group:

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">HTML</a>
  <a href="#" class="list-group-item list-group-item-action">CSS</a>
</div>
```

Classes:

```text
list-group
list-group-item
list-group-item-action
active
disabled
```

## 25) DROPDOWNS

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Topics
  </button>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">HTML</a></li>
    <li><a class="dropdown-item" href="#">CSS</a></li>
    <li><a class="dropdown-item" href="#">JavaScript</a></li>
  </ul>
</div>
```

Classes:

```text
dropdown
dropdown-toggle
dropdown-menu
dropdown-item
dropdown-divider
dropdown-header
```

Needs Bootstrap JS.

## 26) ACCORDION

```html
<div class="accordion" id="topicsAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#htmlTopic">
        HTML
      </button>
    </h2>

    <div id="htmlTopic" class="accordion-collapse collapse show" data-bs-parent="#topicsAccordion">
      <div class="accordion-body">
        HTML content goes here.
      </div>
    </div>
  </div>
</div>
```

Classes:

```text
accordion
accordion-item
accordion-header
accordion-button
accordion-collapse
collapse
show
accordion-body
```

Needs Bootstrap JS.

## 27) MODAL

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        Modal content goes here.
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save</button>
      </div>

    </div>
  </div>
</div>
```

Classes:

```text
modal
modal-dialog
modal-content
modal-header
modal-title
modal-body
modal-footer
btn-close
fade
show
```

Needs Bootstrap JS.

## 28) CAROUSEL

```html
<div id="heroCarousel" class="carousel slide">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="Slide 1">
    </div>

    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="Slide 2">
    </div>

  </div>

  <button class="carousel-control-prev" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>

  <button class="carousel-control-next" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

Classes:

```text
carousel
slide
carousel-inner
carousel-item
active
carousel-control-prev
carousel-control-next
carousel-control-prev-icon
carousel-control-next-icon
```

Needs Bootstrap JS.

## 29) OFFCANVAS

```html
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#sideMenu">
  Open Menu
</button>

<div class="offcanvas offcanvas-start" id="sideMenu">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>

  <div class="offcanvas-body">
    Menu content
  </div>
</div>
```

Position options:

```text
offcanvas-start
offcanvas-end
offcanvas-top
offcanvas-bottom
```

Needs Bootstrap JS.

## 30) PROGRESS BARS

```html
<div class="progress">
  <div class="progress-bar" style="width: 75%;">
    75%
  </div>
</div>
```

Colour:

```html
<div class="progress">
  <div class="progress-bar bg-success" style="width: 50%;"></div>
</div>
```

Striped:

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 60%;"></div>
</div>
```

## 31) SPINNERS

```html
<div class="spinner-border" role="status"></div>

<div class="spinner-grow" role="status"></div>
```

With colour:

```html
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-danger"></div>
```

## 32) PAGINATION

```html
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">Previous</a>
    </li>

    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>

    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

Classes:

```text
pagination
page-item
page-link
active
disabled
```

## 33) BREADCRUMBS

```html
<nav>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="index.html">Home</a>
    </li>
    <li class="breadcrumb-item active">
      HTML
    </li>
  </ol>
</nav>
```

Classes:

```text
breadcrumb
breadcrumb-item
active
```

## 34) UTILITIES MAP

```text
Spacing:
m-* | mt-* | mb-* | ms-* | me-* | mx-* | my-*
p-* | pt-* | pb-* | ps-* | pe-* | px-* | py-*

Text:
text-start | text-center | text-end
fw-light | fw-normal | fw-semibold | fw-bold
fs-1 | fs-2 | fs-3 | fs-4 | fs-5 | fs-6

Colour:
text-primary | text-danger | text-muted
bg-primary | bg-dark | bg-light
border | border-primary | border-danger

Display:
d-none | d-block | d-inline | d-inline-block | d-flex | d-grid

Flex:
justify-content-center | justify-content-between
align-items-center
flex-column | flex-row
gap-1 | gap-2 | gap-3 | gap-4 | gap-5

Size:
w-25 | w-50 | w-75 | w-100 | w-auto
h-25 | h-50 | h-75 | h-100 | h-auto
min-vh-100 | vh-100 | vw-100

Position:
position-relative | position-absolute | position-fixed | sticky-top
top-0 | bottom-0 | start-0 | end-0

Borders:
border | border-0 | border-top | border-bottom
rounded | rounded-circle | rounded-pill
shadow | shadow-sm | shadow-lg
```

## 35) BOOTSTRAP + CUSTOM CSS

Bootstrap first, your CSS second:

```html
<link href="bootstrap.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```

Why?

```text
Your CSS can override Bootstrap because it loads after Bootstrap.
```

Example:

```css
.card {
  border-radius: 20px;
}

.btn-primary {
  background-color: #e50914;
  border-color: #e50914;
}
```

🚨 Avoid overusing:

```css
!important
```

## 36) COMMON CODEFLIX LAYOUT

```html
<nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="index.html">Codeflix</a>

    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" href="index.html">Home</a>
        <a class="nav-link" href="about.html">About</a>
        <a class="nav-link" href="project-submission.html">Submit</a>
      </div>
    </div>
  </div>
</nav>

<header class="bg-dark text-white py-5">
  <div class="container">
    <div class="row align-items-center g-4">
      <div class="col-12 col-lg-6">
        <h1 class="display-4 fw-bold">Codeflix</h1>
        <p class="lead">A streaming-style coding knowledge hub.</p>
        <a href="#" class="btn btn-danger btn-lg">Start Learning</a>
      </div>

      <div class="col-12 col-lg-6">
        <img src="images/hero.jpg" class="img-fluid rounded shadow" alt="Codeflix preview">
      </div>
    </div>
  </div>
</header>

<main class="container py-5">
  <section>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">Featured Topics</h2>
      <a href="#" class="btn btn-outline-danger">View All</a>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img src="images/html.jpg" class="card-img-top" alt="HTML">
          <div class="card-body">
            <h3 class="card-title h5">HTML</h3>
            <p class="card-text">Structure web pages using semantic HTML.</p>
            <a href="#" class="btn btn-danger">Open</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
```

## 37) DEBUG CHECKLIST

```text
1. Bootstrap CSS linked?
2. Bootstrap JS linked for interactive components?
3. Using class="" not className=""?
4. Class spelling correct?
5. Correct class order?
6. Container used?
7. Row inside container?
8. Col inside row?
9. Grid adds up logically to 12?
10. Correct breakpoint? sm / md / lg / xl / xxl?
11. Correct spacing? m or p?
12. Correct side? t / b / s / e / x / y?
13. Correct form class? form-control?
14. Correct navbar collapse id?
15. data-bs-target matches the id?
16. Image has img-fluid?
17. Text readable against background?
18. Custom CSS loaded after Bootstrap?
19. Browser cache refreshed?
20. DevTools checked?
```

## 38) BIG BOOTSTRAP MISTAKES

```text
❌ Forgetting Bootstrap CSS link
❌ Forgetting Bootstrap JS for navbar/modal/dropdown
❌ Misspelling classes
❌ Using className instead of class in normal HTML
❌ Using row without container
❌ Using col outside row
❌ Forgetting g-* spacing on rows
❌ Confusing margin and padding
❌ Using input-grouped instead of form-control
❌ Forgetting img-fluid on images
❌ Expecting navbar collapse to work without JS
❌ data-bs-target does not match id
❌ Using text-dark on dark background
❌ Using text-white on light background
❌ Not testing mobile breakpoints
❌ Overriding Bootstrap badly with custom CSS
```

## 39) QUICK CLASS MEMORY MAP

```text
Page:
container
container-fluid

Grid:
row
col
col-12
col-md-6
col-lg-4
g-4

Spacing:
p-3
py-5
px-4
m-3
mt-4
mb-5
mx-auto

Text:
text-center
text-start
text-end
fw-bold
fs-1
lead

Colour:
bg-dark
bg-light
text-white
text-dark
text-muted
text-danger

Flex:
d-flex
justify-content-between
justify-content-center
align-items-center
gap-3

Buttons:
btn
btn-primary
btn-danger
btn-outline-danger
btn-lg

Cards:
card
card-body
card-title
card-text
card-img-top
h-100
shadow-sm

Forms:
form-label
form-control
form-select
form-check
input-group

Navbar:
navbar
navbar-expand-lg
navbar-brand
navbar-nav
nav-link
navbar-toggler
collapse
navbar-collapse
```

## 40) FINAL STARTER TEMPLATE

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Codeflix</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-dark text-white">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
    <div class="container">
      <a class="navbar-brand fw-bold text-danger" href="index.html">Codeflix</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <div class="navbar-nav ms-auto">
          <a class="nav-link active" href="index.html">Home</a>
          <a class="nav-link" href="about.html">About</a>
          <a class="nav-link" href="project-submission.html">Submit</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="container py-5">
    <div class="row align-items-center g-4">
      <div class="col-12 col-lg-6">
        <h1 class="display-3 fw-bold">Codeflix</h1>
        <p class="lead text-secondary">
          A streaming-style workspace for coding notes, snippets, and resources.
        </p>
        <a href="#" class="btn btn-danger btn-lg">Start Learning</a>
      </div>

      <div class="col-12 col-lg-6">
        <div class="bg-secondary rounded shadow p-5 text-center">
          Hero Preview
        </div>
      </div>
    </div>
  </header>

  <main class="container py-5">
    <section>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 class="fw-bold mb-0">Featured Topics</h2>
        <a href="#" class="btn btn-outline-light">View All</a>
      </div>

      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 bg-black text-white border-secondary shadow">
            <div class="card-body">
              <span class="badge bg-danger mb-3">HTML</span>
              <h3 class="card-title h5">HTML Basics</h3>
              <p class="card-text text-secondary">
                Learn structure, tags, forms, and semantic layout.
              </p>
              <a href="#" class="btn btn-danger">Open Topic</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="container py-4 border-top border-secondary">
    <p class="text-secondary mb-0">&copy; 2026 Codeflix</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## FINAL MEMORY MODEL

```text
BOOTSTRAP = STRUCTURE → CLASS → COMPONENT → RESPONSIVE → DEBUG

Structure:
container → row → col

Class:
spacing / text / colour / display / flex

Component:
btn / card / navbar / form / alert / modal

Responsive:
sm / md / lg / xl / xxl

Debug:
link / spelling / structure / JS / DevTools
```
---------




BOOTSTRAP CHEAT SHEET — FINAL (PATTERN)

CORE: STRUCTURE → CLASS → RESPONSIVE → DEBUG

BOOTSTRAP = HTML + READY-MADE CLASSES

THINK:
What do I want?
Layout? → container / row / col
Spacing? → m / p
Text? → text-*
Button? → btn
Card? → card
Navbar? → navbar
Form? → form-control
Responsive? → sm / md / lg / xl
1) CORE THINKING PATTERN
BOOTSTRAP CHEAT SHEET — FINAL (PATTERN)

CORE: STRUCTURE → CLASS → DEBUG

LAYOUT: container | row | col
GRID: 12 columns | col-md-6 | col-lg-4
SPACING: m = margin | p = padding
SIDES: t top | b bottom | s start | e end | x left/right | y top/bottom
TEXT: text-center | text-start | text-end | fw-bold
DISPLAY: d-none | d-block | d-flex | d-md-block
FLEX: d-flex | justify-content-* | align-items-* | gap-*
BUTTONS: btn | btn-primary | btn-outline-primary
CARDS: card | card-body | card-title | card-text
FORMS: form-control | form-label | form-select
NAVBAR: navbar | navbar-brand | navbar-nav | nav-link
RESPONSIVE: sm | md | lg | xl | xxl
DEBUG: Bootstrap linked? class spelling? row inside container? col inside row?
2) LAYOUT / GRID
<div class="container">
  <div class="row">
    <div class="col">
      Content
    </div>
  </div>
</div>
container = page wrapper
row = holds columns
col = column

RULE:
container → row → col

Common grid:

<div class="col-md-6"></div>  <!-- half width on medium+ -->
<div class="col-lg-4"></div>  <!-- 3 columns on large+ -->
<div class="col-12"></div>    <!-- full width -->
3) RESPONSIVE BREAKPOINTS
sm  = small
md  = medium
lg  = large
xl  = extra large
xxl = extra extra large

Example:

<div class="col-12 col-md-6 col-lg-4">
  Card
</div>

Meaning:

mobile = full width
medium = half width
large = one third width
4) SPACING
m = margin
p = padding

0 = none
1 = tiny
2 = small
3 = medium
4 = large
5 = extra large

Sides:

t = top
b = bottom
s = start/left
e = end/right
x = left + right
y = top + bottom

Examples:

<div class="p-3">Padding all around</div>
<div class="mt-4">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="px-5">Padding left and right</div>
<div class="py-4">Padding top and bottom</div>
5) TEXT
<h1 class="text-center">Centered heading</h1>
<p class="fw-bold">Bold text</p>
<p class="text-muted">Muted text</p>
<p class="text-primary">Primary colour text</p>

Common:

text-center
text-start
text-end
fw-bold
fw-normal
text-muted
text-primary
text-danger
text-success
6) DISPLAY
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flex</div>
<div class="d-none d-md-block">Hidden on mobile, visible on medium+</div>

Important pattern:

d-none d-md-block
= hide on small screens
= show on medium and larger screens
7) FLEXBOX
<div class="d-flex justify-content-between align-items-center gap-3">
  <div>Left</div>
  <div>Right</div>
</div>

Common:

d-flex
justify-content-center
justify-content-between
align-items-center
gap-2
gap-3
flex-column
flex-row
8) BUTTONS
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-primary">Outline</button>

Common:

btn
btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-dark
btn-light
btn-outline-primary
9) CARDS
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card text goes here.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>

Common:

card
card-body
card-title
card-text
card-img-top
10) FORMS
<form>
  <label class="form-label">Name</label>
  <input type="text" class="form-control">

  <label class="form-label mt-3">Message</label>
  <textarea class="form-control"></textarea>

  <button class="btn btn-primary mt-3">Submit</button>
</form>

Common:

form-label
form-control
form-select
form-check
form-check-input
form-check-label

🚨 Input field class:

form-control ✅
input-grouped ❌
11) NAVBAR
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Codeflix</a>

    <div class="navbar-nav">
      <a class="nav-link" href="index.html">Home</a>
      <a class="nav-link" href="about.html">About</a>
      <a class="nav-link" href="project-submission.html">Submit</a>
    </div>
  </div>
</nav>

Common:

navbar
navbar-brand
navbar-nav
nav-link
navbar-expand-lg
12) IMAGES
<img src="image.jpg" class="img-fluid" alt="Description">
img-fluid = responsive image
rounded = rounded corners
rounded-circle = circle image
13) COMMON COMPONENTS
alert
badge
card
navbar
modal
carousel
accordion
dropdown
container
row
col
btn
form-control

Example alert:

<div class="alert alert-success">
  Saved successfully!
</div>
14) DEBUG CHECKLIST
1. Bootstrap CSS linked?
2. Bootstrap JS linked if needed?
3. Class spelling correct?
4. Used class="" not className=""?
5. Row inside container?
6. Columns inside row?
7. Correct breakpoint? md / lg?
8. Correct spacing? m or p?
9. Correct form class? form-control?
10. Check DevTools
15) BIG BOOTSTRAP MISTAKES
❌ Forgetting Bootstrap link
❌ Misspelling classes
❌ Using input-grouped instead of form-control
❌ Using row without container
❌ Using col outside row
❌ Confusing margin and padding
❌ Forgetting responsive classes
❌ Expecting navbar collapse without Bootstrap JS
FINAL MEMORY MODEL
BOOTSTRAP = STRUCTURE → CLASS → RESPONSIVE → DEBUG

Structure:
container → row → col

Class:
btn / card / navbar / form-control

Responsive:
sm / md / lg / xl

Debug:
link / spelling / layout / DevTools