
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
function Admin() {
  const history = useHistory();
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

  const deleteItem = (id) => {
    axios.delete(`/api/feedback/${id}`)
        .then( response => {
            fetchFeedback();
        })
        .catch( error => {
            console.log('Error on Delete', error);
        });
  };

  return (
    <>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {response.map((item) => {
            return (<tr>
              <td>
                {item.feeling}
              </td>
              <td>
                {item.understanding}
              </td>
              <td>
                {item.support}
              </td>
              <td>
                {item.comments}
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
      <button className="admin-btn btn btn-primary" onClick={() => history.push('/')}>Back To Survey</button>
    </>
  )
}

export default Admin; 