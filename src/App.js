import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./components/util/data";
import coronaimage from './images/image.png';
import styles from "./app.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    const gotData = data;
    this.setState({ data: gotData });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
    console.log(data);
  };

  render() {
    const {fetchedData, country} = this.state;
    console.log(fetchedData)
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaimage} alt="COVID" />
        <Cards data={fetchData} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={fetchedData} country={country} />
      </div>
    );
  }
}
