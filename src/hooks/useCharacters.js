import { useEffect, useState } from 'react';
import axios from '../axios';
import { useSearchParams } from 'react-router-dom';
export default function useCharacters(name) {
  const [_, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState({ data: [], isLoading: true, error: '' });
  useEffect(() => {
    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
      if (!name) name = '';
    }
    axios
      .get(`character/?name=${name}`)
      .then(({ data }) => {
        const sortedData = data.results.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8);
        setCharacters({ data: sortedData, isLoading: false });
      })
      .catch((e) => setCharacters({ data: [], isLoading: false, error: e.response.data.error }));
  }, [name]);
  return characters;
}
