import "./Links.scss";
import youtube from "../img/youtube.svg";
import medium from "../img/medium.svg";
import linkedin from "../img/linkedin.svg";
import connect from "../img/connect.svg";

const Links = () => (
  <section className="section-links">
    <div class="main-icon">
      <h2>See my links</h2>
      <img src={connect} width="100rem" height="100rem" alt="Main Icon" />

      <div class="other-icons">
        <a href="https://medium.com/@luisg_santiago">
          <img src={medium} alt="Medium" />
        </a>
        <a href="https://www.youtube.com/@lgsantiago">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com/in/luisg-santiago/">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  </section>
);

export default Links;
