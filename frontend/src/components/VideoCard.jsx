import "../styles/VideoCard.css";
import { useNavigate } from "react-router-dom";

function VideoCard({ id, title, info, image }) {

  const navigate = useNavigate();

  return (
    <div
      className="video-card"
      onClick={() => navigate(`/watch/${id}`)}
    >

      <div className="thumbnail">

        <img
          src={'https://video-s-p.warnode.cloud/uploads/${image}'}
          alt={image}
        />

        <span className="play">
          ▶
        </span>

      </div>


      <div className="video-info">

        <h3>{title}</h3>

        <p>{info}</p>

      </div>

    </div>
  );
}

export default VideoCard;