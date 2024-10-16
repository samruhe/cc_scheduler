import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';

import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [getCode, setGetCode] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const emailForSignIn = window.localStorage.getItem('emailForSignIn');
  if (emailForSignIn) {
    setEmail(emailForSignIn);
    window.localStorage.removeItem('emailForSignIn');
    setGetCode(true);
  }

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/login',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  const sendEmailLink = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        alert('success')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ...
      });
  }

  const login = useCallback((e) => {
    e.preventDefault();
    setUser({ email });
    navigate('/dashboard');
  },
  [setUser, email, navigate]);

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ boxShadow: '0px 0px 4px #D3D3D3', textAlign: 'center', padding: '24px', borderRadius: '12px', width: '400px', maxWidth: '80%' }}>
        <h1 style={{ marginTop: 0 }}>Login</h1>

        <form onSubmit={login}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            style={{ width: '80%' }}
          />
          {getCode && <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder='Enter code'
            style={{ width: '80%' }}
          />}
          <br />
          <button style={{ marginTop: '36px' }} className='main-btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
