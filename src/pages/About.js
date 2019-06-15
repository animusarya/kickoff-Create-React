import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Content, Heading, Modal } from '../components/elements';

export default () => (
  <Layout>
    <Seo title="About" description="Some description here." />
    <section className="section">
      <div className="container">
        <Heading title="About" />
        <Content
          className="has-text-danger"
          title="I am title"
          data=" ssssss Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fermentum dapibus arcu, id sagittis lectus blandit at. Proin
          scelerisque, nulla eget accumsan tempor, enim tortor malesuada lorem,
          a venenatis est quam et lectus. Curabitur luctus libero vel enim
          placerat, ut posuere odio porta. Maecenas porta elit a tortor
          faucibus, ut vestibulum metus aliquam. Maecenas ac aliquam dolor.
          Nulla facilisi. Fusce dictum, turpis vel pulvinar fermentum, lectus
          urna porta elit, a varius augue lacus in justo. Ut augue quam,
          malesuada a viverra eget, euismod non arcu. Curabitur non condimentum
          ex, pharetra elementum leo. Sed fringilla congue risus ut ultrices.
          Morbi euismod quam egestas turpis maximus sagittis. Suspendisse porta
          varius elit, eget maximus purus suscipit quis. Morbi tincidunt nunc
          diam, a pharetra enim commodo a. Phasellus faucibus cursus leo a
          fermentum. Fusce sit amet nulla eu odio tristique accumsan. Nulla eu
          neque suscipit, porta tortor a, faucibus elit. Vivamus id risus
          tempus, ultrices ligula vel, pulvinar eros. Morbi fringilla orci ante,
          ac gravida magna pellentesque rhoncus. Nullam placerat mollis diam, at
          fringilla tellus dignissim ac. Proin pellentesque vehicula elit sed
          commodo. Cras vitae tempus augue."
        />
      </div>
      <Modal />
    </section>
  </Layout>
);
