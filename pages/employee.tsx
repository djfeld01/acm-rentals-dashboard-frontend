import type { GetServerSideProps, NextPage } from 'next';
import styles from '../../styles/Home2.module.css';
import axios from 'axios';
import Link from 'next/link';

import { useState, useRef } from 'react';
import StartDateEndDateForm from '../components/StartDateEndDateForm';

const Employee: NextPage = ({ data }) => {
  return <StartDateEndDateForm />;
};

export default Employee;
