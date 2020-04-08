import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./components/util/data";
import styles from "./app.module.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }
  async componentDidMount() {
    const data = await fetchData();
    //console.log(data);
    //const gotData = data;
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    //console.log(country);
    const data = await fetchData(country);
    this.setState({ data, country: country });
    console.log(data);
  };

  render() {
    const { data, country } = this.state;
    console.log(data, country);
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
