// Functionality to fetch random images from unsplash at hero section
const ACCESS_KEY = "C9AWAXSJuOYtsweyXdzzJOceXrhMDhLySTgIZdaOqM4"

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const cachedImage = localStorage.getItem("heroImage");

  if (cachedImage) {
    hero.style.backgroundImage = `url(${cachedImage})`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
  }

  fetch(`https://api.unsplash.com/photos/random?query=cinema&orientation=landscape&client_id=${ACCESS_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch new image");
      }
      return response.json();
    })
    .then(data => {
      const imageUrl = data.urls.regular;

      hero.style.backgroundImage = `url(${imageUrl})`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";

      localStorage.setItem("heroImage", imageUrl);
    })
    .catch(error => console.error("Unsplash fetch failed:", error));
});