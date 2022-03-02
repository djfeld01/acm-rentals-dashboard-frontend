import type { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import {
  getToday,
  getYesterday,
  getMonthStart,
  getWeekStart,
} from '../../utils/getDate';
import Activities from '../../components/Activities';
import Link from 'next/link';

type ActivityType = {
  _id: Object;
  units: Object[];
  total: number;
  locationInfo: Object[];
};

const Dashboard: NextPage = ({ activities }) => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>Advantage Rentals Dashboard</h1>
      </nav>
      <div className={styles.page}>
        <div className={styles.sidebar}>
          <Link href="/dashboard/yesterday">
            <a>Yesterday&apos;s Numbers </a>
          </Link>

          <Link href="/dashboard/week">
            <a>Weekly Numbers </a>
          </Link>

          <Link href="/dashboard/month">
            <a>Monthly Numbers </a>
          </Link>

          <Link href="/dashboard/today">
            <a>Today&apos;s Numbers </a>
          </Link>
        </div>

        {activities.length > 0 ? (
          <Activities activities={activities} />
        ) : (
          <div className={styles.container}>No Activity</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const activityType = 'MoveIn';
  const { day } = params;
  let startDate = getToday();
  let endDate = startDate;
  if (day === 'yesterday') {
    startDate = getYesterday();
    endDate = startDate;
  }
  if (day === 'month') {
    startDate = getMonthStart();
  }
  if (day === 'week') {
    startDate = getWeekStart();
  }
  console.log(startDate);
  const response = await axios(
    `https://acm-rentals-dashboard-1.herokuapp.com/api/v1/tenantActivity/totals?activityType=${activityType}&startDate=${startDate}&endDate=${endDate}`
  );
  const activities = response.data.tenantActivities;
  //console.log(activities);
  return {
    props: { activities },
    revalidate: 600,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { day: 'week' } },
      { params: { day: 'yesterday' } },
      { params: { day: 'month' } },
      { params: { day: 'today' } },
    ],
    fallback: 'blocking',
  };
}
