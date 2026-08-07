import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleExploreNow = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
  } else {
    navigate("/?scroll=categories");
  }
};
  
  const handleBecomeCreator = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    navigate("/signup");
  } else {
    navigate("/upload");
  }
};

  return (
    <section className="hero">
      <div className="overlay">
        <h1>
          Stream Your World
          <br />
          <span>Anytime Anywhere.</span>
          <br />
          Watch Together.
        </h1>

        <p className="desc">
          Discover, watch, and share videos on a platform designed for the
          next generation of entertainment.
        </p>

        <div className="hero-buttons">
          <button className="watch" onClick={handleExploreNow}>
            <i className="fa-solid fa-compass"></i>
            Explore Now
          </button>

          <button
            className="creator"
            onClick={handleBecomeCreator}
          >
            Become Creator
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;