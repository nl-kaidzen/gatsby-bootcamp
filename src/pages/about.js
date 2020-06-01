import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const AboutPage = () => {
    return(
        <Layout>
            <h1>About me</h1>
            <p>I am a Frontend developer from Saint Petersburg with more than a two years of a strong production experiance.</p>
            <p>If you need a developer, please <Link to="/contacts">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage;