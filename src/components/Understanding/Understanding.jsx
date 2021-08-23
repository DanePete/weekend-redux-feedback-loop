// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { CircularInput,CircularTrack, CircularProgress, CircularThumb} from 'react-circular-input';

function UnderStanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(store => store.global);
  console.log('global', global);
  const [understand, setUnderstanding] = useState(global.understand || 0.0);
  const stepValue = v => Math.round(v * 10) / 10;

  /**
   * Handle Understanding
   * sets our local dome state on event change
   */  
  const handleUnderstanding = (event) => {
    setUnderstanding(event.target.value);
  }

  /**
   * Add Feedback
   * Handles our form reload prevention as well as dispatching our payload
   */
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
      <div className="form-group mx-sm-3 mb-2">
        <div className="circle-container">
          <CircularInput value={stepValue(understand)} onChange={v => setUnderstanding(stepValue(v))} >
            <CircularTrack />
            <CircularProgress />
            <CircularThumb />
            <text x={100} y={100} fill="rgb(255, 255, 255)" textAnchor="middle" dy="0.3em" fontWeight="bold">
            {Math.round(stepValue(understand) * 100)}%
            </text>
          </CircularInput>
        </div> 
        <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
        <input className="btn btn-primary" type='submit' value='Next' />
      </div>
      </form>
    </div>
  )
}

export default UnderStanding;