import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Footer = () => {
  const styles = {};
  return (
    <footer className="footer">
      {/* contacts */}
      <div className="contact-container">
        <div className="contact-phone">
          <div className="icon">
            <PhoneIphoneIcon style={{ fontSize: 40, color: "aliceblue" }} />
          </div>
          <div className="text">
            <span>Me contacter</span>
            <p>+226 06 58 32 03</p>
          </div>
        </div>
        {/* send email */}
        <div className="contact-email">
          <div className="icon">
            <SendIcon style={{ fontSize: 40, color: "aliceblue" }} />
          </div>
          <div className="text">
            <span>Discuter avec moi</span>
            <p>kerb418@gmail.com</p>
          </div>
        </div>
        {/* github */}
        <div className="contact-github">
          <div className="icon">
            <GitHubIcon style={{ fontSize: 40, color: "aliceblue" }} />
          </div>
          <div className="text">
            <span>Me retrouver sur github</span>
          </div>
        </div>
      </div>
      {/* rights */}
      <div className="rights">
        <div className="right-items">
          <p>©2022-23 DevelopThis. All rights reserved.</p>
        </div>
        <div className="dark-mode">
          <LightModeIcon style={{ margin: "0 10px", cursor: "pointer" }} />
          <DarkModeIcon style={{ margin: "0 10px", cursor: "pointer" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
