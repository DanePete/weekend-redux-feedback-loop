// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function UnderStanding() {

  const feedback = useSelector(store => store.feedBack);
  console.log('feedback', feedback[0].feeling);
  // allows us to access a history variable
  const history = useHistory();
  const dispatch = useDispatch();

  let [productToAdd, setProductToAdd] = useState({ name: '', feeling: feedback[0].feeling, understand: 0 });

  const handleFeedBackNumChange = (event) => {
    setProductToAdd({      
        ...productToAdd,
        understand: event.target.value,      
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
    
    console.log('your button was clicked 🦙', event);
    console.log('product to add', productToAdd);
    // Dispatch an action
    dispatch({
      // Our "type" is the message
      // that we want to tell the world about
      type: 'ADD_FEEDBACK',
      payload: productToAdd
    });
  }

  return (
    <div className="PizzaContainer">
      <h1>How Well are you understanding the content?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <input
          onChange={handleFeedBackNumChange}
          value= {productToAdd.understand}
          type='number'
          placeholder='Feeling?'
        />
        
        <input type='submit' value='Submit' />
      </form>

      {/* {list.map((pizza, i) => {
        return <IndividualPizza 
        key={i} 
        id={i}
        pizza={pizza}  
      />
      })}
    <button onClick={goToCustInformation}>NEXT</button> */}
    </div>
  )
}

export default UnderStanding;