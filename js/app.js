// =========================================================
// 1. CATALOGUE DATA (Array of 12 Objects across 4 Genres)
// =========================================================
const catalogueData = [
  {
    id: 1,
    title: "Jumanji",
    genre: "Drama",
    type: "Movie",
    year: 2017,
    duration: "119m",
    featured: "trending",
    poster: "assets/posters/jumanji.jpg",
    videoSrc: "assets/movies/jumanji.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "A renewable-energy engineer races against winter blizzards in the Lesotho highlands to restore power to remote clinics."
  },
  {
    id: 2,
    title: "Materialists",
    genre: "Drama",
    type: "Series",
    year: 2025,
    duration: "2 Seasons",
    featured: "trending",
    poster: "assets/posters/materialists.jpg",
    videoSrc: "assets/movies/materialists.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "A young, ambitious New York City matchmaker finds herself torn between the perfect match and her imperfect ex."
  },
  {
    id: 3,
    title: "Outlaws",
    genre: "Sci-Fi",
    type: "Movie",
    year: 2026,
    duration: "1h 54m",
    featured: "trending",
    poster: "assets/posters/outlaws.webp",
    videoSrc: "assets/movies/outlaws.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "A group of people who feel betrayed by their government and let down by their police force form a modern-day outlaw posse in order to right what they see as the wrongs of society."
  },
  {
    id: 4,
    title: "The witcher",
    genre: "Documentary",
    type: "Documentary",
    year: 2024,
    duration: "58m",
    featured: "new",
    poster: "assets/posters/the witcher.jpg",
    videoSrc: "assets/movies/the witcher.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
  },
  {
    id: 5,
    title: "Bad education",
    genre: "Education",
    type: "Series",
    year: 2026,
    duration: "8 Episodes",
    featured: "new",
    poster: "assets/posters/education.jpg",
    videoSrc: "assets/movies/education.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    description: "The unfolding of the single largest public school embezzlement scandal in history."
  },
  {
    id: 6,
    title: "The drama",
    genre: "Documentary",
    type: "Documentary",
    year: 2025,
    duration: "1h 12m",
    featured: "trending",
    poster: "assets/posters/the drama.jpg",
    videoSrc: "assets/movies/the drama queen.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "A happily engaged couple is put to the test when an unexpected turn sends their wedding week off the rails."
  },
  {
    id: 7,
    title: "Musketeer",
    genre: "Sci-Fi",
    type: "Series",
    year: 2025,
    duration: "1 Season",
    featured: "new",
    poster: "assets/posters/musketeer.jpg",
    videoSrc: "assets/movies/musketeer.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Alexander Dumas' novel is updated with an eastern influence as D'Artagnan attempts to join the king's elite guards, the Royal Musketeers, and find the man who killed his parents"
  },
  {
    id: 8,
    title: "Andrews",
    genre: "Education",
    type: "Documentary",
    year: 2026,
    duration: "1h 05m",
    featured: "new",
    poster: "assets/posters/andrews.jpg",
    videoSrc: "assets/movies/andrews.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "After learning the shocking truth about the people who raised her, young Dawn goes to stay with her real family — a family with dark and twisted secrets. As she struggles to fit in, her cruel grandmother starts to rule her life with an iron fist."
  },
  {
    id: 9,
    title: "You should have left",
    genre: "Documentary",
    type: "Documentary",
    year: 2024,
    duration: "49m",
    featured: "none",
    poster: "assets/posters/you should have left.jpg",
    videoSrc: "assets/movies/you should have left.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "A screenwriter travels to a remote house in Wales with his family so that he can write the sequel to his big hit film, but he begins to regret his decision after suffering from a severe case of writer's block."
  },
  {
    id: 10,
    title: "Iron Man",
    genre: "Drama",
    type: "Movie",
    year: 2013,
    duration: "71 m",
    featured: "none",
    poster: "assets/posters/iron man.jpg",
    videoSrc: "assets/movies/iron man.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4",
    description: "The Invincible Iron Man and the Incredible Hulk must join forces to save the Earth from its greatest threat yet."
  },
  {
    id: 11,
    title: "King Kon",
    genre: "Sci-Fi",
    type: "Movie",
    year: 2005,
    duration: "187 m",
    featured: "none",
    poster: "assets/posters/king kong.jpg",
    videoSrc: "assets/movies/king kong.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    description: "A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives."
  },
  {
    id: 12,
    title: "The furious",
    genre: "Education",
    type: "Movie",
    year: 2025,
    duration: "1h 00m",
    featured: "none",
    poster: "assets/posters/the furious.jpg",
    videoSrc: "assets/movies/the furious.mp4",
    fallbackVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "A father fights fiercely against ruthless kidnappers to save his abducted daughter."
  }
];

