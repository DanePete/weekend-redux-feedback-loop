// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Supported() {

  // const feedback = useSelector(store => store.feedBack);
  // allows us to access a history variable
  const history = useHistory();
  const dispatch = useDispatch();

  let [supported, setSupported] = useState('');

  const global = useSelector(store => store.global);
  console.log('global', global);


  const handleSupported = (event) => {
    setSupported(event.target.value);
  }

  const addFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SUPPORTED',
      payload: {supported: supported}
    });
    history.push('/comments');
  }

  return (
    <div className="PizzaContainer">
      <h1>How well are you being supported</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleSupported}
          value= {supported}
          type='number'
          placeholder='Supported?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Supported;