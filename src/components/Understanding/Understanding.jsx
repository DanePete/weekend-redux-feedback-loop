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

  const global = useSelector(store => store.global);
  let [understand, setUnderstanding] = useState(global.understand);

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
      <div className="form-group mx-sm-3 mb-2">
        <input
          onChange={handleUnderstanding}
          value= {understand}
          className="form-control"
          type='number'
          placeholder='Understanding?'
          required
        />
        <input className="btn btn-primary" type='submit' value='Next' />
      </div>
      </form>
    </div>
  )
}

export default UnderStanding;