import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import GoogleLogin from '../components/Login/GoogleLogin/GoogleLogin';
function Login() {
  return (
    <MainLayout center={true}>
      <GoogleLogin />
    </MainLayout>
  );
}

export default Login;
