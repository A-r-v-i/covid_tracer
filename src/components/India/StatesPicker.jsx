import React, {useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchStateList} from '../util/data';


import styles from './statespicker.module.css';

const StatesPicker = ({handleStateChange}) => {
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const initialStates = await fetchStateList();

      const states = initialStates.map((_state) => _state.state);
      //console.log(states);
      setFetchedStates(states);
    }

    fetchStates();
  },[setFetchedStates]);


  const stateOptionList=(fetchedStates)=> {
    return fetchedStates.map((state, i) => <option key={i} value={state}>{state}</option>)
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">select state</option>
        {stateOptionList(fetchedStates)}
      </NativeSelect>
    </FormControl>
  )
}

export default StatesPicker;
