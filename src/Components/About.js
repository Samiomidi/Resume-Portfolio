import React from "react";

const About = ({ data }) => {
  if (data) {
    const name = data.name;
    const profilepic = "images/" + data.image;
    const bio = data.bio;
    const street = data.address.street;
    const city = data.address.city;
    const country = data.address.country;
    const zip = data.address.zip;
    const phone = data.phone;
    const email = data.email;
    const resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {country}, {zip}
                </span>
                <br />
                <a href={`tel:${phone}`}>{phone}</a>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
