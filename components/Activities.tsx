import { NextComponentType } from 'next';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Activities: NextComponentType = ({ activities }) => {
  const [selectedStore, setSelectedStore] = useState(activities[0]);

  useEffect(() => {
    setSelectedStore(activities[0]);
  }, [activities]);

  return (
    <div className={styles.container}>
      {activities.map((activity) => {
        return (
          <div
            //key={activity._id.location}
            className={
              activity._id === selectedStore._id
                ? styles.flipCardFrontSelected
                : styles.flipCardFront
            }
            onClick={() => setSelectedStore(activity)}
          >
            <h3 className={styles.locationName}>
              {activity.locationInfo[0].siteAbbreviation}
            </h3>
            <h4>{activity._id.activityType}</h4>
            <h3 className={styles.activityTotals}>{activity.total}</h3>
          </div>
        );
      })}
      <div className={styles.unitContainer}>
        <h1 className={styles.unitStoreName}>
          {selectedStore.locationInfo[0].siteName}
        </h1>
        {selectedStore.units.map((unit, index) => {
          return (
            <div key={index} className={styles.unit}>
              <div>{unit.unitType}</div>
              <div> {unit.unitSize}</div> <div>{unit.sizeTotal}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
