import { useState } from 'react';
import { useAuth } from '../context/Auth';

const Info = () => {
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || '');
  const save = (e) => {
    e.preventDefault();
  }

  return (
    <div className='page-container'>
      <form onSubmit={save}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
          style={{ width: '80%' }}
        />
        <div className='label'>Name</div>

        <br />
        <br />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          style={{ width: '80%' }}
          disabled
        />
        <div className='label'>Email</div>

        <br />
        <br />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
          style={{ width: '80%' }}
        />
        <div className='label'>Phone Number</div>

        <button style={{ marginTop: '36px' }} className='main-btn' type='submit'>Save</button>
      </form>
    </div>
  );
}

export default Info;
