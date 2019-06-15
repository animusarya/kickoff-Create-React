import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Heading = ({ title }) => (
  <Wrapper>
    <p className="title">{title}</p>
  </Wrapper>
);

export default Heading;
