import React from "react";

function Footer() {
  return (
    <div className="footerTop-div">
      <div className="footer-main">
        <div className="footer-left">
          <h1>Chn</h1>
          <p>
            This is a blog site made using React.js .Since currently i learning
             React.js so more horrible  projects will appeared in front
            of you and i decided to log my journey of my projects and will
            be coming in form of blogs (Maybe)
          </p>
        </div>
        <div className="footer-right">
          <h2>About me</h2>
          <p>
            Hi !! My name is Ritik Chauhan and currently i am pursuing B.Tech in
            Information Technology (any typical guy) . I am currently in 2nd
            year of college and just realized that i don't know what i am gonna
            do , I don't code so often ,I suck at CC (Competitve Coding) so
            decide to give development a try and this blog is a terrible example
            of that so if you have a alot of free time which you have as you are
            reading this so don't forget to check this blog regularly fo
            interesting posts (FYI : I am not saying that i am gonna upload
            often )
          </p>
          <h2>Social</h2>
          <div className="social-icons">
            <a href="https://open.spotify.com/playlist/5fJyK1ggXD8VX1tMbe1Ucl">
              <i class="fa fa-spotify fa-2x"></i>
            </a>
            <a href="/not-available">
              <i class="fa fa-twitch fa-2x"></i>
            </a>
            <a href="/not-available">
              <i class="fa fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCsWVLO4KqqDvPJie45XRxFA">
              <i class="fa fa-youtube fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/ritik-chauhan-7a5a60195/">
              <i class="fa fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
