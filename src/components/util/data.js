import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const covidUrl = "https://api.covid19india.org/data.json";
const covidStateUrl =
  "https://api.covid19india.org/v2/state_district_wise.json";

export const fetchData = async (country) => {
  let dynamicUrl = url;
  if (country) {
    dynamicUrl = `${url}/countries/${country}`;
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

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountriesList = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => [country.name, country.iso2]);
  } catch (err) {
    console.log(err);
  }
};

// ==================India & States====================

export const fetchIndiaData = async () => {
  try {
    const data = await axios.get(covidUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchStateData = async (state) => {
  try {
    const {
      data: { statewise },
    } = await axios.get(covidUrl);
    const stateData = statewise.find((_state) => {
      return _state.state === state;
    });
    return stateData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchStateList = async () => {
  try {
    const { data } = await axios.get(covidStateUrl);
    return data.filter((_state) => _state.state);
  } catch (err) {
    console.log(err);
  }
};

export const fetchStateDistrictData = async (state) => {
  try {
    const { data } = await axios.get(covidStateUrl);
    const [stateData] = data.filter((_data) => _data.state === state);
    return stateData.districtData;
  } catch (err) {
    console.log(err);
  }
};
