import React from 'react';
import styles from '../styles/Home.module.css';

function ActivityTypeSelector({ handleChange }) {
  return (
    <div className={styles.radio}>
      <label>
        <input
          label="Move Ins"
          type="radio"
          value="moveIns"
          name="activityType"
          onChange={handleChange}
          defaultChecked
        />
      </label>
      <label>
        <input
          label="Move Outs"
          type="radio"
          value="moveOuts"
          name="activityType"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          label="Net"
          type="radio"
          value="net"
          name="activityType"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ActivityTypeSelector;
