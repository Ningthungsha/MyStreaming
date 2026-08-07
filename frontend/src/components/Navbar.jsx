import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [openProfile, setOpenProfile] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
  const value = search.trim();

  if (!value) return;

  const categories = [
    "Movies",
    "TV Shows",
    "Music",
    "Gaming",
    "Education",
    "Sports",
    "News",
    "Kids",
  ];

  const matchedCategory = categories.find(
    (category) => category.toLowerCase() === value.toLowerCase()
  );

  if (matchedCategory) {
    navigate(`/category/${encodeURIComponent(matchedCategory)}`);
  } else {
    navigate(`/search?query=${encodeURIComponent(value)}`);
  }
};

  return (
    <header>
      <div className="logo">
        <h2>
          Roel<span>Stream</span>
        </h2>
      </div>

      <nav>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("categories")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Categories
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("trending")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Trending
        </a>
      </nav>

      <div className="search-box">
  <input
    type="text"
    placeholder="Search movies, videos..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    className="search-btn"
    onClick={handleSearch}
  >
    <i className="fa-solid fa-magnifying-glass"></i>
  </button>
</div>

      <div className="auth">
        {user ? (
          <div
            className="profile"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <span>{user.username}</span>
            <span> ▾</span>

            {openProfile && (
              <div className="profile-menu">
                <p onClick={() => navigate("/profile")}>
                  Profile
                </p>

                <p onClick={() => navigate("/upload")}>
                  Upload
                </p>

                <p onClick= {()=> navigate("/settings")}>
                  Settings
                </p>

                <p
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              className="login"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="signup"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;