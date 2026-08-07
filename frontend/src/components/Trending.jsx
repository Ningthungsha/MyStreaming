import "../styles/Trending.css";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";

function Trending() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/videos")
    .then((res) => res.json())
    .then((data) => {

      const trendingVideos = data
        .filter((video) => video.views + video.likes >=20)
        .sort(
          (a, b) =>
            (b.views + b.likes) - (a.views + a.likes)
        )
        .slice(0, 10);

      setVideos(trendingVideos);

    })
    .catch((err) => console.log(err));

}, []);

  return (
    <section id="trending" className="trending">

      <div className="section-title">
        <h2>Trending Now</h2>
        <a href="#">View All</a>
      </div>

      <div className="video-container">

        {videos.map((video) => (
          <VideoCard
            key={video._id}
            id={video._id}
            image={video.thumbnail}
            title={video.title}
            info={video.category}
          />
        ))}

      </div>

    </section>
  );
}

export default Trending;