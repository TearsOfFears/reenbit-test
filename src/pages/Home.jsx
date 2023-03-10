import React, { useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import List from '../components/Home/List/List';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Input from '../ui/Input/Input';
import Logo from '../assets/logo.png';
import { useSearchParams } from 'react-router-dom';
function Home() {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('name'));
  const { data, isLoading, error } = useCharacters(value);
  return (
    <MainLayout>
      <img src={Logo} />
      <Input setValue={setValue} value={value} isLoading={isLoading} />
      <List data={data} isLoading={isLoading} error={error} />
    </MainLayout>
  );
}

export default Home;
