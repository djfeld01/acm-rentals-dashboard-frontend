import { NextComponentType } from 'next';
import React, { useState } from 'react';
import styles from '../styles/LocationCard.module.css';
import { filterData } from '../utils/filterData';

interface ActivitiesProp {}
const LocationCard = ({
  location,
  activityType,
  setSelectedStore,
  expanded,
  dateRange,
  key,
  unitsRef,
}: {
  location: object;
  activityType: string;
  setSelectedStore: any;
  expanded: boolean;
  dateRange: string;
  key: string;
  unitsRef: any;
}) => {
  const { activities }: { activities: Array<object> } = location;
  const dateBreakdown = { year: 0, month: 1, week: 2, today: 3 };
  const filteredActivities = filterData(activities);
  const handleClick = () => {
    setSelectedStore();
    unitsRef.current.scrollIntoView();
  };
  const { currentOccupancy, siteName } = location.locationInfo[0];
  const formattedCurrentOccupancy = currentOccupancy.toFixed(1);
  let collapsedActivity = filteredActivities[dateBreakdown[dateRange]];
  return (
    <div className={styles.container} key={key} onClick={handleClick}>
      {expanded ? (
        <>
          <h3 className={styles.header}>{siteName}</h3>
          <h3 className={styles.activityHead}>{activityType}</h3>
          <h3 className={styles.activityHead}>
            Occupancy: {formattedCurrentOccupancy}%
          </h3>

          <h3 className={styles.subHead}>Year</h3>
          <h3 className={styles.subHead}>Month</h3>
          <h3 className={styles.subHead}>Week</h3>
          <h3 className={styles.subHead}>Today</h3>
          {filteredActivities.map((activity, index) => {
            return (
              <h4 className={styles.timeFrame} key={index}>
                {activity ? activity[activityType] : '0'}
              </h4>
            );
          })}
        </>
      ) : (
        <>
          <h3 className={styles.header}>
            {location.locationInfo[0].siteAbbreviation}
          </h3>
          <h4 className={styles.timeFrame}>
            {collapsedActivity ? collapsedActivity[activityType] : 0}
          </h4>
        </>
      )}
    </div>
  );
};

export default LocationCard;