// =========================================================
// 2. LOCALSTORAGE WATCHLIST MANAGEMENT
// =========================================================
const STORAGE_KEY = "kasistream_watchlist";

function getWatchlist() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveWatchlist(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  updateNavbarBadge();
}

function updateNavbarBadge() {
  const badge = document.getElementById("navWatchlistCount");
  if (badge) {
    badge.textContent = getWatchlist().length;
  }
}

function showFeedbackAlert(message, type = "success") {
  const container = document.getElementById("alertContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

function toggleWatchlist(id) {
  let watchlist = getWatchlist();
  const item = catalogueData.find(movie => movie.id === id);
  if (!item) return;

  if (watchlist.includes(id)) {
    watchlist = watchlist.filter(savedId => savedId !== id);
    saveWatchlist(watchlist);
    showFeedbackAlert(`Removed <strong>${item.title}</strong> from My List.`, "warning");
  } else {
    watchlist.push(id);
    saveWatchlist(watchlist);
    showFeedbackAlert(`Added <strong>${item.title}</strong> to My List!`, "success");
  }

  renderHomeRows();
  filterCatalogue();
  renderWatchlistPage();
}

// =========================================================
// 3. DYNAMIC CARD RENDERING (With Fallback SVG Posters)
// =========================================================
function getFallbackPosterSVG(title, genre) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#1e293b'/>
        <stop offset='100%' stop-color='#0f172a'/>
      </linearGradient>
    </defs>
    <rect width='400' height='600' fill='url(#g)'/>
    <rect x='20' y='20' width='360' height='560' fill='none' stroke='#f59e0b' stroke-width='3'/>
    <text x='200' y='260' fill='#f59e0b' font-family='sans-serif' font-size='18' font-weight='bold' text-anchor='middle'>${genre.toUpperCase()}</text>
    <text x='200' y='310' fill='#ffffff' font-family='sans-serif' font-size='22' font-weight='bold' text-anchor='middle'>${title}</text>
    <text x='200' y='540' fill='#9ca3af' font-family='sans-serif' font-size='14' text-anchor='middle'>KASISTREAM POSTER</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createMediaCardHTML(item) {
  const isSaved = getWatchlist().includes(item.id);
  const btnClass = isSaved ? "btn-outline-warning" : "btn-outline-light";
  const btnText = isSaved ? "&#10003; In My List" : "+ My List";
  const fallbackImg = getFallbackPosterSVG(item.title, item.genre);

  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <article class="media-card">
        <div class="poster-wrapper">
          <img src="${item.poster}" alt="${item.title} poster" onerror="this.onerror=null;this.src='${fallbackImg}';">
          <span class="card-badge-overlay">${item.genre}</span>
        </div>
        <div class="media-card-body">
          <div class="d-flex justify-content-between text-light-muted small mb-1">
            <span>${item.type} &bull; ${item.year}</span>
            <span>${item.duration}</span>
          </div>
          <h3 class="h6 fw-bold text-light mb-2">${item.title}</h3>
          <p class="small text-light-muted flex-grow-1">${item.description}</p>
          <div class="d-flex gap-2 mt-3">
            <button class="btn btn-accent btn-sm flex-grow-1" onclick="openDetailsModal(${item.id})">
              Details / Watch
            </button>
            <button class="btn ${btnClass} btn-sm" onclick="toggleWatchlist(${item.id})" aria-label="Toggle ${item.title} in My List">
              ${btnText}
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderHomeRows() {
  const trendingRow = document.getElementById("trendingRow");
  const newReleasesRow = document.getElementById("newReleasesRow");

  if (trendingRow) {
    const trendingItems = catalogueData.filter(item => item.featured === "trending");
    trendingRow.innerHTML = trendingItems.map(createMediaCardHTML).join("");
  }

  if (newReleasesRow) {
    const newItems = catalogueData.filter(item => item.featured === "new");
    newReleasesRow.innerHTML = newItems.map(createMediaCardHTML).join("");
  }
}

// =========================================================
// 4. SEARCH & FILTERING (movies.html)
// =========================================================
function filterCatalogue() {
  const grid = document.getElementById("catalogueGrid");
  if (!grid) return;

  const searchTerm = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const selectedGenre = document.getElementById("genreFilter")?.value || "all";
  const selectedType = document.getElementById("typeFilter")?.value || "all";
  const countLabel = document.getElementById("resultsCount");

  const filtered = catalogueData.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || item.genre === selectedGenre;
    const matchesType = selectedType === "all" || item.type === selectedType;

    return matchesSearch && matchesGenre && matchesType;
  });

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${catalogueData.length} titles`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="alert alert-secondary text-center py-4">
          No titles match your search or filter criteria. Try resetting your filters.
        </div>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(createMediaCardHTML).join("");
  }
}

// =========================================================
// 5. WATCHLIST PAGE RENDERING (watchlist.html)
// =========================================================
function renderWatchlistPage() {
  const grid = document.getElementById("watchlistGrid");
  if (!grid) return;

  const savedIds = getWatchlist();
  const savedItems = catalogueData.filter(item => savedIds.includes(item.id));

  if (savedItems.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="bg-card-custom border border-secondary rounded-3 p-5 text-center">
          <h2 class="h5 fw-bold mb-2">Your Watchlist is Currently Empty</h2>
          <p class="text-light-muted mb-3">Browse the catalogue and click "+ My List" on any film or series to save it here.</p>
          <a href="movies.html" class="btn btn-accent">Browse Catalogue</a>
        </div>
      </div>
    `;
  } else {
    grid.innerHTML = savedItems.map(createMediaCardHTML).join("");
  }
}

