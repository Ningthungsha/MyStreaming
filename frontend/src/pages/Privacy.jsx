import "../styles/Support.css";

function Privacy() {
  return (
    <div className="support-page">

      <section className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>
          At RoelStream, we respect your privacy and are committed
          to protecting your personal information.
        </p>
      </section>


      <section className="legal-content">

        <div className="legal-card">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect information such as your account details,
            profile information, and activity on our platform to
            improve your streaming experience.
          </p>
        </div>


        <div className="legal-card">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information helps us provide better services,
            personalize recommendations, maintain security, and
            improve platform performance.
          </p>
        </div>


        <div className="legal-card">
          <h2>3. Data Protection</h2>
          <p>
            RoelStream takes reasonable steps to keep your personal
            data secure and prevent unauthorized access.
          </p>
        </div>


        <div className="legal-card">
          <h2>4. Your Privacy Choices</h2>
          <p>
            You can manage your account settings and control how
            your information is used on RoelStream.
          </p>
        </div>


      </section>

    </div>
  );
}

export default Privacy;