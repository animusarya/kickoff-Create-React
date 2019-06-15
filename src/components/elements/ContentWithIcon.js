import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 0.8rem;
`;

const ContentWithIcon = ({ data, icon }) => (
  <Wrapper>
    <p className="has-text-weight-semibold is-size-5">
      <i className={icon} /> {data}
    </p>
  </Wrapper>
);

ContentWithIcon.defaultProps = {
  data: 'Stranger',
  icon: 'fas fa-money-bill-wave-alt',
};

ContentWithIcon.propTypes = {
  data: PropTypes.string,
  icon: PropTypes.string,
};

export default ContentWithIcon;
