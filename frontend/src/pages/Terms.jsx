import "../styles/Support.css";

function Terms() {
  return (
    <div className="support-page">

      <section className="legal-hero">
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms carefully before using RoelStream.
          By accessing our platform, you agree to follow these guidelines.
        </p>
      </section>


      <section className="legal-content">

        <div className="legal-card">
          <h2>1. Use of Service</h2>
          <p>
            RoelStream provides a platform for users to watch, upload,
            and explore video content. Users must use the service
            responsibly and follow our community guidelines.
          </p>
        </div>


        <div className="legal-card">
          <h2>2. User Accounts</h2>
          <p>
            Users are responsible for keeping their account information
            secure and maintaining the confidentiality of their login details.
          </p>
        </div>


        <div className="legal-card">
          <h2>3. Content Guidelines</h2>
          <p>
            Users must not upload harmful, illegal, or copyrighted content
            without proper permission.
          </p>
        </div>


        <div className="legal-card">
          <h2>4. Changes to Terms</h2>
          <p>
            RoelStream may update these terms from time to time to improve
            user experience and platform security.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Terms;