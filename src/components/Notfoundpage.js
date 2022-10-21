import React from "react";
import "./Notfoundpage.css";
import { Link } from "react-router-dom";

class Notfoundpage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>
          Такая страница не найдена. 404. <Link to="/">home</Link>
        </h3>
        <div></div>
      </div>
    );
  }
}

export default Notfoundpage;
