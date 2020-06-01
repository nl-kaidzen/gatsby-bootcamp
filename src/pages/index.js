import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Andrei, a Frontend developer living in Saint Petersburg</h2>
      <p>Need a developer? <Link to="/contacts">Contact me</Link></p>
    </Layout>
  );
}

export default IndexPage