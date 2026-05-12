/* WHY: Waits until the HTML exists before selecting page elements and attaching events. */
document.addEventListener("DOMContentLoaded", () => {
  /* WHY: Main markdown output container; all loaded markdown and saved notes are rendered here. */
  const markdownContent = document.getElementById("markdownContent");

  /* WHY: Reads the URL query string so pages can load a markdown file from ?file=... */
  const params = new URLSearchParams(window.location.search);

  /* WHY: Stores the markdown file path passed in the URL. */
  const fileFromUrl = params.get("file");

  /* WHY: Tracks the active markdown file so notes can be saved separately per topic. */
  let currentMarkdownFile = "";

  /* WHY: Creates a unique localStorage key for the current markdown file so each topic keeps its own notes. */
  function getStorageKey() {
    return `codeflix-notes-${currentMarkdownFile || "default-topic"}`;
  }

  /* WHY: Reads saved notes from localStorage and appends them under the loaded markdown content. */
  function renderSavedNotes() {
    const savedNotes = JSON.parse(localStorage.getItem(getStorageKey())) || [];

    if (!savedNotes.length) return;

    const notesSection = document.createElement("section");
    notesSection.className = "user-notes-section";

    notesSection.innerHTML = `
      <h2>My added notes</h2>
      <div class="user-notes-list">
        ${savedNotes
          .map(
            (note) => `
              <article class="user-note-card">
                ${typeof marked !== "undefined" ? marked.parse(note) : `<p>${note}</p>`}
              </article>
            `
          )
          .join("")}
      </div>
    `;    

    markdownContent.appendChild(notesSection);
  }

  /* WHY: Loads a markdown file, converts it with marked.js if available, and shows saved notes for that file. */
  async function loadMarkdown(filePath) {
    currentMarkdownFile = filePath;

    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Could not load file: ${filePath}`);
      }

      const markdownText = await response.text();

      if (!markdownText.trim()) {
        markdownContent.innerHTML = `
          <h1>Empty file</h1>
          <p>The Markdown file exists, but it has no content yet.</p>
        `;
        renderSavedNotes();
        return;
      }

      if (typeof marked === "undefined") {
        console.warn("Marked.js is not loaded. Showing raw Markdown.");
        markdownContent.innerHTML = `<pre>${markdownText}</pre>`;
        renderSavedNotes();
        return;
      }

      markdownContent.innerHTML = marked.parse(markdownText);
      renderSavedNotes();
    } catch (error) {
      markdownContent.innerHTML = `
        <h1>Content not found</h1>
        <p>There was a problem loading this Markdown file.</p>
        <p>${error.message}</p>
      `;

      console.error(error);
    }
  }

  /* WHY: Automatically loads markdown when a page URL contains ?file=... */
  if (fileFromUrl) {
    loadMarkdown(fileFromUrl);
  }

  /* WHY: Lets any element with data-file load markdown without a full page reload. */
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-file]");

    if (!link) return;

    event.preventDefault();

    loadMarkdown(link.dataset.file);
  });

});


/* WHY: Resizes workspace widgets and keeps only one large widget active at a time. */
document.addEventListener("click", (event) => {
  const sizeButton = event.target.closest("[data-size]");

  if (!sizeButton) return;

  const widget = sizeButton.closest(".widget");
  const grid = widget?.closest(".widget-grid");
  const newSize = sizeButton.dataset.size;

  if (!widget || !grid || !newSize) return;

  if (newSize === "large") {
    grid.querySelectorAll(".widget").forEach((card) => {
      card.classList.remove("widget-large", "widget-medium");
      card.classList.add("widget-small");
    });
  }

  widget.classList.remove("widget-small", "widget-medium", "widget-large");
  widget.classList.add(`widget-${newSize}`);

  if (newSize === "large") {
    grid.prepend(widget);
  }
});


/* WHY: Selects the homepage hero and active iframe so clicking cards can play videos in the hero. */
const heroPromo = document.getElementById("heroPromo");
const heroVideo = document.getElementById("heroVideo");

/* WHY: Reuses one video-play function for mouse clicks and keyboard activation. */
function playSelectedVideo(card) {
  const videoUrl = card.dataset.video;

  if (!videoUrl || !heroPromo || !heroVideo) return;

  heroVideo.src = videoUrl;
  heroPromo.classList.add("is-playing");

  heroPromo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* WHY: If the hero exists, delegated events avoid attaching duplicate listeners to every video card.
   Safe because the same card selector, same keys, same autoplay URL, and same playSelectedVideo flow are preserved. */
if (heroPromo && heroVideo) {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".video-content-card, .top-ten-card[data-video]");

    if (!card) return;

    playSelectedVideo(card);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".video-content-card, .top-ten-card[data-video]");

    if (!card) return;

    event.preventDefault();
    playSelectedVideo(card);
  });
}

/* WHY: Copies prompt text from data-prompt to the clipboard and shows a temporary copied state. */
document.querySelectorAll(".prompt-option").forEach((button) => {
  button.dataset.label = button.textContent;

  button.addEventListener("click", async () => {
    const promptText = button.dataset.prompt;

    if (!promptText) return;

    try {
      await navigator.clipboard.writeText(promptText);

      button.classList.add("copied");
      button.textContent = "Copied";

      setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = button.dataset.label;
      }, 1200);
    } catch (error) {
      console.error("Could not copy prompt:", error);
    }
  });
});


/* ==========================================================================================
   FOOTER MOVEMENT AND FIXED POPOUT
   WHY: Shows the auto-hide footer while scrolling or when the mouse is near the bottom.
========================================================================================== */

/* WHY: Selects the footer that CSS hides by default with .auto-hide-footer. */
const footer = document.querySelector(".auto-hide-footer");

/* WHY: Stores the timeout so each scroll/mouse event can reset the hide delay. */
let footerTimer;

/* WHY: Shows the footer briefly during scrolling or when the mouse reaches the bottom edge. */
if (footer) {
  function showFooterTemporarily() {
    footer.classList.add("is-visible");

    clearTimeout(footerTimer);

    footerTimer = setTimeout(() => {
      footer.classList.remove("is-visible");
    }, 5000);
  }

  window.addEventListener("scroll", showFooterTemporarily, { passive: true });

  window.addEventListener("mousemove", (event) => {
    const nearBottom = window.innerHeight - event.clientY < 90;

    if (nearBottom) {
      showFooterTemporarily();
    }
  }, { passive: true });
}

/* ==========================================================================================
   HOMEPAGE PREVIEW
   WHY: Shows the auto-hide footer while scrolling or when the mouse is near the bottom.
========================================================================================== */

/* WHY: Selects the decorative homepage preview iframe/video behind the hero text. */
const heroPreviewVideo = document.getElementById("heroPreviewVideo");

/* WHY: Stores the rotating list of preview videos used in the hero background. */
const heroPreviewVideos = [
  "https://www.youtube.com/embed/qz0aGYrrlhU",
  "https://www.youtube.com/embed/yfoY53QXEnI",
  "https://www.youtube.com/embed/8JJ101D3knE",
  "https://www.youtube.com/embed/5fb2aPlgoys",
];

/* WHY: Tracks which preview video should play next. */
let heroPreviewIndex = 0;

/* WHY: Updates the hero preview video source and cycles to the next preview URL. */
function playHeroPreview() {
  if (!heroPreviewVideo) return;

  const videoUrl = heroPreviewVideos[heroPreviewIndex];

  heroPreviewVideo.src = `${videoUrl}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

  heroPreviewIndex = (heroPreviewIndex + 1) % heroPreviewVideos.length;
}

/* WHY: Starts the hero preview rotation only on pages that include the preview video element. */
if (heroPreviewVideo) {
  playHeroPreview();
  setInterval(playHeroPreview, 40000);
}


/* WHY: Scrolls the nearest horizontal content row left or right when a row pill button calls this function. */
function scrollRow(button, direction) {
  const section = button.closest(".content-row-section, .top-ten-section");

  if (!section) return;

  const row = section.querySelector(".content-row, .top-ten-row");

  if (!row) return;

  row.scrollBy({
    left: direction === "left" ? -500 : 500,
    behavior: "smooth",
  });
}

/* WHY: Keeps the prompt dropdown visible briefly after mouse leave
   so users have time to interact with the menu.
   Safe because it only changes visibility timing. */

const promptMenu = document.querySelector(".prompt-menu");

if (promptMenu) {
  const promptDropdown = promptMenu.querySelector(".prompt-dropdown");
  const promptButton = promptMenu.querySelector(".tool-link");

  let promptHideTimer;
  const isTouchPromptMode = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

  promptMenu.addEventListener("mouseenter", () => {
    if (isTouchPromptMode()) return;

    clearTimeout(promptHideTimer);

    promptDropdown.classList.add("is-visible");
  });

  promptMenu.addEventListener("mouseleave", () => {
    if (isTouchPromptMode()) return;

    promptHideTimer = setTimeout(() => {
      promptDropdown.classList.remove("is-visible");
    }, 2000);
  });

  if (promptButton) {
    promptButton.addEventListener("click", () => {
      if (!isTouchPromptMode()) return;

      clearTimeout(promptHideTimer);
      promptDropdown.classList.toggle("is-visible");
    });
  }

}
