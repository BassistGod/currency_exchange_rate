import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/exchange">Пункты обмена</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
