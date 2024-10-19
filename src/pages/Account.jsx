import { useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout, useAuth } from '../context/Auth';

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleLogout = useCallback(async(e) => {
      e.preventDefault();

      const success = await logout();

      if (success) {
        setUser(null);
        navigate('/');
      }
    },
    [setUser, navigate]
  );

  const menuItems = [
    {
      name: 'Me',
      path: '/account/info',
    },
    {
      name: 'Accounts',
      path: '/account/accounts',
    },
  ];

  return (
    <div className='page-container page-two-column'>
      <div className='side-nav-container'>
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className='link header-link' style={currentPath === item.path ? { color: 'black' } : { color: '#808080' }}>{item.name}</Link>
        ))}

        <button onClick={handleLogout} className='link-btn' style={{ fontSize: '20px', color: '#840000', marginTop: '36px' }}>Logout</button>
      </div>

      <Outlet />
    </div>
  );
};

export default Account;
