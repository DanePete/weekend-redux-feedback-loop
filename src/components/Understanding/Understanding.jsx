// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function UnderStanding() {

  // const feedback = useSelector(store => store.feedBack);
  const history = useHistory();
  const dispatch = useDispatch();

  let [understand, setUnderstanding] = useState('');

  const global = useSelector(store => store.global);

  console.log('global', global);

  const handleUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  }

  const addFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UNDERSTANDING',
      payload: {understand: understand}
    });
    history.push('/supported');
  }

  return (
    <div className="PizzaContainer">
      <h1>How Well are you understanding the content?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleUnderstanding}
          value= {understand}
          type='number'
          placeholder='Understanding?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default UnderStanding;