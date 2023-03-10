import React from 'react';
import Loader from '../../../ui/Loader/Loader';
import styles from './Detail.module.scss';
import Article from '../../../ui/Article/Article';
function Detail(props) {
  const { data, isLoading, error } = props;
  const { name, image, gender, status, species, origin, type } = data;
  const renderInformations = [
    { title: 'Gender', subtitle: gender },
    { title: 'Status', subtitle: status },
    { title: 'Specie', subtitle: species },
    { title: 'Origin', subtitle: origin?.name },
    { title: 'Type', subtitle: type ? type : 'Unknown' },
  ];
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__image}>
        <img src={image} alt={image} />
      </div>
      <h2>{name}</h2>
      <h3>Informations</h3>
      {renderInformations.map(({ title, subtitle }) => (
        <Article key={title} title={title} subtitle={subtitle} isBorder />
      ))}
    </div>
  );
}

export default Detail;
