import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../styles/VideoPlayer.css";

function VideoPlayer() {

  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [likes, setLiked] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:5000/api/videos/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setVideo(data);
        setLiked(data.likes || 0);
        fetch(`http://localhost:5000/api/videos/${id}/view`, {
  method: "POST"
})
.then((res)=>res.json())
.then((data)=>{
  console.log("Views:", data.views);
})
.catch((err)=>console.log(err));


        const user = JSON.parse(localStorage.getItem("user"));

if (user) {

  fetch(`http://localhost:5000/api/videos/watch/${id}`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      userId: user._id
    })

  })
  .then((res) => res.json())
  .then((data) => {
    console.log("Watch history saved", data);
  })
  .catch((err) => {
    console.log(err);
  });

}

      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:5000/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setComments(data);

      })
      .catch((err) => console.log(err));

  }, [id]);

  const handleLike = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {

      const res = await fetch(
        `http://localhost:5000/api/videos/${id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user._id
          })
        }
      );

      const data = await res.json();

      setLiked(data.likes);

    } catch (error) {

      console.log(error);

    }

  };

  const handleSubscribe = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {

      const res = await fetch(
        "http://localhost:5000/api/auth/subscribe",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            creatorId: video.creator._id,
            userId: user._id
          })

        }
      );

      const data = await res.json();

      setSubscribed(data.subscribed);

    } catch (error) {

      console.log(error);

    }

  };

  const handleComment = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!comment.trim()) {
      return;
    }

    try {

      const res = await fetch(
        "http://localhost:5000/api/comments",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            videoId: id,
            userId: user._id,
            username: user.username,
            text: comment
          })

        }
      );

      const data = await res.json();

      setComments([
        data.comment,
        ...comments
      ]);

      setComment("");

    } catch (error) {

      console.log(error);

    }

  };
  if (!video) {

    return (
      <>
        <Navbar />

        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Loading...
        </h2>

      </>
    );

  }

  return (

    <>

      <Navbar />

      <div className="video-page">

        <div className="player-container">

          <video
            controls
            className="video-player"
          >

            <source
              src={`http://localhost:5000/uploads/${video.videoUrl}`}
              type="video/mp4"
            />

            Your browser does not support video playback.

          </video>

        </div>

        <div className="player-info">

          <h1>{video.title}</h1>

          <p className="player-creator">
            Created by {video.creator?.username}
          </p>

          <p className="player-stats">
            Category: {video.category}
          </p>

          <div className="player-actions">

            <button onClick={handleLike}>
              {likes} Likes
            </button>

            <button
              onClick={() =>
                navigator.share({
                  title: video.title,
                  url: window.location.href
                })
              }
            >
              Share
            </button>

            <button onClick={handleSubscribe}>
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>

          </div>

          <p className="player-description">
            {video.description}
          </p>

          <div className="player-comments">

            <h2>Comments</h2>

            <div className="comment-input">

              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button onClick={handleComment}>
                Comment
              </button>

            </div>

            {comments.map((item) => (

              <div className="comment-card" key={item._id}>

                <h4>{item.username}</h4>

                <p>{item.text}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </>

  );

}

export default VideoPlayer;