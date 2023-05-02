import logo from "../img/logo.png";

const Header = () => (
  <div>
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="LG Santiago Logo" className="logo"></img>
      </div>

      <div className="header-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">LG Santiago</span>
          <span className="heading-primary-sub">
            Software Engineer | Developer Advocate
          </span>
        </h1>
        <a
          href="https://www.youtube.com/@lgsantiago"
          className="btn btn-white btn-animated"
        >
          watch my videos
        </a>
      </div>
    </header>
  </div>
);

export default Header;
