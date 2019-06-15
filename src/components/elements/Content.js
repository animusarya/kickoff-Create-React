import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 0.8rem;
`;

const Content = ({ title, data, className }) => (
  <Wrapper>
    <p className="heading">{title}</p>
    <p className={`has-text-weight-semibold is-size-5 ${className}`}>{data}</p>
  </Wrapper>
);

Content.defaultProps = {
  title: 'Stranger',
};

Content.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string.isRequired,
};

export default Content;
