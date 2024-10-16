import { useAuth } from '../context/Auth';

const Dashboard = () => {
  const { user, setUser } = useAuth();

  return (
    <div className='page-container'>
      <h1>Dashboard</h1>
      <p>
        Hello <strong>{user?.name || user?.email}</strong>!
      </p>

      <div className='card'>
        <div className='card-title'>Upcoming</div>
        <div style={{ marginTop: '24px', }}>Looks like you have no upcoming notifications.</div>
      </div>
    </div>
  );
};

export default Dashboard;
