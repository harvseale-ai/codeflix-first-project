# Codeflix Coding Workspace

Codeflix is a simple, organised, Netflix-style coding learning website. It is designed to help users browse coding topics, read notes, review snippets, and access useful learning resources in one clear place.

The goal of the project is to make coding information easier to store, organise, and reuse over time.

## Project Purpose

Codeflix provides a visual workspace for learning and reviewing coding content. The site focuses on clear navigation, readable layouts, reusable content, and a clean streaming-style interface.

Users can use the site to:

- Browse coding topics
- Read learning notes
- View reusable code snippets
- Access useful resources
- Revisit coding content later

## Target Audience

This project is aimed at:

- Coding students
- Beginner developers
- People learning HTML, CSS, JavaScript, or SQL
- Anyone who wants a simple place to organise coding notes

## Website Pages

### Home Page

File: `index.html`

The home page introduces the Codeflix platform and includes:

- A platform overview
- Featured coding topics
- Content links
- Video lesson area
- Fixed navigation
- Learning sections
- Top content areas

### Usage Page

File: `usage.html`

The usage page explains:

- The purpose of the project
- How the website helps users learn
- How users can browse and reuse coding content
- Who the website is designed for

### Snippets Page

File: `snippets.html`

The snippets page provides useful code examples and reusable snippets.

It can include:

- HTML snippets
- CSS snippets
- JavaScript snippets
- SQL examples
- Notes about how each snippet works

### Content Page

File: `content.html`

The content page is used to display organised learning content from Markdown files.

### Workspace Page

File: `workspace.html`

The workspace page provides a dashboard-style area for viewing learning tools, widgets, previews, or coding resources.

## Content Files

Learning content is stored using Markdown files inside the `content` folder.

Example files:

```text
content/
├── cheat-sheet.md
├── resources.md
└── snippets.md # to be confirmed
```

These files can be used to store:

- HTML notes
- CSS notes
- JavaScript notes
- SQL notes
- Code examples
- Common bugs and fixes
- Useful resources

## Suggested File Structure

```text
codeflix/
├── index.html
├── usage.html
├── snippets.html
├── content.html
├── workspace.html
├── css/
│   ├── style.css
│   └── pages.css
├── js/
│   └── script.js
├── content/
│   ├── cheat-sheet.md
│   ├── snippets.md
│   └── resources.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
└── README.md
```

## Future File Pattern

```text
I need to understand it        → overview.md
I need to see it working       → examples.md
I need to reuse code quickly   → snippets.md
I need a fast reminder         → cheat-sheet.md
I broke something / fixed it   → bugs-and-fixes.md
I used it in a real project    → project-patterns.md
I found a useful link/video    → resources.md

overview.md          = understand the concept
examples.md          = see small learning examples
snippets.md          = copy-paste reusable code
cheat-sheet.md       = quick reminders and syntax
bugs-and-fixes.md    = problems, causes, fixes
project-patterns.md  = how you used it in real projects
resources.md         = useful links, videos, docs
```

## Design Requirements

The website should use a clean and minimal streaming-style design.

Design goals:

- Netflix-style layout
- Apple-style transparent fixed navigation
- Clear spacing
- Consistent colours and fonts
- Simple buttons and icons
- Smooth hover effects
- Smooth page transitions
- Mobile-responsive layout
- Accessible and readable content
- No unnecessary clutter

## CSS Structure Reference

The CSS is organised into clear sections so the design stays consistent and easier to maintain.

Main CSS systems:

- `TOK-*` — design tokens such as colours, spacing, radius, shadows, and typography
- `SHELL-*` — shared page layout and content alignment
- `NAV-*` — fixed sidebar, tool buttons, dropdowns, and navigation behaviour
- `PAGE-*`, `SNIP-*`, `ABOUT-*`, `MD-*` — page-specific styling
- `HOME-*` — streaming layout, hero section, video state, and content rows
- `DASH-*` — workspace dashboard and widget grid
- `RESP-*` — responsive layout overrides

Main CSS files:

```text
css/
├── style.css   # global tokens, reset, shared components, buttons, navigation, footer
└── pages.css   # page shells, content pages, home layout, workspace dashboard, responsive rules
```

The CSS follows this basic model:

```text
Tokens define values.
Page shells control layout.
Components use tokens.
State classes change behaviour.
Media queries override only what needs to change.
```

## Competitor Inspiration

This project takes inspiration from learning websites such as:

- MDN Web Docs
- W3Schools
- freeCodeCamp

The aim is not to copy these websites, but to create a simple learning workspace inspired by their clear educational structure.

## Project Scope

### Included in Scope

This project includes:

- HTML structure
- CSS styling
- Simple page layouts
- Responsive design
- Markdown-based content files
- Light vanilla JavaScript
- Clear file organisation

### Outside Scope

This project does not include:

- Floating toolbar
- Advanced workspace features
- Complex JavaScript functionality
- Backend database
- User login system
- Frameworks or libraries

## Technologies Used

- HTML
- CSS
- Light vanilla JavaScript
- Markdown

## Future Improvements

Possible future improvements could include:

- Search functionality
- Topic filtering
- Dark and light mode
- Saved favourite topics
- More coding categories
- Better Markdown rendering
- Progress tracking

## Project Status

The Codeflix site has been deployed and no major issues are currently known.

The project is a simple front-end coding workspace focused on clear structure, clean design, reusable content, and beginner-friendly organisation.

## Author

Created as a coding learning project.
