// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function HowFeeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(store => store.global);
  let [howFeeling, setHowFeeling] = useState(global.howfeeling);

  const handleHowFeeling = (event) => {
    setHowFeeling(event.target.value);
  }

  const addFeedback = (event) => {

    console.log('event stuff', event);

    event.preventDefault();
    
    // Dispatch an action
    dispatch({
      type: 'HOW_FEELING',
      payload: {howfeeling: howFeeling}
    });

    history.push('/understanding');
  }

  return (
    <div className="PizzaContainer">
      <h1>How are you feeling today?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleHowFeeling}
          className="form-control"
          value= {howFeeling}
          type='number'
          placeholder='Feeling?'
          required
        />
        
        <input className="btn btn-primary" type='submit' value='Next' />
      </form>
    </div>
  )
}

export default HowFeeling;