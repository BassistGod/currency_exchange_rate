import React, { useEffect, useState } from "react";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
  }
  getRates = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "tm7ZhBMhMmtXrt8G7ppKXaBJHYN4vBUc");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    let a = 0;
    a++;
    console.log(a);

    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=&base=EUR",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));

    return result;
  };
}

export default Fetch;
