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
    const updatedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return updatedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async() => {
  try {
    const {data} = await axios.get(`${url}/daily`);
    //console.log(data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    //console.log(modifiedData);
    return modifiedData;
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
