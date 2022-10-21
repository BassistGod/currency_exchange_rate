import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Rate from "./components/Rate";
import Exchange from "./components/Exchange";
import Contacts from "./components/Contacts";
import Notfoundpage from "./components/Notfoundpage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Site">
        <Header />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Rate />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Notfoundpage />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
