import { useState } from "react";
import "./App.css";

type Quote = {
  text: string;
  author?: string;
  category: string;
};

type Scene = {
  image: string;
  title: string;
};

const quotes: Quote[] = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", category: "Love" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "Happiness" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "Life" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Success" },
  { text: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson", category: "Friendship" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", category: "Wisdom" },
  { text: "Peace begins with a smile.", author: "Mother Teresa", category: "Peace" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin", category: "Humor" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein", category: "Creativity" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "Motivation" },
  { text: "Where there is love there is life.", author: "Mahatma Gandhi", category: "Love" },
  { text: "Every moment is a fresh beginning.", author: "T. S. Eliot", category: "Life" },
  { text: "Small steps every day lead to big changes.", category: "Motivation" },
  { text: "Sometimes the most productive thing you can do is relax.", category: "Peace" },
];

const categories = [
  "All Categories",
  "Motivation",
  "Love",
  "Happiness",
  "Life",
  "Success",
  "Friendship",
  "Wisdom",
  "Peace",
  "Humor",
  "Creativity",
];

const oceanScenes: Scene[] = [
  {
    image: "photo-1507525428034-b723cf961d3e",
    title: "Tropical Paradise",
  },
  {
    image: "photo-1518837695005-2083093ee35b",
    title: "Blue Ocean",
  },
  {
    image: "photo-1500375592092-40eb2168fd21",
    title: "Ocean Waves",
  },
];

const categoryScenes: Record<string, Scene[]> = {
  "All Categories": [
    {
      image: "photo-1507525428034-b723cf961d3e",
      title: "Tropical Paradise",
    },
    {
      image: "photo-1518837695005-2083093ee35b",
      title: "Endless Blue",
    },
    {
      image: "photo-1500375592092-40eb2168fd21",
      title: "Ocean Waves",
    },
  ],

  Motivation: [
    {
      image: "photo-1470252649378-9c29740c9fa8",
      title: "Golden Sunrise",
    },
    {
      image: "photo-1500530855697-b586d89ba3ee",
      title: "A New Beginning",
    },
  ],

  Love: [
    {
      image: "photo-1518837695005-2083093ee35b",
      title: "Romantic Blue Sea",
    },
    {
      image: "photo-1507525428034-b723cf961d3e",
      title: "Dreamy Beach",
    },
  ],

  Happiness: [
    {
      image: "photo-1501785888041-af3ef285b470",
      title: "Sunny Paradise",
    },
    {
      image: "photo-1473116763249-2faaef81ccda",
      title: "Beautiful Nature",
    },
  ],

  Life: [
    {
      image: "photo-1473116763249-2faaef81ccda",
      title: "Green Nature",
    },
    {
      image: "photo-1500534623283-312aade485b7",
      title: "Open Landscapes",
    },
  ],

  Success: [
    {
      image: "photo-1464822759023-fed622ff2c3b",
      title: "Majestic Mountains",
    },
    {
      image: "photo-1470252649378-9c29740c9fa8",
      title: "Golden Sunrise",
    },
  ],

  Friendship: [
    {
      image: "photo-1500534623283-312aade485b7",
      title: "Beautiful Landscape",
    },
    {
      image: "photo-1501785888041-af3ef285b470",
      title: "Sunny Escape",
    },
  ],

  Wisdom: [
    {
      image: "photo-1518837695005-2083093ee35b",
      title: "Deep Blue Ocean",
    },
    {
      image: "photo-1500375592092-40eb2168fd21",
      title: "The Endless Sea",
    },
  ],

  Peace: [
    {
      image: "photo-1507525428034-b723cf961d3e",
      title: "Peaceful Beach",
    },
    {
      image: "photo-1518837695005-2083093ee35b",
      title: "Quiet Waters",
    },
  ],

  Humor: [
    {
      image: "photo-1501785888041-af3ef285b470",
      title: "A Sunny Escape",
    },
    {
      image: "photo-1500534623283-312aade485b7",
      title: "A Beautiful Day",
    },
  ],

  Creativity: [
    {
      image: "photo-1470252649378-9c29740c9fa8",
      title: "Colorful Sky",
    },
    {
      image: "photo-1507525428034-b723cf961d3e",
      title: "Ocean Inspiration",
    },
  ],
};

