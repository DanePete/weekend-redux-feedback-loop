// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Review() {

  const feedback = useSelector(store => store.feedBack);
  const history = useHistory();
  const dispatch = useDispatch();
  let [productToAdd, setProductToAdd] = useState({ name: '', feeling: 0, understand: 0 });

  const handleFeedBackNumChange = (event) => {
    setProductToAdd({      
        ...feedback[0],
        understand: event.target.value,      
    });
    history.push('/customer-information');
  }

  const goToCustInformation = () => {
    let isConfirmed = confirm("Are you sure this is how you feel?")

    
    if (isConfirmed) {
      history.push('/customer-information');
    }
  }

  const addFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: productToAdd
    });
  }

  return (
    <div className="PizzaContainer">
      <h1>Review</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleFeedBackNumChange}
          value= {productToAdd.understand}
          type='number'
          placeholder='Feeling?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Review;