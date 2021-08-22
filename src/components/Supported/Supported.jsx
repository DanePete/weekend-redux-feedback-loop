// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { CircularInput,CircularTrack, CircularProgress, CircularThumb} from 'react-circular-input';

function Supported() {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(store => store.global);
  
  let [supported, setSupported] = useState(global.supported || 0.0);
  const stepValue = v => Math.round(v * 10) / 10;

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
      <div className="circle-container">
        <CircularInput value={stepValue(supported)} onChange={v => setSupported(stepValue(v))} >
            <CircularTrack />
            <CircularProgress />
            <CircularThumb />
            <text x={100} y={100} textAnchor="middle" fill="rgb(255, 255, 255)" dy="0.3em" fontWeight="bold">
            {Math.round(stepValue(supported) * 100)}%
            </text>
          </CircularInput>
      </div>
        <input
          onChange={handleSupported}
          value= {supported}
          className='form-control'
          type='number'
          placeholder='Supported?'
          required
        />
        
        <input className="btn btn-primary" type='submit' value='Next' />
      </form>
    </div>
  )
}

export default Supported;