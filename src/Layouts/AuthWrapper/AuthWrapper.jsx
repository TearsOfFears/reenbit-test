import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthWrapper(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      let decoded = window.atob(token.split('.')[1]);
      const { exp } = JSON.parse(decoded);
      const getTokenLife = exp - Math.round(+new Date() / 1000);
      if (getTokenLife <= 0) {
        localStorage.setItem('token', '');
        return navigate('/login');
      }
    }
    if (!token) {
      return navigate('/login');
    }
  }, [token]);
  return props.children;
}

export default AuthWrapper;
