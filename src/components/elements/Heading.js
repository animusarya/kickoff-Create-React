import React from 'react';

const Heading = ({ title, size }) => (
  <div>
    <p className={`title is-capitalized is-${size}`}>{title}</p>
  </div>
);

export default Heading;
