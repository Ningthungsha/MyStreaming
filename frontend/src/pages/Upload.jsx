import "../styles/Upload.css";
import { useNavigate } from "react-router-dom";

function Upload() {

  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const formData = new FormData();

    formData.append("title", e.target[0].value);
    formData.append("description", e.target[1].value);
    formData.append("category", e.target[2].value);

    if (e.target[3].files[0]) {
      formData.append("thumbnail", e.target[3].files[0]);
    }

    if (e.target[4].files[0]) {
      formData.append("video", e.target[4].files[0]);
    }

    formData.append("creator", user._id);

    try {

      const res = await fetch("https://video-s-p.warnode.cloud/api/videos/upload", {

        method: "POST",
        body: formData,

      });

      const data = await res.json();

      if (res.ok) {

        alert("Video uploaded successfully!");
        navigate("/profile");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);
      alert("Server Error");

    }

  }

  return (

    <div className="upload-page">

      <div className="upload-container">

        <h1>Upload Video</h1>

        <p>Share your content with the RoelStream community.</p>

        <form onSubmit={handleSubmit}>

          <label>Video Title</label>

          <input
            type="text"
            placeholder="Enter video title"
            required
          />

          <label>Description</label>

          <textarea
            placeholder="Write a short description..."
            required
          ></textarea>

          <label>Category</label>

          <select required>

            <option value="">Select Category</option>

            <option>Movies</option>
            <option>TV Shows</option>
            <option>Gaming</option>
            <option>Music</option>
            <option>Education</option>
            <option>Sports</option>
            <option>Kids</option>

          </select>

          <label>Thumbnail</label>

          <input
            type="file"
            accept="image/*"
            required
          />

          <label>Video File</label>

          <input
            type="file"
            accept="video/*"
            required
          />

          <button type="submit">
            Publish Video
          </button>

        </form>

      </div>

    </div>

  );

}

export default Upload;