import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const icons = {
  facebookIcon: <FaFacebook />,
  linkedinIcon: <FaLinkedin />,
  whatsAppIcon: <FaWhatsapp />,
  instagramIcon: <FaInstagram />,
  githubIcon: <FaGithub />,
};
const Header = ({ data }) => {
  if (data) {
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;

    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} style={network.style}>
            {icons[network.icon]}
            {/* <i className={network.className}></i> */}
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Neucha&weight=700&size=40&duration=2000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=1000&height=100&lines=I'm+Sami+Omidi.;Welcome+to+my+personal+website.;Frontend+Developer.;ReactJS%2C+NextJS%2C+Typescript+Developer.;Freelancer"
              alt="I'm Sami Omidi"
            />
          </a>
          <h3>
            Based in {city}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
