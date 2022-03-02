import { NextComponentType } from 'next';
import React from 'react';
import styles from '../styles/Home.module.css';

interface HandleChange {}

function ExpandedSelector({ handleChange }) {
  return (
    <div className={styles.radio}>
      <label>
        <input
          label="Expand Data"
          type="radio"
          value="expand"
          name="expandCollapse"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          label="Collapse Data"
          type="radio"
          value="collapse"
          name="expandCollapse"
          onChange={handleChange}
          defaultChecked
        />
      </label>
    </div>
  );
}

export default ExpandedSelector;
