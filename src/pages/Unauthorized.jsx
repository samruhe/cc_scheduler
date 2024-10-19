import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div className='page-container'>
    <h1>Unauthorized</h1>
    <p>You don't have permission to access this page.</p>
    <Link to='/login'>Go back to login.</Link>
  </div>
);

export default Unauthorized;
