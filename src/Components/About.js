import React from "react";

var About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var country = data.address.country;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = "files/resume/" + data.resumedownload;
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
                <a
                  href={resumeDownload}
                  className="button"
                  rel="noreferrer"
                  target="_blank"
                >
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
