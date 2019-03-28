import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default () => (
  <Layout>
    <Seo title="Home" description="Some description here." />
    <section className="section">
      <div className="container">
        <h1 className="title">Home</h1>
        <p>
          Donec ut erat bibendum, convallis tortor ut, rutrum nisl. Etiam
          bibendum leo quam, eu facilisis ipsum vestibulum ac. Phasellus
          ultrices tempor vehicula. Sed mattis sem nec erat tempor, in cursus
          dui viverra. Sed nec hendrerit libero. Nullam consequat arcu ut
          molestie feugiat. Fusce malesuada egestas risus quis sollicitudin.
          Aliquam erat volutpat. Nulla diam metus, dignissim ac sapien non,
          accumsan euismod nibh. Quisque mollis eu augue sit amet facilisis.
          Pellentesque venenatis porta orci, non laoreet dui malesuada vel.
          Donec eu tempor nisi.
        </p>
      </div>
    </section>
  </Layout>
);
