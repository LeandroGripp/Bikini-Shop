import React from "react";
import "./Footer.css";

export function Footer(props) {
  return (
    <div className="back-footer">

        <div className="row">
          <div className="col-lg">
            <p className="m-0">
              &copy;{new Date().getFullYear()} Consultoria e Projetos Elétricos
              Júnior. Todos os direitos reservados.
            </p>
          </div>
          <div className="social">
            <a
              href="https://www.instagram.com/cpe.jr/"
              rel="noopener noreferrer"
              target="_blank"
            > 
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/cpejr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/LeandroGripp/Bikini-Shop"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
