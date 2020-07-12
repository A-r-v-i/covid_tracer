import React, { Component } from "react";
import {
  fetchIndiaData,
  fetchStateDistrictData,
  fetchStateData,
} from "../util/data";
import StatesPicker from "./StatesPicker";
import MainCharts from './MainCharts';
import StateCharts from './StateCharts';
import styles from "./statespicker.module.css";
import DistrictData from "./DistrictData";


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
      districtData: [],
      showDistrictData: false
    };
  }

  async componentDidMount() {
    const {
      data: { statewise },
    } = await fetchIndiaData();
    console.log(statewise);
    //const x = statewise.find((state) => {return state.state === "Tamil Nadu"})
    //console.log(x)
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
    const data = await fetchStateData(state);
    const districtData = await fetchStateDistrictData(state);
    //console.log(districtData)
    
    this.setState({stateData: data, districtData: districtData, showDistrictData: true});
  };

  render() {
    const active = this.state._activeIndia,
          confirmed = this.state._confirmedIndia,
          deaths = this.state._deathsIndia,
          recovered = this.state._recoveredIndia,
          stateData = this.state.stateData,
          districtData = this.state.districtData;
    const data = {active, confirmed, deaths, recovered};

    return (
      <div className={styles.container}>
        <MainCharts data = {data} />
        <StatesPicker handleStateChange={this.handleStateChange} />
        <StateCharts stateData={stateData} />
        {districtData ? <DistrictData data={districtData} show={this.state.showDistrictData} /> : null}
      </div>
    );
  }
}
