import "../styles/Recommended.css";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function Recommended() {

  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState(
    "Popular picks from RoelStream"
  );


  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    const url = user
      ? `https://video-s-p.warnode.cloud/api/videos/recommended/${user._id}`
      : "https://video-s-p.warnode.cloud/api/videos/recommended";


    fetch(url)

      .then((res) => res.json())

      .then((data) => {

        setVideos(data.videos || []);

        if (data.interests && data.interests.length > 0) {

          setMessage(
            `Because you enjoy ${data.interests.join(", ")}`
          );

        } else {

          setMessage(
            "Popular picks from RoelStream"
          );

        }


      })

      .catch((err) => {

        console.log(err);

      });


  }, []);



  return (

    <section className="recommended">


      <div className="section-title">

        <h2>
          Recommended For You
        </h2>

      </div>


      <p className="recommend-text">
        {message}
      </p>


      <div className="recommended-container">


        {videos.length > 0 ? (

          videos.map((video) => (

            <VideoCard

              key={video._id}

              id={video._id}

              image={video.thumbnail}

              title={video.title}

              info={`${video.category} • ${video.likes} likes`}

            />

          ))

        ) : (

          <p className="no-recommend">
            No recommendations available yet.
          </p>

        )}


      </div>


    </section>

  );

}

export default Recommended;