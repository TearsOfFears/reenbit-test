import React, { useEffect } from 'react';
import { GoogleLogin as Login } from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
function GoogleLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  }, []);
  const responseGoogle = (response) => {
    if (response.tokenId) {
      localStorage.setItem('token', response.tokenId);
      return navigate('/');
    }
  };
  return (
    <Login
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText='Login with Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLogin;
