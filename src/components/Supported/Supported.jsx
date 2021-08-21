// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Supported() {

  const feedback = useSelector(store => store.feedBack);
  // allows us to access a history variable
  const history = useHistory();
  const dispatch = useDispatch();

  let [productToAdd, setProductToAdd] = useState({ name: '', feeling: 0, understand: 0, supported: 0 });
    console.log('feedback', feedback);
  const handleFeedBackNumChange = (event) => {
    setProductToAdd({      
        ...feedback[feedback.length -1],
        supported: event.target.value,      
    });
  }

  const goToCustInformation = () => {
    let isConfirmed = confirm("Are you sure this is how you feel?")

    
    if (isConfirmed) {
      
    }
  }

  const addFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: productToAdd
    });
    history.push('/review');
  }

  return (
    <div className="PizzaContainer">
      <h1>How well are you being supported</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleFeedBackNumChange}
          value= {productToAdd.supported}
          type='number'
          placeholder='Feeling?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Supported;