// =========================================================
// 6. TITLE DETAILS & TRAILER MODAL
// =========================================================
function openDetailsModal(id) {
  const item = catalogueData.find(m => m.id === id);
  if (!item) return;

  const modalTitle = document.getElementById("detailsModalTitle");
  const modalBody = document.getElementById("detailsModalBody");
  const isSaved = getWatchlist().includes(item.id);

  modalTitle.textContent = `${item.title} (${item.year})`;
  modalBody.innerHTML = `
    <div class="ratio ratio-16x9 mb-3 bg-black rounded overflow-hidden">
      <video controls preload="metadata" poster="${item.poster}">
        <source src="${item.videoSrc}" type="video/mp4">
        <source src="${item.fallbackVideo}" type="video/mp4">
        Your browser does not support HTML5 video playback.
      </video>
    </div>
    <div class="d-flex flex-wrap gap-2 mb-2">
      <span class="badge bg-accent">${item.genre}</span>
      <span class="badge bg-secondary">${item.type}</span>
      <span class="badge bg-secondary">${item.duration}</span>
    </div>
    <p class="text-light-muted">${item.description}</p>
    <p class="small text-secondary mb-3">
      <em>Note: Plays local asset <code>${item.videoSrc}</code> if present, or falls back to an open sample MP4 stream.</em>
    </p>
    <button class="btn ${isSaved ? "btn-outline-warning" : "btn-accent"}" onclick="toggleWatchlist(${item.id}); bootstrap.Modal.getInstance(document.getElementById('detailsModal')).hide();">
      ${isSaved ? "Remove from My List" : "+ Add to My List"}
    </button>
  `;

  const modalInstance = new bootstrap.Modal(document.getElementById("detailsModal"));
  modalInstance.show();
}

// =========================================================
// 7. FETCH API / LOCAL JSON WITH FALLBACK (index.html)
// =========================================================
async function loadPlatformUpdates() {
  const statusEl = document.getElementById("jsonStatus");
  const contentEl = document.getElementById("jsonContent");
  if (!statusEl || !contentEl) return;

  statusEl.textContent = "Fetching platform updates from data/featured-news.json...";

  try {
    const response = await fetch("data/featured-news.json");
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const updates = await response.json();
    statusEl.textContent = "Loaded live from local JSON file.";
    renderUpdateCards(updates, contentEl);
  } catch (error) {
    statusEl.innerHTML = `<span class="text-warning">Local file fetch blocked by browser security (file:// mode). Showing built-in fallback data:</span>`;
    const fallbackUpdates = [
      {
        tag: "OFFLINE FALLBACK",
        title: "Host on GitHub Pages or Live Server",
        summary: "Run with VS Code Live Server or deploy online so fetch('data/featured-news.json') loads via HTTP."
      },
      {
        tag: "CATALOGUE",
        title: "12 Sample Titles Ready",
        summary: "Explore Drama, Sci-Fi, Documentary, and Education titles in the Catalogue tab."
      }
    ];
    renderUpdateCards(fallbackUpdates, contentEl);
  }
}

