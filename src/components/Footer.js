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
                    <a href="My site">2022 &copy; My site</a>
                  </h1>
                  <p> All Rights Reserved</p>
                </div>
              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/sitemap" tooltip="Карта сайта">
                        Карта сайта
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sitemaps.xml"
                        target="_blank"
                        tooltip="Google Sitemap"
                      >
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
                      <a href="/contact/" tooltip="Контакты">
                        Контакты
                      </a>
                    </li>
                    <li>
                      <a href="/d">Гарантиие</a>
                    </li>
                    <li>
                      <a href="/s">О сервисе</a>
                    </li>
                    <li>
                      <a href="/o">Условия возврата</a>
                    </li>
                    <li>
                      <a href="/p">Соглашение об использовании сервиса</a>
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
                <ul>
                  {/* <img
                    src=""
                    data-toggle="tooltip"
                    data-placement="top"
                    data-origin-title="www.webmoney.ru"
                    alt=""
                  /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;