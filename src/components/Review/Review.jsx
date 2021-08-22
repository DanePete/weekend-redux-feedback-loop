// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Review() {
  const history = useHistory();

  const global = useSelector(store => store.global);
  console.log('global', global);

  return (
    <div className="PizzaContainer">
      <h1>Review Your Feedback</h1>
      <h3>Feeling: {global.howfeeling}</h3>
      <h3>Understanding: {global.understand}</h3>
      <h3>Support: {global.supported}</h3>
      <h3>Comments: {global.comment}</h3>
    </div>
  )
}

export default Review;