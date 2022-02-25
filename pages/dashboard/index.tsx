import type { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LocationCard from '../../components/LocationCard';

const Dashboard: NextPage = ({ data }) => {
  const [activityType, setActivityType] = useState('moveIns');
  // const router = useRouter();
  // useEffect(() => {
  //   router.push('/dashboard/today');
  // }, []);
  const handleChange = (e) => {
    setActivityType(e.target.value);
  };
  return (
    <div className={styles.locationCardContainer}>
      <div>
        <input
          type="radio"
          value="moveIns"
          name="activityType"
          onChange={handleChange}
          defaultChecked
        />
        <label>Move Ins</label>
        <input
          type="radio"
          value="moveOuts"
          name="activityType"
          onChange={handleChange}
        />
        <label>Move Outs</label>
        <input
          type="radio"
          value="net"
          name="activityType"
          onChange={handleChange}
        />
        <label>Net</label>
      </div>
      {data.map((location) => {
        return <LocationCard location={location} activityType={activityType} />;
      })}
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios(
    `https://acm-rentals-dashboard-1.herokuapp.com/api/v1/tenantActivity/dashboard`
  );
  const { data } = response.data;

  // console.log(data);
  return {
    props: { data },
  };
};
