import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import "../styles/Search.css";

function Search() {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const searchVideos = async () => {
      try {
        const response = await fetch(
          `https://video-s-p.warnode.cloud/api/videos/search?q=${query}`
        );

        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Search Error:", error);
      }
    };

    if (query) {
      searchVideos();
    }
  }, [query]);

  return (
    <>
      <Navbar />

      <main className="search-page">

        <h1>Search Results</h1>

        <h2>
          Showing results for "{query}"
        </h2>

        <div className="video-grid">

          {videos.length > 0 ? (

            videos.map((video) => (
              <VideoCard
                key={video._id}
                image={`https://video-s-p.warnode.cloud/uploads/${video.thumbnail}`}
                title={video.title}
                info={`${video.category} • ${video.likes}`}
              />
            ))

          ) : (

            <div className="no-results">

              <i className="fa-solid fa-video"></i>

              <h3>No results found</h3>

              <p>
                We couldn't find any videos matching "{query}".
              </p>

            </div>

          )}

        </div>

      </main>
    </>
  );
}

export default Search;