/**
 * author iWuzhi
 * date 2020-08-22 10:58:08
 */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import AsyncLoader from '../components/AsyncLoader/index';

export default () => {
  const [YourApp, setYourApp] = useState(null);
  useEffect(() => {
    AsyncLoader({ appName: 'your-app-name'}).then(Com => {
      setYourApp(<Com />);
    });
  }, []);
  if (YourApp === null) return <h1>loading...</h1>;
  return YourApp;
};