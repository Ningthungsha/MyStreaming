import "../styles/Categories.css";
import videos from "../data/videos";
import { useNavigate } from "react-router-dom";
function Categories() {
  const musicVideos = videos.filter(
  (video) => video.category === "Music"
);

const movieVideos = videos.filter(
  (video) => video.category === "Movies"
);

const sportsVideos = videos.filter(
  (video) => video.category === "Sports"
);
  const navigate =useNavigate();

    const categories = [
    { icon: "fa-film", name: "Movies" },
    { icon: "fa-tv", name: "TV Shows" },
    { icon: "fa-music", name: "Music" },
    { icon: "fa-gamepad", name: "Gaming" },
    { icon: "fa-graduation-cap", name: "Education" },
    { icon: "fa-futbol", name: "Sports" },
    { icon: "fa-newspaper", name: "News" },
    { icon: "fa-child", name: "Kids" }
  ];

  return (
    <section id="categories" className="categories">

      <div className="section-title">
        <h2>Categories</h2>
      </div>

      <div className="category-container">

        {categories.map((category, index) => (
        
          <div className="category-card" key={index} onClick={() => navigate(`/category/${encodeURIComponent(category.name)}`)}>

            <i className={`fa-solid ${category.icon}`}></i>

            <h3>{category.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;