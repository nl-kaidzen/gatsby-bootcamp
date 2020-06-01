import React from 'react';

import Layout from '../components/layout/layout';

const ContactsPage = () => {
    return(
        <Layout>
            <h1>Contacts</h1>
            <p>My email: akhabarow@gmail.com</p>
            <p>My skype: xabarov1</p>
            <p>My website: <a href="http://google.com" target="_blank">Google.com</a></p>
        </Layout>
    )
}

export default ContactsPage;
