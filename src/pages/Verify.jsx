import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyLogin, useAuth } from '../context/Auth';

const Verify = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  let [loading, setLoading] = useState(false);
  let [message, setMessage] = useState('');
  let [verified, setVerified] = useState(false);

  const verifyToken = async(token) => {
    setLoading(true);

    const user = await verifyLogin(token);
    setLoading(false);
    setVerified(!!user);

    if (!!user) {
      setUser(user);
      setMessage('Your email has been verified.');
    } else {
      setMessage('Token has expired or is invalid. Please try to log in again.');
    }
  }

  useEffect(() => {
    verifyToken()
  });

  const goDashboard = () => {
    navigate('/dashboard');
  }

  const goLogin = () => {
    navigate('/login');
  }

  if (loading) return (
    <div>Loading...</div>
  )

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>{message}</div>
      {verified ? 
        (
          <button onClick={goDashboard} className='main-btn'>Continue</button>
        ) : 
        (
        <button onClick={goLogin} className='main-btn'>Login</button>
        )
      }
    </div>
  );
};

export default Verify;
