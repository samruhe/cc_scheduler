import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/Auth';

const Layout = () => {
  const { user } = useAuth();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#EEEEEE', marginBottom: '24px' }}>

        <Link to='/' className='header-link link'>CC Scheduler</Link>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
          {!user && <Link to='/login' className='header-link link'>Login</Link>}
          {!!user && (
            <>
              <Link to='/dashboard' className='header-link link'>Dashboard</Link>
              <Link to='/account' className='header-link link'>Account</Link>
            </>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
