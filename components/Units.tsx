import React from 'react';
import { filterData, filteredUnits } from '../utils/filterData';
import styles from '../styles/Units.module.css';

const Units = ({
  location,
  activityType,
  expanded,
  dateRange,
}: {
  location: object;
  activityType: string;
  expanded: boolean;
  dateRange: string;
}) => {
  const { activities }: { activities: Array<object> } = location;
  const dateBreakdown = { year: 0, month: 1, week: 2, today: 3 };
  const filteredActivities = filterData(activities);

  const unitActivityType =
    'unit' + activityType[0].toUpperCase() + activityType.slice(1);

  let collapsedActivity = filteredActivities[dateBreakdown[dateRange]];

  const units = filteredUnits(activities, unitActivityType);

  return (
    <div className={styles.container} key={location._id}>
      {expanded ? (
        <>
          <h3 className={styles.header}>{location.locationInfo[0].siteName}</h3>
          <h3 className={styles.activityHead}>{activityType}</h3>
          <h3 className={styles.sizeHead}>Size</h3>
          <h3 className={styles.subHead}>Year</h3>
          <h3 className={styles.subHead}>Month</h3>
          <h3 className={styles.subHead}>Week</h3>
          <h3 className={styles.subHead}>Today</h3>
          {units.map((unit, index) => {
            return (
              <>
                <h4 className={styles.size} key={index}>
                  {unit.unitType}-{unit.unitSize}
                </h4>
                <h4 className={styles.timeFrame}>{unit.year}</h4>
                <h4 className={styles.timeFrame}>{unit.month}</h4>
                <h4 className={styles.timeFrame}>{unit.week}</h4>
                <h4 className={styles.timeFrame}>{unit.today}</h4>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h3 className={styles.header}>{location.locationInfo[0].siteName}</h3>
          <h3 className={styles.activityHead}>{activityType}</h3>
          <h3 className={styles.sizeHead}>Size</h3>
          <h3 className={styles.subHead}>{dateRange}</h3>

          {units.map((unit, index) => {
            return (
              <>
                <h4 className={styles.size} key={index}>
                  {unit.unitType}-{unit.unitSize}
                </h4>
                <h4 className={styles.timeFrame}>{unit[dateRange]}</h4>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Units;
