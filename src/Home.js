import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./components/util/data";
import Loader from './components/Reusable/Loader';
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
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
    console.log(data);
  };
  loader=()=> {
    const { data, country } = this.state;
    if (this.state.data !== '') {
      return (
        <>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </>
      );
    } else {
      return <Loader />;
    }
  }
  render() {
    return <div className={styles.container}>{this.loader()}</div>;
  }
}
