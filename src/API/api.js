import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async (name) => {
  return await instance.get(`character/?page=1&name=${name}`);
};

export const getCharacterDetails = async (characterId) => {
  return await instance.get(`character/${characterId}`);
};
