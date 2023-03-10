import React from 'react';
import { useCharacterDetails } from '../hooks/useCharacterDetails';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Detail from '../components/Details/Detail/Detail';
import Button from '../ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import Back from './../assets/arrow_back_24px.svg';
function Details() {
  const { data, isLoading, error } = useCharacterDetails();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.state?.from) {
      navigate(`/${location.state.from.search}`);
    } else {
      navigate(`/`);
    }
  };
  return (
    <>
      <Button handleClick={handleClick}>
        <img src={Back} /> Go back
      </Button>
      <MainLayout>
        <Detail data={data} isLoading={isLoading} error={error} />
      </MainLayout>
    </>
  );
}

export default Details;
