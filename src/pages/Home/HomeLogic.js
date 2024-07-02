import axios from 'axios';
import { useEffect, useState } from 'react';
import PageLogicHelper from '../../helpers/PageLogicHelper';

const HomeLogic = () => {
  const { useLoadPage, API_ORIGIN, pageStatus, setPageStatus } =
    PageLogicHelper();

  useLoadPage(async () => {
    setPageStatus('recent');
  });

  return {
    pageStatus,
  };
};

export default HomeLogic;
