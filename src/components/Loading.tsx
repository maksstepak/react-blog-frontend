import React from 'react';
import styled from 'styled-components';
import { fontSizes, colors } from '../styles';

const StyledH3 = styled.h3`
  text-align: center;
  font-size: ${fontSizes.large};
  color: ${colors.blue};
`;

const Loading: React.FC = () => {
  return <StyledH3>Loading...</StyledH3>;
};

export default Loading;
