
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Admin() {

  let [response, setResponse] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, [])

  const fetchOrders = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then(response => { 
      setResponse(response.data);
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
            <th>Name</th>
            <th>Time Ordered Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {response.map((order) => {
            {console.log('our order',order)}
            return (<tr>
              <td>
                {order.customer_name}
              </td>
              <td>
                {order.time}
              </td>
              <td>
                {order.type}
              </td>
              <td>
                {order.total}
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  )
}

export default Admin; 