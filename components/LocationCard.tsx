import React from 'react';
import styles from '../styles/LocationCard.module.css';

function LocationCard({ location, activityType }) {
  const { activities } = location;
  // console.log(activities);
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{location.locationInfo[0].siteName}</h3>
      <h3 className={styles.activityHead}>{activityType}</h3>
      <h3 className={styles.subHead}>Year</h3>
      <h3 className={styles.subHead}>Month</h3>
      <h3 className={styles.subHead}>Week</h3>
      <h3 className={styles.subHead}>Today</h3>
      {activities.map((activity) => {
        return (
          <h4 className={styles.timeFrame}>
            {activity[activityType] ? activity[activityType] : '0'}
          </h4>
        );
      })}
    </div>
  );
}

export default LocationCard;
