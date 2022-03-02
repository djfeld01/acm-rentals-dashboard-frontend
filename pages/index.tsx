import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Link href="/dashboard/">
        <a>Click Here to Enter</a>
      </Link>
    </main>
  );
};

export default Home;
