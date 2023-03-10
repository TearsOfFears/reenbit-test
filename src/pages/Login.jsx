import React, { useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import List from '../components/Home/List/List';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Input from '../ui/Input/Input';
import Logo from '../assets/logo.png';
import { useSearchParams } from 'react-router-dom';
import GoogleLogin from '../components/Login/GoogleLogin/GoogleLogin';
function Login() {
  return (
    <MainLayout>
      <GoogleLogin />
    </MainLayout>
  );
}

export default Login;
