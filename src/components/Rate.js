import React from "react";
import "./Rate.css";

import Calculator from "./Calculator";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
      baseCurrency: "USD",
      currency: ["RUB", "EUR", "BYN", "UAH", "CNY", "GBP"],
    };
  }
  componentDidMount() {
    this.getRate();
  }

  getRate = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "smc03eRoQkpQws8zjU1PUrpUcpgqAw8i");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=&base=${this.state.baseCurrency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ date: result.date });
        let currencyResult = {};
        this.state.currency.map(
          (currency) => (currencyResult[currency] = result.rates[currency])
        );
        this.setState({ currencyRate: currencyResult });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((currency) => (
            <div className="block flex-item" key={currency}>
              <div className="currency-name">{currency}</div>
              <div className="currency-in">
                {this.state.currencyRate[currency].toFixed(2)}
              </div>
              <p>* Можно купить за 1 {this.state.baseCurrency}</p>
            </div>
          ))}
        </div>
        <Calculator
          currencyRate={this.state.currencyRate}
          baseCurrency={this.state.baseCurrency}
        />
      </div>
    );
  }
}

export default Rate;
