// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
  const global = useSelector(store => store.global);

  const submitFeedback = () => {
    axios({
        method: 'POST',
        url: '/api/feedback',
        data: { ...global}
    }).then(response => {
        dispatch({
            type: 'CLEAR'
        });
        history.push('/');
    }).catch(error => {
        console.log('Failed to POST: ', error);
        alert('Failed to POST. See console for details.');
    });
}

  return (
    <div className="PizzaContainer">
      <h1>Review Your Feedback</h1>
      <h3>Feeling: {global.howfeeling}</h3>
      <h3>Understanding: {global.understand}</h3>
      <h3>Support: {global.supported}</h3>
      <h3>Comments: {global.comment}</h3>
      <button className="btn btn-primary" onClick={() => history.goBack()}>Back</button>
      <button className="btn btn-primary" onClick={submitFeedback}>Submit</button>
    </div>
  )
}

export default Review;