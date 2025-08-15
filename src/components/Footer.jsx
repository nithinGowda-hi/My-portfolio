import React from 'react';
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
  <p>© {new Date().getFullYear()} Nithin Gowda | MERN Stack Fresher</p>
  <p>
    <a href="https://linkedin.com/in/nithin-gowda-8bb7a52bb" target="_blank"><i className="bi bi-linkedin"></i></a>
    <a href="https://github.com/nithinGowda-hi" target="_blank"><i className="bi bi-github"></i></a>
    <a href="mailto:gnithin905@gmail.com"><i className="bi bi-envelope-fill"></i></a>
  </p>
</footer>

  );
}

export default Footer;
