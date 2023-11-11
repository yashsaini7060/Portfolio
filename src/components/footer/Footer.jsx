import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yash</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/yash__saini_/" className="footer__social-link" target="_blank" rel="noopener noreferrer" >
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/yash_1805" className="footer__social-link" target="_blank" rel="noopener noreferrer" >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Yash. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
