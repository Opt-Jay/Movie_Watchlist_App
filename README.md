**🎬 Movie Watchlist App**

A fully responsive movie search and watchlist application powered by the OMDb API.
Search for movies, explore detailed information, and save your favourites to a persistent watchlist.

⸻

**🚀 Live Demo**
👉 https://opt-jay.github.io/Movie_Watchlist_App/

⸻

**✨ Features**
	•	🔍 Search movies by title (OMDb API)
	•	🔍 Also fetches random cinema-themed images from Unsplash
	•	🔍 Automatically applies background to the .hero section
	•	🎞 View detailed movie info (rating, runtime, genre, plot)
	•	➕ Add movies to watchlist
	•	❌ Remove movies from watchlist
	•	💾 Persistent storage using localStorage both for (OMDb and Unsplash API's)
	•	📱 Fully responsive (mobile, tablet, desktop)
	•	⚡ Fast and dynamic UI updates
	
⸻

**🧠 What I Built & Learned**

This project demonstrates:
	•	API integration using fetch
	•	Handling asynchronous JavaScript (async/await)
	•	Dynamic DOM rendering
	•	State management with localStorage
	•	Responsive UI design (mobile-first approach)
	•	Clean component-like structure using vanilla JS
	
⸻

**🛠 Tech Stack**
	•	HTML5
	•	CSS3 (Responsive Design + Flex/Grid)
	•	JavaScript (ES6+)
	•	OMDb API
	
⸻

**📂 Project Structure**
movie-watchlist/
│
├── index.html          # Search page
├── watchlist.html      # Watchlist page
├── css/
│   └── styles.css
└── js/
	│ 
	│__	hero.js			# hero image handler
    ├── index.js        # Search logic
    └── watchlist.js    # Watchlist logic

⸻

**🔌 API Integration**

This app uses the OMDb API:
	•	Search movies:
  https://www.omdbapi.com/?apikey=522a7817&s=movie
  •	Get full movie details:
  https://www.omdbapi.com/?apikey=522a7817&i=imdbID
  
⸻

**⚙️ How to Run Locally**
	1.	Clone the repository:
      git clone https://github.com/Opt-Jay/Movie_Watchlist_App.git

  2.  Open the project folder:
      cd movie-watchlist
	3.	Open with Live Server OR open index.html directly
	4.	Add your OMDb API key in:
      const API_KEY = "YOUR_API_KEY";
      
⸻

**📸 Screenshots**
![Search Page]
<img width="1139" height="809" alt="Screenshot 2026-04-03 at 23 43 35" src="https://github.com/user-attachments/assets/31e929f0-121f-4fba-bb33-f744e2646b5f" />

![Watchlist Page]
<img width="1139" height="809" alt="Screenshot 2026-04-03 at 23 43 51" src="https://github.com/user-attachments/assets/888b5b90-a951-435f-adf0-44811b4622b8" />

⸻

**🚧 Future Improvements**
	•	🔄 Real-time search (debouncing input)
	•	🎯 Search suggestions / autocomplete
	•	🌙 Dark/Light mode toggle
	•	⭐ Sort by rating
	•	🔍 Filter by genre/year
	•	⚛️ Convert to React version
	
⸻

**💼 Why This Project Matters**
This project showcases real-world frontend skills:
	•	Consuming external APIs
	•	Managing application state
	•	Building responsive layouts
	•	Creating interactive user experiences
	
⸻

**👤 Author**
Justice Oppong-Tuah
	•	🌍 London, UK
	•	💼 Aspiring Data Analyst | Software Developer | Digital Product Builder
	
⸻

**⭐ If you like this project**
Give it a ⭐ on GitHub - it helps a lot!
