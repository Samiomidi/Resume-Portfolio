import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Typewriter from "typewriter-effect/dist/core";
const icons = {
  facebookIcon: <FaFacebook />,
  linkedinIcon: <FaLinkedin />,
  whatsAppIcon: <FaWhatsapp />,
  instagramIcon: <FaInstagram />,
  githubIcon: <FaGithub />,
};
const Header = ({ data }) => {
  var typewriter = document.getElementById("typewriter");

  var typing = new Typewriter(typewriter, {
    loop: true,
    delay: 75,
  });

  typing
    .pauseFor(1000)
    .typeString("<h1>I'm Sami Omidi.</h1>")
    .pauseFor(700)
    .typeString("<h3>I'm a ReactJS, NextJS also Typescript Developer.</h3>")
    .typeString(
      '<h5>Welcome to my <span style="color: #27ae60;">personal</span> website!</h5>'
    )
    .pauseFor(1000)
    .start();
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
          <span className="responsive-headline" id="typewriter"></span>

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
