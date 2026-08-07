import "../styles/Support.css";

function HelpCenter() {
  return (
    <div className="support-page">

      <section className="support-hero">
        <h1>How can we help you?</h1>
        <p>
          Find answers, solve problems, and get support for your RoelStream account.
        </p>

        <input 
          type="text" 
          placeholder="Search for help..."
        />
      </section>


      <section className="help-cards">

        <div className="help-card">
          <h3>Account & Login</h3>
          <p>
            Manage your account, password, and login issues.
          </p>
        </div>

        <div className="help-card">
          <h3>Video & Streaming</h3>
          <p>
            Learn about playback, uploads, and streaming problems.
          </p>
        </div>

        <div className="help-card">
          <h3>Payments & Plans</h3>
          <p>
            Get help with subscriptions and billing.
          </p>
        </div>

      </section>

    </div>
  );
}

export default HelpCenter;