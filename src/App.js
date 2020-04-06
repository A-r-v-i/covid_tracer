import React, { Component } from 'react'
import { fetchData } from './components/util/data';

const country = 'India';

export default class App extends Component {

  async componentDidMount() {
    const data = await fetchData();
    const countryStatus = "data.data.countryDetail"+country; 
    console.log(data.data.countryDetail);
  }

  render() {
    return (
      <div>
        <h1>Its corona tym.....</h1>
      </div>
    )
  }
}