function renderUpdateCards(items, container) {
  container.innerHTML = items
    .map(
      u => `
      <div class="col-md-4">
        <div class="p-3 rounded bg-dark border border-secondary h-100">
          <span class="badge bg-accent mb-2">${u.tag}</span>
          <h3 class="h6 fw-bold text-light">${u.title}</h3>
          <p class="small text-light-muted mb-0">${u.summary}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// =========================================================
// 8. FORM VALIDATION (Letters-Only Names + Live Feedback)
// =========================================================
function setFieldState(inputEl, isValid) {
  if (!inputEl) return;
  inputEl.classList.remove("is-valid", "is-invalid");
  inputEl.classList.add(isValid ? "is-valid" : "is-invalid");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidLettersOnlyName(name, minLen) {
  const regex = new RegExp(`^[A-Za-z\\s]{${minLen},40}$`);
  return regex.test(name.trim());
}

function setupForms() {
  // --- A. Demo Sign-In Form ---
  const authForm = document.getElementById("demoAuthForm");
  if (authForm) {
    const nameInput = document.getElementById("demoName");
    const emailInput = document.getElementById("demoEmail");
    const pinInput = document.getElementById("demoPin");
    const feedback = document.getElementById("authFeedback");

    // Automatically remove numbers/symbols as the user types in Name
    nameInput?.addEventListener("input", () => {
      nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
    });

    const validateAuth = () => {
      const nameValid = isValidLettersOnlyName(nameInput.value, 3);
      const emailValid = isValidEmail(emailInput.value.trim());
      const pinValid = /^[A-Za-z0-9]{4,8}$/.test(pinInput.value.trim());

      setFieldState(nameInput, nameValid);
      setFieldState(emailInput, emailValid);
      setFieldState(pinInput, pinValid);

      return nameValid && emailValid && pinValid;
    };

    [nameInput, emailInput, pinInput].forEach(el => el?.addEventListener("input", validateAuth));

    authForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateAuth()) {
        feedback.innerHTML = `<div class="alert alert-danger py-2 mb-0">Please fix the red highlighted fields before submitting.</div>`;
        return;
      }

      const cleanName = nameInput.value.trim();
      feedback.innerHTML = `<div class="alert alert-success py-2 mb-0">Demo validation passed! Welcome, <strong>${cleanName}</strong>.</div>`;
      authForm.reset();
      [nameInput, emailInput, pinInput].forEach(el => el.classList.remove("is-valid", "is-invalid"));
    });
  }

  // --- B. About / Support Contact Form ---
  const supportForm = document.getElementById("supportForm");
  if (supportForm) {
    const nameInput = document.getElementById("supportName");
    const emailInput = document.getElementById("supportEmail");
    const msgInput = document.getElementById("supportMessage");
    const feedback = document.getElementById("supportFeedback");

    // Automatically remove numbers/symbols as the user types in Name
    nameInput?.addEventListener("input", () => {
      nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
    });

    const validateSupport = () => {
      const nameValid = isValidLettersOnlyName(nameInput.value, 2);
      const emailValid = isValidEmail(emailInput.value.trim());
      const msgValid = msgInput.value.trim().length >= 10;

      setFieldState(nameInput, nameValid);
      setFieldState(emailInput, emailValid);
      setFieldState(msgInput, msgValid);

      return nameValid && emailValid && msgValid;
    };

    [nameInput, emailInput, msgInput].forEach(el => el?.addEventListener("input", validateSupport));

    supportForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateSupport()) {
        feedback.innerHTML = `<div class="alert alert-danger py-2 small">Please complete all fields properly (Name must use letters only).</div>`;
        return;
      }

      const cleanName = nameInput.value.trim();
      feedback.innerHTML = `<div class="alert alert-success py-2 small">Thank you, <strong>${cleanName}</strong>! Your message has been validated.</div>`;
      supportForm.reset();
      [nameInput, emailInput, msgInput].forEach(el => el.classList.remove("is-valid", "is-invalid"));
    });
  }
}
// =========================================================
// 9. INITIALIZE PAGE EVENTS ON DOM LOAD
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  updateNavbarBadge();
  renderHomeRows();
  filterCatalogue();
  renderWatchlistPage();
  loadPlatformUpdates();
  setupForms();

  document.getElementById("searchInput")?.addEventListener("input", filterCatalogue);
  document.getElementById("genreFilter")?.addEventListener("change", filterCatalogue);
  document.getElementById("typeFilter")?.addEventListener("change", filterCatalogue);

  document.getElementById("reloadJsonBtn")?.addEventListener("click", loadPlatformUpdates);

  document.getElementById("clearWatchlistBtn")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    updateNavbarBadge();
    renderWatchlistPage();
    showFeedbackAlert("Watchlist cleared.", "info");
  });
});
