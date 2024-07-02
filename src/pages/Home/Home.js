import React from 'react';

import { Typography } from '@mui/material';
import { PiMegaphoneBold } from 'react-icons/pi';

import Loading from '../Loading/Loading';

import HomeLogic from './HomeLogic';

function Home() {
  const { pageStatus } = HomeLogic();

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <Typography variant='h1' component='h1' align='center'>
        <PiMegaphoneBold />
        Welcome to the Home Page
      </Typography>
    </>
  );
}

export default Home;
