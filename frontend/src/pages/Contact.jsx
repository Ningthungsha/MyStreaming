import "../styles/Support.css";

function Contact() {
  return (
    <div className="support-page">

      <section className="legal-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or need assistance?
          Our RoelStream support team is here to help.
        </p>
      </section>


      <section className="contact-container">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            We would love to hear from you. Send us your
            questions and we will respond as soon as possible.
          </p>

          <p>📧 support@roelstream.com</p>
          <p>📍 RoelStream Headquarters</p>

        </div>


        <form className="contact-form">

          <input 
            type="text"
            placeholder="Your Name"
          />

          <input 
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;