
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Admin() {

  let [response, setResponse] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, [])

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    }).then(response => { 
      setResponse(response.data);
      console.log('resonse data', response.data);
    }).catch(error => {
      console.log('Failed to GET:', error);
      alert('FAILED get request');
    });
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {response.map((order) => {
            {console.log('our order',order)}
            return (<tr>
              <td>
                {order.feeling}
              </td>
              <td>
                {order.understanding}
              </td>
              <td>
                {order.support}
              </td>
              <td>
                {order.comments}
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  )
}

export default Admin; 