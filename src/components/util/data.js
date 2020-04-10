import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const covidUrl = "https://api.covid19india.org/data.json";
const covidStateUrl = "https://api.covid19india.org/v2/state_district_wise.json";

export const fetchData = async (country) => {
  let dynamicUrl = url;
  if(country) {
    dynamicUrl = `${url}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async() => {
  try {
    const {data} = await axios.get(`${url}/daily`);
    //console.log(data);
    return data.map(({confirmed, deaths, reportDate: date}) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date
    }));
    //console.log(modifiedData);
  } catch(err) {
    console.log(err);
  }
}

export const fetchCountriesList = async() => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name );
  }
  catch(err) {
    console.log(err);
  }
}



// ==================India & States====================

export const fetchIndiaData = async() => {
  try {
    const data = await axios.get(covidUrl);
    //console.log(data);
    return data;
  }
  catch(err) {
    console.log(err);
  }
}

export const fetchStateData = async(state) => {
  try {
    const {data: {statewise}} = await axios.get(covidUrl);
    //console.log(statewise);
    const stateData = statewise.find((_state) => {
      return _state.state === state
    })
    return stateData;
  }
  catch(err) {
    console.log(err);
  }
}

export const fetchStateList = async() => {
  try {
    const {data} = await axios.get(covidStateUrl);
    //console.log(data);
    // const stateName = data.filter((_state) => {
    //   console.log(_state.state);
    //   return _state.state
    // })
    return data.filter((_state) => _state.state)
  }
  catch(err) {
    console.log(err);
  }
}

export const fetchStateDistrictData = async(state) => {
  try{
    const {data} = await axios.get(covidStateUrl);
    const [stateData] = data.filter((_data) => _data.state === state);
    //console.log(stateData.districtData);
    return stateData.districtData;
  }
  catch(err) {
    console.log(err);
  }
}