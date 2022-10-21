import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcResult: "",
    };
  }

  static getDerivedStateFromProps(props) {
    return { rate: props.currencyRate };
  }

  calcRate = (e) => {
    e.preventDefault();
    console.log("Work");
    let countCurrency = e.target.elements["count-currency"].value;
    let typeCurrency = e.target.elements["type-currency"].value;
    this.setState({
      calcResult: (
        countCurrency / this.props.currencyRate[typeCurrency]
      ).toFixed(2),
    });
  };

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Выбор валюты для обмена</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency" id="">
                {Object.keys(this.props.currencyRate).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <input className="input-pad" value="Рассчитать" type="submit" />
            </form>
          </div>

          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>
                {this.props.baseCurrency}: {this.state.calcResult}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
