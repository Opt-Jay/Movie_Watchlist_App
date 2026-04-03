// Get container where watchlist movies will be displayed
const watchlistContainer = document.getElementById("watchlist-container");

// Render all movies stored in localStorage
function renderWatchlist() {
  // Retrieve watchlist from localStorage or default to empty array
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Show empty state message if no movies are saved
  if (watchlist.length === 0) {
    watchlistContainer.innerHTML = `
      <div class="empty-message">
        <p>Your watchlist is looking a little empty...</p>
        <p><a href="index.html">Let’s add some movies</a></p>
      </div>
    `;
    return;
  }

  // Generate HTML for each movie in the watchlist
  watchlistContainer.innerHTML = watchlist
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
            <button class="remove-btn" data-id="${movie.imdbID}">
              Remove
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  // Attach click event to all "Remove" buttons
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", removeFromWatchlist);
  });
}

// Remove a movie from watchlist based on imdbID
function removeFromWatchlist(e) {
  const movieId = e.target.dataset.id;

  // Get current watchlist
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Filter out the selected movie
  watchlist = watchlist.filter(movie => movie.imdbID !== movieId);

  // Update localStorage with new list
  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  // Re-render UI to reflect changes
  renderWatchlist();
}

// Initial render when page loads
renderWatchlist();

function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}

function saveWatchlist(list) {
  localStorage.setItem("watchlist", JSON.stringify(list));
}