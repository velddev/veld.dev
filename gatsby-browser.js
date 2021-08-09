import React from 'react';
import Layout from './src/components/layout';

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
};