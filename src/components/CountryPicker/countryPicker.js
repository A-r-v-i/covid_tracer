import React, {useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountriesList} from '../util/data';


import styles from './countrypicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const intialCountries = await fetchCountriesList();
      setFetchedCountries(intialCountries);
      console.log(intialCountries)
    }

    fetchCountries();
  },[setFetchedCountries]);

  const countryOptionList=(fetchedCountries)=> {
    return fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countryOptionList(fetchedCountries)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
