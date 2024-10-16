import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>The page you tried to access doesn't exist.</p>
    <Link to='/'>Go home.</Link>
  </div>
);

export default NotFound;
