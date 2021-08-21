// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function HowFeeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  let [productToAdd, setProductToAdd] = useState({ name: '', feeling: 0, understand: 0, supported: 0 });
  const feedback = useSelector(store => store.feedBack);

  const handleFeedBackNumChange = (event) => {
    setProductToAdd({      
        ...feedback,
        feeling: event.target.value,      
    });
  }

  const goToCustInformation = () => {
    let isConfirmed = confirm("Are you sure this is how you feel?")

    
    if (isConfirmed) {
      history.push('/customer-information');
    }
  }

  const addFeedback = (event) => {
    event.preventDefault();
    
    // Dispatch an action
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: productToAdd
    });

    history.push('/understanding');
  }

  return (
    <div className="PizzaContainer">
      <h1>How are you feeling today?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleFeedBackNumChange}
          value= {productToAdd.feeling}
          type='number'
          placeholder='Feeling?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default HowFeeling;