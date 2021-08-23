// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { CircularInput,CircularTrack, CircularProgress, CircularThumb} from 'react-circular-input';


function HowFeeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(store => store.global);

  console.log('global', global);

  const [howFeeling, setHowFeeling] = useState(global.howfeeling || 0.0);
  const stepValue = v => Math.round(v * 10) / 10;

  /**
   * Handle How Feeling
   * sets our local dome state on event change
   */
  const handleHowFeeling = (event) => {
    setHowFeeling(event.target.value);
  }
    
  /**
   * Add Feedback
   * Handles our form reload prevention as well as dispatching our payload
   */
  const addFeedback = (event) => {
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
        <div className="form-group mx-sm-3 mb-2">
          <div className="circle-container">
            <CircularInput value={stepValue(howFeeling)} onChange={v => setHowFeeling(stepValue(v))} >
              <CircularTrack />
              <CircularProgress />
              <CircularThumb />
              <text x={100} y={100 } fill="rgb(255, 255, 255)" textAnchor="middle" dy="0.3em" fontWeight="bold">
              {Math.round(stepValue(howFeeling) * 100)}%
              </text>
            </CircularInput>
          </div>
          <input className="btn btn-primary" type='submit' value='Next' />
        </div>
      </form>
    </div>
  )
}

export default HowFeeling;