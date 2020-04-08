import React, { Component } from "react";
import {
  fetchIndiaData,
  fetchStateDistrictData,
  fetchStateList,
  fetchStateData,
} from "../util/data";
import CountUp from "react-countup";
import StatesPicker from "./StatesPicker";
import MainCharts from './MainCharts';
import StateCharts from './StateCharts';
import styles from "./statespicker.module.css";


export default class States extends Component {
  constructor() {
    super();
    this.state = {
      _activeIndia: 0,
      _confirmedIndia: 0,
      _deathsIndia: 0,
      _recoveredIndia:0,
      _updatedTimePeriodIndia: "",
      state: null,
      stateData: null,
      stateTotalCases: 0,
      districtsData: [],
    };
  }

  async componentDidMount() {
    const {
      data: { statewise },
    } = await fetchIndiaData();
    console.log(statewise);
    const x = statewise.find((state) => {return state.state === "Tamil Nadu"})
    console.log(x)
    const { active, confirmed, deaths, recovered ,lastupdatedtime } = statewise.shift();
    const updatedTimePeriod = new Date(lastupdatedtime).toDateString();
    this.setState({ 
      _activeIndia: active, 
      _confirmedIndia: confirmed, 
      _deathsIndia: deaths,
      _recoveredIndia: recovered, 
      _updatedTimePeriodIndia: updatedTimePeriod });
  }

  handleStateChange = async (state) => {
    let stateTotalCases = 0;
    const data = await fetchStateData(state);
    console.log(stateTotalCases);
    this.setState({stateData: data});
  };

  render() {
    const active = this.state._activeIndia,
          confirmed = this.state._confirmedIndia,
          deaths = this.state._deathsIndia,
          recovered = this.state._recoveredIndia,
          state = this.state.state,
          stateData = this.state.stateData;
    
    const data = {active, confirmed, deaths, recovered};

    const endValue = this.state.state ? this.state.stateTotalCases : null;
    return (
      <div className={styles.container}>
        <MainCharts data = {data} />
        <StatesPicker handleStateChange={this.handleStateChange} />
        <StateCharts stateData={stateData} />
      </div>
    );
  }
}
