import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <div className="module-body">
                  <h1 className="footer-title">
                    <a>2022 &copy; My site</a>
                  </h1>
                  <p> All Rights Reserved</p>
                </div>
              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li>
                      <a tooltip="Карта сайта">Карта сайта</a>
                    </li>
                    <li>
                      <a target="_blank" tooltip="Google Sitemap">
                        Google Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li>
                      <a>Контакты</a>
                    </li>
                    <li>
                      <a>Гарантии</a>
                    </li>
                    <li>
                      <a>О сервисе</a>
                    </li>
                    <li>
                      <a>Условия возврата</a>
                    </li>
                    <li>
                      <a>Соглашение об использовании сервиса</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link"></ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
