import React, { useState, useRef } from 'react';
import styles from './AddNotation.module.scss';
function AddNotation(props) {
  const [blocks, setBlocks] = useState(['a', 'b', 'c', 'd', 'd']);
  const handleAdd = (e, beforeIndex) => {
    setBlocks((prev) => {
      prev.splice(beforeIndex, 0, 'Type');
      return [...prev.sort((a, b) => a - b)];
    });
  };
  const handleDelete = (e, index) => {
    setBlocks((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const handleChangeValue = (e, inx) => {
    const value = e.target.value;
    setBlocks((prev) => {
      prev[inx] = value;
      return [...prev];
    });
  };
  // console.log(ref);
  return (
    <section className={styles.wrapper}>
      {blocks.length > 0
        ? blocks.map((el, inx) => {
            return (
              <div key={inx}>
                <textarea wrap='soft' value={el} onChange={(e) => handleChangeValue(e, inx)} />
                <button onClick={(e) => handleAdd(e, inx + 1)} />
                <button className={styles.delete} onClick={(e) => handleDelete(e, inx)}>
                  x
                </button>
              </div>
            );
          })
        : 'Empty'}
    </section>
  );
}

export default AddNotation;
