console.log("app.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const markdownContent = document.getElementById("markdownContent");
  const topicInput = document.getElementById("topicInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const askBtn = document.getElementById("askBtn");
  const floatingBarToggle = document.getElementById("floatingBarToggle");
  const barCloseBtn = document.getElementById("barCloseBtn");
  const params = new URLSearchParams(window.location.search);
  const fileFromUrl = params.get("file");

  let currentMarkdownFile = "";

  if (!markdownContent) {
    console.log("No markdown content on this page.");
  }

  function getStorageKey() {
    return `codeflix-notes-${currentMarkdownFile || "default-topic"}`;
  }

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

  function renderSingleNote(noteText) {
    let notesSection = document.querySelector(".user-notes-section");

    if (!notesSection) {
      notesSection = document.createElement("section");
      notesSection.className = "user-notes-section";

      notesSection.innerHTML = `
        <h2>My added notes</h2>
        <div class="user-notes-list"></div>
      `;

      markdownContent.appendChild(notesSection);
    }

    const notesList = notesSection.querySelector(".user-notes-list");

    const noteCard = document.createElement("article");
    noteCard.className = "user-note-card";
    noteCard.innerHTML =
      typeof marked !== "undefined" ? marked.parse(noteText) : `<p>${noteText}</p>`;

    notesList.appendChild(noteCard);
  }

  function saveNoteToCurrentTopic() {
    if (!topicInput) return;

    const noteText = topicInput.value.trim();

    if (!noteText) return;

    const savedNotes = JSON.parse(localStorage.getItem(getStorageKey())) || [];

    savedNotes.push(noteText);

    localStorage.setItem(getStorageKey(), JSON.stringify(savedNotes));

    topicInput.value = "";

    renderSingleNote(noteText);
  }

  async function loadMarkdown(filePath) {
    currentMarkdownFile = filePath;

    console.log("Clicked markdown link:", filePath);

    try {
      const response = await fetch(filePath);

      console.log("Fetch response:", response.status, response.statusText);

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

  if (fileFromUrl) {
    loadMarkdown(fileFromUrl);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-file]");

    if (!link) return;

    event.preventDefault();
    loadMarkdown(link.dataset.file);
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-file]");

    if (!link) return;

    event.preventDefault();

    loadMarkdown(link.dataset.file);
  });

  if (addNoteBtn) {
    addNoteBtn.addEventListener("click", saveNoteToCurrentTopic);
  }

  if (askBtn) {
    askBtn.addEventListener("click", saveNoteToCurrentTopic);
  }

  if (topicInput) {
    topicInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        saveNoteToCurrentTopic();
      }
    });
  }
});




document.addEventListener("click", (event) => {
  const sizeButton = event.target.closest("[data-size]");

  if (!sizeButton) return;

  const widget = sizeButton.closest(".widget");
  const newSize = sizeButton.dataset.size;

  widget.classList.remove("widget-small", "widget-medium", "widget-large");
  widget.classList.add(`widget-${newSize}`);
});





document.addEventListener("click", (event) => {
  const sizeButton = event.target.closest("[data-size]");
  if (!sizeButton) return;

  const widget = sizeButton.closest(".widget");
  const newSize = sizeButton.dataset.size;

  if (newSize === "large") {
    document.querySelectorAll(".widget").forEach((card) => {
      card.classList.remove("widget-large", "widget-medium");
      card.classList.add("widget-small");
    });
  }

  widget.classList.remove("widget-small", "widget-medium", "widget-large");
  widget.classList.add(`widget-${newSize}`);
});



document.addEventListener("click", (event) => {
  const sizeButton = event.target.closest("[data-size]");
  if (!sizeButton) return;

  const widget = sizeButton.closest(".widget");
  const grid = widget.closest(".widget-grid");
  const newSize = sizeButton.dataset.size;

  widget.classList.remove("widget-small", "widget-medium", "widget-large");
  widget.classList.add(`widget-${newSize}`);

  if (newSize === "large") {
    grid.prepend(widget);
  }
});



// Updates the hero section on the main page to play selected videos
const heroPromo = document.getElementById("heroPromo");
const heroVideo = document.getElementById("heroVideo");

if (heroPromo && heroVideo) {
  document
  .querySelectorAll(".video-content-card, .top-ten-card[data-video]")
  .forEach((card) => {
    card.addEventListener("click", () => {
      const videoUrl = card.dataset.video;

      if (!videoUrl) return;

      heroVideo.src = videoUrl;
      heroPromo.classList.add("is-playing");

      heroPromo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

// copy and paste prompt-option content
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


// FOOTER MOVEMENT AND FIXED POPOUT

const footer = document.querySelector(".auto-hide-footer");

let footerTimer;

if (footer) {
  window.addEventListener("scroll", () => {
    footer.classList.add("is-visible");

    clearTimeout(footerTimer);

    footerTimer = setTimeout(() => {
      footer.classList.remove("is-visible");
    }, 5000);
  });
}

if (footer) {
  window.addEventListener("mousemove", (event) => {
    const nearBottom = window.innerHeight - event.clientY < 90;

    if (nearBottom) {
      footer.classList.add("is-visible");

      clearTimeout(footerTimer);

      footerTimer = setTimeout(() => {
        footer.classList.remove("is-visible");
      }, 5000);
    }
  });
}


const heroPreviewVideo = document.getElementById("heroPreviewVideo");

const heroPreviewVideos = [
  "https://www.youtube.com/embed/qz0aGYrrlhU",
  "https://www.youtube.com/embed/yfoY53QXEnI",
  "https://www.youtube.com/embed/8JJ101D3knE",
  "https://www.youtube.com/embed/5fb2aPlgoys",
];

let heroPreviewIndex = 0;

function playHeroPreview() {
  if (!heroPreviewVideo) return;

  const videoUrl = heroPreviewVideos[heroPreviewIndex];

  heroPreviewVideo.src = `${videoUrl}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

  heroPreviewIndex = (heroPreviewIndex + 1) % heroPreviewVideos.length;
}

if (heroPreviewVideo) {
  playHeroPreview();
  setInterval(playHeroPreview, 40000);
}


// heroPreviewVideo.src = `${videoUrl}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;


// Row pill scroll buttons
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