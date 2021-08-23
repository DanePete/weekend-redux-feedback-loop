import { useHistory } from 'react-router-dom';
function Success() {
  const history = useHistory();
  return (
    <>
      <h1 className='thank-you'>Thank You!</h1>
      <button className="btn btn-primary" onClick={() => history.push('/')}>Leave New FeedBack</button>
    </>
  )
}

export default Success;