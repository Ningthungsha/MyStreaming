import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

function Profile() {

  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const [creator, setCreator] = useState(null);

  useEffect(() => {

    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`https://video-s-p.warnode.cloud/api/videos/creator/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.log(error);
      });
      fetch(`http://localhost:5000/api/auth/user/${user._id}`)
  .then((res) => res.json())
  .then((data) => {
    setCreator(data);
  })
  .catch((err) => console.log(err));

  }, [user, navigate]);

  const totalViews = videos.reduce(
    (sum, video) => sum + (video.views || 0),
    0
  );

  const totalLikes = videos.reduce(
    (sum, video) => sum + (video.likes || 0),
    0
  );

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="creator-header">

          <div className="creator-profile">

            <h1>Creator Studio</h1>

            <p>
              Welcome back, {user?.username}
            </p>

          </div>

          <button
            className="upload-btn"
            onClick={() => navigate("/upload")}
          >
            + Upload Video
          </button>

        </div>

        <div className="creator-stats">

          <div className="stat-card">
            <h2>{videos.length}</h2>
            <p>Videos</p>
          </div>

          <div className="stat-card">
            <h2>{totalViews}</h2>
            <p>Total Views</p>
          </div>

          <div className="stat-card">
            <h2>{totalLikes}</h2>
            <p>Total Likes</p>
          </div>

          <div className="stat-card">
  <h2>{creator?.subscribers?.length || 0}</h2>
  <p>Subscribers</p>
</div>

        </div>

        <h2 className="content-title">
          Your Content
        </h2>

        <div className="creator-videos">

          {videos.length === 0 ? (

            <p>No videos uploaded yet.</p>

          ) : (

            videos.map((video) => (

              <div
                className="creator-card"
                key={video._id}
              >

                <img
                  src={`https://video-s-p.warnode.cloud/uploads/${video.thumbnail}`}
                  alt={video.title}
                />

                <div className="video-details">

                  <h3>{video.title}</h3>

                  <p>{video.category}</p>

                  <div className="video-stats">

                    <span>👁 {video.views || 0}</span>

                    <span>❤️ {video.likes || 0}</span>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </>
  );
}

export default Profile;