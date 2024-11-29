import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <span>Made by</span>
      <span
        onClick={() => {
          window.open("https://github.com/krishna221638");
        }}
      >
        Krishna
      </span>
    </footer>
  );
};

export default Footer;
