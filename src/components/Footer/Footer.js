import { useHistory } from 'react-router-dom';
function Footer() {
  const history = useHistory();
  return (
    <>
      <button className="admin-btn btn btn-primary" onClick={() => history.push('/admin')}>Admin Screen</button>
    </>
  )
}

export default Footer;