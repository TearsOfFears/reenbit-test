import React from 'react';
import styles from './MainLayout.module.scss';
function MainLayout(props) {
  const { center } = props;
  return <div className={center ? styles.main__center : styles.main}>{props.children}</div>;
}

export default MainLayout;
