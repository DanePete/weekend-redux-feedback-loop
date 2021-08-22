// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Comments() {

  const feedback = useSelector(store => store.feedBack);
  const history = useHistory();
  const dispatch = useDispatch();

  let [comment, setComment] = useState('');
  
  const global = useSelector(store => store.global);
  console.log('global', global);

  const handleComment = (event) => {
    setComment(event.target.value);
  }

  const addFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'COMMENT',
      payload: {comment: comment}
    });

    history.push('/review');
  }

  return (
    <div className="PizzaContainer">
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={(event) => addFeedback(event)}>
        <textarea
          onChange={handleComment}
          value= {comment}
          type='textarea'
          placeholder='comment?'
        />
        
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Comments;