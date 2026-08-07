
import "../styles/Footer.css";
function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-logo">

          <h2>
            <i className="fa-solid fa-play"></i> RoelStream
          </h2>

          <p>
            Watch, Upload and Stream your favorite videos anytime, anywhere.
          </p>

        </div>



        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/trending">Trending</a>
          <a href="/upload">Upload</a>

        </div>



        <div className="footer-links">

          <h3>Support</h3>

          <a href="/helpCenter">Help Center</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/contact">Contact Us</a>

        </div>



        <div className="footer-social">

          <h3>About Developer</h3>

          <a href="https://www.facebook.com/share/1BuKHBb4Af/">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/onewithroel?igsh=MW5tbGtjMTQ2eGR6cw==">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://github.com/Ningthungsha">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.youtube.com/@NingthungshaRoel-vl5yz">
            <i className="fa-brands fa-youtube"></i>
          </a>

        </div>


      </div>


      <hr />


      <p className="copyright">
        © 2026 RoelStream. All Rights Reserved.
      </p>


    </footer>
  );
}

export default Footer;