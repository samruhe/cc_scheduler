import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const RequireAuth = () => {
  const { user, setUser } = useAuth();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(null);



  useEffect(() => {
    const checkSession = async () => {
      const user = await verifyLogin();
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    if (!user) checkSession();
  }, [user, setUser])

  if (isLoggedIn === null) return <></>

  if (!user) {
    return (
      <Navigate
        to={{ pathname: '/unauthorized', state: { from: location } }}
        replace
      />
    );
  }

  return <Outlet />;
};

export const login = (email) => new Promise((resolve, reject) => {
  fetch(`/api/auth/magiclogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
    }),
  })
    .then((res) => res.text())
    .then((res) => {
      if (res === 'error') resolve(false);
      else resolve(true);
    })
    .catch((err) => {
      reject(err);
    });
});

export const verifyLogin = (token) => new Promise((resolve, reject) => {
  fetch(`/api/auth/loggedInUser`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((res) => {
      if (res === 'error' || res === 'Unauthorized') resolve(false);
      else resolve(res.user);
    })
    .catch((err) => {
      reject(err);
    });
});

export const logout = () => new Promise((resolve, reject) => {
  fetch(`/api/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res === 'error' || res === 'Unauthorized') resolve(false);
      else resolve(true);
    })
    .catch((err) => {
      reject(err);
    });
});

export const validateSession = () => new Promise((resolve, reject) => {
  fetch(`/api/auth/validatesession`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res === 'error' || res === 'Unauthorized') resolve(false);
      else resolve(res.user);
    })
    .catch((err) => {
      reject(err);
    });
});
