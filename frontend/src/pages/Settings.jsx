import Navbar from "../components/Navbar";
import "../styles/Settings.css";
import {useNavigate} from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="settings-page">

        <h1>Settings</h1>

        <div className="settings-card">

          <h2>Account</h2>
        <button onClick={() => navigate("/profile")}>
  <i className="fa-solid fa-user-pen"></i> Edit Profile
</button>

<button onClick={() => alert("Coming soon!")}>
  <i className="fa-solid fa-key"></i> Change Password
</button>

<button onClick={() => navigate("/profile")}>
  <i className="fa-solid fa-camera"></i> Change Profile Picture
</button>


        </div>

        <div className="settings-card">

          <h2>Preferences</h2>

          <button onClick={() => alert("Coming soon!")}>
  <i className="fa-solid fa-bell"></i> Notifications
</button>

<button onClick={() => alert("Coming soon!")}>
  <i className="fa-solid fa-shield-halved"></i> Privacy
</button>

        </div>

      </div>

    </>
  );
}

export default Settings;