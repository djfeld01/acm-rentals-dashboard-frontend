import React from 'react';
import styles from '../styles/Home.module.css';

function TimeframeSelector({ handleChange }) {
  return (
    <div className={styles.radio}>
      <label>
        <input
          label="Today"
          type="radio"
          value="today"
          name="timeFrame"
          onChange={handleChange}
          defaultChecked
        />
      </label>
      <label>
        <input
          label="Weekly"
          type="radio"
          value="week"
          name="timeFrame"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          label="Monthly"
          type="radio"
          value="month"
          name="timeFrame"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          label="Year to Date"
          type="radio"
          value="year"
          name="timeFrame"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default TimeframeSelector;
