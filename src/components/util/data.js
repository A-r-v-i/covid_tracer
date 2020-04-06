import axios from "axios";

const url = "https://covid19.mathdro.id/api";

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