function imageUrl(photoId: string) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=2200&q=85`;
}

function chooseScene(category: string): Scene {
  const scenes = categoryScenes[category] || oceanScenes;

  return scenes[Math.floor(Math.random() * scenes.length)];
}

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [category, setCategory] = useState("All Categories");

  const [favorites, setFavorites] = useState<Quote[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("ocean-favorites") || "[]",
      );
    } catch {
      return [];
    }
  });

  const [showFavorites, setShowFavorites] = useState(false);
  const [message, setMessage] = useState("");

  const [scene, setScene] = useState<Scene>(() =>
    chooseScene("All Categories"),
  );

  const availableQuotes = showFavorites
    ? favorites
    : category === "All Categories"
      ? quotes
      : quotes.filter((quote) => quote.category === category);

  function newQuote() {
    if (availableQuotes.length === 0) {
      setMessage("Save a favorite quote first! 💙");
      return;
    }

    const choices = availableQuotes.filter(
      (quote) => quote.text !== currentQuote.text,
    );

    const next =
      choices.length > 0
        ? choices[Math.floor(Math.random() * choices.length)]
        : availableQuotes[0];

    setCurrentQuote(next);

    // Change scenery to match the new quote.
    setScene(chooseScene(next.category));

    setMessage("");
  }

  function changeCategory(value: string) {
    setCategory(value);
    setShowFavorites(false);

    const choices =
      value === "All Categories"
        ? quotes
        : quotes.filter((quote) => quote.category === value);

    if (choices.length > 0) {
      const next =
        choices[Math.floor(Math.random() * choices.length)];

      setCurrentQuote(next);
    }

    setScene(chooseScene(value));
    setMessage("");
  }

  function toggleFavoritesView() {
    if (showFavorites) {
      setShowFavorites(false);
      setScene(chooseScene(category));
      setMessage("");
      return;
    }

    setShowFavorites(true);

    if (favorites.length > 0) {
      setCurrentQuote(favorites[0]);
      setScene(chooseScene(favorites[0].category));
      setMessage("");
    } else {
      setMessage("No favorites yet. Save a quote you love! 💙");
    }
  }

  function toggleFavorite() {
    const exists = favorites.some(
      (quote) => quote.text === currentQuote.text,
    );

    const updated = exists
      ? favorites.filter(
          (quote) => quote.text !== currentQuote.text,
        )
      : [...favorites, currentQuote];

    setFavorites(updated);

    try {
      localStorage.setItem(
        "ocean-favorites",
        JSON.stringify(updated),
      );
    } catch {
      setMessage("Your browser couldn't save this favorite.");
    }
  }

  const isFavorite = favorites.some(
    (quote) => quote.text === currentQuote.text,
  );

  async function shareQuote() {
    const text = `“${currentQuote.text}” — ${
      currentQuote.author || "Unknown Author"
    }`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Ocean Quotes",
          text,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setMessage("Quote copied to clipboard! 🌊");
      } else {
        setMessage(text);
      }
    } catch {
      setMessage("Your quote is ready to share! 💙");
    }
  }

  return (
    <main
      className="ocean-app"
      style={
        {
          "--scene-image": `url("${imageUrl(scene.image)}")`,
        } as React.CSSProperties
      }
    >
      <div className="scene-overlay" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">🌊</span>
          <span>
            <strong>Ocean Quotes</strong>
            <small>A little peace for your soul</small>
          </span>
        </a>

        <button
          className={`favorites-toggle ${
            showFavorites ? "active" : ""
          }`}
          onClick={toggleFavoritesView}
        >
          ♥ Favorites <span>{favorites.length}</span>
        </button>
      </header>

      <section className="hero" id="home">
        <div className="eyebrow">
          <span className="live-dot" />
          YOUR DAILY MOMENT OF CALM
        </div>

        <h1>
          Let your mind
          <br />
          <span>drift away.</span>
        </h1>

        <p className="hero-description">
          Beautiful words, endless horizons, and a little inspiration
          for wherever life takes you.
        </p>

        <p className="scene-caption">
          ✦ {scene.title} ✦
        </p>

        <section className="quote-panel">
          <div className="quote-toolbar">
            <label htmlFor="category">EXPLORE A FEELING</label>

            <select
              id="category"
              value={category}
              onChange={(event) =>
                changeCategory(event.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div
            className="quote-content"
            key={currentQuote.text}
          >
            <span className="quote-mark">“</span>

            <p className="quote-text">
              {currentQuote.text}
            </p>

            <p className="quote-author">
              <span className="author-line" />
              {currentQuote.author || "Unknown Author"}
            </p>

            <span className="category-pill">
              {currentQuote.category}
            </span>
          </div>

          <div className="quote-actions">
            <button
              className={`icon-button ${
                isFavorite ? "favorited" : ""
              }`}
              onClick={toggleFavorite}
              aria-label="Toggle favorite"
              title="Save favorite"
            >
              {isFavorite ? "♥" : "♡"}
            </button>

            <button
              className="icon-button"
              onClick={shareQuote}
              aria-label="Share quote"
              title="Share quote"
            >
              ↗
            </button>

            <button
              className="new-quote-button"
              onClick={newQuote}
            >
              <span>Find inspiration</span>
              <span>↗</span>
            </button>
          </div>

          {message && (
            <p className="status-message">{message}</p>
          )}

          {showFavorites && (
            <p className="favorites-note">
              {favorites.length
                ? `Exploring your ${favorites.length} saved quote${
                    favorites.length === 1 ? "" : "s"
                  }.`
                : "Your favorites are waiting. Save a quote you love!"}
            </p>
          )}
        </section>

        <div className="bottom-note">
          BREATHE IN. LET GO. BEGIN AGAIN.
        </div>
      </section>

      <footer className="footer">
        <span>Made with ♡ and a little sea breeze</span>
        <span>Good thoughts · Better days</span>
      </footer>
    </main>
  );
}

export default App;