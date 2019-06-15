import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

const HeadingWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default HeadingWrapper;
