import React from 'react';
import styles from './MainLayout.module.scss';
function MainLayout(props) {
  return <div className={styles.main}>{props.children}</div>;
}

export default MainLayout;
