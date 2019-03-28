import React from 'react';

import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <h1 className="title">Contact</h1>
        <ContactForm />
      </div>
    </section>
  </Layout>
);
