import React from "react";
import ProfilePhoto from '../../img/profile_photo.png';
import '../../scss/profile/profile.scss';

function ProfileComponent() {

 const showResume = ()=>{
     debugger;
     window.open(
       "file:///Users/rosharma/Personal/Rohit%20Website/rohit-website/src/components/profile/RohitSharma.pdf", "_blank"
     );
     //window.open(__dirname+'RohitSharma.pdf' , "_blank");
 }

  return (
    <div className="profile-component">
      <div className="profile-photo">
        <img src={ProfilePhoto} className="profile-photo-img" />
      </div>
      <div className="profile-name">
        <h2>Rohit Sharma</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="profile-social-links">
        <a
          className="social-links"
          href="http://www.facebook.com/rohitsharma308"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          className="social-links"
          href="https://www.linkedin.com/in/rohit-sharma-86161051/"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="social-links" href="https://twitter.com/rohitcsegec">
          <i className="fa fa-twitter"></i>
        </a>
        <a
          className="social-links"
          href="https://www.instagram.com/rohitsharma308/"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          className="social-links"
          href="https://www.youtube.com/channel/UCvSYuZZWSOAQA_9XiMtGr2A?view_as=subscriber"
        >
          <i className="fa fa-youtube"></i>
        </a>
        <a className="social-links" href=" https://github.com/creazyfrog" title="GitHub">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className="profile-download-button">
        <button className="download-button">
          <a onClick={showResume}>
            <i className="fa fa-download"></i> Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProfileComponent;
