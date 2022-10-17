import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Site">
        <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
            <div className="container">
              <h1 className="site-title">Raect Lite Level</h1>
            </div>
          </div>
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <a href="#">Главная</a>
                  </li>
                  <li>
                    <a href="#">Пункты обмена</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className="container">
          <main>
            <h3> Курс валют на 30 ноября</h3>
            <div className="flex-container">
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
            </div>

            <h3> Калькулятор обмена</h3>
            <div className="block">
              <div>Я хочу</div>
              <div>
                <label>
                  <input type="radio" name="radio" defaultValue="0" />
                  купить
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="radio" defaultValue="1" />
                  продать
                </label>
              </div>
              <div>
                <input type="number" defaultValue="150" />
                <select name="" id="">
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>
            </div>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации
              технического характера. <br />В частности, для персонифицированной
              работы сайта мы обрабатываем IP-адрес региона вашего
              местоположения. &nbsp;
              <a className="btn btn-primary btn-sm">ОК</a>
            </div>
          </div>
        </div>

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
      </div>
    );
  }
}

export default App;
