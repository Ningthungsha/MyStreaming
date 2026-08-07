import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function CategoryPage() {
 const { category } = useParams();
const decodedCategory = decodeURIComponent(category);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:5000/api/videos/category/${encodeURIComponent(decodedCategory)}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Category:", decodedCategory);
      console.log("Videos:", data);
      setVideos(data);
    })
    .catch((err) => console.log(err));
}, [decodedCategory]);
    

  return (
    <>
      <Navbar />

      <main className="search-page">

        <h1>{decodedCategory}</h1>

        <div className="video-grid">

          {videos.length > 0 ? (
            videos.map((video) => (
              <VideoCard
                   key={video._id}
                    id={video._id}
                    image={video.thumbnail}
                   title={video.title}
                    info={`${video.category} •  ${video.likes} •${video.views} views`}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No videos in this category yet.</h3>
            </div>
          )}

        </div>

      </main>
    </>
  );
}

export default CategoryPage;