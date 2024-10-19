import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../context/Auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = useCallback(async(e) => {
    e.preventDefault();

    const sentEmail = await login(email);
    if (sentEmail) navigate('/login/checkemail')

  }, [email, navigate]);

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ boxShadow: '0px 0px 4px #D3D3D3', textAlign: 'center', padding: '24px', borderRadius: '12px', width: '400px', maxWidth: '80%' }}>
        <h1 style={{ marginTop: 0 }}>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            style={{ width: '80%' }}
          />
          <br />
          <button style={{ marginTop: '36px' }} className='main-btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
