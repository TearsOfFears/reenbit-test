import { useEffect, useState } from 'react';
import { getCharacterDetails } from '../API/api';
import { useParams } from 'react-router-dom';
export function useCharacterDetails() {
  const { characterId } = useParams();
  const [details, setDetails] = useState({ data: {}, isLoading: true, error: '' });
  useEffect(() => {
    getCharacterDetails(characterId)
      .then(({ data }) => {
        setDetails({ data, isLoading: false });
      })
      .catch((e) => setDetails({ data: {}, isLoading: false, error: e.response.data.error }));
  }, []);
  return details;
}
