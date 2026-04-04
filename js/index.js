// Get DOM elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const moviesContainer = document.getElementById("movies-container");
const form = document.getElementById("search-form")

// OMDb API key (replace with your own if needed)
const API_KEY = "522a7817";

// Trigger search when button is clicked both on desktop and mobile
form.addEventListener("submit", function (e) {
    e.preventDefault()
    handleSearch()
})

// Allow pressing "Enter" to trigger search
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// Default movie suggestions shown on page load
const starterSearches = ["Batman", "Avengers", "Harry Potter", "Spider-Man", "Titanic"];

// Load random movies when the page first opens
window.addEventListener("DOMContentLoaded", function () {
  const randomQuery =
    starterSearches[Math.floor(Math.random() * starterSearches.length)];
  handleSearch(randomQuery);
});

// Main function to fetch movies from OMDb
async function handleSearch(defaultQuery = "") {
  // Use defaultQuery (for preload) OR user input
  const searchValue = defaultQuery || searchInput.value.trim();

  // Show message if input is empty
  if (!searchValue) {
    moviesContainer.innerHTML = `
      <div class="empty-message">
        <p>Please enter a movie title.</p>
      </div>
    `;
    return;
  }

  // Show loading state while fetching data
  moviesContainer.innerHTML = `
    <div class="empty-message">
      <p>Loading...</p>
    </div>
  `;

  try {
    // Fetch basic movie search results
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchValue)}`
    );
    const data = await response.json();

    // Handle API error (e.g., no results found)
    if (data.Response === "False") {
      moviesContainer.innerHTML = `
        <div class="empty-message">
          <p>${data.Error}</p>
        </div>
      `;
      return;
    }

    // Fetch detailed info for each movie using imdbID
    const detailedMovies = await Promise.all(
      data.Search.map(movie =>
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
          .then(res => res.json())
      )
    );

    // Render movies to UI
    renderMovies(detailedMovies);

  } catch (error) {
    // Handle network or unexpected errors
    moviesContainer.innerHTML = `
      <div class="empty-message">
        <p>Something went wrong. Please try again.</p>
      </div>
    `;
  }
}

// Render movie cards into the DOM
function renderMovies(movies) {
  moviesContainer.innerHTML = movies
    .map(movie => {
      return `
        <article class="movie-card">
          <img
            class="movie-poster"
            src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}"
            alt="${movie.Title} poster"
          />

          <div class="movie-info">
            <h2>${movie.Title} (${movie.Year})</h2>
            <p class="movie-meta">⭐ ${movie.imdbRating} | ${movie.Runtime} | ${movie.Genre}</p>
            <p class="movie-plot">${movie.Plot}</p>
            <button class="watchlist-btn" data-id="${movie.imdbID}">
              + Watchlist
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  // Attach event listeners to all "Add to Watchlist" buttons
  document.querySelectorAll(".watchlist-btn").forEach(button => {
    button.addEventListener("click", addToWatchlist);
  });
}

// Add selected movie to localStorage watchlist
async function addToWatchlist(e) {
  const movieId = e.target.dataset.id;

  try {
    // Fetch full movie details
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const movie = await response.json();

    // Get existing watchlist or initialize empty array
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    // Prevent duplicate entries
    const alreadyAdded = watchlist.some(item => item.imdbID === movieId);

    if (alreadyAdded) {
      e.target.textContent = "Already Added";
      return;
    }

    // Save movie to watchlist
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    // Update button text for feedback
    e.target.textContent = "Added";

  } catch (error) {
    // Handle fetch error
    e.target.textContent = "Error";
  }
}

function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}

function saveWatchlist(list) {
  localStorage.setItem("watchlist", JSON.stringify(list));
}