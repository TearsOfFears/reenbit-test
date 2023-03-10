import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './List.module.scss';
import Item from '../Item/Item';
import Loader from '../../../ui/Loader/Loader';

function List(props) {
  const { data, isLoading, error } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const handleDetail = (id) => {
    navigate(`details/${id}`, { state: { from: location } });
  };
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <ul className={styles.list}>
      {data.map((character) => {
        const { id, name, image, species } = character;
        return (
          <Item
            key={id}
            id={id}
            name={name}
            image={image}
            species={species}
            handleDetail={handleDetail}
          />
        );
      })}
    </ul>
  );
}

export default List;
