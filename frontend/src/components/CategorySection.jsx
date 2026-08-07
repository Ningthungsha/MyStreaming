import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import "../styles/Global.css";

function CategorySection({ title, category }) {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://video-s-p.warnode.cloud/api/videos/category/${encodeURIComponent(category)}`
    )
      .then((res) => {
        console.log("Status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Category:", category);
        console.log("Videos:", data);
        setVideos(data);
      })
      .catch((err) => console.log("Error:", err));
  }, [category]);

  if (videos.length === 0) return null;

  console.log("Rendering", category, videos.length);

  return (
    <section className="category-section">
      <div className="section-title">
        <h2>{title}</h2>

        <button
          className="view-all-btn"
          onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
        >
          View All →
        </button>
      </div>

      <div className="video-grid">
        {videos.slice(0, 4).map((video) => (
          <VideoCard
            key={video._id}
            id={video._id}
            image={video.thumbnail}
            title={video.title}
            info={`${video.category} • ${video.likes} likes •${video.views} views`}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;