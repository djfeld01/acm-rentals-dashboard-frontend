import type { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Link from 'next/link';

import { useState } from 'react';
import LocationCard from '../../components/LocationCard';
import ActivityTypeSelector from '../../components/ActivityTypeSelector';
import TimeframeSelector from '../../components/TimeframeSelector';
import ExpandedSelector from '../../components/ExpandedSelector';
import Units from '../../components/Units';

const Dashboard: NextPage = ({ data }) => {
  const [activityType, setActivityType] = useState('moveIns');
  const [selectedLocation, setSelectedLocation] = useState(data[0]);
  const [expanded, setExpanded] = useState(false);
  const [dateRange, setDateRange] = useState('today');

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };
  const handleExpanding = (e) => {
    e.target.value === 'expand' ? setExpanded(true) : setExpanded(false);
  };

  return (
    <div className={styles.pageContainer}>
      <ActivityTypeSelector handleChange={handleActivityTypeChange} />
      <ExpandedSelector handleChange={handleExpanding} />
      {!expanded && <TimeframeSelector handleChange={handleDateRangeChange} />}
      <div
        className={
          expanded
            ? styles.locationCardContainer
            : styles.locationCardContainerCollapsed
        }
      >
        {data.map((location) => {
          return (
            <LocationCard
              location={location}
              activityType={activityType}
              setSelectedStore={() => setSelectedLocation(location)}
              dateRange={dateRange}
              expanded={expanded}
            />
          );
        })}
      </div>

      <div className={styles.unitContainer}>
        <Units
          location={selectedLocation}
          activityType={activityType}
          expanded={expanded}
          dateRange={dateRange}
        />
      </div>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios(
    `https://acm-rentals-dashboard-1.herokuapp.com/api/v1/tenantActivity/dashboard`
  );
  const { data } = response.data;

  return {
    props: { data },
  };
};