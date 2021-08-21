// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function HowFeeling() {
  const history = useHistory();
  const dispatch = useDispatch();

  let [howFeeling, setHowFeeling] = useState('');

  const handleHowFeeling = (event) => {
    setHowFeeling(event.target.value);
  }

  const addFeedback = (event) => {
    event.preventDefault();
    
    // Dispatch an action
    dispatch({
      type: 'HOW_FEELING',
      payload: howFeeling
    });

    history.push('/understanding');
  }

  return (
    <div className="PizzaContainer">
      <h1>How are you feeling today?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleHowFeeling}
          value= {howFeeling}
          type='number'
          placeholder='Feeling?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default HowFeeling;